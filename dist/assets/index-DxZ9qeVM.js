const __vite__fileDeps=["assets/ProfilePage-P0fr72wV.js","assets/react-DAuq9I5S.js","assets/@babel-BUiOBcM-.js","assets/index-D5Noxjy-.js","assets/flowbite-react-CqS_BXli.js","assets/react-icons-Bb292ZcB.js","assets/tailwind-merge-3VKOpVsw.js","assets/classnames-iR1RLlz2.js","assets/debounce-0BFaHC-l.js","assets/@floating-ui-cBkDnv2t.js","assets/react-dom-BsE7utt3.js","assets/scheduler-CzFDRTuY.js","assets/tabbable-DNPBiPWX.js","assets/react-router-dom-DMQ57OMV.js","assets/react-router-PwrD_WQd.js","assets/@remix-run-BFLWy9pZ.js","assets/react-select-rFEejAEC.js","assets/@emotion-CdnRXs6w.js","assets/hoist-non-react-statics-Buxaj0Kl.js","assets/react-is-8JwjhRSi.js","assets/stylis-FDnFs_-n.js","assets/use-isomorphic-layout-effect-CbMVGqk-.js","assets/memoize-one-BdPwpGay.js","assets/swiper-DMhTBHQv.js","assets/swiper-Be9b3THL.css","assets/primereact-DgJVuzt_.js","assets/react-calendar-BykqarGe.js","assets/clsx-B-dksMZM.js","assets/get-user-locale-HKuPBaty.js","assets/mem-B1Wtd4fV.js","assets/mimic-fn-Bbosp5ci.js","assets/map-age-cleaner-7LjspSKX.js","assets/p-defer-O4M1dHHK.js","assets/@wojtekmaj-B-N8U4WN.js","assets/index-BcveRkSu.css","assets/ProfilePage-8xi6TDs1.css","assets/MainPage-BstG4qgV.js","assets/Header-B5ttgd5j.js","assets/@mui-DCQj4JTJ.js","assets/react-transition-group-B3_X90dl.js","assets/Header-wXPuXt99.css","assets/MainPage-91nPyx4S.css","assets/MyProjectsPage-WOHkFMPX.js","assets/CatalogPage-BaV813pb.js","assets/CatalogPage-BwuvGtMq.css","assets/InternalPage-BSAeO937.js","assets/InternalPage-DmM2vscP.css","assets/SpecialistServicesPage-BHnxt1Zp.js","assets/SpecialistServicesPage-BVxnQWla.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as c,j as o}from"./react-DAuq9I5S.js";import{c as h}from"./react-dom-BsE7utt3.js";import{B as _}from"./react-router-dom-DMQ57OMV.js";import{d as E,e as i}from"./react-router-PwrD_WQd.js";import"./@babel-BUiOBcM-.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-BFLWy9pZ.js";(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))P(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&P(n)}).observe(document,{childList:!0,subtree:!0});function d(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function P(r){if(r.ep)return;r.ep=!0;const t=d(r);fetch(r.href,t)}})();const j="modulepreload",v=function(e){return"/TeleWorks/"+e},f={},l=function(u,d,P){let r=Promise.resolve();if(d&&d.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),n=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(d.map(a=>{if(a=v(a),a in f)return;f[a]=!0;const m=a.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${g}`))return;const s=document.createElement("link");if(s.rel=m?"stylesheet":j,m||(s.as="script",s.crossOrigin=""),s.href=a,n&&s.setAttribute("nonce",n),document.head.appendChild(s),m)return new Promise((p,y)=>{s.addEventListener("load",p),s.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>u()).catch(t=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t})},x=c.lazy(()=>l(async()=>{const{ProfilePage:e}=await import("./ProfilePage-P0fr72wV.js");return{ProfilePage:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35])).then(({ProfilePage:e})=>({default:e}))),S=c.lazy(()=>l(async()=>{const{MainPage:e}=await import("./MainPage-BstG4qgV.js");return{MainPage:e}},__vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,41])).then(({MainPage:e})=>({default:e}))),w=c.lazy(()=>l(async()=>{const{MyProjectsPage:e}=await import("./MyProjectsPage-WOHkFMPX.js");return{MyProjectsPage:e}},__vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40])).then(({MyProjectsPage:e})=>({default:e}))),L=c.lazy(()=>l(async()=>{const{CatalogPage:e}=await import("./CatalogPage-BaV813pb.js");return{CatalogPage:e}},__vite__mapDeps([43,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,44])).then(({CatalogPage:e})=>({default:e}))),I=c.lazy(()=>l(async()=>{const{InternalPage:e}=await import("./InternalPage-BSAeO937.js");return{InternalPage:e}},__vite__mapDeps([45,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,46])).then(({InternalPage:e})=>({default:e}))),O=c.lazy(()=>l(async()=>{const{SpecialistServicesPage:e}=await import("./SpecialistServicesPage-BHnxt1Zp.js");return{SpecialistServicesPage:e}},__vite__mapDeps([47,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,48])).then(({SpecialistServicesPage:e})=>({default:e}))),R=()=>o.jsxs(E,{children:[o.jsx(i,{path:"/",element:o.jsx(S,{})}),o.jsx(i,{path:"profile",element:o.jsx(x,{})}),o.jsx(i,{path:"myProjects",element:o.jsx(w,{})}),o.jsx(i,{path:"catalog",element:o.jsx(L,{})}),o.jsx(i,{path:"internal",element:o.jsx(I,{})}),o.jsx(i,{path:"services",element:o.jsx(O,{})})]});h.createRoot(document.getElementById("root")).render(o.jsx(_,{basename:"/TeleWorks/",children:o.jsx(R,{})}));export{l as _};
