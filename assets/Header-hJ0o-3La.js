import{r as h,j as e}from"./react-DAuq9I5S.js";import{x as l,l as d,q as s}from"./index-vmOflUON.js";import{L as n}from"./react-router-dom-BGZc-yd9.js";import{D as r}from"./flowbite-react-BrPRBjFq.js";import"./react-dom-VBx5aaw9.js";import"./@testing-library-ruu4kEeH.js";import{S as o}from"./@mui-Bim6beBr.js";const c="_header_1ped9_1",m="_header__caption_1ped9_27",p="_header__caption__span_1ped9_34",x="_header__items_1ped9_37",w="_header__item_1ped9_37",v="_header__item__switcher_1ped9_44",b="_header__item__title_1ped9_51",k="_header__item__title__active_1ped9_60",j="_header__item__link_1ped9_63",C="_header__item__navbar_1ped9_72",g="_header__item__navbar_dropdown_1ped9_76",N="_header__item__navbar_dropdown_item_1ped9_90",f="_header__item__navbar_dropdown_link_1ped9_95",u="_header__item__navbar_dropdown_leave_1ped9_105",H="_header__item__login_1ped9_117",S="_header__item__reg_1ped9_122",_={header:c,header__caption:m,header__caption__span:p,header__items:x,header__item:w,header__item__switcher:v,header__item__title:b,header__item__title__active:k,header__item__link:j,header__item__navbar:C,header__item__navbar_dropdown:g,header__item__navbar_dropdown_item:N,header__item__navbar_dropdown_link:f,header__item__navbar_dropdown_leave:u,header__item__login:H,header__item__reg:S},$=[{link:"/profile",text:"Мой аккаунт TeleWorks"},{link:"/",text:"Мои каналы"},{link:"/",text:"Избранное"},{link:"/",text:"Мои шаблоны"},{link:"/",text:"Заявки"},{link:"/",text:"Мои услуги"},{link:"/",text:"История транзакций"},{link:"/",text:"Баланс"},{link:"/",text:"Рефералы"}],L=()=>{const[t,i]=h.useState("Исполнитель");return e.jsxs("header",{className:_.header,children:[e.jsxs("h1",{className:_.header__caption,"data-testid":"headerCaption",children:["Tele",e.jsx("span",{className:_.header__caption__span,children:"Works"})]}),e.jsxs("div",{className:_.header__items,children:[e.jsx("div",{className:_.header__item__switcher,children:e.jsx("span",{"data-testid":"switcher__customer","data-disabled":t=="Заказчик",className:`${_.header__item__title} ${t=="Заказчик"?_.header__item__title__active:""}`,children:"Заказчик"})}),e.jsx(o,{onClick:()=>t=="Исполнитель"?i("Заказчик"):i("Исполнитель"),"data-testid":"headerSwitcher",className:"header__item__switcherComponent",inputProps:{"aria-label":'Свитчер "Заказчик/Исполнитель"'},defaultChecked:!0}),e.jsx("div",{className:_.header__item__switcher,children:e.jsx("span",{"data-disabled":t=="Исполнитель","data-testid":"switcher__performer",className:`${_.header__item__title} ${t=="Исполнитель"?_.header__item__title__active:""}`,children:"Исполнитель"})}),e.jsx(n,{"data-testid":"headerLink",to:"/",className:`${_.header__item__title} ${_.header__item__link}`,children:"Сервисы"}),e.jsx("div",{className:_.header__item__navbar,children:e.jsxs(r,{className:_.header__item__navbar_dropdown,label:"",dismissOnClick:!1,renderTrigger:()=>e.jsxs("svg",{"data-testid":"header-flowbite-dropdown-trigger",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_17_16)",children:[e.jsx("path",{d:"M28.125 26.25H1.87501C0.839435 26.25 0 25.4105 0 24.375C0 23.3395 0.839435 22.5 1.87501 22.5H28.1251C29.1606 22.5 30.0001 23.3395 30.0001 24.375C30 25.4105 29.1606 26.25 28.125 26.25Z",fill:"black"}),e.jsx("path",{d:"M28.125 16.875H1.87501C0.839435 16.875 0 16.0355 0 15C0 13.9645 0.839435 13.125 1.87501 13.125H28.1251C29.1606 13.125 30.0001 13.9644 30.0001 15C30.0001 16.0356 29.1606 16.875 28.125 16.875Z",fill:"black"}),e.jsx("path",{d:"M28.125 7.50002H1.87501C0.839435 7.50002 0 6.66059 0 5.62501C0 4.58944 0.839435 3.75 1.87501 3.75H28.1251C29.1606 3.75 30.0001 4.58944 30.0001 5.62501C30.0001 6.66059 29.1606 7.50002 28.125 7.50002Z",fill:"black"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_17_16",children:e.jsx("rect",{width:"30",height:"30",fill:"white"})})})]}),children:[$.map(a=>e.jsx(r.Item,{className:_.header__item__navbar_dropdown_item,children:e.jsx("div",{onClick:()=>l(a.link),className:_.header__item__navbar_dropdown_link,children:a.text})},a.link+a.text)),e.jsx(r.Item,{className:_.header__item__navbar_dropdown_item,children:e.jsx(n,{className:_.header__item__navbar_dropdown_leave,to:"/",children:"Выйти"})})]})}),e.jsx(d,{type:s.RED,className:_.header__item__login,to:"/",text:"Войти"}),e.jsx(d,{to:"/",className:_.header__item__reg,text:"Регистрация",type:s.GRAY})]})]})};export{L as H};
