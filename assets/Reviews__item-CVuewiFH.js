import{r as w,j as _}from"./react-B8VV3c8w.js";import{U as n}from"./index-DVfhWGAV.js";import{A as l,a as j}from"./Avatar_types-Cq-WzaKR.js";import{R as d}from"./ReportBug-_iQyQ6QT.js";import"./@babel-DnEJNfVd.js";import"./react-dom-DqtKgdWs.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-B4V7KZ_U.js";import"./react-router-BTaDXhKw.js";import"./@remix-run-BFLWy9pZ.js";import"./@szhsin-Cxi3-bxM.js";import"./react-transition-state-DvLqjemu.js";import"./flowbite-react-Cj-TVo3H.js";import"./react-icons-ehiPaXJw.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-CJMI-Y6p.js";import"./debounce-C4Qqi4Eb.js";import"./@floating-ui-BONjOGZd.js";import"./tabbable-DNPBiPWX.js";import"./@mui-BblRt5w4.js";import"./clsx-B-dksMZM.js";import"./@emotion-DyD7DVxi.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./react-transition-group-Dr_uWHPt.js";import"./react-loadingg-B--phII2.js";import"./styled-components-ji7tMqKz.js";import"./stylis-FAdL0pof.js";import"./stylis-rule-sheet-D1qWho37.js";import"./merge-anything-D_kaZiAl.js";import"./is-what-BcD0NeHv.js";import"./react-redux-BQCHRrYi.js";import"./use-sync-external-store-B_hCL4a_.js";import"./@reduxjs-BMC_f8BA.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";const x="_reviews__item_yaij0_1",y="_reviews__item__firstCol_yaij0_10",g="_reviews__item__secondCol_yaij0_16",N="_reviews__item__userInfo_yaij0_23",f="_reviews__item__bio_yaij0_28",h="_reviews__item__username_yaij0_33",u="_reviews__item__seniority_yaij0_39",R="_reviews__item__date_yaij0_46",C="_reviews__item__date__small_yaij0_54",A="_reviews__item__reportBug_yaij0_57",B="_reviews__item__text_yaij0_61",I="_reviews__item__stars_yaij0_70",P="_reviews__item__starsWrapper_yaij0_77",b="_reviews__item__rating_yaij0_82",U="_reviews__item__project_yaij0_89",W="_reviews__item__project__img_yaij0_98",E="_reviews__item__project__info_yaij0_105",$="_reviews__item__project__title_yaij0_113",z="_reviews__item__project__price_yaij0_120",e={reviews__item:x,reviews__item__firstCol:y,reviews__item__secondCol:g,reviews__item__userInfo:N,reviews__item__bio:f,reviews__item__username:h,reviews__item__seniority:u,reviews__item__date:R,reviews__item__date__small:C,reviews__item__reportBug:A,reviews__item__text:B,reviews__item__stars:I,reviews__item__starsWrapper:P,reviews__item__rating:b,reviews__item__project:U,reviews__item__project__img:W,reviews__item__project__info:E,reviews__item__project__title:$,reviews__item__project__price:z},N_=w.memo(({author:t,extraInfo:r,imgURL:m,date:a,text:o,stars:s,project:i})=>{const v=Array(s).fill("active");return _.jsxs("div",{className:e.reviews__item,children:[_.jsxs("div",{className:e.reviews__item__firstCol,children:[_.jsxs("div",{className:e.reviews__item__userInfo,children:[_.jsx(l,{imgURL:m,imgSize:j.MEDIUM}),_.jsxs("div",{className:e.reviews__item__bio,children:[_.jsxs("span",{className:e.reviews__item__username,children:["@",t]}),_.jsx("span",{className:e.reviews__item__seniority,children:r})]})]}),_.jsx("p",{className:e.reviews__item__text,children:o}),_.jsx("div",{className:e.reviews__item__starsWrapper,children:_.jsxs("div",{className:e.reviews__item__stars,children:[v.map((c,p)=>_.jsx("img",{className:e.reviews__item__star,src:`${n}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение звезды"},c+p)),_.jsx("span",{className:e.reviews__item__rating,children:s.toFixed(1)})]})})]}),_.jsxs("div",{className:e.reviews__item__secondCol,children:[_.jsx("time",{className:`${e.reviews__item__date} ${i?e.reviews__item__date__small:""}`,children:a}),i&&_.jsxs("div",{className:e.reviews__item__project,children:[_.jsx("img",{className:e.reviews__item__project__img,src:i.imgURL,alt:i.title}),_.jsxs("div",{className:e.reviews__item__project__info,children:[_.jsx("span",{className:e.reviews__item__project__title,children:i.title}),_.jsxs("span",{className:e.reviews__item__project__price,children:[i.price," ₽"]})]})]}),_.jsx(d,{className:e.reviews__item__reportBug})]})]})});export{N_ as Reviews__item};
