import{r as n,j as r}from"./react-4jxR_kOt.js";import{P as l}from"./primereact-Ble5jZTR.js";import{U as p}from"./index-CqfbS6_c.js";import"./@babel-TgLte8cI.js";import"./index-0BLwcrbD.js";import"./react-dom-ctAotxzH.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-CBtVDhPn.js";import"./react-router-CJ9QL2Iy.js";import"./@remix-run-BFLWy9pZ.js";import"./react-redux-BMVzb4Tp.js";import"./use-sync-external-store-m6Qn7HYK.js";import"./@reduxjs-UNmdh41Z.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";import"./react-select-BXVOwItY.js";import"./@emotion-CzV0n2zg.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-FDnFs_-n.js";import"./@floating-ui-DCIYVU_k.js";import"./tabbable-DNPBiPWX.js";import"./use-isomorphic-layout-effect-CwXVgWdW.js";import"./memoize-one-BdPwpGay.js";import"./@testing-library-Ckk1A5X4.js";import"./pretty-format-i9H8DXB0.js";import"./ansi-regex-Cpp0pcJC.js";import"./dom-accessibility-api-DkckwH9x.js";import"./aria-query-Bfxid3OU.js";import"./dequal-C3hdbj_K.js";import"./lz-string-nYvg4Eaj.js";import"./flowbite-react-tD4kfz8y.js";import"./react-icons-Cdi3zWQY.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-Ckb4xODa.js";import"./debounce-C2C9Qm5x.js";import"./swiper-C24EQaEf.js";import"./react-calendar-C3_C-B45.js";import"./clsx-B-dksMZM.js";import"./get-user-locale-D7NovkDx.js";import"./mem-Ckbju6zU.js";import"./mimic-fn-Bbosp5ci.js";import"./map-age-cleaner-CPctxYi4.js";import"./p-defer-O4M1dHHK.js";import"./@wojtekmaj-B-N8U4WN.js";const v="_channel_reviews_5id6q_1",h="_channel_reviews__caption_5id6q_6",w="_channel_reviews__wrapper_5id6q_15",d="_channel_reviews__marks_5id6q_26",x="_channel_reviews__marks_amount_5id6q_30",j="_channel_reviews__mark_5id6q_26",u="_channel_reviews__stars_5id6q_48",e={channel_reviews:v,channel_reviews__caption:h,channel_reviews__wrapper:w,channel_reviews__marks:d,channel_reviews__marks_amount:x,channel_reviews__mark:j,channel_reviews__stars:u},W="_channel_reviews__starsWrapper_b2x7a_1",g="_channel_reviews__starsWrapper__stars_b2x7a_7",k="_channel_reviews__starsWrapper__star_b2x7a_7",N="_channel_reviews__starsWrapper__progressbar_b2x7a_15",_={channel_reviews__starsWrapper:W,channel_reviews__starsWrapper__stars:g,channel_reviews__starsWrapper__star:k,channel_reviews__starsWrapper__progressbar:N},a=n.memo(({stars_amount:s,progress_amount:o})=>{const c=n.useMemo(()=>Array(s).fill("active"),[s]),m=n.useMemo(()=>Array(5-s).fill("disactive"),[s]);return r.jsxs("div",{className:_.channel_reviews__starsWrapper,children:[r.jsxs("div",{className:_.channel_reviews__starsWrapper__stars,children:[c.map((i,t)=>r.jsx("img",{className:_.channel_reviews__starsWrapper__star,src:`${p}/ProfilePage/icons/channel_reviews__item/channel_reviews__item_star_active.png`,alt:"Изображение активной звезды"},i+t)),m.map((i,t)=>r.jsx("img",{className:_.channel_reviews__starsWrapper__star,src:`${p}/ProfilePage/icons/channel_reviews__item/channel_reviews__item_star_disactive.png`,alt:"Изображение пустой звезды"},i+t))]}),r.jsx(l,{"aria-labelledby":`Рейтинг канала в ${s} звёздах`,className:_.channel_reviews__starsWrapper__progressbar,value:o,showValue:!1})]})}),xr=n.memo(()=>r.jsxs("section",{className:e.channel_reviews,children:[r.jsx("h2",{className:e.channel_reviews__caption,children:"Отзывы канала"}),r.jsxs("div",{className:e.channel_reviews__wrapper,children:[r.jsxs("div",{className:e.channel_reviews__marks,children:[r.jsx("span",{className:e.channel_reviews__mark,children:"5.0"}),r.jsx("span",{className:e.channel_reviews__marks_amount,children:"484 оценки"})]}),r.jsxs("div",{className:e.channel_reviews__stars,children:[r.jsx(a,{stars_amount:5,progress_amount:100}),r.jsx(a,{stars_amount:4,progress_amount:80}),r.jsx(a,{stars_amount:3,progress_amount:0}),r.jsx(a,{stars_amount:2,progress_amount:0}),r.jsx(a,{stars_amount:1,progress_amount:0})]})]})]}));export{xr as Channel_reviews};