import{r as p,j as _}from"./react-BHR5W2Za.js";import{A as n,b as l,U as d}from"./index-BQ03HdH0.js";import{R as g}from"./ReportBug-DiTaB4Ed.js";import"./@babel-CaXJ9_vT.js";import"./react-dom-z3azbnBS.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-BXVjbqUq.js";import"./react-router-rJctJ6Rs.js";import"./@remix-run-BFLWy9pZ.js";import"./styled-components-CHflUM7L.js";import"./tslib-B7u9K5VY.js";import"./@emotion-BtX4ZyE_.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-DinRj2j6.js";import"./primereact-DNUpHe7r.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-BH98TIMi.js";import"./@mui-fwBvmugZ.js";import"./clsx-B-dksMZM.js";import"./react-transition-group-C3o7gHAy.js";import"./react-select-BBhG-O_K.js";import"./@floating-ui-BBw6y31Z.js";import"./use-isomorphic-layout-effect-ByRHbxdK.js";import"./memoize-one-BdPwpGay.js";import"./swiper-C8w79IAA.js";import"./react-redux-Blsew3Hi.js";import"./use-sync-external-store-HysUTIae.js";import"./@reduxjs-CudhKR1I.js";import"./redux-DITMfSWq.js";import"./immer-C45-hHMi.js";import"./reselect-BEFkisvr.js";import"./redux-thunk-ClJT1hhx.js";const j="_reviews__item_1yg36_1",x="_reviews__item__firstCol_1yg36_10",y="_reviews__item__secondCol_1yg36_16",N="_reviews__item__userInfo_1yg36_23",f="_reviews__item__bio_1yg36_28",h="_reviews__item__username_1yg36_33",u="_reviews__item__seniority_1yg36_39",R="_reviews__item__date_1yg36_46",C="_reviews__item__date__small_1yg36_54",b="_reviews__item__reportBug_1yg36_57",A="_reviews__item__text_1yg36_61",B="_reviews__item__stars_1yg36_70",I="_reviews__item__starsWrapper_1yg36_77",P="_reviews__item__rating_1yg36_82",U="_reviews__item__project_1yg36_89",W="_reviews__item__project__img_1yg36_98",E="_reviews__item__project__info_1yg36_105",$="_reviews__item__project__title_1yg36_113",z="_reviews__item__project__price_1yg36_120",e={reviews__item:j,reviews__item__firstCol:x,reviews__item__secondCol:y,reviews__item__userInfo:N,reviews__item__bio:f,reviews__item__username:h,reviews__item__seniority:u,reviews__item__date:R,reviews__item__date__small:C,reviews__item__reportBug:b,reviews__item__text:A,reviews__item__stars:B,reviews__item__starsWrapper:I,reviews__item__rating:P,reviews__item__project:U,reviews__item__project__img:W,reviews__item__project__info:E,reviews__item__project__title:$,reviews__item__project__price:z},g_=p.memo(({author:t,extraInfo:r,imgURL:m,date:o,text:a,stars:s,project:i})=>{const v=Array(s).fill("active");return _.jsxs("div",{className:e.reviews__item,children:[_.jsxs("div",{className:e.reviews__item__firstCol,children:[_.jsxs("div",{className:e.reviews__item__userInfo,children:[_.jsx(n,{imgURL:m,imgSize:l.MEDIUM}),_.jsxs("div",{className:e.reviews__item__bio,children:[_.jsxs("span",{className:e.reviews__item__username,children:["@",t]}),_.jsx("span",{className:e.reviews__item__seniority,children:r})]})]}),_.jsx("p",{className:e.reviews__item__text,children:a}),_.jsx("div",{className:e.reviews__item__starsWrapper,children:_.jsxs("div",{className:e.reviews__item__stars,children:[v.map((c,w)=>_.jsx("img",{className:e.reviews__item__star,src:`${d}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение звезды"},c+w)),_.jsx("span",{className:e.reviews__item__rating,children:s.toFixed(1)})]})})]}),_.jsxs("div",{className:e.reviews__item__secondCol,children:[_.jsx("time",{className:`${e.reviews__item__date} ${i?e.reviews__item__date__small:""}`,children:o}),i&&_.jsxs("div",{className:e.reviews__item__project,children:[_.jsx("img",{className:e.reviews__item__project__img,src:i.imgURL,alt:i.title}),_.jsxs("div",{className:e.reviews__item__project__info,children:[_.jsx("span",{className:e.reviews__item__project__title,children:i.title}),_.jsxs("span",{className:e.reviews__item__project__price,children:[i.price," ₽"]})]})]}),_.jsx(g,{className:e.reviews__item__reportBug})]})]})});export{g_ as Reviews__item};
