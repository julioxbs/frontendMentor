var a=Object.defineProperty;var l=(n,e,i)=>e in n?a(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var r=(n,e,i)=>(l(n,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();class u{constructor(){r(this,"btn",document.querySelector("button"));r(this,"unreadNotifications",document.querySelectorAll(".unread"));r(this,"countOfNotifications",document.querySelector("#count"));r(this,"total",this.unreadNotifications.length)}markAsRead(){var e;(e=this.btn)==null||e.addEventListener("click",()=>{Array.from(this.unreadNotifications).forEach(i=>{i.classList.remove("unread"),this.total-=1}),this.showTotalNotifications()})}showTotalNotifications(){this.countOfNotifications.textContent=this.total.toString()}}const f=new u;f.markAsRead();