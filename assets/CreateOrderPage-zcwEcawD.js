import{r as t,j as e}from"./react-zrC4k5k2.js";import{$ as L,I as ee,B as W,a as F,a0 as m,U as G,t as re,H as U,L as z,h as y,r as te,i as ae,A as _e,k as ne,C as oe,p as $,a1 as ce}from"./app-routes-4qbA6mXx.js";import{U as V}from"./index-DAddOC2_.js";import{P as M,a as Z,b as se,c as ie}from"./ProjectInfo_pack-B9Cj-Gjt.js";import{S as de}from"./AttachSVG-BWNfHt6q.js";import{A as le,a as me}from"./AttachFileContainerItems-F-Mf9hF5.js";import{U as pe}from"./UseDebounce-B4wZPC3r.js";import{I as fe,T as Ce}from"./TransitionBetweenBlocks--Flpb4b2.js";import"./@babel-13fjUkWY.js";import"./react-dom-aNADivH4.js";import"./react-router-dom-Bmqp4_LK.js";import"./react-router-Bfa73Yvd.js";import"./@remix-run-I3CLtn5C.js";import"./@reduxjs-BQV_WoVf.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./react-redux-D78363SC.js";import"./use-sync-external-store-Bg1Z0G9P.js";import"./styled-components-BcVmWm4K.js";import"./primereact-nLNvjVu6.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-DMscNvN2.js";import"./@mui-Dh2ADnaV.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./@emotion-CYu4OkFg.js";import"./hoist-non-react-statics-BzqkPicg.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-DvBm5OJO.js";import"./jss-plugin-rule-value-function-NRMjr7SR.js";import"./jss-C2YbWCDG.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-B2s_qxL_.js";import"./jss-plugin-nested-CvQgPwbz.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-CakodQBr.js";import"./jss-plugin-vendor-prefixer-C0RmQ0NR.js";import"./css-vendor-BK3-fMEt.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-select-CLpz9WOa.js";import"./@floating-ui-RYOEkms0.js";import"./use-isomorphic-layout-effect-eSKX-Jxz.js";import"./memoize-one-BdPwpGay.js";import"./swiper-BZYHt685.js";const he="_createOrderCostContent_1q69a_1",ue="_createOrderCostContent__firstCol_1q69a_8",xe="_createOrderCostContent__secondCol_1q69a_13",g={createOrderCostContent:he,createOrderCostContent__firstCol:ue,createOrderCostContent__secondCol:xe},Oe="_createOrderCostPayment_13y9f_1",Pe="_createOrderCostPayment__disappear_13y9f_7",Ie="_createOrderCostPayment__header_13y9f_10",ve="_createOrderCostPayment__header__caption_13y9f_16",ye="_createOrderCostPayment__header__balance_13y9f_19",je="_createOrderCostPayment__header__balance__text_13y9f_25",Te="_createOrderCostPayment__header__balance__amount_13y9f_32",Se="_createOrderCostPayment__header__balance__amount__pennies_13y9f_39",we="_createOrderCostPayment__cardChoice_13y9f_45",Ne="_createOrderCostPayment__cardChoice__select_13y9f_51",ge="_createOrderCostPayment__wrapper_13y9f_55",be="_createOrderCostPayment__inputWrapper_13y9f_62",Ae="_createOrderCostPayment__inputWrapper__subcaption_13y9f_67",We="_createOrderCostPayment__inputWrapper__desc_13y9f_75",Fe="_createOrderCostPayment__pay_13y9f_83",Ee="_createOrderCostPayment__writeSupport_13y9f_91",Le="_createOrderCostPayment__writeSupport__icon_13y9f_99",ke="_createOrderCostPayment__writeSupport__text_13y9f_114",c={createOrderCostPayment:Oe,createOrderCostPayment__disappear:Pe,createOrderCostPayment__header:Ie,createOrderCostPayment__header__caption:ve,createOrderCostPayment__header__balance:ye,createOrderCostPayment__header__balance__text:je,createOrderCostPayment__header__balance__amount:Te,createOrderCostPayment__header__balance__amount__pennies:Se,createOrderCostPayment__cardChoice:we,createOrderCostPayment__cardChoice__select:Ne,createOrderCostPayment__wrapper:ge,createOrderCostPayment__inputWrapper:be,createOrderCostPayment__inputWrapper__subcaption:Ae,createOrderCostPayment__inputWrapper__desc:We,createOrderCostPayment__pay:Fe,createOrderCostPayment__writeSupport:Ee,createOrderCostPayment__writeSupport__icon:Le,createOrderCostPayment__writeSupport__text:ke},B=r=>!!r.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),Re=t.memo(()=>{const[r,a]=t.useState(""),[s,d]=V(),l=t.useMemo(()=>B(r),[r]),{setCreateOrderActiveStep:C,setCreateOrderCompletedSteps:h,CreateOrderCompletedSteps:x}=t.useContext(L),p=()=>{C(m.TechnicalInformation),h(()=>[...x,m.COST])};return e.jsxs("div",{className:`Page__BoxShadowWrapper ${c.createOrderCostPayment}`,children:[e.jsxs("div",{className:c.createOrderCostPayment__header,children:[e.jsx("h6",{className:`CreateOrderPage__caption ${c.createOrderCostPayment__header__caption}`,children:"Оплата заказа"}),e.jsxs("div",{className:c.createOrderCostPayment__header__balance,children:[e.jsx("span",{className:c.createOrderCostPayment__header__balance__text,children:"Баланс TeleWorks"}),e.jsxs("span",{className:c.createOrderCostPayment__header__balance__amount,children:["120000",e.jsx("span",{className:c.createOrderCostPayment__header__balance__amount__pennies,children:".00"}),"₽"]})]})]}),e.jsxs("div",{className:c.createOrderCostPayment__wrapper,children:[e.jsxs("div",{className:c.createOrderCostPayment__inputWrapper,children:[e.jsx("span",{className:c.createOrderCostPayment__inputWrapper__subcaption,children:"Ваш e-mail"}),e.jsx(ee,{type:"email",value:r,onChange:O=>a(O.target.value),isWarn:!B(r)&&s}),e.jsx("span",{className:c.createOrderCostPayment__inputWrapper__desc,children:"На данный e-mail вышлем чек об оплате."})]}),e.jsx(W,{className:c.createOrderCostPayment__pay,type:F.RED,text:"Оплатить 6000 ₽ ",onClick:l?p:()=>d(!0)}),e.jsxs("span",{className:c.createOrderCostPayment__writeSupport,children:[e.jsx("span",{className:c.createOrderCostPayment__writeSupport__icon,children:"?"}),e.jsx("a",{href:"https://t.me/TeleWorksSupportbot",className:c.createOrderCostPayment__writeSupport__text,children:"Написать в поддержку"})]})]})]})}),$e=6e3,Be="_orderSecurityGuarantee_16grc_1",De="_orderSecurityGuarantee__header_16grc_6",Ge="_orderSecurityGuarantee__svg_16grc_10",Ue="_orderSecurityGuarantee__title_16grc_14",ze="_orderSecurityGuarantee__text_16grc_21",v={orderSecurityGuarantee:Be,orderSecurityGuarantee__header:De,orderSecurityGuarantee__svg:Ge,orderSecurityGuarantee__title:Ue,orderSecurityGuarantee__text:ze},Ve=r=>t.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("g",{clipPath:"url(#clip0_280_1929)"},t.createElement("path",{d:"M15 21.1553L20 19.2803L25 21.1553V25.0468C25 26.9406 23.93 28.6719 22.236 29.5188L20 30.6369L17.7639 29.5188C16.07 28.6719 15 26.9406 15 25.0468V21.1553Z",fill:"#FF5555"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.1703 8.6595C20.4158 8.37652 19.5842 8.37652 18.8297 8.6595L7.16292 13.0345C5.86192 13.5224 5 14.7661 5 16.1556V25.0935C5 30.775 8.21003 35.969 13.2918 38.5098L18.882 41.305C19.5858 41.6568 20.4142 41.6568 21.118 41.305L26.7082 38.5098C31.79 35.969 35 30.775 35 25.0935V16.1556C35 14.7661 34.1382 13.5224 32.837 13.0345L21.1703 8.6595ZM20.8777 16.05C20.3117 15.8378 19.688 15.8378 19.122 16.05L13.2886 18.2375C12.3129 18.6034 11.6665 19.5362 11.6665 20.5783V25.0473C11.6665 28.2037 13.4498 31.0892 16.273 32.5008L19.0682 33.8983C19.6547 34.1917 20.345 34.1917 20.9315 33.8983L23.7265 32.5008C26.5498 31.0892 28.3332 28.2037 28.3332 25.0473V20.5783C28.3332 19.5362 27.6867 18.6034 26.711 18.2375L20.8777 16.05Z",fill:"#FF5555"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_280_1929"},t.createElement("rect",{width:40,height:40,fill:"white"})))),q=t.memo(()=>e.jsxs("div",{className:`${v.orderSecurityGuarantee} Page__SirineWrapper`,children:[e.jsxs("div",{className:v.orderSecurityGuarantee__header,children:[e.jsx(Ve,{className:v.orderSecurityGuarantee__svg}),e.jsx("h6",{className:v.orderSecurityGuarantee__title,children:"Гарантия безопасности заказа"})]}),e.jsx("p",{className:v.orderSecurityGuarantee__text,children:"Ваши средства под защитой TeleWorks на время выполнения заказа. Продавец получает оплату после того, как вы проверите и примите заказ. Гарантия возврата 100% в случае просрочки или невыполнения заказа."})]})),Me="_orderPreview_ebxn0_1",Ze="_orderPreview__header_ebxn0_5",qe="_orderPreview__headerWrapper_ebxn0_10",He="_orderPreview__finalPrice_ebxn0_16",Ke="_orderPreview__desc_ebxn0_23",Je="_orderPreview__project_ebxn0_33",Qe="_orderPreview__project__img_ebxn0_40",Xe="_orderPreview__project__info_ebxn0_47",Ye="_orderPreview__project__info__footer_ebxn0_52",er="_orderPreview__project__title_ebxn0_57",rr="_orderPreview__project__multiplier_ebxn0_64",tr="_orderPreview__project__price_ebxn0_72",ar="_orderPreview__wrapper_ebxn0_79",_r="_orderPreview__wrapper_padding_ebxn0_83",nr="_orderPreview__extra_ebxn0_89",or="_orderPreview__extraWrapper_ebxn0_94",cr="_orderPreview__extra__title_ebxn0_99",sr="_orderPreview__extra__titleWrapper_ebxn0_107",ir="_orderPreview__extra__title__block_ebxn0_112",dr="_orderPreview__extra__price_ebxn0_119",o={orderPreview:Me,orderPreview__header:Ze,orderPreview__headerWrapper:qe,orderPreview__finalPrice:He,orderPreview__desc:Ke,orderPreview__project:Je,orderPreview__project__img:Qe,orderPreview__project__info:Xe,orderPreview__project__info__footer:Ye,orderPreview__project__title:er,orderPreview__project__multiplier:rr,orderPreview__project__price:tr,orderPreview__wrapper:ar,orderPreview__wrapper_padding:_r,orderPreview__extra:nr,orderPreview__extraWrapper:or,orderPreview__extra__title:cr,orderPreview__extra__titleWrapper:sr,orderPreview__extra__title__block:ir,orderPreview__extra__price:dr},i={packName:M.BASE,projectTitle:"Дизайн инфографики для маркетплейсов.",multiplier:1,projectPrice:3e3,extraServices:["Исходный файл","1 вариант дизайна","Ресайз"],deadline:"1 день",editionsAmount:3,extra:[{title:"Доп. редакции",price:3e3}],projectImgURL:`${G}/global/images/serviceExample_img.png`},lr=t.memo(({FinalPrice:r})=>e.jsxs("div",{className:`Page__SirineWrapper ${o.orderPreview}`,children:[e.jsxs("div",{className:o.orderPreview__header,children:[e.jsxs("div",{className:o.orderPreview__headerWrapper,children:[e.jsx("span",{className:"CreateOrderPage__caption",children:"Итого"}),e.jsxs("span",{className:o.orderPreview__finalPrice,children:[r," ₽"]})]}),e.jsxs("span",{className:o.orderPreview__desc,children:[i.packName," пакет",i.extra.map(a=>e.jsxs("span",{children:[" + ",a.title]},a.title))]})]}),e.jsxs("div",{className:o.orderPreview__project,children:[e.jsx("img",{className:o.orderPreview__project__img,src:i.projectImgURL,alt:i.projectTitle}),e.jsxs("div",{className:o.orderPreview__project__info,children:[e.jsx("h6",{className:o.orderPreview__project__title,children:i.projectTitle}),e.jsxs("div",{className:o.orderPreview__project__info__footer,children:[e.jsxs("span",{className:o.orderPreview__project__multiplier,children:[i.multiplier,"x"]}),e.jsxs("span",{className:o.orderPreview__project__price,children:[i.projectPrice," ₽"]})]})]})]}),e.jsx("div",{className:o.orderPreview__wrapper,children:e.jsxs("div",{className:o.orderPreview__wrapper_padding,children:[e.jsx(Z,{ProjectActiveServices:i.extraServices}),e.jsx(se,{deadline:i.deadline}),e.jsx(ie,{editionsAmount:i.editionsAmount})]})}),e.jsx("div",{className:o.orderPreview__extraWrapper,children:i.extra.map(a=>e.jsxs("div",{className:o.orderPreview__extra,children:[e.jsxs("div",{className:o.orderPreview__extra__titleWrapper,children:[e.jsx("div",{className:o.orderPreview__extra__title__block}),e.jsx("span",{className:o.orderPreview__extra__title,children:a.title})]}),e.jsxs("span",{className:o.orderPreview__extra__price,children:[a.price," ₽"]})]},a.title))})]})),mr=t.memo(()=>e.jsxs("section",{className:`${g.createOrderCostContent}`,children:[e.jsx("div",{className:g.createOrderCostContent__firstCol,children:e.jsx(Re,{})}),e.jsxs("div",{className:g.createOrderCostContent__secondCol,children:[e.jsx(lr,{FinalPrice:$e}),e.jsx(q,{})]})]})),pr="_createOrderTechnicalInformationContent_ddo02_1",fr="_createOrderTechnicalInformationContent__wrapper_ddo02_9",Cr="_createOrderTechnicalInformationContent__secondCol_ddo02_15",b={createOrderTechnicalInformationContent:pr,createOrderTechnicalInformationContent__wrapper:fr,createOrderTechnicalInformationContent__secondCol:Cr},hr="_orderSuccessfullyPaid_1izu8_1",ur="_orderSuccessfullyPaid__paddingWrapper_1izu8_9",xr="_orderSuccessfullyPaid__closed_1izu8_15",Or="_orderSuccessfullyPaid__body_1izu8_19",Pr="_orderSuccessfullyPaid__title_1izu8_24",Ir="_orderSuccessfullyPaid__text_1izu8_31",vr="_orderSuccessfullyPaid__textWrapper_1izu8_39",yr="_orderSuccessfullyPaid__svg_1izu8_43",jr="_orderSuccessfullyPaid__close_1izu8_15",f={orderSuccessfullyPaid:hr,orderSuccessfullyPaid__paddingWrapper:ur,orderSuccessfullyPaid__closed:xr,orderSuccessfullyPaid__body:Or,orderSuccessfullyPaid__title:Pr,orderSuccessfullyPaid__text:Ir,orderSuccessfullyPaid__textWrapper:vr,orderSuccessfullyPaid__svg:yr,orderSuccessfullyPaid__close:jr},Tr=r=>t.createElement("svg",{width:53,height:41,viewBox:"0 0 53 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("path",{d:"M46.5234 1.20662L19.0415 31.0527L6.4766 17.4071C4.99485 15.7982 2.59284 15.7982 1.11109 17.4071C-0.370362 19.0163 -0.370362 21.6249 1.11109 23.2341L16.3587 39.7933C17.0996 40.5975 18.0705 41 19.0415 41C20.0124 41 20.9833 40.5975 21.7242 39.7933L51.8889 7.03397C53.3704 5.42476 53.3704 2.81615 51.8889 1.20694C50.4072 -0.40226 48.0048 -0.40226 46.5234 1.20662Z",fill:"#FF5555"})),Sr=r=>t.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.0085 2.75901C19.2362 2.52326 19.3622 2.20751 19.3593 1.87976C19.3565 1.55202 19.225 1.2385 18.9933 1.00674C18.7615 0.774982 18.448 0.64352 18.1202 0.640672C17.7925 0.637824 17.4767 0.763818 17.241 0.991515L9.99973 8.23276L2.75848 0.991515C2.52273 0.763818 2.20698 0.637824 1.87923 0.640672C1.55149 0.64352 1.23797 0.774982 1.00621 1.00674C0.774452 1.2385 0.64299 1.55202 0.640142 1.87976C0.637294 2.20751 0.763288 2.52326 0.990985 2.75901L8.23223 10.0003L0.990985 17.2415C0.871598 17.3568 0.77637 17.4948 0.710859 17.6473C0.645347 17.7998 0.610864 17.9638 0.609422 18.1298C0.60798 18.2957 0.639607 18.4603 0.702458 18.614C0.765309 18.7676 0.858125 18.9071 0.975491 19.0245C1.09286 19.1419 1.23242 19.2347 1.38604 19.2975C1.53966 19.3604 1.70426 19.392 1.87024 19.3906C2.03621 19.3891 2.20024 19.3547 2.35274 19.2891C2.50525 19.2236 2.64318 19.1284 2.75848 19.009L9.99973 11.7678L17.241 19.009C17.4767 19.2367 17.7925 19.3627 18.1202 19.3599C18.448 19.357 18.7615 19.2255 18.9933 18.9938C19.225 18.762 19.3565 18.4485 19.3593 18.1208C19.3622 17.793 19.2362 17.4773 19.0085 17.2415L11.7672 10.0003L19.0085 2.75901Z",fill:"#FF5555"})),wr=t.memo(()=>{const[r,a]=t.useState(!1),[s,d]=t.useState(!0),l=t.useRef();return t.useEffect(()=>(r&&(l.current=setTimeout(()=>{d(!1)},re)),()=>{clearTimeout(l.current)}),[r]),e.jsx(e.Fragment,{children:s&&e.jsx("div",{className:`Page__SirineWrapper ${f.orderSuccessfullyPaid} 
    ${r?f.orderSuccessfullyPaid__closed:""}`,children:e.jsxs("div",{className:f.orderSuccessfullyPaid__paddingWrapper,children:[e.jsxs("div",{className:f.orderSuccessfullyPaid__body,children:[e.jsx("div",{className:f.orderSuccessfullyPaid__svg,children:e.jsx(Tr,{})}),e.jsxs("div",{className:f.orderSuccessfullyPaid__textWrapper,children:[e.jsx("h6",{className:f.orderSuccessfullyPaid__title,children:"Заказ успешно оплачен"}),e.jsx("span",{className:f.orderSuccessfullyPaid__text,children:"Чек об оплате направим на вашу эл.почту"})]})]}),e.jsx(Sr,{onClick:()=>a(!0),className:f.orderSuccessfullyPaid__close})]})})})}),Nr="_createOrderTechnicalInformationContainer_poptp_1",gr="_createOrderTechnicalInformationContainer__wrapper_poptp_6",br="_createOrderTechnicalInformationContainer__caption_poptp_11",Ar="_createOrderTechnicalInformationContainer__form_poptp_14",Wr="_createOrderTechnicalInformationContainer__form__steps_poptp_20",Fr="_createOrderTechnicalInformationContainer__form__step_poptp_20",Er="_createOrderTechnicalInformationContainer__form__step__desc_poptp_30",Lr="_createOrderTechnicalInformationContainer__form__textarea_poptp_38",kr="_createOrderTechnicalInformationContainer__form__textarea__warn_poptp_53",Rr="_createOrderTechnicalInformationContainer__form__textareaWrapper_poptp_56",$r="_createOrderTechnicalInformationContainer__form__textareaFooter_poptp_62",Br="_createOrderTechnicalInformationContainer__form__attachFiles_poptp_68",Dr="_createOrderTechnicalInformationContainer__form__attachFilesWrapper_poptp_73",Gr="_createOrderTechnicalInformationContainer__form__attachFiles__text_poptp_80",Ur="_createOrderTechnicalInformationContainer__form__attachFiles__input_poptp_87",zr="_createOrderTechnicalInformationContainer__form__symbolsAmount_poptp_97",Vr="_createOrderTechnicalInformationContainer__files_poptp_105",Mr="_createOrderTechnicalInformationContainer__files__caption_poptp_117",Zr="_createOrderTechnicalInformationContainer__files__closed_poptp_120",qr="_createOrderTechnicalInformationContainer__agree_poptp_125",Hr="_createOrderTechnicalInformationContainer__agree__text_poptp_130",Kr="_createOrderTechnicalInformationContainer__buttons_poptp_137",Jr="_createOrderTechnicalInformationContainer__button_poptp_137",_={createOrderTechnicalInformationContainer:Nr,createOrderTechnicalInformationContainer__wrapper:gr,createOrderTechnicalInformationContainer__caption:br,createOrderTechnicalInformationContainer__form:Ar,createOrderTechnicalInformationContainer__form__steps:Wr,createOrderTechnicalInformationContainer__form__step:Fr,createOrderTechnicalInformationContainer__form__step__desc:Er,createOrderTechnicalInformationContainer__form__textarea:Lr,createOrderTechnicalInformationContainer__form__textarea__warn:kr,createOrderTechnicalInformationContainer__form__textareaWrapper:Rr,createOrderTechnicalInformationContainer__form__textareaFooter:$r,createOrderTechnicalInformationContainer__form__attachFiles:Br,createOrderTechnicalInformationContainer__form__attachFilesWrapper:Dr,createOrderTechnicalInformationContainer__form__attachFiles__text:Gr,createOrderTechnicalInformationContainer__form__attachFiles__input:Ur,createOrderTechnicalInformationContainer__form__symbolsAmount:zr,createOrderTechnicalInformationContainer__files:Vr,createOrderTechnicalInformationContainer__files__caption:Mr,createOrderTechnicalInformationContainer__files__closed:Zr,createOrderTechnicalInformationContainer__agree:qr,createOrderTechnicalInformationContainer__agree__text:Hr,createOrderTechnicalInformationContainer__buttons:Kr,createOrderTechnicalInformationContainer__button:Jr},E=1200,H=100,K=r=>!(r.length>E||r.length<H),Qr=(r,a)=>!(!K(r)||!a),D=(r,a)=>U(r,z.CREATE_ORDER_TECHNICAL_INFORMATION_CONTAINER_FORM,a),Xr=t.memo(()=>{const r=t.useRef(null),a=D(y.GET),[s,d]=t.useState(a||""),[l,C]=t.useState(!1),h=P=>{const I=P.target.value;x(I),I.length<=E?(d(I),C(!1)):C(!0),r.current&&(r.current.style.height="1px"),r.current&&I.length>450&&I.length<=1201&&(r.current.style.height=1+r.current.scrollHeight+"px")},x=t.useCallback(pe(P=>{D(y.UPDATE,P)},1e3),[]),[p,O]=t.useState(!1),[u,k]=V(),Q=t.useCallback(()=>{Qr(s,p)?te("/"):k(!0)},[p,s,k]),X=t.useRef(null),[T,S]=t.useState([]),[Y,R]=t.useState(0),w=t.useRef(),N=t.useMemo(()=>ae.find(P=>P.route==_e.CREATE_ORDER).name,[]);return e.jsx(fe,{setFiles:S,indexedDB:w,indexedDBStoreName:N,children:e.jsxs("div",{className:`${_.createOrderTechnicalInformationContainer} createOrderTechnicalInformationContainer`,children:[e.jsxs("div",{className:`Page__BoxShadowWrapper ${_.createOrderTechnicalInformationContainer__wrapper}`,children:[e.jsx("div",{className:_.createOrderTechnicalInformationContainer__header,children:e.jsx("h6",{className:`${_.createOrderTechnicalInformationContainer__caption} CreateOrderPage__caption`,children:"Материалы для работы"})}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__form,children:[e.jsx("span",{className:"CreateOrderPage__caption",children:"Исполнителю для создание проекта, понадобится:"}),e.jsxs("ul",{className:_.createOrderTechnicalInformationContainer__form__steps,children:[e.jsxs("li",{className:_.createOrderTechnicalInformationContainer__form__step,children:[e.jsx("span",{className:"CreateOrderPage__subcaption",children:"1. Исходные фото"}),e.jsx("p",{className:_.createOrderTechnicalInformationContainer__form__step__desc,children:"Пожалуйста, проверьте качество фото"})]}),e.jsx("li",{className:_.createOrderTechnicalInformationContainer__form__step,children:e.jsx("span",{className:"CreateOrderPage__subcaption",children:"2. Техническое задание"})})]}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__form__textareaWrapper,children:[e.jsx("textarea",{ref:r,className:`${_.createOrderTechnicalInformationContainer__form__textarea}
                ${l||u&&!K(s)?_.createOrderTechnicalInformationContainer__form__textarea__warn:""}`,name:"createOrderTechnicalInformationContainer__form__textarea",value:s,onChange:h}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__form__textareaFooter,children:[e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__form__attachFilesWrapper,children:[e.jsx(le,{inputRef:X,InputFiles:T,setInputFiles:S,setInputFileProgress:R,"data-testid":"CreateOrderTechnicalInformationContainer.AttachFilesInput",indexedDB:w.current,indexedDBStoreName:N}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__form__attachFiles,children:[e.jsx(de,{}),e.jsx("span",{className:_.createOrderTechnicalInformationContainer__form__attachFiles__text,children:"Прикрепить файл"})]})]}),e.jsxs("span",{className:_.createOrderTechnicalInformationContainer__form__symbolsAmount,children:[s.length," из"," ",E," ","символов (минимум"," ",H,")"]})]})]}),e.jsxs("div",{className:`${_.createOrderTechnicalInformationContainer__files}
              ${T.length?"":_.createOrderTechnicalInformationContainer__files__closed}`,children:[e.jsx("h6",{className:`${_.createOrderTechnicalInformationContainer__caption} 
                  ${_.createOrderTechnicalInformationContainer__files__caption} CreateOrderPage__caption`,children:"Загруженные файлы"}),e.jsx(me,{setInputFileProgress:R,InputFileProgress:Y,setInputFiles:S,files:T,indexedDBName:ne,indexedDBStore:N,indexedDB:w.current})]})]})]}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__agree,children:[e.jsx(oe,{isActive:p,onClick:()=>O(!p),isWarn:u&&!p}),e.jsx("p",{className:_.createOrderTechnicalInformationContainer__agree__text,children:"Предоставленная мной информация является точной и полной. Любые изменения требуют согласования с продавцом и могут потребовать дополнительной оплаты."})]}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__buttons,children:[e.jsx(W,{className:_.createOrderTechnicalInformationContainer__button,type:F.BLACK_WITHOUT_OUTLINE,text:"Заполнить позже"}),e.jsx(W,{className:_.createOrderTechnicalInformationContainer__button,type:F.RED,text:"Подтвердить",onClick:Q})]})]})})}),Yr="_orderInfo_d1na2_1",et="_orderInfo__header_d1na2_5",rt="_orderInfo__header__info_d1na2_11",tt="_orderInfo__img_d1na2_17",at="_orderInfo__title_d1na2_24",_t="_orderInfo__packName_d1na2_31",nt="_orderInfo__extraServices_d1na2_38",ot="_orderInfo__extraServices__items_d1na2_45",ct="_orderInfo__extra_d1na2_38",st="_orderInfo__extra__block_d1na2_58",it="_orderInfo__extra__text_d1na2_65",dt="_orderInfo__info_d1na2_68",lt="_orderInfo__info__title_d1na2_76",mt="_orderInfo__info__value_d1na2_83",pt="_orderInfo__info__item_d1na2_92",n={orderInfo:Yr,orderInfo__header:et,orderInfo__header__info:rt,orderInfo__img:tt,orderInfo__title:at,orderInfo__packName:_t,orderInfo__extraServices:nt,orderInfo__extraServices__items:ot,orderInfo__extra:ct,orderInfo__extra__block:st,orderInfo__extra__text:it,orderInfo__info:dt,orderInfo__info__title:lt,orderInfo__info__value:mt,orderInfo__info__item:pt};var j=(r=>(r.PROCESS="в процессе",r.CONTESTATION="Оспаривание",r))(j||{});const ft="_orderStatus_fzhy6_1",Ct="_orderStatus__process_fzhy6_15",ht="_orderStatus__contestation_fzhy6_18",A={orderStatus:ft,orderStatus__process:Ct,orderStatus__contestation:ht},ut=t.memo(({orderStatus:r})=>e.jsx("span",{className:`${A.orderStatus} 
        ${r==j.PROCESS?A.orderStatus__process:""}
        ${r==j.CONTESTATION?A.orderStatus__contestation:""}`,children:r})),xt=t.memo(({orderImgURL:r,orderTitle:a,orderPackName:s,extra:d,extraServices:l,orderStatus:C,orderDate:h,PerformerUsername:x,multiplier:p,price:O})=>e.jsxs("div",{className:`Page__SirineWrapper ${n.orderInfo}`,children:[e.jsxs("div",{className:n.orderInfo__header,children:[e.jsx("img",{className:n.orderInfo__img,src:r,alt:a}),e.jsxs("div",{className:n.orderInfo__header__info,children:[e.jsx("h6",{className:n.orderInfo__title,children:a}),e.jsxs("span",{className:n.orderInfo__packName,children:[s," пакет",d.map(u=>e.jsxs("span",{children:[" + ",u]},u))]})]})]}),e.jsxs("div",{className:n.orderInfo__extraServices,children:[e.jsx("div",{className:n.orderInfo__extraServices__items,children:e.jsx(Z,{ProjectActiveServices:l})}),d.map(u=>e.jsxs("div",{className:n.orderInfo__extra,children:[e.jsx("span",{className:n.orderInfo__extra__block}),e.jsx("span",{className:`Page__subcaption ${n.orderInfo__extra__text}`,children:u})]},u))]}),e.jsxs("div",{className:n.orderInfo__info,children:[e.jsxs("div",{className:n.orderInfo__info__item,children:[e.jsx("span",{className:n.orderInfo__info__title,children:"Статус"}),e.jsx(ut,{orderStatus:C})]}),e.jsxs("div",{className:n.orderInfo__info__item,children:[e.jsx("span",{className:n.orderInfo__info__title,children:"Исполнитель"}),e.jsx("span",{className:n.orderInfo__info__value,children:x})]}),e.jsxs("div",{className:n.orderInfo__info__item,children:[e.jsx("span",{className:n.orderInfo__info__title,children:"Дата заказа"}),e.jsx("span",{className:n.orderInfo__info__value,children:h})]}),e.jsxs("div",{className:n.orderInfo__info__item,children:[e.jsx("span",{className:n.orderInfo__info__title,children:"Кол-во"}),e.jsxs("span",{className:n.orderInfo__info__value,children:[p,"x"]})]}),e.jsxs("div",{className:n.orderInfo__info__item,children:[e.jsx("span",{className:n.orderInfo__info__title,children:"Цена"}),e.jsxs("span",{className:n.orderInfo__info__value,children:[O," Р"]})]})]})]})),Ot={orderImgURL:`${G}/global/images/portfolioCase__example_img.png`,orderTitle:"Дизайн инфографики для маркетплейсов.",orderPackName:M.BASE,extraServices:["Исходный файл","1 вариант дизайна","Ресайз"],extra:["Доп. редакции"],PerformerUsername:"@Bayandinrd",orderDate:"23.06.2024   15:34",multiplier:1,price:3e3},J=(r,a)=>U(r,z.CREATE_ORDER_STEP,a),Pt=t.memo(()=>{const{CreateOrderCompletedSteps:r}=t.useContext(L);return J(y.UPDATE,{CreateOrderActiveStep:m.TechnicalInformation,CreateOrderCompletedSteps:[...r,m.COST]}),e.jsxs("section",{className:b.createOrderTechnicalInformationContent,children:[e.jsx(wr,{}),e.jsxs("div",{className:b.createOrderTechnicalInformationContent__wrapper,children:[e.jsx(Xr,{}),e.jsxs("div",{className:b.createOrderTechnicalInformationContent__secondCol,children:[e.jsx(xt,{orderStatus:j.PROCESS,...Ot}),e.jsx(q,{})]})]})]})}),Ca=t.memo(()=>{t.useEffect(()=>{document.querySelector("html").classList.add("CreateOrderPage"),document.title="TeleWorks | Создание заказа"},[]);const r=J(y.GET),[a,s]=t.useState(r?r.CreateOrderActiveStep:m.COST),[d,l]=t.useState(r?r.CreateOrderCompletedSteps:[m.CREATE]),[C,h]=t.useState(!1);return t.useEffect(()=>{if(a!=m.COST&&!r){h(!0);const x=setTimeout(()=>{h(!1),clearTimeout(x)},$)}},[a,r]),e.jsx(L.Provider,{value:{CreateOrderActiveStep:a,setCreateOrderActiveStep:s,CreateOrderCompletedSteps:d,setCreateOrderCompletedSteps:l},children:e.jsx("main",{className:"Page CreateOrderPage__main",children:e.jsxs("div",{className:"padding",children:[e.jsx(ce,{}),e.jsx("div",{className:"CreateOrderPage__contentWrapper",children:e.jsx(Ce,{className:C?"CreateOrderPage__contentWrapper__blocks__disappear":"CreateOrderPage__contentWrapper__blocks",blocks:[{component:e.jsx(mr,{}),condition:a==m.COST,id:0},{component:e.jsx(Pt,{}),condition:a==m.TechnicalInformation,id:1}],transitionDuration:$,defaultIndex:a==m.COST?0:1})})]})})})});export{Ca as CreateOrderPage};
