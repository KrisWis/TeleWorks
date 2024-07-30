const __vite__fileDeps=["assets/CatalogPage-CniOH-KB.js","assets/react-BzMsQ5fY.js","assets/@babel-t2wm9ggw.js","assets/BaseLayout__data-BIlXY_-U.js","assets/BaseLayout__data-DozUlFKs.css","assets/Header-BA9MjStK.js","assets/react-router-dom-D4LcmeyG.js","assets/react-dom-BuJph8qg.js","assets/scheduler-CzFDRTuY.js","assets/react-router-CK7befIU.js","assets/@remix-run-BFLWy9pZ.js","assets/flowbite-react-DBNtI9Me.js","assets/react-icons-CUP1X0kX.js","assets/tailwind-merge-3VKOpVsw.js","assets/classnames-Cv2EC4ZB.js","assets/debounce-8JXCRcFS.js","assets/@floating-ui-CwTQUhDo.js","assets/tabbable-DNPBiPWX.js","assets/@mui-CBtDQyOv.js","assets/clsx-B-dksMZM.js","assets/@emotion-B1-ZkL5s.js","assets/hoist-non-react-statics-Buxaj0Kl.js","assets/react-is-8JwjhRSi.js","assets/stylis-FDnFs_-n.js","assets/react-transition-group-DYfN_r-r.js","assets/Header-DMHBL_YO.css","assets/Filter-DdM5FHyB.js","assets/Select-DZB1y2Zo.js","assets/react-select-Cl0T8Q2z.js","assets/use-isomorphic-layout-effect-Bt6Fua4W.js","assets/memoize-one-BdPwpGay.js","assets/Select-St5ZGlRP.css","assets/Filter-Dpv2LtJB.css","assets/primereact-H2fAtapH.js","assets/index-CjzWs837.js","assets/index-DTlahFPw.js","assets/react-loadingg-BedcRbEI.js","assets/styled-components-CAI4O1Yi.js","assets/merge-anything-D_kaZiAl.js","assets/is-what-BcD0NeHv.js","assets/react-redux-DFT1Ebys.js","assets/use-sync-external-store-D2ba5IqY.js","assets/@reduxjs-UNmdh41Z.js","assets/redux-DITMfSWq.js","assets/immer-BPoY8EgY.js","assets/reselect-BeKUwQU7.js","assets/redux-thunk-ClJT1hhx.js","assets/CatalogPage-WCE7pzvc.css","assets/InternalPage-CdtaZoOz.js","assets/InternalPage-BRvjVsi4.css","assets/MainPage-DbwdlFaQ.js","assets/MainPage-C1qIEOFw.css","assets/MyProjectsPage-CIxeyNnS.js","assets/MyProjectsPage-DcQEtLak.css","assets/MyProjectsPage-CU0Sl27D.css","assets/ProfilePage-qxWYWsIH.js","assets/index-DBMEHFqk.js","assets/index-10M_thu8.js","assets/ProfilePage-Lqol1ddZ.css","assets/ProjectPage-CTFWk806.js","assets/ProjectItem-UYWfENLe.js","assets/swiper-DeodMr5G.js","assets/swiper-Be9b3THL.css","assets/ProjectItem-B7VeUlXF.css","assets/ProjectPage-DP83L1ar.css","assets/SpecialistServicesPage-D7KriT1F.js","assets/SpecialistServicesPage-m8ndPShW.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,j as c}from"./react-BzMsQ5fY.js";import{c as E}from"./react-dom-BuJph8qg.js";import{B as k}from"./react-router-dom-D4LcmeyG.js";import{l as T}from"./react-loadingg-BedcRbEI.js";import{d as j,e as A}from"./react-router-CK7befIU.js";import{u as O,P as R}from"./react-redux-DFT1Ebys.js";import{c as L,a as I}from"./@reduxjs-UNmdh41Z.js";import{c as m}from"./redux-DITMfSWq.js";import"./@babel-t2wm9ggw.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-BFLWy9pZ.js";import"./styled-components-CAI4O1Yi.js";import"./react-is-8JwjhRSi.js";import"./merge-anything-D_kaZiAl.js";import"./is-what-BcD0NeHv.js";import"./use-sync-external-store-D2ba5IqY.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const M="modulepreload",w=function(e){return"/TeleWorks/"+e},P={},d=function(r,a,i){let t=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),n=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));t=Promise.all(a.map(s=>{if(s=w(s),s in P)return;P[s]=!0;const u=s.endsWith(".css"),S=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${S}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":M,u||(l.as="script",l.crossOrigin=""),l.href=s,n&&l.setAttribute("nonce",n),document.head.appendChild(l),u)return new Promise((x,_)=>{l.addEventListener("load",x),l.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${s}`)))})}))}return t.then(()=>r()).catch(o=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o})},C=p.lazy(()=>d(async()=>{const{CatalogPage:e}=await import("./CatalogPage-CniOH-KB.js");return{CatalogPage:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47])).then(({CatalogPage:e})=>({default:e}))),b=p.lazy(()=>d(async()=>{const{InternalPage:e}=await import("./InternalPage-CdtaZoOz.js");return{InternalPage:e}},__vite__mapDeps([48,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,34,35,36,37,38,39,40,41,42,43,44,45,46,49])).then(({InternalPage:e})=>({default:e}))),D=p.lazy(()=>d(async()=>{const{MainPage:e}=await import("./MainPage-DbwdlFaQ.js");return{MainPage:e}},__vite__mapDeps([50,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,36,37,38,39,40,41,42,43,44,45,46,51])).then(({MainPage:e})=>({default:e}))),V=p.lazy(()=>d(async()=>{const{MyProjectsPage:e}=await import("./MyProjectsPage-CIxeyNnS.js");return{MyProjectsPage:e}},__vite__mapDeps([52,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,34,35,36,37,38,39,40,41,42,43,44,45,46,53,54])).then(({MyProjectsPage:e})=>({default:e}))),z=p.lazy(()=>d(async()=>{const{ProfilePage:e}=await import("./ProfilePage-qxWYWsIH.js");return{ProfilePage:e}},__vite__mapDeps([55,1,2,3,4,56,57,7,8,6,9,10,36,37,22,38,39,40,41,42,43,44,45,46,58])).then(({ProfilePage:e})=>({default:e}))),N=p.lazy(()=>d(async()=>{const{ProjectPage:e}=await import("./ProjectPage-CTFWk806.js");return{ProjectPage:e}},__vite__mapDeps([59,1,2,3,4,60,61,62,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,63,56,40,41,35,36,37,38,39,42,43,44,45,46,64])).then(({ProjectPage:e})=>({default:e}))),B=p.lazy(()=>d(async()=>{const{SpecialistServicesPage:e}=await import("./SpecialistServicesPage-D7KriT1F.js");return{SpecialistServicesPage:e}},__vite__mapDeps([65,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,28,29,30,31,60,61,62,63,26,32,35,36,37,38,39,40,41,42,43,44,45,46,66])).then(({SpecialistServicesPage:e})=>({default:e})));var $=(e=>(e.MAIN="/",e.PROFILE="/profile",e.MYPROJECTS="/myProjects",e.CATALOG="/catalog",e.INTERNAL="/internal",e.SERVICES="/services",e.PROJECT="/project",e))($||{});const q=[{path:"/",element:c.jsx(D,{})},{path:"/profile",element:c.jsx(z,{})},{path:"/myProjects",element:c.jsx(V,{})},{path:"/catalog",element:c.jsx(C,{})},{path:"/internal",element:c.jsx(b,{})},{path:"/services",element:c.jsx(B,{})},{path:"/project",element:c.jsx(N,{})}],F=()=>c.jsx(p.Suspense,{fallback:c.jsx(T.SemipolarLoading,{}),children:c.jsx(j,{children:q.map(e=>c.jsx(A,{path:e.path,element:e.element},e.path))})});function U(e){const r={...e};let a=m(r),i=[];return{getReducerMap:()=>r,reduce:(t,o)=>(i.length>0&&(t={...t},i.forEach(n=>{delete t[n]}),i=[]),a(t,o)),add:(t,o)=>{!t||r[t]||(r[t]=o,a=m(r))},remove:t=>{!t||!r[t]||(delete r[t],i.push(t),a=m(r))}}}const f=1.5,y={packs:{Базовый:{packPrice:0,editionsAmounts:1,extraServices:{}},Стандарт:{packPrice:0,editionsAmounts:1,extraServices:{}},Премиум:{packPrice:0,editionsAmounts:1,extraServices:{}}},finalPrice:0},g=L({name:"checkoutOrder",initialState:y,reducers:{setCheckoutOrderState:(e,r)=>{for(const a in r.payload)e[a]=r.payload[a]},changeFinalPrice:(e,r)=>{e.finalPrice=r.payload,e=y},setPackPrice:(e,r)=>{const a=r.payload.price;e.packs[r.payload.packType].packPrice=a,e.finalPrice+=a},changeeditionsAmounts:(e,r)=>{e.packs[r.payload.packType].editionsAmounts+=r.payload.amounts,r.payload.amounts>0?e.finalPrice*=f:e.finalPrice/=f,e.finalPrice=Math.round(e.finalPrice)},clearEditionsAmounts:(e,r)=>{e.packs[r.payload.packType].editionsAmounts=r.payload.amounts},changeExtraServiceAmounts:(e,r)=>{const a=e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].amount,i=e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].price;(isNaN(a)||!a)&&(e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].amount=1),e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].amount+=r.payload.extraServiceAmount,e.finalPrice+=i*r.payload.extraServiceAmount},changeExtraServices:(e,r)=>{const a=e.packs[r.payload.packType].extraServices;for(const i of r.payload.extraServices)a[i.title]=i;e.packs[r.payload.packType].extraServices=a},changeExtraServiceSelected:(e,r)=>{e.packs[r.payload.packType].extraServices[r.payload.extraService.title].selected=r.payload.changeTo;let a=e.packs[r.payload.packType].extraServices[r.payload.extraService.title].amount;a||(a=1),r.payload.changeTo?e.finalPrice+=r.payload.extraService.price*a:e.finalPrice-=r.payload.extraService.price*a}}}),ue=g.actions,W=g.reducer,J={checkoutOrderReducer:W},h=U(J),v=I({reducer:h.reduce});v.reducerManager=h;const me=()=>O();E.createRoot(document.getElementById("root")).render(c.jsx(R,{store:v,children:c.jsx(k,{basename:"/TeleWorks/",children:c.jsx(F,{})})}));export{$ as R,d as _,ue as c,me as u};
