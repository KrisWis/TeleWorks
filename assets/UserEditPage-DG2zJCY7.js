import{r as t,j as e}from"./react-CA4AiUJV.js";import{V as L,W as f,I as N,j as $,v as z,s as Z,U as K,X,c as W,d as y}from"./index-D4bIpDeX.js";import{b as j,a as G,T as J,M as Q,S as Y,c as ee}from"./TagsInput-zf3VBuFl.js";import{S as te}from"./SelectDropdownIndicatorDarkBlueSVG-DuQICXUX.js";import{U as O,L as k,a as C}from"./LocalStorageKeys-C2ntjbQE.js";import"./@babel-jg6GbPat.js";import"./react-dom-mZ7R76Rh.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-C4CIq1k1.js";import"./react-router--Uu7wFb4.js";import"./@remix-run-BFLWy9pZ.js";import"./react-share-social-CSearPVt.js";import"./@mui-BW_0i19t.js";import"./@emotion-CqIcrw5X.js";import"./hoist-non-react-statics-C4lTEsBz.js";import"./react-is-8JwjhRSi.js";import"./clsx-B-dksMZM.js";import"./react-transition-group-oWkHeoYW.js";import"./@popperjs-BQBsAJpH.js";import"./jss-plugin-rule-value-function-CAswgHnP.js";import"./jss-CXMHkjJw.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-CDk7pOKb.js";import"./jss-plugin-nested-LssfNFBT.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-BZKBd3fT.js";import"./jss-plugin-vendor-prefixer-CUcSaikn.js";import"./css-vendor-C7Aa5bc-.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-share-BRKbMSKU.js";import"./classnames-DTKT5ssy.js";import"./jsonp-Daw0h_Hj.js";import"./@reduxjs-BnO5hRPg.js";import"./redux-DITMfSWq.js";import"./immer-C45-hHMi.js";import"./reselect-BEFkisvr.js";import"./redux-thunk-ClJT1hhx.js";import"./react-redux-Bi_GanN6.js";import"./use-sync-external-store-CsUaFA4Z.js";import"./styled-components-BSCJP4GN.js";import"./tslib-B7u9K5VY.js";import"./stylis-DinRj2j6.js";import"./primereact-G5W_VwUW.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-BAlDKNlw.js";import"./react-select-BR1w2Auk.js";import"./@floating-ui-ClGdVCbi.js";import"./use-isomorphic-layout-effect-CSuNPc5A.js";import"./memoize-one-BdPwpGay.js";import"./swiper-DHqg-7HD.js";import"./react-quill-new-Dv8AEmum.js";import"./lodash-BTUL-dFh.js";import"./quill-nNlu4ERL.js";import"./parchment-Crftfyop.js";import"./quill-delta-B24wi69x.js";import"./fast-diff-Az_-rVRq.js";import"./lodash.clonedeep-DpV3PQoZ.js";import"./lodash.isequal-B9v94zCv.js";import"./eventemitter3-DrUq7uaq.js";import"./lodash-es-BKPNmaDy.js";const S=a=>{const[s,o]=t.useState("");return[s,o]},U=()=>{const[a,s]=t.useState([]);return[a,s]},ae="_userEdit_1e68k_1",se={userEdit:ae},re="_userEditGeneral_143wq_1",oe="_userEditGeneral__headerImage_143wq_8",ne="_userEditGeneral__avatar_143wq_11",ie="_userEditGeneral__info_143wq_14",_e="_userEditGeneral__inputs_143wq_20",le="_userEditGeneral__inputs__header_143wq_27",ce="_userEditGeneral__inputWrapper_143wq_34",de="_userEditGeneral__inputWrapper__title_143wq_40",ue="_userEditGeneral__inputWrapper__input_143wq_46",pe="_userEditGeneral__select_143wq_60",i={userEditGeneral:re,userEditGeneral__headerImage:oe,userEditGeneral__avatar:ne,userEditGeneral__info:ie,userEditGeneral__inputs:_e,userEditGeneral__inputs__header:le,userEditGeneral__inputWrapper:ce,userEditGeneral__inputWrapper__title:de,userEditGeneral__inputWrapper__input:ue,userEditGeneral__select:pe},R=[{value:"Дизайнер",label:"Дизайнер"},{value:"Программист",label:"Программист"},{value:"Экономист",label:"Экономист"}];let v;function w(a,s){return(...o)=>{v&&clearTimeout(v),v=setTimeout(()=>{a(...o)},s)}}const T=(a,s)=>O(a,k.USER_EDIT_GENERAL,s),me=()=>e.jsx(te,{className:Z.Select__svg}),ge={fontFamily:"var(--second-family)",fontWeight:400,fontSize:"14px",letterSpacing:"-0.01em",lineHeight:"150%",color:"#b2b2b2"},Ee=t.memo(()=>{const a=w(()=>{T(C.UPDATE,{name:o,surname:d,profession:{value:r==null?void 0:r.value,label:r==null?void 0:r.label},tags:g})},1e3),s=T(C.GET),[o,c]=t.useState(s?s.name:""),[r,_]=t.useState(s?s.profession:R[0]),h=I=>{_(I)},m=I=>{c(I.target.value)},[d,p]=t.useState(s?s.surname:""),l=I=>{p(I.target.value)},[g,n]=t.useState(s?s.tags:[]),[E,P]=S(),[q,D]=U(),[M,B]=S(),[V,F]=U(),{refs:H}=t.useContext(L);return t.useEffect(()=>{a()},[a,o,d,r,g]),e.jsxs("div",{ref:H[f.GENERAL],className:i.userEditGeneral,children:[e.jsx("h4",{className:"UserEditPage__caption",children:"Основная информация:"}),e.jsx(j,{className:i.userEditGeneral__headerImage,size:G.BIG,title:"Загрузить шапку профиля",LoadedImage:E,setLoadedImage:P,LoadedImageErrors:q,setLoadedImageErrors:D}),e.jsxs("div",{className:i.userEditGeneral__info,children:[e.jsx(j,{className:i.userEditGeneral__avatar,size:G.SMALL,title:"Загрузите аватарку",LoadedImage:M,setLoadedImage:B,LoadedImageErrors:V,setLoadedImageErrors:F}),e.jsxs("div",{className:i.userEditGeneral__inputs,children:[e.jsxs("div",{className:i.userEditGeneral__inputs__header,children:[e.jsxs("div",{className:i.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:i.userEditGeneral__inputWrapper__title,children:"Имя"}),e.jsx(N,{value:o,onChange:m,type:"text",placeholder:"Иван",className:i.userEditGeneral__inputWrapper__input})]}),e.jsxs("div",{className:i.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:i.userEditGeneral__inputWrapper__title,children:"Фамилия"}),e.jsx(N,{value:d,onChange:l,type:"text",placeholder:"Иванов",className:i.userEditGeneral__inputWrapper__input})]})]}),e.jsxs("div",{className:i.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:i.userEditGeneral__inputWrapper__title,children:"Профессия"}),e.jsx($,{className:i.userEditGeneral__select,selectedOptions:R,CustomDropdownIndicator:me,TextStyles:ge,valueContainerPadding:z.SMALL,setState:h,DefaultSelectedOption:r})]}),e.jsxs("div",{className:i.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:i.userEditGeneral__inputWrapper__title,children:"Навыки"}),e.jsx(J,{setSelectedTags:n,SelectedTags:g}),e.jsx("span",{className:"UserEditPage__desc",children:"Начните вводить название программ в которых вы работаете."})]})]})]})]})}),fe="_userEditAbout_16ml2_1",he={userEditAbout:fe},A=(a,s)=>O(a,k.USER_EDIT_ABOUT,s),xe=100,Pe=500,Ie=t.memo(()=>{const a=A(C.GET),[s,o]=t.useState(a||""),{refs:c}=t.useContext(L),r=w(()=>{A(C.UPDATE,s)},1e3);return t.useEffect(()=>{r()},[s,r]),e.jsxs("div",{ref:c[f.ABOUT],className:he.userEditAbout,children:[e.jsx("h4",{className:"UserEditPage__caption",children:"Обо мне:"}),e.jsx(Q,{minSymbolsAmount:xe,maxSymbolsAmount:Pe,TextareaValue:s,setTextareaValue:o,placeholder:"Ваш текст..."})]})}),be="_changeablePortfolioCase_khur6_1",Ce="_changeablePortfolioCase__img_khur6_11",Le="_changeablePortfolioCase__wrapper_khur6_20",ve="_changeablePortfolioCase__wrapper__header_khur6_27",Ne="_changeablePortfolioCase__wrapper__title_khur6_32",je="_changeablePortfolioCase__delete_khur6_39",Ge="_changeablePortfolioCase__caseNameInput_khur6_50",Se="_changeablePortfolioCase__changeImg_khur6_60",Ue="_changeablePortfolioCase__changeImg__title_khur6_69",we="_changeablePortfolioCase__changeImg__input_khur6_78",u={changeablePortfolioCase:be,changeablePortfolioCase__img:Ce,changeablePortfolioCase__wrapper:Le,changeablePortfolioCase__wrapper__header:ve,changeablePortfolioCase__wrapper__title:Ne,changeablePortfolioCase__delete:je,changeablePortfolioCase__caseNameInput:Ge,changeablePortfolioCase__changeImg:Se,changeablePortfolioCase__changeImg__title:Ue,changeablePortfolioCase__changeImg__input:we},We=a=>t.createElement("svg",{width:17,height:17,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.4084 0.682144C14.4988 -0.22738 13.0242 -0.227383 12.1146 0.682144L1.12369 11.6731C0.798565 11.9982 0.576946 12.4123 0.486775 12.8631L0.0310148 15.142C-0.186271 16.2284 0.771595 17.1863 1.85802 16.969L4.13682 16.5132C4.58768 16.4231 5.00178 16.2014 5.32691 15.8763L16.3178 4.88535C17.2274 3.97583 17.2274 2.5012 16.3178 1.59167L15.4084 0.682144ZM13.2125 1.78004C13.5158 1.47686 14.0072 1.47686 14.3105 1.78004L15.22 2.68957C15.5232 2.99274 15.5232 3.48428 15.22 3.78746L13.1459 5.86149L11.1386 3.85407L13.2125 1.78004ZM10.0406 4.95196L2.22159 12.771C2.11321 12.8794 2.03934 13.0174 2.00928 13.1677L1.55352 15.4464L3.83232 14.9907C3.98261 14.9606 4.12064 14.8868 4.22901 14.7784L12.048 6.95938L10.0406 4.95196Z",fill:"#FF5555"})),ye=t.memo(({Case:a,setExistedCases:s,ExistedCases:o})=>{const[c,r]=S(),[_,h]=U();t.useEffect(()=>{a.caseImgURL&&r(a.caseImgURL)},[a.caseImgURL,r]),t.useEffect(()=>{if(a.caseImgURL!=c){const n=o.slice(),E=n.findIndex(P=>P.index==a.index);n[E].caseImgURL=c,s(n)}},[a.caseImgURL,a.index,c,o,s]);const[m,d]=t.useState(a.caseName||""),p=t.useRef(null);t.useEffect(()=>{p.current&&p.current.focus()},[]);const l=w(()=>{if(a.caseName!=m){const n=o.slice(),E=n.findIndex(P=>P.index==a.index);n[E].caseName=m,s(n)}},500),g=t.useCallback(n=>{d(n.target.value),l()},[l]);return e.jsxs("div",{className:u.changeablePortfolioCase,children:[e.jsx(j,{className:u.changeablePortfolioCase__img,requirements:!1,size:G.MEDIUM,LoadedImage:c,setLoadedImage:r,LoadedImageErrors:_,setLoadedImageErrors:h}),e.jsxs("div",{className:u.changeablePortfolioCase__wrapper,children:[e.jsxs("div",{className:u.changeablePortfolioCase__wrapper__header,children:[e.jsx("span",{className:u.changeablePortfolioCase__wrapper__title,children:"Название проекта"}),e.jsx("div",{onClick:()=>s(n=>n.filter(E=>E.index!==a.index)),children:e.jsx(Y,{className:u.changeablePortfolioCase__delete})})]}),e.jsx(N,{type:"text",placeholder:"Кейс 1...",value:m,onChange:g,className:u.changeablePortfolioCase__caseNameInput,refInput:p}),e.jsxs("label",{className:u.changeablePortfolioCase__changeImg,children:[e.jsx(We,{}),e.jsx("input",{className:u.changeablePortfolioCase__changeImg__input,type:"file",accept:"image/png, image/gif, image/jpeg, image/jpg",onChange:n=>ee(n,r,h)}),e.jsxs("span",{className:u.changeablePortfolioCase__changeImg__title,children:[c?"Заменить":"Добавить"," изображение"]})]})]})]})}),Re="_userEditPortfolio_18mg9_1",Te="_userEditPortfolio__header_18mg9_8",Ae="_userEditPortfolio__addCase_18mg9_14",Oe="_userEditPortfolio__cases_18mg9_26",ke="_userEditPortfolio__cases__empty_18mg9_32",qe="_userEditPortfolio__cases__empty__text_18mg9_39",x={userEditPortfolio:Re,userEditPortfolio__header:Te,userEditPortfolio__addCase:Ae,userEditPortfolio__cases:Oe,userEditPortfolio__cases__empty:ke,userEditPortfolio__cases__empty__text:qe},De=[{index:222,caseImgURL:`${K}/global/images/portfolioCase__example_img.png`,caseName:"Инфографика"}],Me=t.memo(()=>{const[a,s]=t.useState(De),o=t.useCallback(r=>{s([{index:r},...a])},[a]),{refs:c}=t.useContext(L);return e.jsxs("div",{ref:c[f.PORTFOLIO],className:x.userEditPortfolio,children:[e.jsxs("div",{className:x.userEditPortfolio__header,children:[e.jsx("h4",{className:"UserEditPage__caption",children:"Портфолио"}),e.jsx("span",{onClick:()=>o(a.length),className:x.userEditPortfolio__addCase,children:"+ Добавить кейс"})]}),e.jsx("div",{className:x.userEditPortfolio__cases,children:a.length?a.map(r=>e.jsx(ye,{setExistedCases:s,Case:r,ExistedCases:a},r.index)):e.jsx("div",{className:x.userEditPortfolio__cases__empty,children:e.jsx("span",{className:x.userEditPortfolio__cases__empty__text,children:"Проектов ещё нет!"})})})]})}),Be=t.memo(()=>e.jsxs("div",{className:se.userEdit,children:[e.jsx(Ee,{}),e.jsx(Ie,{}),e.jsx(Me,{})]})),Ve="_userEditPageWrapper_16q5v_1",Fe="_userEditPageWrapper__wrapper_16q5v_6",He="_userEditPageWrapper__buttons_16q5v_15",$e="_userEditPageWrapper__button_16q5v_15",b={userEditPageWrapper:Ve,userEditPageWrapper__wrapper:Fe,userEditPageWrapper__buttons:He,userEditPageWrapper__button:$e},ze=t.memo(()=>{const[a,s]=t.useState(f.GENERAL),o=t.useRef(null),c=t.useRef(null),r=t.useRef(null),_=t.useMemo(()=>({[f.GENERAL]:o,[f.ABOUT]:c,[f.PORTFOLIO]:r}),[]),h=t.useRef(null),m=t.useMemo(()=>({root:h.current,rootMargin:"0px",threshold:1}),[]),d=t.useRef(!0),p=t.useMemo(()=>new IntersectionObserver(([l])=>{if(l.isIntersecting){const g=Object.values(_).findIndex(n=>n.current==l.target);s(Object.keys(_)[g]),d.current=!1}},m),[m,_]);return t.useEffect(()=>{var l;d.current?_[a]&&((l=_[a].current)==null||l.scrollIntoView({behavior:"smooth",block:"start"})):d.current=!0},[a,_]),t.useEffect(()=>{for(const l in _)p.observe(_[l].current);return()=>{for(const l in _)p.unobserve(_[l].current)}},[p,_]),t.useEffect(()=>{document.body.scrollIntoView(),setTimeout(()=>{d.current=!0},100)},[]),e.jsx(L.Provider,{value:{ActiveUserEditTab:a,setActiveUserEditTab:s,refs:_},children:e.jsxs("div",{className:b.userEditPageWrapper,children:[e.jsxs("section",{className:b.userEditPageWrapper__wrapper,children:[e.jsx(X,{}),e.jsx(Be,{})]}),e.jsxs("div",{className:b.userEditPageWrapper__buttons,children:[e.jsx(W,{className:b.userEditPageWrapper__button,type:y.BLACK_WITHOUT_OUTLINE,text:"Вернуться в профиль"}),e.jsx(W,{className:b.userEditPageWrapper__button,type:y.RED,text:"Сохранить изменения"})]})]})})}),aa=t.memo(()=>(t.useEffect(()=>{document.querySelector("html").classList.add("UserEditPage")},[]),e.jsx("main",{className:"UserEditPage__main",children:e.jsx("div",{className:"padding",children:e.jsx(ze,{})})})));export{aa as UserEditPage};
