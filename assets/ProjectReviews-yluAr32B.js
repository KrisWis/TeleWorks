import{r as i,j as e}from"./react-e8hmi6Ay.js";import{B as p}from"./index-BK5bPxwY.js";import{R as m}from"./index-BJsKUaf4.js";import{R as _}from"./ReviewsSelect-BBFvGBrh.js";import{R as c}from"./index-Db7zY4eR.js";import{L as a}from"./LoadMore-BhJUyMVk.js";import"./@babel-BwvLRzjS.js";import"./react-dom-BP8aYWRJ.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-BRJ8av1n.js";import"./react-router-Dg9z9qYu.js";import"./@remix-run-BFLWy9pZ.js";import"./@szhsin-BsnzYjS7.js";import"./react-transition-state-DSR3qyla.js";import"./swiper-CIOkEl8w.js";import"./@mui-EL6yyDxi.js";import"./clsx-B-dksMZM.js";import"./@emotion-CznjHDu8.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./react-transition-group-CWAC7qa0.js";import"./styled-components-BqglOvXN.js";import"./tslib-B7u9K5VY.js";import"./stylis-DinRj2j6.js";import"./react-redux-I0N39rH0.js";import"./use-sync-external-store-BmpGqMD8.js";import"./@reduxjs-BMC_f8BA.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";import"./Select-BFCfulRv.js";import"./react-select-B9gdlCtq.js";import"./@floating-ui-BuoWLkxw.js";import"./use-isomorphic-layout-effect-6xwyorqR.js";import"./memoize-one-BdPwpGay.js";const v="_projectReviews_os72s_1",j="_projectReviews__header_os72s_6",w="_projectReviews__reviews_os72s_10",R="_projectReviews__reviews__more_os72s_15",o={projectReviews:v,projectReviews__header:j,projectReviews__reviews:w,projectReviews__reviews__more:R},l=[{value:"Сортировка: По самым полезным",label:"Сортировка: По самым полезным"},{value:"Сортировка: По самым популярным",label:"Сортировка: По самым популярным"},{value:"Сортировка: По самым смешным",label:"Сортировка: По самым смешным"}],$=i.memo(({ReviewsPanelProps:t,reviewsItems:s})=>e.jsxs("div",{className:o.projectReviews,children:[e.jsxs("div",{className:o.projectReviews__header,children:[e.jsx("h2",{className:"ProjectPage__caption",children:"Отзывы проекта"}),e.jsx(_,{reviews_selectOptions:l})]}),e.jsx(m,{...t}),e.jsx("div",{className:o.projectReviews__reviews,children:s.map(r=>e.jsx(c,{...r},r.author+r.date+r.text))}),e.jsx(a,{className:o.projectReviews__reviews__more,type:p.RED})]}));export{$ as ProjectReviews};