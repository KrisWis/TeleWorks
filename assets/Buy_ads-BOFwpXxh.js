import{r as s,j as _}from"./react-DAuq9I5S.js";import{C as p}from"./react-calendar-BykqarGe.js";import{S as b}from"./react-select-ByRAKdwk.js";import"./index-BcsGiCmm.js";import"./swiper-FM5UKo7x.js";import"./@babel-BUiOBcM-.js";import"./clsx-B-dksMZM.js";import"./get-user-locale-HKuPBaty.js";import"./mem-B1Wtd4fV.js";import"./mimic-fn-Bbosp5ci.js";import"./map-age-cleaner-7LjspSKX.js";import"./p-defer-O4M1dHHK.js";import"./@wojtekmaj-B-N8U4WN.js";import"./@emotion-DSDID1My.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./react-dom-BsE7utt3.js";import"./scheduler-CzFDRTuY.js";import"./@floating-ui-cBkDnv2t.js";import"./tabbable-DNPBiPWX.js";import"./use-isomorphic-layout-effect-CbMVGqk-.js";import"./memoize-one-BdPwpGay.js";import"./react-router-dom-BIzsFd0e.js";import"./react-router-DDMyVUTn.js";import"./@remix-run-Bwh-Hsl8.js";import"./flowbite-react-CqS_BXli.js";import"./react-icons-Bb292ZcB.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-iR1RLlz2.js";import"./debounce-0BFaHC-l.js";import"./@mui-DNj8DOP0.js";import"./react-transition-group-B3_X90dl.js";const g="_buy_ads__form__category__form_1vm8o_1",C="_buy_ads__form__category__form__svg_1vm8o_11",v="_buy_ads__form__category__form__svg__active_1vm8o_15",i={buy_ads__form__category__form:g,buy_ads__form__category__form__svg:C,buy_ads__form__category__form__svg__active:v},u=({selectedOptions:a})=>{const o=s.useRef(null),c=s.useRef(null),m=()=>_.jsx("svg",{ref:o,className:i.buy_ads__form__category__form__svg,width:"14",height:"23",viewBox:"0 0 14 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_.jsx("path",{opacity:"0.4",d:"M12.6329 12.5607C13.2187 11.9749 13.2187 11.0251 12.6329 10.4393L3.08698 0.893398C2.5012 0.307611 1.55145 0.307611 0.965664 0.893398C0.379877 1.47919 0.379877 2.42893 0.965664 3.01472L9.45095 11.5L0.965664 19.9853C0.379877 20.5711 0.379877 21.5208 0.965664 22.1066C1.55145 22.6924 2.5012 22.6924 3.08698 22.1066L12.6329 12.5607ZM10.5723 13H11.5723V10H10.5723V13Z",fill:"#4266C6"})}),[t,r]=s.useState(null),y={control:()=>({display:"flex",width:"100%",height:"100%"}),singleValue:()=>({fontFamily:"var(--second-family)",fontWeight:500,fontSize:"32px",letterSpacing:"-0.04em",color:"#000",opacity:.4,gridArea:"1 / 1 / 2 / 3"}),placeholder:()=>({fontFamily:"var(--second-family)",fontWeight:500,fontSize:"32px",letterSpacing:"-0.04em",color:"#000",opacity:.4,gridArea:"1 / 1 / 2 / 3"}),valueContainer:()=>({padding:"2px 15px",display:"grid",alignItems:"center",flex:1}),indicatorSeparator:()=>({})};s.useEffect(()=>{document.addEventListener("click",n=>{var l,d;(l=c.current)!=null&&l.contains(n.target)||(d=o.current)==null||d.classList.remove(i.buy_ads__form__category__form__svg__active)})},[]);const f=()=>{var n;(n=o.current)==null||n.classList.toggle(i.buy_ads__form__category__form__svg__active)};return _.jsx("div",{ref:c,onClick:f,children:_.jsx(b,{className:i.buy_ads__form__category__form,defaultValue:t,onChange:()=>{},options:a,styles:y,placeholder:a[0].label,components:{DropdownIndicator:m}})})},x=()=>{s.useEffect(()=>{const t=document.querySelector(".react-calendar__navigation__prev-button"),r=document.querySelector(".react-calendar__navigation__next-button");t&&(t.innerHTML=`<svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.11816 10.0154C0.644487 9.5417 0.644487 8.77373 1.11816 8.30005L8.83712 0.581094C9.31079 0.107421 10.0788 0.107421 10.5524 0.581094C11.0261 1.05477 11.0261 1.82274 10.5524 2.29642L3.69115 9.15771L10.5524 16.019C11.0261 16.4927 11.0261 17.2607 10.5524 17.7343C10.0788 18.208 9.31079 18.208 8.83712 17.7343L1.11816 10.0154ZM25.4639 10.3706H1.97582V7.9448H25.4639V10.3706Z" />
            </svg>`),r&&(r.innerHTML=`<svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.7285 10.0154C25.2022 9.5417 25.2022 8.77373 24.7285 8.30005L17.0096 0.581094C16.5359 0.107421 15.7679 0.107421 15.2942 0.581094C14.8206 1.05477 14.8206 1.82274 15.2942 2.29642L22.1555 9.15771L15.2942 16.019C14.8206 16.4927 14.8206 17.2607 15.2942 17.7343C15.7679 18.208 16.5359 18.208 17.0096 17.7343L24.7285 10.0154ZM0.382812 10.3706H23.8709V7.9448H0.382812V10.3706Z" />
            </svg>`)},[]);const[a,o]=s.useState([]),c=t=>{a.includes(t.getTime())?o(a.filter(r=>r!==t.getTime())):o([...a,t.getTime()])},m=t=>a.includes(t.getTime())?["buy_ads_calendar--active"]:[];return _.jsx(p,{prevAriaLabel:"Кнопка перелистывания назад",nextAriaLabel:"Кнопка перелистывания вперёд",tileClassName:t=>m(t.date),minDate:new Date,locale:"ru-RU",onClickDay:t=>c(t)})},h="_buy_ads_184d1_1",w={buy_ads:h},j="_buy_ads__form_qa9bc_1",L="_buy_ads__form__caption_qa9bc_12",H="_buy_ads__form__category_qa9bc_21",S="_buy_ads__form__category__span_qa9bc_27",N="_buy_ads__form__category__desc_qa9bc_34",V="_buy_ads__form__price_qa9bc_43",M="_buy_ads__form__price__span_qa9bc_50",q="_buy_ads__form__price__text_qa9bc_57",B="_buy_ads__form__toCart_qa9bc_67",Z="_buy_ads__form__toCart_text_qa9bc_82",e={buy_ads__form:j,buy_ads__form__caption:L,buy_ads__form__category:H,buy_ads__form__category__span:S,buy_ads__form__category__desc:N,buy_ads__form__price:V,buy_ads__form__price__span:M,buy_ads__form__price__text:q,buy_ads__form__toCart:B,buy_ads__form__toCart_text:Z},D=[{value:"1/24",label:"1/24"},{value:"1/25",label:"1/25"},{value:"1/26",label:"1/26"}],O=[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"}],R=()=>_.jsxs("div",{className:e.buy_ads__form,children:[_.jsx("h2",{className:e.buy_ads__form__caption,children:"Купить рекламу в этом канале"}),_.jsxs("div",{className:e.buy_ads__form__category,children:[_.jsx("span",{className:e.buy_ads__form__category__span,children:"Формат:"}),_.jsx(u,{selectedOptions:D}),_.jsx("span",{className:e.buy_ads__form__category__desc,children:"1 час в топе / 24 часа в ленте"})]}),_.jsxs("div",{className:e.buy_ads__form__category,children:[_.jsx("span",{className:e.buy_ads__form__category__span,children:"Количество:"}),_.jsx(u,{selectedOptions:O})]}),_.jsxs("div",{className:e.buy_ads__form__price,children:[_.jsx("span",{className:e.buy_ads__form__price__span,children:"Cтоимость публикации :"}),_.jsx("span",{className:e.buy_ads__form__price__text,children:"120 048.94₽"})]}),_.jsxs("button",{className:e.buy_ads__form__toCart,children:[_.jsx("svg",{width:"27",height:"27",viewBox:"0 0 27 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:_.jsx("path",{d:"M0 0V1.87698H3.89648L6.56067 17.8895V20.8009C5.47853 21.1945 4.69299 22.2305 4.69299 23.4413C4.69299 24.9835 5.95963 26.2502 7.50183 26.2502C9.04403 26.2502 10.3125 24.9835 10.3125 23.4413C10.3125 23.1107 10.2434 22.7962 10.1367 22.5001H18.9313C18.8234 22.7971 18.7482 23.1097 18.7482 23.4413C18.7482 24.9835 20.0221 26.2502 21.5643 26.2502C23.1065 26.2502 24.375 24.9835 24.375 23.4413C24.375 23.1104 24.3043 22.7964 24.1974 22.5001H26.25V20.6234H8.43747V18.7483H21.5643C21.9656 18.7475 22.322 18.4913 22.4505 18.111L26.2024 6.85932C26.4028 6.25409 25.9537 5.62962 25.3161 5.62703H16.875V7.50185H24.0088L20.8869 16.8733H8.30019L6.73463 7.50185H13.125V5.62703H6.42152L5.61219 0.782019C5.53651 0.332125 5.14922 0.00201968 4.693 0H0ZM14.0607 5.62703V11.1585C13.6345 10.5613 13.2008 9.96981 12.7661 9.37882L11.2518 10.4718C12.2421 11.8554 13.2428 13.2316 14.2401 14.6101C14.6146 15.1245 15.3818 15.1245 15.7562 14.6101C16.755 13.2304 17.7509 11.8486 18.7537 10.4718L17.2302 9.37882C16.7978 9.97573 16.3669 10.5737 15.9357 11.1715V5.62703H14.0607ZM7.50183 22.5001C8.0307 22.5001 8.4375 22.9124 8.4375 23.4413C8.4375 23.9702 8.0307 24.3752 7.50183 24.3752C6.97297 24.3752 6.56067 23.9702 6.56067 23.4413C6.56067 22.9124 6.97297 22.5001 7.50183 22.5001ZM21.5643 22.5001C22.0932 22.5001 22.5 22.9124 22.5 23.4413C22.5 23.9702 22.0932 24.3752 21.5643 24.3752C21.0355 24.3752 20.6232 23.9702 20.6232 23.4413C20.6232 22.9124 21.0355 22.5001 21.5643 22.5001Z",fill:"white"})}),_.jsx("span",{className:e.buy_ads__form__toCart_text,children:"В корзину"})]})]}),p_=()=>_.jsxs("section",{className:w.buy_ads,children:[_.jsx(R,{}),_.jsx(x,{})]});export{p_ as Buy_ads};
