#include <cassert>
#include <iostream>
#include <list>
#include <map>
#include <queue>
#include <set>
#include <type_traits>
#include <vector>
#include "my_bitset.hpp"

#define WIDTH_BIT 3
#define HEIGHT_BIT 3
#define MAX_WIDTH (1ul << (WIDTH_BIT))
#define MAX_HEIGHT (1ul << (HEIGHT_BIT))

using std::cin, std::cerr, std::cout;

struct Map {
    using MapDataType = MyBitset;

    void set(int y, int x, int val) {
        assert(val < 5);
        int pos = (y * m_width + x) * 3;
        m_map_bits.setRange(pos, pos + 2, val);
        // m_map_bits.set(pos, val & 1);
        // m_map_bits.set(pos + 1, val & 2);
        // m_map_bits.set(pos + 2, val & 4);
    }
    int get(int y, int x) const {
        int pos = (y * m_width + x) * 3;
        return m_map_bits.getRangeAsWord(pos, pos + 2);
        // return (m_map_bits[pos + 2] << 2) | (m_map_bits[pos + 1] << 1) |
        //        m_map_bits[pos];
    }

    void setSize(int w, int h) {
        m_width = w, m_height = h;
        m_map_bits.resize(w * h * 3);
    }
    void setMapBits(MyBitset bits) {
        assert(bits.size() == width() * height() * 3ul);
        m_map_bits = bits;
    }

    const MapDataType& map_bits() const { return m_map_bits; }
    int width() const { return m_width; }
    int height() const { return m_height; }

    Map(const Map& m)
        : m_map_bits(m.map_bits()), m_width(m.width()), m_height(m.height()) {}
    Map(const MapDataType& bits, int w, int h)
        : m_map_bits(bits), m_width(w), m_height(h) {}
    Map() : m_map_bits(), m_width(0), m_height(0) {}

    Map operator=(const Map& m) {
        m_map_bits = m.m_map_bits;
        m_width = m.m_width;
        m_height = m.m_height;
        return *this;
    }

 private:
    MapDataType m_map_bits;
    int m_width, m_height;
};
struct AStar {
    class MapWithState : public Map {
        MapWithState(const Map& m)
            : Map(m),
              bonus(0),
              step(0),
              map_score(CalculateScore(m)),
              operations() {
        }  // only used in AStar::MapWithState::generate(const Map&)
     public:
        int bonus;
        int step;
        int map_score;
        std::vector<std::pair<int, int>> operations;

        static MapWithState generate(const Map& m) { return MapWithState(m); }

        MapWithState() : Map(), bonus(0), step(0), map_score(0), operations() {}
        MapWithState(const MapWithState& m)
            : Map(m.map_bits(), m.width(), m.height()),
              bonus(m.bonus),
              step(m.step),
              map_score(m.map_score),
              operations(m.operations) {}

        static int CalculateScore(const Map& m) {
            int s = 0;
            for (int i = 0; i < m.height(); ++i) {
                for (int j = 0; j < m.width(); ++j) {
                    int x = m.get(i, j);
                    if (x)
                        s += 5 - x;
                }
            }
            return s;
        }

        friend std::ostream& operator<<(std::ostream& out,
                                        const MapWithState& m) {
            out << "State(" << m.step << ',' << m.bonus << ',' << m.map_score
                << ',';

            if (m.operations.empty()) {
                out << "None";
            } else {
                out << '{' << std::to_string(m.operations.rbegin()->second)
                    << ',' << std::to_string(m.operations.rbegin()->first)
                    << '}';
            }

            out << "),\tMap:{";
            for (int i = 0; i < m.height(); ++i) {
                out << "|"[i == 0];
                for (int j = 0; j < m.width(); ++j) {
                    out << m.get(i, j);
                }
            }
            out << '}';
            return out;
        }

        void print(std::ostream& out) { out << *this; }
    };

    class StateMemory {
        struct MapWithStateLess {
            size_t operator()(const MapWithState& left,
                              const MapWithState& right) const {
                return left.map_bits() < right.map_bits();
            }
        };

