import{r as n,j as e}from"./react-e8hmi6Ay.js";import{P}from"./primereact-BR-Bw9-b.js";import{U as m}from"./index-CU9JCHzn.js";import"./@babel-BwvLRzjS.js";import"./react-dom-BP8aYWRJ.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-BRJ8av1n.js";import"./react-router-Dg9z9qYu.js";import"./@remix-run-BFLWy9pZ.js";import"./@szhsin-BsnzYjS7.js";import"./react-transition-state-DSR3qyla.js";import"./@mui-EL6yyDxi.js";import"./clsx-B-dksMZM.js";import"./@emotion-CznjHDu8.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./react-transition-group-CWAC7qa0.js";import"./styled-components-BqglOvXN.js";import"./tslib-B7u9K5VY.js";import"./stylis-DinRj2j6.js";import"./react-redux-I0N39rH0.js";import"./use-sync-external-store-BmpGqMD8.js";import"./@reduxjs-BMC_f8BA.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";const c="_ReviewsPanel_1f7v4_1",w="_ReviewsPanel__caption_1f7v4_6",R="_ReviewsPanel__wrapper_1f7v4_15",x="_ReviewsPanel__marks_1f7v4_25",d="_ReviewsPanel__marks_amount_1f7v4_29",j="_ReviewsPanel__mark_1f7v4_25",u="_ReviewsPanel__stars_1f7v4_47",a={ReviewsPanel:c,ReviewsPanel__caption:w,ReviewsPanel__wrapper:R,ReviewsPanel__marks:x,ReviewsPanel__marks_amount:d,ReviewsPanel__mark:j,ReviewsPanel__stars:u},W="_ReviewsPanel__starsWrapper_ko6tc_1",g="_ReviewsPanel__starsWrapper__stars_ko6tc_7",k="_ReviewsPanel__starsWrapper__star_ko6tc_7",f="_ReviewsPanel__starsWrapper__progressbar_ko6tc_15",t={ReviewsPanel__starsWrapper:W,ReviewsPanel__starsWrapper__stars:g,ReviewsPanel__starsWrapper__star:k,ReviewsPanel__starsWrapper__progressbar:f},i=n.memo(({stars_amount:s,progress_amount:p})=>{const o=n.useMemo(()=>Array(s).fill("active"),[s]),l=n.useMemo(()=>Array(5-s).fill("disactive"),[s]);return e.jsxs("div",{className:t.ReviewsPanel__starsWrapper,children:[e.jsxs("div",{className:t.ReviewsPanel__starsWrapper__stars,children:[o.map((r,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${m}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение активной звезды"},r+_)),l.map((r,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${m}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_disactive.png`,alt:"Изображение пустой звезды"},r+_))]}),e.jsx(P,{"aria-labelledby":`Рейтинг канала в ${s} звёздах`,className:t.ReviewsPanel__starsWrapper__progressbar,value:p,showValue:!1})]})}),Y=n.memo(({mark:s,reviewsAmount:p,fiveStarsProgress:o,fourStarsProgress:l,threeStarsProgress:r,twoStarsProgress:_,oneStarsProgress:v})=>e.jsx("section",{className:a.ReviewsPanel,children:e.jsxs("div",{className:a.ReviewsPanel__wrapper,children:[e.jsxs("div",{className:a.ReviewsPanel__marks,children:[e.jsx("span",{className:a.ReviewsPanel__mark,children:s.toFixed(1)}),e.jsxs("span",{className:a.ReviewsPanel__marks_amount,children:[p," оценки"]})]}),e.jsxs("div",{className:a.ReviewsPanel__stars,children:[e.jsx(i,{stars_amount:5,progress_amount:o}),e.jsx(i,{stars_amount:4,progress_amount:l}),e.jsx(i,{stars_amount:3,progress_amount:r}),e.jsx(i,{stars_amount:2,progress_amount:_}),e.jsx(i,{stars_amount:1,progress_amount:v})]})]})}));export{Y as ReviewsPanel};
