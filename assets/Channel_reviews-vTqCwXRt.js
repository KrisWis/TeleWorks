import{r as n,j as e}from"./react-Dfg0QzLj.js";import{P as m}from"./primereact-1lsqHZCQ.js";import{U as c}from"./index-BHqCU7cL.js";import"./@babel-DnEJNfVd.js";import"./index-BEOeqUTL.js";import"./react-dom-C9wOZFLX.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-5oYev41E.js";import"./react-router-BvbIkLuK.js";import"./@remix-run-BFLWy9pZ.js";import"./flowbite-react-vWwfskHq.js";import"./react-icons-DBJQZJWR.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-CJMI-Y6p.js";import"./debounce-C4Qqi4Eb.js";import"./@floating-ui-DXdSgT1t.js";import"./tabbable-DNPBiPWX.js";import"./react-select-C22iTgpe.js";import"./@emotion-CWN3Zhke.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-FDnFs_-n.js";import"./use-isomorphic-layout-effect-DSs63ilz.js";import"./memoize-one-BdPwpGay.js";import"./swiper-D0AfF8Y-.js";import"./react-calendar-CDra9IUa.js";import"./clsx-B-dksMZM.js";import"./get-user-locale-Dtfft7u7.js";import"./mem-kns0x1Eo.js";import"./mimic-fn-Bbosp5ci.js";import"./map-age-cleaner-DjG3IVAO.js";import"./p-defer-O4M1dHHK.js";import"./@wojtekmaj-B-N8U4WN.js";const v="_channel_reviews_5id6q_1",h="_channel_reviews__caption_5id6q_6",w="_channel_reviews__wrapper_5id6q_15",d="_channel_reviews__marks_5id6q_26",x="_channel_reviews__marks_amount_5id6q_30",j="_channel_reviews__mark_5id6q_26",u="_channel_reviews__stars_5id6q_48",r={channel_reviews:v,channel_reviews__caption:h,channel_reviews__wrapper:w,channel_reviews__marks:d,channel_reviews__marks_amount:x,channel_reviews__mark:j,channel_reviews__stars:u},W="_channel_reviews__starsWrapper_b2x7a_1",g="_channel_reviews__starsWrapper__stars_b2x7a_7",k="_channel_reviews__starsWrapper__star_b2x7a_7",N="_channel_reviews__starsWrapper__progressbar_b2x7a_15",_={channel_reviews__starsWrapper:W,channel_reviews__starsWrapper__stars:g,channel_reviews__starsWrapper__star:k,channel_reviews__starsWrapper__progressbar:N},a=n.memo(({stars_amount:s,progress_amount:p})=>{const o=n.useMemo(()=>Array(s).fill("active"),[s]),l=n.useMemo(()=>Array(5-s).fill("disactive"),[s]);return e.jsxs("div",{className:_.channel_reviews__starsWrapper,children:[e.jsxs("div",{className:_.channel_reviews__starsWrapper__stars,children:[o.map((i,t)=>e.jsx("img",{className:_.channel_reviews__starsWrapper__star,src:`${c}/ProfilePage/icons/channel_reviews__item/channel_reviews__item_star_active.png`,alt:"Изображение активной звезды"},i+t)),l.map((i,t)=>e.jsx("img",{className:_.channel_reviews__starsWrapper__star,src:`${c}/ProfilePage/icons/channel_reviews__item/channel_reviews__item_star_disactive.png`,alt:"Изображение пустой звезды"},i+t))]}),e.jsx(m,{"aria-labelledby":`Рейтинг канала в ${s} звёздах`,className:_.channel_reviews__starsWrapper__progressbar,value:p,showValue:!1})]})}),_e=n.memo(()=>e.jsxs("section",{className:r.channel_reviews,children:[e.jsx("h2",{className:r.channel_reviews__caption,children:"Отзывы канала"}),e.jsxs("div",{className:r.channel_reviews__wrapper,children:[e.jsxs("div",{className:r.channel_reviews__marks,children:[e.jsx("span",{className:r.channel_reviews__mark,children:"5.0"}),e.jsx("span",{className:r.channel_reviews__marks_amount,children:"484 оценки"})]}),e.jsxs("div",{className:r.channel_reviews__stars,children:[e.jsx(a,{stars_amount:5,progress_amount:100}),e.jsx(a,{stars_amount:4,progress_amount:80}),e.jsx(a,{stars_amount:3,progress_amount:0}),e.jsx(a,{stars_amount:2,progress_amount:0}),e.jsx(a,{stars_amount:1,progress_amount:0})]})]})]}));export{_e as Channel_reviews};
