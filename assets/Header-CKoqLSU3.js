import{r as h,j as e}from"./react-DAuq9I5S.js";import{l as s,v as n}from"./index-CP1zXGDr.js";import{L as r}from"./react-router-dom-DMQ57OMV.js";import{D as i}from"./flowbite-react-CqS_BXli.js";import{S as l}from"./@mui-DCQj4JTJ.js";const o="_header_tq7fy_1",c="_header__caption_tq7fy_27",m="_header__caption__span_tq7fy_34",p="_header__items_tq7fy_37",x="_header__item_tq7fy_37",w="_header__item__switcher_tq7fy_44",v="_header__item__title_tq7fy_51",f="_header__item__title__active_tq7fy_60",b="_header__item__link_tq7fy_63",k="_header__item__navbar_tq7fy_72",j="_header__item__navbar_dropdown_tq7fy_76",y="_header__item__navbar_dropdown_item_tq7fy_90",C="_header__item__navbar_dropdown_link_tq7fy_95",g="_header__item__navbar_dropdown_leave_tq7fy_105",N="_header__item__login_tq7fy_117",q="_header__item__reg_tq7fy_122",_={header:o,header__caption:c,header__caption__span:m,header__items:p,header__item:x,header__item__switcher:w,header__item__title:v,header__item__title__active:f,header__item__link:b,header__item__navbar:k,header__item__navbar_dropdown:j,header__item__navbar_dropdown_item:y,header__item__navbar_dropdown_link:C,header__item__navbar_dropdown_leave:g,header__item__login:N,header__item__reg:q},u=[{link:"/profile",text:"Мой аккаунт TeleWorks"},{link:"/",text:"Мои каналы"},{link:"/",text:"Избранное"},{link:"/",text:"Мои шаблоны"},{link:"/",text:"Заявки"},{link:"/",text:"Мои услуги"},{link:"/",text:"История транзакций"},{link:"/",text:"Баланс"},{link:"/",text:"Рефералы"}],B=()=>{const[t,d]=h.useState("Исполнитель");return e.jsxs("header",{className:_.header,children:[e.jsxs("h1",{className:_.header__caption,"data-testid":"headerCaption",children:["Tele",e.jsx("span",{className:_.header__caption__span,children:"Works"})]}),e.jsxs("div",{className:_.header__items,children:[e.jsx("div",{className:_.header__item__switcher,children:e.jsx("span",{"data-testid":"switcher__customer","data-disabled":t=="Заказчик",className:`${_.header__item__title} ${t=="Заказчик"?_.header__item__title__active:""}`,children:"Заказчик"})}),e.jsx(l,{onClick:()=>t=="Исполнитель"?d("Заказчик"):d("Исполнитель"),"data-testid":"headerSwitcher",className:"header__item__switcherComponent",inputProps:{"aria-label":'Свитчер "Заказчик/Исполнитель"'},defaultChecked:!0}),e.jsx("div",{className:_.header__item__switcher,children:e.jsx("span",{"data-disabled":t=="Исполнитель","data-testid":"switcher__performer",className:`${_.header__item__title} ${t=="Исполнитель"?_.header__item__title__active:""}`,children:"Исполнитель"})}),e.jsx(r,{"data-testid":"headerLink",to:"/",className:`${_.header__item__title} ${_.header__item__link}`,children:"Сервисы"}),e.jsx("div",{className:_.header__item__navbar,children:e.jsxs(i,{className:_.header__item__navbar_dropdown,label:"",dismissOnClick:!1,renderTrigger:()=>e.jsxs("svg",{"data-testid":"header-flowbite-dropdown-trigger",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_17_16)",children:[e.jsx("path",{d:"M28.125 26.25H1.87501C0.839435 26.25 0 25.4105 0 24.375C0 23.3395 0.839435 22.5 1.87501 22.5H28.1251C29.1606 22.5 30.0001 23.3395 30.0001 24.375C30 25.4105 29.1606 26.25 28.125 26.25Z",fill:"black"}),e.jsx("path",{d:"M28.125 16.875H1.87501C0.839435 16.875 0 16.0355 0 15C0 13.9645 0.839435 13.125 1.87501 13.125H28.1251C29.1606 13.125 30.0001 13.9644 30.0001 15C30.0001 16.0356 29.1606 16.875 28.125 16.875Z",fill:"black"}),e.jsx("path",{d:"M28.125 7.50002H1.87501C0.839435 7.50002 0 6.66059 0 5.62501C0 4.58944 0.839435 3.75 1.87501 3.75H28.1251C29.1606 3.75 30.0001 4.58944 30.0001 5.62501C30.0001 6.66059 29.1606 7.50002 28.125 7.50002Z",fill:"black"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_17_16",children:e.jsx("rect",{width:"30",height:"30",fill:"white"})})})]}),children:[u.map(a=>e.jsx(i.Item,{className:_.header__item__navbar_dropdown_item,children:e.jsx(r,{className:_.header__item__navbar_dropdown_link,to:a.link,children:a.text})},a.link+a.text)),e.jsx(i.Item,{className:_.header__item__navbar_dropdown_item,children:e.jsx(r,{className:_.header__item__navbar_dropdown_leave,to:"/",children:"Выйти"})})]})}),e.jsx(s,{type:n.RED,className:_.header__item__login,to:"/",text:"Войти"}),e.jsx(s,{to:"/",className:_.header__item__reg,text:"Регистрация",type:n.GRAY})]})]})};export{B as H};
