import{r as t,j as e}from"./react-Dfg0QzLj.js";import{U as i,y as v,z as o}from"./index-Ce7Ad1JS.js";import"./@babel-DnEJNfVd.js";import"./index-C3cwYZBQ.js";import"./react-dom-C9wOZFLX.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-5oYev41E.js";import"./react-router-BvbIkLuK.js";import"./@remix-run-BFLWy9pZ.js";import"./flowbite-react-vWwfskHq.js";import"./react-icons-DBJQZJWR.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-CJMI-Y6p.js";import"./debounce-C4Qqi4Eb.js";import"./@floating-ui-DXdSgT1t.js";import"./tabbable-DNPBiPWX.js";import"./react-select-C22iTgpe.js";import"./@emotion-CWN3Zhke.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-FDnFs_-n.js";import"./use-isomorphic-layout-effect-DSs63ilz.js";import"./memoize-one-BdPwpGay.js";import"./primereact-1lsqHZCQ.js";import"./react-calendar-CDra9IUa.js";import"./clsx-B-dksMZM.js";import"./get-user-locale-Dtfft7u7.js";import"./mem-kns0x1Eo.js";import"./mimic-fn-Bbosp5ci.js";import"./map-age-cleaner-DjG3IVAO.js";import"./p-defer-O4M1dHHK.js";import"./@wojtekmaj-B-N8U4WN.js";import"./swiper-D0AfF8Y-.js";const c="_reviews_gblc4_1",w="_reviews__wrapper_gblc4_8",n="_reviews__more_gblc4_15",l="_reviews__select_gblc4_39",p="_reviews__selectWrapper_gblc4_45",g="_reviews__select__svg_gblc4_51",s={reviews:c,reviews__wrapper:w,reviews__more:n,reviews__select:l,reviews__selectWrapper:p,reviews__select__svg:g},d=[{value:"Сортировка: По самым полезным",label:"Сортировка: По самым полезным"},{value:"Сортировка: По самым популярным",label:"Сортировка: По самым популярным"},{value:"Сортировка: По самым смешным",label:"Сортировка: По самым смешным"}],x="_reviews__item_1gi44_1",h="_reviews__item__header_1gi44_13",j="_reviews__item__userInfo_1gi44_17",N="_reviews__item__avatar_1gi44_22",f="_reviews__item__bio_1gi44_27",u="_reviews__item__username_1gi44_32",b="_reviews__item__seniority_1gi44_38",y="_reviews__item__date_1gi44_45",C="_reviews__item__text_1gi44_52",W="_reviews__item__stars_1gi44_61",L="_reviews__item__starsWrapper_1gi44_68",I="_reviews__item__rating_1gi44_73",S="_reviews__item__report_1gi44_80",D="_reviews__item__report__svg_1gi44_85",P="_reviews__item__report_text_1gi44_95",R="_reviews__item__report__sign_1gi44_108",_={reviews__item:x,reviews__item__header:h,reviews__item__userInfo:j,reviews__item__avatar:N,reviews__item__bio:f,reviews__item__username:u,reviews__item__seniority:b,reviews__item__date:y,reviews__item__text:C,reviews__item__stars:W,reviews__item__starsWrapper:L,reviews__item__rating:I,reviews__item__report:S,reviews__item__report__svg:D,reviews__item__report_text:P,reviews__item__report__sign:R},$=Array(5).fill("active"),r=t.memo(()=>e.jsxs("div",{className:_.reviews__item,children:[e.jsxs("div",{className:_.reviews__item__header,children:[e.jsxs("div",{className:_.reviews__item__userInfo,children:[e.jsx("img",{className:_.reviews__item__avatar,src:`${i}/ProfilePage/images/other/default-user.png`,alt:"Аватарка пользователя"}),e.jsxs("div",{className:_.reviews__item__bio,children:[e.jsx("span",{className:_.reviews__item__username,children:"@inan_ivanov"}),e.jsx("span",{className:_.reviews__item__seniority,children:"Доп. информация в виде стажа"})]})]}),e.jsx("time",{className:_.reviews__item__date,children:"16.07.2024"})]}),e.jsx("p",{className:_.reviews__item__text,children:"Быстрое и удобно, сервис рекомендую👍!"}),e.jsxs("div",{className:_.reviews__item__starsWrapper,children:[e.jsxs("div",{className:_.reviews__item__stars,children:[$.map((m,a)=>e.jsx("img",{className:_.reviews__item__star,src:`${i}/ProfilePage/icons/channel_reviews__item/channel_reviews__item_star_active.png`,alt:"Изображение звезды"},m+a)),e.jsx("span",{className:_.reviews__item__rating,children:"5.0"})]}),e.jsxs("div",{className:_.reviews__item__report,children:[e.jsx("span",{className:_.reviews__item__report_text,children:"Сообщить об ошибке"}),e.jsxs("div",{className:_.reviews__item__report__svg,children:[e.jsx("svg",{width:"42",height:"36",viewBox:"0 0 42 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19.268 0.999999C20.0378 -0.333334 21.9622 -0.333333 22.732 1L40.9186 32.5C41.6884 33.8333 40.7261 35.5 39.1865 35.5H2.81347C1.27387 35.5 0.311615 33.8333 1.08142 32.5L19.268 0.999999Z",fill:"#D9D9D9"})}),e.jsx("span",{className:_.reviews__item__report__sign,children:"!"})]})]})]})]})),H=()=>e.jsx("svg",{className:`${o.Select__svg} ${s.reviews__select__svg}`,width:"24",height:"14",viewBox:"0 0 24 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807611 21.0711 0.807611 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z",fill:"#4266C6"})}),M={fontFamily:"var(--font-family)",fontWeight:400,fontSize:"24px",letterSpacing:"-0.04em",color:"#000",opacity:.4},ge=t.memo(()=>e.jsxs("section",{className:s.reviews,children:[e.jsx("div",{className:s.reviews__selectWrapper,children:e.jsx(v,{className:s.reviews__select,TextStyles:M,CustomDropdownIndicator:H,selectedOptions:d})}),e.jsxs("div",{className:s.reviews__wrapper,children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx("button",{className:s.reviews__more,children:"Загрузить ещё"})]})]}));export{ge as Reviews};
