import{r as o,j as r}from"./react-zrC4k5k2.js";import{S as p,N as a,a as c}from"./swiper-BZYHt685.js";import{m as n,u as S}from"./app-routes-4qbA6mXx.js";import"./@babel-13fjUkWY.js";import"./react-dom-aNADivH4.js";import"./react-router-dom-Bmqp4_LK.js";import"./react-router-Bfa73Yvd.js";import"./@remix-run-I3CLtn5C.js";import"./@reduxjs-BQV_WoVf.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./react-redux-D78363SC.js";import"./use-sync-external-store-Bg1Z0G9P.js";import"./styled-components-BcVmWm4K.js";import"./primereact-nLNvjVu6.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-DMscNvN2.js";import"./@mui-Dh2ADnaV.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./@emotion-CYu4OkFg.js";import"./hoist-non-react-statics-BzqkPicg.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-DvBm5OJO.js";import"./jss-plugin-rule-value-function-NRMjr7SR.js";import"./jss-C2YbWCDG.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-B2s_qxL_.js";import"./jss-plugin-nested-CvQgPwbz.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-CakodQBr.js";import"./jss-plugin-vendor-prefixer-C0RmQ0NR.js";import"./css-vendor-BK3-fMEt.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-select-CLpz9WOa.js";import"./@floating-ui-RYOEkms0.js";import"./use-isomorphic-layout-effect-eSKX-Jxz.js";import"./memoize-one-BdPwpGay.js";const h="_ItemsSlider_xepo4_1",I={ItemsSlider:h},x="_ItemsSlider__header_feoct_1",w="_ItemsSlider__caption_feoct_5",j="_ItemsSlider__arrows_feoct_14",v="_ItemsSlider__arrow_feoct_14",s={ItemsSlider__header:x,ItemsSlider__caption:w,ItemsSlider__arrows:j,ItemsSlider__arrow:v},f=o.memo(({title:e,prevArrowId:t,nextArrowId:i})=>r.jsxs("div",{className:s.ItemsSlider__header,children:[r.jsx("h2",{className:s.ItemsSlider__caption,children:e}),r.jsxs("div",{className:s.ItemsSlider__arrows,children:[r.jsx("div",{className:s.ItemsSlider__arrow,id:t,children:r.jsx("svg",{width:"25",height:"18",viewBox:"0 0 25 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M0.654293 9.85766C0.18062 9.38399 0.18062 8.61601 0.654293 8.14234L8.37325 0.423379C8.84693 -0.0502939 9.6149 -0.0502939 10.0886 0.423379C10.5622 0.897053 10.5622 1.66503 10.0886 2.1387L3.22728 9L10.0886 15.8613C10.5622 16.335 10.5622 17.1029 10.0886 17.5766C9.6149 18.0503 8.84693 18.0503 8.37325 17.5766L0.654293 9.85766ZM25 10.2129H1.51196V7.78708H25V10.2129Z",fill:"var(--violet-color)"})})}),r.jsx("div",{className:s.ItemsSlider__arrow,id:i,children:r.jsx("svg",{width:"25",height:"18",viewBox:"0 0 25 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M24.3457 9.85766C24.8194 9.38399 24.8194 8.61601 24.3457 8.14234L16.6267 0.423379C16.1531 -0.0502939 15.3851 -0.0502939 14.9114 0.423379C14.4378 0.897053 14.4378 1.66503 14.9114 2.1387L21.7727 9L14.9114 15.8613C14.4378 16.335 14.4378 17.1029 14.9114 17.5766C15.3851 18.0503 16.1531 18.0503 16.6267 17.5766L24.3457 9.85766ZM0 10.2129H23.488V7.78708H0V10.2129Z",fill:"var(--violet-color)"})})})]})]})),g="_ItemsSlider__slider_11tzc_1",C={ItemsSlider__slider:g},N=o.memo(({componentProps:e,Component:t,visibleItems:i,prevArrowId:m,nextArrowId:l})=>r.jsx("div",{className:`${C.ItemsSlider__slider} ItemsSlider__slider`,children:r.jsx(p,{navigation:{prevEl:`#${m}`,nextEl:`#${l}`},modules:[a],spaceBetween:20,slidesPerView:n.matches?i-2:S.matches?i-1:i,children:e.map((_,d)=>r.jsx(c,{children:r.jsx(t,{..._})},d))})})),nr=o.memo(({ItemsSlider__headerProps:e,ItemsSlider__sliderProps:t})=>r.jsxs("section",{className:I.ItemsSlider,children:[r.jsx(f,{...e}),r.jsx(N,{...t})]}));export{nr as ItemsSlider};