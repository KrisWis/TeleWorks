import{r as p,j as _}from"./react-SWQbpNdl.js";import{A as w,a as n,U as d,k as j}from"./index-B3xerZLH.js";import"./@babel-BUiOBcM-.js";import"./react-dom-DxN2oLL9.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-DjGoV6A_.js";import"./react-router-D0TulCCO.js";import"./@remix-run-BFLWy9pZ.js";import"./flowbite-react-BQ69OgIf.js";import"./react-icons-B6XOnTk_.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-iR1RLlz2.js";import"./debounce-0BFaHC-l.js";import"./@floating-ui-Yq7M0TBs.js";import"./tabbable-DNPBiPWX.js";import"./@mui-BUTVsE8m.js";import"./clsx-B-dksMZM.js";import"./@emotion-BDBTfIC7.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-MCX_ZxWf.js";import"./react-select-BtHigjl0.js";import"./use-isomorphic-layout-effect-Cdzwp0gt.js";import"./memoize-one-BdPwpGay.js";import"./swiper-DGEBRwVo.js";import"./react-loadingg-BPJQvY-7.js";import"./styled-components-DVsnz4T4.js";import"./stylis-rule-sheet-D4hHYmwC.js";import"./merge-anything-D_kaZiAl.js";import"./is-what-BcD0NeHv.js";import"./react-redux-lXSSybhs.js";import"./use-sync-external-store-CU8T5Q8Q.js";import"./@reduxjs-BMC_f8BA.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";const x="_reviews__item_41sl0_1",g="_reviews__item__firstCol_41sl0_10",N="_reviews__item__secondCol_41sl0_16",f="_reviews__item__userInfo_41sl0_23",h="_reviews__item__bio_41sl0_28",u="_reviews__item__username_41sl0_33",C="_reviews__item__seniority_41sl0_39",R="_reviews__item__date_41sl0_46",y="_reviews__item__date__small_41sl0_54",A="_reviews__item__reportBug_41sl0_57",B="_reviews__item__text_41sl0_61",I="_reviews__item__stars_41sl0_70",P="_reviews__item__starsWrapper_41sl0_77",b="_reviews__item__rating_41sl0_82",U="_reviews__item__project_41sl0_89",W="_reviews__item__project__img_41sl0_98",E="_reviews__item__project__info_41sl0_105",$="_reviews__item__project__title_41sl0_113",z="_reviews__item__project__price_41sl0_120",e={reviews__item:x,reviews__item__firstCol:g,reviews__item__secondCol:N,reviews__item__userInfo:f,reviews__item__bio:h,reviews__item__username:u,reviews__item__seniority:C,reviews__item__date:R,reviews__item__date__small:y,reviews__item__reportBug:A,reviews__item__text:B,reviews__item__stars:I,reviews__item__starsWrapper:P,reviews__item__rating:b,reviews__item__project:U,reviews__item__project__img:W,reviews__item__project__info:E,reviews__item__project__title:$,reviews__item__project__price:z},f_=p.memo(({author:t,extraInfo:r,imgURL:m,date:o,text:a,stars:s,project:i})=>{const v=Array(s).fill("active");return _.jsxs("div",{className:e.reviews__item,children:[_.jsxs("div",{className:e.reviews__item__firstCol,children:[_.jsxs("div",{className:e.reviews__item__userInfo,children:[_.jsx(w,{imgURL:m,imgSize:n.MEDIUM}),_.jsxs("div",{className:e.reviews__item__bio,children:[_.jsxs("span",{className:e.reviews__item__username,children:["@",t]}),_.jsx("span",{className:e.reviews__item__seniority,children:r})]})]}),_.jsx("p",{className:e.reviews__item__text,children:a}),_.jsx("div",{className:e.reviews__item__starsWrapper,children:_.jsxs("div",{className:e.reviews__item__stars,children:[v.map((c,l)=>_.jsx("img",{className:e.reviews__item__star,src:`${d}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение звезды"},c+l)),_.jsx("span",{className:e.reviews__item__rating,children:s.toFixed(1)})]})})]}),_.jsxs("div",{className:e.reviews__item__secondCol,children:[_.jsx("time",{className:`${e.reviews__item__date} ${i?e.reviews__item__date__small:""}`,children:o}),i&&_.jsxs("div",{className:e.reviews__item__project,children:[_.jsx("img",{className:e.reviews__item__project__img,src:i.imgURL,alt:i.title}),_.jsxs("div",{className:e.reviews__item__project__info,children:[_.jsx("span",{className:e.reviews__item__project__title,children:i.title}),_.jsxs("span",{className:e.reviews__item__project__price,children:[i.price," ₽"]})]})]}),_.jsx(j,{className:e.reviews__item__reportBug})]})]})});export{f_ as Reviews__item};
