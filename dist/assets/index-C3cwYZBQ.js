const __vite__fileDeps=["assets/ProfilePage-CXeKYGvr.js","assets/react-Dfg0QzLj.js","assets/@babel-DnEJNfVd.js","assets/index-Ce7Ad1JS.js","assets/flowbite-react-vWwfskHq.js","assets/react-icons-DBJQZJWR.js","assets/tailwind-merge-3VKOpVsw.js","assets/classnames-CJMI-Y6p.js","assets/debounce-C4Qqi4Eb.js","assets/@floating-ui-DXdSgT1t.js","assets/react-dom-C9wOZFLX.js","assets/scheduler-CzFDRTuY.js","assets/tabbable-DNPBiPWX.js","assets/react-router-dom-5oYev41E.js","assets/react-router-BvbIkLuK.js","assets/@remix-run-BFLWy9pZ.js","assets/react-select-C22iTgpe.js","assets/@emotion-CWN3Zhke.js","assets/hoist-non-react-statics-Buxaj0Kl.js","assets/react-is-8JwjhRSi.js","assets/stylis-FDnFs_-n.js","assets/use-isomorphic-layout-effect-DSs63ilz.js","assets/memoize-one-BdPwpGay.js","assets/primereact-1lsqHZCQ.js","assets/react-calendar-CDra9IUa.js","assets/clsx-B-dksMZM.js","assets/get-user-locale-Dtfft7u7.js","assets/mem-kns0x1Eo.js","assets/mimic-fn-Bbosp5ci.js","assets/map-age-cleaner-DjG3IVAO.js","assets/p-defer-O4M1dHHK.js","assets/@wojtekmaj-B-N8U4WN.js","assets/swiper-D0AfF8Y-.js","assets/swiper-Be9b3THL.css","assets/index-BpmwBPnP.css","assets/ProfilePage-gf70Oahp.css","assets/MainPage-BD_h9d-T.js","assets/Header-BN_N_WBo.js","assets/@mui-B5R2PSNd.js","assets/react-transition-group-BakLDcRz.js","assets/Header-wXPuXt99.css","assets/MainPage-91nPyx4S.css","assets/MyProjectsPage-BGl9UC75.js","assets/CatalogPage-dEs_-APf.js","assets/CatalogPage-Cjt9LxNH.css","assets/InternalPage-CM0dG97O.js","assets/InternalPage-DmM2vscP.css","assets/SpecialistServicesPage-BCvDgTJ8.js","assets/SpecialistServicesPage-BVxnQWla.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as c,j as o}from"./react-Dfg0QzLj.js";import{c as h}from"./react-dom-C9wOZFLX.js";import{B as _}from"./react-router-dom-5oYev41E.js";import{d as E,e as i}from"./react-router-BvbIkLuK.js";import"./@babel-DnEJNfVd.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-BFLWy9pZ.js";(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))P(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&P(n)}).observe(document,{childList:!0,subtree:!0});function d(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function P(r){if(r.ep)return;r.ep=!0;const t=d(r);fetch(r.href,t)}})();const j="modulepreload",v=function(e){return"/TeleWorks/"+e},f={},l=function(u,d,P){let r=Promise.resolve();if(d&&d.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),n=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(d.map(a=>{if(a=v(a),a in f)return;f[a]=!0;const m=a.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${g}`))return;const s=document.createElement("link");if(s.rel=m?"stylesheet":j,m||(s.as="script",s.crossOrigin=""),s.href=a,n&&s.setAttribute("nonce",n),document.head.appendChild(s),m)return new Promise((p,y)=>{s.addEventListener("load",p),s.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>u()).catch(t=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t})},x=c.lazy(()=>l(async()=>{const{ProfilePage:e}=await import("./ProfilePage-CXeKYGvr.js");return{ProfilePage:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35])).then(({ProfilePage:e})=>({default:e}))),S=c.lazy(()=>l(async()=>{const{MainPage:e}=await import("./MainPage-BD_h9d-T.js");return{MainPage:e}},__vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,41])).then(({MainPage:e})=>({default:e}))),w=c.lazy(()=>l(async()=>{const{MyProjectsPage:e}=await import("./MyProjectsPage-BGl9UC75.js");return{MyProjectsPage:e}},__vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40])).then(({MyProjectsPage:e})=>({default:e}))),L=c.lazy(()=>l(async()=>{const{CatalogPage:e}=await import("./CatalogPage-dEs_-APf.js");return{CatalogPage:e}},__vite__mapDeps([43,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,44])).then(({CatalogPage:e})=>({default:e}))),I=c.lazy(()=>l(async()=>{const{InternalPage:e}=await import("./InternalPage-CM0dG97O.js");return{InternalPage:e}},__vite__mapDeps([45,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,46])).then(({InternalPage:e})=>({default:e}))),O=c.lazy(()=>l(async()=>{const{SpecialistServicesPage:e}=await import("./SpecialistServicesPage-BCvDgTJ8.js");return{SpecialistServicesPage:e}},__vite__mapDeps([47,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,48])).then(({SpecialistServicesPage:e})=>({default:e}))),R=()=>o.jsxs(E,{children:[o.jsx(i,{path:"/",element:o.jsx(S,{})}),o.jsx(i,{path:"profile",element:o.jsx(x,{})}),o.jsx(i,{path:"myProjects",element:o.jsx(w,{})}),o.jsx(i,{path:"catalog",element:o.jsx(L,{})}),o.jsx(i,{path:"internal",element:o.jsx(I,{})}),o.jsx(i,{path:"services",element:o.jsx(O,{})})]});h.createRoot(document.getElementById("root")).render(o.jsx(_,{basename:"/TeleWorks/",children:o.jsx(R,{})}));export{l as _};
