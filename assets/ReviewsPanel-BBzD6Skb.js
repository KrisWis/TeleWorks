import{r as p,j as e}from"./react-zrC4k5k2.js";import{P}from"./primereact-nLNvjVu6.js";import{U as l}from"./app-routes-4qbA6mXx.js";import"./@babel-13fjUkWY.js";import"./react-dom-aNADivH4.js";import"./react-router-dom-Bmqp4_LK.js";import"./react-router-Bfa73Yvd.js";import"./@remix-run-I3CLtn5C.js";import"./@reduxjs-BQV_WoVf.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./react-redux-D78363SC.js";import"./use-sync-external-store-Bg1Z0G9P.js";import"./styled-components-BcVmWm4K.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-DMscNvN2.js";import"./@mui-Dh2ADnaV.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./@emotion-CYu4OkFg.js";import"./hoist-non-react-statics-BzqkPicg.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-DvBm5OJO.js";import"./jss-plugin-rule-value-function-NRMjr7SR.js";import"./jss-C2YbWCDG.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-B2s_qxL_.js";import"./jss-plugin-nested-CvQgPwbz.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-CakodQBr.js";import"./jss-plugin-vendor-prefixer-C0RmQ0NR.js";import"./css-vendor-BK3-fMEt.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-select-CLpz9WOa.js";import"./@floating-ui-RYOEkms0.js";import"./use-isomorphic-layout-effect-eSKX-Jxz.js";import"./memoize-one-BdPwpGay.js";import"./swiper-BZYHt685.js";const c="_ReviewsPanel_1f7v4_1",w="_ReviewsPanel__caption_1f7v4_6",R="_ReviewsPanel__wrapper_1f7v4_15",x="_ReviewsPanel__marks_1f7v4_25",d="_ReviewsPanel__marks_amount_1f7v4_29",j="_ReviewsPanel__mark_1f7v4_25",u="_ReviewsPanel__stars_1f7v4_47",a={ReviewsPanel:c,ReviewsPanel__caption:w,ReviewsPanel__wrapper:R,ReviewsPanel__marks:x,ReviewsPanel__marks_amount:d,ReviewsPanel__mark:j,ReviewsPanel__stars:u},W="_ReviewsPanel__starsWrapper_ko6tc_1",g="_ReviewsPanel__starsWrapper__stars_ko6tc_7",k="_ReviewsPanel__starsWrapper__star_ko6tc_7",f="_ReviewsPanel__starsWrapper__progressbar_ko6tc_15",t={ReviewsPanel__starsWrapper:W,ReviewsPanel__starsWrapper__stars:g,ReviewsPanel__starsWrapper__star:k,ReviewsPanel__starsWrapper__progressbar:f},i=p.memo(({stars_amount:s,progress_amount:o})=>{const n=p.useMemo(()=>Array(s).fill("active"),[s]),m=p.useMemo(()=>Array(5-s).fill("disactive"),[s]);return e.jsxs("div",{className:t.ReviewsPanel__starsWrapper,children:[e.jsxs("div",{className:t.ReviewsPanel__starsWrapper__stars,children:[n.map((r,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${l}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение активной звезды"},r+_)),m.map((r,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${l}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_disactive.png`,alt:"Изображение пустой звезды"},r+_))]}),e.jsx(P,{"aria-labelledby":`Рейтинг канала в ${s} звёздах`,className:t.ReviewsPanel__starsWrapper__progressbar,value:o,showValue:!1})]})}),Pe=p.memo(({mark:s,reviewsAmount:o,fiveStarsProgress:n,fourStarsProgress:m,threeStarsProgress:r,twoStarsProgress:_,oneStarsProgress:v})=>e.jsx("section",{className:a.ReviewsPanel,children:e.jsxs("div",{className:a.ReviewsPanel__wrapper,children:[e.jsxs("div",{className:a.ReviewsPanel__marks,children:[e.jsx("span",{className:a.ReviewsPanel__mark,children:s.toFixed(1)}),e.jsxs("span",{className:a.ReviewsPanel__marks_amount,children:[o," оценки"]})]}),e.jsxs("div",{className:a.ReviewsPanel__stars,children:[e.jsx(i,{stars_amount:5,progress_amount:n}),e.jsx(i,{stars_amount:4,progress_amount:m}),e.jsx(i,{stars_amount:3,progress_amount:r}),e.jsx(i,{stars_amount:2,progress_amount:_}),e.jsx(i,{stars_amount:1,progress_amount:v})]})]})}));export{Pe as ReviewsPanel};
