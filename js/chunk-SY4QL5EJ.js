import{b as C}from"./chunk-DKJIC32O.js";import{K as A,L as S,T as P,a as R,c as y,f as H,g as _,i as I,k as U,m as T,n as V,p as k,q as O}from"./chunk-ZB2S6CLW.js";import{a as L}from"./chunk-YQ5RLSZN.js";L(),L();var g={set(t,d){localStorage.setItem(t,d)},get(t){return localStorage.getItem(t)},del(t){localStorage.removeItem(t)}},j=t=>{if(!t)return;let d=y(O,"div",{innerHTML:t,className:"tip"});setTimeout(()=>{d.addClass("hide"),setTimeout(()=>{O.removeChild(d)},300)},3e3)},Y=()=>{T.auto_scroll&&g.set(S,String(V.y))},G=t=>{let d=window.location.hash,c=null;if(A){g.del(S);return}d?c=document.querySelector(decodeURI(d)):c=T.auto_scroll?parseInt(g.get(S)):0,c&&(C(c),P(1)),t&&d&&!A&&(C(c),P(1))},K=(t,d)=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(t).then(()=>{d&&d(!0)},()=>{d&&d(!1)}):(console.error("Too old browser, clipborad API not supported."),d&&d(!1))};L(),L();var D=()=>{let t;R.each("div.tab",d=>{if(d.getAttribute("data-ready"))return;let c=d.getAttribute("data-id"),u=d.getAttribute("data-title"),s=document.getElementById(c);s?t=!1:(s=document.createElement("div"),s.className="tabs",s.id=c,s.innerHTML='<div class="show-btn"></div>',s.querySelector(".show-btn").addEventListener("click",()=>{C(s)}),d.parentNode.insertBefore(s,d),t=!0);let h=s.querySelector(".nav ul");h||(h=y(s,"div",{className:"nav",innerHTML:"<ul></ul>"}).querySelector("ul"));let n=y(h,"li",{innerHTML:u});t&&(n.addClass("active"),d.addClass("active")),n.addEventListener("click",i=>{let b=i.currentTarget;s.find(".active").forEach(f=>{f.removeClass("active")}),d.addClass("active"),b.addClass("active")}),s.appendChild(d),d.setAttribute("data-ready",String(!0))})},E=null,q=/mobile/i.test(window.navigator.userAgent),z=(t,d)=>{let c={el:{},create(){t.player.options.btns&&t.player.options.btns.forEach(e=>{c.el[e]||(c.el[e]=y(t,"div",{className:e+" btn",onclick(r){t.player.fetch().then(()=>{t.player.options.events[e](r)})}}))})}},u={el:null,btns:{mode:void 0,volume:void 0},step:"next",create:()=>{if(!t.player.options.controls)return;let e=u;t.player.options.controls.forEach(r=>{if(e.btns[r])return;let a={onclick(p){e.events[r]?e.events[r](p):t.player.options.events[r](p)}};switch(r){case"volume":a.className=" "+(n.muted?"off":"on"),a.innerHTML='<div class="bar"></div>',a["on"+m.nameMap.dragStart]=e.events.volume,a.onclick=null;break;case"mode":a.className=" "+t.player.options.mode;break;default:a.className="";break}a.className=r+a.className+" btn",e.btns[r]=y(e.el,"div",a)}),e.btns.volume.bar=e.btns.volume.querySelector(".bar")},events:{mode(e){switch(t.player.options.mode){case"loop":t.player.options.mode="random";break;case"random":t.player.options.mode="order";break;default:t.player.options.mode="loop"}u.btns.mode.className="mode "+t.player.options.mode+" btn",g.set("_PlayerMode",t.player.options.mode)},volume(e){e.preventDefault();let r=e.currentTarget,a=!1,p=o=>{o.preventDefault(),t.player.volume(u.percent(o,r)),a=!0},l=o=>{o.preventDefault(),r.removeEventListener(m.nameMap.dragEnd,l),r.removeEventListener(m.nameMap.dragMove,p),a?(t.player.muted(),t.player.volume(u.percent(o,r))):n.muted?(t.player.muted(),t.player.volume(n.volume)):(t.player.muted("muted"),u.update(0))};r.addEventListener(m.nameMap.dragMove,p),r.addEventListener(m.nameMap.dragEnd,l)},backward(e){u.step="prev",t.player.mode()},forward(e){u.step="next",t.player.mode()}},update(e){u.btns.volume.className="volume "+(!n.muted&&e>0?"on":"off")+" btn",H(u.btns.volume.bar,Math.floor(e*100)+"%")},percent(e,r){let a=((e.clientX||e.changedTouches[0].clientX)-I(r))/_(r);return a=Math.max(a,0),Math.min(a,1)}},s={el:null,bar:null,create(){let e=i.current().el;e&&(s.el&&(s.el.parentNode.removeClass("current").removeEventListener(m.nameMap.dragStart,s.drag),s.el.remove()),s.el=y(e,"div",{className:"progress"}),s.el.setAttribute("data-dtime",m.secondToTime(0)),s.bar=y(s.el,"div",{className:"bar"}),e.addClass("current"),e.addEventListener(m.nameMap.dragStart,s.drag),i.scroll())},update(e){H(s.bar,Math.floor(e*100)+"%"),s.el.setAttribute("data-ptime",m.secondToTime(e*n.duration))},seeking(e){e?s.el.addClass("seeking"):s.el.removeClass("seeking")},percent(e,r){let a=((e.clientX||e.changedTouches[0].clientX)-I(r))/_(r);return a=Math.max(a,0),Math.min(a,1)},drag(e){e.preventDefault();let r=i.current().el,a=l=>{l.preventDefault();let o=s.percent(l,r);s.update(o),N.update(o*n.duration)},p=l=>{l.preventDefault(),r.removeEventListener(m.nameMap.dragEnd,p),r.removeEventListener(m.nameMap.dragMove,a);let o=s.percent(l,r);s.update(o),t.player.seek(o*n.duration),n.disableTimeupdate=!1,s.seeking(!1)};n.disableTimeupdate=!0,s.seeking(!0),r.addEventListener(m.nameMap.dragMove,a),r.addEventListener(m.nameMap.dragEnd,p)}},h={el:null,create(){let e=i.current();h.el.innerHTML='<div class="cover"><div class="disc"><img src="'+e.cover+'" class="blur"  alt="music cover"/></div></div><div class="info"><h4 class="title">'+e.name+"</h4><span>"+e.artist+'</span><div class="lrc"></div></div>',h.el.querySelector(".cover").addEventListener("click",t.player.options.events["play-pause"]),N.create(h.el.querySelector(".lrc"))}},n,i={el:null,data:[],index:-1,errnum:0,add:(e,r)=>{r.forEach(a=>{a.group=e,a.name=a.name||a.title||"Meida name",a.artist=a.artist||a.author||"Anonymous",a.cover=a.cover||a.pic,a.type=a.type||"normal",i.data.push(a)})},clear(){i.data=[],i.el.innerHTML="",i.index!==-1&&(i.index=-1,t.player.fetch())},create(){let e=i.el;i.data.map((r,a)=>{if(r.el)return null;let p="list-"+t.player._id+"-"+r.group,l=document.getElementById(p);return l||(l=y(e,"div",{id:p,className:t.player.group?"tab":"",innerHTML:"<ol></ol>"}),t.player.group&&(l.setAttribute("data-title",t.player.options.rawList[r.group].title),l.setAttribute("data-id",t.player._id))),r.el=y(l.querySelector("ol"),"li",{title:r.name+" - "+r.artist,innerHTML:'<span class="info"><span>'+r.name+"</span><span>"+r.artist+"</span></span>",onclick(o){let w=o.currentTarget;if(i.index===a&&s.el){n.paused?t.player.play():t.player.seek(n.duration*s.percent(o,w));return}t.player.switch(a),t.player.play()}}),r}),D()},current(){return this.data[this.index]},scroll(){let e=this.current(),r=this.el.querySelector("li.active");r&&r.removeClass("active");let a=this.el.querySelector(".tab.active");return a&&a.removeClass("active"),r=this.el.querySelectorAll(".nav li")[e.group],r&&r.addClass("active"),a=this.el.querySelectorAll(".tab")[e.group],a&&a.addClass("active"),C(e.el,e.el.offsetTop),this},title(){if(n.paused)return;let e=this.current();document.title="Now Playing..."+e.name+" - "+e.artist+" | "+k},error(){let e=this.current();e.el.removeClass("current").addClass("error"),e.error=!0,this.errnum++}},b={el:null,create(){this.el||(this.el=y(t,"div",{className:"player-info",innerHTML:(t.player.options.type==="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),h.el=this.el.querySelector(".preview"),i.el=this.el.querySelector(".playlist"),u.el=this.el.querySelector(".controller"))},hide(){let e=this.el;e.addClass("hide"),window.setTimeout(()=>{e.removeClass("show hide")},300)}},f={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause"(e){n.paused?t.player.play():t.player.pause()},music(e){b.el.hasClass("show")?b.hide():(b.el.addClass("show"),i.scroll().title())}}},m={random(e){return Math.floor(Math.random()*e)},parse(e){let r=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+)(.html)?","tencent","song"],["y.qq.com.*album/(\\w+)(.html)?","tencent","album"],["y.qq.com.*singer/(\\w+)(.html)?","tencent","artist"],["y.qq.com.*playsquare/(\\w+)(.html)?","tencent","playlist"],["y.qq.com.*playlist/(\\w+)(.html)?","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(a=>{let p=new RegExp(a[0]).exec(e);p!==null&&(r=[a[1],a[2],p[1]])}),r},fetch(e){let r=[];return new Promise((a,p)=>{e.forEach(l=>{let o=m.parse(l);if(o[0]){let w=JSON.stringify(o),x=g.get(w);x?(r.push(...JSON.parse(x)),a(r)):fetch(`${T.playerAPI}/meting/?server=`+o[0]+"&type="+o[1]+"&id="+o[2]+"&r="+Math.random()).then(v=>v.json()).then(v=>{g.set(w,JSON.stringify(v)),r.push(...v),a(r)}).catch(v=>{})}else r.push(l),a(r)})})},secondToTime(e){let r=o=>isNaN(o)?"00":o<10?"0"+o:""+o,a=Math.floor(e/3600),p=Math.floor((e-a*3600)/60),l=Math.floor(e-a*3600-p*60);return(a>0?[a,p,l]:[p,l]).map(r).join(":")},nameMap:{dragStart:q?"touchstart":"mousedown",dragMove:q?"touchmove":"mousemove",dragEnd:q?"touchend":"mouseup"}};n=null,t.player={_id:m.random(999999),group:!0,load(e){let r="";e&&e.length>0?this.options.rawList!==e&&(this.options.rawList=e,i.clear(),this.fetch()):(r="none",this.pause());for(let a in c.el)U(c.el[a],r);return this},fetch(){return new Promise((e,r)=>{if(i.data.length>0)e(!0);else if(this.options.rawList){let a=[];this.options.rawList.forEach((p,l)=>{a.push(new Promise((o,w)=>{let x=l,v;p.list?(this.group=!0,v=p.list):(x=0,this.group=!1,v=[p]),m.fetch(v).then(M=>{i.add(x,M),o(0)})}))}),Promise.all(a).then(()=>{e(!0)})}}).then(e=>{e&&(i.create(),u.create(),this.mode())})},mode(){let e=i.data.length;if(!e||i.errnum===e)return;let r=u.step==="next"?1:-1,a=()=>{let l=i.index+r;(l>e||l<0)&&(l=u.step==="next"?0:e-1),i.index=l},p=()=>{let l=m.random(e);i.index!==l?i.index=l:a()};switch(this.options.mode){case"random":p();break;case"order":a();break;case"loop":u.step&&a(),i.index===-1&&p();break}this.init()},switch(e){typeof e=="number"&&e!==i.index&&i.current()&&!i.current().error&&(i.index=e,this.init())},init(){let e=i.current();if(!e||e.error){this.mode();return}let r=!1;n.paused||(r=!0,this.stop()),n.setAttribute("src",e.url),n.setAttribute("title",e.name+" - "+e.artist),this.volume(g.get("_PlayerVolume")||"0.7"),this.muted(g.get("_PlayerMuted")),s.create(),this.options.type==="audio"&&h.create(),r===!0&&this.play()},play(){if(E&&E.player.pause(),i.current().error){this.mode();return}n.play().then(()=>{i.scroll()}).catch(e=>{})},pause(){n.pause(),document.title=k},stop(){n.pause(),n.currentTime=0,document.title=k},seek(e){e=Math.max(e,0),e=Math.min(e,n.duration),n.currentTime=e,s.update(e/n.duration)},muted(e){e==="muted"?(n.muted=e,g.set("_PlayerMuted",e),u.update(0)):(g.del("_PlayerMuted"),n.muted=!1,u.update(n.volume))},volume(e){isNaN(e)||(u.update(e),g.set("_PlayerVolume",e),n.volume=e)},mini(){b.hide()}};let N={el:null,data:null,index:0,create(e){let r=i.index,a=i.current().lrc,p=l=>{if(r!==i.index)return;this.data=this.parse(l);let o="";this.data.forEach((w,x)=>{o+="<p"+(x===0?' class="current"':"")+">"+w[1]+"</p>"}),this.el=y(e,"div",{className:"inner",innerHTML:o},"replace"),this.index=0};a.startsWith("http")?this.fetch(a,p):p(a)},update(e){if(this.data&&(this.index>this.data.length-1||e<this.data[this.index][0]||!this.data[this.index+1]||e>=this.data[this.index+1][0])){for(let r=0;r<this.data.length;r++)if(e>=this.data[r][0]&&(!this.data[r+1]||e<this.data[r+1][0])){this.index=r;let a=-(this.index-1);this.el.style.transform="translateY("+a+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[r].addClass("current")}}},parse(e){if(e){e=e.replace(/([^\]^\n])\[/g,(l,o)=>o+`
[`);let r=e.split(`
`),a=[],p=r.length;for(let l=0;l<p;l++){let o=r[l].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),w=r[l].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").trim();if(o){let x=o.length;for(let v=0;v<x;v++){let M=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(o[v]),$=M[1]*60,J=parseInt(M[2]),W=M[4]?parseInt(M[4])/((M[4]+"").length===2?100:1e3):0,F=$+J+W;a.push([F,w])}}}return a=a.filter(l=>l[1]),a.sort((l,o)=>l[0]-o[0]),a}else return[]},fetch(e,r){fetch(e).then(a=>a.text()).then(a=>{r(a)}).catch(a=>{})}},X={onerror(){i.error(),t.player.mode()},ondurationchange(){n.duration!==1&&s.el.setAttribute("data-dtime",m.secondToTime(n.duration))},onloadedmetadata(){t.player.seek(0),s.el.setAttribute("data-dtime",m.secondToTime(n.duration))},onplay(){t.parentNode.addClass("playing"),j(this.getAttribute("title")),E=t},onpause(){t.parentNode.removeClass("playing"),E=null},ontimeupdate(){this.disableTimeupdate||(s.update(this.currentTime/this.duration),N.update(this.currentTime))},onended(e){t.player.mode(),t.player.play()}};return(e=>{t.player.created||(t.player.options=Object.assign(f,e),t.player.options.mode=g.get("_PlayerMode")||t.player.options.mode,c.create(),n=y(t,t.player.options.type,X),b.create(),t.parentNode.addClass(t.player.options.type),t.player.created=!0)})(d),t};L();function Q(){let t=!0;window.addEventListener("DOMContentLoaded",function(){t=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){t&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}var Z=(t,d,c,u)=>{if(u)c();else{let s=document.createElement("script");s.onload=function(h,n){(n||!s.readyState)&&(console.log("abort!"),s.onload=null,s=void 0,!n&&c&&setTimeout(c,0))},s.src=t,s.integrity=d,s.crossOrigin="anonymous",document.head.appendChild(s)}},ee=t=>{let{text:d,parentNode:c,id:u,className:s,type:h,src:n,dataset:i}=t,b=d||t.textContent||t.innerHTML||"";c.removeChild(t);let f=document.createElement("script");u&&(f.id=u),s&&(f.className=s),h&&(f.type=h),n&&(f.src=n,f.async=!1),i.pjax!==void 0&&(f.dataset.pjax=""),b!==""&&f.appendChild(document.createTextNode(b)),c.appendChild(f)};L();var B=(t,d)=>{let c=T[t][d].url;return c.startsWith("https")?c:c.startsWith("http")?(console.warn(`Upgrade vendor ${t}/${d} to HTTPS, Please use HTTPS url instead of HTTP url.`),c.replace("http","https")):`/${c}`},te=(t,d,c)=>{LOCAL[t]&&Z(B("js",t),T.js[t].sri,d||function(){window[t]=!0},c||window[t])},ae=(t,d)=>{if(!window["css"+t]&&LOCAL[t]){let c={rel:"stylesheet",href:B("css",t)},u=T.css[t];u.local||(c.integrity=u.sri,c.crossOrigin="anonymous"),y(document.head,"link",c),window["css"+t]=!0}};export{g as a,j as b,Y as c,G as d,K as e,D as f,z as g,Q as h,ee as i,te as j,ae as k};/*! For license information please see chunk-SY4QL5EJ.js.LEGAL.txt */