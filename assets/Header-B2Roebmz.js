import{r as h,j as e}from"./react-Dfg0QzLj.js";import{l as s,q as n}from"./index-BHqCU7cL.js";import{L as r}from"./react-router-dom-5oYev41E.js";import{D as i}from"./flowbite-react-vWwfskHq.js";import{S as l}from"./@mui-B5R2PSNd.js";const o="_header_p2gf7_1",c="_header__caption_p2gf7_27",m="_header__caption__span_p2gf7_34",p="_header__items_p2gf7_37",x="_header__item_p2gf7_37",w="_header__item__switcher_p2gf7_44",v="_header__item__title_p2gf7_51",g="_header__item__title__active_p2gf7_60",f="_header__item__link_p2gf7_63",b="_header__item__navbar_p2gf7_72",k="_header__item__navbar_dropdown_p2gf7_76",j="_header__item__navbar_dropdown_item_p2gf7_90",C="_header__item__navbar_dropdown_link_p2gf7_95",N="_header__item__navbar_dropdown_leave_p2gf7_105",u="_header__item__login_p2gf7_117",H="_header__item__reg_p2gf7_122",_={header:o,header__caption:c,header__caption__span:m,header__items:p,header__item:x,header__item__switcher:w,header__item__title:v,header__item__title__active:g,header__item__link:f,header__item__navbar:b,header__item__navbar_dropdown:k,header__item__navbar_dropdown_item:j,header__item__navbar_dropdown_link:C,header__item__navbar_dropdown_leave:N,header__item__login:u,header__item__reg:H},S=[{link:"/profile",text:"Мой аккаунт TeleWorks"},{link:"/",text:"Мои каналы"},{link:"/",text:"Избранное"},{link:"/",text:"Мои шаблоны"},{link:"/",text:"Заявки"},{link:"/",text:"Мои услуги"},{link:"/",text:"История транзакций"},{link:"/",text:"Баланс"},{link:"/",text:"Рефералы"}],E=()=>{const[a,d]=h.useState("Исполнитель");return e.jsxs("header",{className:_.header,children:[e.jsxs("h1",{className:_.header__caption,"data-testid":"headerCaption",children:["Tele",e.jsx("span",{className:_.header__caption__span,children:"Works"})]}),e.jsxs("div",{className:_.header__items,children:[e.jsx("div",{className:_.header__item__switcher,children:e.jsx("span",{"data-testid":"switcher__customer","data-disabled":a=="Заказчик",className:`${_.header__item__title} ${a=="Заказчик"?_.header__item__title__active:""}`,children:"Заказчик"})}),e.jsx(l,{onClick:()=>a=="Исполнитель"?d("Заказчик"):d("Исполнитель"),"data-testid":"headerSwitcher",className:"header__item__switcherComponent",inputProps:{"aria-label":'Свитчер "Заказчик/Исполнитель"'},defaultChecked:!0}),e.jsx("div",{className:_.header__item__switcher,children:e.jsx("span",{"data-disabled":a=="Исполнитель","data-testid":"switcher__performer",className:`${_.header__item__title} ${a=="Исполнитель"?_.header__item__title__active:""}`,children:"Исполнитель"})}),e.jsx(r,{"data-testid":"headerLink",to:"/",className:`${_.header__item__title} ${_.header__item__link}`,children:"Сервисы"}),e.jsx("div",{className:_.header__item__navbar,children:e.jsxs(i,{className:_.header__item__navbar_dropdown,label:"",dismissOnClick:!1,renderTrigger:()=>e.jsxs("svg",{"data-testid":"header-flowbite-dropdown-trigger",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_17_16)",children:[e.jsx("path",{d:"M28.125 26.25H1.87501C0.839435 26.25 0 25.4105 0 24.375C0 23.3395 0.839435 22.5 1.87501 22.5H28.1251C29.1606 22.5 30.0001 23.3395 30.0001 24.375C30 25.4105 29.1606 26.25 28.125 26.25Z",fill:"black"}),e.jsx("path",{d:"M28.125 16.875H1.87501C0.839435 16.875 0 16.0355 0 15C0 13.9645 0.839435 13.125 1.87501 13.125H28.1251C29.1606 13.125 30.0001 13.9644 30.0001 15C30.0001 16.0356 29.1606 16.875 28.125 16.875Z",fill:"black"}),e.jsx("path",{d:"M28.125 7.50002H1.87501C0.839435 7.50002 0 6.66059 0 5.62501C0 4.58944 0.839435 3.75 1.87501 3.75H28.1251C29.1606 3.75 30.0001 4.58944 30.0001 5.62501C30.0001 6.66059 29.1606 7.50002 28.125 7.50002Z",fill:"black"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_17_16",children:e.jsx("rect",{width:"30",height:"30",fill:"white"})})})]}),children:[S.map(t=>e.jsx(i.Item,{className:_.header__item__navbar_dropdown_item,children:e.jsx(r,{className:_.header__item__navbar_dropdown_link,to:t.link,children:t.text})},t.link+t.text)),e.jsx(i.Item,{className:_.header__item__navbar_dropdown_item,children:e.jsx(r,{className:_.header__item__navbar_dropdown_leave,to:"/",children:"Выйти"})})]})}),e.jsx(s,{type:n.RED,className:_.header__item__login,to:"/",text:"Войти"}),e.jsx(s,{to:"/",className:_.header__item__reg,text:"Регистрация",type:n.GRAY})]})]})};export{E as H};