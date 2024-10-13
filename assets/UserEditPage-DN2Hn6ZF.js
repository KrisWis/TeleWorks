import{r as t,j as e}from"./react-GnO0LmOb.js";import{O as T,Q as O,h as C,aa as L,ab as f,I as v,z,E as H,G as $,U as Z,ac as K,B as w,a as W}from"./app-routes-j_2Ld_Xx.js";import{b as N,a as j,c as Q}from"./LoadImageBlockWithoutLoading_types-DTsGLbw0.js";import{S as J}from"./SelectDropdownIndicatorDarkBlueSVG-jL1Vdpq7.js";import{U}from"./UseDebounce-B4wZPC3r.js";import{T as X,M as Y,S as ee}from"./TagsInput-Z4PwQyZS.js";import"./@babel-BoqLWp7i.js";import"./react-dom-D4eIH3yJ.js";import"./react-share-social-DgRi0E-b.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./@emotion-C_ibbh6v.js";import"./hoist-non-react-statics-DWNbBR1I.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-CzWA12An.js";import"./@popperjs-BQBsAJpH.js";import"./@mui-DtOm6wgI.js";import"./jss-plugin-rule-value-function-P3FhxEwN.js";import"./jss-DAkgY5qt.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-SbrwI9VQ.js";import"./jss-plugin-nested-mmogzEqH.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-zsTukSBu.js";import"./jss-plugin-vendor-prefixer-Dq8p7DI_.js";import"./css-vendor-v3ZYP5j7.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-share-CbqYIZxE.js";import"./classnames-DTKT5ssy.js";import"./jsonp-Daw0h_Hj.js";import"./react-router-dom-QUkaKMPq.js";import"./react-router-B2pE81Sw.js";import"./@remix-run-I3CLtn5C.js";import"./@reduxjs-BCqweWi6.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./react-redux-DfXJ0qGx.js";import"./use-sync-external-store-9xXU9FlP.js";import"./styled-components-CkumfAB6.js";import"./primereact-CaVLV2bU.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-C2kzdvfa.js";import"./react-select-DExkn266.js";import"./@floating-ui-RYOEkms0.js";import"./use-isomorphic-layout-effect-SVXGVfvv.js";import"./memoize-one-BdPwpGay.js";import"./swiper-CZB9Z16M.js";import"./react-quill-new-CZBXvqAG.js";import"./lodash-Cb79gt0C.js";import"./quill-Ilw8WjZi.js";import"./parchment-Crftfyop.js";import"./quill-delta-DYYBA7Iw.js";import"./fast-diff-Az_-rVRq.js";import"./lodash.clonedeep-8iJh8NJu.js";import"./lodash.isequal-DAdcYQBn.js";import"./eventemitter3-DNDOqmeN.js";import"./lodash-es-BKPNmaDy.js";import"./index-CSKaw_0S.js";const G=a=>{const[s,_]=t.useState("");return[s,_]},S=()=>{const[a,s]=t.useState([]);return[a,s]},te="_userEdit_1e68k_1",ae={userEdit:te},se="_userEditGeneral_143wq_1",re="_userEditGeneral__headerImage_143wq_8",oe="_userEditGeneral__avatar_143wq_11",ne="_userEditGeneral__info_143wq_14",ie="_userEditGeneral__inputs_143wq_20",_e="_userEditGeneral__inputs__header_143wq_27",le="_userEditGeneral__inputWrapper_143wq_34",ce="_userEditGeneral__inputWrapper__title_143wq_40",de="_userEditGeneral__inputWrapper__input_143wq_46",ue="_userEditGeneral__select_143wq_60",n={userEditGeneral:se,userEditGeneral__headerImage:re,userEditGeneral__avatar:oe,userEditGeneral__info:ne,userEditGeneral__inputs:ie,userEditGeneral__inputs__header:_e,userEditGeneral__inputWrapper:le,userEditGeneral__inputWrapper__title:ce,userEditGeneral__inputWrapper__input:de,userEditGeneral__select:ue},y=[{value:"Дизайнер",label:"Дизайнер"},{value:"Программист",label:"Программист"},{value:"Экономист",label:"Экономист"}],R=(a,s)=>T(a,O.USER_EDIT_GENERAL,s),pe=()=>e.jsx(J,{className:$.Select__svg}),me={fontFamily:"var(--second-family)",fontWeight:400,fontSize:"14px",letterSpacing:"-0.01em",lineHeight:"150%",color:"#b2b2b2"},ge=t.memo(()=>{const a=U(()=>{R(C.UPDATE,{name:_,surname:d,profession:{value:r==null?void 0:r.value,label:r==null?void 0:r.label},tags:g})},1e3),s=R(C.GET),[_,c]=t.useState(s?s.name:""),[r,i]=t.useState(s?s.profession:y[0]),h=I=>{i(I)},m=I=>{c(I.target.value)},[d,p]=t.useState(s?s.surname:""),l=I=>{p(I.target.value)},[g,o]=t.useState(s?s.tags:[]),[E,P]=G(),[k,q]=S(),[D,M]=G(),[B,V]=S(),{refs:F}=t.useContext(L);return t.useEffect(()=>{a()},[a,_,d,r,g]),e.jsxs("div",{ref:F[f.GENERAL],className:n.userEditGeneral,children:[e.jsx("h4",{className:"UserEditPage__caption",children:"Основная информация:"}),e.jsx(N,{className:n.userEditGeneral__headerImage,size:j.BIG,title:"Загрузить шапку профиля",LoadedImage:E,setLoadedImage:P,LoadedImageErrors:k,setLoadedImageErrors:q}),e.jsxs("div",{className:n.userEditGeneral__info,children:[e.jsx(N,{className:n.userEditGeneral__avatar,size:j.SMALL,title:"Загрузите аватарку",LoadedImage:D,setLoadedImage:M,LoadedImageErrors:B,setLoadedImageErrors:V}),e.jsxs("div",{className:n.userEditGeneral__inputs,children:[e.jsxs("div",{className:n.userEditGeneral__inputs__header,children:[e.jsxs("div",{className:n.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:n.userEditGeneral__inputWrapper__title,children:"Имя"}),e.jsx(v,{value:_,onChange:m,type:"text",placeholder:"Иван",className:n.userEditGeneral__inputWrapper__input})]}),e.jsxs("div",{className:n.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:n.userEditGeneral__inputWrapper__title,children:"Фамилия"}),e.jsx(v,{value:d,onChange:l,type:"text",placeholder:"Иванов",className:n.userEditGeneral__inputWrapper__input})]})]}),e.jsxs("div",{className:n.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:n.userEditGeneral__inputWrapper__title,children:"Профессия"}),e.jsx(z,{className:n.userEditGeneral__select,selectedOptions:y,CustomDropdownIndicator:pe,TextStyles:me,valueContainerPadding:H.SMALL,setState:h,DefaultSelectedOption:r})]}),e.jsxs("div",{className:n.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:n.userEditGeneral__inputWrapper__title,children:"Навыки"}),e.jsx(X,{setSelectedTags:o,SelectedTags:g}),e.jsx("span",{className:"UserEditPage__desc",children:"Начните вводить название программ в которых вы работаете."})]})]})]})]})}),Ee="_userEditAbout_16ml2_1",fe={userEditAbout:Ee},A=(a,s)=>T(a,O.USER_EDIT_ABOUT,s),he=100,xe=500,Pe=t.memo(()=>{const a=A(C.GET),[s,_]=t.useState(a||""),{refs:c}=t.useContext(L),r=U(()=>{A(C.UPDATE,s)},1e3);return t.useEffect(()=>{r()},[s,r]),e.jsxs("div",{ref:c[f.ABOUT],className:fe.userEditAbout,children:[e.jsx("h4",{className:"UserEditPage__caption",children:"Обо мне:"}),e.jsx(Y,{minSymbolsAmount:he,maxSymbolsAmount:xe,TextareaValue:s,setTextareaValue:_,placeholder:"Ваш текст..."})]})}),Ie="_changeablePortfolioCase_khur6_1",be="_changeablePortfolioCase__img_khur6_11",Ce="_changeablePortfolioCase__wrapper_khur6_20",Le="_changeablePortfolioCase__wrapper__header_khur6_27",ve="_changeablePortfolioCase__wrapper__title_khur6_32",Ne="_changeablePortfolioCase__delete_khur6_39",je="_changeablePortfolioCase__caseNameInput_khur6_50",Ge="_changeablePortfolioCase__changeImg_khur6_60",Se="_changeablePortfolioCase__changeImg__title_khur6_69",Ue="_changeablePortfolioCase__changeImg__input_khur6_78",u={changeablePortfolioCase:Ie,changeablePortfolioCase__img:be,changeablePortfolioCase__wrapper:Ce,changeablePortfolioCase__wrapper__header:Le,changeablePortfolioCase__wrapper__title:ve,changeablePortfolioCase__delete:Ne,changeablePortfolioCase__caseNameInput:je,changeablePortfolioCase__changeImg:Ge,changeablePortfolioCase__changeImg__title:Se,changeablePortfolioCase__changeImg__input:Ue},we=a=>t.createElement("svg",{width:17,height:17,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.4084 0.682144C14.4988 -0.22738 13.0242 -0.227383 12.1146 0.682144L1.12369 11.6731C0.798565 11.9982 0.576946 12.4123 0.486775 12.8631L0.0310148 15.142C-0.186271 16.2284 0.771595 17.1863 1.85802 16.969L4.13682 16.5132C4.58768 16.4231 5.00178 16.2014 5.32691 15.8763L16.3178 4.88535C17.2274 3.97583 17.2274 2.5012 16.3178 1.59167L15.4084 0.682144ZM13.2125 1.78004C13.5158 1.47686 14.0072 1.47686 14.3105 1.78004L15.22 2.68957C15.5232 2.99274 15.5232 3.48428 15.22 3.78746L13.1459 5.86149L11.1386 3.85407L13.2125 1.78004ZM10.0406 4.95196L2.22159 12.771C2.11321 12.8794 2.03934 13.0174 2.00928 13.1677L1.55352 15.4464L3.83232 14.9907C3.98261 14.9606 4.12064 14.8868 4.22901 14.7784L12.048 6.95938L10.0406 4.95196Z",fill:"#FF5555"})),We=t.memo(({Case:a,setExistedCases:s,ExistedCases:_})=>{const[c,r]=G(),[i,h]=S();t.useEffect(()=>{a.caseImgURL&&r(a.caseImgURL)},[a.caseImgURL,r]),t.useEffect(()=>{if(a.caseImgURL!=c){const o=_.slice(),E=o.findIndex(P=>P.index==a.index);o[E].caseImgURL=c,s(o)}},[a.caseImgURL,a.index,c,_,s]);const[m,d]=t.useState(a.caseName||""),p=t.useRef(null);t.useEffect(()=>{p.current&&p.current.focus()},[]);const l=U(()=>{if(a.caseName!=m){const o=_.slice(),E=o.findIndex(P=>P.index==a.index);o[E].caseName=m,s(o)}},500),g=t.useCallback(o=>{d(o.target.value),l()},[l]);return e.jsxs("div",{className:u.changeablePortfolioCase,children:[e.jsx(N,{className:u.changeablePortfolioCase__img,requirements:!1,size:j.MEDIUM,LoadedImage:c,setLoadedImage:r,LoadedImageErrors:i,setLoadedImageErrors:h}),e.jsxs("div",{className:u.changeablePortfolioCase__wrapper,children:[e.jsxs("div",{className:u.changeablePortfolioCase__wrapper__header,children:[e.jsx("span",{className:u.changeablePortfolioCase__wrapper__title,children:"Название проекта"}),e.jsx("div",{onClick:()=>s(o=>o.filter(E=>E.index!==a.index)),children:e.jsx(ee,{className:u.changeablePortfolioCase__delete})})]}),e.jsx(v,{type:"text",placeholder:"Кейс 1...",value:m,onChange:g,className:u.changeablePortfolioCase__caseNameInput,refInput:p}),e.jsxs("label",{className:u.changeablePortfolioCase__changeImg,children:[e.jsx(we,{}),e.jsx("input",{className:u.changeablePortfolioCase__changeImg__input,type:"file",accept:"image/png, image/gif, image/jpeg, image/jpg",onChange:o=>Q(o,r,h)}),e.jsxs("span",{className:u.changeablePortfolioCase__changeImg__title,children:[c?"Заменить":"Добавить"," изображение"]})]})]})]})}),ye="_userEditPortfolio_18mg9_1",Re="_userEditPortfolio__header_18mg9_8",Ae="_userEditPortfolio__addCase_18mg9_14",Te="_userEditPortfolio__cases_18mg9_26",Oe="_userEditPortfolio__cases__empty_18mg9_32",ke="_userEditPortfolio__cases__empty__text_18mg9_39",x={userEditPortfolio:ye,userEditPortfolio__header:Re,userEditPortfolio__addCase:Ae,userEditPortfolio__cases:Te,userEditPortfolio__cases__empty:Oe,userEditPortfolio__cases__empty__text:ke},qe=[{index:222,caseImgURL:`${Z}/global/images/portfolioCase__example_img.png`,caseName:"Инфографика"}],De=t.memo(()=>{const[a,s]=t.useState(qe),_=t.useCallback(r=>{s([{index:r},...a])},[a]),{refs:c}=t.useContext(L);return e.jsxs("div",{ref:c[f.PORTFOLIO],className:x.userEditPortfolio,children:[e.jsxs("div",{className:x.userEditPortfolio__header,children:[e.jsx("h4",{className:"UserEditPage__caption",children:"Портфолио"}),e.jsx("span",{onClick:()=>_(a.length),className:x.userEditPortfolio__addCase,children:"+ Добавить кейс"})]}),e.jsx("div",{className:x.userEditPortfolio__cases,children:a.length?a.map(r=>e.jsx(We,{setExistedCases:s,Case:r,ExistedCases:a},r.index)):e.jsx("div",{className:x.userEditPortfolio__cases__empty,children:e.jsx("span",{className:x.userEditPortfolio__cases__empty__text,children:"Проектов ещё нет!"})})})]})}),Me=t.memo(()=>e.jsxs("div",{className:ae.userEdit,children:[e.jsx(ge,{}),e.jsx(Pe,{}),e.jsx(De,{})]})),Be="_userEditPageWrapper_16q5v_1",Ve="_userEditPageWrapper__wrapper_16q5v_6",Fe="_userEditPageWrapper__buttons_16q5v_15",ze="_userEditPageWrapper__button_16q5v_15",b={userEditPageWrapper:Be,userEditPageWrapper__wrapper:Ve,userEditPageWrapper__buttons:Fe,userEditPageWrapper__button:ze},He=t.memo(()=>{const[a,s]=t.useState(f.GENERAL),_=t.useRef(null),c=t.useRef(null),r=t.useRef(null),i=t.useMemo(()=>({[f.GENERAL]:_,[f.ABOUT]:c,[f.PORTFOLIO]:r}),[]),h=t.useRef(null),m=t.useMemo(()=>({root:h.current,rootMargin:"0px",threshold:1}),[]),d=t.useRef(!0),p=t.useMemo(()=>new IntersectionObserver(([l])=>{if(l.isIntersecting){const g=Object.values(i).findIndex(o=>o.current==l.target);s(Object.keys(i)[g]),d.current=!1}},m),[m,i]);return t.useEffect(()=>{var l;d.current?i[a]&&((l=i[a].current)==null||l.scrollIntoView({behavior:"smooth",block:"start"})):d.current=!0},[a,i]),t.useEffect(()=>{for(const l in i)p.observe(i[l].current);return()=>{for(const l in i)p.unobserve(i[l].current)}},[p,i]),t.useEffect(()=>{document.body.scrollIntoView(),setTimeout(()=>{d.current=!0},100)},[]),e.jsx(L.Provider,{value:{ActiveUserEditTab:a,setActiveUserEditTab:s,refs:i},children:e.jsxs("div",{className:b.userEditPageWrapper,children:[e.jsxs("section",{className:b.userEditPageWrapper__wrapper,children:[e.jsx(K,{}),e.jsx(Me,{})]}),e.jsxs("div",{className:b.userEditPageWrapper__buttons,children:[e.jsx(w,{className:b.userEditPageWrapper__button,type:W.BLACK_WITHOUT_OUTLINE,text:"Вернуться в профиль"}),e.jsx(w,{className:b.userEditPageWrapper__button,type:W.RED,text:"Сохранить изменения"})]})]})})}),ta=t.memo(()=>(t.useEffect(()=>{document.querySelector("html").classList.add("UserEditPage"),document.title="TeleWorks | Редактирование профиля"},[]),e.jsx("main",{className:"UserEditPage__main",children:e.jsx("div",{className:"padding",children:e.jsx(He,{})})})));export{ta as UserEditPage};
