import{r as p,j as e}from"./react-CA4AiUJV.js";import{P}from"./primereact-G5W_VwUW.js";import{U as l}from"./index-Dza9gl8D.js";import"./@babel-jg6GbPat.js";import"./react-dom-mZ7R76Rh.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-C4CIq1k1.js";import"./react-router--Uu7wFb4.js";import"./@remix-run-BFLWy9pZ.js";import"./react-quill-new-Dv8AEmum.js";import"./lodash-BTUL-dFh.js";import"./quill-nNlu4ERL.js";import"./parchment-Crftfyop.js";import"./quill-delta-B24wi69x.js";import"./fast-diff-Az_-rVRq.js";import"./lodash.clonedeep-DpV3PQoZ.js";import"./lodash.isequal-B9v94zCv.js";import"./eventemitter3-DrUq7uaq.js";import"./lodash-es-BKPNmaDy.js";import"./styled-components-BB6ntmxq.js";import"./tslib-B7u9K5VY.js";import"./@emotion-DEebDVJc.js";import"./hoist-non-react-statics-C4lTEsBz.js";import"./react-is-8JwjhRSi.js";import"./stylis-DinRj2j6.js";import"./swiper-DHqg-7HD.js";import"./react-share-social-f71qpfRp.js";import"./@mui--pnCP3Is.js";import"./clsx-B-dksMZM.js";import"./react-transition-group-oWkHeoYW.js";import"./@popperjs-BQBsAJpH.js";import"./jss-plugin-rule-value-function-CAswgHnP.js";import"./jss-CXMHkjJw.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-CDk7pOKb.js";import"./jss-plugin-nested-LssfNFBT.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-BZKBd3fT.js";import"./jss-plugin-vendor-prefixer-CUcSaikn.js";import"./css-vendor-C7Aa5bc-.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-share-BRKbMSKU.js";import"./classnames-DTKT5ssy.js";import"./jsonp-Daw0h_Hj.js";import"./html-react-parser-M4CbUmYY.js";import"./html-dom-parser-jV8ULUPY.js";import"./domhandler-DGipyZ68.js";import"./domelementtype-AVFTcEpP.js";import"./react-property-CUOM3SWM.js";import"./style-to-js-DfAIR5zD.js";import"./style-to-object-Dj_Impwm.js";import"./inline-style-parser-D--Rb2MU.js";import"./react-select-Bxx1VbEs.js";import"./@floating-ui-ClGdVCbi.js";import"./use-isomorphic-layout-effect-CSuNPc5A.js";import"./memoize-one-BdPwpGay.js";import"./emoji-picker-react-DFACtBJk.js";import"./flairup-CpvKgcza.js";import"./@reduxjs-BnO5hRPg.js";import"./redux-DITMfSWq.js";import"./immer-C45-hHMi.js";import"./reselect-BEFkisvr.js";import"./redux-thunk-ClJT1hhx.js";import"./react-redux-Bi_GanN6.js";import"./use-sync-external-store-CsUaFA4Z.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-BAlDKNlw.js";const c="_ReviewsPanel_1f7v4_1",w="_ReviewsPanel__caption_1f7v4_6",R="_ReviewsPanel__wrapper_1f7v4_15",x="_ReviewsPanel__marks_1f7v4_25",d="_ReviewsPanel__marks_amount_1f7v4_29",j="_ReviewsPanel__mark_1f7v4_25",u="_ReviewsPanel__stars_1f7v4_47",r={ReviewsPanel:c,ReviewsPanel__caption:w,ReviewsPanel__wrapper:R,ReviewsPanel__marks:x,ReviewsPanel__marks_amount:d,ReviewsPanel__mark:j,ReviewsPanel__stars:u},W="_ReviewsPanel__starsWrapper_ko6tc_1",g="_ReviewsPanel__starsWrapper__stars_ko6tc_7",k="_ReviewsPanel__starsWrapper__star_ko6tc_7",f="_ReviewsPanel__starsWrapper__progressbar_ko6tc_15",t={ReviewsPanel__starsWrapper:W,ReviewsPanel__starsWrapper__stars:g,ReviewsPanel__starsWrapper__star:k,ReviewsPanel__starsWrapper__progressbar:f},i=p.memo(({stars_amount:s,progress_amount:o})=>{const m=p.useMemo(()=>Array(s).fill("active"),[s]),n=p.useMemo(()=>Array(5-s).fill("disactive"),[s]);return e.jsxs("div",{className:t.ReviewsPanel__starsWrapper,children:[e.jsxs("div",{className:t.ReviewsPanel__starsWrapper__stars,children:[m.map((a,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${l}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение активной звезды"},a+_)),n.map((a,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${l}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_disactive.png`,alt:"Изображение пустой звезды"},a+_))]}),e.jsx(P,{"aria-labelledby":`Рейтинг канала в ${s} звёздах`,className:t.ReviewsPanel__starsWrapper__progressbar,value:o,showValue:!1})]})}),ze=p.memo(({mark:s,reviewsAmount:o,fiveStarsProgress:m,fourStarsProgress:n,threeStarsProgress:a,twoStarsProgress:_,oneStarsProgress:v})=>e.jsx("section",{className:r.ReviewsPanel,children:e.jsxs("div",{className:r.ReviewsPanel__wrapper,children:[e.jsxs("div",{className:r.ReviewsPanel__marks,children:[e.jsx("span",{className:r.ReviewsPanel__mark,children:s.toFixed(1)}),e.jsxs("span",{className:r.ReviewsPanel__marks_amount,children:[o," оценки"]})]}),e.jsxs("div",{className:r.ReviewsPanel__stars,children:[e.jsx(i,{stars_amount:5,progress_amount:m}),e.jsx(i,{stars_amount:4,progress_amount:n}),e.jsx(i,{stars_amount:3,progress_amount:a}),e.jsx(i,{stars_amount:2,progress_amount:_}),e.jsx(i,{stars_amount:1,progress_amount:v})]})]})}));export{ze as ReviewsPanel};
