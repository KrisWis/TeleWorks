import{r as w,j as _}from"./react-zrC4k5k2.js";import{l as n,n as l,U as d}from"./app-routes-4qbA6mXx.js";import{R as g}from"./ReportBug-BKTUxlKc.js";import"./@babel-13fjUkWY.js";import"./react-dom-aNADivH4.js";import"./react-router-dom-Bmqp4_LK.js";import"./react-router-Bfa73Yvd.js";import"./@remix-run-I3CLtn5C.js";import"./@reduxjs-BQV_WoVf.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./react-redux-D78363SC.js";import"./use-sync-external-store-Bg1Z0G9P.js";import"./styled-components-BcVmWm4K.js";import"./primereact-nLNvjVu6.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-DMscNvN2.js";import"./@mui-Dh2ADnaV.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./@emotion-CYu4OkFg.js";import"./hoist-non-react-statics-BzqkPicg.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-DvBm5OJO.js";import"./jss-plugin-rule-value-function-NRMjr7SR.js";import"./jss-C2YbWCDG.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-B2s_qxL_.js";import"./jss-plugin-nested-CvQgPwbz.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-CakodQBr.js";import"./jss-plugin-vendor-prefixer-C0RmQ0NR.js";import"./css-vendor-BK3-fMEt.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-select-CLpz9WOa.js";import"./@floating-ui-RYOEkms0.js";import"./use-isomorphic-layout-effect-eSKX-Jxz.js";import"./memoize-one-BdPwpGay.js";import"./swiper-BZYHt685.js";const j="_reviews__item_1yg36_1",x="_reviews__item__firstCol_1yg36_10",y="_reviews__item__secondCol_1yg36_16",N="_reviews__item__userInfo_1yg36_23",f="_reviews__item__bio_1yg36_28",h="_reviews__item__username_1yg36_33",u="_reviews__item__seniority_1yg36_39",R="_reviews__item__date_1yg36_46",C="_reviews__item__date__small_1yg36_54",B="_reviews__item__reportBug_1yg36_57",I="_reviews__item__text_1yg36_61",P="_reviews__item__stars_1yg36_70",b="_reviews__item__starsWrapper_1yg36_77",A="_reviews__item__rating_1yg36_82",U="_reviews__item__project_1yg36_89",W="_reviews__item__project__img_1yg36_98",E="_reviews__item__project__info_1yg36_105",$="_reviews__item__project__title_1yg36_113",z="_reviews__item__project__price_1yg36_120",e={reviews__item:j,reviews__item__firstCol:x,reviews__item__secondCol:y,reviews__item__userInfo:N,reviews__item__bio:f,reviews__item__username:h,reviews__item__seniority:u,reviews__item__date:R,reviews__item__date__small:C,reviews__item__reportBug:B,reviews__item__text:I,reviews__item__stars:P,reviews__item__starsWrapper:b,reviews__item__rating:A,reviews__item__project:U,reviews__item__project__img:W,reviews__item__project__info:E,reviews__item__project__title:$,reviews__item__project__price:z},C_=w.memo(({author:t,extraInfo:r,imgURL:m,date:o,text:a,stars:s,project:i})=>{const v=Array(s).fill("active");return _.jsxs("div",{className:e.reviews__item,children:[_.jsxs("div",{className:e.reviews__item__firstCol,children:[_.jsxs("div",{className:e.reviews__item__userInfo,children:[_.jsx(n,{imgURL:m,imgSize:l.MEDIUM}),_.jsxs("div",{className:e.reviews__item__bio,children:[_.jsxs("span",{className:e.reviews__item__username,children:["@",t]}),_.jsx("span",{className:e.reviews__item__seniority,children:r})]})]}),_.jsx("p",{className:e.reviews__item__text,children:a}),_.jsx("div",{className:e.reviews__item__starsWrapper,children:_.jsxs("div",{className:e.reviews__item__stars,children:[v.map((c,p)=>_.jsx("img",{className:e.reviews__item__star,src:`${d}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение звезды"},c+p)),_.jsx("span",{className:e.reviews__item__rating,children:s.toFixed(1)})]})})]}),_.jsxs("div",{className:e.reviews__item__secondCol,children:[_.jsx("time",{className:`${e.reviews__item__date} ${i?e.reviews__item__date__small:""}`,children:o}),i&&_.jsxs("div",{className:e.reviews__item__project,children:[_.jsx("img",{className:e.reviews__item__project__img,src:i.imgURL,alt:i.title}),_.jsxs("div",{className:e.reviews__item__project__info,children:[_.jsx("span",{className:e.reviews__item__project__title,children:i.title}),_.jsxs("span",{className:e.reviews__item__project__price,children:[i.price," ₽"]})]})]}),_.jsx(g,{className:e.reviews__item__reportBug})]})]})});export{C_ as Reviews__item};
