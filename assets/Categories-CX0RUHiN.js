import{r as i,j as e}from"./react-B8VV3c8w.js";import{S as m,N as d,a as w}from"./swiper-6ubH3xKJ.js";const h="_CustomItemBadge_16to5_1",p={CustomItemBadge:h},B=i.memo(({className:s,firstTitle:_,secondTitle:o})=>e.jsxs("span",{className:`${p.CustomItemBadge} ${s}`,children:[_," ",e.jsx("span",{children:o})]})),S=s=>i.createElement("svg",{width:15,height:8,viewBox:"0 0 15 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.286523 0.270361C0.668555 -0.0901204 1.28797 -0.0901204 1.67 0.270361L7.50001 5.77147L13.3301 0.270361C13.7121 -0.0901204 14.3314 -0.0901204 14.7135 0.270361C15.0955 0.630843 15.0955 1.21526 14.7135 1.57576L8.19171 7.72963C7.80967 8.09012 7.19036 8.09012 6.80832 7.72963L0.286523 1.57576C-0.0955078 1.21526 -0.0955078 0.630843 0.286523 0.270361Z",fill:"#FF5555"})),v="_categories_uh9wr_1",x="_categoriesWrapper_uh9wr_12",C="_categories__arrow_uh9wr_18",u="_categories__arrowNext_uh9wr_32",$="_categories__arrowPrev_uh9wr_35",j="_categories__item_uh9wr_38",L="_categories__item__active_uh9wr_51",t={categories:v,categoriesWrapper:x,categories__arrow:C,categories__arrowNext:u,categories__arrowPrev:$,categories__item:j,categories__item__active:L},I=i.memo(({categories:s,className:_,SliderPrevArrowID:o,SliderNextArrowID:l})=>{const[n,g]=i.useState(0),c=s.length>=5;return e.jsx("div",{className:`${t.categories} categories ${_}`,children:c?e.jsxs(e.Fragment,{children:[c&&e.jsx("svg",{id:o,className:`${t.categories__arrow} ${t.categories__arrowPrev}`,width:"8",height:"15",viewBox:"0 0 8 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{rotate:"180deg"},children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.270361 14.7135C-0.0901204 14.3314 -0.0901205 13.712 0.270361 13.33L5.77147 7.49999L0.270361 1.66993C-0.090121 1.28788 -0.090121 0.668578 0.270361 0.286533C0.630842 -0.0955115 1.21526 -0.0955115 1.57576 0.286533L7.72963 6.80829C8.09012 7.19033 8.09012 7.80964 7.72963 8.19168L1.57576 14.7135C1.21526 15.0955 0.630843 15.0955 0.270361 14.7135Z",fill:"#001A72"})}),e.jsx(m,{navigation:{prevEl:`#${o}`,nextEl:`#${l}`},modules:[d],spaceBetween:60,slidesPerView:"auto",slidesPerGroup:5.2,children:s.map((r,a)=>e.jsx(w,{children:e.jsx("span",{onClick:()=>g(a),className:`${t.categories__item} ${n==a?t.categories__item__active:""}`,children:r})},r))}),c&&e.jsx("svg",{id:l,className:`${t.categories__arrow} ${t.categories__arrowNext}`,width:"8",height:"15",viewBox:"0 0 8 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.270361 14.7135C-0.0901204 14.3314 -0.0901205 13.712 0.270361 13.33L5.77147 7.49999L0.270361 1.66993C-0.090121 1.28788 -0.090121 0.668578 0.270361 0.286533C0.630842 -0.0955115 1.21526 -0.0955115 1.57576 0.286533L7.72963 6.80829C8.09012 7.19033 8.09012 7.80964 7.72963 8.19168L1.57576 14.7135C1.21526 15.0955 0.630843 15.0955 0.270361 14.7135Z",fill:"#001A72"})})]}):e.jsx("div",{className:t.categoriesWrapper,children:s.map((r,a)=>e.jsx("span",{onClick:()=>g(a),className:`${t.categories__item} ${n==a?t.categories__item__active:""}`,children:r},r))})})});export{B as C,S,I as a};
