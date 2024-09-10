import{r,j as e}from"./react-SWQbpNdl.js";import{I as m,C as P,a as F,B as j,U as p,H as z,F as B}from"./index-BhImkbIt.js";import{S as $,s as k}from"./Select-Mj55-qEJ.js";import{S as E,P as L,a as C}from"./swiper-DGEBRwVo.js";import"./@babel-BUiOBcM-.js";import"./react-dom-DxN2oLL9.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-DjGoV6A_.js";import"./react-router-D0TulCCO.js";import"./@remix-run-BFLWy9pZ.js";import"./flowbite-react-BQ69OgIf.js";import"./react-icons-B6XOnTk_.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-iR1RLlz2.js";import"./debounce-0BFaHC-l.js";import"./@floating-ui-Yq7M0TBs.js";import"./tabbable-DNPBiPWX.js";import"./@mui-BcRc7fw5.js";import"./clsx-B-dksMZM.js";import"./@emotion-CMQ2GY60.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./react-transition-group-MCX_ZxWf.js";import"./@szhsin-DO4_NVdT.js";import"./react-transition-state-DTZZMOIP.js";import"./react-loadingg-mexSmHAC.js";import"./styled-components-B8tnORu1.js";import"./stylis-CMHfHRFC.js";import"./stylis-rule-sheet-D4hHYmwC.js";import"./merge-anything-D_kaZiAl.js";import"./is-what-BcD0NeHv.js";import"./react-redux-DTcQUcTr.js";import"./use-sync-external-store-CU8T5Q8Q.js";import"./@reduxjs-BMC_f8BA.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";import"./react-select-Dw5wxA7o.js";import"./use-isomorphic-layout-effect-Cdzwp0gt.js";import"./memoize-one-BdPwpGay.js";const R="_createCardForm_zefbm_1",T="_createCardForm__subcaption_zefbm_9",W="_createCardForm__wrapper_zefbm_17",D="_createCardForm__wrapper__canBeClosed_zefbm_25",O="_createCardForm__wrapper__closed_zefbm_36",H="_createCardForm__item_zefbm_40",V="_createCardForm__item__canBeClosed_zefbm_45",M="_createCardForm__item__closed_zefbm_50",U="_createCardForm__select_zefbm_53",q="_createCardForm__span_zefbm_61",G="_createCardForm__patronymic_zefbm_70",Z="_createCardForm__patronymic__text_zefbm_76",J="_createCardForm__tips_zefbm_84",K="_createCardForm__tip_zefbm_84",Q="_createCardForm__tip__desc_zefbm_97",X="_createCardForm__bottomText_zefbm_106",Y="_createCardForm__continue_zefbm_116",a={createCardForm:R,createCardForm__subcaption:T,createCardForm__wrapper:W,createCardForm__wrapper__canBeClosed:D,createCardForm__wrapper__closed:O,createCardForm__item:H,createCardForm__item__canBeClosed:V,createCardForm__item__closed:M,createCardForm__select:U,createCardForm__span:q,createCardForm__patronymic:G,createCardForm__patronymic__text:Z,createCardForm__tips:J,createCardForm__tip:K,createCardForm__tip__desc:Q,createCardForm__bottomText:X,createCardForm__continue:Y},ee=t=>r.createElement("svg",{width:17,height:8,viewBox:"0 0 17 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.320621 0.270361C0.748116 -0.0901204 1.44124 -0.0901204 1.86874 0.270361L8.39256 5.77147L14.9164 0.270361C15.3439 -0.0901204 16.0369 -0.0901204 16.4644 0.270361C16.892 0.630843 16.892 1.21526 16.4644 1.57576L9.16657 7.72963C8.73906 8.09012 8.04605 8.09012 7.61854 7.72963L0.320621 1.57576C-0.106874 1.21526 -0.106874 0.630843 0.320621 0.270361Z",fill:"#001A72"})),h=[{value:"ИП",label:"ИП"},{value:"Физ.лицо",label:"Физ.лицо"},{value:"Юр.лицо",label:"Юр.лицо"}],ae="Юр.лицо",re=t=>t==ae,te=()=>e.jsx(ee,{className:k.Select__svg}),se={fontFamily:"var(--font-family)",fontWeight:500,fontSize:"20px",letterSpacing:"-0.01em",lineHeight:"150%",color:"var(--black-color)",opacity:.4},_e=r.memo(({setActiveSlide:t})=>{const[d,o]=r.useState(""),[i,l]=r.useState(""),[c,y]=r.useState(""),[w,g]=r.useState(""),[b,v]=r.useState(""),[I,f]=r.useState(""),[u,A]=r.useState(!1),[n,S]=r.useState(h[0]),N=r.useMemo(()=>re(n.value),[n.value]);return r.useEffect(()=>{t&&t(h.findIndex(s=>s.value==n.value))},[n,t]),e.jsxs("div",{className:a.createCardForm,children:[e.jsx("h2",{className:a.createCardForm__subcaption,children:"Заполните для пополнения баланса"}),e.jsxs("div",{className:a.createCardForm__wrapper,children:[e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Тип"}),e.jsx($,{className:a.createCardForm__select,selectedOptions:h,TextStyles:se,CustomDropdownIndicator:te,setState:S})]}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"ИНН"}),e.jsx(m,{value:d,onChange:s=>o(s.target.value),type:"text",placeholder:"43348348384"}),e.jsx("span",{className:a.createCardForm__span,children:"Узнать ИНН физического лица можно на сайте ФНС России"})]}),e.jsxs("div",{className:`${a.createCardForm__item} ${a.createCardForm__item__canBeClosed} ${N?a.createCardForm__item__closed:""}`,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Ваши ФИО"}),e.jsx(m,{value:i,onChange:s=>l(s.target.value),type:"text",placeholder:"Иван Иванов Иванович"}),e.jsxs("div",{className:a.createCardForm__patronymic,children:[e.jsx(P,{isActive:u,onClick:()=>A(!u)}),e.jsx("span",{className:a.createCardForm__patronymic__text,children:"Нет отчества"})]})]}),e.jsxs("div",{className:`${a.createCardForm__item} ${a.createCardForm__item__canBeClosed} ${N?"":a.createCardForm__item__closed}`,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Наименование организации"}),e.jsx(m,{value:c,onChange:s=>y(s.target.value),type:"text",placeholder:"ООО “TeleWorks”"}),e.jsx("span",{className:a.createCardForm__span,children:"Укажите точное название вашей организации т.к. эти данные будут отражены в платежных документах."})]})]}),e.jsxs("div",{className:`${a.createCardForm__wrapper} ${a.createCardForm__wrapper__canBeClosed} ${N?"":a.createCardForm__wrapper__closed}`,children:[e.jsx("h2",{className:a.createCardForm__subcaption,children:"Данные подписанта"}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Должность подписанта"}),e.jsx(m,{value:w,onChange:s=>g(s.target.value),type:"text",placeholder:"43348348384"})]}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"ФИО подписанта"}),e.jsx(m,{value:b,onChange:s=>v(s.target.value),type:"text",placeholder:"Иван Иванов Иванович"})]}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Подписант действует на основании"}),e.jsx(m,{value:I,onChange:s=>f(s.target.value),type:"text",placeholder:"Иван Иванов Иванович"}),e.jsx("span",{className:a.createCardForm__span,children:"Например, на основании устава, доверенности"})]})]}),e.jsxs("div",{className:a.createCardForm__tips,children:[e.jsxs("div",{className:a.createCardForm__tip,children:[e.jsx("h6",{className:"CreateCardPage__subcaption",children:"Для агентств"}),e.jsxs("p",{className:a.createCardForm__tip__desc,children:["Если вы не являетесь конечным рекламодателем, зарегистрируйте его в разделе"," ",e.jsx("a",{href:"#",className:"Page__RedLink",children:"Агентский доступ."})]})]}),e.jsxs("div",{className:a.createCardForm__tip,children:[e.jsx("h6",{className:"CreateCardPage__subcaption",children:"Проверьте данные"}),e.jsx("p",{className:a.createCardForm__tip__desc,children:"Проверьте правильность заполнения данных и сохраните их. После сохранения изменить данные организации будет нельзя."})]})]}),e.jsxs("p",{className:a.createCardForm__bottomText,children:["Нажимая кнопку Сохранить, вы подтверждаете: достоверность данных, ознакомление и принятие условий"," ",e.jsx("a",{href:"#",className:"Page__RedLink",children:"Оферты"}),", согласие на обработку"," ",e.jsx("a",{href:"#",className:"Page__RedLink",children:"Персональных данных."})]}),e.jsx(F,{className:a.createCardForm__continue,type:j.RED,text:"Сохранить"})]})}),ce="_createCard_13vpb_1",oe="_createCard__caption_13vpb_5",de="_createCard__wrapper_13vpb_12",x={createCard:ce,createCard__caption:oe,createCard__wrapper:de},me="_whyNeedINNAndName_51bdo_1",ne="_whyNeedINNAndName__wrapper_51bdo_13",ie="_whyNeedINNAndName__caption_51bdo_19",le="_whyNeedINNAndName__desc_51bdo_26",Ne="_whyNeedINNAndName__button_51bdo_35",pe="_whyNeedINNAndName__button__removed_51bdo_43",_={whyNeedINNAndName:me,whyNeedINNAndName__wrapper:ne,whyNeedINNAndName__caption:ie,whyNeedINNAndName__desc:le,whyNeedINNAndName__button:Ne,whyNeedINNAndName__button__removed:pe},Ce=r.memo(({ActiveSlide:t,setActiveSlide:d})=>{const o=r.useRef(),[i,l]=r.useState(!0);return r.useEffect(()=>{o.current&&(o.current.slideTo(t),l(t!=2))},[t,o]),e.jsxs("div",{className:`${_.whyNeedINNAndName} whyNeedINNAndName`,children:[e.jsxs(E,{modules:[L],spaceBetween:10,slidesPerView:1,slidesPerGroup:1,pagination:{clickable:!0},onSwiper:c=>o.current=c,onSlideChange:c=>d(c.activeIndex),children:[e.jsx(C,{children:e.jsxs("div",{className:_.whyNeedINNAndName__wrapper,children:[e.jsx("img",{src:`${p}/global/images/WhyNeedINNAndName_img.png`,alt:"Мужчина и женщина показывают на ИНН человека"}),e.jsx("h6",{className:_.whyNeedINNAndName__caption,children:"Зачем нужно ИП?"}),e.jsx("p",{className:_.whyNeedINNAndName__desc,children:"Для чего нужно ИП..."})]})}),e.jsx(C,{children:e.jsxs("div",{className:_.whyNeedINNAndName__wrapper,children:[e.jsx("img",{src:`${p}/global/images/WhyNeedINNAndName_img.png`,alt:"Мужчина и женщина показывают на ИНН человека"}),e.jsx("h6",{className:_.whyNeedINNAndName__caption,children:"Зачем нужны ИНН и ФИО?"}),e.jsx("p",{className:_.whyNeedINNAndName__desc,children:"ИНН, фамилия и инициалы указываются в рекламном посте."}),e.jsx("p",{className:_.whyNeedINNAndName__desc,children:"Это безопасно и соответствует закону о маркировке рекламы."})]})}),e.jsx(C,{children:e.jsxs("div",{className:_.whyNeedINNAndName__wrapper,children:[e.jsx("img",{src:`${p}/global/images/WhyNeedINNAndName_img.png`,alt:"Мужчина и женщина показывают на ИНН человека"}),e.jsx("h6",{className:_.whyNeedINNAndName__caption,children:"Что такое карточка организации?"}),e.jsx("p",{className:_.whyNeedINNAndName__desc,children:"Карточка организации содержит информацию, необходимую для корректной работы автоматической системы маркировки на нашем сервисе. Заполните карточку организации, указав ваши ИНН и ФИО."})]})})]}),e.jsx(F,{className:`${_.whyNeedINNAndName__button} ${i?"":_.whyNeedINNAndName__button__removed}`,text:"Далее",type:j.RED,onClick:()=>{var c;return(c=o.current)==null?void 0:c.slideNext()}})]})}),he=r.memo(()=>{const[t,d]=r.useState(0);return e.jsxs("section",{className:x.createCard,children:[e.jsx("h1",{className:x.createCard__caption,children:"Карточка организации/заказчика"}),e.jsxs("div",{className:x.createCard__wrapper,children:[e.jsx(_e,{setActiveSlide:d}),e.jsx(Ce,{ActiveSlide:t,setActiveSlide:d})]})]})}),sa=r.memo(()=>(r.useEffect(()=>{document.querySelector("html").classList.add("CreateCardPage")},[]),e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx("main",{className:"CreateCardPage__main",children:e.jsx("div",{className:"padding",children:e.jsx(he,{})})}),e.jsx(B,{})]})));export{sa as CreateCardPage};