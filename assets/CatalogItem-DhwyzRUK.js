import{r as t,j as e}from"./react-C3EGSwTV.js";import{ab as J,ac as f,ad as Q,z as S,B as b,g as y,A as X,L as Y,F as o,j as ee,S as ae,p as T,D as te,s as F,b as d,a5 as i,t as _e,e as se,f as ne,ae as re,af as ie,a4 as V}from"./app-routes-zXkCwipe.js";import{P as $}from"./primereact-CKVv_CF4.js";import{L as H}from"./react-router-dom-BGdsm6zk.js";import{a as x,u as I}from"./index-CfyHYms9.js";import{a as oe,U as N}from"./UseLocalStorage-Y7eeG9MN.js";import{b as le}from"./@reduxjs-D1GcYrcL.js";import{s as E,u as ce}from"./react-redux-DCb0tGWe.js";import{f as me}from"./redux-E-Rf1aW7.js";import{D as Ce,C as ge}from"./DynamicModuleLoader-Ezq2EJ0O.js";import{F as P}from"./FormatingNumber-B8mhA8qh.js";import{O as de}from"./OrderSecurityGuarantee-9au1J_Ax.js";import{S as pe}from"./DownloadSVG-CHiIXPp0.js";const he="_MoveToOpenChannelCart_w2saw_1",ue="_MoveToOpenChannelCart__visible_w2saw_11",xe="_MoveToOpenChannelCart__item_w2saw_14",ve="_MoveToOpenChannelCart__items_w2saw_18",we="_MoveToOpenChannelCart__title_w2saw_21",fe="_MoveToOpenChannelCart__value_w2saw_28",je="_MoveToOpenChannelCart__finalPrice_w2saw_37",be="_MoveToOpenChannelCart__toCart_w2saw_46",C={MoveToOpenChannelCart:he,MoveToOpenChannelCart__visible:ue,MoveToOpenChannelCart__item:xe,MoveToOpenChannelCart__items:ve,MoveToOpenChannelCart__title:we,MoveToOpenChannelCart__value:fe,MoveToOpenChannelCart__finalPrice:je,MoveToOpenChannelCart__toCart:be},A=a=>a?a.channelsIDs:[],ye=(a,s)=>a?!!a.channelsIDs.find(r=>r==s):!1,D=t.memo(({MoveToOpenChannelCartIsAppear:a,setMoveToOpenChannelCartIsAppear:s})=>{t.useEffect(()=>{s(!0)},[s]);const r=x(n=>A(n.MoveToOpenChannelCartReducer));return J({children:e.jsx("div",{className:`Page__VioletBorderContainer ${C.MoveToOpenChannelCart} ${a?C.MoveToOpenChannelCart__visible:""}`,children:e.jsxs(f,{children:[e.jsxs(Q,{className:C.MoveToOpenChannelCart__items,justify:"between",children:[e.jsxs(f,{justify:"center",align:"center",className:`Page__SirineWrapper ${C.MoveToOpenChannelCart__item}`,children:[e.jsx("span",{className:C.MoveToOpenChannelCart__title,children:"Выбрано:"}),e.jsxs("span",{className:C.MoveToOpenChannelCart__value,children:[r.length," каналов"]})]}),e.jsxs(f,{align:"center",justify:"center",className:`Page__SirineWrapper ${C.MoveToOpenChannelCart__item}`,children:[e.jsx("span",{className:C.MoveToOpenChannelCart__title,children:"Подписчики"}),e.jsx("span",{className:C.MoveToOpenChannelCart__value,children:r.reduce((n,c)=>{var l;return n+(((l=S.find(g=>g.id==c))==null?void 0:l.subscribersAmount)||0)},0)})]}),e.jsxs(f,{justify:"center",align:"center",className:`Page__SirineWrapper ${C.MoveToOpenChannelCart__item}`,children:[e.jsx("span",{className:C.MoveToOpenChannelCart__title,children:"Просмотров"}),e.jsxs("span",{className:C.MoveToOpenChannelCart__value,children:[r.reduce((n,c)=>{var l;return n+(((l=S.find(g=>g.id==c))==null?void 0:l.ThousandsViews)||0)},0).toFixed(2),"K"]})]})]}),e.jsxs("span",{className:C.MoveToOpenChannelCart__finalPrice,children:["Итого:"," ",r.reduce((n,c)=>{var l;return n+(((l=S.find(g=>g.id==c))==null?void 0:l.price)||0)},0).toFixed(2)," ","₽"]}),e.jsx(b,{className:C.MoveToOpenChannelCart__toCart,type:y.RED,text:"Перейти в корзину",to:X.CATALOG_CART(),onClick:()=>setTimeout(()=>location.reload(),0)})]})})})});D.displayName="MoveToOpenChannelCart";const M=(a,s)=>oe(a,Y.MOVE_TO_OPEN_CHANNEL_CART,s);function Se(a,s){return[()=>x(a,E),a]}function G(a){const s=le(a);return{...s,useActions:()=>{const n=ce();return t.useMemo(()=>me(s.actions,n),[n])}}}const Te={channelsIDs:[]},Ne=G({name:"MoveToOpenChannelCart",initialState:Te,reducers:{setChannelsForCart:(a,s)=>{a.channelsIDs=s.payload.channelsIDs},addChannelToCart:(a,s)=>{a.channelsIDs.push(s.payload.channelID),M(N.UPDATE,a.channelsIDs.map(r=>r))},removeChannelFromCart:(a,s)=>{a.channelsIDs.splice(a.channelsIDs.findIndex(r=>r==s.payload.channelID),1),M(N.UPDATE,a.channelsIDs.map(r=>r))}}}),{actions:Pe,reducer:Me,useActions:Ee}=Ne,Ae="_catalog__item_ypiij_1",Re="_catalog__item__wrapperPadding_ypiij_9",Oe="_catalog__item__avatar_ypiij_16",Le="_catalog__item__usersAmount_ypiij_25",Ve="_catalog__item__usersAmount__text_ypiij_30",$e="_catalog__item__info_ypiij_37",He="_catalog__item__infoHeader_ypiij_43",ke="_catalog__item__infoFooter_ypiij_47",Fe="_catalog__item__title_ypiij_51",Ie="_catalog__item__desc_ypiij_59",De="_catalog__item__tags_ypiij_66",Ge="_catalog__item__tag_ypiij_66",Ze="_catalog__item__stars_ypiij_79",We="_catalog__item__stars__text_ypiij_84",Be="_catalog__item__star_ypiij_79",Ue="_catalog__item__subscribers_ypiij_93",ze="_catalog__item__subscribers__genders_ypiij_102",Ke="_catalog__item__subscribers__gender_ypiij_102",qe="_catalog__item__subscribers__gender__women_ypiij_116",Je="_catalog__item__subscribers__gender__progressbar_ypiij_119",Qe="_catalog__item__subscribers__gender__progressbar__men_ypiij_124",Xe="_catalog__item__subscribers__gender__progressbar__women_ypiij_127",Ye="_catalog__item__category__caption_ypiij_130",ea="_catalog__item__category__amount_ypiij_137",aa="_catalog__item__views_ypiij_145",ta="_catalog__item__viewsWrapperViews_ypiij_155",_a="_catalog__item__viewsWrapperER_ypiij_161",sa="_catalog__item__views__amount_ypiij_166",na="_catalog__item__CPV_ypiij_169",ra="_catalog__item__subfooter_ypiij_177",ia="_catalog__item__subfooter__small_ypiij_185",oa="_catalog__item__price_ypiij_188",la="_catalog__item__footer_ypiij_198",ca="_catalog__item__footer__small_ypiij_211",ma="_catalog__item__footer__small__icon_ypiij_216",Ca="_catalog__item__footer__item_ypiij_219",ga="_catalog__item__footer__inCart_ypiij_229",da="_catalog__item__footerWrapper_ypiij_235",pa="_catalog__item__select_ypiij_241",ha="_catalog__item__select__wrapper_ypiij_247",ua="_catalog__item__select__svg_ypiij_250",_={catalog__item:Ae,catalog__item__wrapperPadding:Re,catalog__item__avatar:Oe,catalog__item__usersAmount:Le,catalog__item__usersAmount__text:Ve,catalog__item__info:$e,catalog__item__infoHeader:He,catalog__item__infoFooter:ke,catalog__item__title:Fe,catalog__item__desc:Ie,catalog__item__tags:De,catalog__item__tag:Ge,catalog__item__stars:Ze,catalog__item__stars__text:We,catalog__item__star:Be,catalog__item__subscribers:Ue,catalog__item__subscribers__genders:ze,catalog__item__subscribers__gender:Ke,catalog__item__subscribers__gender__women:qe,catalog__item__subscribers__gender__progressbar:Je,catalog__item__subscribers__gender__progressbar__men:Qe,catalog__item__subscribers__gender__progressbar__women:Xe,catalog__item__category__caption:Ye,catalog__item__category__amount:ea,catalog__item__views:aa,catalog__item__viewsWrapperViews:ta,catalog__item__viewsWrapperER:_a,catalog__item__views__amount:sa,catalog__item__CPV:na,catalog__item__subfooter:ra,catalog__item__subfooter__small:ia,catalog__item__price:oa,catalog__item__footer:la,catalog__item__footer__small:ca,catalog__item__footer__small__icon:ma,catalog__item__footer__item:Ca,catalog__item__footer__inCart:ga,catalog__item__footerWrapper:da,catalog__item__select:pa,catalog__item__select__wrapper:ha,catalog__item__select__svg:ua},xa=[{value:"Формат:",label:"Формат:"},{value:"Формат:2",label:"Формат:2"},{value:"Формат:3",label:"Формат:3"}],va=[{value:"Кол-во",label:"Кол-во"},{value:"Кол-во2",label:"Кол-во:2"},{value:"Кол-во3",label:"Кол-во3"}],wa=[{value:"Без удаления",label:"Без удаления"},{value:"1/24",label:"1/24"},{value:"2/24",label:"2/24"}],fa=[{value:"1 час в топе",label:"1 час в топе"},{value:"2 часа в топе",label:"2 часа в топе"},{value:"3 часа в топе",label:"3 часа в топе"}],ja=a=>t.createElement("div",{style:{rotate:"-90deg"}},t.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.39131 7.89143C5.63538 7.64736 6.03112 7.64736 6.27519 7.89143L9.99992 11.6161L13.7247 7.89143C13.9688 7.64736 14.3644 7.64736 14.6085 7.89143C14.8526 8.13551 14.8526 8.53121 14.6085 8.77529L10.4418 12.942C10.1978 13.186 9.80208 13.186 9.558 12.942L5.39131 8.77529C5.14723 8.53121 5.14723 8.13551 5.39131 7.89143Z",fill:"#C4C4C4"}))),ba=a=>t.createElement("svg",{width:13,height:13,viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("g",{clipPath:"url(#clip0_5_258)"},t.createElement("path",{d:"M8.00591 5.79565H4.98988C4.77947 5.79565 4.60889 5.96624 4.60889 6.17665V12.619C4.60889 12.8294 4.77947 13 4.98988 13H8.00591C8.21632 13 8.3869 12.8294 8.3869 12.619V6.17665C8.3869 5.96624 8.21632 5.79565 8.00591 5.79565Z",fill:"black"}),t.createElement("path",{d:"M12.6073 9.08411H9.52699C9.31658 9.08411 9.146 9.25469 9.146 9.4651V12.6191C9.146 12.8295 9.31658 13.0001 9.52699 13.0001H12.6073C12.8177 13.0001 12.9883 12.8295 12.9883 12.6191V9.4651C12.9883 9.25466 12.8177 9.08411 12.6073 9.08411Z",fill:"black"}),t.createElement("path",{d:"M3.47281 7.56299H0.392469C0.182058 7.56299 0.0114746 7.73357 0.0114746 7.94398V12.619C0.0114746 12.8294 0.182058 13 0.392469 13H3.47281C3.68322 13 3.8538 12.8294 3.8538 12.619V7.94398C3.8538 7.73357 3.68324 7.56299 3.47281 7.56299Z",fill:"black"}),t.createElement("path",{d:"M6.50148 2.52576H6.49434C5.62969 2.52576 4.92627 3.2292 4.92627 4.09383V4.37406C4.92627 4.62976 5.13429 4.83781 5.39002 4.83781H7.60583C7.86152 4.83781 8.06957 4.62978 8.06957 4.37406V4.09383C8.06955 3.2292 7.36613 2.52576 6.50148 2.52576Z",fill:"black"}),t.createElement("path",{d:"M6.49796 1.76381C6.98808 1.76381 7.3868 1.36717 7.3868 0.879601C7.33803 -0.293378 5.65769 -0.293022 5.60913 0.879601C5.60913 1.36717 6.00785 1.76381 6.49796 1.76381Z",fill:"black"}),t.createElement("path",{d:"M1.93629 4.349H1.92915C1.0645 4.349 0.361084 5.05244 0.361084 5.91707V6.1973C0.361084 6.453 0.569107 6.66105 0.82483 6.66105H3.04064C3.29634 6.66105 3.50439 6.45303 3.50439 6.1973V5.91707C3.50439 5.05244 2.80094 4.349 1.93629 4.349Z",fill:"black"}),t.createElement("path",{d:"M1.93253 3.58705C2.42265 3.58705 2.82137 3.19041 2.82137 2.70284C2.7726 1.52986 1.09227 1.53022 1.0437 2.70284C1.0437 3.19041 1.44242 3.58705 1.93253 3.58705Z",fill:"black"}),t.createElement("path",{d:"M11.0708 5.64807H11.0637C10.199 5.64807 9.49561 6.35151 9.49561 7.21617V7.4964C9.49561 7.7521 9.70363 7.96015 9.95935 7.96015H12.1752C12.4309 7.96015 12.6389 7.75212 12.6389 7.4964V7.21617C12.6389 6.35151 11.9355 5.64807 11.0708 5.64807Z",fill:"black"}),t.createElement("path",{d:"M11.0671 4.8861C11.5572 4.8861 11.9559 4.48946 11.9559 4.00192C11.9071 2.82894 10.2268 2.82929 10.1782 4.00192C10.1782 4.48946 10.5769 4.8861 11.0671 4.8861Z",fill:"black"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_5_258"},t.createElement("rect",{width:13,height:13,fill:"white"})))),ya=a=>t.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("g",{clipPath:"url(#clip0_5_300)"},t.createElement("path",{d:"M12 24C5.38125 24 0 18.6187 0 12C0 5.38125 5.38125 0 12 0C18.6187 0 24 5.38125 24 12C24 18.6187 18.6187 24 12 24ZM12 1.5C6.21094 1.5 1.5 6.21094 1.5 12C1.5 17.7891 6.21094 22.5 12 22.5C17.7891 22.5 22.5 17.7891 22.5 12C22.5 6.21094 17.7891 1.5 12 1.5ZM16.9266 10.2422C16.9266 9.82969 16.5891 9.49219 16.1766 9.49219H7.82344C7.41094 9.49219 7.07344 9.82969 7.07344 10.2422C7.07344 10.6547 7.41094 10.9922 7.82344 10.9922H16.1766C16.5891 10.9922 16.9266 10.6547 16.9266 10.2422ZM16.9266 6.72656C16.9266 6.31406 16.5891 5.97656 16.1766 5.97656H7.82344C7.41094 5.97656 7.07344 6.31406 7.07344 6.72656C7.07344 7.13906 7.41094 7.47656 7.82344 7.47656H16.1766C16.5891 7.47656 16.9266 7.13906 16.9266 6.72656ZM16.9266 17.2734C16.9266 16.8609 16.5891 16.5234 16.1766 16.5234H7.82344C7.41094 16.5234 7.07344 16.8609 7.07344 17.2734C7.07344 17.6859 7.41094 18.0234 7.82344 18.0234H16.1766C16.5891 18.0234 16.9266 17.6906 16.9266 17.2734ZM16.9266 13.7578C16.9266 13.3453 16.5891 13.0078 16.1766 13.0078H7.82344C7.41094 13.0078 7.07344 13.3453 7.07344 13.7578C7.07344 14.1703 7.41094 14.5078 7.82344 14.5078H16.1766C16.5891 14.5078 16.9266 14.175 16.9266 13.7578Z",fill:"white"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_5_300"},t.createElement("rect",{width:24,height:24,fill:"white",transform:"matrix(1 0 0 -1 0 24)"})))),Sa=a=>t.createElement("svg",{width:31,height:31,viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("path",{d:"M15.4999 27.125C15.1124 27.125 14.7249 26.9958 14.5958 26.7375L5.03744 16.275C2.71244 13.6917 2.71244 9.68751 5.29577 7.23334C6.58744 5.94168 8.39577 5.16668 10.3333 5.29584C12.1416 5.42501 13.9499 6.32918 15.1124 7.75001L15.4999 8.26668L16.0166 7.75001C17.1791 6.32918 18.9874 5.42501 20.7958 5.29584C22.6041 5.16668 24.5416 5.94168 25.8333 7.23334C28.2874 9.68751 28.4166 13.6917 26.0916 16.275L16.5333 26.7375C16.2749 26.9958 15.8874 27.125 15.4999 27.125ZM9.94577 7.75001C8.78327 7.75001 7.87911 8.26668 7.10411 8.91251C5.55411 10.4625 5.55411 12.7875 6.97494 14.4667L15.4999 23.8958L24.0249 14.4667C25.4458 12.9167 25.4458 10.4625 23.8958 8.91251C23.1208 8.13751 21.9583 7.62084 20.7958 7.75001C19.6333 7.75001 18.5999 8.39584 17.9541 9.30001L16.5333 11.1083C16.0166 11.7542 14.9833 11.7542 14.4666 11.1083L13.0458 9.30001C12.2708 8.39584 11.2374 7.87918 10.0749 7.75001H9.94577Z",fill:"white"})),Ta=a=>t.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("path",{d:"M1.87476 1.87354V3.75051H5.77124L8.43543 19.7631V22.6745C7.35328 23.068 6.56775 24.104 6.56775 25.3149C6.56775 26.857 7.83439 28.1237 9.37659 28.1237C10.9188 28.1237 12.1873 26.857 12.1873 25.3149C12.1873 24.9843 12.1182 24.6697 12.0115 24.3737H20.806C20.6982 24.6706 20.6229 24.9832 20.6229 25.3149C20.6229 26.857 21.8969 28.1237 23.4391 28.1237C24.9813 28.1237 26.2497 26.857 26.2497 25.3149C26.2497 24.9839 26.1791 24.67 26.0721 24.3737H28.1247V22.4969H10.3122V20.6219H23.4391C23.8404 20.6211 24.1967 20.3648 24.3253 19.9845L28.0771 8.73285C28.2775 8.12762 27.8285 7.50315 27.1909 7.50057H18.7497V9.37538H25.8835L22.7616 18.7468H10.1749L8.60938 9.37538H14.9998V7.50057H8.29628L7.48695 2.65555C7.41126 2.20566 7.02398 1.87555 6.56776 1.87354H1.87476ZM15.9354 7.50057V13.032C15.5093 12.4348 15.0755 11.8433 14.6409 11.2524L13.1266 12.3454C14.1168 13.729 15.1176 15.1051 16.1149 16.4836C16.4893 16.9981 17.2565 16.9981 17.631 16.4836C18.6297 15.104 19.6256 13.7221 20.6284 12.3454L19.105 11.2524C18.6726 11.8493 18.2416 12.4472 17.8104 13.045V7.50057H15.9354ZM9.37659 24.3737C9.90546 24.3737 10.3123 24.786 10.3123 25.3149C10.3123 25.8437 9.90546 26.2487 9.37659 26.2487C8.84772 26.2487 8.43543 25.8437 8.43543 25.3149C8.43543 24.786 8.84772 24.3737 9.37659 24.3737ZM23.4391 24.3737C23.968 24.3737 24.3748 24.786 24.3748 25.3149C24.3748 25.8437 23.968 26.2487 23.4391 26.2487C22.9102 26.2487 22.4979 25.8437 22.4979 25.3149C22.4979 24.786 22.9102 24.3737 23.4391 24.3737Z",fill:"white"})),Na=a=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("g",{clipPath:"url(#clip0_5_197)"},t.createElement("path",{d:"M8.00005 0.000244141C3.5888 0.000244141 0 3.58899 0 8.00019C0 12.4114 3.5888 16.0001 8.00005 16.0001C12.4112 16.0001 16 12.4114 16 8.00019C16 3.58899 12.4112 0.000244141 8.00005 0.000244141ZM8.00005 14.6887C4.31195 14.6887 1.31147 11.6883 1.31147 8.00019C1.31147 4.31214 4.31195 1.31171 8.00005 1.31171C11.6881 1.31171 14.6885 4.31214 14.6885 8.00019C14.6885 11.6883 11.6881 14.6887 8.00005 14.6887Z",fill:"#FF5555"}),t.createElement("path",{d:"M11.4608 4.92958L6.71089 9.67956L4.5392 7.50787C4.2831 7.25182 3.86794 7.25182 3.61184 7.50787C3.35579 7.76397 3.35579 8.17913 3.61184 8.43524L6.2472 11.0706C6.37526 11.1986 6.54307 11.2627 6.71089 11.2627C6.8787 11.2627 7.04652 11.1986 7.17457 11.0706L12.3882 5.857C12.6442 5.60089 12.6442 5.18574 12.3882 4.92963C12.1321 4.67353 11.7169 4.67353 11.4608 4.92958Z",fill:"#FF5555"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_5_197"},t.createElement("rect",{width:16,height:16,fill:"white"})))),Pa=a=>t.createElement("svg",{width:19,height:19,viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("path",{d:"M9.49996 16.625C9.26246 16.625 9.02496 16.5459 8.94579 16.3875L3.08746 9.97504C1.66246 8.39171 1.66246 5.93754 3.24579 4.43338C4.03746 3.64171 5.14579 3.16671 6.33329 3.24588C7.44163 3.32504 8.54996 3.87921 9.26246 4.75004L9.49996 5.06671L9.81663 4.75004C10.5291 3.87921 11.6375 3.32504 12.7458 3.24588C13.8541 3.16671 15.0416 3.64171 15.8333 4.43338C17.3375 5.93754 17.4166 8.39171 15.9916 9.97504L10.1333 16.3875C9.97496 16.5459 9.73746 16.625 9.49996 16.625ZM6.09579 4.75004C5.38329 4.75004 4.82913 5.06671 4.35413 5.46254C3.40413 6.41254 3.40413 7.83754 4.27496 8.86671L9.49996 14.6459L14.725 8.86671C15.5958 7.91671 15.5958 6.41254 14.6458 5.46254C14.1708 4.98754 13.4583 4.67088 12.7458 4.75004C12.0333 4.75004 11.4 5.14588 11.0041 5.70004L10.1333 6.80838C9.81663 7.20421 9.18329 7.20421 8.86663 6.80838L7.99579 5.70004C7.52079 5.14588 6.88746 4.82921 6.17496 4.75004H6.09579Z",fill:"#FF5555"})),Ma=a=>t.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("g",{clipPath:"url(#clip0_5_217)"},t.createElement("path",{d:"M10.3095 0.455244C9.91696 0.255521 9.43674 0.412013 9.23707 0.804759L3.30494 12.4724C3.10527 12.8651 3.26176 13.3452 3.65446 13.5448C3.77027 13.6037 3.89369 13.6316 4.0153 13.6316C4.30595 13.6316 4.58612 13.4722 4.72693 13.1953L10.6591 1.52772C10.8587 1.13502 10.7022 0.654913 10.3095 0.455244Z",fill:"#FF5555"}),t.createElement("path",{d:"M6.05007 4.29743C6.05007 2.6294 4.69301 1.27234 3.02498 1.27234C1.35706 1.27234 0 2.6294 0 4.29743C0 5.9654 1.35706 7.32246 3.02503 7.32246C4.69306 7.32246 6.05007 5.9654 6.05007 4.29743ZM3.02503 5.72723C2.23667 5.72723 1.59523 5.08579 1.59523 4.29743C1.59523 3.50901 2.23667 2.86757 3.02503 2.86757C3.81345 2.86757 4.45489 3.50896 4.45489 4.29743C4.45484 5.08579 3.81345 5.72723 3.02503 5.72723Z",fill:"#FF5555"}),t.createElement("path",{d:"M10.9749 6.67761C9.30689 6.67761 7.94983 8.03467 7.94983 9.70265C7.94983 11.3706 9.30684 12.7277 10.9749 12.7277C12.6429 12.7277 14 11.3707 14 9.70265C14 8.03462 12.6429 6.67761 10.9749 6.67761ZM10.9749 11.1324C10.1865 11.1324 9.54506 10.491 9.54506 9.70259C9.54506 8.91423 10.1865 8.27279 10.9749 8.27279C11.7633 8.27279 12.4047 8.91423 12.4047 9.70259C12.4047 10.491 11.7633 11.1324 10.9749 11.1324Z",fill:"#FF5555"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_5_217"},t.createElement("rect",{width:14,height:14,fill:"white"})))),Ea=a=>t.createElement("svg",{width:19,height:5,viewBox:"0 0 19 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("circle",{cx:2.5,cy:2.5,r:2.5,fill:"#FF5555"}),t.createElement("circle",{cx:9.5,cy:2.5,r:2.5,fill:"#FF5555"}),t.createElement("circle",{cx:16.5,cy:2.5,r:2.5,fill:"#FF5555"})),Aa="_CartContainer__caption_mkpkk_1",Ra="_CartContainer__add_mkpkk_8",Oa="_CartContainer__download_mkpkk_14",La="_CartContainer__share_mkpkk_21",Va="_CartContainer__wrapper_mkpkk_25",$a="_CartContainer__search_mkpkk_28",Ha="_CartContainer__searchWrapper_mkpkk_39",ka="_CartContainer__sortSelect_mkpkk_65",Fa="_CartContainer__sortSelect__svg_mkpkk_72",p={CartContainer__caption:Aa,CartContainer__add:Ra,CartContainer__download:Oa,CartContainer__share:La,CartContainer__wrapper:Va,CartContainer__search:$a,CartContainer__searchWrapper:Ha,CartContainer__sortSelect:ka,CartContainer__sortSelect__svg:Fa},Ia=[{value:"Сортировка",label:"Сортировка"},{value:"Сортировка2",label:"Сортировка2"},{value:"Сортировка3",label:"Сортировка3"}],Da=()=>e.jsx(te,{className:`${F.Select__svg} ${p.CartContainer__sortSelect__svg}`}),Ga={fontFamily:"var(--font-family)",fontWeight:500,fontSize:"16px",letterSpacing:"-0.01em",lineHeight:"120%",color:"var(--gray-color)"},Z=t.memo(({cartItems:a})=>{const s=I();t.useEffect(()=>{const n=setTimeout(()=>{s(it.setItems({items:a.map(c=>({id:c.id,amount:1}))})),clearTimeout(n)},0)},[a,s]);const r=U();return e.jsxs(o,{max:!0,direction:"column",gap:"20",children:[e.jsxs(o,{max:!0,justify:"between",align:"center",children:[e.jsx("h1",{className:p.CartContainer__caption,children:"Корзина"}),e.jsxs(o,{gap:"20",align:"center",children:[e.jsx(b,{className:p.CartContainer__add,type:y.RED,text:"Добавить каналы"}),e.jsx(ee,{children:e.jsx(pe,{className:p.CartContainer__download})}),e.jsx(ae,{IconClassName:p.CartContainer__share,url:"/"})]})]}),e.jsxs(o,{className:`${p.CartContainer__wrapper} Page__GrayBorderWithWhiteBGWrapper`,direction:"column",gap:"15",max:!0,children:[e.jsxs(o,{max:!0,align:"center",justify:"between",children:[e.jsx("div",{className:p.CartContainer__searchWrapper,children:e.jsx("input",{className:p.CartContainer__search,type:"text",placeholder:"Поиск"})}),e.jsx(T,{className:p.CartContainer__sortSelect,selectedOptions:Ia,TextStyles:Ga,CustomDropdownIndicator:Da})]}),e.jsx(o,{max:!0,direction:"column",gap:"10",children:r.length?r.map(n=>e.jsx(R,{catalogItem:a.find(c=>c.id==n.id),footer:"small",selectsType:"time|top",hasCounter:!0},n.id)):e.jsx(o,{max:!0,align:"center",justify:"center",children:e.jsx("span",{className:"Page__error",children:"В корзине нет покупок!"})})})]})]})});Z.displayName="CartContainer";const Za="_CartRecommendedChannels__caption_1h6o5_1",Wa="_CartRecommendedChannels__hidden__text_1h6o5_8",Ba="_CartRecommendedChannels__wrapper_1h6o5_16",Ua="_CartRecommendedChannels__wrapper__hidden_1h6o5_23",j={CartRecommendedChannels__caption:Za,CartRecommendedChannels__hidden__text:Wa,CartRecommendedChannels__wrapper:Ba,CartRecommendedChannels__wrapper__hidden:Ua},za=[{id:1,imgURL:`${d}/CatalogPage/images/CatalogPage__item__img.png`,ratingNumber:509.2,title:"Санкт-Петербург | Питер Новости",desc:"ЦА 30 , платежеспособные.",tags:[i.TAG1,i.TAG2,i.TAG3],stars:5,subscribersAmount:124827,menPercent:50,womenPercent:50,ThousandsViews:31.7,ER:25.37,CPV:.35,price:11048.94},{id:2,imgURL:`${d}/CatalogPage/images/CatalogPage__item__img.png`,ratingNumber:509.2,title:"Санкт-Петербург | Питер Новости",desc:"ЦА 30 , платежеспособные.",tags:[i.TAG1,i.TAG2,i.TAG3],stars:5,subscribersAmount:124827,menPercent:30,womenPercent:70,ThousandsViews:31.7,ER:25.37,CPV:.35,price:1108.94},{id:3,imgURL:`${d}/CatalogPage/images/CatalogPage__item__img.png`,ratingNumber:59.2,title:"Санкт-Петербург | Новости",desc:"ЦА 30 , платежеспособные.",tags:[i.TAG1,i.TAG2],stars:3.2,subscribersAmount:12827,menPercent:20,womenPercent:80,ThousandsViews:1.7,ER:25.37,CPV:.35,price:108.94}],W=t.memo(()=>{const[a,s]=t.useState(!1),[r,n]=t.useState(!1),c=I(),l=M(N.GET),g=t.useRef(),w=x(h=>A(h.MoveToOpenChannelCartReducer),E);return t.useEffect(()=>{l&&l.length&&(g.current=setTimeout(()=>{c(Pe.setChannelsForCart({channelsIDs:l})),clearTimeout(g.current)},0))},[l,c]),e.jsxs(o,{max:!0,direction:"column",gap:"10",children:[e.jsxs(o,{max:!0,align:"center",justify:"between",children:[e.jsx("h2",{className:j.CartRecommendedChannels__caption,children:"Рекомендуемые каналы"}),e.jsx("span",{onClick:()=>s(!a),className:j.CartRecommendedChannels__hidden__text,children:a?"Показать":"Скрыть"})]}),e.jsxs(o,{className:`${j.CartRecommendedChannels__wrapper}
          ${a?j.CartRecommendedChannels__wrapper__hidden:""}
          Page__GrayBorderWithWhiteBGWrapper`,align:"center",justify:"center",max:!0,children:[e.jsx(o,{max:!0,direction:"column",gap:"5",children:za.map(h=>e.jsx(R,{setMoveToOpenChannelCartIsAppear:n,catalogItem:h,selectsType:"time|top"},h.id))}),w.length>0&&e.jsx(D,{MoveToOpenChannelCartIsAppear:r,setMoveToOpenChannelCartIsAppear:n})]})]})});W.displayName="CartRecommendedChannels";const Ka="_CartStats_4sosz_1",qa="_CartStats__category_4sosz_4",Ja="_CartStats__category__value_4sosz_11",Qa="_CartStats__stats_4sosz_18",Xa="_CartStats__finalPrice_4sosz_22",Ya="_CartStats__finalPrice__text_4sosz_29",et="_CartStats__finalPrice__wrapper_4sosz_36",at="_CartStats__continue_4sosz_40",tt="_CartStats__support_4sosz_46",m={CartStats:Ka,CartStats__category:qa,CartStats__category__value:Ja,CartStats__stats:Qa,CartStats__finalPrice:Xa,CartStats__finalPrice__text:Ya,CartStats__finalPrice__wrapper:et,CartStats__continue:at,CartStats__support:tt},B=t.memo(()=>{const a=U();return e.jsxs(o,{gap:"10",direction:"column",className:`${m.CartStats} Page__SirineWrapper`,align:"center",max:!0,children:[e.jsx("img",{src:`${d}/CatalogCartPage/CartStats_img.png`,alt:"Женщина складывает покупки в корзину"}),e.jsxs(o,{max:!0,className:m.CartStats__stats,direction:"column",gap:"5",children:[e.jsxs(o,{max:!0,justify:"between",align:"center",children:[e.jsx("span",{className:m.CartStats__category,children:"Каналы"}),e.jsx("span",{className:m.CartStats__category__value,children:a.length})]}),e.jsxs(o,{max:!0,justify:"between",align:"center",children:[e.jsx("span",{className:m.CartStats__category,children:"Размещения"}),e.jsx("span",{className:m.CartStats__category__value,children:a.reduce((s,r)=>s+=r.amount,0)})]}),e.jsxs(o,{max:!0,justify:"between",align:"center",children:[e.jsx("span",{className:m.CartStats__category,children:"Подписчики"}),e.jsx("span",{className:m.CartStats__category__value,children:P(a.reduce((s,r)=>s+=v.find(n=>n.id==r.id).subscribersAmount,0))})]}),e.jsxs(o,{max:!0,justify:"between",align:"center",children:[e.jsx("span",{className:m.CartStats__category,children:"Просмотры"}),e.jsxs("span",{className:m.CartStats__category__value,children:["~"," ",a.reduce((s,r)=>s+=v.find(n=>n.id==r.id).ThousandsViews,0),"K"]})]})]}),e.jsxs(o,{className:m.CartStats__finalPrice__wrapper,align:"center",justify:"between",max:!0,children:[e.jsx("span",{className:m.CartStats__finalPrice__text,children:"Итого"}),e.jsxs("span",{className:m.CartStats__finalPrice,children:[" ",P(a.reduce((s,r)=>s+=v.find(n=>n.id==r.id).price*a.find(n=>n.id==r.id).amount,0)),"₽"]})]}),e.jsx(b,{className:m.CartStats__continue,type:y.RED,text:"Продолжить"}),e.jsx(b,{className:m.CartStats__support,type:y.BLACK_WITHOUT_OUTLINE,text:"Связаться с тех.поддержкой"})]})});B.displayName="CartStats";const _t="_CatalogCartPageContainer_9stnl_1",st={CatalogCartPageContainer:_t},nt={items:[]},rt=G({name:"CatalogCartSlice",initialState:nt,reducers:{changeItemAmount:(a,s)=>{const r=a.items.findIndex(n=>n.id==s.payload.itemId);s.payload.amount<0&&a.items[r].amount<=1?a.items=a.items.filter(n=>n.id!==s.payload.itemId):a.items[r].amount+=s.payload.amount},setItems:(a,s)=>{a.items=s.payload.items}}}),{actions:it,reducer:ot,useActions:lt}=rt,ct=t.memo(()=>e.jsx(Ce,{reducers:{CatalogCartSliceReducer:ot,MoveToOpenChannelCartReducer:Me},children:e.jsxs("div",{className:st.CatalogCartPageContainer,children:[e.jsxs(o,{max:!0,gap:"30",direction:"column",children:[e.jsx(Z,{cartItems:v}),e.jsx(W,{})]}),e.jsxs(o,{max:!0,gap:"20",direction:"column",children:[e.jsx(B,{cartItems:v}),e.jsx(de,{})]})]})}));ct.displayName="CatalogCartPageContainer";const mt=(a,s)=>{if(a){const r=a.items.find(n=>n.id==s);if(r)return r.amount}return 1},[U,St]=Se(a=>a.CatalogCartSliceReducer?a.CatalogCartSliceReducer.items:[]),v=[{id:0,imgURL:`${d}/CatalogPage/images/CatalogPage__item__img.png`,ratingNumber:509.2,title:"Санкт-Петербург | Питер Новости",desc:"ЦА 30 , платежеспособные.",tags:[i.TAG1,i.TAG2,i.TAG3],stars:5,subscribersAmount:124827,menPercent:50,womenPercent:50,ThousandsViews:31.7,ER:25.37,CPV:.35,price:11048.94},{id:1,imgURL:`${d}/CatalogPage/images/CatalogPage__item__img.png`,ratingNumber:509.2,title:"Санкт-Петербург | Питер Новости",desc:"ЦА 30 , платежеспособные.",tags:[i.TAG1,i.TAG2,i.TAG3],stars:5,subscribersAmount:124827,menPercent:30,womenPercent:70,ThousandsViews:31.7,ER:25.37,CPV:.35,price:1108.94},{id:2,imgURL:`${d}/CatalogPage/images/CatalogPage__item__img.png`,ratingNumber:59.2,title:"Санкт-Петербург | Новости",desc:"ЦА 30 , платежеспособные.",tags:[i.TAG1,i.TAG2],stars:3.2,subscribersAmount:12827,menPercent:20,womenPercent:80,ThousandsViews:1.7,ER:25.37,CPV:.35,price:108.94},{id:3,imgURL:`${d}/CatalogPage/images/CatalogPage__item__img.png`,ratingNumber:509.2,title:"Санкт-Петербург | Питер Новости",desc:"ЦА 30 , платежеспособные.",tags:[i.TAG1,i.TAG2,i.TAG3],stars:5,subscribersAmount:124827,menPercent:80,womenPercent:20,ThousandsViews:31.7,ER:25.37,CPV:.35,price:1108.94},{id:4,imgURL:`${d}/CatalogPage/images/CatalogPage__item__img.png`,ratingNumber:509.2,title:"Санкт-Петербург | Питер Новости",desc:"ЦА 30 , платежеспособные.",tags:[i.TAG1,i.TAG2,i.TAG3],stars:5,subscribersAmount:124827,menPercent:80,womenPercent:20,ThousandsViews:31.7,ER:25.37,CPV:.35,price:110008.94}],k=()=>e.jsx(ja,{className:F.Select__svg}),R=t.memo(({catalogItem:a,setMoveToOpenChannelCartIsAppear:s,footer:r="big",selectsType:n="format|amount",hasCounter:c=!1})=>{const l=x(u=>ye(u.MoveToOpenChannelCartReducer,a.id)),g=x(u=>A(u.MoveToOpenChannelCartReducer),E),w=t.useRef(),{removeChannelFromCart:h,addChannelToCart:z}=Ee(),{changeItemAmount:O}=lt(),K=t.useCallback(u=>{g.length==1?(s&&s(!1),w.current=setTimeout(()=>{h({channelID:u}),clearTimeout(w.current)},_e)):h({channelID:u})},[g.length,h,s]),L=t.useMemo(()=>({fontFamily:"var(--second-family)",fontWeight:400,fontSize:n=="format|amount"?"14px":"10px",letterSpacing:"-0.01em",lineHeight:"150%",color:n=="format|amount"?"#b2b2b2":"var(--main-color)"}),[n]),q=x(u=>mt(u.CatalogCartSliceReducer,a.id));return e.jsxs("div",{className:_.catalog__item,children:[e.jsxs("div",{className:_.catalog__item__wrapperPadding,children:[e.jsxs("div",{className:_.catalog__item__avatar,children:[e.jsx(se,{imgURL:a.imgURL,imgSize:ne.SMALL}),e.jsxs("div",{className:_.catalog__item__usersAmount,children:[e.jsx(ba,{}),e.jsx("span",{className:_.catalog__item__usersAmount__text,children:a.ratingNumber})]})]}),e.jsxs("div",{className:_.catalog__item__info,children:[e.jsxs("div",{className:_.catalog__item__infoHeader,children:[e.jsx("h6",{className:_.catalog__item__title,children:a.title}),e.jsx("p",{className:_.catalog__item__desc,children:a.desc})]}),e.jsxs("div",{className:_.catalog__item__infoFooter,children:[e.jsxs("div",{className:_.catalog__item__tags,children:[a.tags.includes(i.TAG1)&&e.jsx("div",{className:_.catalog__item__tag,children:e.jsx(Na,{})}),a.tags.includes(i.TAG2)&&e.jsx("div",{className:_.catalog__item__tag,children:e.jsx(Pa,{})}),a.tags.includes(i.TAG3)&&e.jsx("div",{className:_.catalog__item__tag,children:e.jsx(Ma,{})})]}),e.jsxs("div",{className:_.catalog__item__stars,children:[e.jsx("img",{className:_.catalog__item__star,src:`${d}/CatalogPage/images/CatalogPage__item__star.png`,alt:"Звезда"}),e.jsx("span",{className:_.catalog__item__stars__text,children:a.stars.toFixed(1)})]})]})]}),e.jsxs("div",{className:`${_.catalog__item__subscribers} CatalogPage__wrapper`,children:[e.jsx("span",{className:_.catalog__item__category__caption,children:"Подписчики:"}),e.jsx("span",{className:_.catalog__item__category__amount,children:P(a.subscribersAmount)}),e.jsxs("div",{className:_.catalog__item__subscribers__genders,children:[e.jsxs("div",{className:_.catalog__item__subscribers__gender,style:{width:`${a.menPercent}%`},children:[e.jsx(re,{}),e.jsx($,{"aria-labelledby":"Соотношение мужчин в канале",className:`${_.catalog__item__subscribers__gender__progressbar} ${_.catalog__item__subscribers__gender__progressbar__men}`,value:a.menPercent,showValue:!1})]}),e.jsxs("div",{className:`${_.catalog__item__subscribers__gender} ${_.catalog__item__subscribers__gender__women}`,style:{width:`${a.womenPercent}%`},children:[e.jsx(ie,{}),e.jsx($,{"aria-labelledby":"Соотношение женщин в канале",className:`${_.catalog__item__subscribers__gender__progressbar} ${_.catalog__item__subscribers__gender__progressbar__women}`,value:a.womenPercent,showValue:!1})]})]})]}),e.jsxs("div",{className:`${_.catalog__item__views} CatalogPage__wrapper`,children:[e.jsxs("div",{className:_.catalog__item__viewsWrapperViews,children:[e.jsx("span",{className:_.catalog__item__category__caption,children:"Просмотры:"}),e.jsxs("span",{className:`${_.catalog__item__category__amount} ${_.catalog__item__views__amount}`,children:[a.ThousandsViews,"K"]})]}),e.jsxs("div",{className:_.catalog__item__viewsWrapperER,children:[e.jsx("span",{className:_.catalog__item__category__caption,children:"ER:"}),e.jsxs("span",{className:`${_.catalog__item__category__amount} ${_.catalog__item__views__amount}`,children:[a.ER,"%"]})]})]}),e.jsxs("div",{className:`${_.catalog__item__CPV} CatalogPage__wrapper`,children:[e.jsx("span",{className:_.catalog__item__category__caption,children:"CPV:"}),e.jsxs("span",{className:`${_.catalog__item__category__amount} ${_.catalog__item__views__amount}`,children:[a.CPV,"₽"]})]}),e.jsxs("div",{className:`${_.catalog__item__subfooter}
          ${c?_.catalog__item__subfooter__small:""}`,children:[e.jsx(T,{className:_.catalog__item__select,wrapperClassName:_.catalog__item__select__wrapper,TextStyles:L,CustomDropdownIndicator:k,selectedOptions:n=="format|amount"?xa:wa,theme:V.BLACK}),e.jsx(T,{className:_.catalog__item__select,TextStyles:L,CustomDropdownIndicator:k,selectedOptions:n=="format|amount"?va:fa,theme:V.BLACK,wrapperClassName:_.catalog__item__select__wrapper}),c&&e.jsx(ge,{amount:q,dicreaseAmount:()=>O({itemId:a.id,amount:-1}),increaseAmount:()=>O({itemId:a.id,amount:1}),type:"small",canAlwaysDicrease:!0}),e.jsxs("span",{className:_.catalog__item__price,children:[a.price,"₽"]})]})]}),r=="big"?e.jsxs("div",{className:`${_.catalog__item__footer}
             ${l?_.catalog__item__footer__inCart:""}`,children:[e.jsx(H,{className:_.catalog__item__footer__item,to:"/",children:e.jsx(ya,{})}),e.jsxs("div",{className:_.catalog__item__footerWrapper,children:[e.jsx("div",{className:_.catalog__item__footer__item,onClick:()=>l?K(a.id):z({channelID:a.id}),children:e.jsx(Ta,{})}),e.jsx(H,{className:_.catalog__item__footer__item,to:"/",children:e.jsx(Sa,{})})]})]}):e.jsx(o,{justify:"evenly",className:_.catalog__item__footer__small,children:e.jsx(Ea,{className:_.catalog__item__footer__small__icon})})]})});R.displayName="CatalogItem";export{R as C,Pe as M,M as U,D as a,Me as b,ct as c,A as g};
