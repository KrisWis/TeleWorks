import{r as t,j as e}from"./react-GnO0LmOb.js";import{a0 as $,I as ce,B as L,a as k,a1 as f,U as H,t as se,Q as K,R as Q,h as j,r as ie,i as z,A as de,j as b,l as V,C as le,q as M,a2 as me}from"./app-routes-DPoSRfjl.js";import{U as J}from"./index-DU3DznMJ.js";import{P as X,a as Y,b as pe,c as fe}from"./ProjectInfo_pack-ClpKF18v.js";import{S as Ce}from"./AttachSVG-CP9vMo6a.js";import{A as he,a as ue,U as xe}from"./AttachFileContainerItems-qdcNoQmk.js";import{U as Oe}from"./UseDebounce-B4wZPC3r.js";import{T as Pe}from"./TransitionBetweenBlocks-Lr0g_Y1x.js";import"./@babel-BoqLWp7i.js";import"./react-dom-D4eIH3yJ.js";import"./react-share-social-DgRi0E-b.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./@emotion-C_ibbh6v.js";import"./hoist-non-react-statics-DWNbBR1I.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-CzWA12An.js";import"./@popperjs-BQBsAJpH.js";import"./@mui-DtOm6wgI.js";import"./jss-plugin-rule-value-function-P3FhxEwN.js";import"./jss-DAkgY5qt.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-SbrwI9VQ.js";import"./jss-plugin-nested-mmogzEqH.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-zsTukSBu.js";import"./jss-plugin-vendor-prefixer-Dq8p7DI_.js";import"./css-vendor-v3ZYP5j7.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-share-CbqYIZxE.js";import"./classnames-DTKT5ssy.js";import"./jsonp-Daw0h_Hj.js";import"./react-router-dom-QUkaKMPq.js";import"./react-router-B2pE81Sw.js";import"./@remix-run-I3CLtn5C.js";import"./@reduxjs-BCqweWi6.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./react-redux-DfXJ0qGx.js";import"./use-sync-external-store-9xXU9FlP.js";import"./styled-components-CkumfAB6.js";import"./primereact-CaVLV2bU.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-C2kzdvfa.js";import"./react-select-DExkn266.js";import"./@floating-ui-RYOEkms0.js";import"./use-isomorphic-layout-effect-SVXGVfvv.js";import"./memoize-one-BdPwpGay.js";import"./swiper-CZB9Z16M.js";const Ie="_createOrderCostContent_1q69a_1",ve="_createOrderCostContent__firstCol_1q69a_8",ye="_createOrderCostContent__secondCol_1q69a_13",A={createOrderCostContent:Ie,createOrderCostContent__firstCol:ve,createOrderCostContent__secondCol:ye},je="_createOrderCostPayment_13y9f_1",Te="_createOrderCostPayment__disappear_13y9f_7",Se="_createOrderCostPayment__header_13y9f_10",we="_createOrderCostPayment__header__caption_13y9f_16",Ne="_createOrderCostPayment__header__balance_13y9f_19",ge="_createOrderCostPayment__header__balance__text_13y9f_25",be="_createOrderCostPayment__header__balance__amount_13y9f_32",Ae="_createOrderCostPayment__header__balance__amount__pennies_13y9f_39",Fe="_createOrderCostPayment__cardChoice_13y9f_45",We="_createOrderCostPayment__cardChoice__select_13y9f_51",Ee="_createOrderCostPayment__wrapper_13y9f_55",Le="_createOrderCostPayment__inputWrapper_13y9f_62",ke="_createOrderCostPayment__inputWrapper__subcaption_13y9f_67",Re="_createOrderCostPayment__inputWrapper__desc_13y9f_75",$e="_createOrderCostPayment__pay_13y9f_83",De="_createOrderCostPayment__writeSupport_13y9f_91",Be="_createOrderCostPayment__writeSupport__icon_13y9f_99",Ge="_createOrderCostPayment__writeSupport__text_13y9f_114",c={createOrderCostPayment:je,createOrderCostPayment__disappear:Te,createOrderCostPayment__header:Se,createOrderCostPayment__header__caption:we,createOrderCostPayment__header__balance:Ne,createOrderCostPayment__header__balance__text:ge,createOrderCostPayment__header__balance__amount:be,createOrderCostPayment__header__balance__amount__pennies:Ae,createOrderCostPayment__cardChoice:Fe,createOrderCostPayment__cardChoice__select:We,createOrderCostPayment__wrapper:Ee,createOrderCostPayment__inputWrapper:Le,createOrderCostPayment__inputWrapper__subcaption:ke,createOrderCostPayment__inputWrapper__desc:Re,createOrderCostPayment__pay:$e,createOrderCostPayment__writeSupport:De,createOrderCostPayment__writeSupport__icon:Be,createOrderCostPayment__writeSupport__text:Ge},Z=r=>!!r.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),Ue=t.memo(()=>{const[r,a]=t.useState(""),[s,l]=J(),m=t.useMemo(()=>Z(r),[r]),{setCreateOrderActiveStep:u,setCreateOrderCompletedSteps:x,CreateOrderCompletedSteps:P}=t.useContext($),C=()=>{u(f.TechnicalInformation),x(()=>[...P,f.COST])};return e.jsxs("div",{className:`Page__BoxShadowWrapper ${c.createOrderCostPayment}`,children:[e.jsxs("div",{className:c.createOrderCostPayment__header,children:[e.jsx("h6",{className:`CreateOrderPage__caption ${c.createOrderCostPayment__header__caption}`,children:"Оплата заказа"}),e.jsxs("div",{className:c.createOrderCostPayment__header__balance,children:[e.jsx("span",{className:c.createOrderCostPayment__header__balance__text,children:"Баланс TeleWorks"}),e.jsxs("span",{className:c.createOrderCostPayment__header__balance__amount,children:["120000",e.jsx("span",{className:c.createOrderCostPayment__header__balance__amount__pennies,children:".00"}),"₽"]})]})]}),e.jsxs("div",{className:c.createOrderCostPayment__wrapper,children:[e.jsxs("div",{className:c.createOrderCostPayment__inputWrapper,children:[e.jsx("span",{className:c.createOrderCostPayment__inputWrapper__subcaption,children:"Ваш e-mail"}),e.jsx(ce,{type:"email",value:r,onChange:I=>a(I.target.value),isWarn:!Z(r)&&s}),e.jsx("span",{className:c.createOrderCostPayment__inputWrapper__desc,children:"На данный e-mail вышлем чек об оплате."})]}),e.jsx(L,{className:c.createOrderCostPayment__pay,type:k.RED,text:"Оплатить 6000 ₽ ",onClick:m?C:()=>l(!0)}),e.jsxs("span",{className:c.createOrderCostPayment__writeSupport,children:[e.jsx("span",{className:c.createOrderCostPayment__writeSupport__icon,children:"?"}),e.jsx("a",{href:"https://t.me/TeleWorksSupportbot",className:c.createOrderCostPayment__writeSupport__text,children:"Написать в поддержку"})]})]})]})}),ze=6e3,Ve="_orderSecurityGuarantee_16grc_1",Me="_orderSecurityGuarantee__header_16grc_6",Ze="_orderSecurityGuarantee__svg_16grc_10",qe="_orderSecurityGuarantee__title_16grc_14",He="_orderSecurityGuarantee__text_16grc_21",v={orderSecurityGuarantee:Ve,orderSecurityGuarantee__header:Me,orderSecurityGuarantee__svg:Ze,orderSecurityGuarantee__title:qe,orderSecurityGuarantee__text:He},Ke=r=>t.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("g",{clipPath:"url(#clip0_280_1929)"},t.createElement("path",{d:"M15 21.1553L20 19.2803L25 21.1553V25.0468C25 26.9406 23.93 28.6719 22.236 29.5188L20 30.6369L17.7639 29.5188C16.07 28.6719 15 26.9406 15 25.0468V21.1553Z",fill:"#FF5555"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.1703 8.6595C20.4158 8.37652 19.5842 8.37652 18.8297 8.6595L7.16292 13.0345C5.86192 13.5224 5 14.7661 5 16.1556V25.0935C5 30.775 8.21003 35.969 13.2918 38.5098L18.882 41.305C19.5858 41.6568 20.4142 41.6568 21.118 41.305L26.7082 38.5098C31.79 35.969 35 30.775 35 25.0935V16.1556C35 14.7661 34.1382 13.5224 32.837 13.0345L21.1703 8.6595ZM20.8777 16.05C20.3117 15.8378 19.688 15.8378 19.122 16.05L13.2886 18.2375C12.3129 18.6034 11.6665 19.5362 11.6665 20.5783V25.0473C11.6665 28.2037 13.4498 31.0892 16.273 32.5008L19.0682 33.8983C19.6547 34.1917 20.345 34.1917 20.9315 33.8983L23.7265 32.5008C26.5498 31.0892 28.3332 28.2037 28.3332 25.0473V20.5783C28.3332 19.5362 27.6867 18.6034 26.711 18.2375L20.8777 16.05Z",fill:"#FF5555"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_280_1929"},t.createElement("rect",{width:40,height:40,fill:"white"})))),ee=t.memo(()=>e.jsxs("div",{className:`${v.orderSecurityGuarantee} Page__SirineWrapper`,children:[e.jsxs("div",{className:v.orderSecurityGuarantee__header,children:[e.jsx(Ke,{className:v.orderSecurityGuarantee__svg}),e.jsx("h6",{className:v.orderSecurityGuarantee__title,children:"Гарантия безопасности заказа"})]}),e.jsx("p",{className:v.orderSecurityGuarantee__text,children:"Ваши средства под защитой TeleWorks на время выполнения заказа. Продавец получает оплату после того, как вы проверите и примите заказ. Гарантия возврата 100% в случае просрочки или невыполнения заказа."})]})),Qe="_orderPreview_ebxn0_1",Je="_orderPreview__header_ebxn0_5",Xe="_orderPreview__headerWrapper_ebxn0_10",Ye="_orderPreview__finalPrice_ebxn0_16",er="_orderPreview__desc_ebxn0_23",rr="_orderPreview__project_ebxn0_33",tr="_orderPreview__project__img_ebxn0_40",ar="_orderPreview__project__info_ebxn0_47",_r="_orderPreview__project__info__footer_ebxn0_52",nr="_orderPreview__project__title_ebxn0_57",or="_orderPreview__project__multiplier_ebxn0_64",cr="_orderPreview__project__price_ebxn0_72",sr="_orderPreview__wrapper_ebxn0_79",ir="_orderPreview__wrapper_padding_ebxn0_83",dr="_orderPreview__extra_ebxn0_89",lr="_orderPreview__extraWrapper_ebxn0_94",mr="_orderPreview__extra__title_ebxn0_99",pr="_orderPreview__extra__titleWrapper_ebxn0_107",fr="_orderPreview__extra__title__block_ebxn0_112",Cr="_orderPreview__extra__price_ebxn0_119",o={orderPreview:Qe,orderPreview__header:Je,orderPreview__headerWrapper:Xe,orderPreview__finalPrice:Ye,orderPreview__desc:er,orderPreview__project:rr,orderPreview__project__img:tr,orderPreview__project__info:ar,orderPreview__project__info__footer:_r,orderPreview__project__title:nr,orderPreview__project__multiplier:or,orderPreview__project__price:cr,orderPreview__wrapper:sr,orderPreview__wrapper_padding:ir,orderPreview__extra:dr,orderPreview__extraWrapper:lr,orderPreview__extra__title:mr,orderPreview__extra__titleWrapper:pr,orderPreview__extra__title__block:fr,orderPreview__extra__price:Cr},d={packName:X.BASE,projectTitle:"Дизайн инфографики для маркетплейсов.",multiplier:1,projectPrice:3e3,extraServices:["Исходный файл","1 вариант дизайна","Ресайз"],deadline:"1 день",editionsAmount:3,extra:[{title:"Доп. редакции",price:3e3}],projectImgURL:`${H}/global/images/serviceExample_img.png`},hr=t.memo(({FinalPrice:r})=>e.jsxs("div",{className:`Page__SirineWrapper ${o.orderPreview}`,children:[e.jsxs("div",{className:o.orderPreview__header,children:[e.jsxs("div",{className:o.orderPreview__headerWrapper,children:[e.jsx("span",{className:"CreateOrderPage__caption",children:"Итого"}),e.jsxs("span",{className:o.orderPreview__finalPrice,children:[r," ₽"]})]}),e.jsxs("span",{className:o.orderPreview__desc,children:[d.packName," пакет",d.extra.map(a=>e.jsxs("span",{children:[" + ",a.title]},a.title))]})]}),e.jsxs("div",{className:o.orderPreview__project,children:[e.jsx("img",{className:o.orderPreview__project__img,src:d.projectImgURL,alt:d.projectTitle}),e.jsxs("div",{className:o.orderPreview__project__info,children:[e.jsx("h6",{className:o.orderPreview__project__title,children:d.projectTitle}),e.jsxs("div",{className:o.orderPreview__project__info__footer,children:[e.jsxs("span",{className:o.orderPreview__project__multiplier,children:[d.multiplier,"x"]}),e.jsxs("span",{className:o.orderPreview__project__price,children:[d.projectPrice," ₽"]})]})]})]}),e.jsx("div",{className:o.orderPreview__wrapper,children:e.jsxs("div",{className:o.orderPreview__wrapper_padding,children:[e.jsx(Y,{ProjectActiveServices:d.extraServices}),e.jsx(pe,{deadline:d.deadline}),e.jsx(fe,{editionsAmount:d.editionsAmount})]})}),e.jsx("div",{className:o.orderPreview__extraWrapper,children:d.extra.map(a=>e.jsxs("div",{className:o.orderPreview__extra,children:[e.jsxs("div",{className:o.orderPreview__extra__titleWrapper,children:[e.jsx("div",{className:o.orderPreview__extra__title__block}),e.jsx("span",{className:o.orderPreview__extra__title,children:a.title})]}),e.jsxs("span",{className:o.orderPreview__extra__price,children:[a.price," ₽"]})]},a.title))})]})),ur=t.memo(()=>e.jsxs("section",{className:`${A.createOrderCostContent}`,children:[e.jsx("div",{className:A.createOrderCostContent__firstCol,children:e.jsx(Ue,{})}),e.jsxs("div",{className:A.createOrderCostContent__secondCol,children:[e.jsx(hr,{FinalPrice:ze}),e.jsx(ee,{})]})]})),xr="_createOrderTechnicalInformationContent_ddo02_1",Or="_createOrderTechnicalInformationContent__wrapper_ddo02_9",Pr="_createOrderTechnicalInformationContent__secondCol_ddo02_15",F={createOrderTechnicalInformationContent:xr,createOrderTechnicalInformationContent__wrapper:Or,createOrderTechnicalInformationContent__secondCol:Pr},Ir="_orderSuccessfullyPaid_1izu8_1",vr="_orderSuccessfullyPaid__paddingWrapper_1izu8_9",yr="_orderSuccessfullyPaid__closed_1izu8_15",jr="_orderSuccessfullyPaid__body_1izu8_19",Tr="_orderSuccessfullyPaid__title_1izu8_24",Sr="_orderSuccessfullyPaid__text_1izu8_31",wr="_orderSuccessfullyPaid__textWrapper_1izu8_39",Nr="_orderSuccessfullyPaid__svg_1izu8_43",gr="_orderSuccessfullyPaid__close_1izu8_15",h={orderSuccessfullyPaid:Ir,orderSuccessfullyPaid__paddingWrapper:vr,orderSuccessfullyPaid__closed:yr,orderSuccessfullyPaid__body:jr,orderSuccessfullyPaid__title:Tr,orderSuccessfullyPaid__text:Sr,orderSuccessfullyPaid__textWrapper:wr,orderSuccessfullyPaid__svg:Nr,orderSuccessfullyPaid__close:gr},br=r=>t.createElement("svg",{width:53,height:41,viewBox:"0 0 53 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("path",{d:"M46.5234 1.20662L19.0415 31.0527L6.4766 17.4071C4.99485 15.7982 2.59284 15.7982 1.11109 17.4071C-0.370362 19.0163 -0.370362 21.6249 1.11109 23.2341L16.3587 39.7933C17.0996 40.5975 18.0705 41 19.0415 41C20.0124 41 20.9833 40.5975 21.7242 39.7933L51.8889 7.03397C53.3704 5.42476 53.3704 2.81615 51.8889 1.20694C50.4072 -0.40226 48.0048 -0.40226 46.5234 1.20662Z",fill:"#FF5555"})),Ar=r=>t.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.0085 2.75901C19.2362 2.52326 19.3622 2.20751 19.3593 1.87976C19.3565 1.55202 19.225 1.2385 18.9933 1.00674C18.7615 0.774982 18.448 0.64352 18.1202 0.640672C17.7925 0.637824 17.4767 0.763818 17.241 0.991515L9.99973 8.23276L2.75848 0.991515C2.52273 0.763818 2.20698 0.637824 1.87923 0.640672C1.55149 0.64352 1.23797 0.774982 1.00621 1.00674C0.774452 1.2385 0.64299 1.55202 0.640142 1.87976C0.637294 2.20751 0.763288 2.52326 0.990985 2.75901L8.23223 10.0003L0.990985 17.2415C0.871598 17.3568 0.77637 17.4948 0.710859 17.6473C0.645347 17.7998 0.610864 17.9638 0.609422 18.1298C0.60798 18.2957 0.639607 18.4603 0.702458 18.614C0.765309 18.7676 0.858125 18.9071 0.975491 19.0245C1.09286 19.1419 1.23242 19.2347 1.38604 19.2975C1.53966 19.3604 1.70426 19.392 1.87024 19.3906C2.03621 19.3891 2.20024 19.3547 2.35274 19.2891C2.50525 19.2236 2.64318 19.1284 2.75848 19.009L9.99973 11.7678L17.241 19.009C17.4767 19.2367 17.7925 19.3627 18.1202 19.3599C18.448 19.357 18.7615 19.2255 18.9933 18.9938C19.225 18.762 19.3565 18.4485 19.3593 18.1208C19.3622 17.793 19.2362 17.4773 19.0085 17.2415L11.7672 10.0003L19.0085 2.75901Z",fill:"#FF5555"})),Fr=t.memo(()=>{const[r,a]=t.useState(!1),[s,l]=t.useState(!0),m=t.useRef();return t.useEffect(()=>(r&&(m.current=setTimeout(()=>{l(!1)},se)),()=>{clearTimeout(m.current)}),[r]),e.jsx(e.Fragment,{children:s&&e.jsx("div",{className:`Page__SirineWrapper ${h.orderSuccessfullyPaid} 
    ${r?h.orderSuccessfullyPaid__closed:""}`,children:e.jsxs("div",{className:h.orderSuccessfullyPaid__paddingWrapper,children:[e.jsxs("div",{className:h.orderSuccessfullyPaid__body,children:[e.jsx("div",{className:h.orderSuccessfullyPaid__svg,children:e.jsx(br,{})}),e.jsxs("div",{className:h.orderSuccessfullyPaid__textWrapper,children:[e.jsx("h6",{className:h.orderSuccessfullyPaid__title,children:"Заказ успешно оплачен"}),e.jsx("span",{className:h.orderSuccessfullyPaid__text,children:"Чек об оплате направим на вашу эл.почту"})]})]}),e.jsx(Ar,{onClick:()=>a(!0),className:h.orderSuccessfullyPaid__close})]})})})}),Wr="_createOrderTechnicalInformationContainer_poptp_1",Er="_createOrderTechnicalInformationContainer__wrapper_poptp_6",Lr="_createOrderTechnicalInformationContainer__caption_poptp_11",kr="_createOrderTechnicalInformationContainer__form_poptp_14",Rr="_createOrderTechnicalInformationContainer__form__steps_poptp_20",$r="_createOrderTechnicalInformationContainer__form__step_poptp_20",Dr="_createOrderTechnicalInformationContainer__form__step__desc_poptp_30",Br="_createOrderTechnicalInformationContainer__form__textarea_poptp_38",Gr="_createOrderTechnicalInformationContainer__form__textarea__warn_poptp_53",Ur="_createOrderTechnicalInformationContainer__form__textareaWrapper_poptp_56",zr="_createOrderTechnicalInformationContainer__form__textareaFooter_poptp_62",Vr="_createOrderTechnicalInformationContainer__form__attachFiles_poptp_68",Mr="_createOrderTechnicalInformationContainer__form__attachFilesWrapper_poptp_73",Zr="_createOrderTechnicalInformationContainer__form__attachFiles__text_poptp_80",qr="_createOrderTechnicalInformationContainer__form__attachFiles__input_poptp_87",Hr="_createOrderTechnicalInformationContainer__form__symbolsAmount_poptp_97",Kr="_createOrderTechnicalInformationContainer__files_poptp_105",Qr="_createOrderTechnicalInformationContainer__files__caption_poptp_117",Jr="_createOrderTechnicalInformationContainer__files__closed_poptp_120",Xr="_createOrderTechnicalInformationContainer__agree_poptp_125",Yr="_createOrderTechnicalInformationContainer__agree__text_poptp_130",et="_createOrderTechnicalInformationContainer__buttons_poptp_137",rt="_createOrderTechnicalInformationContainer__button_poptp_137",_={createOrderTechnicalInformationContainer:Wr,createOrderTechnicalInformationContainer__wrapper:Er,createOrderTechnicalInformationContainer__caption:Lr,createOrderTechnicalInformationContainer__form:kr,createOrderTechnicalInformationContainer__form__steps:Rr,createOrderTechnicalInformationContainer__form__step:$r,createOrderTechnicalInformationContainer__form__step__desc:Dr,createOrderTechnicalInformationContainer__form__textarea:Br,createOrderTechnicalInformationContainer__form__textarea__warn:Gr,createOrderTechnicalInformationContainer__form__textareaWrapper:Ur,createOrderTechnicalInformationContainer__form__textareaFooter:zr,createOrderTechnicalInformationContainer__form__attachFiles:Vr,createOrderTechnicalInformationContainer__form__attachFilesWrapper:Mr,createOrderTechnicalInformationContainer__form__attachFiles__text:Zr,createOrderTechnicalInformationContainer__form__attachFiles__input:qr,createOrderTechnicalInformationContainer__form__symbolsAmount:Hr,createOrderTechnicalInformationContainer__files:Kr,createOrderTechnicalInformationContainer__files__caption:Qr,createOrderTechnicalInformationContainer__files__closed:Jr,createOrderTechnicalInformationContainer__agree:Xr,createOrderTechnicalInformationContainer__agree__text:Yr,createOrderTechnicalInformationContainer__buttons:et,createOrderTechnicalInformationContainer__button:rt},R=1200,re=100,te=r=>!(r.length>R||r.length<re),tt=(r,a)=>!(!te(r)||!a),q=(r,a)=>K(r,Q.CREATE_ORDER_TECHNICAL_INFORMATION_CONTAINER_FORM,a),W=new xe,at=t.memo(()=>{const r=t.useRef(null),a=q(j.GET),[s,l]=t.useState(a||""),[m,u]=t.useState(!1),x=p=>{const i=p.target.value;P(i),i.length<=R?(l(i),u(!1)):u(!0),r.current&&(r.current.style.height="1px"),r.current&&i.length>450&&i.length<=1201&&(r.current.style.height=1+r.current.scrollHeight+"px")},P=t.useCallback(Oe(p=>{q(j.UPDATE,p)},1e3),[]),[C,I]=t.useState(!1),[O,D]=J(),_e=t.useCallback(()=>{tt(s,C)?ie("/"):D(!0)},[C,s,D]),ne=t.useRef(null),[S,w]=t.useState([]),[oe,B]=t.useState(0),N=t.useRef(),y=t.useMemo(()=>z.find(p=>p.route==de.CREATE_ORDER).name,[]),G=async p=>{if(!b){const i=p.target.files;if(i)for(const g of i)W.saveLoadedFile(N.current,y,g)}},U=t.useCallback(async p=>{if(!b){const i=await W.fetchLoadedFiles(p,y);i&&w(i.map(g=>g.file))}},[y]);return t.useEffect(()=>{b||(async()=>(N.current=await W.openDatabase(V,1,z.map(i=>i.name)),U(N.current)))()},[U]),e.jsxs("div",{className:`${_.createOrderTechnicalInformationContainer} createOrderTechnicalInformationContainer`,children:[e.jsxs("div",{className:`Page__BoxShadowWrapper ${_.createOrderTechnicalInformationContainer__wrapper}`,children:[e.jsx("div",{className:_.createOrderTechnicalInformationContainer__header,children:e.jsx("h6",{className:`${_.createOrderTechnicalInformationContainer__caption} CreateOrderPage__caption`,children:"Материалы для работы"})}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__form,children:[e.jsx("span",{className:"CreateOrderPage__caption",children:"Исполнителю для создание проекта, понадобится:"}),e.jsxs("ul",{className:_.createOrderTechnicalInformationContainer__form__steps,children:[e.jsxs("li",{className:_.createOrderTechnicalInformationContainer__form__step,children:[e.jsx("span",{className:"CreateOrderPage__subcaption",children:"1. Исходные фото"}),e.jsx("p",{className:_.createOrderTechnicalInformationContainer__form__step__desc,children:"Пожалуйста, проверьте качество фото"})]}),e.jsx("li",{className:_.createOrderTechnicalInformationContainer__form__step,children:e.jsx("span",{className:"CreateOrderPage__subcaption",children:"2. Техническое задание"})})]}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__form__textareaWrapper,children:[e.jsx("textarea",{ref:r,className:`${_.createOrderTechnicalInformationContainer__form__textarea}
                ${m||O&&!te(s)?_.createOrderTechnicalInformationContainer__form__textarea__warn:""}`,name:"createOrderTechnicalInformationContainer__form__textarea",value:s,onChange:x}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__form__textareaFooter,children:[e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__form__attachFilesWrapper,children:[e.jsx(he,{inputRef:ne,InputFiles:S,setInputFiles:w,setInputFileProgress:B,"data-testid":"CreateOrderTechnicalInformationContainer.AttachFilesInput",onChange:G}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__form__attachFiles,children:[e.jsx(Ce,{}),e.jsx("span",{className:_.createOrderTechnicalInformationContainer__form__attachFiles__text,children:"Прикрепить файл"})]})]}),e.jsxs("span",{className:_.createOrderTechnicalInformationContainer__form__symbolsAmount,children:[s.length," из"," ",R," ","символов (минимум"," ",re,")"]})]})]}),e.jsxs("div",{className:`${_.createOrderTechnicalInformationContainer__files}
              ${S.length?"":_.createOrderTechnicalInformationContainer__files__closed}`,children:[e.jsx("h6",{className:`${_.createOrderTechnicalInformationContainer__caption} 
                  ${_.createOrderTechnicalInformationContainer__files__caption} CreateOrderPage__caption`,children:"Загруженные файлы"}),e.jsx(ue,{setInputFileProgress:B,InputFileProgress:oe,setInputFiles:w,files:S,indexedDBName:V,indexedDBStore:y,onChange:G})]})]})]}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__agree,children:[e.jsx(le,{isActive:C,onClick:()=>I(!C),isWarn:O&&!C}),e.jsx("p",{className:_.createOrderTechnicalInformationContainer__agree__text,children:"Предоставленная мной информация является точной и полной. Любые изменения требуют согласования с продавцом и могут потребовать дополнительной оплаты."})]}),e.jsxs("div",{className:_.createOrderTechnicalInformationContainer__buttons,children:[e.jsx(L,{className:_.createOrderTechnicalInformationContainer__button,type:k.BLACK_WITHOUT_OUTLINE,text:"Заполнить позже"}),e.jsx(L,{className:_.createOrderTechnicalInformationContainer__button,type:k.RED,text:"Подтвердить",onClick:_e})]})]})}),_t="_orderInfo_d1na2_1",nt="_orderInfo__header_d1na2_5",ot="_orderInfo__header__info_d1na2_11",ct="_orderInfo__img_d1na2_17",st="_orderInfo__title_d1na2_24",it="_orderInfo__packName_d1na2_31",dt="_orderInfo__extraServices_d1na2_38",lt="_orderInfo__extraServices__items_d1na2_45",mt="_orderInfo__extra_d1na2_38",pt="_orderInfo__extra__block_d1na2_58",ft="_orderInfo__extra__text_d1na2_65",Ct="_orderInfo__info_d1na2_68",ht="_orderInfo__info__title_d1na2_76",ut="_orderInfo__info__value_d1na2_83",xt="_orderInfo__info__item_d1na2_92",n={orderInfo:_t,orderInfo__header:nt,orderInfo__header__info:ot,orderInfo__img:ct,orderInfo__title:st,orderInfo__packName:it,orderInfo__extraServices:dt,orderInfo__extraServices__items:lt,orderInfo__extra:mt,orderInfo__extra__block:pt,orderInfo__extra__text:ft,orderInfo__info:Ct,orderInfo__info__title:ht,orderInfo__info__value:ut,orderInfo__info__item:xt};var T=(r=>(r.PROCESS="в процессе",r.CONTESTATION="Оспаривание",r))(T||{});const Ot="_orderStatus_fzhy6_1",Pt="_orderStatus__process_fzhy6_15",It="_orderStatus__contestation_fzhy6_18",E={orderStatus:Ot,orderStatus__process:Pt,orderStatus__contestation:It},vt=t.memo(({orderStatus:r})=>e.jsx("span",{className:`${E.orderStatus} 
        ${r==T.PROCESS?E.orderStatus__process:""}
        ${r==T.CONTESTATION?E.orderStatus__contestation:""}`,children:r})),yt=t.memo(({orderImgURL:r,orderTitle:a,orderPackName:s,extra:l,extraServices:m,orderStatus:u,orderDate:x,PerformerUsername:P,multiplier:C,price:I})=>e.jsxs("div",{className:`Page__SirineWrapper ${n.orderInfo}`,children:[e.jsxs("div",{className:n.orderInfo__header,children:[e.jsx("img",{className:n.orderInfo__img,src:r,alt:a}),e.jsxs("div",{className:n.orderInfo__header__info,children:[e.jsx("h6",{className:n.orderInfo__title,children:a}),e.jsxs("span",{className:n.orderInfo__packName,children:[s," пакет",l.map(O=>e.jsxs("span",{children:[" + ",O]},O))]})]})]}),e.jsxs("div",{className:n.orderInfo__extraServices,children:[e.jsx("div",{className:n.orderInfo__extraServices__items,children:e.jsx(Y,{ProjectActiveServices:m})}),l.map(O=>e.jsxs("div",{className:n.orderInfo__extra,children:[e.jsx("span",{className:n.orderInfo__extra__block}),e.jsx("span",{className:`Page__subcaption ${n.orderInfo__extra__text}`,children:O})]},O))]}),e.jsxs("div",{className:n.orderInfo__info,children:[e.jsxs("div",{className:n.orderInfo__info__item,children:[e.jsx("span",{className:n.orderInfo__info__title,children:"Статус"}),e.jsx(vt,{orderStatus:u})]}),e.jsxs("div",{className:n.orderInfo__info__item,children:[e.jsx("span",{className:n.orderInfo__info__title,children:"Исполнитель"}),e.jsx("span",{className:n.orderInfo__info__value,children:P})]}),e.jsxs("div",{className:n.orderInfo__info__item,children:[e.jsx("span",{className:n.orderInfo__info__title,children:"Дата заказа"}),e.jsx("span",{className:n.orderInfo__info__value,children:x})]}),e.jsxs("div",{className:n.orderInfo__info__item,children:[e.jsx("span",{className:n.orderInfo__info__title,children:"Кол-во"}),e.jsxs("span",{className:n.orderInfo__info__value,children:[C,"x"]})]}),e.jsxs("div",{className:n.orderInfo__info__item,children:[e.jsx("span",{className:n.orderInfo__info__title,children:"Цена"}),e.jsxs("span",{className:n.orderInfo__info__value,children:[I," Р"]})]})]})]})),jt={orderImgURL:`${H}/global/images/portfolioCase__example_img.png`,orderTitle:"Дизайн инфографики для маркетплейсов.",orderPackName:X.BASE,extraServices:["Исходный файл","1 вариант дизайна","Ресайз"],extra:["Доп. редакции"],PerformerUsername:"@Bayandinrd",orderDate:"23.06.2024   15:34",multiplier:1,price:3e3},ae=(r,a)=>K(r,Q.CREATE_ORDER_STEP,a),Tt=t.memo(()=>{const{CreateOrderCompletedSteps:r}=t.useContext($);return ae(j.UPDATE,{CreateOrderActiveStep:f.TechnicalInformation,CreateOrderCompletedSteps:[...r,f.COST]}),e.jsxs("section",{className:F.createOrderTechnicalInformationContent,children:[e.jsx(Fr,{}),e.jsxs("div",{className:F.createOrderTechnicalInformationContent__wrapper,children:[e.jsx(at,{}),e.jsxs("div",{className:F.createOrderTechnicalInformationContent__secondCol,children:[e.jsx(yt,{orderStatus:T.PROCESS,...jt}),e.jsx(ee,{})]})]})]})}),Ta=t.memo(()=>{t.useEffect(()=>{document.querySelector("html").classList.add("CreateOrderPage"),document.title="TeleWorks | Создание заказа"},[]);const r=ae(j.GET),[a,s]=t.useState(r?r.CreateOrderActiveStep:f.COST),[l,m]=t.useState(r?r.CreateOrderCompletedSteps:[f.CREATE]),[u,x]=t.useState(!1);return t.useEffect(()=>{if(a!=f.COST&&!r){x(!0);const P=setTimeout(()=>{x(!1),clearTimeout(P)},M)}},[a,r]),e.jsx($.Provider,{value:{CreateOrderActiveStep:a,setCreateOrderActiveStep:s,CreateOrderCompletedSteps:l,setCreateOrderCompletedSteps:m},children:e.jsx("main",{className:"Page CreateOrderPage__main",children:e.jsxs("div",{className:"padding",children:[e.jsx(me,{}),e.jsx("div",{className:"CreateOrderPage__contentWrapper",children:e.jsx(Pe,{className:u?"CreateOrderPage__contentWrapper__blocks__disappear":"CreateOrderPage__contentWrapper__blocks",blocks:[{component:e.jsx(ur,{}),condition:a==f.COST,id:0},{component:e.jsx(Tt,{}),condition:a==f.TechnicalInformation,id:1}],transitionDuration:M,defaultIndex:a==f.COST?0:1})})]})})})});export{Ta as CreateOrderPage};
