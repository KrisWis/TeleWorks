import{r as w,j as _}from"./react-SWQbpNdl.js";import{A as n,a as l,U as d,n as j}from"./index--1L6nn6o.js";import"./@babel-BUiOBcM-.js";import"./react-dom-DxN2oLL9.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-DjGoV6A_.js";import"./react-router-D0TulCCO.js";import"./@remix-run-BFLWy9pZ.js";import"./flowbite-react-BQ69OgIf.js";import"./react-icons-B6XOnTk_.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-iR1RLlz2.js";import"./debounce-0BFaHC-l.js";import"./@floating-ui-Yq7M0TBs.js";import"./tabbable-DNPBiPWX.js";import"./@mui-BUTVsE8m.js";import"./clsx-B-dksMZM.js";import"./@emotion-BDBTfIC7.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-MCX_ZxWf.js";import"./react-select-BtHigjl0.js";import"./use-isomorphic-layout-effect-Cdzwp0gt.js";import"./memoize-one-BdPwpGay.js";import"./swiper-DGEBRwVo.js";import"./react-redux-lXSSybhs.js";import"./use-sync-external-store-CU8T5Q8Q.js";import"./@reduxjs-UNmdh41Z.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";import"./react-loadingg-BPJQvY-7.js";import"./styled-components-DVsnz4T4.js";import"./stylis-rule-sheet-D4hHYmwC.js";import"./merge-anything-D_kaZiAl.js";import"./is-what-BcD0NeHv.js";const x="_reviews__item_yeo43_1",y="_reviews__item__firstCol_yeo43_10",g="_reviews__item__secondCol_yeo43_16",N="_reviews__item__userInfo_yeo43_23",f="_reviews__item__bio_yeo43_28",h="_reviews__item__username_yeo43_33",u="_reviews__item__seniority_yeo43_39",C="_reviews__item__date_yeo43_46",R="_reviews__item__date__small_yeo43_54",A="_reviews__item__reportBug_yeo43_57",B="_reviews__item__text_yeo43_61",I="_reviews__item__stars_yeo43_70",P="_reviews__item__starsWrapper_yeo43_77",b="_reviews__item__rating_yeo43_82",U="_reviews__item__project_yeo43_89",W="_reviews__item__project__img_yeo43_98",E="_reviews__item__project__info_yeo43_105",$="_reviews__item__project__title_yeo43_113",z="_reviews__item__project__price_yeo43_120",e={reviews__item:x,reviews__item__firstCol:y,reviews__item__secondCol:g,reviews__item__userInfo:N,reviews__item__bio:f,reviews__item__username:h,reviews__item__seniority:u,reviews__item__date:C,reviews__item__date__small:R,reviews__item__reportBug:A,reviews__item__text:B,reviews__item__stars:I,reviews__item__starsWrapper:P,reviews__item__rating:b,reviews__item__project:U,reviews__item__project__img:W,reviews__item__project__info:E,reviews__item__project__title:$,reviews__item__project__price:z},N_=w.memo(({author:t,extraInfo:r,imgURL:m,date:o,text:a,stars:s,project:i})=>{const v=Array(s).fill("active");return _.jsxs("div",{className:e.reviews__item,children:[_.jsxs("div",{className:e.reviews__item__firstCol,children:[_.jsxs("div",{className:e.reviews__item__userInfo,children:[_.jsx(n,{imgURL:m,imgSize:l.MEDIUM}),_.jsxs("div",{className:e.reviews__item__bio,children:[_.jsxs("span",{className:e.reviews__item__username,children:["@",t]}),_.jsx("span",{className:e.reviews__item__seniority,children:r})]})]}),_.jsx("p",{className:e.reviews__item__text,children:a}),_.jsx("div",{className:e.reviews__item__starsWrapper,children:_.jsxs("div",{className:e.reviews__item__stars,children:[v.map((c,p)=>_.jsx("img",{className:e.reviews__item__star,src:`${d}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение звезды"},c+p)),_.jsx("span",{className:e.reviews__item__rating,children:s.toFixed(1)})]})})]}),_.jsxs("div",{className:e.reviews__item__secondCol,children:[_.jsx("time",{className:`${e.reviews__item__date} ${i?e.reviews__item__date__small:""}`,children:o}),i&&_.jsxs("div",{className:e.reviews__item__project,children:[_.jsx("img",{className:e.reviews__item__project__img,src:i.imgURL,alt:i.title}),_.jsxs("div",{className:e.reviews__item__project__info,children:[_.jsx("span",{className:e.reviews__item__project__title,children:i.title}),_.jsxs("span",{className:e.reviews__item__project__price,children:[i.price," ₽"]})]})]}),_.jsx(j,{className:e.reviews__item__reportBug})]})]})});export{N_ as Reviews__item};
