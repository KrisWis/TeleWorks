import{r as p,j as e}from"./react-GnO0LmOb.js";import{P}from"./primereact-CaVLV2bU.js";import{U as l}from"./app-routes-j9raKOz1.js";import"./@babel-BoqLWp7i.js";import"./react-dom-D4eIH3yJ.js";import"./react-share-social-DgRi0E-b.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./@emotion-C_ibbh6v.js";import"./hoist-non-react-statics-DWNbBR1I.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-CzWA12An.js";import"./@popperjs-BQBsAJpH.js";import"./@mui-DtOm6wgI.js";import"./jss-plugin-rule-value-function-P3FhxEwN.js";import"./jss-DAkgY5qt.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-SbrwI9VQ.js";import"./jss-plugin-nested-mmogzEqH.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-zsTukSBu.js";import"./jss-plugin-vendor-prefixer-Dq8p7DI_.js";import"./css-vendor-v3ZYP5j7.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-share-CbqYIZxE.js";import"./classnames-DTKT5ssy.js";import"./jsonp-Daw0h_Hj.js";import"./react-router-dom-QUkaKMPq.js";import"./react-router-B2pE81Sw.js";import"./@remix-run-I3CLtn5C.js";import"./@reduxjs-BCqweWi6.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./react-redux-DfXJ0qGx.js";import"./use-sync-external-store-9xXU9FlP.js";import"./styled-components-CkumfAB6.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-C2kzdvfa.js";import"./react-select-DExkn266.js";import"./@floating-ui-RYOEkms0.js";import"./use-isomorphic-layout-effect-SVXGVfvv.js";import"./memoize-one-BdPwpGay.js";import"./swiper-CZB9Z16M.js";const c="_ReviewsPanel_1f7v4_1",w="_ReviewsPanel__caption_1f7v4_6",R="_ReviewsPanel__wrapper_1f7v4_15",x="_ReviewsPanel__marks_1f7v4_25",d="_ReviewsPanel__marks_amount_1f7v4_29",j="_ReviewsPanel__mark_1f7v4_25",u="_ReviewsPanel__stars_1f7v4_47",r={ReviewsPanel:c,ReviewsPanel__caption:w,ReviewsPanel__wrapper:R,ReviewsPanel__marks:x,ReviewsPanel__marks_amount:d,ReviewsPanel__mark:j,ReviewsPanel__stars:u},W="_ReviewsPanel__starsWrapper_ko6tc_1",g="_ReviewsPanel__starsWrapper__stars_ko6tc_7",k="_ReviewsPanel__starsWrapper__star_ko6tc_7",f="_ReviewsPanel__starsWrapper__progressbar_ko6tc_15",t={ReviewsPanel__starsWrapper:W,ReviewsPanel__starsWrapper__stars:g,ReviewsPanel__starsWrapper__star:k,ReviewsPanel__starsWrapper__progressbar:f},i=p.memo(({stars_amount:s,progress_amount:o})=>{const m=p.useMemo(()=>Array(s).fill("active"),[s]),n=p.useMemo(()=>Array(5-s).fill("disactive"),[s]);return e.jsxs("div",{className:t.ReviewsPanel__starsWrapper,children:[e.jsxs("div",{className:t.ReviewsPanel__starsWrapper__stars,children:[m.map((a,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${l}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`,alt:"Изображение активной звезды"},a+_)),n.map((a,_)=>e.jsx("img",{className:t.ReviewsPanel__starsWrapper__star,src:`${l}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_disactive.png`,alt:"Изображение пустой звезды"},a+_))]}),e.jsx(P,{"aria-labelledby":`Рейтинг канала в ${s} звёздах`,className:t.ReviewsPanel__starsWrapper__progressbar,value:o,showValue:!1})]})}),de=p.memo(({mark:s,reviewsAmount:o,fiveStarsProgress:m,fourStarsProgress:n,threeStarsProgress:a,twoStarsProgress:_,oneStarsProgress:v})=>e.jsx("section",{className:r.ReviewsPanel,children:e.jsxs("div",{className:r.ReviewsPanel__wrapper,children:[e.jsxs("div",{className:r.ReviewsPanel__marks,children:[e.jsx("span",{className:r.ReviewsPanel__mark,children:s.toFixed(1)}),e.jsxs("span",{className:r.ReviewsPanel__marks_amount,children:[o," оценки"]})]}),e.jsxs("div",{className:r.ReviewsPanel__stars,children:[e.jsx(i,{stars_amount:5,progress_amount:m}),e.jsx(i,{stars_amount:4,progress_amount:n}),e.jsx(i,{stars_amount:3,progress_amount:a}),e.jsx(i,{stars_amount:2,progress_amount:_}),e.jsx(i,{stars_amount:1,progress_amount:v})]})]})}));export{de as ReviewsPanel};
