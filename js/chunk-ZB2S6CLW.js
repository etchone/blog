import{a as c,b as L}from"./chunk-YQ5RLSZN.js";c();var a=(t,e=document)=>t[0]==="#"?e.getElementById(t.substring(1)):e.querySelector(t);a.all=(t,e=document)=>e.querySelectorAll(t),a.each=(t,e,n)=>{a.all(t,n).forEach(e)},c();var r=function(t,e){let n=t.parentNode;n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling)},O=function(t,e,n,i){let s=document.createElement(e);switch(Object.assign(s,n),i){case"after":r(t,s);break;case"replace":t.innerHTML="",t.appendChild(s);break;default:t.appendChild(s)}return s},S=function(t,e){let n=document.createElement("div");Object.assign(n,e),t.parentNode.insertBefore(n,t),t.parentNode.removeChild(t),n.appendChild(t)},_=function(t){return t.getBoundingClientRect().height},j=function(t,e){t.style.width=typeof e=="number"?e+"rem":e},k=function(t){return t.getBoundingClientRect().width},q=function(t){return t.getBoundingClientRect().top},H=function(t){return t.getBoundingClientRect().left},N=function(t){return t.style.display},R=function(t,e){return t.style.display=e,t};function l(){Object.assign(HTMLElement.prototype,{find(t){return a.all(t,this)},_class(t,e,n){(e.indexOf(" ")?e.split(" "):[e]).forEach(i=>{t==="toggle"?this.classList.toggle(i,n):this.classList[t](i)})},addClass(t){return this._class("add",t),this},removeClass(t){return this._class("remove",t),this},toggleClass(t,e){return this._class("toggle",t,e),this},hasClass(t){return this.classList.contains(t)}})}c();var o=L;l();var ut=o.statics.indexOf("//")>0?o.statics:o.root,T={x:0,y:0},u=0,d,A=document.getElementsByTagName("body")[0],M=document.documentElement,W=document.getElementById("container"),z=document.getElementById("loading"),f=document.getElementById("nav"),D=document.getElementById("header"),F=f.querySelector(".toggle"),J=document.getElementById("quick"),K=document.getElementById("sidebar"),P=document.getElementById("brand"),m=document.getElementById("tool"),g,h,y,p,B=document.getElementById("search"),E,C,b,Q=window.innerHeight,v=window.innerWidth,w=0,I=window.location.href,x;function U(t){E=t}function V(t){C=t}function X(t){b=t}function Y(t){Q=t}function Z(t){v=t}function $(t){u=t}function G(t){w=t}function tt(t){I=t}function et(t){x=t}function nt(t){d=t}function st(t){g=t}function at(t){h=t}function it(t){y=t}function ot(t){p=t}function ct(t){m=t}function rt(t){B=t}export{a,r as b,O as c,S as d,_ as e,j as f,k as g,q as h,H as i,N as j,R as k,l,o as m,T as n,u as o,d as p,A as q,M as r,W as s,z as t,f as u,D as v,F as w,J as x,K as y,P as z,m as A,g as B,h as C,y as D,p as E,B as F,E as G,C as H,b as I,v as J,w as K,I as L,x as M,U as N,V as O,X as P,Y as Q,Z as R,$ as S,G as T,tt as U,et as V,nt as W,st as X,at as Y,it as Z,ot as _,ct as $,rt as aa};/*! For license information please see chunk-ZB2S6CLW.js.LEGAL.txt */
