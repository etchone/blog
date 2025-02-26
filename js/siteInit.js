import{a as B,c as _,d as ve,e as we,f as ge,g as ye,h as Ee,i as K}from"./chunk-MVMAX2OU.js";import{a as w,b as E}from"./chunk-KUWEPGVM.js";import{$ as Ce,A as C,B as U,C as P,D as be,E as j,F as G,H as V,I as Se,J as Le,M as ke,N as xe,O as qe,P as Te,Q as Ae,R as Re,S as He,T as Me,U as Ie,V as Oe,W as Ne,X as De,Y as Be,Z as Ue,_ as Pe,a as p,aa as je,c as F,e as q,f as Fe,k as z,l as ze,m as h,n as T,o as X,q as $,r as W,s as Xe,t as A,u as g,v as Q,w as R,x as Z,y as u,z as $e}from"./chunk-2PGFC2D2.js";import{a as m}from"./chunk-EGBUYRYO.js";import"./chunk-WIQECBEN.js";m(),m(),m(),ze();var H=(e,t)=>{u.hasClass("on")?(u.removeClass("on"),R.removeClass("close"),t?u.style="":w(u,"slideRightOut")):t?u.style="":w(u,"slideRightIn",()=>{u.addClass("on"),R.addClass("close")})},We=()=>{let e=u.querySelector(".inner");u.querySelector(".tab")&&e.removeChild(u.querySelector(".tab"));let t=document.createElement("ul"),s="active";t.className="tab",["contents","related","overview"].forEach(o=>{let a=u.querySelector(".panel."+o);if(a.innerHTML.trim().length<1){o==="contents"&&z(j,"none");return}o==="contents"&&z(j,"");let r=document.createElement("li"),i=document.createElement("span"),n=document.createTextNode(a.getAttribute("data-title"));i.appendChild(n),r.appendChild(i),r.addClass(o+" item"),s?(a.addClass(s),r.addClass(s)):a.removeClass("active"),r.addEventListener("click",l=>{let c=l.currentTarget;c.hasClass("active")||(u.find(".tab .item").forEach(d=>{d.removeClass("active")}),u.find(".panel").forEach(d=>{d.removeClass("active")}),u.querySelector(".panel."+c.className.replace(" item","")).addClass("active"),c.addClass("active"))}),t.appendChild(r),s=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),u.querySelector(".panels").style.paddingTop=""):u.querySelector(".panels").style.paddingTop=".625rem"},Ye=()=>{let e=i=>{let n=t[i];if(!n||n.hasClass("current"))return;p.each(".toc .active",c=>{c&&c.removeClass("active current")}),s.forEach(c=>{c&&c.removeClass("active")}),n.addClass("active current"),s[i]&&s[i].addClass("active");let l=n.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let c=document.getElementById(decodeURIComponent(l.querySelector("a.toc-link").getAttribute("href").replace("#","")));c&&c.addClass("active")}l=l.parentNode}getComputedStyle(u).display!=="none"&&a.hasClass("active")&&E(a,n.offsetTop-a.offsetHeight/4)},t=p.all(".contents li");if(t.length<1)return;let s=[...t],o=null;s=s.map((i,n)=>{let l=i.querySelector("a.toc-link"),c=l.getAttribute("href");if(!c)return null;let d=document.getElementById(decodeURI(c.replace("#","")));if(!d)return null;let x=d.querySelector("a.anchor"),S=v=>{v.preventDefault();let fe=document.getElementById(decodeURI(v.currentTarget.getAttribute("href").replace("#","")));o=n,E(fe,null,()=>{e(n),o=null})};return l.addEventListener("click",S),x&&x.addEventListener("click",v=>{S(v),we(h.hostname+"/"+LOCAL.path+v.currentTarget.getAttribute("href"))}),d});let a=u.querySelector(".contents.panel"),r=i=>{let n=0,l=i[n];if(l.boundingClientRect.top>0)return n=s.indexOf(l.target),n===0?0:n-1;for(;n<i.length;n++)if(i[n].boundingClientRect.top<=0)l=i[n];else return s.indexOf(l.target);return s.indexOf(l.target)};(()=>{let i=new IntersectionObserver(n=>{let l=r(n)+(X<0?1:0);o===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});s.forEach(n=>{n&&i.observe(n)})})()},ee=()=>{E(0)},Je=()=>{E(parseInt(String(q(Xe))))},_e=()=>{E(document.getElementById("comments"))},Ke=()=>{p.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),s=e.parentNode.parentNode;if(!t)return;let o=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),a=!h.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),r=!t.onclick&&t.hostname===location.hostname&&(o||a);e.toggleClass("active",r),e.parentNode.querySelector(".active")&&s.hasClass("dropdown")?s.removeClass("active").addClass("expand"):s.removeClass("expand")})};m();var L={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),A.setAttribute("style","display:block"),L.lock=!1},hide(e){h.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){L.lock||(h.loader.start&&w(A,0),document.body.addClass("loaded"),L.lock=!0)}};function Ge(){p.each(".overview .menu > .item",e=>{g.querySelector(".menu").appendChild(e.cloneNode(!0))}),A.addEventListener("click",L.vanish),R.addEventListener("click",H),document.querySelector(".dimmer").addEventListener("click",H),Z.querySelector(".down").addEventListener("click",Je),Z.querySelector(".up").addEventListener("click",ee),C||Ce(F(Q,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),De(C.querySelector(".player")),Be(C.querySelector(".back-to-top")),Ue(C.querySelector(".chat")),Pe(C.querySelector(".contents")),P.addEventListener("click",ee),be.addEventListener("click",_e),j.addEventListener("click",H),ye(U),document.querySelector("main").addEventListener("click",()=>{U.player.mini()}),new IntersectionObserver(([e])=>{e.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([e])=>{e.isIntersecting?document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))}m(),m();var Ve=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(s=>{s.target.hasClass("show")?e.unobserve(s.target):(s.isIntersecting||s.intersectionRatio>0)&&(s.target.addClass("show"),e.unobserve(s.target))})},{root:null,threshold:[.3]});p.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),p.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(s=>{t.addEventListener(s,()=>{let o=document.querySelector(".cards .item.active");o&&o.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(s=>{t.addEventListener(s,()=>{t.removeClass("active")},{passive:!0})})})};m(),m();var f=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(W.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(W.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},Qe=()=>{h.auto_dark.enable&&(new Date().getHours()>=h.auto_dark.start||new Date().getHours()<=h.auto_dark.end?f("dark"):f())},te=e=>{W.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},Ze=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?f("dark"):f()});let e=B.get("theme");e?f(e):h.darkmode&&f("dark")},et=document.getElementById("waves"),se=()=>{xe(q(g)),qe(q(Q)),Te(V+q(et)),Le!==window.innerWidth&&H(null,1),Ae(window.innerHeight),Re(window.innerWidth)},tt=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,s=t>e?t-e:document.body.scrollHeight-e,o=window.scrollY>V,a=window.scrollY>0;te(o?"#FFF":"#222"),g.toggleClass("show",o),C.toggleClass("affix",a),$e.toggleClass("affix",a),u.toggleClass("affix",window.scrollY>Se&&document.body.offsetWidth>=991),typeof T.y>"u"&&(T.y=window.scrollY),He(T.y-window.scrollY),X<0?(g.removeClass("up"),g.toggleClass("down",o)):X>0&&(g.removeClass("down"),g.toggleClass("up",o)),T.y=window.scrollY;let r=Math.round(Math.min(100*window.scrollY/s,100))+"%";P.querySelector("span").innerText!==r&&(P.querySelector("span").innerText=r),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&Fe(document.querySelector(".percent"),r)};m(),m(),m();var st=new Uint8Array(128);for(let e=0;e<83;e++)st["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".charCodeAt(e)]=e;var ot=Math.PI,Mt=ot*2,nt=32,at="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E",oe=typeof window>"u",rt=!oe&&"loading"in HTMLImageElement.prototype,it=!oe&&(!("onscroll"in window)||/(?:gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function lt(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function ct(e){let t=Date.now();return at.replace(/\s/,` data-id='${t}-${e}' `)}function dt(e,t){let s;return function(...o){s!=null&&clearTimeout(s),s=setTimeout(()=>{e(...o),s=void 0},t)}}function ut(e='img[loading="lazy"]',{hash:t=!0,hashType:s="blurhash",placeholderSize:o=nt,updateSizesOnResize:a=!1,onImageLoad:r}={}){let i=new Set;for(let[n,l]of lt(e).entries()){let c=Y(l,{updateOnResize:a});if(a&&c&&i.add(c),!l.dataset.src&&!l.dataset.srcset)continue;if(it||!rt){ae(l),O(l),I(l);continue}if(l.src||(l.src=ct(n)),l.complete&&l.naturalWidth>0){ne(l,r);continue}let d=()=>ne(l,r);l.addEventListener("load",d,{once:!0}),i.add(()=>l.removeEventListener("load",d))}return()=>{for(let n of i)n();i.clear()}}function ne(e,t){if(ie(e)){ae(e),O(e),I(e),t?.(e);return}let s=new Image,{srcset:o,src:a,sizes:r}=e.dataset;if(r==="auto"){let i=re(e);i&&(s.sizes=`${i}px`)}else e.sizes&&(s.sizes=e.sizes);o&&(s.srcset=o),a&&(s.src=a),s.addEventListener("load",()=>{O(e),I(e),t?.(e)},{once:!0})}var M=new WeakMap;function Y(e,t){if(e.dataset.sizes!=="auto")return;let s=re(e);if(s&&(e.sizes=`${s}px`),ie(e)&&t?.processSourceElements)for(let o of[...e.parentElement.getElementsByTagName("source")])Y(o,{processSourceElements:!0});if(t?.updateOnResize){if(!M.has(e)){let o=dt(()=>Y(e),500),a=new ResizeObserver(o);M.set(e,a),a.observe(e)}return()=>{let o=M.get(e);o&&(o.disconnect(),M.delete(e))}}}function I(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function O(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function ae(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(O),[...t.querySelectorAll("source[data-src]")].forEach(I))}function re(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}function ie(e){return e.parentElement?.tagName.toLowerCase()==="picture"}var ht=()=>{_(),u.hasClass("on")&&w(u,0,()=>{u.removeClass("on"),R.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(A.lastChild.cloneNode(!0)),E(0)},le=async e=>{window.location.origin!==h.hostname&&window.location.origin!=="http://localhost:4000"&&(window.location.href=h.hostname,alert(`\u68C0\u6D4B\u5230\u975E\u6CD5\u4EFF\u5192\u7F51\u7AD9\uFF0C\u5DF2\u81EA\u52A8\u8DF3\u8F6C\u56DE\u6B63\u786E\u9996\u9875;
We have detected a fake website, and you have been redirected to the correct homepage.`)),Me(0),Ie(window.location.href),K("katex"),await import("./copy-tex-CW4VOMVO.js"),K("mermaid");let t=new IntersectionObserver(function(o,a){o.forEach(r=>{if(r.isIntersecting){let i=r.target;i.style.backgroundImage=`url("${i.getAttribute("data-background-image")}")`,i.removeAttribute("data-background-image"),a.unobserve(i)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(o=>{t.observe(o)}),e!==1&&p.each("script[data-pjax]",Ee),Ne(document.title),se(),Ke(),We(),Ye(),import("./post-IYF5L3CN.js").then(({postBeauty:o})=>{o()});let s=document.getElementById("copyright");if(s){let o=new IntersectionObserver(a=>{a.forEach(r=>{r.isIntersecting&&(import("./comments-76EQQ2SA.js").then(({walinePageview:i,walineComment:n})=>{i(),n()}),o.disconnect())})},{root:null,threshold:.2});o.observe(s)}ut(),import("./comments-76EQQ2SA.js").then(async({walineRecentComments:o})=>{await o()}),ge(),U.player.load(LOCAL.audio||h.audio||{}),L.hide(100),setTimeout(()=>{ve()},500),Ve()};m();function ce(){let e=!0;window.addEventListener("DOMContentLoaded",function(){e=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){e&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}ce(),m();function y(e,t,s){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,s):t.call(s,e,0,[e])}var de=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function J(e,t,s,o){de(t,a=>{y(e,r=>{r.addEventListener(a,s,o)})})}function b(e,t,s={}){de(t,o=>{let a=new CustomEvent(o,{bubbles:!0,cancelable:!0,...s});y(e,r=>{r.dispatchEvent(a)})})}function ue(e){let t=e.text||e.textContent||e.innerHTML||"",s=e.src||"",o=e.parentNode||document.querySelector("head")||document.documentElement,a=document.createElement("script");return t.match("document.write")?!1:(a.type="text/javascript",a.id=e.id,s!==""&&(a.src=s,a.async=!1),t!==""&&a.appendChild(document.createTextNode(t)),o.appendChild(a),(o instanceof HTMLHeadElement||o instanceof HTMLBodyElement)&&o.contains(a)&&o.removeChild(a),!0)}function mt(e){e.tagName.toLowerCase()==="script"&&ue(e),y(e.querySelectorAll("script"),t=>{let s=t;(!s.type||s.type.toLowerCase()==="text/javascript")&&(s.parentNode&&s.parentNode.removeChild(s),ue(s))})}function pt(e,t,s,o=document){e.forEach(a=>{y(o.querySelectorAll(a),t,s)})}var N=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function he(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function ft(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function me(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let s=t.attributes;for(let o=0;o<s.length;o++)e.attributes.setNamedItem(s[o].cloneNode())}this.onSwitch()}function vt({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:s={},switchesOptions:o={},history:a=!0,scrollTo:r=0,scrollRestoration:i=!0,cacheBust:n=!0,timeout:l=0,currentUrlFullReload:c=!1}={}){let d={elements:e,selectors:t,switches:s,switchesOptions:o,history:a,scrollTo:r,scrollRestoration:i,cacheBust:n,timeout:l,currentUrlFullReload:c};return d.switches.head||(d.switches.head=me),d.switches.body||(d.switches.body=me),d}var D="data-pjax-state";function pe(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let s={...this.options},o=wt(e,t);if(o){e.setAttribute(D,o);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(D,"reload"),this.reload();return}e.setAttribute(D,"load"),s.triggerElement=e,this.loadUrl(e.href,s)}function wt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function gt(e){e.setAttribute(D,""),J(e,"click",t=>pe.call(this,e,t)),J(e,"keyup",t=>{let s=t;s.keyCode===13&&pe.call(this,e,s)})}function yt(e,t,s,o){if(o={...o||this.options},o.request=t,e===!1){b(document,"pjax:complete pjax:error",o);return}let a=window.history.state||{};window.history.replaceState({url:a.url||window.location.href,title:a.title||document.title,uid:a.uid||N(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let r=s;t.responseURL?s!==t.responseURL&&(s=t.responseURL):t.getResponseHeader("X-PJAX-URL")?s=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(s=t.getResponseHeader("X-XHR-Redirected-To"));let i=document.createElement("a");i.href=r;let n=i.hash;i.href=s,n&&!i.hash&&(i.hash=n,s=i.href),this.state.href=s,this.state.options=o;try{this.loadContent(e,o)}catch(l){return b(document,"pjax:error",o),console.error("Pjax switch fail: ",l),this.latestChance(s)}}function Et(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Ct(e,t,s){let o=new RegExp("([?&])"+t+"=.*?(&|$)","i"),a=e.indexOf("?")!==-1?"&":"?";return e.match(o)?e.replace(o,"$1"+t+"="+s+"$2"):e+a+t+"="+s}function bt(e,t={},s){let o=t.requestOptions||{},a=(o.requestMethod||"GET").toUpperCase(),r=o.requestParams||null,i=null,n=new XMLHttpRequest,l=t.timeout;if(n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?s(n.responseText,n,e,t):n.status!==0&&s(null,n,e,t))},n.onerror=c=>{console.error(c),s(null,n,e,t)},n.ontimeout=()=>{s(null,n,e,t)},r&&r.length){let c=r.map(d=>d.name+"="+d.value).join("&");switch(a){case"GET":e=e.split("?")[0],e+="?"+c;break;case"POST":i=c;break}}return t.cacheBust&&(e=Ct(e,"t",Date.now())),n.open(a,e,!0),n.timeout=l,n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-PJAX","true"),n.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),n.send(i),n}function St(e,t,s,o,a,r){let i=[];s.forEach(n=>{let l=o.querySelectorAll(n),c=a.querySelectorAll(n);if(l.length!==c.length)throw new Error(`DOM doesn't look the same on new loaded page: '${n}' - new ${l.length}, old ${c.length}`);y(l,(d,x)=>{let S=c[x],v=e[n]?e[n].bind(this,S,d,r,t[n]):he.bind(this,S,d,r);i.push(v)},this)},this),this.state.numPendingSwitches=i.length,i.forEach(n=>{n()})}function Lt(e,t,s){for(let o of t){let a=e.querySelectorAll(o);for(let r=0;r<a.length;r++)if(a[r].contains(s))return!0}return!1}var k=class{constructor(e){this.state={numPendingSwitches:0,href:null,options:null},this.options=vt(e),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=N(),this.parseDOM(document),J(window,"popstate",t=>{let s=t;if(s.state){let o={...this.options};o.url=s.state.url,o.title=s.state.title,o.history=!1,o.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?o.backward=!0:o.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,o)}})}getElements(e){return e.querySelectorAll(this.options.elements)}parseDOM(e){y(this.getElements(e),Et,this)}refresh(e){this.parseDOM(e||document)}reload(){window.location.reload()}forEachSelectors(e,t,s){return pt.bind(this)(this.options.selectors,e,t,s)}switchSelectors(e,t,s,o){return St.bind(this)(this.options.switches,this.options.switchesOptions,e,t,s,o)}latestChance(e){window.location=e}onSwitch(){b(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(e,t){if(typeof e!="string"){b(document,"pjax:complete pjax:error",t);return}let s=document.implementation.createHTMLDocument("pjax"),o=/<html[^>]+>/gi,a=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,r=e.match(o);if(r&&r.length&&(r=r[0].match(a),r.length&&(r.shift(),r.forEach(i=>{let n=i.trim().split("=");n.length===1?s.documentElement.setAttribute(n[0],"true"):s.documentElement.setAttribute(n[0],n[1].slice(1,-1))}))),s.documentElement.innerHTML=e,document.activeElement&&Lt(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,t)}loadUrl(e,t){t=typeof t=="object"?{...this.options,...t}:{...this.options},this.abortRequest(this.request),b(document,"pjax:send",t),this.request=this.doRequest(e,t,this.handleResponse.bind(this))}afterAllSwitches(){var e,t,s;this.options.selectors.forEach(a=>{y(document.querySelectorAll(a),r=>{mt(r)})});let o=this.state;if(!((e=o.options)===null||e===void 0)&&e.history&&(window.history.state||(this.lastUid=this.maxUid=N(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=N(),window.history.pushState({url:o.href,title:o.options.title,uid:this.maxUid,scrollPos:[0,0]},o.options.title,o.href)),this.forEachSelectors(a=>{this.parseDOM(a)},this),b(document,"pjax:complete pjax:success",o.options),!((t=o.options)===null||t===void 0)&&t.history){let a=document.createElement("a");if(a.href=this.state.href,a.hash){let r=a.hash.slice(1);r=decodeURIComponent(r);let i=0,n=document.getElementById(r)||document.getElementsByName(r)[0];if(n&&n.offsetParent)do i+=n.offsetTop,n=n.offsetParent;while(n);window.scrollTo(0,i)}else o.options.scrollTo!==!1&&(Array.isArray(o.options.scrollTo)?window.scrollTo(o.options.scrollTo[0],o.options.scrollTo[1]):window.scrollTo(0,o.options.scrollTo))}else!((s=o.options)===null||s===void 0)&&s.scrollRestoration&&o.options.scrollPos&&window.scrollTo(o.options.scrollPos[0],o.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(e){e&&e.readyState<4&&(e.onreadystatechange=()=>{},e.abort())}};k.prototype.attachLink=gt,k.prototype.doRequest=bt,k.prototype.handleResponse=yt,k.switches={innerHTML:ft,outerHTML:he},m();function kt(){function e(){let t,s=document.querySelector(".theme").querySelector(".ic"),o=F($,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),a=()=>{w(o,{delay:2500,opacity:0},()=>{$.removeChild(o)})};s.hasClass("i-sun")?t=()=>{o.addClass("dark"),f("dark"),B.set("theme","dark"),a()}:(o.addClass("dark"),t=()=>{o.removeClass("dark"),f(),B.set("theme","light"),a()}),w(o,1,()=>{setTimeout(t,210)},()=>{z(o,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var xt=async()=>{kt(),Ge(),Oe(new k({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),h.quicklink.ignores=LOCAL.ignores,import("./quicklink-4BRG7DZG.js").then(({listen:e})=>{e(h.quicklink)}),Qe(),Ze(),document.querySelector("li.item.search > i").addEventListener("click",()=>{h.search!==null&&(G||je(F($,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-LVQGGS4R.js").then(({algoliaSearch:e})=>{e(ke)}),p.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",w(G,"shrinkIn",()=>{document.querySelector(".search-input").focus()})})}))},{once:!0,capture:!0}),window.addEventListener("scroll",tt,{passive:!0}),window.addEventListener("resize",se,{passive:!0}),window.addEventListener("pjax:send",ht,{passive:!0}),window.addEventListener("pjax:success",le,{passive:!0}),window.addEventListener("beforeunload",()=>{_()}),await le(1)};ce(),window.location.origin!==h.hostname&&window.location.origin!=="http://localhost:4000"&&(window.location.href=h.hostname,alert(`\u68C0\u6D4B\u5230\u975E\u6CD5\u4EFF\u5192\u7F51\u7AD9\uFF0C\u5DF2\u81EA\u52A8\u8DF3\u8F6C\u56DE\u6B63\u786E\u9996\u9875;
We have detected a fake website, and you have been redirected to the correct homepage.`)),window.addEventListener("DOMContentLoaded",xt,{passive:!0}),console.log("%c Theme.ShokaX v"+h.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");/*! For license information please see siteInit.js.LEGAL.txt */
