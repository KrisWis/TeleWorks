import{j as e}from"./react-DAuq9I5S.js";import{U as t}from"./index-CN9dmnju.js";import{P as o}from"./primereact-DgJVuzt_.js";import"./swiper-DMhTBHQv.js";import"./@babel-BUiOBcM-.js";import"./react-dom-BsE7utt3.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-BIzsFd0e.js";import"./react-router-DDMyVUTn.js";import"./@remix-run-Bwh-Hsl8.js";import"./flowbite-react-CqS_BXli.js";import"./react-icons-Bb292ZcB.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-iR1RLlz2.js";import"./debounce-0BFaHC-l.js";import"./@floating-ui-cBkDnv2t.js";import"./tabbable-DNPBiPWX.js";import"./@mui-DNj8DOP0.js";import"./clsx-B-dksMZM.js";import"./@emotion-DSDID1My.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./react-transition-group-B3_X90dl.js";const m="_channel_reviews__starsWrapper_b2x7a_1",v="_channel_reviews__starsWrapper__stars_b2x7a_7",h="_channel_reviews__starsWrapper__star_b2x7a_7",w="_channel_reviews__starsWrapper__progressbar_b2x7a_15",_={channel_reviews__starsWrapper:m,channel_reviews__starsWrapper__stars:v,channel_reviews__starsWrapper__star:h,channel_reviews__starsWrapper__progressbar:w},r=({stars_amount:a,progress_amount:c})=>{const l=Array(a).fill("active"),p=Array(5-a).fill("disactive");return e.jsxs("div",{className:_.channel_reviews__starsWrapper,children:[e.jsxs("div",{className:_.channel_reviews__starsWrapper__stars,children:[l.map((n,i)=>e.jsx("img",{className:_.channel_reviews__starsWrapper__star,src:`${t}/ProfilePage/icons/channel_reviews__item/channel_reviews__item_star_active.png`,alt:"Изображение активной звезды"},n+i)),p.map((n,i)=>e.jsx("img",{className:_.channel_reviews__starsWrapper__star,src:`${t}/ProfilePage/icons/channel_reviews__item/channel_reviews__item_star_disactive.png`,alt:"Изображение пустой звезды"},n+i))]}),e.jsx(o,{"aria-labelledby":`Рейтинг канала в ${a} звёздах`,className:_.channel_reviews__starsWrapper__progressbar,value:c,showValue:!1})]})},d="_channel_reviews_5id6q_1",x="_channel_reviews__caption_5id6q_6",j="_channel_reviews__wrapper_5id6q_15",u="_channel_reviews__marks_5id6q_26",W="_channel_reviews__marks_amount_5id6q_30",g="_channel_reviews__mark_5id6q_26",k="_channel_reviews__stars_5id6q_48",s={channel_reviews:d,channel_reviews__caption:x,channel_reviews__wrapper:j,channel_reviews__marks:u,channel_reviews__marks_amount:W,channel_reviews__mark:g,channel_reviews__stars:k},M=()=>e.jsxs("section",{className:s.channel_reviews,children:[e.jsx("h2",{className:s.channel_reviews__caption,children:"Отзывы канала"}),e.jsxs("div",{className:s.channel_reviews__wrapper,children:[e.jsxs("div",{className:s.channel_reviews__marks,children:[e.jsx("span",{className:s.channel_reviews__mark,children:"5.0"}),e.jsx("span",{className:s.channel_reviews__marks_amount,children:"484 оценки"})]}),e.jsxs("div",{className:s.channel_reviews__stars,children:[e.jsx(r,{stars_amount:5,progress_amount:100}),e.jsx(r,{stars_amount:4,progress_amount:80}),e.jsx(r,{stars_amount:3,progress_amount:0}),e.jsx(r,{stars_amount:2,progress_amount:0}),e.jsx(r,{stars_amount:1,progress_amount:0})]})]})]});export{M as Channel_reviews};