        std::set<MapWithState, MapWithStateLess> set;

     public:
        bool update(const MapWithState& m) {
            auto itr = set.find(m);
            if (itr == set.end()) {
                set.insert(m);
                return true;
            }

            int dis = (m.step - m.bonus) - (itr->step - itr->bonus);
            if (dis > 0) {
                return false;
            } else if (dis == 0) {
                dis = m.bonus - itr->bonus;
                if (dis <= 0)
                    return false;
            }

            set.erase(itr);
            set.insert(m);
            return true;
        }

        bool isOutdated(const MapWithState& m) const {
            auto itr = set.find(m);
            if (itr == set.end()) {
                return false;
            }

            return !(m.step == itr->step && m.bonus == itr->bonus);
        }
    } stateMemory;

    struct BurstDrop {
        int y, x;
        enum Direction { Left, Up, Right, Down } dir;
    };

    struct NextMapMemory {
        using KeyType = MyBitset;
        using ValueType =
            std::pair<Map::MapDataType,
                      std::pair<int, int>>;  // {map, {combo, score}}
        std::map<KeyType, ValueType> map;

        static KeyType toKey(const Map::MapDataType& m, int y, int x) {
            int old_size = m.size();
            KeyType k = m;
            k.resize(k.size() + WIDTH_BIT + HEIGHT_BIT);
            k.setRange(old_size, k.size() - 1, x | (y << WIDTH_BIT));
            return k;
        }

        std::pair<ValueType, bool> find(const Map::MapDataType& m,
                                        int y,
                                        int x) {
            KeyType k = toKey(m, y, x);
            auto itr = map.find(k);
            if (itr == map.end()) {
                return make_pair(ValueType(), false);
            } else {
                return make_pair(itr->second, true);
            }
        }

        void set(const Map::MapDataType m,
                 int y,
                 int x,
                 const ValueType& value) {
            map.insert({toKey(m, y, x), value});
        }
    } nextMapMemory;

    bool applyDrop(MapWithState* m, int y, int x, std::list<BurstDrop>* drops) {
        if (m->get(y, x) != 4) {
            m->set(y, x, m->get(y, x) + 1);
            return false;
        }

        m->set(y, x, 0);
        drops->emplace_back(BurstDrop{y, x, BurstDrop::Down});
        drops->emplace_back(BurstDrop{y, x, BurstDrop::Left});
        drops->emplace_back(BurstDrop{y, x, BurstDrop::Up});
        drops->emplace_back(BurstDrop{y, x, BurstDrop::Right});
        return true;
    }

    void moveDrops(MapWithState* m, std::list<BurstDrop>* drops, int* combo) {
        int count = drops->size();
        for (auto itr = drops->begin(); count; --count) {
            switch (itr->dir) {
                case BurstDrop::Left:
                    --itr->x;
                    break;
                case BurstDrop::Up:
                    --itr->y;
                    break;
                case BurstDrop::Right:
                    ++itr->x;
                    break;
                case BurstDrop::Down:
                    ++itr->y;
                    break;
            }
            if (itr->x < 0 || itr->x >= m->width() || itr->y < 0 ||
                itr->y >= m->height())
                itr = drops->erase(itr);
            else if (m->get(itr->y, itr->x) != 0) {
                bool bursted = applyDrop(m, itr->y, itr->x, drops);
                if (bursted)
                    ++*combo;
                itr = drops->erase(itr);
            } else {
                ++itr;
            }
        }
    }

    // 3 combos makes a bonus
    MapWithState generateNextMap(const MapWithState& m, int y, int x) {
        MapWithState nextMap(m);
        std::list<BurstDrop> drops;
        int combo = 0;
        bool memorize = (m.get(y, x) == 4);

        if (memorize) {
            auto result = nextMapMemory.find(m.map_bits(), y, x);
            if (result.second) {
                nextMap.setMapBits(result.first.first);
                ++nextMap.step;
                nextMap.bonus += result.first.second.first;
                nextMap.map_score = result.first.second.second;
                return nextMap;
            }
        }

        bool bursted = applyDrop(&nextMap, y, x, &drops);
        if (bursted)
            ++combo;
        while (drops.size()) {
            moveDrops(&nextMap, &drops, &combo);
        }
        ++nextMap.step;
        nextMap.bonus = combo / 3;
        nextMap.map_score = MapWithState::CalculateScore(nextMap);

        if (memorize) {
            nextMapMemory.set(
                m.map_bits(), y, x,
                std::make_pair(nextMap.map_bits(),
                               std::make_pair(combo / 3, nextMap.map_score)));
        }
        return nextMap;
    }

