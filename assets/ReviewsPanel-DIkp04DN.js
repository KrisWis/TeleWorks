import{r as n,j as e}from"./react-BHR5W2Za.js";import{P}from"./primereact-DNUpHe7r.js";import{U as m}from"./index-BQ03HdH0.js";import"./@babel-CaXJ9_vT.js";import"./react-dom-z3azbnBS.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-BXVjbqUq.js";import"./react-router-rJctJ6Rs.js";import"./@remix-run-BFLWy9pZ.js";import"./styled-components-CHflUM7L.js";import"./tslib-B7u9K5VY.js";import"./@emotion-BtX4ZyE_.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-DinRj2j6.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-BH98TIMi.js";import"./@mui-fwBvmugZ.js";import"./clsx-B-dksMZM.js";import"./react-transition-group-C3o7gHAy.js";import"./react-select-BBhG-O_K.js";import"./@floating-ui-BBw6y31Z.js";import"./use-isomorphic-layout-effect-ByRHbxdK.js";import"./memoize-one-BdPwpGay.js";import"./swiper-C8w79IAA.js";import"./react-redux-Blsew3Hi.js";import"./use-sync-external-store-HysUTIae.js";import"./@reduxjs-CudhKR1I.js";import"./redux-DITMfSWq.js";import"./immer-C45-hHMi.js";import"./reselect-BEFkisvr.js";import"./redux-thunk-ClJT1hhx.js";const c="_ReviewsPanel_1f7v4_1",w="_ReviewsPanel__caption_1f7v4_6",R="_ReviewsPanel__wrapper_1f7v4_15",x="_ReviewsPanel__marks_1f7v4_25",d="_ReviewsPanel__marks_amount_1f7v4_29",j="_ReviewsPanel__mark_1f7v4_25",u="_ReviewsPanel__stars_1f7v4_47",a={ReviewsPanel:c,ReviewsPanel__caption:w,ReviewsPanel__wrapper:R,ReviewsPanel__marks:x,ReviewsPanel__marks_amount:d,ReviewsPanel__mark:j,ReviewsPanel__stars:u},W="_ReviewsPanel__starsWrapper_ko6tc_1",g="_ReviewsPanel__starsWrapper__stars_ko6tc_7",k="_ReviewsPanel__starsWrapper__star_ko6tc_7",f="_ReviewsPanel__starsWrapper__progressbar_ko6tc_15",t={ReviewsPanel__starsWrapper:W,ReviewsPanel__starsWrapper__stars:g,ReviewsPanel__starsWrapper__star:k,ReviewsPanel__starsWrapper__progressbar:f},i=n.memo(({stars_amount:s,progress_amount:p})=>{const o=n.useMemo(()=>Array(s).fill("active"),[s]),l=n.useMemo(()=>Array(5-s).fill("disactive"),[s]);return e.jsxs("div",{className:t.ReviewsPanel__starsWrapper,children:[e.jsxs("div",{className:t.ReviewsPanel__starsWrapper__stars,children:[o.map((r,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${m}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение активной звезды"},r+_)),l.map((r,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${m}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_disactive.png`,alt:"Изображение пустой звезды"},r+_))]}),e.jsx(P,{"aria-labelledby":`Рейтинг канала в ${s} звёздах`,className:t.ReviewsPanel__starsWrapper__progressbar,value:p,showValue:!1})]})}),_e=n.memo(({mark:s,reviewsAmount:p,fiveStarsProgress:o,fourStarsProgress:l,threeStarsProgress:r,twoStarsProgress:_,oneStarsProgress:v})=>e.jsx("section",{className:a.ReviewsPanel,children:e.jsxs("div",{className:a.ReviewsPanel__wrapper,children:[e.jsxs("div",{className:a.ReviewsPanel__marks,children:[e.jsx("span",{className:a.ReviewsPanel__mark,children:s.toFixed(1)}),e.jsxs("span",{className:a.ReviewsPanel__marks_amount,children:[p," оценки"]})]}),e.jsxs("div",{className:a.ReviewsPanel__stars,children:[e.jsx(i,{stars_amount:5,progress_amount:o}),e.jsx(i,{stars_amount:4,progress_amount:l}),e.jsx(i,{stars_amount:3,progress_amount:r}),e.jsx(i,{stars_amount:2,progress_amount:_}),e.jsx(i,{stars_amount:1,progress_amount:v})]})]})}));export{_e as ReviewsPanel};
