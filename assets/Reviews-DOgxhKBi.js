import{r,j as e}from"./react-DAuq9I5S.js";import{U as l}from"./index-BsNpi_-R.js";import{S as h}from"./react-select-ByRAKdwk.js";import"./swiper-DMhTBHQv.js";import"./@babel-BUiOBcM-.js";import"./react-dom-BsE7utt3.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-BIzsFd0e.js";import"./react-router-DDMyVUTn.js";import"./@remix-run-Bwh-Hsl8.js";import"./flowbite-react-CqS_BXli.js";import"./react-icons-Bb292ZcB.js";import"./tailwind-merge-3VKOpVsw.js";import"./classnames-iR1RLlz2.js";import"./debounce-0BFaHC-l.js";import"./@floating-ui-cBkDnv2t.js";import"./tabbable-DNPBiPWX.js";import"./@mui-DNj8DOP0.js";import"./clsx-B-dksMZM.js";import"./@emotion-DSDID1My.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-BqmD5Vow.js";import"./react-transition-group-B3_X90dl.js";import"./use-isomorphic-layout-effect-CbMVGqk-.js";import"./memoize-one-BdPwpGay.js";const f="_reviews__select_gpqtd_1",u="_reviews__selectWrapper_gpqtd_10",j="_reviews__select__svg_gpqtd_16",N="_reviews__select__svg__active_gpqtd_21",i={reviews__select:f,reviews__selectWrapper:u,reviews__select__svg:j,reviews__select__svg__active:N},w=[{value:"Сортировка: По самым полезным",label:"Сортировка: По самым полезным"},{value:"Сортировка: По самым популярным",label:"Сортировка: По самым популярным"},{value:"Сортировка: По самым смешным",label:"Сортировка: По самым смешным"}],y=()=>{const[a,v]=r.useState(null),s=r.useRef(null),o=r.useRef(null),d=()=>e.jsx("svg",{ref:s,className:i.reviews__select__svg,width:"24",height:"14",viewBox:"0 0 24 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807611 21.0711 0.807611 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z",fill:"#4266C6"})}),x={control:()=>({display:"flex",width:"100%",height:"100%"}),singleValue:()=>({fontFamily:"var(--font-family)",fontWeight:400,fontSize:"24px",letterSpacing:"-0.04em",color:"#000",opacity:.4,gridArea:"1 / 1 / 2 / 3"}),placeholder:()=>({fontFamily:"var(--font-family)",fontWeight:400,fontSize:"24px",letterSpacing:"-0.04em",color:"#000",opacity:.4,gridArea:"1 / 1 / 2 / 3"}),valueContainer:()=>({padding:"2px 25px",display:"grid",alignItems:"center",flex:1}),indicatorSeparator:()=>({})};r.useEffect(()=>{document.addEventListener("click",t=>{var c,m;(c=o.current)!=null&&c.contains(t.target)||(m=s.current)==null||m.classList.remove(i.reviews__select__svg__active)})},[]);const g=()=>{var t;(t=s.current)==null||t.classList.toggle(i.reviews__select__svg__active)};return e.jsx("div",{className:i.reviews__selectWrapper,ref:o,onClick:g,children:e.jsx(h,{className:i.reviews__select,defaultValue:a,onChange:()=>{},options:w,styles:x,placeholder:w[0].label,components:{DropdownIndicator:d}})})},S="_reviews__item_10xsn_1",C="_reviews__item__header_10xsn_13",L="_reviews__item__userInfo_10xsn_17",R="_reviews__item__avatar_10xsn_22",W="_reviews__item__bio_10xsn_27",b="_reviews__item__username_10xsn_32",I="_reviews__item__seniority_10xsn_38",P="_reviews__item__date_10xsn_45",D="_reviews__item__text_10xsn_52",$="_reviews__item__stars_10xsn_61",q="_reviews__item__starsWrapper_10xsn_68",A="_reviews__item__rating_10xsn_73",E="_reviews__item__report_10xsn_80",M="_reviews__item__report__svg_10xsn_85",O="_reviews__item__report_text_10xsn_95",V="_reviews__item__report__sign_10xsn_108",_={reviews__item:S,reviews__item__header:C,reviews__item__userInfo:L,reviews__item__avatar:R,reviews__item__bio:W,reviews__item__username:b,reviews__item__seniority:I,reviews__item__date:P,reviews__item__text:D,reviews__item__stars:$,reviews__item__starsWrapper:q,reviews__item__rating:A,reviews__item__report:E,reviews__item__report__svg:M,reviews__item__report_text:O,reviews__item__report__sign:V},p=()=>{const a=Array(5).fill("active");return e.jsxs("div",{className:_.reviews__item,children:[e.jsxs("div",{className:_.reviews__item__header,children:[e.jsxs("div",{className:_.reviews__item__userInfo,children:[e.jsx("img",{className:_.reviews__item__avatar,src:`${l}/ProfilePage/images/other/default-user.png`,alt:"Аватарка пользователя"}),e.jsxs("div",{className:_.reviews__item__bio,children:[e.jsx("span",{className:_.reviews__item__username,children:"@inan_ivanov"}),e.jsx("span",{className:_.reviews__item__seniority,children:"Доп. информация в виде стажа"})]})]}),e.jsx("time",{className:_.reviews__item__date,children:"16.07.2024"})]}),e.jsx("p",{className:_.reviews__item__text,children:"Быстрое и удобно, сервис рекомендую👍!"}),e.jsxs("div",{className:_.reviews__item__starsWrapper,children:[e.jsxs("div",{className:_.reviews__item__stars,children:[a.map((v,s)=>e.jsx("img",{className:_.reviews__item__star,src:`${l}/ProfilePage/icons/channel_reviews__item/channel_reviews__item_star_active.png`,alt:"Изображение звезды"},v+s)),e.jsx("span",{className:_.reviews__item__rating,children:"5.0"})]}),e.jsxs("div",{className:_.reviews__item__report,children:[e.jsx("span",{className:_.reviews__item__report_text,children:"Сообщить об ошибке"}),e.jsxs("div",{className:_.reviews__item__report__svg,children:[e.jsx("svg",{width:"42",height:"36",viewBox:"0 0 42 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19.268 0.999999C20.0378 -0.333334 21.9622 -0.333333 22.732 1L40.9186 32.5C41.6884 33.8333 40.7261 35.5 39.1865 35.5H2.81347C1.27387 35.5 0.311615 33.8333 1.08142 32.5L19.268 0.999999Z",fill:"#D9D9D9"})}),e.jsx("span",{className:_.reviews__item__report__sign,children:"!"})]})]})]})]})},k="_reviews_1vv5d_1",H="_reviews__wrapper_1vv5d_8",Z="_reviews__more_1vv5d_15",n={reviews:k,reviews__wrapper:H,reviews__more:Z},de=()=>e.jsxs("section",{className:n.reviews,children:[e.jsx(y,{}),e.jsxs("div",{className:n.reviews__wrapper,children:[e.jsx(p,{}),e.jsx(p,{}),e.jsx("button",{className:n.reviews__more,children:"Загрузить ещё"})]})]});export{de as Reviews};
