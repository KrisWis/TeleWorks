import{r,j as e}from"./react-BHR5W2Za.js";import{d as P,I as m,C as z,a as F,B as y,f as B,s as $,U as p}from"./index-EPlAJ5we.js";import{S as k,P as T,a as C}from"./swiper-C8w79IAA.js";import"./@babel-CaXJ9_vT.js";import"./react-dom-z3azbnBS.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-BXVjbqUq.js";import"./react-router-rJctJ6Rs.js";import"./@remix-run-BFLWy9pZ.js";import"./styled-components-CHflUM7L.js";import"./tslib-B7u9K5VY.js";import"./@emotion-BtX4ZyE_.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-DinRj2j6.js";import"./primereact-DNUpHe7r.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-BH98TIMi.js";import"./@mui-fwBvmugZ.js";import"./clsx-B-dksMZM.js";import"./react-transition-group-C3o7gHAy.js";import"./react-select-BBhG-O_K.js";import"./@floating-ui-BBw6y31Z.js";import"./use-isomorphic-layout-effect-ByRHbxdK.js";import"./memoize-one-BdPwpGay.js";import"./react-redux-Blsew3Hi.js";import"./use-sync-external-store-HysUTIae.js";import"./@reduxjs-CudhKR1I.js";import"./redux-DITMfSWq.js";import"./immer-C45-hHMi.js";import"./reselect-BEFkisvr.js";import"./redux-thunk-ClJT1hhx.js";const E="_createCardForm_zefbm_1",R="_createCardForm__subcaption_zefbm_9",L="_createCardForm__wrapper_zefbm_17",W="_createCardForm__wrapper__canBeClosed_zefbm_25",D="_createCardForm__wrapper__closed_zefbm_36",O="_createCardForm__item_zefbm_40",V="_createCardForm__item__canBeClosed_zefbm_45",U="_createCardForm__item__closed_zefbm_50",q="_createCardForm__select_zefbm_53",G="_createCardForm__span_zefbm_61",H="_createCardForm__patronymic_zefbm_70",M="_createCardForm__patronymic__text_zefbm_76",J="_createCardForm__tips_zefbm_84",K="_createCardForm__tip_zefbm_84",Q="_createCardForm__tip__desc_zefbm_97",X="_createCardForm__bottomText_zefbm_106",Y="_createCardForm__continue_zefbm_116",a={createCardForm:E,createCardForm__subcaption:R,createCardForm__wrapper:L,createCardForm__wrapper__canBeClosed:W,createCardForm__wrapper__closed:D,createCardForm__item:O,createCardForm__item__canBeClosed:V,createCardForm__item__closed:U,createCardForm__select:q,createCardForm__span:G,createCardForm__patronymic:H,createCardForm__patronymic__text:M,createCardForm__tips:J,createCardForm__tip:K,createCardForm__tip__desc:Q,createCardForm__bottomText:X,createCardForm__continue:Y},h=[{value:"ИП",label:"ИП"},{value:"Физ.лицо",label:"Физ.лицо"},{value:"Юр.лицо",label:"Юр.лицо"}],Z="Юр.лицо",ee=_=>_==Z,ae=()=>e.jsx(B,{className:$.Select__svg}),re={fontFamily:"var(--font-family)",fontWeight:500,fontSize:"20px",letterSpacing:"-0.01em",lineHeight:"150%",color:"var(--black-color)",opacity:.4},te=r.memo(({setActiveSlide:_})=>{const[d,o]=r.useState(""),[i,l]=r.useState(""),[c,j]=r.useState(""),[w,g]=r.useState(""),[b,I]=r.useState(""),[v,f]=r.useState(""),[u,A]=r.useState(!1),[n,S]=r.useState(h[0]),N=r.useMemo(()=>ee(n.value),[n.value]);return r.useEffect(()=>{_&&_(h.findIndex(t=>t.value==n.value))},[n,_]),e.jsxs("div",{className:a.createCardForm,children:[e.jsx("h2",{className:a.createCardForm__subcaption,children:"Заполните для пополнения баланса"}),e.jsxs("div",{className:a.createCardForm__wrapper,children:[e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Тип"}),e.jsx(P,{className:a.createCardForm__select,selectedOptions:h,TextStyles:re,CustomDropdownIndicator:ae,setState:S})]}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"ИНН"}),e.jsx(m,{value:d,onChange:t=>o(t.target.value),type:"text",placeholder:"43348348384"}),e.jsx("span",{className:a.createCardForm__span,children:"Узнать ИНН физического лица можно на сайте ФНС России"})]}),e.jsxs("div",{className:`${a.createCardForm__item} ${a.createCardForm__item__canBeClosed} ${N?a.createCardForm__item__closed:""}`,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Ваши ФИО"}),e.jsx(m,{value:i,onChange:t=>l(t.target.value),type:"text",placeholder:"Иван Иванов Иванович"}),e.jsxs("div",{className:a.createCardForm__patronymic,children:[e.jsx(z,{isActive:u,onClick:()=>A(!u)}),e.jsx("span",{className:a.createCardForm__patronymic__text,children:"Нет отчества"})]})]}),e.jsxs("div",{className:`${a.createCardForm__item} ${a.createCardForm__item__canBeClosed} ${N?"":a.createCardForm__item__closed}`,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Наименование организации"}),e.jsx(m,{value:c,onChange:t=>j(t.target.value),type:"text",placeholder:"ООО “TeleWorks”"}),e.jsx("span",{className:a.createCardForm__span,children:"Укажите точное название вашей организации т.к. эти данные будут отражены в платежных документах."})]})]}),e.jsxs("div",{className:`${a.createCardForm__wrapper} ${a.createCardForm__wrapper__canBeClosed} ${N?"":a.createCardForm__wrapper__closed}`,children:[e.jsx("h2",{className:a.createCardForm__subcaption,children:"Данные подписанта"}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Должность подписанта"}),e.jsx(m,{value:w,onChange:t=>g(t.target.value),type:"text",placeholder:"43348348384"})]}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"ФИО подписанта"}),e.jsx(m,{value:b,onChange:t=>I(t.target.value),type:"text",placeholder:"Иван Иванов Иванович"})]}),e.jsxs("div",{className:a.createCardForm__item,children:[e.jsx("h5",{className:"CreateCardPage__subcaption",children:"Подписант действует на основании"}),e.jsx(m,{value:v,onChange:t=>f(t.target.value),type:"text",placeholder:"Иван Иванов Иванович"}),e.jsx("span",{className:a.createCardForm__span,children:"Например, на основании устава, доверенности"})]})]}),e.jsxs("div",{className:a.createCardForm__tips,children:[e.jsxs("div",{className:a.createCardForm__tip,children:[e.jsx("h6",{className:"CreateCardPage__subcaption",children:"Для агентств"}),e.jsxs("p",{className:a.createCardForm__tip__desc,children:["Если вы не являетесь конечным рекламодателем, зарегистрируйте его в разделе"," ",e.jsx("a",{href:"#",className:"Page__RedLink",children:"Агентский доступ."})]})]}),e.jsxs("div",{className:a.createCardForm__tip,children:[e.jsx("h6",{className:"CreateCardPage__subcaption",children:"Проверьте данные"}),e.jsx("p",{className:a.createCardForm__tip__desc,children:"Проверьте правильность заполнения данных и сохраните их. После сохранения изменить данные организации будет нельзя."})]})]}),e.jsxs("p",{className:a.createCardForm__bottomText,children:["Нажимая кнопку Сохранить, вы подтверждаете: достоверность данных, ознакомление и принятие условий"," ",e.jsx("a",{href:"#",className:"Page__RedLink",children:"Оферты"}),", согласие на обработку"," ",e.jsx("a",{href:"#",className:"Page__RedLink",children:"Персональных данных."})]}),e.jsx(F,{className:a.createCardForm__continue,type:y.RED,text:"Сохранить"})]})}),se="_createCard_13vpb_1",_e="_createCard__caption_13vpb_5",ce="_createCard__wrapper_13vpb_12",x={createCard:se,createCard__caption:_e,createCard__wrapper:ce},oe="_whyNeedINNAndName_51bdo_1",de="_whyNeedINNAndName__wrapper_51bdo_13",me="_whyNeedINNAndName__caption_51bdo_19",ne="_whyNeedINNAndName__desc_51bdo_26",ie="_whyNeedINNAndName__button_51bdo_35",le="_whyNeedINNAndName__button__removed_51bdo_43",s={whyNeedINNAndName:oe,whyNeedINNAndName__wrapper:de,whyNeedINNAndName__caption:me,whyNeedINNAndName__desc:ne,whyNeedINNAndName__button:ie,whyNeedINNAndName__button__removed:le},Ne=r.memo(({ActiveSlide:_,setActiveSlide:d})=>{const o=r.useRef(),[i,l]=r.useState(!0);return r.useEffect(()=>{o.current&&(o.current.slideTo(_),l(_!=2))},[_,o]),e.jsxs("div",{className:`${s.whyNeedINNAndName} whyNeedINNAndName`,children:[e.jsxs(k,{modules:[T],spaceBetween:10,slidesPerView:1,slidesPerGroup:1,pagination:{clickable:!0},onSwiper:c=>o.current=c,onSlideChange:c=>d?d(c.activeIndex):o.current.slideTo(c.activeIndex),children:[e.jsx(C,{children:e.jsxs("div",{className:s.whyNeedINNAndName__wrapper,children:[e.jsx("img",{src:`${p}/global/images/WhyNeedINNAndName_img.png`,alt:"Мужчина и женщина показывают на ИНН человека"}),e.jsx("h6",{className:s.whyNeedINNAndName__caption,children:"Зачем нужно ИП?"}),e.jsx("p",{className:s.whyNeedINNAndName__desc,children:"Для чего нужно ИП..."})]})}),e.jsx(C,{children:e.jsxs("div",{className:s.whyNeedINNAndName__wrapper,children:[e.jsx("img",{src:`${p}/global/images/WhyNeedINNAndName_img.png`,alt:"Мужчина и женщина показывают на ИНН человека"}),e.jsx("h6",{className:s.whyNeedINNAndName__caption,children:"Зачем нужны ИНН и ФИО?"}),e.jsx("p",{className:s.whyNeedINNAndName__desc,children:"ИНН, фамилия и инициалы указываются в рекламном посте."}),e.jsx("p",{className:s.whyNeedINNAndName__desc,children:"Это безопасно и соответствует закону о маркировке рекламы."})]})}),e.jsx(C,{children:e.jsxs("div",{className:s.whyNeedINNAndName__wrapper,children:[e.jsx("img",{src:`${p}/global/images/WhyNeedINNAndName_img.png`,alt:"Мужчина и женщина показывают на ИНН человека"}),e.jsx("h6",{className:s.whyNeedINNAndName__caption,children:"Что такое карточка организации?"}),e.jsx("p",{className:s.whyNeedINNAndName__desc,children:"Карточка организации содержит информацию, необходимую для корректной работы автоматической системы маркировки на нашем сервисе. Заполните карточку организации, указав ваши ИНН и ФИО."})]})})]}),e.jsx(F,{className:`${s.whyNeedINNAndName__button} ${i?"":s.whyNeedINNAndName__button__removed}`,text:"Далее",type:y.RED,onClick:()=>{var c;return(c=o.current)==null?void 0:c.slideNext()}})]})}),pe=r.memo(()=>{const[_,d]=r.useState(0);return e.jsxs("section",{className:x.createCard,children:[e.jsx("h1",{className:x.createCard__caption,children:"Карточка организации/заказчика"}),e.jsxs("div",{className:x.createCard__wrapper,children:[e.jsx(te,{setActiveSlide:d}),e.jsx(Ne,{ActiveSlide:_,setActiveSlide:d})]})]})}),Je=r.memo(()=>(r.useEffect(()=>{document.querySelector("html").classList.add("CreateCardPage")},[]),e.jsx("main",{className:"Page CreateCardPage__main",children:e.jsx("div",{className:"padding",children:e.jsx(pe,{})})})));export{Je as CreateCardPage};
