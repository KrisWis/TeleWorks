import{r as e,j as t}from"./react-GnO0LmOb.js";import{U as a}from"./app-routes-CmLnHQ2b.js";import"./@babel-BoqLWp7i.js";import"./@reduxjs-BCqweWi6.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./react-redux-DfXJ0qGx.js";import"./use-sync-external-store-9xXU9FlP.js";const l="_channel_stats_x59n8_1",o="_channel_stats__caption_x59n8_8",h="_channel_stats__items_x59n8_17",n={channel_stats:l,channel_stats__caption:o,channel_stats__items:h},r=[{imgURL:`${a}/ProfilePage/images/Channel_stats/Channel_stats_rating.png`,caption:"Рейтинг",amount:"509.2"},{imgURL:`${a}/ProfilePage/images/Channel_stats/Channel_stats_requests.webp`,caption:"Выполнено заявок",amount:"102"},{imgURL:`${a}/ProfilePage/images/Channel_stats/Channel_stats_stars.webp`,caption:"Оценка отзывов",amount:"5.0",stars:!0}],p="_channel_stats_item_1wyia_1",g="_channel_stats_item__img_1wyia_11",x="_channel_stats_item__caption_1wyia_15",u="_channel_stats_item__amount_1wyia_22",j="_channel_stats_item__star_icon_1wyia_31",s={channel_stats_item:p,channel_stats_item__img:g,channel_stats_item__caption:x,channel_stats_item__amount:u,channel_stats_item__star_icon:j},d=e.memo(({imgURL:_,caption:i,amount:c,stars:m})=>t.jsxs("div",{className:s.channel_stats_item,children:[t.jsx("img",{className:s.channel_stats_item__img,src:_,alt:"Изображение рейтинга"}),t.jsx("h5",{className:s.channel_stats_item__caption,children:i}),t.jsxs("span",{className:s.channel_stats_item__amount,children:[c,m&&t.jsx("img",{width:29,height:27,className:s.channel_stats_item__star_icon,src:`${a}/ProfilePage/icons/channel_stats__item/Channel_stats__item_star_icon.png`,alt:"Изображение рейтинга"})]})]})),b=e.memo(()=>t.jsxs("section",{className:n.channel_stats,children:[t.jsx("h2",{className:n.channel_stats__caption,children:"Статистика канала"}),t.jsx("div",{className:n.channel_stats__items,children:r.map(_=>t.jsx(d,{..._},_.caption))})]}));export{b as Channel_stats};