import{r as p,j as e}from"./react-B8VV3c8w.js";import{P}from"./primereact-7DbpkkaA.js";import{U as l}from"./index-sP13Dsp7.js";import"./@babel-DnEJNfVd.js";import"./react-dom-DqtKgdWs.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-B4V7KZ_U.js";import"./react-router-BTaDXhKw.js";import"./@remix-run-BFLWy9pZ.js";import"./@szhsin-Cxi3-bxM.js";import"./react-transition-state-DvLqjemu.js";import"./flowbite-react-Cj-TVo3H.js";import"./react-icons-ehiPaXJw.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-CJMI-Y6p.js";import"./debounce-C4Qqi4Eb.js";import"./@floating-ui-BONjOGZd.js";import"./tabbable-DNPBiPWX.js";import"./@mui-BblRt5w4.js";import"./clsx-B-dksMZM.js";import"./@emotion-DyD7DVxi.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./react-transition-group-Dr_uWHPt.js";import"./react-loadingg-B--phII2.js";import"./styled-components-ji7tMqKz.js";import"./stylis-FAdL0pof.js";import"./stylis-rule-sheet-D1qWho37.js";import"./merge-anything-D_kaZiAl.js";import"./is-what-BcD0NeHv.js";import"./react-redux-BQCHRrYi.js";import"./use-sync-external-store-B_hCL4a_.js";import"./@reduxjs-BMC_f8BA.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";const c="_ReviewsPanel_1f7v4_1",w="_ReviewsPanel__caption_1f7v4_6",R="_ReviewsPanel__wrapper_1f7v4_15",x="_ReviewsPanel__marks_1f7v4_25",d="_ReviewsPanel__marks_amount_1f7v4_29",j="_ReviewsPanel__mark_1f7v4_25",u="_ReviewsPanel__stars_1f7v4_47",a={ReviewsPanel:c,ReviewsPanel__caption:w,ReviewsPanel__wrapper:R,ReviewsPanel__marks:x,ReviewsPanel__marks_amount:d,ReviewsPanel__mark:j,ReviewsPanel__stars:u},W="_ReviewsPanel__starsWrapper_ko6tc_1",g="_ReviewsPanel__starsWrapper__stars_ko6tc_7",k="_ReviewsPanel__starsWrapper__star_ko6tc_7",f="_ReviewsPanel__starsWrapper__progressbar_ko6tc_15",t={ReviewsPanel__starsWrapper:W,ReviewsPanel__starsWrapper__stars:g,ReviewsPanel__starsWrapper__star:k,ReviewsPanel__starsWrapper__progressbar:f},i=p.memo(({stars_amount:s,progress_amount:n})=>{const o=p.useMemo(()=>Array(s).fill("active"),[s]),m=p.useMemo(()=>Array(5-s).fill("disactive"),[s]);return e.jsxs("div",{className:t.ReviewsPanel__starsWrapper,children:[e.jsxs("div",{className:t.ReviewsPanel__starsWrapper__stars,children:[o.map((r,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${l}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение активной звезды"},r+_)),m.map((r,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${l}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_disactive.png`,alt:"Изображение пустой звезды"},r+_))]}),e.jsx(P,{"aria-labelledby":`Рейтинг канала в ${s} звёздах`,className:t.ReviewsPanel__starsWrapper__progressbar,value:n,showValue:!1})]})}),ne=p.memo(({mark:s,reviewsAmount:n,fiveStarsProgress:o,fourStarsProgress:m,threeStarsProgress:r,twoStarsProgress:_,oneStarsProgress:v})=>e.jsx("section",{className:a.ReviewsPanel,children:e.jsxs("div",{className:a.ReviewsPanel__wrapper,children:[e.jsxs("div",{className:a.ReviewsPanel__marks,children:[e.jsx("span",{className:a.ReviewsPanel__mark,children:s.toFixed(1)}),e.jsxs("span",{className:a.ReviewsPanel__marks_amount,children:[n," оценки"]})]}),e.jsxs("div",{className:a.ReviewsPanel__stars,children:[e.jsx(i,{stars_amount:5,progress_amount:o}),e.jsx(i,{stars_amount:4,progress_amount:m}),e.jsx(i,{stars_amount:3,progress_amount:r}),e.jsx(i,{stars_amount:2,progress_amount:_}),e.jsx(i,{stars_amount:1,progress_amount:v})]})]})}));export{ne as ReviewsPanel};
