import{r as e,j as t}from"./react-BzMsQ5fY.js";import{U as a}from"./BaseLayout__data-CoFaL6Zv.js";import"./@babel-t2wm9ggw.js";const m="_channel_stats_3qxl6_1",h="_channel_stats__caption_3qxl6_8",o="_channel_stats__items_3qxl6_17",n={channel_stats:m,channel_stats__caption:h,channel_stats__items:o},r=[{imgURL:`${a}/ProfilePage/images/Channel_stats/Channel_stats_rating.png`,caption:"Рейтинг",amount:"509.2"},{imgURL:`${a}/ProfilePage/images/Channel_stats/Channel_stats_requests.webp`,caption:"Выполнено заявок",amount:"102"},{imgURL:`${a}/ProfilePage/images/Channel_stats/Channel_stats_stars.webp`,caption:"Оценка отзывов",amount:"5.0",stars:!0}],p="_channel_stats_item_ujly2_1",g="_channel_stats_item__img_ujly2_11",u="_channel_stats_item__caption_ujly2_15",j="_channel_stats_item__amount_ujly2_22",x="_channel_stats_item__star_icon_ujly2_31",s={channel_stats_item:p,channel_stats_item__img:g,channel_stats_item__caption:u,channel_stats_item__amount:j,channel_stats_item__star_icon:x},d=e.memo(({imgURL:_,caption:c,amount:i,stars:l})=>t.jsxs("div",{className:s.channel_stats_item,children:[t.jsx("img",{className:s.channel_stats_item__img,src:_,alt:"Изображение рейтинга"}),t.jsx("h5",{className:s.channel_stats_item__caption,children:c}),t.jsxs("span",{className:s.channel_stats_item__amount,children:[i,l&&t.jsx("img",{width:29,height:27,className:s.channel_stats_item__star_icon,src:`${a}/ProfilePage/icons/channel_stats__item/Channel_stats__item_star_icon.png`,alt:"Изображение рейтинга"})]})]})),y=e.memo(()=>t.jsxs("section",{className:n.channel_stats,children:[t.jsx("h2",{className:n.channel_stats__caption,children:"Статистика канала"}),t.jsx("div",{className:n.channel_stats__items,children:r.map(_=>t.jsx(d,{..._},_.caption))})]}));export{y as Channel_stats};
