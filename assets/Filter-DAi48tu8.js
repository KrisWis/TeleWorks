import{r as g,j as e}from"./react-BzMsQ5fY.js";import{S as C,N as w,a as j}from"./swiper-DeodMr5G.js";import{S as d,a as h,s as v}from"./Select-DZB1y2Zo.js";import{a as m,B as F}from"./Header-CV_b8Gh5.js";var a=(_=>(_.TAG1="tag1",_.TAG2="tag2",_.TAG3="tag3",_))(a||{});const u="_categories_106mw_1",f="_categoriesWrapper_106mw_12",N="_categories__arrow_106mw_18",y="_categories__arrowNext_106mw_31",L="_categories__arrowPrev_106mw_34",$="_categories__item_106mw_37",A="_categories__item__active_106mw_50",s={categories:u,categoriesWrapper:f,categories__arrow:N,categories__arrowNext:y,categories__arrowPrev:L,categories__item:$,categories__item__active:A},J=g.memo(({categories:_})=>{const[r,o]=g.useState(0);return e.jsx("div",{className:`${s.categories} categories`,children:_.length>=5?e.jsxs(e.Fragment,{children:[e.jsx("svg",{id:`${_[0]}categories_prevArrow`,className:`${s.categories__arrow} ${s.categories__arrowPrev}`,width:"8",height:"15",viewBox:"0 0 8 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{rotate:"180deg"},children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.270361 14.7135C-0.0901204 14.3314 -0.0901205 13.712 0.270361 13.33L5.77147 7.49999L0.270361 1.66993C-0.090121 1.28788 -0.090121 0.668578 0.270361 0.286533C0.630842 -0.0955115 1.21526 -0.0955115 1.57576 0.286533L7.72963 6.80829C8.09012 7.19033 8.09012 7.80964 7.72963 8.19168L1.57576 14.7135C1.21526 15.0955 0.630843 15.0955 0.270361 14.7135Z",fill:"#001A72"})}),e.jsx(C,{navigation:{prevEl:`#${_[0]}categories_prevArrow`,nextEl:`#${_[0]}categories_nextArrow`},modules:[w],spaceBetween:60,slidesPerView:5.2,slidesPerGroup:5.2,children:_.map((i,l)=>e.jsx(j,{children:e.jsx("span",{onClick:()=>o(l),className:`${s.categories__item} ${r==l?s.categories__item__active:""}`,children:i})},i))}),e.jsx("svg",{id:`${_[0]}categories_nextArrow`,className:`${s.categories__arrow} ${s.categories__arrowNext}`,width:"8",height:"15",viewBox:"0 0 8 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.270361 14.7135C-0.0901204 14.3314 -0.0901205 13.712 0.270361 13.33L5.77147 7.49999L0.270361 1.66993C-0.090121 1.28788 -0.090121 0.668578 0.270361 0.286533C0.630842 -0.0955115 1.21526 -0.0955115 1.57576 0.286533L7.72963 6.80829C8.09012 7.19033 8.09012 7.80964 7.72963 8.19168L1.57576 14.7135C1.21526 15.0955 0.630843 15.0955 0.270361 14.7135Z",fill:"#001A72"})})]}):e.jsx("div",{className:s.categoriesWrapper,children:_.map((i,l)=>e.jsx("span",{onClick:()=>o(l),className:`${s.categories__item} ${r==l?s.categories__item__active:""}`,children:i},i))})})}),z="_Filter_1gjzy_1",S="_Filter__caption_1gjzy_10",M="_Filter__search_1gjzy_19",T="_Filter__searchWrapper_1gjzy_33",Z="_Filter__themes_1gjzy_54",G="_Filter__tags_1gjzy_60",b="_Filter__tags__items_1gjzy_66",B="_Filter__tags__item_1gjzy_66",P="_Filter__tags__item__selected_1gjzy_86",R="_Filter__title_1gjzy_92",W="_Filter__selects_1gjzy_101",E="_Filter__button_1gjzy_108",k="_Filter__button__save_1gjzy_117",D="_Filter__select_1gjzy_101",I="_Filter__select__svg_1gjzy_124",O="_Filter__more_1gjzy_127",t={Filter:z,Filter__caption:S,Filter__search:M,Filter__searchWrapper:T,Filter__themes:Z,Filter__tags:G,Filter__tags__items:b,Filter__tags__item:B,Filter__tags__item__selected:P,Filter__title:R,Filter__selects:W,Filter__button:E,Filter__button__save:k,Filter__select:D,Filter__select__svg:I,Filter__more:O},H=[{value:"Все тематики",label:"Все тематики"},{value:"Все тематики2",label:"Все тематики2"},{value:"Все тематики3",label:"Все тематики3"}],p=()=>e.jsx("svg",{className:`${v.Select__svg} ${t.Filter__select__svg}`,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.46967 9.46967C6.76256 9.17678 7.23744 9.17678 7.53033 9.46967L12 13.9393L16.4697 9.46967C16.7626 9.17678 17.2374 9.17678 17.5303 9.46967C17.8232 9.76256 17.8232 10.2374 17.5303 10.5303L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L6.46967 10.5303C6.17678 10.2374 6.17678 9.76256 6.46967 9.46967Z",fill:"#001A72"})}),Q=({bonusFilters:_})=>{const[r,o]=g.useState([]),i=c=>{r.includes(c)?o(n=>n.filter(x=>x!==c)):o(n=>[...n,c])},l={fontFamily:"var(--second-family)",fontWeight:400,letterSpacing:"-0.01em",lineHeight:"150%"};return e.jsxs("div",{className:t.Filter,children:[e.jsx("h5",{className:t.Filter__caption,children:"Фильтр"}),e.jsx("div",{className:t.Filter__searchWrapper,children:e.jsx("input",{className:t.Filter__search,type:"text",placeholder:"Поиск"})}),e.jsxs("div",{className:t.Filter__themes,children:[e.jsx("span",{className:t.Filter__title,children:"Тематики"}),e.jsx(d,{className:t.Filter__select,CustomDropdownIndicator:p,TextStyles:l,theme:h.GRAY,selectedOptions:H})]}),e.jsxs("div",{className:t.Filter__tags,children:[e.jsx("span",{className:t.Filter__title,children:"Метки"}),e.jsxs("div",{className:t.Filter__tags__items,children:[e.jsx("div",{className:`${t.Filter__tags__item} ${r.includes(a.TAG1)?t.Filter__tags__item__selected:""}`,onClick:()=>i(a.TAG1),children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_5_197)",children:[e.jsx("path",{d:"M8.00005 0.000244141C3.5888 0.000244141 0 3.58899 0 8.00019C0 12.4114 3.5888 16.0001 8.00005 16.0001C12.4112 16.0001 16 12.4114 16 8.00019C16 3.58899 12.4112 0.000244141 8.00005 0.000244141ZM8.00005 14.6887C4.31195 14.6887 1.31147 11.6883 1.31147 8.00019C1.31147 4.31214 4.31195 1.31171 8.00005 1.31171C11.6881 1.31171 14.6885 4.31214 14.6885 8.00019C14.6885 11.6883 11.6881 14.6887 8.00005 14.6887Z",fill:"#FF5555"}),e.jsx("path",{d:"M11.4608 4.92958L6.71089 9.67956L4.5392 7.50787C4.2831 7.25182 3.86794 7.25182 3.61184 7.50787C3.35579 7.76397 3.35579 8.17913 3.61184 8.43524L6.2472 11.0706C6.37526 11.1986 6.54307 11.2627 6.71089 11.2627C6.8787 11.2627 7.04652 11.1986 7.17457 11.0706L12.3882 5.857C12.6442 5.60089 12.6442 5.18574 12.3882 4.92963C12.1321 4.67353 11.7169 4.67353 11.4608 4.92958Z",fill:"#FF5555"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_5_197",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]})}),e.jsx("div",{className:`${t.Filter__tags__item} ${r.includes(a.TAG2)?t.Filter__tags__item__selected:""}`,onClick:()=>i(a.TAG2),children:e.jsx("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.49996 16.625C9.26246 16.625 9.02496 16.5459 8.94579 16.3875L3.08746 9.97504C1.66246 8.39171 1.66246 5.93754 3.24579 4.43338C4.03746 3.64171 5.14579 3.16671 6.33329 3.24588C7.44163 3.32504 8.54996 3.87921 9.26246 4.75004L9.49996 5.06671L9.81663 4.75004C10.5291 3.87921 11.6375 3.32504 12.7458 3.24588C13.8541 3.16671 15.0416 3.64171 15.8333 4.43338C17.3375 5.93754 17.4166 8.39171 15.9916 9.97504L10.1333 16.3875C9.97496 16.5459 9.73746 16.625 9.49996 16.625ZM6.09579 4.75004C5.38329 4.75004 4.82913 5.06671 4.35413 5.46254C3.40413 6.41254 3.40413 7.83754 4.27496 8.86671L9.49996 14.6459L14.725 8.86671C15.5958 7.91671 15.5958 6.41254 14.6458 5.46254C14.1708 4.98754 13.4583 4.67088 12.7458 4.75004C12.0333 4.75004 11.4 5.14588 11.0041 5.70004L10.1333 6.80838C9.81663 7.20421 9.18329 7.20421 8.86663 6.80838L7.99579 5.70004C7.52079 5.14588 6.88746 4.82921 6.17496 4.75004H6.09579Z",fill:"#FF5555"})})}),e.jsx("div",{className:`${t.Filter__tags__item} ${r.includes(a.TAG3)?t.Filter__tags__item__selected:""}`,onClick:()=>i(a.TAG3),children:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_5_217)",children:[e.jsx("path",{d:"M10.3095 0.455244C9.91696 0.255521 9.43674 0.412013 9.23707 0.804759L3.30494 12.4724C3.10527 12.8651 3.26176 13.3452 3.65446 13.5448C3.77027 13.6037 3.89369 13.6316 4.0153 13.6316C4.30595 13.6316 4.58612 13.4722 4.72693 13.1953L10.6591 1.52772C10.8587 1.13502 10.7022 0.654913 10.3095 0.455244Z",fill:"#FF5555"}),e.jsx("path",{d:"M6.05007 4.29743C6.05007 2.6294 4.69301 1.27234 3.02498 1.27234C1.35706 1.27234 0 2.6294 0 4.29743C0 5.9654 1.35706 7.32246 3.02503 7.32246C4.69306 7.32246 6.05007 5.9654 6.05007 4.29743ZM3.02503 5.72723C2.23667 5.72723 1.59523 5.08579 1.59523 4.29743C1.59523 3.50901 2.23667 2.86757 3.02503 2.86757C3.81345 2.86757 4.45489 3.50896 4.45489 4.29743C4.45484 5.08579 3.81345 5.72723 3.02503 5.72723Z",fill:"#FF5555"}),e.jsx("path",{d:"M10.9749 6.67761C9.30689 6.67761 7.94983 8.03467 7.94983 9.70265C7.94983 11.3706 9.30684 12.7277 10.9749 12.7277C12.6429 12.7277 14 11.3707 14 9.70265C14 8.03462 12.6429 6.67761 10.9749 6.67761ZM10.9749 11.1324C10.1865 11.1324 9.54506 10.491 9.54506 9.70259C9.54506 8.91423 10.1865 8.27279 10.9749 8.27279C11.7633 8.27279 12.4047 8.91423 12.4047 9.70259C12.4047 10.491 11.7633 11.1324 10.9749 11.1324Z",fill:"#FF5555"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_5_217",children:e.jsx("rect",{width:"14",height:"14",fill:"white"})})})]})})]})]}),e.jsx("div",{className:t.Filter__selects,children:_.map(c=>e.jsx(d,{className:t.Filter__select,CustomDropdownIndicator:p,TextStyles:l,theme:h.GRAY,selectedOptions:c},c[0].value))}),e.jsx(m,{className:`${t.Filter__button} ${t.Filter__button__save}`,type:F.BLACK,text:"Сохранить фильтр"}),e.jsx(m,{className:t.Filter__button,type:F.RED,text:"Применить фильтр"}),e.jsx("span",{className:t.Filter__more,children:"+ Ещё фильтры"})]})};export{a as C,Q as F,J as a};
