const __vite__fileDeps=["assets/ProfilePage-Cj06DYGa.js","assets/react-DAuq9I5S.js","assets/@babel-BUiOBcM-.js","assets/index-CPOx6OYF.js","assets/flowbite-react-BrPRBjFq.js","assets/react-icons-Bb292ZcB.js","assets/tailwind-merge-3VKOpVsw.js","assets/classnames-iR1RLlz2.js","assets/debounce-0BFaHC-l.js","assets/@floating-ui-CeFTVMit.js","assets/react-dom-VBx5aaw9.js","assets/scheduler-CzFDRTuY.js","assets/tabbable-DNPBiPWX.js","assets/react-router-dom-BGZc-yd9.js","assets/react-router-PwrD_WQd.js","assets/@remix-run-BFLWy9pZ.js","assets/react-select-B4RbSUgL.js","assets/@emotion-CdnRXs6w.js","assets/hoist-non-react-statics-Buxaj0Kl.js","assets/react-is-8JwjhRSi.js","assets/stylis-FDnFs_-n.js","assets/use-isomorphic-layout-effect-CbMVGqk-.js","assets/memoize-one-BdPwpGay.js","assets/@testing-library-ruu4kEeH.js","assets/pretty-format-i9H8DXB0.js","assets/ansi-regex-Cpp0pcJC.js","assets/dom-accessibility-api-DkckwH9x.js","assets/aria-query-Bfxid3OU.js","assets/dequal-C3hdbj_K.js","assets/lz-string-k179xXVT.js","assets/primereact-DgJVuzt_.js","assets/swiper-DMhTBHQv.js","assets/swiper-Be9b3THL.css","assets/react-calendar-BykqarGe.js","assets/clsx-B-dksMZM.js","assets/get-user-locale-HKuPBaty.js","assets/mem-B1Wtd4fV.js","assets/mimic-fn-Bbosp5ci.js","assets/map-age-cleaner-7LjspSKX.js","assets/p-defer-O4M1dHHK.js","assets/@wojtekmaj-B-N8U4WN.js","assets/react-redux-OkS5azjE.js","assets/use-sync-external-store-CgKZQt8c.js","assets/index-DJbnzYK5.css","assets/@reduxjs-UNmdh41Z.js","assets/redux-DITMfSWq.js","assets/immer-BPoY8EgY.js","assets/reselect-BeKUwQU7.js","assets/redux-thunk-ClJT1hhx.js","assets/ProfilePage-DlRWoCN9.css","assets/MainPage-C7PrZu2i.js","assets/Header-EdQp57Gl.js","assets/@mui-Bim6beBr.js","assets/react-transition-group-8gIVSao0.js","assets/Header-N0bIJjxy.css","assets/MainPage-91nPyx4S.css","assets/MyProjectsPage-LQvhSkfu.js","assets/CatalogPage-BxrDc__M.js","assets/CatalogPage-DDuwtkTR.css","assets/InternalPage-CpHcwtvP.js","assets/InternalPage-DmM2vscP.css","assets/SpecialistServicesPage-9LA-YcJh.js","assets/SpecialistServicesPage-BzpiukgU.css","assets/ProjectPage-DAUdoN6y.js","assets/ProjectPage-BGJhu3tC.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,j as c}from"./react-DAuq9I5S.js";import{c as S}from"./react-dom-VBx5aaw9.js";import{B as x}from"./react-router-dom-BGZc-yd9.js";import{d as _,e as k}from"./react-router-PwrD_WQd.js";import{u as E,P as T}from"./react-redux-OkS5azjE.js";import{c as j,a as A}from"./@reduxjs-UNmdh41Z.js";import"./@babel-BUiOBcM-.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-BFLWy9pZ.js";import"./use-sync-external-store-CgKZQt8c.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const O="modulepreload",R=function(e){return"/TeleWorks/"+e},m={},d=function(r,t,s){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.all(t.map(n=>{if(n=R(n),n in m)return;m[n]=!0;const u=n.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${g}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":O,u||(l.as="script",l.crossOrigin=""),l.href=n,i&&l.setAttribute("nonce",i),document.head.appendChild(l),u)return new Promise((h,v)=>{l.addEventListener("load",h),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${n}`)))})}))}return o.then(()=>r()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})},w=p.lazy(()=>d(async()=>{const{ProfilePage:e}=await import("./ProfilePage-Cj06DYGa.js");return{ProfilePage:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49])).then(({ProfilePage:e})=>({default:e}))),L=p.lazy(()=>d(async()=>{const{MainPage:e}=await import("./MainPage-C7PrZu2i.js");return{MainPage:e}},__vite__mapDeps([50,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,51,52,53,54,44,45,46,47,48,55])).then(({MainPage:e})=>({default:e}))),I=p.lazy(()=>d(async()=>{const{MyProjectsPage:e}=await import("./MyProjectsPage-LQvhSkfu.js");return{MyProjectsPage:e}},__vite__mapDeps([56,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,51,52,53,54,44,45,46,47,48])).then(({MyProjectsPage:e})=>({default:e}))),M=p.lazy(()=>d(async()=>{const{CatalogPage:e}=await import("./CatalogPage-BxrDc__M.js");return{CatalogPage:e}},__vite__mapDeps([57,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,51,52,53,54,44,45,46,47,48,58])).then(({CatalogPage:e})=>({default:e}))),C=p.lazy(()=>d(async()=>{const{InternalPage:e}=await import("./InternalPage-CpHcwtvP.js");return{InternalPage:e}},__vite__mapDeps([59,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,51,52,53,54,44,45,46,47,48,60])).then(({InternalPage:e})=>({default:e}))),D=p.lazy(()=>d(async()=>{const{SpecialistServicesPage:e}=await import("./SpecialistServicesPage-9LA-YcJh.js");return{SpecialistServicesPage:e}},__vite__mapDeps([61,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,51,52,53,54,44,45,46,47,48,62])).then(({SpecialistServicesPage:e})=>({default:e}))),b=p.lazy(()=>d(async()=>{const{ProjectPage:e}=await import("./ProjectPage-DAUdoN6y.js");return{ProjectPage:e}},__vite__mapDeps([63,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,51,52,53,54,44,45,46,47,48,64])).then(({ProjectPage:e})=>({default:e}))),z=[{path:"/",element:c.jsx(L,{})},{path:"profile",element:c.jsx(w,{})},{path:"myProjects",element:c.jsx(I,{})},{path:"catalog",element:c.jsx(M,{})},{path:"internal",element:c.jsx(C,{})},{path:"services",element:c.jsx(D,{})},{path:"project",element:c.jsx(b,{})}],V=()=>c.jsx(_,{children:z.map(e=>c.jsx(k,{path:e.path,element:e.element},e.path))}),P=1.5,y={packs:{Базовый:{packPrice:0,editionsAmounts:1,extraServices:{}},Стандарт:{packPrice:0,editionsAmounts:1,extraServices:{}},Премиум:{packPrice:0,editionsAmounts:1,extraServices:{}}},finalPrice:0},f=j({name:"checkoutOrder",initialState:y,reducers:{setCheckoutOrderState:(e,r)=>{for(const t in r.payload)e[t]=r.payload[t]},changeFinalPrice:(e,r)=>{e.finalPrice=r.payload,e=y},setPackPrice:(e,r)=>{const t=r.payload.price;e.packs[r.payload.packType].packPrice=t,e.finalPrice+=t},changeeditionsAmounts:(e,r)=>{e.packs[r.payload.packType].editionsAmounts+=r.payload.amounts,r.payload.amounts>0?e.finalPrice*=P:e.finalPrice/=P,e.finalPrice=Math.round(e.finalPrice)},clearEditionsAmounts:(e,r)=>{e.packs[r.payload.packType].editionsAmounts=r.payload.amounts},changeExtraServiceAmounts:(e,r)=>{const t=e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].amount,s=e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].price;(isNaN(t)||!t)&&(e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].amount=1),e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].amount+=r.payload.extraServiceAmount,e.finalPrice+=s*r.payload.extraServiceAmount},changeExtraServices:(e,r)=>{const t=e.packs[r.payload.packType].extraServices;for(const s of r.payload.extraServices)t[s.title]=s;e.packs[r.payload.packType].extraServices=t},changeExtraServiceSelected:(e,r)=>{e.packs[r.payload.packType].extraServices[r.payload.extraService.title].selected=r.payload.changeTo;let t=e.packs[r.payload.packType].extraServices[r.payload.extraService.title].amount;t||(t=1),r.payload.changeTo?e.finalPrice+=r.payload.extraService.price*t:e.finalPrice-=r.payload.extraService.price*t}}}),te=f.actions,B=f.reducer,N={checkoutOrderReducer:B},q=A({reducer:N}),ae=()=>E();S.createRoot(document.getElementById("root")).render(c.jsx(T,{store:q,children:c.jsx(x,{basename:"/TeleWorks/",children:c.jsx(V,{})})}));export{d as _,te as c,ae as u};
