import{r as p,j as e}from"./react-SWQbpNdl.js";import{P}from"./primereact-8SOYX93R.js";import{U as l}from"./index-Daif7nYj.js";import"./@babel-BUiOBcM-.js";import"./react-dom-DxN2oLL9.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-DjGoV6A_.js";import"./react-router-D0TulCCO.js";import"./@remix-run-BFLWy9pZ.js";import"./flowbite-react-BQ69OgIf.js";import"./react-icons-B6XOnTk_.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-iR1RLlz2.js";import"./debounce-0BFaHC-l.js";import"./@floating-ui-Yq7M0TBs.js";import"./tabbable-DNPBiPWX.js";import"./@mui-BUTVsE8m.js";import"./clsx-B-dksMZM.js";import"./@emotion-BDBTfIC7.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-MCX_ZxWf.js";import"./react-select-BtHigjl0.js";import"./use-isomorphic-layout-effect-Cdzwp0gt.js";import"./memoize-one-BdPwpGay.js";import"./swiper-3vH3F7GG.js";import"./react-loadingg-vDFUarl7.js";import"./styled-components-DPletkhf.js";import"./merge-anything-D_kaZiAl.js";import"./is-what-BcD0NeHv.js";import"./react-redux-lXSSybhs.js";import"./use-sync-external-store-CU8T5Q8Q.js";import"./@reduxjs-BMC_f8BA.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";const c="_ReviewsPanel_1xdbz_1",w="_ReviewsPanel__caption_1xdbz_6",R="_ReviewsPanel__wrapper_1xdbz_15",x="_ReviewsPanel__marks_1xdbz_25",d="_ReviewsPanel__marks_amount_1xdbz_29",j="_ReviewsPanel__mark_1xdbz_25",u="_ReviewsPanel__stars_1xdbz_47",a={ReviewsPanel:c,ReviewsPanel__caption:w,ReviewsPanel__wrapper:R,ReviewsPanel__marks:x,ReviewsPanel__marks_amount:d,ReviewsPanel__mark:j,ReviewsPanel__stars:u},W="_ReviewsPanel__starsWrapper_ko6tc_1",g="_ReviewsPanel__starsWrapper__stars_ko6tc_7",k="_ReviewsPanel__starsWrapper__star_ko6tc_7",b="_ReviewsPanel__starsWrapper__progressbar_ko6tc_15",t={ReviewsPanel__starsWrapper:W,ReviewsPanel__starsWrapper__stars:g,ReviewsPanel__starsWrapper__star:k,ReviewsPanel__starsWrapper__progressbar:b},i=p.memo(({stars_amount:s,progress_amount:o})=>{const n=p.useMemo(()=>Array(s).fill("active"),[s]),m=p.useMemo(()=>Array(5-s).fill("disactive"),[s]);return e.jsxs("div",{className:t.ReviewsPanel__starsWrapper,children:[e.jsxs("div",{className:t.ReviewsPanel__starsWrapper__stars,children:[n.map((r,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${l}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение активной звезды"},r+_)),m.map((r,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${l}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_disactive.png`,alt:"Изображение пустой звезды"},r+_))]}),e.jsx(P,{"aria-labelledby":`Рейтинг канала в ${s} звёздах`,className:t.ReviewsPanel__starsWrapper__progressbar,value:o,showValue:!1})]})}),ne=p.memo(({mark:s,reviewsAmount:o,fiveStarsProgress:n,fourStarsProgress:m,threeStarsProgress:r,twoStarsProgress:_,oneStarsProgress:v})=>e.jsx("section",{className:a.ReviewsPanel,children:e.jsxs("div",{className:a.ReviewsPanel__wrapper,children:[e.jsxs("div",{className:a.ReviewsPanel__marks,children:[e.jsx("span",{className:a.ReviewsPanel__mark,children:s.toFixed(1)}),e.jsxs("span",{className:a.ReviewsPanel__marks_amount,children:[o," оценки"]})]}),e.jsxs("div",{className:a.ReviewsPanel__stars,children:[e.jsx(i,{stars_amount:5,progress_amount:n}),e.jsx(i,{stars_amount:4,progress_amount:m}),e.jsx(i,{stars_amount:3,progress_amount:r}),e.jsx(i,{stars_amount:2,progress_amount:_}),e.jsx(i,{stars_amount:1,progress_amount:v})]})]})}));export{ne as ReviewsPanel};
