import{r as a,j as c}from"./react-e8hmi6Ay.js";import{b as L}from"./react-redux-I0N39rH0.js";import{a as $}from"./@reduxjs-BMC_f8BA.js";import{u as H,a as A,B as I,M as F}from"./index-CU9JCHzn.js";var w=(e=>(e.BASE="Базовый",e.STANDARD="Стандарт",e.PREMIUM="Премиум",e))(w||{});const B="_projectInfo_pack_1gbq5_1",R="_projectInfo_pack__tabs_1gbq5_8",V="_projectInfo_pack__tab_1gbq5_8",W="_projectInfo_pack__tab__active_1gbq5_29",D="_projectInfo_pack__wrapper_1gbq5_47",z="_projectInfo_pack__header_1gbq5_52",G="_projectInfo_pack__packName_1gbq5_56",J="_projectInfo_pack__price_1gbq5_63",K="_projectInfo_pack__desc_1gbq5_70",U="_projectInfo_pack__info_1gbq5_78",Q="_projectInfo_pack__info_text_1gbq5_83",X="_projectInfo_pack__deadline_1gbq5_90",Y="_projectInfo_pack__deadlineWrapper_1gbq5_93",ee="_projectInfo_pack__disProjectActiveServices_1gbq5_98",ce="_projectInfo_pack__continue_1gbq5_104",re="_projectInfo_pack__chat_1gbq5_119",n={projectInfo_pack:B,projectInfo_pack__tabs:R,projectInfo_pack__tab:V,projectInfo_pack__tab__active:W,projectInfo_pack__wrapper:D,projectInfo_pack__header:z,projectInfo_pack__packName:G,projectInfo_pack__price:J,projectInfo_pack__desc:K,projectInfo_pack__info:U,projectInfo_pack__info_text:Q,projectInfo_pack__deadline:X,projectInfo_pack__deadlineWrapper:Y,projectInfo_pack__disProjectActiveServices:ee,projectInfo_pack__continue:ce,projectInfo_pack__chat:re},te="_checkoutOrder_1qcdi_1",_e="_checkoutOrder__header_1qcdi_11",oe="_checkoutOrder__separator_1qcdi_19",se="_checkoutOrder__separator_big_1qcdi_27",ae="_checkoutOrder__title_1qcdi_31",ne="_checkoutOrder__caption_1qcdi_36",ie="_checkoutOrder__price_1qcdi_43",de="_checkoutOrder__desc_1qcdi_50",ue="_checkoutOrder__info_1qcdi_58",le="_checkoutOrder__wrapper_1qcdi_64",pe="_checkoutOrder__extraServices_1qcdi_68",he="_checkoutOrder__descSpan_1qcdi_74",ke="_checkoutOrder__extraService_1qcdi_68",me="_checkoutOrder__extraService__header_1qcdi_90",xe="_checkoutOrder__extraService__info_1qcdi_94",ve="_checkoutOrder__extraService__select_1qcdi_100",je="_checkoutOrder__extraService__select__active_1qcdi_108",Oe="_checkoutOrder__extraService__footer_1qcdi_111",fe="_checkoutOrder__result_1qcdi_117",Le="_checkoutOrder__result__header_1qcdi_125",Ce="_checkoutOrder__resultWrapper_1qcdi_129",Se="_checkoutOrder__resultItems_1qcdi_133",Ae="_checkoutOrder__resultItems__open_1qcdi_141",Ie="_checkoutOrder__resultItems__open__disactive_1qcdi_145",Me="_checkoutOrder__resultItems__active_1qcdi_148",ge="_checkoutOrder__resultItem_1qcdi_133",Ne="_checkoutOrder__resultItem_span_1qcdi_156",be="_checkoutOrder__continue_1qcdi_163",t={checkoutOrder:te,checkoutOrder__header:_e,checkoutOrder__separator:oe,checkoutOrder__separator_big:se,checkoutOrder__title:ae,checkoutOrder__caption:ne,checkoutOrder__price:ie,checkoutOrder__desc:de,checkoutOrder__info:ue,checkoutOrder__wrapper:le,checkoutOrder__extraServices:pe,checkoutOrder__descSpan:he,checkoutOrder__extraService:ke,checkoutOrder__extraService__header:me,checkoutOrder__extraService__info:xe,checkoutOrder__extraService__select:ve,checkoutOrder__extraService__select__active:je,checkoutOrder__extraService__footer:Oe,checkoutOrder__result:fe,checkoutOrder__result__header:Le,checkoutOrder__resultWrapper:Ce,checkoutOrder__resultItems:Se,checkoutOrder__resultItems__open:Ae,checkoutOrder__resultItems__open__disactive:Ie,checkoutOrder__resultItems__active:Me,checkoutOrder__resultItem:ge,checkoutOrder__resultItem_span:Ne,checkoutOrder__continue:be},b=1.5,y={packs:{Базовый:{packPrice:0,editionsAmounts:1,extraServices:{}},Стандарт:{packPrice:0,editionsAmounts:1,extraServices:{}},Премиум:{packPrice:0,editionsAmounts:1,extraServices:{}}},finalPrice:0},q=$({name:"checkoutOrder",initialState:y,reducers:{setCheckoutOrderState:(e,r)=>{for(const s in r.payload)e[s]=r.payload[s]},changeFinalPrice:(e,r)=>{e.finalPrice=r.payload,e=y},setPackPrice:(e,r)=>{const s=r.payload.price;e.packs[r.payload.packType].packPrice=s,e.finalPrice+=s},changeeditionsAmounts:(e,r)=>{e.packs[r.payload.packType].editionsAmounts+=r.payload.amounts,r.payload.amounts>0?e.finalPrice*=b:e.finalPrice/=b,e.finalPrice=Math.round(e.finalPrice)},clearProjectEditionsAmounts:(e,r)=>{e.packs[r.payload.packType].editionsAmounts=r.payload.amounts},changeExtraServiceAmounts:(e,r)=>{const s=e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].amount,_=e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].price;(isNaN(s)||!s)&&(e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].amount=1),e.packs[r.payload.packType].extraServices[r.payload.extraServiceTitle].amount+=r.payload.extraServiceAmount,e.finalPrice+=_*r.payload.extraServiceAmount},changeExtraServices:(e,r)=>{const s=e.packs[r.payload.packType].extraServices;for(const _ of r.payload.extraServices)s[_.title]=_;e.packs[r.payload.packType].extraServices=s},changeExtraServiceSelected:(e,r)=>{e.packs[r.payload.packType].extraServices[r.payload.extraService.title].selected=r.payload.changeTo;let s=e.packs[r.payload.packType].extraServices[r.payload.extraService.title].amount;s||(s=1),r.payload.changeTo?e.finalPrice+=r.payload.extraService.price*s:e.finalPrice-=r.payload.extraService.price*s}}}),u=q.actions,rc=q.reducer,ye=(e,r)=>e.checkoutOrderReducer?e.checkoutOrderReducer.packs[r].editionsAmounts:1,Ze=(e,r,s)=>{if(e.checkoutOrderReducer){const _=e.checkoutOrderReducer.packs[r].extraServices;if(!_)return 1;if(Object.keys(_).includes(s))return e.checkoutOrderReducer.packs[r].extraServices[s].amount||1}return 1},Pe=e=>e.checkoutOrderReducer?e.checkoutOrderReducer.finalPrice:0,we="_checkoutOrderAmountCounter_tzn5d_1",qe="_checkoutOrderAmountCounter__disabled_tzn5d_7",Te="_checkoutOrderAmountCounter__button_tzn5d_11",Ee="_checkoutOrder__packsAmount__button__disabled_tzn5d_35",$e="_checkoutOrderAmountCounter__button__disabled_tzn5d_44",He="_checkoutOrderAmountCounter__increase_tzn5d_48",Fe="_checkoutOrderAmountCounter__dicrease_tzn5d_51",Be="_checkoutOrderAmountCounter__text_tzn5d_54",l={checkoutOrderAmountCounter:we,checkoutOrderAmountCounter__disabled:qe,checkoutOrderAmountCounter__button:Te,checkoutOrder__packsAmount__button__disabled:Ee,checkoutOrderAmountCounter__button__disabled:$e,checkoutOrderAmountCounter__increase:He,checkoutOrderAmountCounter__dicrease:Fe,checkoutOrderAmountCounter__text:Be},Z=a.memo(({amount:e,dicreaseAmount:r,increaseAmount:s,isDisabled:_})=>{const d=a.useMemo(()=>e==1,[e]);return c.jsxs("div",{className:`${l.checkoutOrderAmountCounter} 
        ${_?l.checkoutOrderAmountCounter__disabled:""}`,children:[c.jsx("button",{disabled:d,onClick:()=>d?{}:r(),className:`${l.checkoutOrderAmountCounter__button} ${l.checkoutOrderAmountCounter__dicrease} 
              ${d?l.checkoutOrderAmountCounter__button__disabled:""}`,children:c.jsx("svg",{width:"29",height:"29",viewBox:"0 0 29 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("circle",{cx:"14.5",cy:"14.5",r:"14",stroke:"#FF5555"})})}),c.jsx("span",{className:l.checkoutOrderAmountCounter__text,children:e}),c.jsx("button",{onClick:()=>s(),className:`${l.checkoutOrderAmountCounter__button} ${l.checkoutOrderAmountCounter__increase}`,children:c.jsx("svg",{width:"29",height:"29",viewBox:"0 0 29 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("circle",{cx:"14.5",cy:"14.5",r:"14",stroke:"#FF5555"})})})]})}),Re="_ProjectActiveServices_69cye_1",Ve="_ProjectActiveServices__service_69cye_7",We="_ProjectActiveServices__service_text_69cye_12",C={ProjectActiveServices:Re,ProjectActiveServices__service:Ve,ProjectActiveServices__service_text:We},T=a.memo(({ProjectActiveServices:e})=>c.jsx("div",{className:C.ProjectActiveServices,children:e.map(r=>c.jsxs("div",{className:C.ProjectActiveServices__service,children:[c.jsx("svg",{width:"26",height:"18",viewBox:"0 0 26 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M22.8228 0.529734L9.34109 13.6329L3.1772 7.64215C2.4503 6.93581 1.27196 6.93581 0.545062 7.64215C-0.181687 8.34863 -0.181687 9.49387 0.545062 10.2004L8.02502 17.4702C8.38847 17.8233 8.86478 18 9.34109 18C9.8174 18 10.2937 17.8233 10.6572 17.4702L25.4549 3.08808C26.1817 2.3816 26.1817 1.23636 25.4549 0.529878C24.728 -0.176602 23.5495 -0.176602 22.8228 0.529734Z",fill:"#FF5555"})}),c.jsx("span",{className:C.ProjectActiveServices__service_text,children:r})]},r))})),De="_deadline_1sxol_1",ze="_deadlineWrapper_1sxol_4",Ge="_deadline__text_1sxol_9",S={deadline:De,deadlineWrapper:ze,deadline__text:Ge},M=a.memo(({deadline:e})=>c.jsxs("div",{className:S.deadlineWrapper,children:[c.jsx("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M15 8.75V15H18.75M26.25 15C26.25 21.2133 21.2133 26.25 15 26.25C8.7868 26.25 3.75 21.2133 3.75 15C3.75 8.7868 8.7868 3.75 15 3.75C21.2133 3.75 26.25 8.7868 26.25 15Z",stroke:"#FF5555",strokeWidth:"2.16667",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsxs("span",{className:S.deadline__text,children:["Срок выполнения: ",c.jsx("span",{className:S.deadline,children:e})]})]})),Je="_editions_adrk5_1",Ke="_editions_text_adrk5_6",P={editions:Je,editions_text:Ke},g=a.memo(({editionsAmount:e})=>c.jsxs("div",{className:P.editions,children:[c.jsx("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M5.07639 16.2505C5.02532 15.841 4.99902 15.4239 4.99902 15.0005C4.99902 9.47764 9.47617 5.00049 14.999 5.00049C18.1248 5.00049 20.9155 6.43458 22.7493 8.68069M22.7493 8.68069V5.00049M22.7493 8.68069V8.7504L18.9993 8.75049M24.9216 13.7505C24.9728 14.16 24.999 14.5771 24.999 15.0005C24.999 20.5234 20.5219 25.0005 14.999 25.0005C12.0123 25.0005 9.33139 23.6911 7.49902 21.615M7.49902 21.615V21.2505H11.249M7.49902 21.615V25.0005",stroke:"#FF5555",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsxs("span",{className:P.editions_text,children:[e," редакции"]})]})),Ue=a.memo(({pack:e,ExtraServices:r,setExtraServices:s})=>{const _=H(),[d,x]=a.useState(!1),j=L(o=>ye(o,e.packName)),m=L(o=>Pe(o)),O=o=>L(p=>Ze(p,e.packName,o)),i=a.useMemo(()=>o=>!!Object.assign([],r).find(h=>h.title===o.title),[r]),E=a.useCallback(o=>{const p=Object.assign([],r);if(i(o)){const h=r.filter(k=>k.title!==o.title);s(h),_(u.changeExtraServiceSelected({packType:e.packName,extraService:o,changeTo:!1}))}else p.push(o),s(p),_(u.changeExtraServiceSelected({packType:e.packName,extraService:o,changeTo:!0}))},[i,r,_,e.packName,s]),N=(o,p,h)=>{const k=Object.assign([],r),v=Object.assign([],k[k.findIndex(f=>f.title===h.title)]);v.amount||(v.amount=0),v.amount+=o,k[k.findIndex(f=>f.title===h.title)]=v,s(k),_(u.changeExtraServiceAmounts({packType:p,extraServiceTitle:h.title,extraServiceAmount:o}))};return a.useEffect(()=>{_(u.changeExtraServices({packType:e.packName,extraServices:e.extraServices}))},[_,e.extraServices,e.packName]),a.useEffect(()=>{_(u.changeFinalPrice(0)),_(u.clearProjectEditionsAmounts({packType:e.packName,amounts:1})),_(u.changeExtraServices({packType:e.packName,extraServices:[]})),_(u.setPackPrice({packType:e.packName,price:e.price}))},[_,e.packName,e.price]),c.jsxs("div",{className:t.checkoutOrder,children:[c.jsx("span",{className:t.checkoutOrder__header,children:"Варианты заказа"}),c.jsx("span",{className:t.checkoutOrder__separator}),c.jsxs("div",{className:t.checkoutOrder__title,children:[c.jsx("span",{className:t.checkoutOrder__caption,children:e.packName}),c.jsxs("span",{className:t.checkoutOrder__price,children:[e.price," ₽"]})]}),c.jsx("p",{className:t.checkoutOrder__desc,children:"Базовый — для стартапов. Я разработаю ваш креативный типографский логотип."}),c.jsx(T,{ProjectActiveServices:e.ProjectActiveServices}),c.jsxs("div",{className:t.checkoutOrder__wrapper,children:[c.jsxs("div",{className:t.checkoutOrder__info,children:[c.jsx(M,{deadline:e.deadline}),c.jsx(g,{editionsAmount:e.editionsAmount})]}),c.jsx(Z,{isDisabled:!1,amount:j,dicreaseAmount:()=>_(u.changeeditionsAmounts({packType:e.packName,amounts:-1})),increaseAmount:()=>_(u.changeeditionsAmounts({packType:e.packName,amounts:1}))})]}),c.jsx("span",{className:t.checkoutOrder__separator}),c.jsx("span",{className:t.checkoutOrder__caption,children:"Улучшите свой заказ с помощью дополнительных услуг"}),e.extraServices&&c.jsx("div",{className:t.checkoutOrder__extraServices,children:e.extraServices.map(o=>c.jsxs("div",{className:t.checkoutOrder__extraService,children:[c.jsxs("div",{className:t.checkoutOrder__extraService__header,children:[c.jsxs("div",{className:t.checkoutOrder__extraService__info,children:[c.jsx("h5",{className:t.checkoutOrder__caption,children:o.title}),c.jsx("p",{className:t.checkoutOrder__descSpan,children:o.desc})]}),c.jsx("div",{onClick:()=>E(o),className:`${t.checkoutOrder__extraService__select} 
                  ${i(o)?t.checkoutOrder__extraService__select__active:""}`})]}),c.jsxs("div",{className:t.checkoutOrder__extraService__footer,children:[c.jsxs("span",{className:t.checkoutOrder__price,children:[o.price," ₽"]}),o.scalability&&c.jsx(Z,{isDisabled:!i(o),amount:O(o.title),dicreaseAmount:()=>N(-1,e.packName,o),increaseAmount:()=>N(1,e.packName,o)})]})]},o.title))}),c.jsx("span",{className:`${t.checkoutOrder__separator} ${t.checkoutOrder__separator_big}`}),c.jsxs("div",{className:t.checkoutOrder__result,children:[c.jsxs("div",{className:t.checkoutOrder__result__header,children:[c.jsx("span",{className:t.checkoutOrder__caption,children:"Итого"}),c.jsxs("span",{className:t.checkoutOrder__price,children:[m," ₽"]})]}),c.jsxs("span",{className:t.checkoutOrder__descSpan,children:[e.packName," пакет"," ",r.map(o=>c.jsxs("span",{children:[" + ",o.title," "]},o.title))]}),c.jsx("span",{className:`${t.checkoutOrder__separator} ${t.checkoutOrder__separator_big}`}),c.jsxs("div",{className:t.checkoutOrder__resultWrapper,children:[c.jsxs("div",{className:`${t.checkoutOrder__resultItems} 
              ${d?t.checkoutOrder__resultItems__active:""}`,children:[c.jsxs("div",{className:t.checkoutOrder__resultItem,children:[c.jsx("svg",{width:"28",height:"26",viewBox:"0 0 28 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M14.88 13.1309C14.88 12.4682 14.3427 11.9309 13.68 11.9309C13.0173 11.9309 12.48 12.4682 12.48 13.1309H14.88ZM13.68 24.1997H12.48C12.48 24.5981 12.6778 24.9706 13.0079 25.1938C13.3379 25.417 13.7573 25.4618 14.1271 25.3133L13.68 24.1997ZM22.8704 20.5101L23.3175 21.6237C23.7723 21.4411 24.0704 21.0002 24.0704 20.5101H22.8704ZM24.0704 12.8397C24.0704 12.177 23.5331 11.6397 22.8704 11.6397C22.2077 11.6397 21.6704 12.177 21.6704 12.8397H24.0704ZM14.4087 12.1774C13.8821 11.775 13.129 11.8757 12.7266 12.4022C12.3242 12.9288 12.4248 13.6819 12.9514 14.0843L14.4087 12.1774ZM16.9568 15.6349L16.2282 16.5883C16.585 16.861 17.064 16.9117 17.4699 16.7197L16.9568 15.6349ZM23.3787 13.9245C23.9778 13.641 24.2338 12.9256 23.9504 12.3266C23.6669 11.7275 22.9515 11.4715 22.3525 11.7549L23.3787 13.9245ZM13.233 12.0173C12.6179 12.2642 12.3195 12.9629 12.5664 13.5779C12.8133 14.193 13.512 14.4914 14.1271 14.2445L13.233 12.0173ZM23.3175 10.5549C23.9325 10.308 24.2309 9.60923 23.984 8.9942C23.7371 8.37918 23.0384 8.08075 22.4234 8.32766L23.3175 10.5549ZM22.4235 10.5549C23.0386 10.8018 23.7373 10.5032 23.984 9.88815C24.2309 9.27312 23.9323 8.57441 23.3173 8.3276L22.4235 10.5549ZM14.1269 4.6396C13.5119 4.39278 12.8131 4.69131 12.5664 5.30636C12.3195 5.92144 12.6181 6.62014 13.2331 6.86696L14.1269 4.6396ZM23.4584 8.39683C22.8808 8.07206 22.1491 8.27711 21.8243 8.85483C21.4995 9.43254 21.7047 10.1642 22.2824 10.489L23.4584 8.39683ZM26.152 11.2877L26.6645 12.3728C27.0704 12.1811 27.3354 11.7789 27.3512 11.3302C27.3672 10.8816 27.1314 10.4616 26.74 10.2416L26.152 11.2877ZM22.3525 11.7549C21.7533 12.0379 21.4975 12.7528 21.7805 13.3522C22.0635 13.9514 22.7794 14.2075 23.3787 13.9245L22.3525 11.7549ZM21.9759 8.63604C21.5312 9.12742 21.569 9.88624 22.0603 10.331C22.5517 10.7757 23.3106 10.7379 23.7554 10.2466L21.9759 8.63604ZM26.8 5.09408L27.6898 5.89931C27.9615 5.59902 28.0635 5.18188 27.9608 4.79009C27.8583 4.39828 27.565 4.08467 27.1808 3.95612L26.8 5.09408ZM16.9568 1.79968L17.3376 0.661724C16.8682 0.504572 16.3503 0.651964 16.0338 1.03281L16.9568 1.79968ZM12.749 4.98641C12.3255 5.49617 12.3954 6.25275 12.9051 6.67627C13.4149 7.0998 14.1715 7.0299 14.5951 6.52014L12.749 4.98641ZM4.03471 8.3276C3.41965 8.57441 3.12113 9.27312 3.36794 9.88815C3.61476 10.5032 4.31346 10.8018 4.92853 10.5549L4.03471 8.3276ZM14.1189 6.86696C14.7339 6.62014 15.0325 5.92144 14.7856 5.30636C14.5389 4.69131 13.8402 4.39278 13.2251 4.6396L14.1189 6.86696ZM5.06967 10.4874C5.64738 10.1626 5.85244 9.43094 5.52767 8.85323C5.20289 8.27552 4.47129 8.07046 3.89357 8.39523L5.06967 10.4874ZM1.20002 11.2861L0.611974 10.24C0.220854 10.4598 -0.0149384 10.8797 0.000757575 11.328C0.0164536 11.7765 0.280998 12.1787 0.68655 12.3707L1.20002 11.2861ZM3.96815 13.9243C4.56714 14.2078 5.28263 13.9522 5.56621 13.3531C5.8498 12.7541 5.5941 12.0387 4.99509 11.755L3.96815 13.9243ZM4.92869 8.32766C4.31367 8.08075 3.61492 8.37918 3.36801 8.9942C3.12109 9.60923 3.41953 10.308 4.03455 10.5549L4.92869 8.32766ZM13.225 14.2445C13.84 14.4914 14.5387 14.193 14.7856 13.5779C15.0325 12.9629 14.7341 12.2642 14.1191 12.0173L13.225 14.2445ZM3.58514 10.239C4.02569 10.7341 4.7842 10.7782 5.27932 10.3378C5.77444 9.89727 5.81866 9.1387 5.3781 8.64358L3.58514 10.239ZM1.20002 5.75328L0.725814 4.65096C0.371638 4.80331 0.112246 5.11656 0.0285976 5.49292C-0.0550504 5.86929 0.0472375 6.26294 0.303542 6.55097L1.20002 5.75328ZM10.3904 1.79968L11.3138 1.03326C10.9739 0.623804 10.405 0.487068 9.91621 0.697356L10.3904 1.79968ZM12.7487 6.51969C13.1719 7.02966 13.9285 7.09992 14.4384 6.67664C14.9483 6.25336 15.0187 5.49681 14.5954 4.98686L12.7487 6.51969ZM14.872 13.1325C14.872 12.4698 14.3347 11.9325 13.672 11.9325C13.0093 11.9325 12.472 12.4698 12.472 13.1325H14.872ZM13.672 24.1997L13.225 25.3133C13.5947 25.4618 14.0141 25.417 14.3442 25.1938C14.6743 24.9706 14.872 24.5981 14.872 24.1997H13.672ZM4.48162 20.5101H3.28162C3.28162 21.0002 3.5797 21.4411 4.03455 21.6237L4.48162 20.5101ZM5.68162 12.8397C5.68162 12.177 5.14436 11.6397 4.48162 11.6397C3.81889 11.6397 3.28162 12.177 3.28162 12.8397H5.68162ZM14.4 14.0848C14.9269 13.6829 15.028 12.9298 14.6259 12.4029C14.224 11.876 13.4709 11.7749 12.944 12.177L14.4 14.0848ZM10.3904 15.6349L9.87727 16.7197C10.2829 16.9115 10.7616 16.8611 11.1184 16.5888L10.3904 15.6349ZM4.99509 11.755C4.39601 11.4717 3.68028 11.7275 3.39687 12.3266C3.11346 12.9256 3.36906 13.6408 3.96815 13.9243L4.99509 11.755ZM12.48 13.1309V24.1997H14.88V13.1309H12.48ZM14.1271 25.3133L23.3175 21.6237L22.4234 19.3965L13.233 23.0861L14.1271 25.3133ZM24.0704 20.5101V12.8397H21.6704V20.5101H24.0704ZM12.9514 14.0843L16.2282 16.5883L17.6855 14.6814L14.4087 12.1774L12.9514 14.0843ZM17.4699 16.7197L23.3787 13.9245L22.3525 11.7549L16.4437 14.5501L17.4699 16.7197ZM14.1271 14.2445L23.3175 10.5549L22.4234 8.32766L13.233 12.0173L14.1271 14.2445ZM23.3173 8.3276L14.1269 4.6396L13.2331 6.86696L22.4235 10.5549L23.3173 8.3276ZM22.2824 10.489L25.564 12.3338L26.74 10.2416L23.4584 8.39683L22.2824 10.489ZM25.6395 10.2026L22.3525 11.7549L23.3787 13.9245L26.6645 12.3728L25.6395 10.2026ZM23.7554 10.2466L27.6898 5.89931L25.9103 4.28884L21.9759 8.63604L23.7554 10.2466ZM27.1808 3.95612L17.3376 0.661724L16.576 2.93763L26.4192 6.23203L27.1808 3.95612ZM16.0338 1.03281L12.749 4.98641L14.5951 6.52014L17.8799 2.56654L16.0338 1.03281ZM4.92853 10.5549L14.1189 6.86696L13.2251 4.6396L4.03471 8.3276L4.92853 10.5549ZM3.89357 8.39523L0.611974 10.24L1.78807 12.3322L5.06967 10.4874L3.89357 8.39523ZM0.68655 12.3707L3.96815 13.9243L4.99509 11.755L1.71349 10.2014L0.68655 12.3707ZM4.03455 10.5549L13.225 14.2445L14.1191 12.0173L4.92869 8.32766L4.03455 10.5549ZM5.3781 8.64358L2.0965 4.95558L0.303542 6.55097L3.58514 10.239L5.3781 8.64358ZM1.67423 6.8556L10.8647 2.902L9.91621 0.697356L0.725814 4.65096L1.67423 6.8556ZM9.46706 2.56609L12.7487 6.51969L14.5954 4.98686L11.3138 1.03326L9.46706 2.56609ZM12.472 13.1325V24.1997H14.872V13.1325H12.472ZM14.1191 23.0861L4.92869 19.3965L4.03455 21.6237L13.225 25.3133L14.1191 23.0861ZM5.68162 20.5101V12.8397H3.28162V20.5101H5.68162ZM12.944 12.177L9.66249 14.681L11.1184 16.5888L14.4 14.0848L12.944 12.177ZM10.9035 14.5501L4.99509 11.755L3.96815 13.9243L9.87727 16.7197L10.9035 14.5501Z",fill:"#FF5555"})}),c.jsxs("span",{className:t.checkoutOrder__resultItem_span,children:[e.packName," пакет",r.length>0&&c.jsx("span",{children:" + доп.услуги"})]})]}),c.jsx("div",{className:t.checkoutOrder__resultItem,children:c.jsx(M,{deadline:e.deadline})}),c.jsx("div",{className:t.checkoutOrder__resultItem,children:c.jsx(g,{editionsAmount:e.editionsAmount})})]}),c.jsx("svg",{className:`${t.checkoutOrder__resultItems__open} 
              ${d?"":t.checkoutOrder__resultItems__open__disactive}`,onClick:()=>x(!d),width:"24",height:"14",viewBox:"0 0 24 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97918 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z",fill:"#FF5555"})})]})]}),c.jsx(A,{className:t.checkoutOrder__continue,type:I.RED,text:`Продолжить (${m} ₽)`})]})}),Qe=e=>a.createElement("svg",{width:26,height:18,viewBox:"0 0 26 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{opacity:.4,d:"M22.8228 0.529734L9.34109 13.6329L3.1772 7.64215C2.4503 6.93581 1.27196 6.93581 0.545062 7.64215C-0.181687 8.34863 -0.181687 9.49387 0.545062 10.2004L8.02502 17.4702C8.38847 17.8233 8.86478 18 9.34109 18C9.8174 18 10.2937 17.8233 10.6572 17.4702L25.4549 3.08808C26.1817 2.3816 26.1817 1.23636 25.4549 0.529878C24.728 -0.176602 23.5495 -0.176602 22.8228 0.529734Z",fill:"black"})),tc=a.memo(({packs:e})=>{const[r,s]=a.useState(w.BASE),_=e[r],[d,x]=a.useState(!1),[j,m]=a.useState([]),O=a.useCallback(()=>{m([]),x(!0)},[]);return c.jsxs("div",{className:n.projectInfo_pack,children:[c.jsx("div",{className:n.projectInfo_pack__tabs,children:Object.keys(e).map(i=>c.jsx("span",{onClick:()=>s(i),className:`${n.projectInfo_pack__tab} ${r==i?n.projectInfo_pack__tab__active:""}`,children:i},i))}),c.jsxs("div",{className:n.projectInfo_pack__wrapper,children:[c.jsxs("div",{className:n.projectInfo_pack__header,children:[c.jsxs("span",{className:n.projectInfo_pack__packName,children:[r," пакет"]}),c.jsxs("span",{className:n.projectInfo_pack__price,children:[_.price," ₽"]})]}),c.jsx("p",{className:n.projectInfo_pack__desc,children:"1 концепция + файлы PNG и JPG + исходники в формате PSD"}),c.jsxs("div",{className:n.projectInfo_pack__info,children:[c.jsx(M,{deadline:_.deadline}),c.jsx(g,{editionsAmount:_.editionsAmount})]}),c.jsx(T,{ProjectActiveServices:_.ProjectActiveServices}),_.disProjectActiveServices&&c.jsx("div",{className:n.projectInfo_pack__disProjectActiveServices,children:_.disProjectActiveServices.map(i=>c.jsxs("div",{className:"ProjectPage__service",children:[c.jsx(Qe,{}),c.jsx("span",{className:"ProjectPage__service_text",children:i})]},i))}),c.jsx(A,{className:n.projectInfo_pack__continue,text:"Продолжить",type:I.RED,onClick:O}),c.jsx(A,{className:n.projectInfo_pack__chat,text:"Связаться с продавцом",type:I.BLACK}),d&&c.jsx(F,{setModalIsOpen:x,children:c.jsx(Ue,{pack:{packName:r,..._},ExtraServices:j,setExtraServices:m})})]})]})});export{w as P,T as a,M as b,g as c,rc as d,tc as e};
