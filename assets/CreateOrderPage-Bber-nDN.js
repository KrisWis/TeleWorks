import{r as a,j as e}from"./react-DeQkLUaO.js";import{g as M,h as R,I as ae,a as B,B as D,i as x,U as z,t as te,r as ne,F as _e,j as oe,C as ie,k as ce}from"./index-CrAeHjTC.js";import{P as Z,a as q,b as se,c as de}from"./ProjectInfo_pack-CCjB83aS.js";import{U as H,L as K,a as A}from"./LocalStorageKeys-BqTknQGS.js";import{P as le}from"./primereact-D8Ry6f3t.js";import"./@babel-DwB561Wj.js";import"./react-dom-DbQV3o1h.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-CGe9edbD.js";import"./react-router-bniHivmG.js";import"./@remix-run-BFLWy9pZ.js";import"./swiper-K_CVcj7O.js";import"./react-share-social-DtXElKm4.js";import"./@mui-CuzOq2Y2.js";import"./@emotion-NUrY0lBz.js";import"./hoist-non-react-statics-ReYkRdKN.js";import"./react-is-8JwjhRSi.js";import"./clsx-B-dksMZM.js";import"./react-transition-group-CFm1dlvq.js";import"./@popperjs-BQBsAJpH.js";import"./jss-plugin-rule-value-function-Co44F-YX.js";import"./jss-lo838h9F.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-grfLwx7Y.js";import"./jss-plugin-nested-SAqrbWKW.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-BoswCb4F.js";import"./jss-plugin-vendor-prefixer-DHD0hYrY.js";import"./css-vendor-BTBIfvAj.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-share-ZYH4y5bf.js";import"./classnames-DTKT5ssy.js";import"./jsonp-Daw0h_Hj.js";import"./styled-components-B3tFctLE.js";import"./tslib-B7u9K5VY.js";import"./stylis-DinRj2j6.js";import"./@reduxjs-WyyEZY-o.js";import"./redux-DITMfSWq.js";import"./immer-C45-hHMi.js";import"./reselect-BEFkisvr.js";import"./redux-thunk-ClJT1hhx.js";import"./react-redux-CzjF8Rum.js";import"./use-sync-external-store-ADGbT6CX.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-rwPTF4IE.js";import"./react-select-Cdzs2r-P.js";import"./@floating-ui-C-tNaP3a.js";import"./use-isomorphic-layout-effect-C00p5eHx.js";import"./memoize-one-BdPwpGay.js";const me="_createOrderCostContent_1qkit_1",pe="_createOrderCostContent__disappear_1qkit_10",fe="_createOrderCostContent__firstCol_1qkit_17",Ce="_createOrderCostContent__secondCol_1qkit_22",b={createOrderCostContent:me,createOrderCostContent__disappear:pe,createOrderCostContent__firstCol:fe,createOrderCostContent__secondCol:Ce},he="_createOrderCostPayment_13y9f_1",ue="_createOrderCostPayment__disappear_13y9f_7",Oe="_createOrderCostPayment__header_13y9f_10",xe="_createOrderCostPayment__header__caption_13y9f_16",Ie="_createOrderCostPayment__header__balance_13y9f_19",ve="_createOrderCostPayment__header__balance__text_13y9f_25",Pe="_createOrderCostPayment__header__balance__amount_13y9f_32",Te="_createOrderCostPayment__header__balance__amount__pennies_13y9f_39",ge="_createOrderCostPayment__cardChoice_13y9f_45",ye="_createOrderCostPayment__cardChoice__select_13y9f_51",je="_createOrderCostPayment__wrapper_13y9f_55",Se="_createOrderCostPayment__inputWrapper_13y9f_62",Fe="_createOrderCostPayment__inputWrapper__subcaption_13y9f_67",we="_createOrderCostPayment__inputWrapper__desc_13y9f_75",Ne="_createOrderCostPayment__pay_13y9f_83",Le="_createOrderCostPayment__writeSupport_13y9f_91",be="_createOrderCostPayment__writeSupport__icon_13y9f_99",We="_createOrderCostPayment__writeSupport__text_13y9f_114",d={createOrderCostPayment:he,createOrderCostPayment__disappear:ue,createOrderCostPayment__header:Oe,createOrderCostPayment__header__caption:xe,createOrderCostPayment__header__balance:Ie,createOrderCostPayment__header__balance__text:ve,createOrderCostPayment__header__balance__amount:Pe,createOrderCostPayment__header__balance__amount__pennies:Te,createOrderCostPayment__cardChoice:ge,createOrderCostPayment__cardChoice__select:ye,createOrderCostPayment__wrapper:je,createOrderCostPayment__inputWrapper:Se,createOrderCostPayment__inputWrapper__subcaption:Fe,createOrderCostPayment__inputWrapper__desc:we,createOrderCostPayment__pay:Ne,createOrderCostPayment__writeSupport:Le,createOrderCostPayment__writeSupport__icon:be,createOrderCostPayment__writeSupport__text:We},U=r=>!!r.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),Ae=a.memo(()=>{const[r,t]=a.useState(""),[i,s]=M(),l=a.useMemo(()=>U(r),[r]),{setCreateOrderActiveStep:u,setCreateOrderCompletedSteps:y,CreateOrderCompletedSteps:I}=a.useContext(R),v=()=>{u(x.TechnicalInformation),y(()=>[...I,x.COST])};return e.jsxs("div",{className:`Page__BoxShadowWrapper ${d.createOrderCostPayment}`,children:[e.jsxs("div",{className:d.createOrderCostPayment__header,children:[e.jsx("h6",{className:`CreateOrderPage__caption ${d.createOrderCostPayment__header__caption}`,children:"Оплата заказа"}),e.jsxs("div",{className:d.createOrderCostPayment__header__balance,children:[e.jsx("span",{className:d.createOrderCostPayment__header__balance__text,children:"Баланс TeleWorks"}),e.jsxs("span",{className:d.createOrderCostPayment__header__balance__amount,children:["120000",e.jsx("span",{className:d.createOrderCostPayment__header__balance__amount__pennies,children:".00"}),"₽"]})]})]}),e.jsxs("div",{className:d.createOrderCostPayment__wrapper,children:[e.jsxs("div",{className:d.createOrderCostPayment__inputWrapper,children:[e.jsx("span",{className:d.createOrderCostPayment__inputWrapper__subcaption,children:"Ваш e-mail"}),e.jsx(ae,{type:"email",value:r,onChange:f=>t(f.target.value),isWarn:!U(r)&&i}),e.jsx("span",{className:d.createOrderCostPayment__inputWrapper__desc,children:"На данный e-mail вышлем чек об оплате."})]}),e.jsx(B,{className:d.createOrderCostPayment__pay,type:D.RED,text:"Оплатить 6000 ₽ ",onClick:l?v:()=>s(!0)}),e.jsxs("span",{className:d.createOrderCostPayment__writeSupport,children:[e.jsx("span",{className:d.createOrderCostPayment__writeSupport__icon,children:"?"}),e.jsx("a",{href:"https://t.me/TeleWorksSupportbot",className:d.createOrderCostPayment__writeSupport__text,children:"Написать в поддержку"})]})]})]})}),Ee=6e3,Re="_orderSecurityGuarantee_16grc_1",$e="_orderSecurityGuarantee__header_16grc_6",ke="_orderSecurityGuarantee__svg_16grc_10",Be="_orderSecurityGuarantee__title_16grc_14",De="_orderSecurityGuarantee__text_16grc_21",N={orderSecurityGuarantee:Re,orderSecurityGuarantee__header:$e,orderSecurityGuarantee__svg:ke,orderSecurityGuarantee__title:Be,orderSecurityGuarantee__text:De},Ge=r=>a.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},a.createElement("g",{clipPath:"url(#clip0_280_1929)"},a.createElement("path",{d:"M15 21.1553L20 19.2803L25 21.1553V25.0468C25 26.9406 23.93 28.6719 22.236 29.5188L20 30.6369L17.7639 29.5188C16.07 28.6719 15 26.9406 15 25.0468V21.1553Z",fill:"#FF5555"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.1703 8.6595C20.4158 8.37652 19.5842 8.37652 18.8297 8.6595L7.16292 13.0345C5.86192 13.5224 5 14.7661 5 16.1556V25.0935C5 30.775 8.21003 35.969 13.2918 38.5098L18.882 41.305C19.5858 41.6568 20.4142 41.6568 21.118 41.305L26.7082 38.5098C31.79 35.969 35 30.775 35 25.0935V16.1556C35 14.7661 34.1382 13.5224 32.837 13.0345L21.1703 8.6595ZM20.8777 16.05C20.3117 15.8378 19.688 15.8378 19.122 16.05L13.2886 18.2375C12.3129 18.6034 11.6665 19.5362 11.6665 20.5783V25.0473C11.6665 28.2037 13.4498 31.0892 16.273 32.5008L19.0682 33.8983C19.6547 34.1917 20.345 34.1917 20.9315 33.8983L23.7265 32.5008C26.5498 31.0892 28.3332 28.2037 28.3332 25.0473V20.5783C28.3332 19.5362 27.6867 18.6034 26.711 18.2375L20.8777 16.05Z",fill:"#FF5555"})),a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_280_1929"},a.createElement("rect",{width:40,height:40,fill:"white"})))),J=a.memo(()=>e.jsxs("div",{className:`${N.orderSecurityGuarantee} Page__SirineWrapper`,children:[e.jsxs("div",{className:N.orderSecurityGuarantee__header,children:[e.jsx(Ge,{className:N.orderSecurityGuarantee__svg}),e.jsx("h6",{className:N.orderSecurityGuarantee__title,children:"Гарантия безопасности заказа"})]}),e.jsx("p",{className:N.orderSecurityGuarantee__text,children:"Ваши средства под защитой TeleWorks на время выполнения заказа. Продавец получает оплату после того, как вы проверите и примите заказ. Гарантия возврата 100% в случае просрочки или невыполнения заказа."})]})),ze="_orderPreview_ebxn0_1",Ue="_orderPreview__header_ebxn0_5",Ve="_orderPreview__headerWrapper_ebxn0_10",Me="_orderPreview__finalPrice_ebxn0_16",Ze="_orderPreview__desc_ebxn0_23",qe="_orderPreview__project_ebxn0_33",He="_orderPreview__project__img_ebxn0_40",Ke="_orderPreview__project__info_ebxn0_47",Je="_orderPreview__project__info__footer_ebxn0_52",Qe="_orderPreview__project__title_ebxn0_57",Xe="_orderPreview__project__multiplier_ebxn0_64",Ye="_orderPreview__project__price_ebxn0_72",er="_orderPreview__wrapper_ebxn0_79",rr="_orderPreview__wrapper_padding_ebxn0_83",ar="_orderPreview__extra_ebxn0_89",tr="_orderPreview__extraWrapper_ebxn0_94",nr="_orderPreview__extra__title_ebxn0_99",_r="_orderPreview__extra__titleWrapper_ebxn0_107",or="_orderPreview__extra__title__block_ebxn0_112",ir="_orderPreview__extra__price_ebxn0_119",c={orderPreview:ze,orderPreview__header:Ue,orderPreview__headerWrapper:Ve,orderPreview__finalPrice:Me,orderPreview__desc:Ze,orderPreview__project:qe,orderPreview__project__img:He,orderPreview__project__info:Ke,orderPreview__project__info__footer:Je,orderPreview__project__title:Qe,orderPreview__project__multiplier:Xe,orderPreview__project__price:Ye,orderPreview__wrapper:er,orderPreview__wrapper_padding:rr,orderPreview__extra:ar,orderPreview__extraWrapper:tr,orderPreview__extra__title:nr,orderPreview__extra__titleWrapper:_r,orderPreview__extra__title__block:or,orderPreview__extra__price:ir},h={packName:Z.BASE,projectTitle:"Дизайн инфографики для маркетплейсов.",multiplier:1,projectPrice:3e3,extraServices:["Исходный файл","1 вариант дизайна","Ресайз"],deadline:"1 день",editionsAmount:3,extra:[{title:"Доп. редакции",price:3e3}],projectImgURL:`${z}/global/images/serviceExample_img.png`},cr=a.memo(({FinalPrice:r})=>e.jsxs("div",{className:`Page__SirineWrapper ${c.orderPreview}`,children:[e.jsxs("div",{className:c.orderPreview__header,children:[e.jsxs("div",{className:c.orderPreview__headerWrapper,children:[e.jsx("span",{className:"CreateOrderPage__caption",children:"Итого"}),e.jsxs("span",{className:c.orderPreview__finalPrice,children:[r," ₽"]})]}),e.jsxs("span",{className:c.orderPreview__desc,children:[h.packName," пакет",h.extra.map(t=>e.jsxs("span",{children:[" + ",t.title]},t.title))]})]}),e.jsxs("div",{className:c.orderPreview__project,children:[e.jsx("img",{className:c.orderPreview__project__img,src:h.projectImgURL,alt:h.projectTitle}),e.jsxs("div",{className:c.orderPreview__project__info,children:[e.jsx("h6",{className:c.orderPreview__project__title,children:h.projectTitle}),e.jsxs("div",{className:c.orderPreview__project__info__footer,children:[e.jsxs("span",{className:c.orderPreview__project__multiplier,children:[h.multiplier,"x"]}),e.jsxs("span",{className:c.orderPreview__project__price,children:[h.projectPrice," ₽"]})]})]})]}),e.jsx("div",{className:c.orderPreview__wrapper,children:e.jsxs("div",{className:c.orderPreview__wrapper_padding,children:[e.jsx(q,{ProjectActiveServices:h.extraServices}),e.jsx(se,{deadline:h.deadline}),e.jsx(de,{editionsAmount:h.editionsAmount})]})}),e.jsx("div",{className:c.orderPreview__extraWrapper,children:h.extra.map(t=>e.jsxs("div",{className:c.orderPreview__extra,children:[e.jsxs("div",{className:c.orderPreview__extra__titleWrapper,children:[e.jsx("div",{className:c.orderPreview__extra__title__block}),e.jsx("span",{className:c.orderPreview__extra__title,children:t.title})]}),e.jsxs("span",{className:c.orderPreview__extra__price,children:[t.price," ₽"]})]},t.title))})]})),sr=a.memo(()=>{const{CreateOrderActiveStep:r}=a.useContext(R),[t,i]=a.useState(!0),s=a.useRef();return a.useEffect(()=>{r==x.TechnicalInformation&&(s.current=setTimeout(()=>{i(!1)},700))},[r]),a.useEffect(()=>()=>{clearTimeout(s.current)},[]),e.jsx(e.Fragment,{children:t&&e.jsxs("section",{className:`${b.createOrderCostContent}
      ${r==x.TechnicalInformation?b.createOrderCostContent__disappear:""}`,children:[e.jsx("div",{className:b.createOrderCostContent__firstCol,children:e.jsx(Ae,{})}),e.jsxs("div",{className:b.createOrderCostContent__secondCol,children:[e.jsx(cr,{FinalPrice:Ee}),e.jsx(J,{})]})]})})}),dr="_createOrderTechnicalInformationContent_1c70l_1",lr="_createOrderTechnicalInformationContent__appear_1c70l_12",mr="_createOrderTechnicalInformationContent__wrapper_1c70l_18",pr="_createOrderTechnicalInformationContent__secondCol_1c70l_24",W={createOrderTechnicalInformationContent:dr,createOrderTechnicalInformationContent__appear:lr,createOrderTechnicalInformationContent__wrapper:mr,createOrderTechnicalInformationContent__secondCol:pr},fr="_orderSuccessfullyPaid_1gqgu_1",Cr="_orderSuccessfullyPaid__paddingWrapper_1gqgu_8",hr="_orderSuccessfullyPaid__closed_1gqgu_14",ur="_orderSuccessfullyPaid__body_1gqgu_18",Or="_orderSuccessfullyPaid__title_1gqgu_23",xr="_orderSuccessfullyPaid__text_1gqgu_30",Ir="_orderSuccessfullyPaid__textWrapper_1gqgu_38",vr="_orderSuccessfullyPaid__svg_1gqgu_42",Pr="_orderSuccessfullyPaid__close_1gqgu_14",O={orderSuccessfullyPaid:fr,orderSuccessfullyPaid__paddingWrapper:Cr,orderSuccessfullyPaid__closed:hr,orderSuccessfullyPaid__body:ur,orderSuccessfullyPaid__title:Or,orderSuccessfullyPaid__text:xr,orderSuccessfullyPaid__textWrapper:Ir,orderSuccessfullyPaid__svg:vr,orderSuccessfullyPaid__close:Pr},Tr=r=>a.createElement("svg",{width:53,height:41,viewBox:"0 0 53 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},a.createElement("path",{d:"M46.5234 1.20662L19.0415 31.0527L6.4766 17.4071C4.99485 15.7982 2.59284 15.7982 1.11109 17.4071C-0.370362 19.0163 -0.370362 21.6249 1.11109 23.2341L16.3587 39.7933C17.0996 40.5975 18.0705 41 19.0415 41C20.0124 41 20.9833 40.5975 21.7242 39.7933L51.8889 7.03397C53.3704 5.42476 53.3704 2.81615 51.8889 1.20694C50.4072 -0.40226 48.0048 -0.40226 46.5234 1.20662Z",fill:"#FF5555"})),gr=r=>a.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.0085 2.75901C19.2362 2.52326 19.3622 2.20751 19.3593 1.87976C19.3565 1.55202 19.225 1.2385 18.9933 1.00674C18.7615 0.774982 18.448 0.64352 18.1202 0.640672C17.7925 0.637824 17.4767 0.763818 17.241 0.991515L9.99973 8.23276L2.75848 0.991515C2.52273 0.763818 2.20698 0.637824 1.87923 0.640672C1.55149 0.64352 1.23797 0.774982 1.00621 1.00674C0.774452 1.2385 0.64299 1.55202 0.640142 1.87976C0.637294 2.20751 0.763288 2.52326 0.990985 2.75901L8.23223 10.0003L0.990985 17.2415C0.871598 17.3568 0.77637 17.4948 0.710859 17.6473C0.645347 17.7998 0.610864 17.9638 0.609422 18.1298C0.60798 18.2957 0.639607 18.4603 0.702458 18.614C0.765309 18.7676 0.858125 18.9071 0.975491 19.0245C1.09286 19.1419 1.23242 19.2347 1.38604 19.2975C1.53966 19.3604 1.70426 19.392 1.87024 19.3906C2.03621 19.3891 2.20024 19.3547 2.35274 19.2891C2.50525 19.2236 2.64318 19.1284 2.75848 19.009L9.99973 11.7678L17.241 19.009C17.4767 19.2367 17.7925 19.3627 18.1202 19.3599C18.448 19.357 18.7615 19.2255 18.9933 18.9938C19.225 18.762 19.3565 18.4485 19.3593 18.1208C19.3622 17.793 19.2362 17.4773 19.0085 17.2415L11.7672 10.0003L19.0085 2.75901Z",fill:"#FF5555"})),yr=a.memo(()=>{const[r,t]=a.useState(!1),[i,s]=a.useState(!0),l=a.useRef();return a.useEffect(()=>(r&&(l.current=setTimeout(()=>{s(!1)},te)),()=>{clearTimeout(l.current)}),[r]),e.jsx(e.Fragment,{children:i&&e.jsx("div",{className:`Page__SirineWrapper ${O.orderSuccessfullyPaid} 
    ${r?O.orderSuccessfullyPaid__closed:""}`,children:e.jsxs("div",{className:O.orderSuccessfullyPaid__paddingWrapper,children:[e.jsxs("div",{className:O.orderSuccessfullyPaid__body,children:[e.jsx("div",{className:O.orderSuccessfullyPaid__svg,children:e.jsx(Tr,{})}),e.jsxs("div",{className:O.orderSuccessfullyPaid__textWrapper,children:[e.jsx("h6",{className:O.orderSuccessfullyPaid__title,children:"Заказ успешно оплачен"}),e.jsx("span",{className:O.orderSuccessfullyPaid__text,children:"Чек об оплате направим на вашу эл.почту"})]})]}),e.jsx(gr,{onClick:()=>t(!0),className:O.orderSuccessfullyPaid__close})]})})})}),jr="_createOrderTechnicalInformationContainer_10vmc_1",Sr="_createOrderTechnicalInformationContainer__wrapper_10vmc_6",Fr="_createOrderTechnicalInformationContainer__caption_10vmc_11",wr="_createOrderTechnicalInformationContainer__form_10vmc_14",Nr="_createOrderTechnicalInformationContainer__form__steps_10vmc_20",Lr="_createOrderTechnicalInformationContainer__form__step_10vmc_20",br="_createOrderTechnicalInformationContainer__form__step__desc_10vmc_30",Wr="_createOrderTechnicalInformationContainer__form__textarea_10vmc_38",Ar="_createOrderTechnicalInformationContainer__form__textarea__warn_10vmc_53",Er="_createOrderTechnicalInformationContainer__form__textareaWrapper_10vmc_56",Rr="_createOrderTechnicalInformationContainer__form__textareaFooter_10vmc_62",$r="_createOrderTechnicalInformationContainer__form__attachFiles_10vmc_68",kr="_createOrderTechnicalInformationContainer__form__attachFilesWrapper_10vmc_73",Br="_createOrderTechnicalInformationContainer__form__attachFiles__text_10vmc_80",Dr="_createOrderTechnicalInformationContainer__form__attachFiles__input_10vmc_87",Gr="_createOrderTechnicalInformationContainer__form__symbolsAmount_10vmc_97",zr="_createOrderTechnicalInformationContainer__files_10vmc_105",Ur="_createOrderTechnicalInformationContainer__files__loadingProgressBar_10vmc_117",Vr="_createOrderTechnicalInformationContainer__files__caption_10vmc_126",Mr="_createOrderTechnicalInformationContainer__files__items_10vmc_129",Zr="_createOrderTechnicalInformationContainer__files__closed_10vmc_133",qr="_createOrderTechnicalInformationContainer__agree_10vmc_138",Hr="_createOrderTechnicalInformationContainer__agree__text_10vmc_143",Kr="_createOrderTechnicalInformationContainer__buttons_10vmc_150",Jr="_createOrderTechnicalInformationContainer__button_10vmc_150",n={createOrderTechnicalInformationContainer:jr,createOrderTechnicalInformationContainer__wrapper:Sr,createOrderTechnicalInformationContainer__caption:Fr,createOrderTechnicalInformationContainer__form:wr,createOrderTechnicalInformationContainer__form__steps:Nr,createOrderTechnicalInformationContainer__form__step:Lr,createOrderTechnicalInformationContainer__form__step__desc:br,createOrderTechnicalInformationContainer__form__textarea:Wr,createOrderTechnicalInformationContainer__form__textarea__warn:Ar,createOrderTechnicalInformationContainer__form__textareaWrapper:Er,createOrderTechnicalInformationContainer__form__textareaFooter:Rr,createOrderTechnicalInformationContainer__form__attachFiles:$r,createOrderTechnicalInformationContainer__form__attachFilesWrapper:kr,createOrderTechnicalInformationContainer__form__attachFiles__text:Br,createOrderTechnicalInformationContainer__form__attachFiles__input:Dr,createOrderTechnicalInformationContainer__form__symbolsAmount:Gr,createOrderTechnicalInformationContainer__files:zr,createOrderTechnicalInformationContainer__files__loadingProgressBar:Ur,createOrderTechnicalInformationContainer__files__caption:Vr,createOrderTechnicalInformationContainer__files__items:Mr,createOrderTechnicalInformationContainer__files__closed:Zr,createOrderTechnicalInformationContainer__agree:qr,createOrderTechnicalInformationContainer__agree__text:Hr,createOrderTechnicalInformationContainer__buttons:Kr,createOrderTechnicalInformationContainer__button:Jr},Qr=r=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},a.createElement("path",{d:"M4.06073 23.0855C3.04534 23.0855 2.06963 22.6674 1.29236 21.8931C-0.430662 20.1722 -0.430662 17.3738 1.29161 15.6537L14.7298 1.45109C16.8265 -0.638642 20.0382 -0.45158 22.382 1.88484C23.4318 2.93194 24.0211 4.44186 23.9994 6.02779C23.9777 7.59807 23.3614 9.10053 22.3078 10.1499L12.1517 20.9108C11.8694 21.2119 11.3946 21.2261 11.0936 20.9436C10.7926 20.6611 10.7783 20.1879 11.0614 19.8876L21.2333 9.11022C22.0293 8.31651 22.4853 7.19115 22.5025 6.00692C22.5198 4.82269 22.0892 3.70404 21.3239 2.94088C19.8862 1.50699 17.5454 0.755756 15.8051 2.49223L2.36766 16.6948C1.21224 17.8478 1.21299 19.6997 2.35268 20.837C2.88734 21.3699 3.52233 21.6292 4.19776 21.5883C4.86645 21.5473 5.55387 21.2067 6.13345 20.6284L16.8258 9.30175C17.2129 8.9157 17.9924 7.96772 17.1994 7.17699C16.7509 6.72909 16.4356 6.75741 16.3316 6.7656C16.0358 6.79169 15.6891 6.99589 15.3304 7.35437L7.28213 15.8728C6.99758 16.1739 6.52358 16.188 6.22331 15.9048C5.92228 15.6224 5.90806 15.1491 6.19186 14.8495L14.2543 6.31472C14.8878 5.68049 15.5363 5.33692 16.196 5.27805C16.7112 5.23259 17.4765 5.34139 18.2575 6.12095C19.4167 7.27686 19.2722 8.97234 17.9003 10.3414L7.208 21.6673C6.35435 22.5198 5.32323 23.0147 4.28912 23.0781C4.21349 23.0833 4.13636 23.0855 4.06073 23.0855Z",fill:"#FF5555"})),Xr="_CreateOrderTechnicalInformationLoadedFile_1b795_1",Yr="_CreateOrderTechnicalInformationLoadedFile__info_1b795_9",ea="_CreateOrderTechnicalInformationLoadedFile__infoWrapper_1b795_15",ra="_CreateOrderTechnicalInformationLoadedFile__img_1b795_20",aa="_CreateOrderTechnicalInformationLoadedFile__video_1b795_29",ta="_CreateOrderTechnicalInformationLoadedFile__iconFile_1b795_34",na="_CreateOrderTechnicalInformationLoadedFile__size_1b795_38",_a="_CreateOrderTechnicalInformationLoadedFile__caption_1b795_46",oa="_CreateOrderTechnicalInformationLoadedFile__buttons_1b795_52",ia="_CreateOrderTechnicalInformationLoadedFile__change_1b795_59",ca="_CreateOrderTechnicalInformationLoadedFile__delete_1b795_59",sa="_CreateOrderTechnicalInformationLoadedFile__changeWrapper_1b795_66",da="_CreateOrderTechnicalInformationLoadedFile__deleteWrapper_1b795_66",la="_CreateOrderTechnicalInformationLoadedFile__changeWrapper__input_1b795_69",ma="_CreateOrderTechnicalInformationLoadedFile__deleteWrapper__input_1b795_69",m={CreateOrderTechnicalInformationLoadedFile:Xr,CreateOrderTechnicalInformationLoadedFile__info:Yr,CreateOrderTechnicalInformationLoadedFile__infoWrapper:ea,CreateOrderTechnicalInformationLoadedFile__img:ra,CreateOrderTechnicalInformationLoadedFile__video:aa,CreateOrderTechnicalInformationLoadedFile__iconFile:ta,CreateOrderTechnicalInformationLoadedFile__size:na,CreateOrderTechnicalInformationLoadedFile__caption:_a,CreateOrderTechnicalInformationLoadedFile__buttons:oa,CreateOrderTechnicalInformationLoadedFile__change:ia,CreateOrderTechnicalInformationLoadedFile__delete:ca,CreateOrderTechnicalInformationLoadedFile__changeWrapper:sa,CreateOrderTechnicalInformationLoadedFile__deleteWrapper:da,CreateOrderTechnicalInformationLoadedFile__changeWrapper__input:la,CreateOrderTechnicalInformationLoadedFile__deleteWrapper__input:ma},pa=r=>a.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},a.createElement("g",{clipPath:"url(#clip0_280_2120)"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.0293 1.17417C12.2971 0.441943 11.1099 0.441941 10.3776 1.17417L1.52916 10.0227C1.26741 10.2844 1.08899 10.6178 1.0164 10.9808L0.649481 12.8154C0.474551 13.69 1.2457 14.4612 2.12035 14.2863L3.95494 13.9193C4.31792 13.8468 4.65129 13.6683 4.91304 13.4066L13.7615 4.55806C14.4938 3.82582 14.4938 2.63864 13.7615 1.90641L13.0293 1.17417ZM11.2615 2.05806C11.5056 1.81398 11.9013 1.81398 12.1454 2.05806L12.8776 2.79029C13.1218 3.03437 13.1218 3.43009 12.8776 3.67417L11.2079 5.34392L9.59182 3.7278L11.2615 2.05806ZM8.70789 4.61169L2.41304 10.9066C2.32579 10.9938 2.26632 11.1049 2.24212 11.2259L1.87521 13.0605L3.70979 12.6936C3.83079 12.6694 3.94191 12.6099 4.02916 12.5227L10.324 6.2278L8.70789 4.61169Z",fill:"#FF5555"})),a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_280_2120"},a.createElement("rect",{width:15,height:15,fill:"white"})))),fa=r=>a.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.7193 1.69471C14.9014 1.50611 15.0022 1.25351 15 0.991311C14.9977 0.729114 14.8925 0.478302 14.7071 0.292893C14.5217 0.107485 14.2709 0.00231622 14.0087 3.78025e-05C13.7465 -0.00224062 13.4939 0.0985542 13.3053 0.280712L7.51229 6.07371L1.71929 0.280712C1.53069 0.0985542 1.27808 -0.00224062 1.01589 3.78025e-05C0.75369 0.00231622 0.502878 0.107485 0.31747 0.292893C0.132062 0.478302 0.0268924 0.729114 0.0246139 0.991311C0.0223355 1.25351 0.12313 1.50611 0.305288 1.69471L6.09829 7.48771L0.305288 13.2807C0.209778 13.373 0.133596 13.4833 0.0811869 13.6053C0.0287779 13.7273 0.00119157 13.8585 3.7757e-05 13.9913C-0.00111606 14.1241 0.0241854 14.2558 0.0744663 14.3787C0.124747 14.5016 0.199 14.6132 0.292893 14.7071C0.386786 14.801 0.498438 14.8753 0.621334 14.9255C0.74423 14.9758 0.87591 15.0011 1.00869 15C1.14147 14.9988 1.27269 14.9712 1.39469 14.9188C1.5167 14.8664 1.62704 14.7902 1.71929 14.6947L7.51229 8.90171L13.3053 14.6947C13.4939 14.8769 13.7465 14.9777 14.0087 14.9754C14.2709 14.9731 14.5217 14.8679 14.7071 14.6825C14.8925 14.4971 14.9977 14.2463 15 13.9841C15.0022 13.7219 14.9014 13.4693 14.7193 13.2807L8.92629 7.48771L14.7193 1.69471Z",fill:"#FF5555"})),Ca=a.memo(({loadedFile:r,FormInputFiles:t,setFormInputFiles:i,setFormInputFileProgress:s})=>{const l=a.useRef(null),u=f=>{const o=f.target.files;if(o&&o.length&&!t.find(C=>C.FileName==o[0].name)){const C=new FileReader;C.onprogress=g=>{if(g.lengthComputable){const L=Math.round(g.loaded/g.total*100);s(L)}};const P=t.slice(),T=t.slice(),j=P.findIndex(g=>r.FileName===g.FileName);T[j]={FileData:"",FileName:"",FileSize:0,FileType:""},i(T),P[j].FileName=o[0].name,P[j].FileSize=o[0].size,P[j].FileType=o[0].type,C.onload=function(){P[j].FileData=C.result,i(P)},C.readAsDataURL(o[0])}},y=()=>{const f=t.slice(),o=f.findIndex(C=>r.FileName===C.FileName);f.splice(o,1),i(f)},I=r.FileType.split("/")[0]=="image",v=r.FileType.split("/")[0]=="video";return e.jsxs("div",{className:m.CreateOrderTechnicalInformationLoadedFile,children:[e.jsxs("div",{className:m.CreateOrderTechnicalInformationLoadedFile__info,children:[I?e.jsx("img",{className:m.CreateOrderTechnicalInformationLoadedFile__img,src:r.FileData,alt:r.FileName}):v?e.jsx("video",{className:m.CreateOrderTechnicalInformationLoadedFile__video,src:r.FileData,controls:!0}):e.jsx("img",{className:m.CreateOrderTechnicalInformationLoadedFile__iconFile,src:`${z}/CreateOrderPage/CreateOrderTechnicalInformationLoadedFile/file.png`,alt:r.FileName}),e.jsxs("div",{className:m.CreateOrderTechnicalInformationLoadedFile__infoWrapper,children:[e.jsx("span",{className:`CreateOrderPage__caption ${m.CreateOrderTechnicalInformationLoadedFile__caption}`,children:r.FileName}),e.jsxs("span",{className:m.CreateOrderTechnicalInformationLoadedFile__size,children:[(r.FileSize/1048576).toFixed(1)," Мб"]})]})]}),e.jsxs("div",{className:m.CreateOrderTechnicalInformationLoadedFile__buttons,children:[e.jsxs("div",{className:m.CreateOrderTechnicalInformationLoadedFile__changeWrapper,children:[e.jsx("input",{className:m.CreateOrderTechnicalInformationLoadedFile__changeWrapper__input,type:"file",name:"createOrderTechnicalInformationContainer_changeFiles_input",ref:l,onChange:u}),e.jsx(pa,{className:m.CreateOrderTechnicalInformationLoadedFile__change})]}),e.jsx("div",{className:m.CreateOrderTechnicalInformationLoadedFile__deleteWrapper,onClick:y,children:e.jsx(fa,{className:m.CreateOrderTechnicalInformationLoadedFile__delete})})]})]})}),G=1200,Q=100,X=r=>!(r.length>G||r.length<Q),ha=(r,t)=>!(!X(r)||!t),V=(r,t)=>H(r,K.CREATE_ORDER_TECHNICAL_INFORMATION_CONTAINER_FORM,t),ua=a.memo(()=>{const r=a.useRef(null),t=V(A.GET),[i,s]=a.useState(t||""),[l,u]=a.useState(!1),y=S=>{const p=S.target.value;V(A.UPDATE,p),p.length<=G?(s(p),u(!1)):u(!0),r.current&&(r.current.style.height="1px"),r.current&&p.length>450&&p.length<=1201&&(r.current.style.height=1+r.current.scrollHeight+"px")},[I,v]=a.useState(0),f=a.useRef(null),[o,C]=a.useState([]),P=S=>{const p=S.target.files,w={FileData:"",FileName:"",FileSize:0,FileType:""};if(p&&p.length&&!o.find(F=>F.FileName==p[0].name)){C([...o,{FileData:"",FileName:"",FileSize:0,FileType:""}]);const F=new FileReader;w.FileName=p[0].name,w.FileSize=p[0].size,w.FileType=p[0].type,F.onprogress=$=>{if($.lengthComputable){const re=Math.round($.loaded/$.total*100);v(re)}},F.onload=function(){w.FileData=F.result,C([...o,w]),f.current.files=null},F.readAsDataURL(p[0])}},[T,j]=a.useState(!1),[g,L]=M(),ee=a.useCallback(()=>{ha(i,T)?ne("/"):L(!0)},[T,i,L]);return e.jsxs("div",{className:`${n.createOrderTechnicalInformationContainer} createOrderTechnicalInformationContainer`,children:[e.jsxs("div",{className:`Page__BoxShadowWrapper ${n.createOrderTechnicalInformationContainer__wrapper}`,children:[e.jsx("div",{className:n.createOrderTechnicalInformationContainer__header,children:e.jsx("h6",{className:`${n.createOrderTechnicalInformationContainer__caption} CreateOrderPage__caption`,children:"Материалы для работы"})}),e.jsxs("div",{className:n.createOrderTechnicalInformationContainer__form,children:[e.jsx("span",{className:"CreateOrderPage__caption",children:"Исполнителю для создание проекта, понадобится:"}),e.jsxs("ul",{className:n.createOrderTechnicalInformationContainer__form__steps,children:[e.jsxs("li",{className:n.createOrderTechnicalInformationContainer__form__step,children:[e.jsx("span",{className:"CreateOrderPage__subcaption",children:"1. Исходные фото"}),e.jsx("p",{className:n.createOrderTechnicalInformationContainer__form__step__desc,children:"Пожалуйста, проверьте качество фото"})]}),e.jsx("li",{className:n.createOrderTechnicalInformationContainer__form__step,children:e.jsx("span",{className:"CreateOrderPage__subcaption",children:"2. Техническое задание"})})]}),e.jsxs("div",{className:n.createOrderTechnicalInformationContainer__form__textareaWrapper,children:[e.jsx("textarea",{ref:r,className:`${n.createOrderTechnicalInformationContainer__form__textarea}
                ${l||g&&!X(i)?n.createOrderTechnicalInformationContainer__form__textarea__warn:""}`,name:"createOrderTechnicalInformationContainer__form__textarea",value:i,onChange:y}),e.jsxs("div",{className:n.createOrderTechnicalInformationContainer__form__textareaFooter,children:[e.jsxs("div",{className:n.createOrderTechnicalInformationContainer__form__attachFilesWrapper,children:[e.jsx("input",{className:n.createOrderTechnicalInformationContainer__form__attachFiles__input,type:"file",name:"createOrderTechnicalInformationContainer_loadFiles_input",ref:f,onChange:P}),e.jsxs("div",{className:n.createOrderTechnicalInformationContainer__form__attachFiles,children:[e.jsx(Qr,{}),e.jsx("span",{className:n.createOrderTechnicalInformationContainer__form__attachFiles__text,children:"Прикрепить файл"})]})]}),e.jsxs("span",{className:n.createOrderTechnicalInformationContainer__form__symbolsAmount,children:[i.length," из"," ",G," ","символов (минимум"," ",Q,")"]})]})]}),e.jsxs("div",{className:`${n.createOrderTechnicalInformationContainer__files}
              ${o.length?"":n.createOrderTechnicalInformationContainer__files__closed}`,children:[e.jsx("h6",{className:`${n.createOrderTechnicalInformationContainer__caption} 
                  ${n.createOrderTechnicalInformationContainer__files__caption} CreateOrderPage__caption`,children:"Загруженные файлы"}),o&&e.jsx("div",{className:n.createOrderTechnicalInformationContainer__files__items,children:o.map(S=>e.jsx("div",{children:S.FileName!=""?e.jsx(Ca,{loadedFile:S,FormInputFiles:o,setFormInputFiles:C,setFormInputFileProgress:v}):e.jsxs(_e,{gap:"5",direction:"column",children:[e.jsx(oe,{style:{margin:"auto",marginBottom:"1%"},size:"small"}),e.jsx(le,{style:{width:`${I}%`},className:n.createOrderTechnicalInformationContainer__files__loadingProgressBar,value:I})]})},S.FileName))})]})]})]}),e.jsxs("div",{className:n.createOrderTechnicalInformationContainer__agree,children:[e.jsx(ie,{isActive:T,onClick:()=>j(!T),isWarn:g&&!T}),e.jsx("p",{className:n.createOrderTechnicalInformationContainer__agree__text,children:"Предоставленная мной информация является точной и полной. Любые изменения требуют согласования с продавцом и могут потребовать дополнительной оплаты."})]}),e.jsxs("div",{className:n.createOrderTechnicalInformationContainer__buttons,children:[e.jsx(B,{className:n.createOrderTechnicalInformationContainer__button,type:D.BLACK_WITHOUT_OUTLINE,text:"Заполнить позже"}),e.jsx(B,{className:n.createOrderTechnicalInformationContainer__button,type:D.RED,text:"Подтвердить",onClick:ee})]})]})}),Oa="_orderInfo_d1na2_1",xa="_orderInfo__header_d1na2_5",Ia="_orderInfo__header__info_d1na2_11",va="_orderInfo__img_d1na2_17",Pa="_orderInfo__title_d1na2_24",Ta="_orderInfo__packName_d1na2_31",ga="_orderInfo__extraServices_d1na2_38",ya="_orderInfo__extraServices__items_d1na2_45",ja="_orderInfo__extra_d1na2_38",Sa="_orderInfo__extra__block_d1na2_58",Fa="_orderInfo__extra__text_d1na2_65",wa="_orderInfo__info_d1na2_68",Na="_orderInfo__info__title_d1na2_76",La="_orderInfo__info__value_d1na2_83",ba="_orderInfo__info__item_d1na2_92",_={orderInfo:Oa,orderInfo__header:xa,orderInfo__header__info:Ia,orderInfo__img:va,orderInfo__title:Pa,orderInfo__packName:Ta,orderInfo__extraServices:ga,orderInfo__extraServices__items:ya,orderInfo__extra:ja,orderInfo__extra__block:Sa,orderInfo__extra__text:Fa,orderInfo__info:wa,orderInfo__info__title:Na,orderInfo__info__value:La,orderInfo__info__item:ba};var E=(r=>(r.PROCESS="в процессе",r.CONTESTATION="Оспаривание",r))(E||{});const Wa="_orderStatus_fzhy6_1",Aa="_orderStatus__process_fzhy6_15",Ea="_orderStatus__contestation_fzhy6_18",k={orderStatus:Wa,orderStatus__process:Aa,orderStatus__contestation:Ea},Ra=a.memo(({orderStatus:r})=>e.jsx("span",{className:`${k.orderStatus} 
        ${r==E.PROCESS?k.orderStatus__process:""}
        ${r==E.CONTESTATION?k.orderStatus__contestation:""}`,children:r})),$a=a.memo(({orderImgURL:r,orderTitle:t,orderPackName:i,extra:s,extraServices:l,orderStatus:u,orderDate:y,PerformerUsername:I,multiplier:v,price:f})=>e.jsxs("div",{className:`Page__SirineWrapper ${_.orderInfo}`,children:[e.jsxs("div",{className:_.orderInfo__header,children:[e.jsx("img",{className:_.orderInfo__img,src:r,alt:t}),e.jsxs("div",{className:_.orderInfo__header__info,children:[e.jsx("h6",{className:_.orderInfo__title,children:t}),e.jsxs("span",{className:_.orderInfo__packName,children:[i," пакет",s.map(o=>e.jsxs("span",{children:[" + ",o]},o))]})]})]}),e.jsxs("div",{className:_.orderInfo__extraServices,children:[e.jsx("div",{className:_.orderInfo__extraServices__items,children:e.jsx(q,{ProjectActiveServices:l})}),s.map(o=>e.jsxs("div",{className:_.orderInfo__extra,children:[e.jsx("span",{className:_.orderInfo__extra__block}),e.jsx("span",{className:`Page__subcaption ${_.orderInfo__extra__text}`,children:o})]},o))]}),e.jsxs("div",{className:_.orderInfo__info,children:[e.jsxs("div",{className:_.orderInfo__info__item,children:[e.jsx("span",{className:_.orderInfo__info__title,children:"Статус"}),e.jsx(Ra,{orderStatus:u})]}),e.jsxs("div",{className:_.orderInfo__info__item,children:[e.jsx("span",{className:_.orderInfo__info__title,children:"Исполнитель"}),e.jsx("span",{className:_.orderInfo__info__value,children:I})]}),e.jsxs("div",{className:_.orderInfo__info__item,children:[e.jsx("span",{className:_.orderInfo__info__title,children:"Дата заказа"}),e.jsx("span",{className:_.orderInfo__info__value,children:y})]}),e.jsxs("div",{className:_.orderInfo__info__item,children:[e.jsx("span",{className:_.orderInfo__info__title,children:"Кол-во"}),e.jsxs("span",{className:_.orderInfo__info__value,children:[v,"x"]})]}),e.jsxs("div",{className:_.orderInfo__info__item,children:[e.jsx("span",{className:_.orderInfo__info__title,children:"Цена"}),e.jsxs("span",{className:_.orderInfo__info__value,children:[f," Р"]})]})]})]})),ka={orderImgURL:`${z}/global/images/portfolioCase__example_img.png`,orderTitle:"Дизайн инфографики для маркетплейсов.",orderPackName:Z.BASE,extraServices:["Исходный файл","1 вариант дизайна","Ресайз"],extra:["Доп. редакции"],PerformerUsername:"@Bayandinrd",orderDate:"23.06.2024   15:34",multiplier:1,price:3e3},Y=(r,t)=>H(r,K.CREATE_ORDER_STEP,t),Ba=a.memo(()=>{const{CreateOrderActiveStep:r,CreateOrderCompletedSteps:t}=a.useContext(R),[i,s]=a.useState(!1),[l,u]=a.useState(!1);return a.useEffect(()=>{r==x.TechnicalInformation&&(s(!0),setTimeout(()=>{u(!0)},700))},[r]),Y(A.UPDATE,{CreateOrderActiveStep:x.TechnicalInformation,CreateOrderCompletedSteps:[...t,x.COST]}),e.jsx(e.Fragment,{children:i&&e.jsxs("section",{className:`${W.createOrderTechnicalInformationContent} 
    ${l?W.createOrderTechnicalInformationContent__appear:""}`,children:[e.jsx(yr,{}),e.jsxs("div",{className:W.createOrderTechnicalInformationContent__wrapper,children:[e.jsx(ua,{}),e.jsxs("div",{className:W.createOrderTechnicalInformationContent__secondCol,children:[e.jsx($a,{orderStatus:E.PROCESS,...ka}),e.jsx(J,{})]})]})]})})}),$t=a.memo(()=>{a.useEffect(()=>{document.querySelector("html").classList.add("CreateOrderPage")},[]);const r=Y(A.GET),[t,i]=a.useState(r?r.CreateOrderActiveStep:x.COST),[s,l]=a.useState(r?r.CreateOrderCompletedSteps:[x.CREATE]);return e.jsx(R.Provider,{value:{CreateOrderActiveStep:t,setCreateOrderActiveStep:i,CreateOrderCompletedSteps:s,setCreateOrderCompletedSteps:l},children:e.jsx("main",{className:"Page CreateOrderPage__main",children:e.jsxs("div",{className:"padding",children:[e.jsx(ce,{}),e.jsxs("div",{className:"CreateOrderPage__contentWrapper",children:[e.jsx(sr,{}),e.jsx(Ba,{})]})]})})})});export{$t as CreateOrderPage};
