import{r as m,j as e}from"./react-SWQbpNdl.js";import{S as a,N as p,a as n}from"./swiper-3vH3F7GG.js";import{m as c,t as S}from"./index-w-Tag_Aj.js";import"./@babel-BUiOBcM-.js";import"./react-dom-DxN2oLL9.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-DjGoV6A_.js";import"./react-router-D0TulCCO.js";import"./@remix-run-BFLWy9pZ.js";import"./flowbite-react-BQ69OgIf.js";import"./react-icons-B6XOnTk_.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-iR1RLlz2.js";import"./debounce-0BFaHC-l.js";import"./@floating-ui-Yq7M0TBs.js";import"./tabbable-DNPBiPWX.js";import"./@mui-BUTVsE8m.js";import"./clsx-B-dksMZM.js";import"./@emotion-BDBTfIC7.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-MCX_ZxWf.js";import"./react-select-BtHigjl0.js";import"./use-isomorphic-layout-effect-Cdzwp0gt.js";import"./memoize-one-BdPwpGay.js";import"./react-loadingg-vDFUarl7.js";import"./styled-components-DPletkhf.js";import"./merge-anything-D_kaZiAl.js";import"./is-what-BcD0NeHv.js";import"./react-redux-lXSSybhs.js";import"./use-sync-external-store-CU8T5Q8Q.js";import"./@reduxjs-BMC_f8BA.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";const x="_ItemsSlider_xepo4_1",h={ItemsSlider:x},I="_ItemsSlider__header_q6x8v_1",w="_ItemsSlider__caption_q6x8v_5",j="_ItemsSlider__arrows_q6x8v_14",v="_ItemsSlider__arrow_q6x8v_14",s={ItemsSlider__header:I,ItemsSlider__caption:w,ItemsSlider__arrows:j,ItemsSlider__arrow:v},C=m.memo(({title:r,prevArrowId:i,nextArrowId:t})=>e.jsxs("div",{className:s.ItemsSlider__header,children:[e.jsx("h2",{className:s.ItemsSlider__caption,children:r}),e.jsxs("div",{className:s.ItemsSlider__arrows,children:[e.jsx("div",{className:s.ItemsSlider__arrow,id:i,children:e.jsx("svg",{width:"25",height:"18",viewBox:"0 0 25 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.654293 9.85766C0.18062 9.38399 0.18062 8.61601 0.654293 8.14234L8.37325 0.423379C8.84693 -0.0502939 9.6149 -0.0502939 10.0886 0.423379C10.5622 0.897053 10.5622 1.66503 10.0886 2.1387L3.22728 9L10.0886 15.8613C10.5622 16.335 10.5622 17.1029 10.0886 17.5766C9.6149 18.0503 8.84693 18.0503 8.37325 17.5766L0.654293 9.85766ZM25 10.2129H1.51196V7.78708H25V10.2129Z",fill:"#4266C6"})})}),e.jsx("div",{className:s.ItemsSlider__arrow,id:t,children:e.jsx("svg",{width:"25",height:"18",viewBox:"0 0 25 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M24.3457 9.85766C24.8194 9.38399 24.8194 8.61601 24.3457 8.14234L16.6267 0.423379C16.1531 -0.0502939 15.3851 -0.0502939 14.9114 0.423379C14.4378 0.897053 14.4378 1.66503 14.9114 2.1387L21.7727 9L14.9114 15.8613C14.4378 16.335 14.4378 17.1029 14.9114 17.5766C15.3851 18.0503 16.1531 18.0503 16.6267 17.5766L24.3457 9.85766ZM0 10.2129H23.488V7.78708H0V10.2129Z",fill:"#4266C6"})})})]})]})),g="_ItemsSlider__slider_11tzc_1",N={ItemsSlider__slider:g},L=m.memo(({componentProps:r,Component:i,visibleItems:t,prevArrowId:o,nextArrowId:l})=>e.jsx("div",{className:N.ItemsSlider__slider,children:e.jsx(a,{navigation:{prevEl:`#${o}`,nextEl:`#${l}`},modules:[p],spaceBetween:20,slidesPerView:c.matches?t-2:S.matches?t-1:t,children:r.map((_,d)=>e.jsx(n,{children:e.jsx(i,{..._})},d))})})),_e=m.memo(({ItemsSlider__headerProps:r,ItemsSlider__sliderProps:i})=>e.jsxs("section",{className:h.ItemsSlider,children:[e.jsx(C,{...r}),e.jsx(L,{...i})]}));export{_e as ItemsSlider};