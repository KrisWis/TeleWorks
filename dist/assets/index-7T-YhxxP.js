const __vite__fileDeps=["assets/ProfilePage-Dk_LQ4ea.js","assets/react-DAuq9I5S.js","assets/@babel-BUiOBcM-.js","assets/index-DKF9S9kr.js","assets/flowbite-react-CqS_BXli.js","assets/react-icons-Bb292ZcB.js","assets/tailwind-merge-3VKOpVsw.js","assets/classnames-iR1RLlz2.js","assets/debounce-0BFaHC-l.js","assets/@floating-ui-cBkDnv2t.js","assets/react-dom-BsE7utt3.js","assets/scheduler-CzFDRTuY.js","assets/tabbable-DNPBiPWX.js","assets/react-router-dom-DMQ57OMV.js","assets/react-router-PwrD_WQd.js","assets/@remix-run-BFLWy9pZ.js","assets/react-select-rFEejAEC.js","assets/@emotion-CdnRXs6w.js","assets/hoist-non-react-statics-Buxaj0Kl.js","assets/react-is-8JwjhRSi.js","assets/stylis-FDnFs_-n.js","assets/use-isomorphic-layout-effect-CbMVGqk-.js","assets/memoize-one-BdPwpGay.js","assets/primereact-DgJVuzt_.js","assets/swiper-DMhTBHQv.js","assets/swiper-Be9b3THL.css","assets/react-calendar-BykqarGe.js","assets/clsx-B-dksMZM.js","assets/get-user-locale-HKuPBaty.js","assets/mem-B1Wtd4fV.js","assets/mimic-fn-Bbosp5ci.js","assets/map-age-cleaner-7LjspSKX.js","assets/p-defer-O4M1dHHK.js","assets/@wojtekmaj-B-N8U4WN.js","assets/index-DnXssOux.css","assets/ProfilePage-gf70Oahp.css","assets/MainPage-D6WI-jg0.js","assets/Header-DRD8np2v.js","assets/@mui-DCQj4JTJ.js","assets/react-transition-group-B3_X90dl.js","assets/Header-ySZawr2J.css","assets/MainPage-91nPyx4S.css","assets/MyProjectsPage-DM1KVKHa.js","assets/CatalogPage-BxKNaa8_.js","assets/CatalogPage-DDuwtkTR.css","assets/InternalPage-H87Yi8Ez.js","assets/InternalPage-DmM2vscP.css","assets/SpecialistServicesPage-C5WTNC8T.js","assets/SpecialistServicesPage-BzpiukgU.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as c,j as r}from"./react-DAuq9I5S.js";import{c as y}from"./react-dom-BsE7utt3.js";import{B as _}from"./react-router-dom-DMQ57OMV.js";import{d as j,e as i}from"./react-router-PwrD_WQd.js";import"./@babel-BUiOBcM-.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-BFLWy9pZ.js";(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))f(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&f(o)}).observe(document,{childList:!0,subtree:!0});function d(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(n){if(n.ep)return;n.ep=!0;const t=d(n);fetch(n.href,t)}})();const x="modulepreload",E=function(e){return"/TeleWorks/"+e},P={},l=function(u,d,f){let n=Promise.resolve();if(d&&d.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),o=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));n=Promise.all(d.map(a=>{if(a=E(a),a in P)return;P[a]=!0;const m=a.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${p}`))return;const s=document.createElement("link");if(s.rel=m?"stylesheet":x,m||(s.as="script",s.crossOrigin=""),s.href=a,o&&s.setAttribute("nonce",o),document.head.appendChild(s),m)return new Promise((g,h)=>{s.addEventListener("load",g),s.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return n.then(()=>u()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},v=c.lazy(()=>l(async()=>{const{ProfilePage:e}=await import("./ProfilePage-Dk_LQ4ea.js");return{ProfilePage:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35])).then(({ProfilePage:e})=>({default:e}))),S=c.lazy(()=>l(async()=>{const{MainPage:e}=await import("./MainPage-D6WI-jg0.js");return{MainPage:e}},__vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,41])).then(({MainPage:e})=>({default:e}))),w=c.lazy(()=>l(async()=>{const{MyProjectsPage:e}=await import("./MyProjectsPage-DM1KVKHa.js");return{MyProjectsPage:e}},__vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40])).then(({MyProjectsPage:e})=>({default:e}))),L=c.lazy(()=>l(async()=>{const{CatalogPage:e}=await import("./CatalogPage-BxKNaa8_.js");return{CatalogPage:e}},__vite__mapDeps([43,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,44])).then(({CatalogPage:e})=>({default:e}))),I=c.lazy(()=>l(async()=>{const{InternalPage:e}=await import("./InternalPage-H87Yi8Ez.js");return{InternalPage:e}},__vite__mapDeps([45,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,46])).then(({InternalPage:e})=>({default:e}))),O=c.lazy(()=>l(async()=>{const{SpecialistServicesPage:e}=await import("./SpecialistServicesPage-C5WTNC8T.js");return{SpecialistServicesPage:e}},__vite__mapDeps([47,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38,39,40,48])).then(({SpecialistServicesPage:e})=>({default:e}))),R=()=>r.jsxs(j,{children:[r.jsx(i,{path:"/",element:r.jsx(S,{})}),r.jsx(i,{path:"profile",element:r.jsx(v,{})}),r.jsx(i,{path:"myProjects",element:r.jsx(w,{})}),r.jsx(i,{path:"catalog",element:r.jsx(L,{})}),r.jsx(i,{path:"internal",element:r.jsx(I,{})}),r.jsx(i,{path:"services",element:r.jsx(O,{})}),r.jsx(i,{path:"yandex_9c2f8f4e16e0e9d6.html",element:r.jsxs("html",{children:[r.jsx("head",{children:r.jsx("meta",{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"})}),r.jsx("body",{children:"Verification: 9c2f8f4e16e0e9d6"})]})})]});y.createRoot(document.getElementById("root")).render(r.jsx(_,{basename:"/TeleWorks/",children:r.jsx(R,{})}));export{l as _};
