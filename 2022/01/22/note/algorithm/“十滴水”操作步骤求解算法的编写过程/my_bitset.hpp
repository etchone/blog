#include <vector>

class MyBitset {
    using WordType = unsigned long;
    static constexpr size_t BitCountOfWord = __CHAR_BIT__ * sizeof(WordType);

    size_t m_size;
    std::vector<WordType> m_data;

    static constexpr size_t countOfWord(size_t count_of_bit) {
        return count_of_bit / BitCountOfWord +
               (count_of_bit % BitCountOfWord != 0);
    }
    size_t countOfWord() const {
        return size() / BitCountOfWord + (size() % BitCountOfWord != 0);
    }

    static constexpr size_t posOfWord(size_t bit_pos) {
        return bit_pos / BitCountOfWord;
    }
    static constexpr size_t posInWord(size_t bit_pos) {
        return bit_pos % BitCountOfWord;
    }
    static constexpr WordType bitMask(size_t high, size_t low = 0) {
        return ((1ul << (high + 1)) - 1) & ~((1ul << low) - 1);
    }

 public:
    // TODO: move constructor
    MyBitset() : m_size(0), m_data() {}
    MyBitset(size_t size) : m_size(size), m_data(countOfWord(size), 0) {}
    MyBitset(const MyBitset& other)
        : m_size(other.m_size), m_data(other.m_data) {}

    template <typename type,
              typename = std::enable_if_t<std::is_arithmetic<type>::type>>
    static MyBitset fromNumeric(type x) {
        MyBitset bits(sizeof(type));

        if (sizeof(type) > BitCountOfWord) {
            int low = 0;
            for (; low + BitCountOfWord <= sizeof(type);
                 low += BitCountOfWord) {
                bits.setRange(low, low + BitCountOfWord - 1,
                              WordType(x >> low));
            }

            // This branch should not be reached
            if (low != sizeof(type))
                bits.setRange(low, sizeof(type) - 1, x >> low);

        } else {
            bits.setRange(0, sizeof(type), x);
        }
        return bits;
    }

    // TODO: move operator=
    MyBitset& operator=(const MyBitset& other) {
        m_size = other.m_size;
        m_data = other.m_data;
        return *this;
    }

    const std::vector<WordType>& asWords() const { return m_data; }

    size_t size() const { return m_size; }

    void resize(size_t new_size) {
        if (m_size > new_size) {
            int count = countOfWord(m_size), new_count = countOfWord(new_size);
            while (count > new_count) {
                m_data.pop_back();
                --count;
            }
            int count_in_last_word = new_size % BitCountOfWord;
            if (count_in_last_word)
                m_data.back() &= bitMask(count_in_last_word);
        } else {
            int count = countOfWord(m_size), new_count = countOfWord(new_size);
            while (count < new_count) {
                m_data.push_back(0);
                ++count;
            }
        }
        m_size = new_size;
    }

    bool get(size_t pos) const {
        return (m_data[posOfWord(pos)] >> posInWord(pos)) & 1;
    }

    void append(bool x) {
        resize(m_size + 1);
        set(m_size - 1, x);
    }

    void append(const MyBitset& other) {
        int old_size = m_size;
        resize(m_size + other.m_size);
        setRange(old_size, m_size, other);
    }

    WordType getRangeAsWord(size_t low, size_t high) const {
        assert(high >= low && high < m_size && high - low <= BitCountOfWord);
        int wl = posOfWord(low), bl = posInWord(low), wh = posOfWord(high),
            bh = posInWord(high);

        if (wl == wh) {
            return (m_data[wl] >> bl) & bitMask(bh - bl);
        } else {
            assert(wh == wl + 1);
            // Reason of "wl + 1":
            // We have limited the answer into range of WordType, so the bits
            // over low + BitCountOfWord will overflow. Therefore, we can ignore
            // those and only consider bits within the range
            return (m_data[wl] >> bl) |
                   ((m_data[wl + 1] << (BitCountOfWord - bl)) & bitMask(bh));
        }
    }

    WordType getRangeAsBitset(size_t low, size_t high) const {
        assert(high >= low && high < m_size);
        throw std::exception();  // TODO, and please do not use exception
    }

    void set(size_t pos, bool value = true) {
        if (value)
            m_data[posOfWord(pos)] |= (1ul << (posInWord(pos)));
        else
            m_data[posOfWord(pos)] &= ~(1ul << (posInWord(pos)));
    }

    void setRange(size_t low, size_t high, WordType value) {
        assert(high >= low && high < m_size && high - low <= BitCountOfWord &&
               value < (1ul << (high - low + 1ul)));
        int wl = posOfWord(low), bl = posInWord(low), wh = posOfWord(high),
            bh = posInWord(high);
        if (wh == wl) {
            m_data[wl] = (m_data[wl] & bitMask(bl - 1)) |
                         ((value << bl) & bitMask(bh, bl)) |
                         (m_data[wl] & bitMask(BitCountOfWord - 1, bh + 1));
        } else {
            assert(wh == wl + 1);
            m_data[wl] = (m_data[wl] & bitMask(bl - 1)) | value << bl;
            m_data[wh] =
                (value >> (BitCountOfWord - bl) &
                 bitMask(BitCountOfWord - bl)) |
                (m_data[wh] & bitMask(BitCountOfWord, BitCountOfWord - bl + 1));
        }
    }

    void setRange(size_t low, size_t high, MyBitset bits) {
        int i = 0;
        while (high - low > BitCountOfWord) {
            // TODO: optimize, expand internal setRange(size_t,size_t,WordType)
            setRange(low, low + BitCountOfWord - 1, bits.asWords()[i]);
            low += BitCountOfWord;
            ++i;
        }
        setRange(low, high, bits.asWords()[i] & bitMask(high - low));
    }

    bool operator<(const MyBitset& other) const {
        int pos = countOfWord() - 1;
        if (m_size != other.m_size)
            return m_size < other.m_size;
        do {
            if (m_data[pos] != other.m_data[pos])
                return m_data[pos] < other.m_data[pos];
        } while (pos--);
        return false;
    }

    bool operator==(const MyBitset& other) {
        int pos = countOfWord() - 1;
        if (m_size != other.m_size)
            return false;
        do {
            if (m_data[pos] != other.m_data[pos])
                return false;
        } while (pos--);
        return true;
    }
};
