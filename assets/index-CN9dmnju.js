const __vite__fileDeps=["assets/ProfilePage-BC9Wb4u4.js","assets/react-DAuq9I5S.js","assets/@babel-BUiOBcM-.js","assets/swiper-DMhTBHQv.js","assets/swiper-Be9b3THL.css","assets/react-dom-BsE7utt3.js","assets/scheduler-CzFDRTuY.js","assets/react-router-dom-BIzsFd0e.js","assets/react-router-DDMyVUTn.js","assets/@remix-run-Bwh-Hsl8.js","assets/flowbite-react-CqS_BXli.js","assets/react-icons-Bb292ZcB.js","assets/tailwind-merge-3VKOpVsw.js","assets/classnames-iR1RLlz2.js","assets/debounce-0BFaHC-l.js","assets/@floating-ui-cBkDnv2t.js","assets/tabbable-DNPBiPWX.js","assets/@mui-DNj8DOP0.js","assets/clsx-B-dksMZM.js","assets/@emotion-DSDID1My.js","assets/hoist-non-react-statics-Buxaj0Kl.js","assets/react-is-8JwjhRSi.js","assets/stylis-BqmD5Vow.js","assets/react-transition-group-B3_X90dl.js","assets/ProfilePage-BPBf0tPO.css","assets/MainPage-B5_fGaO2.js","assets/MainPage-DVZdZl4j.css","assets/MyProjectsPage-DVcAIVdK.js","assets/MyProjectsPage-CjWpF9P2.css","assets/HowItWorks-B_rPCYEj.js","assets/HowItWorks-Dv3JGSz-.css","assets/MeetAdvantages-CK8sQDZr.js","assets/MeetAdvantages-IW5_nmrM.css","assets/Platform_Privileges-CBcnbgBv.js","assets/Platform_Privileges-CGB2EG3A.css","assets/Additional_Services-Ch_YDhkz.js","assets/Additional_Services-B0iZQ4OZ.css","assets/Ads-B7G0mIDs.js","assets/Ads-BIBToJrH.css","assets/Guarantor_Services-C2aCk-ns.js","assets/Guarantor_Services-Dz_w5kb2.css","assets/Job_Risks-B6EZo9iT.js","assets/Job_Risks-C5Ut5GTN.css","assets/Transaction_Advantage-ByJAhUFg.js","assets/Transaction_Advantage-wLGF2oAy.css","assets/SupportService-l4CHbGt8.js","assets/SupportService-BlboMAsC.css","assets/Buy_ads-DF3EEZxV.js","assets/react-calendar-BykqarGe.js","assets/get-user-locale-HKuPBaty.js","assets/mem-B1Wtd4fV.js","assets/mimic-fn-Bbosp5ci.js","assets/map-age-cleaner-7LjspSKX.js","assets/p-defer-O4M1dHHK.js","assets/@wojtekmaj-B-N8U4WN.js","assets/react-select-ByRAKdwk.js","assets/use-isomorphic-layout-effect-CbMVGqk-.js","assets/memoize-one-BdPwpGay.js","assets/Buy_ads-C8ihsIjD.css","assets/Channel_stats-VApKLgkW.js","assets/Channel_stats-BXvbmVb6.css","assets/Channel_reviews-CLdLRQTF.js","assets/primereact-DgJVuzt_.js","assets/Channel_reviews-lSWKqpE5.css","assets/Reviews-CaS1UUoW.js","assets/Reviews-DTocZMn4.css","assets/Similar_channels-xaRVPjpP.js","assets/Similar_channels-CgxrNKoc.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as n,j as t}from"./react-DAuq9I5S.js";import{c as E}from"./react-dom-BsE7utt3.js";import{L as i,B as A}from"./react-router-dom-BIzsFd0e.js";import{d as R,e as w,f as N}from"./react-router-DDMyVUTn.js";import{D as o}from"./flowbite-react-CqS_BXli.js";import"./swiper-DMhTBHQv.js";import{S as k}from"./@mui-DNj8DOP0.js";import"./@babel-BUiOBcM-.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Bwh-Hsl8.js";import"./react-icons-Bb292ZcB.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-iR1RLlz2.js";import"./debounce-0BFaHC-l.js";import"./@floating-ui-cBkDnv2t.js";import"./tabbable-DNPBiPWX.js";import"./clsx-B-dksMZM.js";import"./@emotion-DSDID1My.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./react-transition-group-B3_X90dl.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&p(d)}).observe(document,{childList:!0,subtree:!0});function c(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(r){if(r.ep)return;r.ep=!0;const a=c(r);fetch(r.href,a)}})();const I="modulepreload",S=function(e){return"/TeleWorks/"+e},P={},s=function(l,c,p){let r=Promise.resolve();if(c&&c.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.all(c.map(m=>{if(m=S(m),m in P)return;P[m]=!0;const u=m.endsWith(".css"),x=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":I,u||(h.as="script",h.crossOrigin=""),h.href=m,d&&h.setAttribute("nonce",d),document.head.appendChild(h),u)return new Promise((j,g)=>{h.addEventListener("load",j),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${m}`)))})}))}return r.then(()=>l()).catch(a=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a})},B=n.lazy(()=>s(async()=>{const{ProfilePage:e}=await import("./ProfilePage-BC9Wb4u4.js");return{ProfilePage:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])).then(({ProfilePage:e})=>({default:e}))),L=n.lazy(()=>s(async()=>{const{MainPage:e}=await import("./MainPage-B5_fGaO2.js");return{MainPage:e}},__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26])).then(({MainPage:e})=>({default:e}))),T=n.lazy(()=>s(async()=>{const{MyProjectsPage:e}=await import("./MyProjectsPage-DVcAIVdK.js");return{MyProjectsPage:e}},__vite__mapDeps([27,1,2,7,5,6,8,9,3,4,10,11,12,13,14,15,16,17,18,19,20,21,22,23,28])).then(({MyProjectsPage:e})=>({default:e}))),C=()=>t.jsxs(R,{children:[t.jsx(w,{path:"/",element:t.jsx(L,{})}),t.jsx(w,{path:"profile/:id",element:t.jsx(B,{})}),t.jsx(w,{path:"myProjects/:id",element:t.jsx(T,{})})]}),O="_header_qn90p_1",D="_header__caption_qn90p_27",z="_header__caption__span_qn90p_34",M="_header__items_qn90p_37",q="_header__item_qn90p_37",V="_header__item__switcher_qn90p_44",H="_header__item__title_qn90p_51",W="_header__item__link_qn90p_59",$="_header__item__navbar_qn90p_68",G="_header__item__navbar_dropdown_qn90p_72",J="_header__item__navbar_dropdown_item_qn90p_86",U="_header__item__navbar_dropdown_link_qn90p_91",Z="_header__item__navbar_dropdown_leave_qn90p_101",F="_header__item__login_qn90p_113",Q="_header__item__reg_qn90p_118",_={header:O,header__caption:D,header__caption__span:z,header__items:M,header__item:q,header__item__switcher:V,header__item__title:H,header__item__link:W,header__item__navbar:$,header__item__navbar_dropdown:G,header__item__navbar_dropdown_item:J,header__item__navbar_dropdown_link:U,header__item__navbar_dropdown_leave:Z,header__item__login:F,header__item__reg:Q},Y="_Button_1mnbz_1",K="_Button__red_1mnbz_18",X="_Button__blue_1mnbz_28",ee="_Button__white_1mnbz_38",te="_Button__gray_1mnbz_50",v={Button:Y,Button__red:K,Button__blue:X,Button__white:ee,Button__gray:te},b=({to:e,text:l,className:c,type:p})=>t.jsx(t.Fragment,{children:e?t.jsx(i,{to:e,className:`${v.Button} ${v[p]} ${c}`,children:l}):t.jsx("div",{className:`${v.Button} ${v[p]} ${c}`,children:l})});var f=(e=>(e.RED="Button__red",e.BLUE="Button__blue",e.GRAY="Button__gray",e.WHITE="Button__white",e))(f||{});const _e=()=>t.jsxs("header",{className:_.header,children:[t.jsxs("h1",{className:_.header__caption,children:["Tele",t.jsx("span",{className:_.header__caption__span,children:"Works"})]}),t.jsxs("div",{className:_.header__items,children:[t.jsx("div",{className:_.header__item__switcher,children:t.jsx("span",{className:_.header__item__title,children:"Заказчик"})}),t.jsx(k,{"data-testid":"headerSwitcher",className:"header__item__switcherComponent",inputProps:{"aria-label":'Свитчер "Заказчик/Исполнитель"'},defaultChecked:!0}),t.jsx("div",{className:_.header__item__switcher,children:t.jsx("span",{className:_.header__item__title,children:"Исполнитель"})}),t.jsx(i,{"data-testid":"headerLink",to:"/",className:`${_.header__item__title} ${_.header__item__link}`,children:"Сервисы"}),t.jsx("div",{className:_.header__item__navbar,children:t.jsxs(o,{"data-testid":"headerDropDown",className:_.header__item__navbar_dropdown,label:"",dismissOnClick:!1,renderTrigger:()=>t.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsxs("g",{clipPath:"url(#clip0_17_16)",children:[t.jsx("path",{d:"M28.125 26.25H1.87501C0.839435 26.25 0 25.4105 0 24.375C0 23.3395 0.839435 22.5 1.87501 22.5H28.1251C29.1606 22.5 30.0001 23.3395 30.0001 24.375C30 25.4105 29.1606 26.25 28.125 26.25Z",fill:"black"}),t.jsx("path",{d:"M28.125 16.875H1.87501C0.839435 16.875 0 16.0355 0 15C0 13.9645 0.839435 13.125 1.87501 13.125H28.1251C29.1606 13.125 30.0001 13.9644 30.0001 15C30.0001 16.0356 29.1606 16.875 28.125 16.875Z",fill:"black"}),t.jsx("path",{d:"M28.125 7.50002H1.87501C0.839435 7.50002 0 6.66059 0 5.62501C0 4.58944 0.839435 3.75 1.87501 3.75H28.1251C29.1606 3.75 30.0001 4.58944 30.0001 5.62501C30.0001 6.66059 29.1606 7.50002 28.125 7.50002Z",fill:"black"})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_17_16",children:t.jsx("rect",{width:"30",height:"30",fill:"white"})})})]}),children:[t.jsx(o.Item,{className:_.header__item__navbar_dropdown_item,children:t.jsx(i,{className:_.header__item__navbar_dropdown_link,to:"/",children:"Мой аккаунт TeleWorks"})}),t.jsx(o.Item,{className:_.header__item__navbar_dropdown_item,children:t.jsx(i,{className:_.header__item__navbar_dropdown_link,to:"/",children:"Мои каналы"})}),t.jsx(o.Item,{className:_.header__item__navbar_dropdown_item,children:t.jsx(i,{className:_.header__item__navbar_dropdown_link,to:"/",children:"Избранное"})}),t.jsx(o.Item,{className:_.header__item__navbar_dropdown_item,children:t.jsx(i,{className:_.header__item__navbar_dropdown_link,to:"/",children:"Мои шаблоны"})}),t.jsx(o.Item,{className:_.header__item__navbar_dropdown_item,children:t.jsx(i,{className:_.header__item__navbar_dropdown_link,to:"/",children:"Заявки"})}),t.jsx(o.Item,{className:_.header__item__navbar_dropdown_item,children:t.jsx(i,{className:_.header__item__navbar_dropdown_link,to:"/",children:"Мои услуги"})}),t.jsx(o.Item,{className:_.header__item__navbar_dropdown_item,children:t.jsx(i,{className:_.header__item__navbar_dropdown_link,to:"/",children:"Мой аккаунт TeleWorks"})}),t.jsx(o.Item,{className:_.header__item__navbar_dropdown_item,children:t.jsx(i,{className:_.header__item__navbar_dropdown_link,to:"/",children:"История транзакций"})}),t.jsx(o.Item,{className:_.header__item__navbar_dropdown_item,children:t.jsx(i,{className:_.header__item__navbar_dropdown_link,to:"/",children:"Баланс"})}),t.jsx(o.Item,{className:_.header__item__navbar_dropdown_item,children:t.jsx(i,{className:_.header__item__navbar_dropdown_link,to:"/",children:"Рефералы"})}),t.jsx(o.Item,{className:_.header__item__navbar_dropdown_item,children:t.jsx(i,{className:_.header__item__navbar_dropdown_leave,to:"/",children:"Выйти"})})]})}),t.jsx(b,{type:f.RED,className:_.header__item__login,to:"/",text:"Войти"}),t.jsx(b,{to:"/",className:_.header__item__reg,text:"Регистрация",type:f.GRAY})]})]}),ae=location.port;let y;ae=="6006"?y="":y="/TeleWorks";const Ne=y,ke=window.matchMedia("(max-width: 1200px)"),Ie=window.matchMedia("(max-width: 600px)"),Se=n.lazy(()=>s(async()=>{const{HowItWorks:e}=await import("./HowItWorks-B_rPCYEj.js");return{HowItWorks:e}},__vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,30])).then(({HowItWorks:e})=>({default:e}))),Be=n.lazy(()=>s(async()=>{const{MeetAdvantages:e}=await import("./MeetAdvantages-CK8sQDZr.js");return{MeetAdvantages:e}},__vite__mapDeps([31,1,2,32])).then(({MeetAdvantages:e})=>({default:e}))),Le=n.lazy(()=>s(async()=>{const{Platform_Privileges:e}=await import("./Platform_Privileges-CBcnbgBv.js");return{Platform_Privileges:e}},__vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,34])).then(({Platform_Privileges:e})=>({default:e}))),Te=n.lazy(()=>s(async()=>{const{Additional_Services:e}=await import("./Additional_Services-Ch_YDhkz.js");return{Additional_Services:e}},__vite__mapDeps([35,1,2,5,6,7,8,9,10,11,12,13,14,15,16,3,4,17,18,19,20,21,22,23,36])).then(({Additional_Services:e})=>({default:e}))),Ce=n.lazy(()=>s(async()=>{const{Ads:e}=await import("./Ads-B7G0mIDs.js");return{Ads:e}},__vite__mapDeps([37,1,2,5,6,7,8,9,10,11,12,13,14,15,16,3,4,17,18,19,20,21,22,23,38])).then(({Ads:e})=>({default:e}))),Oe=n.lazy(()=>s(async()=>{const{Guarantor_Services:e}=await import("./Guarantor_Services-C2aCk-ns.js");return{Guarantor_Services:e}},__vite__mapDeps([39,1,2,5,6,7,8,9,10,11,12,13,14,15,16,3,4,17,18,19,20,21,22,23,40])).then(({Guarantor_Services:e})=>({default:e}))),De=n.lazy(()=>s(async()=>{const{Job_Risks:e}=await import("./Job_Risks-B6EZo9iT.js");return{Job_Risks:e}},__vite__mapDeps([41,1,2,42])).then(({Job_Risks:e})=>({default:e}))),ze=n.lazy(()=>s(async()=>{const{Transaction_Advantage:e}=await import("./Transaction_Advantage-ByJAhUFg.js");return{Transaction_Advantage:e}},__vite__mapDeps([43,1,2,5,6,7,8,9,10,11,12,13,14,15,16,3,4,17,18,19,20,21,22,23,44])).then(({Transaction_Advantage:e})=>({default:e}))),Me=n.lazy(()=>s(async()=>{const{SupportService:e}=await import("./SupportService-l4CHbGt8.js");return{SupportService:e}},__vite__mapDeps([45,1,2,5,6,7,8,9,10,11,12,13,14,15,16,3,4,17,18,19,20,21,22,23,46])).then(({SupportService:e})=>({default:e}))),qe=n.lazy(()=>s(async()=>{const{Buy_ads:e}=await import("./Buy_ads-DF3EEZxV.js");return{Buy_ads:e}},__vite__mapDeps([47,1,2,48,18,49,50,51,52,53,54,55,19,20,21,22,5,6,15,16,56,57,3,4,7,8,9,10,11,12,13,14,17,23,58])).then(({Buy_ads:e})=>({default:e}))),Ve=n.lazy(()=>s(async()=>{const{Channel_stats:e}=await import("./Channel_stats-VApKLgkW.js");return{Channel_stats:e}},__vite__mapDeps([59,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,60])).then(({Channel_stats:e})=>({default:e}))),He=n.lazy(()=>s(async()=>{const{Channel_reviews:e}=await import("./Channel_reviews-CLdLRQTF.js");return{Channel_reviews:e}},__vite__mapDeps([61,1,2,62,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,63])).then(({Channel_reviews:e})=>({default:e}))),We=n.lazy(()=>s(async()=>{const{Reviews:e}=await import("./Reviews-CaS1UUoW.js");return{Reviews:e}},__vite__mapDeps([64,1,2,55,19,20,21,22,5,6,15,16,56,57,3,4,7,8,9,10,11,12,13,14,17,18,23,65])).then(({Reviews:e})=>({default:e}))),$e=n.lazy(()=>s(async()=>{const{Similar_channels:e}=await import("./Similar_channels-xaRVPjpP.js");return{Similar_channels:e}},__vite__mapDeps([66,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,67])).then(({Similar_channels:e})=>({default:e}))),re=t.jsx(_e,{}),ne=()=>N(["/","myProjects/:id"].map(e=>({path:e,element:re})));E.createRoot(document.getElementById("root")).render(t.jsxs(A,{basename:"/TeleWorks/",children:[t.jsx(ne,{}),t.jsx(C,{})]}));export{Te as A,qe as B,Ve as C,Oe as G,Se as H,De as J,Be as M,Le as P,We as R,$e as S,ze as T,Ne as U,He as a,b,f as c,Ce as d,Me as e,Ie as m,ke as t};