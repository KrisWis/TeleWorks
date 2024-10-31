import{r as t,j as e}from"./react-C3EGSwTV.js";import{U as M,d as te,B as R,h as $,G as V,c as Z,t as _e,L as H,J as ae,I as oe,A as ne,e as ce,D as se,j as L}from"./app-routes-aiLNqtNq.js";import{a as q,U as y}from"./UseLocalStorage-Y7eeG9MN.js";import{I as ie,T as de}from"./IndexedDBLoader-DeNBE2iD.js";import{O as G}from"./OrderSecurityGuarantee-7YdIbRZh.js";import{P as K,a as le,b as me}from"./ProjectEditions-V7V_c1CL.js";import{S as pe}from"./AttachSVG-Dkn80Fxa.js";import{A as fe,a as Ce}from"./AttachFileContainerFile-CU192oGk.js";import{U as he}from"./UseDebounce-B4wZPC3r.js";import"./@babel-13fjUkWY.js";import"./react-dom-DdwdgRbM.js";import"./primereact-CKVv_CF4.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-CU1aPWW1.js";import"./@mui-DMlcxK31.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./@emotion-DvcORr5z.js";import"./hoist-non-react-statics-BzqkPicg.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-CP2SRup2.js";import"./jss-plugin-rule-value-function-NRMjr7SR.js";import"./jss-C2YbWCDG.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-B2s_qxL_.js";import"./jss-plugin-nested-CvQgPwbz.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-CakodQBr.js";import"./jss-plugin-vendor-prefixer-C0RmQ0NR.js";import"./css-vendor-BK3-fMEt.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-router-dom-BGdsm6zk.js";import"./react-router-DjnSpTaD.js";import"./@remix-run-I3CLtn5C.js";import"./react-select-CFGMc7l-.js";import"./@floating-ui-RYOEkms0.js";import"./use-isomorphic-layout-effect-CaxrrJkV.js";import"./memoize-one-BdPwpGay.js";import"./swiper--iI3_9IR.js";import"./styled-components-BI2Cnmee.js";import"./@reduxjs-C6AI0MYz.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./react-redux-DCb0tGWe.js";import"./use-sync-external-store-CggUjcbj.js";const Oe="_createOrderProgress_1y2bo_1",xe="_createOrderProgress__item_1y2bo_11",ue="_createOrderProgress__item__step_1y2bo_16",Pe="_createOrderProgress__item__title_1y2bo_37",Ie="_createOrderProgress__item__first_1y2bo_45",ve="_createOrderProgress__item__second_1y2bo_48",Te="_createOrderProgress__item__third_1y2bo_51",ye="_createOrderProgress__item__completed_1y2bo_54",je="_createOrderProgress__item__closed_1y2bo_61",u={createOrderProgress:Oe,createOrderProgress__item:xe,createOrderProgress__item__step:ue,createOrderProgress__item__title:Pe,createOrderProgress__item__first:Ie,createOrderProgress__item__second:ve,createOrderProgress__item__third:Te,createOrderProgress__item__completed:ye,createOrderProgress__item__closed:je};var T=(r=>(r.FIRST="first",r.SECOND="second",r.THIRD="third",r))(T||{}),s=(r=>(r.CREATE="Заказ создан",r.COST="Стоимость",r.TechnicalInformation="Заказ начат",r))(s||{});const Se=[{step:s.CREATE,title:"Заказ создан",postfix:T.FIRST},{step:s.COST,title:"Стоимость",postfix:T.SECOND},{step:s.TechnicalInformation,title:"Заказ начат",postfix:T.THIRD}],we=t.memo(()=>{const{CreateOrderCompletedSteps:r,CreateOrderActiveStep:_}=t.useContext(S);return e.jsx("div",{className:u.createOrderProgress,children:Se.map(n=>e.jsxs("div",{className:`${u.createOrderProgress__item} ${u[`createOrderProgress__item__${n.postfix}`]} 
          ${r.includes(n.step)?u.createOrderProgress__item__completed:""}
          ${!r.includes(n.step)&&_!=n.step?u.createOrderProgress__item__closed:""}`,children:[e.jsx("span",{className:u.createOrderProgress__item__step}),e.jsx("span",{className:u.createOrderProgress__item__title,children:n.title})]},n.step))})}),ge="_CreateOrderContainer__wrapper_10rio_1",Ne="_CreateOrderContainer__contentWrapper_10rio_6",be="_CreateOrderContainer__contentWrapper__wrapper_10rio_10",Ae="_CreateOrderContainer__contentWrapper__wrapper__disappear_10rio_13",A={CreateOrderContainer__wrapper:ge,CreateOrderContainer__contentWrapper:Ne,CreateOrderContainer__contentWrapper__wrapper:be,CreateOrderContainer__contentWrapper__wrapper__disappear:Ae},We="_createOrderCostContent_1q69a_1",Fe="_createOrderCostContent__firstCol_1q69a_8",Ee="_createOrderCostContent__secondCol_1q69a_13",W={createOrderCostContent:We,createOrderCostContent__firstCol:Fe,createOrderCostContent__secondCol:Ee},Re="_createOrderCostPayment_13y9f_1",$e="_createOrderCostPayment__disappear_13y9f_7",ke="_createOrderCostPayment__header_13y9f_10",De="_createOrderCostPayment__header__caption_13y9f_16",Be="_createOrderCostPayment__header__balance_13y9f_19",Le="_createOrderCostPayment__header__balance__text_13y9f_25",Ue="_createOrderCostPayment__header__balance__amount_13y9f_32",ze="_createOrderCostPayment__header__balance__amount__pennies_13y9f_39",Me="_createOrderCostPayment__cardChoice_13y9f_45",Ve="_createOrderCostPayment__cardChoice__select_13y9f_51",Ze="_createOrderCostPayment__wrapper_13y9f_55",He="_createOrderCostPayment__inputWrapper_13y9f_62",qe="_createOrderCostPayment__inputWrapper__subcaption_13y9f_67",Ge="_createOrderCostPayment__inputWrapper__desc_13y9f_75",Ke="_createOrderCostPayment__pay_13y9f_83",Je="_createOrderCostPayment__writeSupport_13y9f_91",Qe="_createOrderCostPayment__writeSupport__icon_13y9f_99",Xe="_createOrderCostPayment__writeSupport__text_13y9f_114",i={createOrderCostPayment:Re,createOrderCostPayment__disappear:$e,createOrderCostPayment__header:ke,createOrderCostPayment__header__caption:De,createOrderCostPayment__header__balance:Be,createOrderCostPayment__header__balance__text:Le,createOrderCostPayment__header__balance__amount:Ue,createOrderCostPayment__header__balance__amount__pennies:ze,createOrderCostPayment__cardChoice:Me,createOrderCostPayment__cardChoice__select:Ve,createOrderCostPayment__wrapper:Ze,createOrderCostPayment__inputWrapper:He,createOrderCostPayment__inputWrapper__subcaption:qe,createOrderCostPayment__inputWrapper__desc:Ge,createOrderCostPayment__pay:Ke,createOrderCostPayment__writeSupport:Je,createOrderCostPayment__writeSupport__icon:Qe,createOrderCostPayment__writeSupport__text:Xe},U=r=>!!r.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),Ye=t.memo(()=>{const[r,_]=t.useState(""),[n,l]=M(),m=t.useMemo(()=>U(r),[r]),{setCreateOrderActiveStep:C,setCreateOrderCompletedSteps:h,CreateOrderCompletedSteps:x}=t.useContext(S),p=()=>{C(s.TechnicalInformation),h(()=>[...x,s.COST])};return e.jsxs("div",{className:`Page__BoxShadowWrapper ${i.createOrderCostPayment}`,children:[e.jsxs("div",{className:i.createOrderCostPayment__header,children:[e.jsx("h6",{className:`CreateOrderPage__caption ${i.createOrderCostPayment__header__caption}`,children:"Оплата заказа"}),e.jsxs("div",{className:i.createOrderCostPayment__header__balance,children:[e.jsx("span",{className:i.createOrderCostPayment__header__balance__text,children:"Баланс TeleWorks"}),e.jsxs("span",{className:i.createOrderCostPayment__header__balance__amount,children:["120000",e.jsx("span",{className:i.createOrderCostPayment__header__balance__amount__pennies,children:".00"}),"₽"]})]})]}),e.jsxs("div",{className:i.createOrderCostPayment__wrapper,children:[e.jsxs("div",{className:i.createOrderCostPayment__inputWrapper,children:[e.jsx("span",{className:i.createOrderCostPayment__inputWrapper__subcaption,children:"Ваш e-mail"}),e.jsx(te,{type:"email",value:r,onChange:P=>_(P.target.value),isWarn:!U(r)&&n}),e.jsx("span",{className:i.createOrderCostPayment__inputWrapper__desc,children:"На данный e-mail вышлем чек об оплате."})]}),e.jsx(R,{className:i.createOrderCostPayment__pay,type:$.RED,text:"Оплатить 6000 ₽ ",onClick:m?p:()=>l(!0)}),e.jsxs("span",{className:i.createOrderCostPayment__writeSupport,children:[e.jsx("span",{className:i.createOrderCostPayment__writeSupport__icon,children:"?"}),e.jsx("a",{href:"https://t.me/TeleWorksSupportbot",className:i.createOrderCostPayment__writeSupport__text,children:"Написать в поддержку"})]})]})]})}),er=6e3,rr="_orderPreview_ebxn0_1",tr="_orderPreview__header_ebxn0_5",_r="_orderPreview__headerWrapper_ebxn0_10",ar="_orderPreview__finalPrice_ebxn0_16",or="_orderPreview__desc_ebxn0_23",nr="_orderPreview__project_ebxn0_33",cr="_orderPreview__project__img_ebxn0_40",sr="_orderPreview__project__info_ebxn0_47",ir="_orderPreview__project__info__footer_ebxn0_52",dr="_orderPreview__project__title_ebxn0_57",lr="_orderPreview__project__multiplier_ebxn0_64",mr="_orderPreview__project__price_ebxn0_72",pr="_orderPreview__wrapper_ebxn0_79",fr="_orderPreview__wrapper_padding_ebxn0_83",Cr="_orderPreview__extra_ebxn0_89",hr="_orderPreview__extraWrapper_ebxn0_94",Or="_orderPreview__extra__title_ebxn0_99",xr="_orderPreview__extra__titleWrapper_ebxn0_107",ur="_orderPreview__extra__title__block_ebxn0_112",Pr="_orderPreview__extra__price_ebxn0_119",c={orderPreview:rr,orderPreview__header:tr,orderPreview__headerWrapper:_r,orderPreview__finalPrice:ar,orderPreview__desc:or,orderPreview__project:nr,orderPreview__project__img:cr,orderPreview__project__info:sr,orderPreview__project__info__footer:ir,orderPreview__project__title:dr,orderPreview__project__multiplier:lr,orderPreview__project__price:mr,orderPreview__wrapper:pr,orderPreview__wrapper_padding:fr,orderPreview__extra:Cr,orderPreview__extraWrapper:hr,orderPreview__extra__title:Or,orderPreview__extra__titleWrapper:xr,orderPreview__extra__title__block:ur,orderPreview__extra__price:Pr},d={packName:V.BASE,projectTitle:"Дизайн инфографики для маркетплейсов.",multiplier:1,projectPrice:3e3,extraServices:["Исходный файл","1 вариант дизайна","Ресайз"],deadline:"1 день",editionsAmount:3,extra:[{title:"Доп. редакции",price:3e3}],projectImgURL:`${Z}/global/images/serviceExample_img.png`},Ir=t.memo(({FinalPrice:r})=>e.jsxs("div",{className:`Page__SirineWrapper ${c.orderPreview}`,children:[e.jsxs("div",{className:c.orderPreview__header,children:[e.jsxs("div",{className:c.orderPreview__headerWrapper,children:[e.jsx("span",{className:"CreateOrderPage__caption",children:"Итого"}),e.jsxs("span",{className:c.orderPreview__finalPrice,children:[r," ₽"]})]}),e.jsxs("span",{className:c.orderPreview__desc,children:[d.packName," пакет",d.extra.map(_=>e.jsxs("span",{children:[" + ",_.title]},_.title))]})]}),e.jsxs("div",{className:c.orderPreview__project,children:[e.jsx("img",{className:c.orderPreview__project__img,src:d.projectImgURL,alt:d.projectTitle}),e.jsxs("div",{className:c.orderPreview__project__info,children:[e.jsx("h6",{className:c.orderPreview__project__title,children:d.projectTitle}),e.jsxs("div",{className:c.orderPreview__project__info__footer,children:[e.jsxs("span",{className:c.orderPreview__project__multiplier,children:[d.multiplier,"x"]}),e.jsxs("span",{className:c.orderPreview__project__price,children:[d.projectPrice," ₽"]})]})]})]}),e.jsx("div",{className:c.orderPreview__wrapper,children:e.jsxs("div",{className:c.orderPreview__wrapper_padding,children:[e.jsx(K,{ProjectActiveServices:d.extraServices}),e.jsx(le,{deadline:d.deadline}),e.jsx(me,{editionsAmount:d.editionsAmount})]})}),e.jsx("div",{className:c.orderPreview__extraWrapper,children:d.extra.map(_=>e.jsxs("div",{className:c.orderPreview__extra,children:[e.jsxs("div",{className:c.orderPreview__extra__titleWrapper,children:[e.jsx("div",{className:c.orderPreview__extra__title__block}),e.jsx("span",{className:c.orderPreview__extra__title,children:_.title})]}),e.jsxs("span",{className:c.orderPreview__extra__price,children:[_.price," ₽"]})]},_.title))})]})),vr=t.memo(()=>e.jsxs("section",{className:`${W.createOrderCostContent}`,children:[e.jsx("div",{className:W.createOrderCostContent__firstCol,children:e.jsx(Ye,{})}),e.jsxs("div",{className:W.createOrderCostContent__secondCol,children:[e.jsx(Ir,{FinalPrice:er}),e.jsx(G,{})]})]})),Tr="_createOrderTechnicalInformationContent_ddo02_1",yr="_createOrderTechnicalInformationContent__wrapper_ddo02_9",jr="_createOrderTechnicalInformationContent__secondCol_ddo02_15",F={createOrderTechnicalInformationContent:Tr,createOrderTechnicalInformationContent__wrapper:yr,createOrderTechnicalInformationContent__secondCol:jr},Sr="_orderSuccessfullyPaid_1izu8_1",wr="_orderSuccessfullyPaid__paddingWrapper_1izu8_9",gr="_orderSuccessfullyPaid__closed_1izu8_15",Nr="_orderSuccessfullyPaid__body_1izu8_19",br="_orderSuccessfullyPaid__title_1izu8_24",Ar="_orderSuccessfullyPaid__text_1izu8_31",Wr="_orderSuccessfullyPaid__textWrapper_1izu8_39",Fr="_orderSuccessfullyPaid__svg_1izu8_43",Er="_orderSuccessfullyPaid__close_1izu8_15",f={orderSuccessfullyPaid:Sr,orderSuccessfullyPaid__paddingWrapper:wr,orderSuccessfullyPaid__closed:gr,orderSuccessfullyPaid__body:Nr,orderSuccessfullyPaid__title:br,orderSuccessfullyPaid__text:Ar,orderSuccessfullyPaid__textWrapper:Wr,orderSuccessfullyPaid__svg:Fr,orderSuccessfullyPaid__close:Er},Rr=r=>t.createElement("svg",{width:53,height:41,viewBox:"0 0 53 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("path",{d:"M46.5234 1.20662L19.0415 31.0527L6.4766 17.4071C4.99485 15.7982 2.59284 15.7982 1.11109 17.4071C-0.370362 19.0163 -0.370362 21.6249 1.11109 23.2341L16.3587 39.7933C17.0996 40.5975 18.0705 41 19.0415 41C20.0124 41 20.9833 40.5975 21.7242 39.7933L51.8889 7.03397C53.3704 5.42476 53.3704 2.81615 51.8889 1.20694C50.4072 -0.40226 48.0048 -0.40226 46.5234 1.20662Z",fill:"#FF5555"})),$r=r=>t.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.0085 2.75901C19.2362 2.52326 19.3622 2.20751 19.3593 1.87976C19.3565 1.55202 19.225 1.2385 18.9933 1.00674C18.7615 0.774982 18.448 0.64352 18.1202 0.640672C17.7925 0.637824 17.4767 0.763818 17.241 0.991515L9.99973 8.23276L2.75848 0.991515C2.52273 0.763818 2.20698 0.637824 1.87923 0.640672C1.55149 0.64352 1.23797 0.774982 1.00621 1.00674C0.774452 1.2385 0.64299 1.55202 0.640142 1.87976C0.637294 2.20751 0.763288 2.52326 0.990985 2.75901L8.23223 10.0003L0.990985 17.2415C0.871598 17.3568 0.77637 17.4948 0.710859 17.6473C0.645347 17.7998 0.610864 17.9638 0.609422 18.1298C0.60798 18.2957 0.639607 18.4603 0.702458 18.614C0.765309 18.7676 0.858125 18.9071 0.975491 19.0245C1.09286 19.1419 1.23242 19.2347 1.38604 19.2975C1.53966 19.3604 1.70426 19.392 1.87024 19.3906C2.03621 19.3891 2.20024 19.3547 2.35274 19.2891C2.50525 19.2236 2.64318 19.1284 2.75848 19.009L9.99973 11.7678L17.241 19.009C17.4767 19.2367 17.7925 19.3627 18.1202 19.3599C18.448 19.357 18.7615 19.2255 18.9933 18.9938C19.225 18.762 19.3565 18.4485 19.3593 18.1208C19.3622 17.793 19.2362 17.4773 19.0085 17.2415L11.7672 10.0003L19.0085 2.75901Z",fill:"#FF5555"})),kr=t.memo(()=>{const[r,_]=t.useState(!1),[n,l]=t.useState(!0),m=t.useRef();return t.useEffect(()=>(r&&(m.current=setTimeout(()=>{l(!1)},_e)),()=>{clearTimeout(m.current)}),[r]),e.jsx(e.Fragment,{children:n&&e.jsx("div",{className:`Page__SirineWrapper ${f.orderSuccessfullyPaid} 
    ${r?f.orderSuccessfullyPaid__closed:""}`,children:e.jsxs("div",{className:f.orderSuccessfullyPaid__paddingWrapper,children:[e.jsxs("div",{className:f.orderSuccessfullyPaid__body,children:[e.jsx("div",{className:f.orderSuccessfullyPaid__svg,children:e.jsx(Rr,{})}),e.jsxs("div",{className:f.orderSuccessfullyPaid__textWrapper,children:[e.jsx("h6",{className:f.orderSuccessfullyPaid__title,children:"Заказ успешно оплачен"}),e.jsx("span",{className:f.orderSuccessfullyPaid__text,children:"Чек об оплате направим на вашу эл.почту"})]})]}),e.jsx($r,{onClick:()=>_(!0),className:f.orderSuccessfullyPaid__close})]})})})}),Dr="_createOrderTechnicalInformationContainer_poptp_1",Br="_createOrderTechnicalInformationContainer__wrapper_poptp_6",Lr="_createOrderTechnicalInformationContainer__caption_poptp_11",Ur="_createOrderTechnicalInformationContainer__form_poptp_14",zr="_createOrderTechnicalInformationContainer__form__steps_poptp_20",Mr="_createOrderTechnicalInformationContainer__form__step_poptp_20",Vr="_createOrderTechnicalInformationContainer__form__step__desc_poptp_30",Zr="_createOrderTechnicalInformationContainer__form__textarea_poptp_38",Hr="_createOrderTechnicalInformationContainer__form__textarea__warn_poptp_53",qr="_createOrderTechnicalInformationContainer__form__textareaWrapper_poptp_56",Gr="_createOrderTechnicalInformationContainer__form__textareaFooter_poptp_62",Kr="_createOrderTechnicalInformationContainer__form__attachFiles_poptp_68",Jr="_createOrderTechnicalInformationContainer__form__attachFilesWrapper_poptp_73",Qr="_createOrderTechnicalInformationContainer__form__attachFiles__text_poptp_80",Xr="_createOrderTechnicalInformationContainer__form__attachFiles__input_poptp_87",Yr="_createOrderTechnicalInformationContainer__form__symbolsAmount_poptp_97",et="_createOrderTechnicalInformationContainer__files_poptp_105",rt="_createOrderTechnicalInformationContainer__files__caption_poptp_117",tt="_createOrderTechnicalInformationContainer__files__closed_poptp_120",_t="_createOrderTechnicalInformationContainer__agree_poptp_125",at="_createOrderTechnicalInformationContainer__agree__text_poptp_130",ot="_createOrderTechnicalInformationContainer__buttons_poptp_137",nt="_createOrderTechnicalInformationContainer__button_poptp_137",a={createOrderTechnicalInformationContainer:Dr,createOrderTechnicalInformationContainer__wrapper:Br,createOrderTechnicalInformationContainer__caption:Lr,createOrderTechnicalInformationContainer__form:Ur,createOrderTechnicalInformationContainer__form__steps:zr,createOrderTechnicalInformationContainer__form__step:Mr,createOrderTechnicalInformationContainer__form__step__desc:Vr,createOrderTechnicalInformationContainer__form__textarea:Zr,createOrderTechnicalInformationContainer__form__textarea__warn:Hr,createOrderTechnicalInformationContainer__form__textareaWrapper:qr,createOrderTechnicalInformationContainer__form__textareaFooter:Gr,createOrderTechnicalInformationContainer__form__attachFiles:Kr,createOrderTechnicalInformationContainer__form__attachFilesWrapper:Jr,createOrderTechnicalInformationContainer__form__attachFiles__text:Qr,createOrderTechnicalInformationContainer__form__attachFiles__input:Xr,createOrderTechnicalInformationContainer__form__symbolsAmount:Yr,createOrderTechnicalInformationContainer__files:et,createOrderTechnicalInformationContainer__files__caption:rt,createOrderTechnicalInformationContainer__files__closed:tt,createOrderTechnicalInformationContainer__agree:_t,createOrderTechnicalInformationContainer__agree__text:at,createOrderTechnicalInformationContainer__buttons:ot,createOrderTechnicalInformationContainer__button:nt},k=1200,J=100,Q=r=>!(r.length>k||r.length<J),ct=(r,_)=>!(!Q(r)||!_),z=(r,_)=>q(r,H.CREATE_ORDER_TECHNICAL_INFORMATION_CONTAINER_FORM,_),st=t.memo(()=>{const r=t.useRef(null),_=z(y.GET),[n,l]=t.useState(_||""),[m,C]=t.useState(!1),h=I=>{const v=I.target.value;x(v),v.length<=k?(l(v),C(!1)):C(!0),r.current&&(r.current.style.height="1px"),r.current&&v.length>450&&v.length<=1201&&(r.current.style.height=1+r.current.scrollHeight+"px")},x=t.useCallback(he(I=>{z(y.UPDATE,I)},1e3),[]),[p,P]=t.useState(!1),[O,D]=M(),Y=t.useCallback(()=>{ct(n,p)?ae("/"):D(!0)},[p,n,D]),ee=t.useRef(null),[w,g]=t.useState([]),[re,B]=t.useState(0),N=t.useRef(),b=t.useMemo(()=>oe.find(I=>I.route==ne.CREATE_ORDER).name,[]);return e.jsx(ie,{setFiles:g,indexedDB:N,indexedDBStoreName:b,children:e.jsxs("div",{className:`${a.createOrderTechnicalInformationContainer} createOrderTechnicalInformationContainer`,children:[e.jsxs("div",{className:`Page__BoxShadowWrapper ${a.createOrderTechnicalInformationContainer__wrapper}`,children:[e.jsx("div",{className:a.createOrderTechnicalInformationContainer__header,children:e.jsx("h6",{className:`${a.createOrderTechnicalInformationContainer__caption} CreateOrderPage__caption`,children:"Материалы для работы"})}),e.jsxs("div",{className:a.createOrderTechnicalInformationContainer__form,children:[e.jsx("span",{className:"CreateOrderPage__caption",children:"Исполнителю для создание проекта, понадобится:"}),e.jsxs("ul",{className:a.createOrderTechnicalInformationContainer__form__steps,children:[e.jsxs("li",{className:a.createOrderTechnicalInformationContainer__form__step,children:[e.jsx("span",{className:"CreateOrderPage__subcaption",children:"1. Исходные фото"}),e.jsx("p",{className:a.createOrderTechnicalInformationContainer__form__step__desc,children:"Пожалуйста, проверьте качество фото"})]}),e.jsx("li",{className:a.createOrderTechnicalInformationContainer__form__step,children:e.jsx("span",{className:"CreateOrderPage__subcaption",children:"2. Техническое задание"})})]}),e.jsxs("div",{className:a.createOrderTechnicalInformationContainer__form__textareaWrapper,children:[e.jsx("textarea",{ref:r,className:`${a.createOrderTechnicalInformationContainer__form__textarea}
                ${m||O&&!Q(n)?a.createOrderTechnicalInformationContainer__form__textarea__warn:""}`,name:"createOrderTechnicalInformationContainer__form__textarea",value:n,onChange:h}),e.jsxs("div",{className:a.createOrderTechnicalInformationContainer__form__textareaFooter,children:[e.jsxs("div",{className:a.createOrderTechnicalInformationContainer__form__attachFilesWrapper,children:[e.jsx(fe,{inputRef:ee,InputFiles:w,setInputFiles:g,setInputFileProgress:B,"data-testid":"CreateOrderTechnicalInformationContainer.AttachFilesInput",indexedDB:N.current,indexedDBStoreName:b}),e.jsxs("div",{className:a.createOrderTechnicalInformationContainer__form__attachFiles,children:[e.jsx(pe,{}),e.jsx("span",{className:a.createOrderTechnicalInformationContainer__form__attachFiles__text,children:"Прикрепить файл"})]})]}),e.jsxs("span",{className:a.createOrderTechnicalInformationContainer__form__symbolsAmount,children:[n.length," из"," ",k," ","символов (минимум"," ",J,")"]})]})]}),e.jsxs("div",{className:`${a.createOrderTechnicalInformationContainer__files}
              ${w.length?"":a.createOrderTechnicalInformationContainer__files__closed}`,children:[e.jsx("h6",{className:`${a.createOrderTechnicalInformationContainer__caption} 
                  ${a.createOrderTechnicalInformationContainer__files__caption} CreateOrderPage__caption`,children:"Загруженные файлы"}),e.jsx(Ce,{setInputFileProgress:B,InputFileProgress:re,setInputFiles:g,files:w,indexedDBName:ce,indexedDBStore:b,indexedDB:N.current})]})]})]}),e.jsxs("div",{className:a.createOrderTechnicalInformationContainer__agree,children:[e.jsx(se,{isActive:p,onClick:()=>P(!p),isWarn:O&&!p}),e.jsx("p",{className:a.createOrderTechnicalInformationContainer__agree__text,children:"Предоставленная мной информация является точной и полной. Любые изменения требуют согласования с продавцом и могут потребовать дополнительной оплаты."})]}),e.jsxs("div",{className:a.createOrderTechnicalInformationContainer__buttons,children:[e.jsx(R,{className:a.createOrderTechnicalInformationContainer__button,type:$.BLACK_WITHOUT_OUTLINE,text:"Заполнить позже"}),e.jsx(R,{className:a.createOrderTechnicalInformationContainer__button,type:$.RED,text:"Подтвердить",onClick:Y})]})]})})}),it="_orderInfo_d1na2_1",dt="_orderInfo__header_d1na2_5",lt="_orderInfo__header__info_d1na2_11",mt="_orderInfo__img_d1na2_17",pt="_orderInfo__title_d1na2_24",ft="_orderInfo__packName_d1na2_31",Ct="_orderInfo__extraServices_d1na2_38",ht="_orderInfo__extraServices__items_d1na2_45",Ot="_orderInfo__extra_d1na2_38",xt="_orderInfo__extra__block_d1na2_58",ut="_orderInfo__extra__text_d1na2_65",Pt="_orderInfo__info_d1na2_68",It="_orderInfo__info__title_d1na2_76",vt="_orderInfo__info__value_d1na2_83",Tt="_orderInfo__info__item_d1na2_92",o={orderInfo:it,orderInfo__header:dt,orderInfo__header__info:lt,orderInfo__img:mt,orderInfo__title:pt,orderInfo__packName:ft,orderInfo__extraServices:Ct,orderInfo__extraServices__items:ht,orderInfo__extra:Ot,orderInfo__extra__block:xt,orderInfo__extra__text:ut,orderInfo__info:Pt,orderInfo__info__title:It,orderInfo__info__value:vt,orderInfo__info__item:Tt};var j=(r=>(r.PROCESS="в процессе",r.CONTESTATION="Оспаривание",r))(j||{});const yt="_orderStatus_fzhy6_1",jt="_orderStatus__process_fzhy6_15",St="_orderStatus__contestation_fzhy6_18",E={orderStatus:yt,orderStatus__process:jt,orderStatus__contestation:St},wt=t.memo(({orderStatus:r})=>e.jsx("span",{className:`${E.orderStatus} 
        ${r==j.PROCESS?E.orderStatus__process:""}
        ${r==j.CONTESTATION?E.orderStatus__contestation:""}`,children:r})),gt=t.memo(({orderImgURL:r,orderTitle:_,orderPackName:n,extra:l,extraServices:m,orderStatus:C,orderDate:h,PerformerUsername:x,multiplier:p,price:P})=>e.jsxs("div",{className:`Page__SirineWrapper ${o.orderInfo}`,children:[e.jsxs("div",{className:o.orderInfo__header,children:[e.jsx("img",{className:o.orderInfo__img,src:r,alt:_}),e.jsxs("div",{className:o.orderInfo__header__info,children:[e.jsx("h6",{className:o.orderInfo__title,children:_}),e.jsxs("span",{className:o.orderInfo__packName,children:[n," пакет",l.map(O=>e.jsxs("span",{children:[" + ",O]},O))]})]})]}),e.jsxs("div",{className:o.orderInfo__extraServices,children:[e.jsx("div",{className:o.orderInfo__extraServices__items,children:e.jsx(K,{ProjectActiveServices:m})}),l.map(O=>e.jsxs("div",{className:o.orderInfo__extra,children:[e.jsx("span",{className:o.orderInfo__extra__block}),e.jsx("span",{className:`Page__subcaption ${o.orderInfo__extra__text}`,children:O})]},O))]}),e.jsxs("div",{className:o.orderInfo__info,children:[e.jsxs("div",{className:o.orderInfo__info__item,children:[e.jsx("span",{className:o.orderInfo__info__title,children:"Статус"}),e.jsx(wt,{orderStatus:C})]}),e.jsxs("div",{className:o.orderInfo__info__item,children:[e.jsx("span",{className:o.orderInfo__info__title,children:"Исполнитель"}),e.jsx("span",{className:o.orderInfo__info__value,children:x})]}),e.jsxs("div",{className:o.orderInfo__info__item,children:[e.jsx("span",{className:o.orderInfo__info__title,children:"Дата заказа"}),e.jsx("span",{className:o.orderInfo__info__value,children:h})]}),e.jsxs("div",{className:o.orderInfo__info__item,children:[e.jsx("span",{className:o.orderInfo__info__title,children:"Кол-во"}),e.jsxs("span",{className:o.orderInfo__info__value,children:[p,"x"]})]}),e.jsxs("div",{className:o.orderInfo__info__item,children:[e.jsx("span",{className:o.orderInfo__info__title,children:"Цена"}),e.jsxs("span",{className:o.orderInfo__info__value,children:[P," Р"]})]})]})]})),Nt={orderImgURL:`${Z}/global/images/portfolioCase__example_img.png`,orderTitle:"Дизайн инфографики для маркетплейсов.",orderPackName:V.BASE,extraServices:["Исходный файл","1 вариант дизайна","Ресайз"],extra:["Доп. редакции"],PerformerUsername:"@Bayandinrd",orderDate:"23.06.2024   15:34",multiplier:1,price:3e3},bt=t.memo(()=>{const{CreateOrderCompletedSteps:r}=t.useContext(S);return X(y.UPDATE,{CreateOrderActiveStep:s.TechnicalInformation,CreateOrderCompletedSteps:[...r,s.COST]}),e.jsxs("section",{className:F.createOrderTechnicalInformationContent,children:[e.jsx(kr,{}),e.jsxs("div",{className:F.createOrderTechnicalInformationContent__wrapper,children:[e.jsx(st,{}),e.jsxs("div",{className:F.createOrderTechnicalInformationContent__secondCol,children:[e.jsx(gt,{orderStatus:j.PROCESS,...Nt}),e.jsx(G,{})]})]})]})}),At=t.memo(()=>{const r=X(y.GET),[_,n]=t.useState(r?r.CreateOrderActiveStep:s.COST),[l,m]=t.useState(r?r.CreateOrderCompletedSteps:[s.CREATE]),[C,h]=t.useState(!1);return t.useEffect(()=>{if(_!=s.COST&&!r){h(!0);const x=setTimeout(()=>{h(!1),clearTimeout(x)},L)}},[_,r]),e.jsx(S.Provider,{value:{CreateOrderActiveStep:_,setCreateOrderActiveStep:n,CreateOrderCompletedSteps:l,setCreateOrderCompletedSteps:m},children:e.jsx("main",{className:"Page CreateOrderPage__main",children:e.jsxs("div",{className:"padding",children:[e.jsx(we,{}),e.jsx("div",{className:A.CreateOrderContainer__contentWrapper,children:e.jsx(de,{className:C?A.CreateOrderContainer__contentWrapper__wrapper__disappear:A.CreateOrderContainer__contentWrapper__wrapper,blocks:[{component:e.jsx(vr,{}),condition:_==s.COST,id:0},{component:e.jsx(bt,{}),condition:_==s.TechnicalInformation,id:1}],transitionDuration:L,defaultIndex:_==s.COST?0:1})})]})})})}),S=t.createContext({CreateOrderActiveStep:s.COST,setCreateOrderActiveStep:t.useState,CreateOrderCompletedSteps:[s.CREATE],setCreateOrderCompletedSteps:t.useState}),X=(r,_)=>q(r,H.CREATE_ORDER_STEP,_),w_=t.memo(()=>(t.useEffect(()=>{document.querySelector("html").classList.add("CreateOrderPage"),document.title="TeleWorks | Создание заказа"},[]),e.jsx(At,{})));export{w_ as CreateOrderPage};
