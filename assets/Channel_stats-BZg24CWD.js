import{r as i,j as t}from"./react-SWQbpNdl.js";import{U as a}from"./index-BhImkbIt.js";import"./@babel-BUiOBcM-.js";import"./react-dom-DxN2oLL9.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-DjGoV6A_.js";import"./react-router-D0TulCCO.js";import"./@remix-run-BFLWy9pZ.js";import"./flowbite-react-BQ69OgIf.js";import"./react-icons-B6XOnTk_.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-iR1RLlz2.js";import"./debounce-0BFaHC-l.js";import"./@floating-ui-Yq7M0TBs.js";import"./tabbable-DNPBiPWX.js";import"./@mui-BcRc7fw5.js";import"./clsx-B-dksMZM.js";import"./@emotion-CMQ2GY60.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./react-transition-group-MCX_ZxWf.js";import"./@szhsin-DO4_NVdT.js";import"./react-transition-state-DTZZMOIP.js";import"./react-loadingg-mexSmHAC.js";import"./styled-components-B8tnORu1.js";import"./stylis-CMHfHRFC.js";import"./stylis-rule-sheet-D4hHYmwC.js";import"./merge-anything-D_kaZiAl.js";import"./is-what-BcD0NeHv.js";import"./react-redux-DTcQUcTr.js";import"./use-sync-external-store-CU8T5Q8Q.js";import"./@reduxjs-BMC_f8BA.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";const c="_channel_stats_x59n8_1",r="_channel_stats__caption_x59n8_8",l="_channel_stats__items_x59n8_17",n={channel_stats:c,channel_stats__caption:r,channel_stats__items:l},p=[{imgURL:`${a}/ProfilePage/images/Channel_stats/Channel_stats_rating.png`,caption:"Рейтинг",amount:"509.2"},{imgURL:`${a}/ProfilePage/images/Channel_stats/Channel_stats_requests.webp`,caption:"Выполнено заявок",amount:"102"},{imgURL:`${a}/ProfilePage/images/Channel_stats/Channel_stats_stars.webp`,caption:"Оценка отзывов",amount:"5.0",stars:!0}],h="_channel_stats_item_1wyia_1",g="_channel_stats_item__img_1wyia_11",x="_channel_stats_item__caption_1wyia_15",u="_channel_stats_item__amount_1wyia_22",j="_channel_stats_item__star_icon_1wyia_31",s={channel_stats_item:h,channel_stats_item__img:g,channel_stats_item__caption:x,channel_stats_item__amount:u,channel_stats_item__star_icon:j},d=i.memo(({imgURL:_,caption:e,amount:m,stars:o})=>t.jsxs("div",{className:s.channel_stats_item,children:[t.jsx("img",{className:s.channel_stats_item__img,src:_,alt:"Изображение рейтинга"}),t.jsx("h5",{className:s.channel_stats_item__caption,children:e}),t.jsxs("span",{className:s.channel_stats_item__amount,children:[m,o&&t.jsx("img",{width:29,height:27,className:s.channel_stats_item__star_icon,src:`${a}/ProfilePage/icons/channel_stats__item/Channel_stats__item_star_icon.png`,alt:"Изображение рейтинга"})]})]})),st=i.memo(()=>t.jsxs("section",{className:n.channel_stats,children:[t.jsx("h2",{className:n.channel_stats__caption,children:"Статистика канала"}),t.jsx("div",{className:n.channel_stats__items,children:p.map(_=>t.jsx(d,{..._},_.caption))})]}));export{st as Channel_stats};