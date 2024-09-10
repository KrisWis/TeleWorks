import{r,j as e}from"./react-B8VV3c8w.js";import{I as m,C as P,a as F,B as y,U as p}from"./index-ChAW6TAE.js";import{S as z,s as B}from"./Select-BOzaru_-.js";import{S as $,P as k,a as C}from"./swiper-6ubH3xKJ.js";import"./@babel-DnEJNfVd.js";import"./react-dom-DqtKgdWs.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-B4V7KZ_U.js";import"./react-router-BTaDXhKw.js";import"./@remix-run-BFLWy9pZ.js";import"./@szhsin-Cxi3-bxM.js";import"./react-transition-state-DvLqjemu.js";import"./flowbite-react-Cj-TVo3H.js";import"./react-icons-ehiPaXJw.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-CJMI-Y6p.js";import"./debounce-C4Qqi4Eb.js";import"./@floating-ui-BONjOGZd.js";import"./tabbable-DNPBiPWX.js";import"./@mui-B3aFuQl8.js";import"./clsx-B-dksMZM.js";import"./@emotion-BTFr3qr4.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./react-transition-group-Dr_uWHPt.js";import"./styled-components-B40iDQAz.js";import"./tslib-B7u9K5VY.js";import"./stylis-DinRj2j6.js";import"./react-redux-BQCHRrYi.js";import"./use-sync-external-store-B_hCL4a_.js";import"./@reduxjs-BMC_f8BA.js";import"./redux-DITMfSWq.js";import"./immer-BPoY8EgY.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";import"./react-select-C6CRNscn.js";import"./use-isomorphic-layout-effect-8e3JpDxX.js";import"./memoize-one-BdPwpGay.js";const E="_createCardForm_zefbm_1",L="_createCardForm__subcaption_zefbm_9",R="_createCardForm__wrapper_zefbm_17",T="_createCardForm__wrapper__canBeClosed_zefbm_25",W="_createCardForm__wrapper__closed_zefbm_36",D="_createCardForm__item_zefbm_40",O="_createCardForm__item__canBeClosed_zefbm_45",V="_createCardForm__item__closed_zefbm_50",M="_createCardForm__select_zefbm_53",U="_createCardForm__span_zefbm_61",q="_createCardForm__patronymic_zefbm_70",G="_createCardForm__patronymic__text_zefbm_76",H="_createCardForm__tips_zefbm_84",Z="_createCardForm__tip_zefbm_84",J="_createCardForm__tip__desc_zefbm_97",K="_createCardForm__bottomText_zefbm_106",Q="_createCardForm__continue_zefbm_116",a={createCardForm:E,createCardForm__subcaption:L,createCardForm__wrapper:R,createCardForm__wrapper__canBeClosed:T,createCardForm__wrapper__closed:W,createCardForm__item:D,createCardForm__item__canBeClosed:O,createCardForm__item__closed:V,createCardForm__select:M,createCardForm__span:U,createCardForm__patronymic:q,createCardForm__patronymic__text:G,createCardForm__tips:H,createCardForm__tip:Z,createCardForm__tip__desc:J,createCardForm__bottomText:K,createCardForm__continue:Q},X=t=>r.createElement("svg",{width:17,height:8,viewBox:"0 0 17 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.320621 0.270361C0.748116 -0.0901204 1.44124 -0.0901204 1.86874 0.270361L8.39256 5.77147L14.9164 0.270361C15.3439 -0.0901204 16.0369 -0.0901204 16.4644 0.270361C16.892 0.630843 16.892 1.21526 16.4644 1.57576L9.16657 7.72963C8.73906 8.09012 8.04605 8.09012 7.61854 7.72963L0.320621 1.57576C-0.106874 1.21526 -0.106874 0.630843 0.320621 0.270361Z",fill:"#001A72"})),h=[{value:"ИП",label:"ИП"},{value:"Физ.лицо",label:"Физ.лицо"},{value:"Юр.лицо",label:"Юр.лицо"}],Y="Юр.лицо",ee=t=>t==Y,ae=()=>e.jsx(X,{className:B.Select__svg}),re={fontFamily:"var(--font-family)",fontWeight:500,fontSize:"20px",letterSpacing:"-0.01em",lineHeight:"150%",color:"var(--black-color)",opacity:.4},te=r.memo(({setActiveSlide:t})=>{const[d,o]=r.useState(""),[i,l]=r.useState(""),[c,j]=r.useState(""),[w,g]=r.useState(""),[b,v]=r.useState(""),[I,f]=r.useState(""),[u,A]=r.useState(!1),[n,S]=r.useState(h[0]),N=r.useMemo(()=>ee(n.value),[n.value]);return r.useEffect(()=>{t&&t(h.findIndex(s=>s.value==n.value))},[n,t]),e.jsxs("div",{className:a.createCardForm,children:[e.jsx("h2",{className:a.createCardForm__subcaption,children:"Заполните для пополнения баланса"}),e.jsxs("div",{className:a.createCardForm__wrapper,children:[e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Тип"}),e.jsx(z,{className:a.createCardForm__select,selectedOptions:h,TextStyles:re,CustomDropdownIndicator:ae,setState:S})]}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"ИНН"}),e.jsx(m,{value:d,onChange:s=>o(s.target.value),type:"text",placeholder:"43348348384"}),e.jsx("span",{className:a.createCardForm__span,children:"Узнать ИНН физического лица можно на сайте ФНС России"})]}),e.jsxs("div",{className:`${a.createCardForm__item} ${a.createCardForm__item__canBeClosed} ${N?a.createCardForm__item__closed:""}`,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Ваши ФИО"}),e.jsx(m,{value:i,onChange:s=>l(s.target.value),type:"text",placeholder:"Иван Иванов Иванович"}),e.jsxs("div",{className:a.createCardForm__patronymic,children:[e.jsx(P,{isActive:u,onClick:()=>A(!u)}),e.jsx("span",{className:a.createCardForm__patronymic__text,children:"Нет отчества"})]})]}),e.jsxs("div",{className:`${a.createCardForm__item} ${a.createCardForm__item__canBeClosed} ${N?"":a.createCardForm__item__closed}`,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Наименование организации"}),e.jsx(m,{value:c,onChange:s=>j(s.target.value),type:"text",placeholder:"ООО “TeleWorks”"}),e.jsx("span",{className:a.createCardForm__span,children:"Укажите точное название вашей организации т.к. эти данные будут отражены в платежных документах."})]})]}),e.jsxs("div",{className:`${a.createCardForm__wrapper} ${a.createCardForm__wrapper__canBeClosed} ${N?"":a.createCardForm__wrapper__closed}`,children:[e.jsx("h2",{className:a.createCardForm__subcaption,children:"Данные подписанта"}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Должность подписанта"}),e.jsx(m,{value:w,onChange:s=>g(s.target.value),type:"text",placeholder:"43348348384"})]}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"ФИО подписанта"}),e.jsx(m,{value:b,onChange:s=>v(s.target.value),type:"text",placeholder:"Иван Иванов Иванович"})]}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Подписант действует на основании"}),e.jsx(m,{value:I,onChange:s=>f(s.target.value),type:"text",placeholder:"Иван Иванов Иванович"}),e.jsx("span",{className:a.createCardForm__span,children:"Например, на основании устава, доверенности"})]})]}),e.jsxs("div",{className:a.createCardForm__tips,children:[e.jsxs("div",{className:a.createCardForm__tip,children:[e.jsx("h6",{className:"CreateCardPage__subcaption",children:"Для агентств"}),e.jsxs("p",{className:a.createCardForm__tip__desc,children:["Если вы не являетесь конечным рекламодателем, зарегистрируйте его в разделе"," ",e.jsx("a",{href:"#",className:"Page__RedLink",children:"Агентский доступ."})]})]}),e.jsxs("div",{className:a.createCardForm__tip,children:[e.jsx("h6",{className:"CreateCardPage__subcaption",children:"Проверьте данные"}),e.jsx("p",{className:a.createCardForm__tip__desc,children:"Проверьте правильность заполнения данных и сохраните их. После сохранения изменить данные организации будет нельзя."})]})]}),e.jsxs("p",{className:a.createCardForm__bottomText,children:["Нажимая кнопку Сохранить, вы подтверждаете: достоверность данных, ознакомление и принятие условий"," ",e.jsx("a",{href:"#",className:"Page__RedLink",children:"Оферты"}),", согласие на обработку"," ",e.jsx("a",{href:"#",className:"Page__RedLink",children:"Персональных данных."})]}),e.jsx(F,{className:a.createCardForm__continue,type:y.RED,text:"Сохранить"})]})}),se="_createCard_13vpb_1",_e="_createCard__caption_13vpb_5",ce="_createCard__wrapper_13vpb_12",x={createCard:se,createCard__caption:_e,createCard__wrapper:ce},oe="_whyNeedINNAndName_51bdo_1",de="_whyNeedINNAndName__wrapper_51bdo_13",me="_whyNeedINNAndName__caption_51bdo_19",ne="_whyNeedINNAndName__desc_51bdo_26",ie="_whyNeedINNAndName__button_51bdo_35",le="_whyNeedINNAndName__button__removed_51bdo_43",_={whyNeedINNAndName:oe,whyNeedINNAndName__wrapper:de,whyNeedINNAndName__caption:me,whyNeedINNAndName__desc:ne,whyNeedINNAndName__button:ie,whyNeedINNAndName__button__removed:le},Ne=r.memo(({ActiveSlide:t,setActiveSlide:d})=>{const o=r.useRef(),[i,l]=r.useState(!0);return r.useEffect(()=>{o.current&&(o.current.slideTo(t),l(t!=2))},[t,o]),e.jsxs("div",{className:`${_.whyNeedINNAndName} whyNeedINNAndName`,children:[e.jsxs($,{modules:[k],spaceBetween:10,slidesPerView:1,slidesPerGroup:1,pagination:{clickable:!0},onSwiper:c=>o.current=c,onSlideChange:c=>d(c.activeIndex),children:[e.jsx(C,{children:e.jsxs("div",{className:_.whyNeedINNAndName__wrapper,children:[e.jsx("img",{src:`${p}/global/images/WhyNeedINNAndName_img.png`,alt:"Мужчина и женщина показывают на ИНН человека"}),e.jsx("h6",{className:_.whyNeedINNAndName__caption,children:"Зачем нужно ИП?"}),e.jsx("p",{className:_.whyNeedINNAndName__desc,children:"Для чего нужно ИП..."})]})}),e.jsx(C,{children:e.jsxs("div",{className:_.whyNeedINNAndName__wrapper,children:[e.jsx("img",{src:`${p}/global/images/WhyNeedINNAndName_img.png`,alt:"Мужчина и женщина показывают на ИНН человека"}),e.jsx("h6",{className:_.whyNeedINNAndName__caption,children:"Зачем нужны ИНН и ФИО?"}),e.jsx("p",{className:_.whyNeedINNAndName__desc,children:"ИНН, фамилия и инициалы указываются в рекламном посте."}),e.jsx("p",{className:_.whyNeedINNAndName__desc,children:"Это безопасно и соответствует закону о маркировке рекламы."})]})}),e.jsx(C,{children:e.jsxs("div",{className:_.whyNeedINNAndName__wrapper,children:[e.jsx("img",{src:`${p}/global/images/WhyNeedINNAndName_img.png`,alt:"Мужчина и женщина показывают на ИНН человека"}),e.jsx("h6",{className:_.whyNeedINNAndName__caption,children:"Что такое карточка организации?"}),e.jsx("p",{className:_.whyNeedINNAndName__desc,children:"Карточка организации содержит информацию, необходимую для корректной работы автоматической системы маркировки на нашем сервисе. Заполните карточку организации, указав ваши ИНН и ФИО."})]})})]}),e.jsx(F,{className:`${_.whyNeedINNAndName__button} ${i?"":_.whyNeedINNAndName__button__removed}`,text:"Далее",type:y.RED,onClick:()=>{var c;return(c=o.current)==null?void 0:c.slideNext()}})]})}),pe=r.memo(()=>{const[t,d]=r.useState(0);return e.jsxs("section",{className:x.createCard,children:[e.jsx("h1",{className:x.createCard__caption,children:"Карточка организации/заказчика"}),e.jsxs("div",{className:x.createCard__wrapper,children:[e.jsx(te,{setActiveSlide:d}),e.jsx(Ne,{ActiveSlide:t,setActiveSlide:d})]})]})}),Ye=r.memo(()=>(r.useEffect(()=>{document.querySelector("html").classList.add("CreateCardPage")},[]),e.jsx("main",{className:"CreateCardPage__main",children:e.jsx("div",{className:"padding",children:e.jsx(pe,{})})})));export{Ye as CreateCardPage};