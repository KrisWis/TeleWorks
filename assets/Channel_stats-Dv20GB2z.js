import{j as t,U as n}from"./index-DQLbsY-q.js";const l="_channel_stats_item_ujly2_1",m="_channel_stats_item__img_ujly2_11",h="_channel_stats_item__caption_ujly2_15",o="_channel_stats_item__amount_ujly2_22",r="_channel_stats_item__star_icon_ujly2_31",s={channel_stats_item:l,channel_stats_item__img:m,channel_stats_item__caption:h,channel_stats_item__amount:o,channel_stats_item__star_icon:r},p=({imgURL:_,caption:e,amount:c,stars:i})=>t.jsxs("div",{className:s.channel_stats_item,children:[t.jsx("img",{className:s.channel_stats_item__img,src:_,alt:"Изображение рейтинга"}),t.jsx("h5",{className:s.channel_stats_item__caption,children:e}),t.jsxs("span",{className:s.channel_stats_item__amount,children:[c,i&&t.jsx("img",{width:29,height:27,className:s.channel_stats_item__star_icon,src:`${n}/icons/channel_stats__item/Channel_stats__item_star_icon.png`,alt:"Изображение рейтинга"})]})]}),g="_channel_stats_3qxl6_1",u="_channel_stats__caption_3qxl6_8",j="_channel_stats__items_3qxl6_17",a={channel_stats:g,channel_stats__caption:u,channel_stats__items:j},x=[{imgURL:`${n}/images/Channel_stats/Channel_stats_rating.png`,caption:"Рейтинг",amount:"509.2"},{imgURL:`${n}/images/Channel_stats/Channel_stats_requests.png`,caption:"Выполнено заявок",amount:"102"},{imgURL:`${n}/images/Channel_stats/Channel_stats_stars.png`,caption:"Оценка отзывов",amount:"5.0",stars:!0}],C=()=>t.jsxs("section",{className:a.channel_stats,children:[t.jsx("h2",{className:a.channel_stats__caption,children:"Статистика канала"}),t.jsx("div",{className:a.channel_stats__items,children:x.map(_=>t.jsx(p,{..._},_.caption))})]});export{C as Channel_stats};