const __vite__fileDeps=["assets/HowItWorks-CB9cdZxj.js","assets/react-DAuq9I5S.js","assets/@babel-BUiOBcM-.js","assets/swiper-DMhTBHQv.js","assets/swiper-Be9b3THL.css","assets/react-dom-BsE7utt3.js","assets/scheduler-CzFDRTuY.js","assets/react-router-dom-BIzsFd0e.js","assets/react-router-DDMyVUTn.js","assets/@remix-run-Bwh-Hsl8.js","assets/flowbite-react-CqS_BXli.js","assets/react-icons-Bb292ZcB.js","assets/tailwind-merge-3VKOpVsw.js","assets/classnames-iR1RLlz2.js","assets/debounce-0BFaHC-l.js","assets/@floating-ui-cBkDnv2t.js","assets/tabbable-DNPBiPWX.js","assets/@mui-DNj8DOP0.js","assets/clsx-B-dksMZM.js","assets/@emotion-DSDID1My.js","assets/hoist-non-react-statics-Buxaj0Kl.js","assets/react-is-8JwjhRSi.js","assets/stylis-BqmD5Vow.js","assets/react-transition-group-B3_X90dl.js","assets/HowItWorks-Dv3JGSz-.css","assets/MeetAdvantages-CK8sQDZr.js","assets/MeetAdvantages-IW5_nmrM.css","assets/Platform_Privileges-CLncD_dh.js","assets/Platform_Privileges-CGB2EG3A.css","assets/Additional_Services-UDoW-bmY.js","assets/Additional_Services-B0iZQ4OZ.css","assets/Ads-B_eOUS19.js","assets/Ads-BIBToJrH.css","assets/Guarantor_Services-BtLTaB2t.js","assets/Guarantor_Services-Dz_w5kb2.css","assets/Job_Risks-B6EZo9iT.js","assets/Job_Risks-C5Ut5GTN.css","assets/Transaction_Advantage-Cq98SiF2.js","assets/Transaction_Advantage-wLGF2oAy.css","assets/SupportService-CAh3tVl5.js","assets/SupportService-BlboMAsC.css","assets/Buy_ads-D9mF7Kbm.js","assets/react-calendar-BykqarGe.js","assets/get-user-locale-HKuPBaty.js","assets/mem-B1Wtd4fV.js","assets/mimic-fn-Bbosp5ci.js","assets/map-age-cleaner-7LjspSKX.js","assets/p-defer-O4M1dHHK.js","assets/@wojtekmaj-B-N8U4WN.js","assets/react-select-ByRAKdwk.js","assets/use-isomorphic-layout-effect-CbMVGqk-.js","assets/memoize-one-BdPwpGay.js","assets/Buy_ads-C8ihsIjD.css","assets/Channel_stats-CkIs7BDf.js","assets/Channel_stats-BXvbmVb6.css","assets/Channel_reviews-DFArhxTj.js","assets/primereact-DgJVuzt_.js","assets/Channel_reviews-lSWKqpE5.css","assets/Reviews-DdNpcxwk.js","assets/Reviews-DTocZMn4.css","assets/Similar_channels-CoMpZA70.js","assets/Similar_channels-CgxrNKoc.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as _,r as c}from"./react-DAuq9I5S.js";import{c as R}from"./react-dom-BsE7utt3.js";import{L as d,B as I}from"./react-router-dom-BIzsFd0e.js";import{D as u}from"./flowbite-react-CqS_BXli.js";import"./swiper-DMhTBHQv.js";import{d as W,e as A,f as H}from"./react-router-DDMyVUTn.js";import{S as k}from"./@mui-DNj8DOP0.js";import"./@babel-BUiOBcM-.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Bwh-Hsl8.js";import"./react-icons-Bb292ZcB.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-iR1RLlz2.js";import"./debounce-0BFaHC-l.js";import"./@floating-ui-cBkDnv2t.js";import"./tabbable-DNPBiPWX.js";import"./clsx-B-dksMZM.js";import"./@emotion-DSDID1My.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./react-transition-group-B3_X90dl.js";(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))j(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&j(n)}).observe(document,{childList:!0,subtree:!0});function x(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function j(r){if(r.ep)return;r.ep=!0;const a=x(r);fetch(r.href,a)}})();const V="modulepreload",F=function(e){return"/TeleWorks/"+e},T={},h=function(m,x,j){let r=Promise.resolve();if(x&&x.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),n=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.all(x.map(p=>{if(p=F(p),p in T)return;T[p]=!0;const y=p.endsWith(".css"),M=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${M}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":V,y||(v.as="script",v.crossOrigin=""),v.href=p,n&&v.setAttribute("nonce",n),document.head.appendChild(v),y)return new Promise(($,E)=>{v.addEventListener("load",$),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}return r.then(()=>m()).catch(a=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a})},Z="_header_42d34_1",O="_header__caption_42d34_27",q="_header__caption__span_42d34_34",D="_header__items_42d34_37",z="_header__item_42d34_37",K="_header__item__switcher_42d34_44",G="_header__item__title_42d34_50",U="_header__item__link_42d34_58",J="_header__item__navbar_42d34_66",Q="_header__item__navbar_dropdown_42d34_70",X="_header__item__navbar_dropdown_item_42d34_84",Y="_header__item__navbar_dropdown_link_42d34_89",__="_header__item__navbar_dropdown_leave_42d34_99",e_="_header__item__login_42d34_111",t_="_header__item__reg_42d34_116",t={header:Z,header__caption:O,header__caption__span:q,header__items:D,header__item:z,header__item__switcher:K,header__item__title:G,header__item__link:U,header__item__navbar:J,header__item__navbar_dropdown:Q,header__item__navbar_dropdown_item:X,header__item__navbar_dropdown_link:Y,header__item__navbar_dropdown_leave:__,header__item__login:e_,header__item__reg:t_},s_="_MainPage_button_red_10lnf_1",a_="_MainPage_button_red__hover_10lnf_18",L={MainPage_button_red:s_,MainPage_button_red__hover:a_},P=({to:e,text:m,className:x,hover:j=!1})=>_.jsx(d,{to:e,className:`${L.MainPage_button_red} ${x} ${j&&L.MainPage_button_red__hover}`,children:m}),i_=()=>_.jsxs("header",{className:t.header,children:[_.jsxs("h1",{className:t.header__caption,children:["Tele",_.jsx("span",{className:t.header__caption__span,children:"Works"})]}),_.jsxs("div",{className:t.header__items,children:[_.jsxs("div",{className:t.header__item__switcher,children:[_.jsx("span",{className:t.header__item__title,children:"Заказчик"}),_.jsx(k,{"data-testid":"headerSwitcher__1",className:"header__item__switcherComponent",inputProps:{"aria-label":'Свитчер "Заказчик"'},defaultChecked:!0})]}),_.jsxs("div",{className:t.header__item__switcher,children:[_.jsx("span",{className:t.header__item__title,children:"Исполнитель"}),_.jsx(k,{"data-testid":"headerSwitcher__2",className:"header__item__switcherComponent",inputProps:{"aria-label":'Свитчер "Исполнитель"'}})]}),_.jsx(d,{"data-testid":"headerLink",to:"/",className:`${t.header__item__title} ${t.header__item__link}`,children:"Сервисы"}),_.jsx("div",{className:t.header__item__navbar,children:_.jsxs(u,{"data-testid":"headerDropDown",className:t.header__item__navbar_dropdown,label:"",dismissOnClick:!1,renderTrigger:()=>_.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[_.jsxs("g",{clipPath:"url(#clip0_17_16)",children:[_.jsx("path",{d:"M28.125 26.25H1.87501C0.839435 26.25 0 25.4105 0 24.375C0 23.3395 0.839435 22.5 1.87501 22.5H28.1251C29.1606 22.5 30.0001 23.3395 30.0001 24.375C30 25.4105 29.1606 26.25 28.125 26.25Z",fill:"black"}),_.jsx("path",{d:"M28.125 16.875H1.87501C0.839435 16.875 0 16.0355 0 15C0 13.9645 0.839435 13.125 1.87501 13.125H28.1251C29.1606 13.125 30.0001 13.9644 30.0001 15C30.0001 16.0356 29.1606 16.875 28.125 16.875Z",fill:"black"}),_.jsx("path",{d:"M28.125 7.50002H1.87501C0.839435 7.50002 0 6.66059 0 5.62501C0 4.58944 0.839435 3.75 1.87501 3.75H28.1251C29.1606 3.75 30.0001 4.58944 30.0001 5.62501C30.0001 6.66059 29.1606 7.50002 28.125 7.50002Z",fill:"black"})]}),_.jsx("defs",{children:_.jsx("clipPath",{id:"clip0_17_16",children:_.jsx("rect",{width:"30",height:"30",fill:"white"})})})]}),children:[_.jsx(u.Item,{className:t.header__item__navbar_dropdown_item,children:_.jsx(d,{className:t.header__item__navbar_dropdown_link,to:"/",children:"Мой аккаунт TeleWorks"})}),_.jsx(u.Item,{className:t.header__item__navbar_dropdown_item,children:_.jsx(d,{className:t.header__item__navbar_dropdown_link,to:"/",children:"Мои каналы"})}),_.jsx(u.Item,{className:t.header__item__navbar_dropdown_item,children:_.jsx(d,{className:t.header__item__navbar_dropdown_link,to:"/",children:"Избранное"})}),_.jsx(u.Item,{className:t.header__item__navbar_dropdown_item,children:_.jsx(d,{className:t.header__item__navbar_dropdown_link,to:"/",children:"Мои шаблоны"})}),_.jsx(u.Item,{className:t.header__item__navbar_dropdown_item,children:_.jsx(d,{className:t.header__item__navbar_dropdown_link,to:"/",children:"Заявки"})}),_.jsx(u.Item,{className:t.header__item__navbar_dropdown_item,children:_.jsx(d,{className:t.header__item__navbar_dropdown_link,to:"/",children:"Мои услуги"})}),_.jsx(u.Item,{className:t.header__item__navbar_dropdown_item,children:_.jsx(d,{className:t.header__item__navbar_dropdown_link,to:"/",children:"Мой аккаунт TeleWorks"})}),_.jsx(u.Item,{className:t.header__item__navbar_dropdown_item,children:_.jsx(d,{className:t.header__item__navbar_dropdown_link,to:"/",children:"История транзакций"})}),_.jsx(u.Item,{className:t.header__item__navbar_dropdown_item,children:_.jsx(d,{className:t.header__item__navbar_dropdown_link,to:"/",children:"Баланс"})}),_.jsx(u.Item,{className:t.header__item__navbar_dropdown_item,children:_.jsx(d,{className:t.header__item__navbar_dropdown_link,to:"/",children:"Рефералы"})}),_.jsx(u.Item,{className:t.header__item__navbar_dropdown_item,children:_.jsx(d,{className:t.header__item__navbar_dropdown_leave,to:"/",children:"Выйти"})})]})}),_.jsx(P,{className:t.header__item__login,to:"/",text:"Войти"}),_.jsx(d,{to:"/",className:t.header__item__reg,children:"Регистрация"})]})]}),r_=location.port;let C;r_=="6006"?C="":C="/TeleWorks";const i=C,n_="_advancement_mjkcf_1",o_="_advancement__information_mjkcf_10",c_="_advancement__img_mjkcf_18",l_="_advancement__caption_mjkcf_24",d_="_advancement__info_mjkcf_10",m_="_advancement__subtext_mjkcf_51",p_="_advancement__buttons_mjkcf_61",h_="_advancement__buttons__start_mjkcf_68",f_="_advancement__buttons__help_mjkcf_89",g={advancement:n_,advancement__information:o_,advancement__img:c_,advancement__caption:l_,advancement__info:d_,advancement__subtext:m_,advancement__buttons:p_,advancement__buttons__start:h_,advancement__buttons__help:f_},u_=()=>_.jsxs("section",{className:g.advancement,children:[_.jsx("img",{className:g.advancement__img,src:`${i}/MainPage/images/Advancement/Advancement__img.webp`,alt:'Фоновое изображение для секции "Продвижение'}),_.jsxs("div",{className:g.advancement__information,children:[_.jsx("h2",{className:g.advancement__caption,children:"Продвижение"}),_.jsxs("div",{className:g.advancement__info,children:[_.jsxs("span",{className:"mainPage__subcaption",children:["С Tele",_.jsx("span",{children:"Works"})]}),_.jsx("p",{className:g.advancement__subtext,children:"Сэкономит ваше : время, деньги и нервы. TeleWorks - доверьте ваши заботы профессионалам."}),_.jsxs("div",{className:g.advancement__buttons,children:[_.jsx(P,{className:g.advancement__buttons__start,to:"/",text:"Начать"}),_.jsx(d,{className:g.advancement__buttons__help,to:"/",children:"Обратиться к специалисту"})]})]})]})]}),x_="_Buy_placement__item_1vfr7_1",g_="_Buy_placement__item__amount_1vfr7_13",v_="_Buy_placement__item__text_1vfr7_31",N={Buy_placement__item:x_,Buy_placement__item__amount:g_,Buy_placement__item__text:v_},j_=({amount:e,text:m})=>_.jsxs("div",{"data-testid":"Buy_placement__item",className:N.Buy_placement__item,children:[_.jsx("span",{"data-testid":"Buy_placement__item__amount",className:N.Buy_placement__item__amount,children:e}),_.jsx("span",{"data-testid":"Buy_placement__item__text",className:N.Buy_placement__item__text,children:m})]}),b_="_profile__header_ya194_1",y_="_profile__header__share_ya194_7",w_="_profile__header__left_ya194_14",N_="_profile__header__right_ya194_19",C_="_profile__header__icons_ya194_24",P_="_profile__header__icon__circle_ya194_29",A_="_profile__header__stat_ya194_49",k_="_profile__header__stat__text_ya194_55",T_="_profile__channel_rating_ya194_63",L_="_profile__channel_rating__text_ya194_74",o={profile__header:b_,profile__header__share:y_,profile__header__left:w_,profile__header__right:N_,profile__header__icons:C_,profile__header__icon__circle:P_,profile__header__stat:A_,profile__header__stat__text:k_,profile__channel_rating:T_,profile__channel_rating__text:L_},S_=()=>_.jsxs("div",{className:o.profile__header,children:[_.jsxs("div",{className:o.profile__header__left,children:[_.jsxs("div",{className:o.profile__channel_rating,children:[_.jsxs("svg",{width:"23",height:"24",viewBox:"0 0 23 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("path",{d:"M14.3156 10.6868H9.07942C8.71412 10.6868 8.41797 10.9829 8.41797 11.3482V22.5329C8.41797 22.8982 8.71412 23.1943 9.07942 23.1943H14.3156C14.6809 23.1943 14.977 22.8982 14.977 22.5329V11.3482C14.977 10.9829 14.6809 10.6868 14.3156 10.6868Z",fill:"black"}),_.jsx("path",{d:"M22.3052 16.3959H16.9573C16.5921 16.3959 16.2959 16.692 16.2959 17.0573V22.533C16.2959 22.8983 16.5921 23.1944 16.9573 23.1944H22.3052C22.6704 23.1944 22.9666 22.8983 22.9666 22.533V17.0573C22.9666 16.692 22.6704 16.3959 22.3052 16.3959Z",fill:"black"}),_.jsx("path",{d:"M6.44578 13.755H1.09797C0.732676 13.755 0.436523 14.0512 0.436523 14.4165V22.5327C0.436523 22.898 0.732676 23.1942 1.09797 23.1942H6.44578C6.81108 23.1942 7.10723 22.898 7.10723 22.5327V14.4165C7.10723 14.0512 6.81112 13.755 6.44578 13.755Z",fill:"black"}),_.jsx("path",{d:"M11.7045 5.00989H11.6921C10.1909 5.00989 8.96973 6.23114 8.96973 7.73223V8.21875C8.96973 8.66267 9.33088 9.02386 9.77484 9.02386H13.6217C14.0657 9.02386 14.4268 8.66271 14.4268 8.21875V7.73223C14.4268 6.23114 13.2056 5.00989 11.7045 5.00989Z",fill:"black"}),_.jsx("path",{d:"M11.6984 3.68717C12.5493 3.68717 13.2415 2.99856 13.2415 2.15209C13.1568 0.115663 10.2396 0.11628 10.1553 2.15209C10.1553 2.99856 10.8475 3.68717 11.6984 3.68717Z",fill:"black"}),_.jsx("path",{d:"M3.77819 8.17517H3.7658C2.26467 8.17517 1.04346 9.39642 1.04346 10.8975V11.384C1.04346 11.828 1.40461 12.1891 1.84857 12.1891H5.69547C6.13938 12.1891 6.50058 11.828 6.50058 11.384V10.8975C6.50058 9.39642 5.27933 8.17517 3.77819 8.17517Z",fill:"black"}),_.jsx("path",{d:"M3.77163 6.85246C4.62252 6.85246 5.31474 6.16385 5.31474 5.31737C5.23008 3.28095 2.31283 3.28156 2.22852 5.31737C2.22852 6.16385 2.92074 6.85246 3.77163 6.85246Z",fill:"black"}),_.jsx("path",{d:"M19.6371 10.4307H19.6247C18.1236 10.4307 16.9023 11.6519 16.9023 13.1531V13.6396C16.9023 14.0835 17.2635 14.4447 17.7075 14.4447H21.5544C21.9983 14.4447 22.3595 14.0835 22.3595 13.6396V13.1531C22.3595 11.6519 21.1382 10.4307 19.6371 10.4307Z",fill:"black"}),_.jsx("path",{d:"M19.631 9.10766C20.4819 9.10766 21.1741 8.41905 21.1741 7.57262C21.0895 5.5362 18.1722 5.53681 18.0879 7.57262C18.0878 8.41905 18.7801 9.10766 19.631 9.10766Z",fill:"black"})]}),_.jsx("span",{className:o.profile__channel_rating__text,children:"509.2"})]}),_.jsxs("div",{className:o.profile__header__icons,children:[_.jsx("div",{className:o.profile__header__icon__circle,children:_.jsxs("svg",{className:o.profile__header__icon,width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[_.jsxs("g",{clipPath:"url(#clip0_244_374)",children:[_.jsx("path",{d:"M10.6206 0.448486C5.14452 0.448486 0.689453 4.90349 0.689453 10.3795C0.689453 15.8554 5.14452 20.3104 10.6206 20.3104C16.0965 20.3104 20.5515 15.8554 20.5515 10.3795C20.5515 4.90349 16.0965 0.448486 10.6206 0.448486ZM10.6206 18.6824C6.04221 18.6824 2.31748 14.9578 2.31748 10.3795C2.31748 5.80118 6.04221 2.07651 10.6206 2.07651C15.1988 2.07651 18.9235 5.80118 18.9235 10.3795C18.9235 14.9578 15.1988 18.6824 10.6206 18.6824Z",fill:"#FF5555"}),_.jsx("path",{d:"M14.9165 6.56773L9.02006 12.4643L6.32417 9.76837C6.00625 9.45051 5.49088 9.45051 5.17296 9.76837C4.85511 10.0863 4.85511 10.6017 5.17296 10.9196L8.44445 14.1911C8.60341 14.35 8.81173 14.4295 9.02006 14.4295C9.22838 14.4295 9.4367 14.35 9.59566 14.1911L16.0677 7.71901C16.3856 7.40108 16.3856 6.88572 16.0677 6.56779C15.7498 6.24987 15.2344 6.24987 14.9165 6.56773Z",fill:"#FF5555"})]}),_.jsx("defs",{children:_.jsx("clipPath",{id:"clip0_244_374",children:_.jsx("rect",{width:"19.8621",height:"19.8621",fill:"white",transform:"translate(0.689453 0.448242)"})})})]})}),_.jsx("div",{className:o.profile__header__icon__circle,children:_.jsx("svg",{className:o.profile__header__icon,width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_.jsx("path",{d:"M12.6893 20.845C12.3944 20.845 12.0996 20.7467 12.0013 20.5501L4.72891 12.5898C2.95994 10.6243 2.95994 7.57773 4.92546 5.71049C5.90822 4.72773 7.28408 4.13807 8.75822 4.23635C10.1341 4.33462 11.5099 5.02255 12.3944 6.10359L12.6893 6.49669L13.0824 6.10359C13.9668 5.02255 15.3427 4.33462 16.7186 4.23635C18.0944 4.13807 19.5686 4.72773 20.5513 5.71049C22.4186 7.57773 22.5168 10.6243 20.7479 12.5898L13.4755 20.5501C13.2789 20.7467 12.9841 20.845 12.6893 20.845ZM8.46339 6.10359C7.57891 6.10359 6.89098 6.49669 6.30132 6.98807C5.12201 8.16738 5.12201 9.93635 6.20304 11.2139L12.6893 18.3881L19.1755 11.2139C20.2565 10.0346 20.2565 8.16738 19.0772 6.98807C18.4875 6.39842 17.603 6.00531 16.7186 6.10359C15.8341 6.10359 15.0479 6.59497 14.5565 7.2829L13.4755 8.65876C13.0824 9.15014 12.2961 9.15014 11.903 8.65876L10.822 7.2829C10.2324 6.59497 9.44615 6.20187 8.56167 6.10359H8.46339Z",fill:"#FF5555"})})}),_.jsx("div",{className:o.profile__header__icon__circle,children:_.jsxs("svg",{className:o.profile__header__icon,width:"18",height:"19",viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[_.jsxs("g",{clipPath:"url(#clip0_244_382)",children:[_.jsx("path",{d:"M12.8666 1.25477C12.3792 1.00684 11.7831 1.2011 11.5353 1.68865L4.17123 16.1726C3.92337 16.6601 4.11763 17.2561 4.60511 17.5039C4.74888 17.577 4.90209 17.6117 5.05305 17.6117C5.41386 17.6117 5.76166 17.4138 5.93646 17.07L13.3005 2.58611C13.5483 2.09863 13.3541 1.50263 12.8666 1.25477Z",fill:"#FF5555"}),_.jsx("path",{d:"M7.57976 6.02432C7.57976 3.95367 5.89514 2.26904 3.82448 2.26904C1.75396 2.26904 0.0693359 3.95367 0.0693359 6.02432C0.0693359 8.09491 1.75396 9.77954 3.82455 9.77954C5.8952 9.77954 7.57976 8.09491 7.57976 6.02432ZM3.82455 7.79925C2.84589 7.79925 2.04962 7.00298 2.04962 6.02432C2.04962 5.0456 2.84589 4.24933 3.82455 4.24933C4.80327 4.24933 5.59955 5.04553 5.59955 6.02432C5.59948 7.00298 4.80327 7.79925 3.82455 7.79925Z",fill:"#FF5555"}),_.jsx("path",{d:"M13.6938 8.97913C11.6231 8.97913 9.93848 10.6638 9.93848 12.7343C9.93848 14.8049 11.623 16.4896 13.6938 16.4896C15.7643 16.4896 17.449 14.805 17.449 12.7343C17.449 10.6637 15.7644 8.97913 13.6938 8.97913ZM13.6938 14.5092C12.715 14.5092 11.9188 13.7129 11.9188 12.7343C11.9188 11.7556 12.715 10.9593 13.6938 10.9593C14.6724 10.9593 15.4687 11.7556 15.4687 12.7343C15.4687 13.7129 14.6725 14.5092 13.6938 14.5092Z",fill:"#FF5555"})]}),_.jsx("defs",{children:_.jsx("clipPath",{id:"clip0_244_382",children:_.jsx("rect",{width:"17.3793",height:"17.3793",fill:"white",transform:"translate(0.0683594 0.689697)"})})})]})})]})]}),_.jsxs("div",{className:o.profile__header__right,children:[_.jsxs("div",{className:o.profile__header__stat,children:[_.jsx("svg",{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_.jsx("path",{d:"M13.9239 0.92705C14.2233 0.00573969 15.5267 0.00573993 15.8261 0.927051L18.4392 8.96935C18.573 9.38138 18.957 9.66034 19.3902 9.66034L27.8464 9.66034C28.8151 9.66034 29.2179 10.9 28.4342 11.4694L21.593 16.4398C21.2425 16.6944 21.0958 17.1458 21.2297 17.5578L23.8428 25.6001C24.1422 26.5214 23.0877 27.2875 22.304 26.7181L15.4628 21.7477C15.1123 21.4931 14.6377 21.4931 14.2872 21.7477L7.44602 26.7181C6.66231 27.2875 5.60783 26.5214 5.90718 25.6001L8.52028 17.5578C8.65416 17.1458 8.5075 16.6944 8.15701 16.4398L1.31582 11.4694C0.532106 10.9 0.934881 9.66034 1.9036 9.66034L10.3598 9.66034C10.793 9.66034 11.177 9.38138 11.3108 8.96935L13.9239 0.92705Z",fill:"#FFB82A"})}),_.jsx("span",{className:o.profile__header__stat__text,children:"5.0"})]}),_.jsxs("div",{className:o.profile__header__stat,children:[_.jsx("img",{src:`${i}/ProfilePage/icons/profile__header/stat__views.jpg`,alt:"Иконка просмотров"}),_.jsx("span",{className:o.profile__header__stat__text,children:"5.2K"})]}),_.jsxs("div",{className:o.profile__header__stat,children:[_.jsx("img",{src:`${i}/ProfilePage/icons/profile__header/stat__likes.svg`,alt:"Иконка лайков"}),_.jsx("span",{className:o.profile__header__stat__text,children:"134"})]}),_.jsx("img",{className:o.profile__header__share,src:`${i}/ProfilePage/icons/profile__header/stat__share.svg`,alt:'Иконка "Поделиться"'})]})]}),B_="_profile__body_gqpev_1",M_="_profile__body__avatar_gqpev_9",$_="_profile__body__avatar__img_gqpev_19",E_="_profile__body__avatar__caption_gqpev_32",R_="_profile__body__avatar__category_gqpev_38",I_="_profile__body__channel_info_gqpev_45",W_="_profile__body__channel_info_text_gqpev_58",H_="_profile__body__channel_info_line_gqpev_68",V_="_profile__body__channel_info__categories_gqpev_75",F_="_profile__body__channel_info__category_gqpev_80",Z_="_profile__body__channel_info__category_caption_gqpev_85",O_="_profile__body__channel_info__category_desc_gqpev_91",q_="_profile__body__channel_link_gqpev_99",D_="_profile__body__channel_link__text_gqpev_104",z_="_profile__body__channel_link__icon_gqpev_116",s={profile__body:B_,profile__body__avatar:M_,profile__body__avatar__img:$_,profile__body__avatar__caption:E_,profile__body__avatar__category:R_,profile__body__channel_info:I_,profile__body__channel_info_text:W_,profile__body__channel_info_line:H_,profile__body__channel_info__categories:V_,profile__body__channel_info__category:F_,profile__body__channel_info__category_caption:Z_,profile__body__channel_info__category_desc:O_,profile__body__channel_link:q_,profile__body__channel_link__text:D_,profile__body__channel_link__icon:z_},K_=()=>_.jsxs("div",{className:s.profile__body,children:[_.jsx("div",{className:s.profile__body__avatar,children:_.jsx("img",{className:s.profile__body__avatar__img,src:`${i}/ProfilePage/images/other/default-user.png`,alt:"Изображение пользователя"})}),_.jsx("h2",{className:s.profile__body__avatar__caption,children:"Квартира мечты!"}),_.jsx("span",{className:s.profile__body__avatar__category,children:"Интерьер и строительство"}),_.jsxs("div",{className:s.profile__body__channel_info,children:[_.jsxs("div",{className:s.profile__body__channel_link,children:[_.jsx("img",{className:s.profile__body__channel_link__icon,src:`${i}/ProfilePage/icons/profile__body/channel_link.png`,alt:"Изображение иконки ссылки"}),_.jsx("a",{className:s.profile__body__channel_link__text,href:"#",children:"https://t.me/silka"})]}),_.jsx("p",{className:s.profile__body__channel_info_text,children:"Пример текста описания канала: поможем с поиском и покупкой квартиры! У нас только проверенные решения!"}),_.jsx("img",{className:s.profile__body__channel_info_line,src:`${i}/ProfilePage/icons/profile__body/profile__line_separator.png`,alt:"Разделительная строка в профиле"}),_.jsxs("div",{className:s.profile__body__channel_info__categories,children:[_.jsxs("div",{className:s.profile__body__channel_info__category,children:[_.jsx("span",{className:s.profile__body__channel_info__category_caption,children:"Вид трафика"}),_.jsx("span",{className:s.profile__body__channel_info__category_desc,children:"Telegram"})]}),_.jsxs("div",{className:s.profile__body__channel_info__category,children:[_.jsx("span",{className:s.profile__body__channel_info__category_caption,children:"Вид поста"}),_.jsx("span",{className:s.profile__body__channel_info__category_desc,children:"Прямой"})]}),_.jsxs("div",{className:s.profile__body__channel_info__category,children:[_.jsx("span",{className:s.profile__body__channel_info__category_caption,children:"Целевая ауд."}),_.jsx("span",{className:s.profile__body__channel_info__category_desc,children:"МЦА"})]}),_.jsxs("div",{className:s.profile__body__channel_info__category,children:[_.jsx("span",{className:s.profile__body__channel_info__category_caption,children:"Вид ссылки"}),_.jsx("span",{className:s.profile__body__channel_info__category_desc,children:"Публичный канал"})]})]})]})]}),G_="_profile__footer_cm4gf_1",U_="_profile__footer__item_cm4gf_7",J_="_profile__footer__item__img_cm4gf_18",Q_="_profile__footer__item__caption_cm4gf_22",X_="_profile__footer__item__desc_cm4gf_29",f={profile__footer:G_,profile__footer__item:U_,profile__footer__item__img:J_,profile__footer__item__caption:Q_,profile__footer__item__desc:X_},Y_=()=>_.jsxs("div",{className:f.profile__footer,children:[_.jsxs("div",{className:f.profile__footer__item,children:[_.jsx("img",{className:f.profile__footer__item__img,src:`${i}/ProfilePage/icons/profile__footer/geo.png`,alt:"Иконка гео"}),_.jsx("h3",{className:f.profile__footer__item__caption,children:"Гео / Язык"}),_.jsx("span",{className:f.profile__footer__item__desc,children:"Россия / Русский"})]}),_.jsxs("div",{className:f.profile__footer__item,children:[_.jsx("img",{className:f.profile__footer__item__img,src:`${i}/ProfilePage/icons/profile__footer/age.png`,alt:"Иконка гео"}),_.jsx("h3",{className:f.profile__footer__item__caption,children:"Возраст"}),_.jsx("span",{className:f.profile__footer__item__desc,children:"1 год."})]}),_.jsxs("div",{className:f.profile__footer__item,children:[_.jsx("img",{className:f.profile__footer__item__img,src:`${i}/ProfilePage/icons/profile__footer/posts.png`,alt:"Иконка гео"}),_.jsx("h3",{className:f.profile__footer__item__caption,children:"Постов"}),_.jsx("span",{className:f.profile__footer__item__desc,children:"1 573"})]})]}),_e="_stats__item_19bl5_1",ee="_stats__item__stats_19bl5_12",te="_stats__item__stats__caption_19bl5_16",se="_stats__item__stats__dates_19bl5_23",ae="_stats__item__stats__amounts_19bl5_27",ie="_stats__item__stats__dates_text_19bl5_31",re="_stats__item__stats__amount_19bl5_27",ne="_stats__item__stats__amount__subscribers_19bl5_41",oe="_stats__item__stats__amount__subscribers__grow_19bl5_47",ce="_stats__item__stats__amount__subscribers__shrink_19bl5_50",le="_stats__item__stats__date_text_19bl5_53",de="_stats__item__stats__date_text__postfix_19bl5_62",me="_stats__item__stats__graphics_19bl5_67",pe="_stats__item__stats__graphics__caption_19bl5_73",l={stats__item:_e,stats__item__stats:ee,stats__item__stats__caption:te,stats__item__stats__dates:se,stats__item__stats__amounts:ae,stats__item__stats__dates_text:ie,stats__item__stats__amount:re,stats__item__stats__amount__subscribers:ne,stats__item__stats__amount__subscribers__grow:oe,stats__item__stats__amount__subscribers__shrink:ce,stats__item__stats__date_text:le,stats__item__stats__date_text__postfix:de,stats__item__stats__graphics:me,stats__item__stats__graphics__caption:pe},he=({amount:e,amounts__subscribers:m,amounts:x,stats:j,caption:r,graphic_imgURL:a})=>_.jsxs("div",{className:l.stats__item,children:[_.jsxs("div",{className:l.stats__item__stats,children:[_.jsx("span",{className:l.stats__item__stats__caption,children:e}),_.jsxs("div",{className:l.stats__item__stats__dates,children:[_.jsx("div",{className:l.stats__item__stats__amounts,children:m?m.map((n,p)=>_.jsx("span",{className:`${l.stats__item__stats__amount__subscribers} ${n.prefix=="+"?l.stats__item__stats__amount__subscribers__grow:l.stats__item__stats__amount__subscribers__shrink}`,children:n.prefix+String(n.number)},p)):x==null?void 0:x.map((n,p)=>_.jsx("span",{className:l.stats__item__stats__amount,children:n},p))}),_.jsx("div",{className:l.stats__item__stats__dates_text,children:j.map((n,p)=>_.jsxs("span",{className:l.stats__item__stats__date_text,children:[n.stat,n.postfix&&_.jsx("span",{className:l.stats__item__stats__date_text__postfix,children:n.postfix})]},p))})]})]}),_.jsxs("div",{className:l.stats__item__stats__graphics,children:[_.jsx("h4",{className:l.stats__item__stats__graphics__caption,children:r}),_.jsx("img",{className:l.stats__item__stats__graphics__img,src:a,alt:"Изображение графика"})]})]}),Pt=window.matchMedia("(max-width: 1200px)"),At=window.matchMedia("(max-width: 600px)"),fe=[{amount:"455 858",text:"новых пользователей"},{amount:"14 896",text:"проверенных каналов"},{amount:"179",text:"пользователей в сети"}],ue="_Buy_placement_1hsmf_1",xe="_Buy_placement__caption_1hsmf_6",ge="_Buy_placement__items_1hsmf_9",ve="_Buy_placement__buy_1hsmf_14",w={Buy_placement:ue,Buy_placement__caption:xe,Buy_placement__items:ge,Buy_placement__buy:ve},je=()=>_.jsxs("section",{className:w.Buy_placement,children:[_.jsxs("h3",{className:`${w.Buy_placement__caption} mainPage__caption`,children:["Мы помогаем привлечь",_.jsx("span",{children:" качественную целевую аудиторию "}),"на ваш Telegram-канал и найти надежных профессиональных исполнителей услуг"]}),_.jsx("div",{className:w.Buy_placement__items,children:fe.map(e=>_.jsx(j_,{...e},e.text))}),_.jsx(P,{className:w.Buy_placement__buy,to:"/",text:"Купить размещение"})]}),be="_weAreTrusted_t3cpt_1",ye="_weAreTrusted__wrapper_t3cpt_7",we="_weAreTrusted__img_t3cpt_11",Ne="_weAreTrusted__caption_t3cpt_15",Ce="_weAreTrusted__items_t3cpt_18",Pe="_weAreTrusted__item_t3cpt_18",b={weAreTrusted:be,weAreTrusted__wrapper:ye,weAreTrusted__img:we,weAreTrusted__caption:Ne,weAreTrusted__items:Ce,weAreTrusted__item:Pe},Ae=[{src:`${i}/MainPage/images/WeAreTrusted/WeAreTrusted__item__img.png`,alt:"KASSAK"},{src:`${i}/MainPage/images/WeAreTrusted/WeAreTrusted__item__img.png`,alt:"KASSAK"},{src:`${i}/MainPage/images/WeAreTrusted/WeAreTrusted__item__img.png`,alt:"KASSAK"},{src:`${i}/MainPage/images/WeAreTrusted/WeAreTrusted__item__img.png`,alt:"KASSAK"},{src:`${i}/MainPage/images/WeAreTrusted/WeAreTrusted__item__img.png`,alt:"KASSAK"},{src:`${i}/MainPage/images/WeAreTrusted/WeAreTrusted__item__img.png`,alt:"KASSAK"}],ke=()=>_.jsxs("section",{className:b.weAreTrusted,children:[_.jsxs("div",{className:b.weAreTrusted__wrapper,children:[_.jsx("img",{className:b.weAreTrusted__img,src:`${i}/MainPage/images/WeAreTrusted/WeAreTrusted__img.png`,alt:'Изображение для секции "Нам доверяют..."'}),_.jsxs("h4",{className:`${b.weAreTrusted__caption} mainPage__caption`,children:[_.jsx("span",{children:"Нам доверяют крупные компании: "}),"Предоставляем счета и акты, работаем с ЭДО"]})]}),_.jsx("div",{className:b.weAreTrusted__items,children:Ae.map((e,m)=>_.jsx("img",{className:b.weAreTrusted__item,src:e.src,alt:e.alt},m))})]}),Te="_mainPageFooter_bjwot_1",Le="_mainPageFooter__caption_bjwot_4",S={mainPageFooter:Te,mainPageFooter__caption:Le},Se=()=>_.jsx("footer",{className:S.mainPageFooter,children:_.jsxs("h2",{className:S.mainPageFooter__caption,children:["Tele",_.jsx("span",{children:"Works"})]})}),Be="_profile_1i30k_1",Me={profile:Be},$e=()=>_.jsxs("section",{className:Me.profile,children:[_.jsx(S_,{}),_.jsx(K_,{}),_.jsx(Y_,{})]}),Ee=[{amount:"8 214",amounts__subscribers:[{prefix:"+",number:21},{prefix:"+",number:1121},{prefix:"-",number:101}],stats:[{stat:"сегодня"},{stat:"за неделю"},{stat:"за месяц"}],caption:"ПОДПИСЧИКИ",graphic_imgURL:`${i}/ProfilePage/images/Stats/Graphics__1.svg`},{amount:"2 995",amounts:["30.5%","25%"],stats:[{stat:"ERR"},{stat:"ERR",postfix:"24"}],caption:"СР.ОХВАТ ПУБЛИКАЦИИ",graphic_imgURL:`${i}/ProfilePage/images/Stats/Graphics__2.svg`},{amount:"52.2",amounts:["81","105","0"],stats:[{stat:"уп.каналов"},{stat:"упоминаний"},{stat:"репостов"}],caption:"ИНДЕКС ЦИТИРОВАНИЯ",graphic_imgURL:`${i}/ProfilePage/images/Stats/Graphics__3.svg`},{amount:"2 200",amounts:["1.4k","2.2k","2.7k"],stats:[{stat:"за 12 часов"},{stat:"за 24 часа"},{stat:"за 48 часов"}],caption:"СР.ОХВАТ РЕКАЛМ. ПУБЛИКАЦИИ",graphic_imgURL:`${i}/ProfilePage/images/Stats/Graphics__1.svg`}],Re="_stats_l92r0_1",Ie="_stats__items_l92r0_7",B={stats:Re,stats__items:Ie},We=()=>_.jsx("section",{className:B.stats,children:_.jsx("div",{className:B.stats__items,children:Ee.map(e=>_.jsx(he,{...e},e.caption))})}),He=c.lazy(()=>h(async()=>{const{HowItWorks:e}=await import("./HowItWorks-CB9cdZxj.js");return{HowItWorks:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])).then(({HowItWorks:e})=>({default:e}))),Ve=c.lazy(()=>h(async()=>{const{MeetAdvantages:e}=await import("./MeetAdvantages-CK8sQDZr.js");return{MeetAdvantages:e}},__vite__mapDeps([25,1,2,26])).then(({MeetAdvantages:e})=>({default:e}))),Fe=c.lazy(()=>h(async()=>{const{Platform_Privileges:e}=await import("./Platform_Privileges-CLncD_dh.js");return{Platform_Privileges:e}},__vite__mapDeps([27,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,28])).then(({Platform_Privileges:e})=>({default:e}))),Ze=c.lazy(()=>h(async()=>{const{Additional_Services:e}=await import("./Additional_Services-UDoW-bmY.js");return{Additional_Services:e}},__vite__mapDeps([29,1,2,5,6,7,8,9,10,11,12,13,14,15,16,3,4,17,18,19,20,21,22,23,30])).then(({Additional_Services:e})=>({default:e}))),Oe=c.lazy(()=>h(async()=>{const{Ads:e}=await import("./Ads-B_eOUS19.js");return{Ads:e}},__vite__mapDeps([31,1,2,5,6,7,8,9,10,11,12,13,14,15,16,3,4,17,18,19,20,21,22,23,32])).then(({Ads:e})=>({default:e}))),qe=c.lazy(()=>h(async()=>{const{Guarantor_Services:e}=await import("./Guarantor_Services-BtLTaB2t.js");return{Guarantor_Services:e}},__vite__mapDeps([33,1,2,5,6,7,8,9,10,11,12,13,14,15,16,3,4,17,18,19,20,21,22,23,34])).then(({Guarantor_Services:e})=>({default:e}))),De=c.lazy(()=>h(async()=>{const{Job_Risks:e}=await import("./Job_Risks-B6EZo9iT.js");return{Job_Risks:e}},__vite__mapDeps([35,1,2,36])).then(({Job_Risks:e})=>({default:e}))),ze=c.lazy(()=>h(async()=>{const{Transaction_Advantage:e}=await import("./Transaction_Advantage-Cq98SiF2.js");return{Transaction_Advantage:e}},__vite__mapDeps([37,1,2,5,6,7,8,9,10,11,12,13,14,15,16,3,4,17,18,19,20,21,22,23,38])).then(({Transaction_Advantage:e})=>({default:e}))),Ke=c.lazy(()=>h(async()=>{const{SupportService:e}=await import("./SupportService-CAh3tVl5.js");return{SupportService:e}},__vite__mapDeps([39,1,2,5,6,7,8,9,10,11,12,13,14,15,16,3,4,17,18,19,20,21,22,23,40])).then(({SupportService:e})=>({default:e}))),Ge=c.lazy(()=>h(async()=>{const{Buy_ads:e}=await import("./Buy_ads-D9mF7Kbm.js");return{Buy_ads:e}},__vite__mapDeps([41,1,2,42,18,43,44,45,46,47,48,49,19,20,21,22,5,6,15,16,50,51,3,4,7,8,9,10,11,12,13,14,17,23,52])).then(({Buy_ads:e})=>({default:e}))),Ue=c.lazy(()=>h(async()=>{const{Channel_stats:e}=await import("./Channel_stats-CkIs7BDf.js");return{Channel_stats:e}},__vite__mapDeps([53,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,54])).then(({Channel_stats:e})=>({default:e}))),Je=c.lazy(()=>h(async()=>{const{Channel_reviews:e}=await import("./Channel_reviews-DFArhxTj.js");return{Channel_reviews:e}},__vite__mapDeps([55,1,2,56,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,57])).then(({Channel_reviews:e})=>({default:e}))),Qe=c.lazy(()=>h(async()=>{const{Reviews:e}=await import("./Reviews-DdNpcxwk.js");return{Reviews:e}},__vite__mapDeps([58,1,2,49,19,20,21,22,5,6,15,16,50,51,3,4,7,8,9,10,11,12,13,14,17,18,23,59])).then(({Reviews:e})=>({default:e}))),Xe=c.lazy(()=>h(async()=>{const{Similar_channels:e}=await import("./Similar_channels-CoMpZA70.js");return{Similar_channels:e}},__vite__mapDeps([60,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,61])).then(({Similar_channels:e})=>({default:e}))),Ye=()=>(c.useEffect(()=>{document.querySelector("html").classList.add("profilePage")},[]),_.jsx("main",{className:"ProfilePage__main",children:_.jsxs("div",{className:"padding",children:[_.jsx($e,{}),_.jsx(We,{}),_.jsx(Ge,{}),_.jsx(Ue,{}),_.jsx(Je,{}),_.jsx(Qe,{}),_.jsx(Xe,{})]})})),_t=()=>(c.useEffect(()=>{document.querySelector("html").classList.add("mainPage")},[]),_.jsxs("main",{className:"MainPage__main",children:[_.jsxs("div",{className:"padding",children:[_.jsx(u_,{}),_.jsx(je,{}),_.jsx(ke,{})]}),_.jsx(He,{}),_.jsx("div",{className:"padding",children:_.jsx(Ve,{})}),_.jsx(Fe,{}),_.jsxs("div",{className:"padding",children:[_.jsx(Ze,{}),_.jsx(Oe,{}),_.jsx(qe,{}),_.jsx(De,{}),_.jsx(ze,{}),_.jsx(Ke,{}),_.jsx(Se,{})]})]})),et=()=>_.jsxs(W,{children:[_.jsx(A,{path:"",element:_.jsx(_t,{})}),_.jsx(A,{path:"profile/:id",element:_.jsx(Ye,{})})]}),tt=_.jsx(i_,{}),st=()=>H(["/"].map(e=>({path:e,element:tt})));R.createRoot(document.getElementById("root")).render(_.jsxs(I,{basename:"/TeleWorks/",children:[_.jsx(st,{}),_.jsx(et,{})]}));export{P as M,i as U,At as m,Pt as t};
