import{r as s,j as e}from"./react-zrC4k5k2.js";import{a as p}from"./app-routes-BbVibnMD.js";import{R as m}from"./index-BJzDoIrs.js";import{R as _}from"./ReviewsSelect-GTb7A7Sx.js";import{R as c}from"./index-Ap874RQY.js";import{L as a}from"./LoadMore-BzGY1Qty.js";import"./@babel-13fjUkWY.js";import"./react-dom-aNADivH4.js";import"./@reduxjs-BQV_WoVf.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./react-redux-D78363SC.js";import"./use-sync-external-store-Bg1Z0G9P.js";import"./styled-components-BcVmWm4K.js";import"./react-router-dom-Bmqp4_LK.js";import"./react-router-Bfa73Yvd.js";import"./@remix-run-I3CLtn5C.js";import"./primereact-nLNvjVu6.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-DMscNvN2.js";import"./@mui-Dh2ADnaV.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./@emotion-CYu4OkFg.js";import"./hoist-non-react-statics-BzqkPicg.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-DvBm5OJO.js";import"./jss-plugin-rule-value-function-NRMjr7SR.js";import"./jss-C2YbWCDG.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-B2s_qxL_.js";import"./jss-plugin-nested-CvQgPwbz.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-CakodQBr.js";import"./jss-plugin-vendor-prefixer-C0RmQ0NR.js";import"./css-vendor-BK3-fMEt.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-select-CLpz9WOa.js";import"./@floating-ui-RYOEkms0.js";import"./use-isomorphic-layout-effect-eSKX-Jxz.js";import"./memoize-one-BdPwpGay.js";import"./swiper-BZYHt685.js";const v="_projectReviews_os72s_1",j="_projectReviews__header_os72s_6",w="_projectReviews__reviews_os72s_10",R="_projectReviews__reviews__more_os72s_15",o={projectReviews:v,projectReviews__header:j,projectReviews__reviews:w,projectReviews__reviews__more:R},l=[{value:"Сортировка: По самым полезным",label:"Сортировка: По самым полезным"},{value:"Сортировка: По самым популярным",label:"Сортировка: По самым популярным"},{value:"Сортировка: По самым смешным",label:"Сортировка: По самым смешным"}],_e=s.memo(({ReviewsPanelProps:t,reviewsItems:i})=>e.jsxs("div",{className:o.projectReviews,children:[e.jsxs("div",{className:o.projectReviews__header,children:[e.jsx("h2",{className:"ProjectPage__caption",children:"Отзывы проекта"}),e.jsx(_,{reviews_selectOptions:l})]}),e.jsx(m,{...t}),e.jsx("div",{className:o.projectReviews__reviews,children:i.map(r=>e.jsx(c,{...r},r.author+r.date+r.text))}),e.jsx(a,{className:o.projectReviews__reviews__more,type:p.RED})]}));export{_e as ProjectReviews};