    class MapWithStateLess {
     public:
        constexpr bool operator()(const MapWithState& left,
                                  const MapWithState& right) const {
            int dis = (left.step - left.bonus) - (right.step - right.bonus);
            if (dis != 0)
                return dis > 0;
            if (left.bonus != right.bonus)
                return left.bonus > right.bonus;
            return left.map_score > right.map_score;
        }
    };

 public:
    MapWithState CalculateOperations(const Map& initial_map) {
        static std::priority_queue<MapWithState, std::vector<MapWithState>,
                                   MapWithStateLess>
            heap;
        unsigned long long obsolete_count = 0, new_count = 0;

        MapWithState best;
        while (heap.size())
            heap.pop();
        MapWithState initial_state = MapWithState::generate(initial_map);
        heap.push(initial_state);
        stateMemory.update(initial_state);

        while (heap.size()) {
            MapWithState m = heap.top();
            heap.pop();

            if (best.width()) {
                int dis = (m.step - m.bonus) - (best.step - best.bonus);
                if (dis > 0 || dis == 0 && m.bonus < best.bonus) {
                    ++obsolete_count;
                    if (obsolete_count % 1000 == 0)
                    cerr << "Ignore obsolete path(" << obsolete_count << ")\r";
                    continue;
                }
            } else if (m.map_score == 0) {
                if (best.width() == 0)
                    best = m;
                cerr << "Better solution found! Looking for another...\n";
            }
            if (!stateMemory.isOutdated(m)) {
                ++new_count;
                if (new_count % 1000 == 0)
                    cerr <<"New path #" <<new_count <<":" << m << '\n';
                for (int i = 0; i < m.height(); ++i) {
                    for (int j = 0; j < m.width(); ++j) {
                        MapWithState nextMap = generateNextMap(m, i, j);
                        nextMap.operations.push_back({i, j});
                        if (stateMemory.update(nextMap))
                            heap.push(nextMap);
                    }
                }
            } else {
                ++obsolete_count;
                if (obsolete_count % 1000 == 0)
                    cerr << "Ignore obsolete path(" << obsolete_count << ")\r";
            }
        }
        cerr << "Looked into "<<new_count <<" paths, ignored " << obsolete_count << " obsolete paths\n";
        cerr << "Best found!";
        return best;
    }
};

template <typename RetType>
RetType input(const char* prompt) {
    RetType r;
    cout << prompt;
    cin >> r;
    return r;
}

Map generateMapFromStdin() {
    using namespace std;
    int w, h;
    w = input<int>("Width:");
    h = input<int>("Height:");
    Map m;
    m.setSize(w, h);
    if (m.width() > MAX_WIDTH || m.height() > MAX_HEIGHT) {
        cout << "Map is too big!";
        exit(0);
    }
    for (int i = 0; i < m.height(); ++i) {
        cout << "Line " << (i + 1) << ':';
        for (int j = 0; j < m.width(); ++j) {
            int t;
            cin >> t;
            m.set(i, j, t);
        }
    }
    return m;
}

AStar session;

int main() {
    Map m = generateMapFromStdin();
    std::ios::sync_with_stdio(false);
    AStar::MapWithState final_state = session.CalculateOperations(m);

    AStar::MapWithState mws = AStar::MapWithState::generate(m);
    for (auto itr : final_state.operations) {
        cout << "\nX = " << (itr.second + 1) << ", Y = " << (itr.first + 1)
                  << ": ";
        mws = session.generateNextMap(mws, itr.first, itr.second);
        mws.print(cout);
    }
    cout << std::endl;
    return 0;
}