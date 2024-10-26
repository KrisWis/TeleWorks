import{r as a,j as e}from"./react-C3EGSwTV.js";import{P as re,J as se,L as _e,F as w,U as z,q as F,t as q,B as v,a as y,h as R,a5 as O,a6 as C,M as Z,c as X,I as K,z as de,E as pe,G as me,w as ge,a7 as ue}from"./app-routes-28GHaKxN.js";import{D as te,b as S,S as Ie,c as he,d as Le,e as ke,f as fe,g as J,L as we,a as Y}from"./LoadImageBlockWithoutLoading_types-COcDz9Xl.js";import{S as xe}from"./SelectDropdownIndicatorDarkBlueSVG-DRnPWYgc.js";import{U as Q}from"./UseDebounce-B4wZPC3r.js";import{S as Ee,T as Be,M as Se,a as Ce}from"./TagsInput-DTqHf0Sd.js";import{X as ve}from"./react-image-crop-BtOjskiH.js";import{U as ye}from"./index-nEH4lVQK.js";import"./@babel-13fjUkWY.js";import"./react-dom-DdwdgRbM.js";import"./@reduxjs-C6AI0MYz.js";import"./redux-DITMfSWq.js";import"./immer-fBqQtvEc.js";import"./redux-thunk-ClJT1hhx.js";import"./reselect-C27TLnWV.js";import"./react-redux-DCb0tGWe.js";import"./use-sync-external-store-CggUjcbj.js";import"./styled-components-BI2Cnmee.js";import"./react-router-dom-BGdsm6zk.js";import"./react-router-DjnSpTaD.js";import"./@remix-run-I3CLtn5C.js";import"./primereact-CKVv_CF4.js";import"./chart.js-DKcZzhFa.js";import"./@kurkle-BZxJdD1U.js";import"./react-chartjs-2-CU1aPWW1.js";import"./@mui-DMlcxK31.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./@emotion-DvcORr5z.js";import"./hoist-non-react-statics-BzqkPicg.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-CP2SRup2.js";import"./jss-plugin-rule-value-function-NRMjr7SR.js";import"./jss-C2YbWCDG.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-global-B2s_qxL_.js";import"./jss-plugin-nested-CvQgPwbz.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-CakodQBr.js";import"./jss-plugin-vendor-prefixer-C0RmQ0NR.js";import"./css-vendor-BK3-fMEt.js";import"./jss-plugin-props-sort-D2CdvUsV.js";import"./react-select-CFGMc7l-.js";import"./@floating-ui-RYOEkms0.js";import"./use-isomorphic-layout-effect-CaxrrJkV.js";import"./memoize-one-BdPwpGay.js";import"./swiper--iI3_9IR.js";import"./react-quill-new-BekiOLBF.js";import"./lodash-Bzo2tTgf.js";import"./quill-CX5mxdj9.js";import"./parchment-Crftfyop.js";import"./quill-delta-BfDkC5Jv.js";import"./fast-diff-Az_-rVRq.js";import"./lodash.clonedeep-DKoaPdoj.js";import"./lodash.isequal-DxbEemmG.js";import"./eventemitter3-DwnVOMR6.js";import"./lodash-es-BKPNmaDy.js";const je="_loadImageBlock_5665k_1",Me="_loadImageBlock__wrapper_5665k_7",be="_loadImageBlock__wrapper__info_5665k_14",Ne="_loadImageBlock__wrapper__errors_5665k_21",Pe="_loadImageBlock__wrapper__error_5665k_21",We="_loadImageBlock__wrapperWrapper_5665k_34",De="_loadImageBlock__wrapperPadding_5665k_45",Ge="_loadImageBlock__wrapper__requirements_5665k_56",Ue="_loadImageBlock__wrapper__input_5665k_62",Re="_loadImageBlock__wrapper__img_5665k_69",Oe="_loadImageBlock__wrapper__imgWrapper_5665k_76",Ae="_loadImageBlock__wrapper__loadingWrapper_5665k_83",Te="_loadImageBlock__big_5665k_90",He="_loadImageBlock__medium_5665k_94",$e="_loadImageBlock__small_5665k_98",Ve="_loadImageBlock__wrapper__active_5665k_102",ze="_loadImageBlock__wrapper__withImg_5665k_102",Fe="_loadImageBlock__caption_5665k_114",qe="_loadImageBlock__desc_5665k_121",h={loadImageBlock:je,loadImageBlock__wrapper:Me,loadImageBlock__wrapper__info:be,loadImageBlock__wrapper__errors:Ne,loadImageBlock__wrapper__error:Pe,loadImageBlock__wrapperWrapper:We,loadImageBlock__wrapperPadding:De,loadImageBlock__wrapper__requirements:Ge,loadImageBlock__wrapper__input:Ue,loadImageBlock__wrapper__img:Re,loadImageBlock__wrapper__imgWrapper:Oe,loadImageBlock__wrapper__loadingWrapper:Ae,loadImageBlock__big:Te,loadImageBlock__medium:He,loadImageBlock__small:$e,loadImageBlock__wrapper__active:Ve,loadImageBlock__wrapper__withImg:ze,loadImageBlock__caption:Fe,loadImageBlock__desc:qe},le=({title:o,size:s,requirements:l=!0,className:c,LoadedImage:r,setLoadedImage:_,LoadedImageErrors:g,setLoadedImageErrors:p})=>{const n=a.useRef(null),I=a.useRef(null);return e.jsxs(te,{OnDragEnter:()=>{var t;return(t=n.current)==null?void 0:t.classList.add(h.loadImageBlock__wrapper__active)},OnDragLeave:()=>{var t;(t=n.current)==null||t.classList.remove(h.loadImageBlock__wrapper__active)},setLoadedImage:_,setLoadedImageErrors:p,LoadedImageErrors:g,onlyImages:!0,children:[e.jsxs("div",{className:`${h.loadImageBlock} ${h[`loadImageBlock__${s}`]} 
        ${c||""}`,"data-testid":"LoadImageBlock.Drag&Drop",children:[e.jsx("div",{ref:n,className:`${h.loadImageBlock__wrapper} Page__SirineWrapper 
        ${r&&r!=S?h.loadImageBlock__wrapper__withImg:""}`,children:!r||g.length?e.jsxs("label",{className:h.loadImageBlock__wrapperPadding,children:[e.jsx("div",{className:`${h.loadImageBlock__wrapperWrapper}`}),e.jsxs("div",{className:h.loadImageBlock__wrapper__info,children:[e.jsx(Ie,{}),e.jsx("h4",{className:h.loadImageBlock__caption,children:o}),l&&e.jsxs("div",{className:h.loadImageBlock__wrapper__requirements,children:[e.jsxs("span",{className:h.loadImageBlock__desc,children:["Минимальный размер: ",he," х"," ",Le," px"]}),e.jsxs("span",{className:h.loadImageBlock__desc,children:["Вес: ",Math.round(ke/1024)," кб —"," ",Math.round(fe/1048576)," Мб"]}),e.jsx("span",{className:h.loadImageBlock__desc,children:"Форматы: jpg, jpeg, png, gif"})]})]})]}):r==S?e.jsx("div",{className:h.loadImageBlock__wrapper__loadingWrapper,children:e.jsx(re,{size:"small"})}):e.jsx("label",{className:h.loadImageBlock__wrapper__imgWrapper,children:e.jsx("img",{className:h.loadImageBlock__wrapper__img,src:r,alt:"Изображение хедера","data-testid":"LoadImageBlock.Image"})})}),g.length>0&&e.jsx("div",{className:h.loadImageBlock__wrapper__errors,children:g.map(t=>e.jsx("span",{"data-testid":`LoadImageBlock.Error.${t}`,className:h.loadImageBlock__wrapper__error,children:t},t))})]}),e.jsx("input",{className:h.loadImageBlock__wrapper__input,type:"file",onChange:t=>J(t,_,p,Ze),accept:"image/png, image/gif, image/jpeg, image/jpg","data-testid":"LoadImageBlock.Input",ref:I,onMouseEnter:()=>{var t;return(t=n.current)==null?void 0:t.classList.add(h.loadImageBlock__wrapper__active)},onMouseLeave:()=>{var t;(t=n.current)==null||t.classList.remove(h.loadImageBlock__wrapper__active)}})]})},A=o=>{const[s,l]=a.useState("");return[s,l]},T=()=>{const[o,s]=a.useState([]);return[o,s]},Ze="test.png",Xe="_userEdit_1e68k_1",Ke={userEdit:Xe},Ye="_userEditGeneral_1p2h9_1",Je="_userEditGeneral__headerLoadingModal_1p2h9_8",Qe="_userEditGeneral__headerImage_1p2h9_17",ea="_userEditGeneral__headerImage__img_1p2h9_20",aa="_userEditGeneral__avatar_1p2h9_27",oa="_userEditGeneral__info_1p2h9_30",ra="_userEditGeneral__inputs_1p2h9_37",sa="_userEditGeneral__inputs__header_1p2h9_44",_a="_userEditGeneral__inputWrapper_1p2h9_51",ta="_userEditGeneral__inputWrapper__title_1p2h9_57",la="_userEditGeneral__inputWrapper__input_1p2h9_63",na="_userEditGeneral__select_1p2h9_77",L={userEditGeneral:Ye,userEditGeneral__headerLoadingModal:Je,userEditGeneral__headerImage:Qe,userEditGeneral__headerImage__img:ea,userEditGeneral__avatar:aa,userEditGeneral__info:oa,userEditGeneral__inputs:ra,userEditGeneral__inputs__header:sa,userEditGeneral__inputWrapper:_a,userEditGeneral__inputWrapper__title:ta,userEditGeneral__inputWrapper__input:la,userEditGeneral__select:na},ee=[{value:"Дизайнер",label:"Дизайнер"},{value:"Программист",label:"Программист"},{value:"Экономист",label:"Экономист"}],ae=(o,s)=>se(o,_e.USER_EDIT_GENERAL,s),ca="_HeaderLoadingModal_bc3n1_1",ia="_HeaderLoadingModal__button_bc3n1_4",da="_HeaderLoadingModal__caption_bc3n1_10",D={HeaderLoadingModal:ca,HeaderLoadingModal__button:ia,HeaderLoadingModal__caption:da},pa="_LoadImageBlockSecondary_n6v40_1",ma="_LoadImageBlockSecondary__video_n6v40_5",ga="_LoadImageBlockSecondary__hasImage_n6v40_5",ua="_LoadImageBlockSecondary__wrapper_n6v40_8",Ia="_LoadImageBlockSecondary__wrapper__warn_n6v40_18",ha="_LoadImageBlockSecondary__wrapper__active_n6v40_21",La="_LoadImageBlockSecondary__wrapper__withImg_n6v40_24",ka="_LoadImageBlockSecondary__wrapper__errors_n6v40_28",fa="_LoadImageBlockSecondary__wrapper__error_n6v40_28",wa="_LoadImageBlockSecondary__wrapper__caption_n6v40_41",xa="_LoadImageBlockSecondary__wrapper__desc_n6v40_48",Ea="_LoadImageBlockSecondary__wrapperWrapper_n6v40_56",Ba="_LoadImageBlockSecondary__wrapperPadding_n6v40_67",Sa="_LoadImageBlockSecondary__wrapper__input_n6v40_78",Ca="_LoadImageBlockSecondary__wrapper__input__video_n6v40_85",va="_LoadImageBlockSecondary__wrapper__input__hasImage_n6v40_90",ya="_LoadImageBlockSecondary__wrapper__img_n6v40_95",ja="_LoadImageBlockSecondary__wrapper__imgWrapper_n6v40_102",Ma="_LoadImageBlockSecondary__wrapper__imgWrapper__icons_n6v40_109",ba="_LoadImageBlockSecondary__wrapper__imgWrapper__icons__circle_n6v40_114",Na="_LoadImageBlockSecondary__wrapper__loadingWrapper_n6v40_125",Pa="_LoadImageBlockSecondary__small_n6v40_137",Wa="_LoadImageBlockSecondary__medium_n6v40_149",d={LoadImageBlockSecondary:pa,LoadImageBlockSecondary__video:ma,LoadImageBlockSecondary__hasImage:ga,LoadImageBlockSecondary__wrapper:ua,LoadImageBlockSecondary__wrapper__warn:Ia,LoadImageBlockSecondary__wrapper__active:ha,LoadImageBlockSecondary__wrapper__withImg:La,LoadImageBlockSecondary__wrapper__errors:ka,LoadImageBlockSecondary__wrapper__error:fa,LoadImageBlockSecondary__wrapper__caption:wa,LoadImageBlockSecondary__wrapper__desc:xa,LoadImageBlockSecondary__wrapperWrapper:Ea,LoadImageBlockSecondary__wrapperPadding:Ba,LoadImageBlockSecondary__wrapper__input:Sa,LoadImageBlockSecondary__wrapper__input__video:Ca,LoadImageBlockSecondary__wrapper__input__hasImage:va,LoadImageBlockSecondary__wrapper__img:ya,LoadImageBlockSecondary__wrapper__imgWrapper:ja,LoadImageBlockSecondary__wrapper__imgWrapper__icons:Ma,LoadImageBlockSecondary__wrapper__imgWrapper__icons__circle:ba,LoadImageBlockSecondary__wrapper__loadingWrapper:Na,LoadImageBlockSecondary__small:Pa,LoadImageBlockSecondary__medium:Wa},Da=o=>a.createElement("svg",{width:24,height:27,viewBox:"0 0 24 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},a.createElement("path",{d:"M9.66667 13.5L14.7778 18.6111M14.7778 13.5L9.66667 18.6111M2 5.83333H22.4444M17.3333 5.83333L16.9876 4.79587C16.6524 3.79049 16.4848 3.2878 16.174 2.91614C15.8995 2.58794 15.5471 2.33391 15.149 2.17733C14.698 2 14.1683 2 13.1085 2H11.336C10.2762 2 9.7464 2 9.29548 2.17733C8.89734 2.33391 8.54488 2.58794 8.27043 2.91614C7.95962 3.2878 7.79206 3.79049 7.45693 4.79587L7.11111 5.83333M19.8889 5.83333V18.8667C19.8889 21.0136 19.8889 22.0869 19.4711 22.907C19.1036 23.6283 18.5172 24.2147 17.7959 24.5822C16.9758 25 15.9025 25 13.7556 25H10.6889C8.54202 25 7.46858 25 6.64859 24.5822C5.9273 24.2147 5.34088 23.6283 4.97336 22.907C4.55556 22.0869 4.55556 21.0136 4.55556 18.8667V5.83333",stroke:"#FF5555",strokeWidth:2.55556,strokeLinecap:"round",strokeLinejoin:"round"})),Ga=Math.PI/180;async function Ua(o,s,l,c=1,r=0){const _=s.getContext("2d");if(!_)throw new Error("No 2d context");const g=o.naturalWidth/o.width,p=o.naturalHeight/o.height,n=window.devicePixelRatio;s.width=Math.floor(l.width*g*n),s.height=Math.floor(l.height*p*n),_.scale(n,n),_.imageSmoothingQuality="high";const I=l.x*g,t=l.y*p,u=r*Ga,m=o.naturalWidth/2,k=o.naturalHeight/2;_.save(),_.translate(-I,-t),_.translate(m,k),_.rotate(u),_.scale(c,c),_.translate(-m,-k),_.drawImage(o,0,0,o.naturalWidth,o.naturalHeight,0,0,o.naturalWidth,o.naturalHeight),_.restore()}let G="";function Ra(o){return new Promise(s=>{o.toBlob(s)})}async function Oa(o,s,l=1,c=0){const r=document.createElement("canvas");Ua(o,r,s,l,c);const _=await Ra(r);return _?(G&&URL.revokeObjectURL(G),G=URL.createObjectURL(_),G):(console.error("Failed to create blob"),"")}const ne=a.memo(({className:o,LoadedImageErrors:s,setLoadedImage:l,setLoadedImageErrors:c,LoadedImage:r,size:_,isWarn:g})=>{const p=a.useRef(null),n=a.useRef(null),[I,t]=a.useState(),[u,m]=a.useState(),k=a.useRef(null),[f,N]=a.useState(),[P,H]=a.useState([]),W=a.useCallback(async i=>{i.key=="Enter"&&u!=null&&u.width&&u!=null&&u.height&&k.current&&(H([...P,f||r]),N(await Oa(k.current,u)),t(void 0))},[r,u,f,P]);return a.useEffect(()=>{document.addEventListener("keydown",W)},[W]),a.useEffect(()=>{N(void 0)},[r]),e.jsxs(te,{OnDragEnter:()=>{var i;return(i=p.current)==null?void 0:i.classList.add(d.LoadImageBlockSecondary__wrapper__active)},OnDragLeave:()=>{var i;return(i=p.current)==null?void 0:i.classList.remove(d.LoadImageBlockSecondary__wrapper__active)},setLoadedImage:l,setLoadedImageErrors:c,LoadedImageErrors:s,children:[e.jsxs("div",{className:`${d.LoadImageBlockSecondary} 
            ${d[`LoadImageBlockSecondary__${_}`]} 
            ${!r.startsWith("data:image")&&r&&r!=S?d.LoadImageBlockSecondary__video:""} 
            ${r&&r!=S?d.LoadImageBlockSecondary__hasImage:""} 
            ${o}`,children:[e.jsx("div",{ref:p,className:`${d.LoadImageBlockSecondary__wrapper}
              ${r&&r!=S?d.LoadImageBlockSecondary__wrapper__withImg:""}
              ${g?d.LoadImageBlockSecondary__wrapper__warn:""} 
            `,children:!r||s.length?e.jsxs("label",{className:d.LoadImageBlockSecondary__wrapperPadding,children:[e.jsx("div",{className:`${d.LoadImageBlockSecondary__wrapperWrapper}`}),e.jsxs(w,{max:!0,direction:"column",align:"center",justify:"center",children:[e.jsx("img",{src:_=="small"?`${z}/global/images/LoadImageBlockSecondary_img.png`:`${z}/global/images/LoadImageBlockSecondaryMedium_img.png`,alt:"Изображение того, как мужчина упоковывает в папку изображения"}),e.jsx("span",{className:d.LoadImageBlockSecondary__wrapper__caption,children:"Перетащите изображение или загрузите его."}),e.jsx("span",{className:d.LoadImageBlockSecondary__wrapper__desc,children:"Рекомендуемая ширина не менее 1600px. Не более 10 МБ каждое (20 МБ для видео)"}),e.jsx("span",{className:d.LoadImageBlockSecondary__wrapper__desc,children:"Используйте высокое разрешение и файлы формата (pdf, jpeg, png)"})]})]}):r==S?e.jsx("div",{className:d.LoadImageBlockSecondary__wrapper__loadingWrapper,children:e.jsx(re,{size:"small"})}):e.jsxs("label",{className:d.LoadImageBlockSecondary__wrapper__imgWrapper,children:[!r.startsWith("data:image")&&f?e.jsx("video",{controls:!0,className:d.LoadImageBlockSecondary__wrapper__img,src:r,preload:"none"}):e.jsx(ve,{onComplete:i=>{m(i)},crop:I,onChange:i=>t(i),children:e.jsx("img",{className:d.LoadImageBlockSecondary__wrapper__img,src:f||r,alt:"Изображение, загруженное пользователем",ref:k})}),e.jsxs(w,{className:d.LoadImageBlockSecondary__wrapper__imgWrapper__icons,gap:"10",align:"center",children:[e.jsx(F,{onClick:()=>{n.current.click(),n.current.value=""},children:e.jsx(w,{className:d.LoadImageBlockSecondary__wrapper__imgWrapper__icons__circle,align:"center",justify:"center",children:e.jsx(Ee,{})})}),e.jsx(F,{onClick:()=>l(""),children:e.jsx(w,{className:d.LoadImageBlockSecondary__wrapper__imgWrapper__icons__circle,align:"center",justify:"center",children:e.jsx(Da,{})})})]})]})}),s.length>0&&e.jsx("div",{className:d.LoadImageBlockSecondary__wrapper__errors,children:s.map(i=>e.jsx("span",{className:d.LoadImageBlockSecondary__wrapper__error,children:i},i))})]}),e.jsx("input",{className:`${!r.startsWith("data:image")&&r&&r!=S?d.LoadImageBlockSecondary__wrapper__input__video:""} 
            ${r&&r!=S||f?d.LoadImageBlockSecondary__wrapper__input__hasImage:""}
            ${d.LoadImageBlockSecondary__wrapper__input}`,type:"file",onChange:i=>J(i,l,c),accept:"image/png, image/gif, image/jpeg, image/jpg, video/*",onMouseEnter:()=>{var i;return r.startsWith("data:image")&&((i=p.current)==null?void 0:i.classList.add(d.LoadImageBlockSecondary__wrapper__active))},onMouseLeave:()=>{var i;r.startsWith("data:image")&&((i=p.current)==null||i.classList.remove(d.LoadImageBlockSecondary__wrapper__active))},ref:n})]})}),Aa=a.memo(({setHeaderLoadedImageFinish:o,CustomSetModalAppear:s,setModalOpen:l,HeaderLoadedImageFinish:c})=>{const[r,_]=A();a.useEffect(()=>{_(c)},[c,_]);const[g,p]=T(),[n,I]=ye(),t=a.useRef(),u=a.useCallback(()=>{s(!1),t.current=setTimeout(()=>{l(!1)},q)},[s,l]);a.useEffect(()=>()=>{clearTimeout(t.current)},[]);const m=a.useCallback(()=>{r?(o(r),u()):I(!0)},[u,r,o,I]);return e.jsxs(w,{className:D.HeaderLoadingModal,max:!0,gap:"10",direction:"column",children:[e.jsx("h2",{className:D.HeaderLoadingModal__caption,children:"Загрузите шапку профиля"}),e.jsx(ne,{size:"small",LoadedImage:r,setLoadedImage:_,LoadedImageErrors:g,setLoadedImageErrors:p,isWarn:!r&&n}),e.jsxs(w,{max:!0,align:"center",justify:"end",children:[e.jsx(v,{className:D.HeaderLoadingModal__button,text:"Отменить",type:y.BLACK_WITHOUT_OUTLINE}),e.jsx(v,{className:D.HeaderLoadingModal__button,text:"Сохранить",type:y.RED,onClick:m})]})]})}),Ta=()=>e.jsx(xe,{className:me.Select__svg}),Ha={fontFamily:"var(--second-family)",fontWeight:400,fontSize:"14px",letterSpacing:"-0.01em",lineHeight:"150%",color:"#b2b2b2"},$a=a.memo(()=>{const o=Q(()=>{ae(R.UPDATE,{name:l,surname:n,profession:{value:r==null?void 0:r.value,label:r==null?void 0:r.label},tags:u})},1e3),s=ae(R.GET),[l,c]=a.useState(s?s.name:""),[r,_]=a.useState(s?s.profession:ee[0]),g=M=>{_(M)},p=M=>{c(M.target.value)},[n,I]=a.useState(s?s.surname:""),t=M=>{I(M.target.value)},[u,m]=a.useState(s?s.tags:[]),[k,f]=A(),[N,P]=T(),{refs:H}=a.useContext(O);a.useEffect(()=>{o()},[o,l,n,r,u]);const[W,i]=a.useState(!1),[ce,$]=a.useState(!1),[j,ie]=a.useState("");return e.jsxs("div",{ref:H[C.GENERAL],className:L.userEditGeneral,children:[e.jsx("h4",{className:"UserEditPage__caption",children:"Основная информация:"}),e.jsxs(e.Fragment,{children:[j?e.jsx(e.Fragment,{children:j.startsWith("data:image")?e.jsx("img",{className:L.userEditGeneral__headerImage__img,src:j,alt:"Изображение хедера",onClick:()=>i(!0)}):e.jsx("video",{className:L.userEditGeneral__headerImage__img,src:j,controls:!0,preload:"none",onClick:()=>i(!0)})}):e.jsx(we,{className:L.userEditGeneral__headerImage,size:Y.BIG,title:"Загрузить шапку профиля",onClick:()=>i(!0)}),W&&e.jsx(Z,{setModalIsOpen:i,CustomSetModalAppear:$,CustomModalAppear:ce,children:e.jsx(X,{className:L.userEditGeneral__headerLoadingModal,CustomSetModalAppear:$,setModalOpen:i,children:e.jsx(Aa,{HeaderLoadedImageFinish:j,CustomSetModalAppear:$,setModalOpen:i,setHeaderLoadedImageFinish:ie})})})]}),e.jsxs("div",{className:L.userEditGeneral__info,children:[e.jsx(le,{className:L.userEditGeneral__avatar,size:Y.SMALL,title:"Загрузите аватарку",LoadedImage:k,setLoadedImage:f,LoadedImageErrors:N,setLoadedImageErrors:P}),e.jsxs("div",{className:L.userEditGeneral__inputs,children:[e.jsxs("div",{className:L.userEditGeneral__inputs__header,children:[e.jsxs("div",{className:L.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:L.userEditGeneral__inputWrapper__title,children:"Имя"}),e.jsx(K,{value:l,onChange:p,type:"text",placeholder:"Иван",className:L.userEditGeneral__inputWrapper__input})]}),e.jsxs("div",{className:L.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:L.userEditGeneral__inputWrapper__title,children:"Фамилия"}),e.jsx(K,{value:n,onChange:t,type:"text",placeholder:"Иванов",className:L.userEditGeneral__inputWrapper__input})]})]}),e.jsxs("div",{className:L.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:L.userEditGeneral__inputWrapper__title,children:"Профессия"}),e.jsx(de,{className:L.userEditGeneral__select,selectedOptions:ee,CustomDropdownIndicator:Ta,TextStyles:Ha,valueContainerPadding:pe.SMALL,setState:g,DefaultSelectedOption:r})]}),e.jsxs("div",{className:L.userEditGeneral__inputWrapper,children:[e.jsx("span",{className:L.userEditGeneral__inputWrapper__title,children:"Навыки"}),e.jsx(Be,{setSelectedTags:m,SelectedTags:u}),e.jsx("span",{className:"UserEditPage__desc",children:"Начните вводить название программ в которых вы работаете."})]})]})]})]})}),Va="_userEditAbout_16ml2_1",za={userEditAbout:Va},oe=(o,s)=>se(o,_e.USER_EDIT_ABOUT,s),Fa=100,qa=500,Za=a.memo(()=>{const o=oe(R.GET),[s,l]=a.useState(o||""),{refs:c}=a.useContext(O),r=Q(()=>{oe(R.UPDATE,s)},1e3);return a.useEffect(()=>{r()},[s,r]),e.jsxs("div",{ref:c[C.ABOUT],className:za.userEditAbout,children:[e.jsx("h4",{className:"UserEditPage__caption",children:"Обо мне:"}),e.jsx(Se,{minSymbolsAmount:Fa,maxSymbolsAmount:qa,TextareaValue:s,setTextareaValue:l,placeholder:"Ваш текст..."})]})}),Xa="_changeablePortfolioCase_9djz5_1",Ka="_changeablePortfolioCase__img_9djz5_12",Ya="_changeablePortfolioCase__wrapper_9djz5_21",Ja="_changeablePortfolioCase__wrapper__header_9djz5_28",Qa="_changeablePortfolioCase__wrapper__title_9djz5_33",eo="_changeablePortfolioCase__delete_9djz5_40",ao="_changeablePortfolioCase__caseNameInput_9djz5_51",oo="_changeablePortfolioCase__changeImg_9djz5_61",ro="_changeablePortfolioCase__changeImg__title_9djz5_70",so="_changeablePortfolioCase__changeImg__input_9djz5_79",E={changeablePortfolioCase:Xa,changeablePortfolioCase__img:Ka,changeablePortfolioCase__wrapper:Ya,changeablePortfolioCase__wrapper__header:Ja,changeablePortfolioCase__wrapper__title:Qa,changeablePortfolioCase__delete:eo,changeablePortfolioCase__caseNameInput:ao,changeablePortfolioCase__changeImg:oo,changeablePortfolioCase__changeImg__title:ro,changeablePortfolioCase__changeImg__input:so},_o=o=>a.createElement("svg",{width:17,height:17,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.4084 0.682144C14.4988 -0.22738 13.0242 -0.227383 12.1146 0.682144L1.12369 11.6731C0.798565 11.9982 0.576946 12.4123 0.486775 12.8631L0.0310148 15.142C-0.186271 16.2284 0.771595 17.1863 1.85802 16.969L4.13682 16.5132C4.58768 16.4231 5.00178 16.2014 5.32691 15.8763L16.3178 4.88535C17.2274 3.97583 17.2274 2.5012 16.3178 1.59167L15.4084 0.682144ZM13.2125 1.78004C13.5158 1.47686 14.0072 1.47686 14.3105 1.78004L15.22 2.68957C15.5232 2.99274 15.5232 3.48428 15.22 3.78746L13.1459 5.86149L11.1386 3.85407L13.2125 1.78004ZM10.0406 4.95196L2.22159 12.771C2.11321 12.8794 2.03934 13.0174 2.00928 13.1677L1.55352 15.4464L3.83232 14.9907C3.98261 14.9606 4.12064 14.8868 4.22901 14.7784L12.048 6.95938L10.0406 4.95196Z",fill:"#FF5555"})),to=a.memo(({Case:o,setExistedCases:s,ExistedCases:l})=>{const[c,r]=A(),[_,g]=T();a.useEffect(()=>{o.caseImgURL&&r(o.caseImgURL)},[o.caseImgURL,r]),a.useEffect(()=>{if(o.caseImgURL!=c){const m=l.slice(),k=m.findIndex(f=>f.index==o.index);m[k].caseImgURL=c,s(m)}},[o.caseImgURL,o.index,c,l,s]);const[p,n]=a.useState(o.caseName||""),I=a.useRef(null);a.useEffect(()=>{I.current&&I.current.focus()},[]);const t=Q(()=>{if(o.caseName!=p){const m=l.slice(),k=m.findIndex(f=>f.index==o.index);m[k].caseName=p,s(m)}},500),u=a.useCallback(m=>{n(m.target.value),t()},[t]);return e.jsxs("div",{className:E.changeablePortfolioCase,children:[e.jsx(le,{className:E.changeablePortfolioCase__img,requirements:!1,size:Y.MEDIUM,LoadedImage:c,setLoadedImage:r,LoadedImageErrors:_,setLoadedImageErrors:g}),e.jsxs("div",{className:E.changeablePortfolioCase__wrapper,children:[e.jsxs("div",{className:E.changeablePortfolioCase__wrapper__header,children:[e.jsx("span",{className:E.changeablePortfolioCase__wrapper__title,children:"Название проекта"}),e.jsx("div",{onClick:()=>s(m=>m.filter(k=>k.index!==o.index)),children:e.jsx(Ce,{className:E.changeablePortfolioCase__delete})})]}),e.jsx(K,{type:"text",placeholder:"Кейс 1...",value:p,onChange:u,className:E.changeablePortfolioCase__caseNameInput,refInput:I}),e.jsxs("label",{className:E.changeablePortfolioCase__changeImg,children:[e.jsx(_o,{}),e.jsx("input",{className:E.changeablePortfolioCase__changeImg__input,type:"file",accept:"image/png, image/gif, image/jpeg, image/jpg",onChange:m=>J(m,r,g)}),e.jsxs("span",{className:E.changeablePortfolioCase__changeImg__title,children:[c?"Заменить":"Добавить"," изображение"]})]})]})]})}),lo="_userEditPortfolio_1bc3a_1",no="_userEditPortfolio__CaseLoadingModal_1bc3a_8",co="_userEditPortfolio__LastDetailsModal_1bc3a_17",io="_userEditPortfolio__header_1bc3a_26",po="_userEditPortfolio__addCase_1bc3a_32",mo="_userEditPortfolio__cases_1bc3a_44",go="_userEditPortfolio__cases__empty_1bc3a_50",uo="_userEditPortfolio__cases__empty__text_1bc3a_57",B={userEditPortfolio:lo,userEditPortfolio__CaseLoadingModal:no,userEditPortfolio__LastDetailsModal:co,userEditPortfolio__header:io,userEditPortfolio__addCase:po,userEditPortfolio__cases:mo,userEditPortfolio__cases__empty:go,userEditPortfolio__cases__empty__text:uo},Io="_CaseLoadingModal_7hgu0_1",ho="_CaseLoadingModal__caption_7hgu0_4",Lo="_CaseLoadingModal__button_7hgu0_12",U={CaseLoadingModal:Io,CaseLoadingModal__caption:ho,CaseLoadingModal__button:Lo},ko=a.memo(({setLastDetailsModalIsOpen:o,setCaseLoadingModalIsOpen:s,setCaseLoadingModalAppear:l,CaseLoadedImage:c,setCaseLoadedImage:r})=>{const[_,g]=T(),p=a.useRef(),n=a.useCallback(()=>{l(!1),p.current=setTimeout(()=>{s(!1)},q)},[l,s]);a.useEffect(()=>()=>{clearTimeout(p.current)},[]);const I=a.useCallback(()=>{n(),setTimeout(()=>{o(!0)},q)},[n,o]);return e.jsxs(w,{className:U.CaseLoadingModal,align:"center",direction:"column",gap:"30",children:[e.jsx("h3",{className:U.CaseLoadingModal__caption,children:"Над чем вы работали?"}),e.jsx(ne,{size:"medium",LoadedImage:c,setLoadedImage:r,LoadedImageErrors:_,setLoadedImageErrors:g}),e.jsxs(w,{max:!0,justify:"end",children:[c&&e.jsx(v,{className:U.CaseLoadingModal__button,type:y.RED_WITHOUT_OUTLINE,text:"+Добавить блок"}),e.jsx(v,{className:U.CaseLoadingModal__button,type:y.RED,text:"Продолжить",onClick:I})]})]})}),V=[{index:222,caseImgURL:`${z}/global/images/portfolioCase__example_img.png`,caseName:"Инфографика"}],fo="_LastDetailsModal__caption_yhodr_1",wo="_LastDetailsModal__chooseImage_yhodr_7",xo="_LastDetailsModal__img_yhodr_13",Eo="_LastDetailsModal__imgWrapper_yhodr_20",Bo="_LastDetailsModal__imgViews_yhodr_25",So="_LastDetailsModal__imgViews__svg_yhodr_30",Co="_LastDetailsModal__imgViews__text_yhodr_37",vo="_LastDetailsModal__download_yhodr_44",yo="_LastDetailsModal__download__text_yhodr_47",x={LastDetailsModal__caption:fo,LastDetailsModal__chooseImage:wo,LastDetailsModal__img:xo,LastDetailsModal__imgWrapper:Eo,LastDetailsModal__imgViews:Bo,LastDetailsModal__imgViews__svg:So,LastDetailsModal__imgViews__text:Co,LastDetailsModal__download:vo,LastDetailsModal__download__text:yo},jo=o=>a.createElement("svg",{width:20,height:19,viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},a.createElement("path",{d:"M1.53845 12.0768C1.53845 11.652 1.19407 11.3076 0.769227 11.3076C0.344399 11.3076 5.37384e-07 11.652 5.37384e-07 12.0768V12.1332C-1.99753e-05 13.5358 -4.05615e-05 14.6664 0.119507 15.5556C0.24363 16.4788 0.509157 17.256 1.12651 17.8733C1.74386 18.4908 2.52116 18.7563 3.44434 18.8804C4.33353 18.9999 5.46411 18.9999 6.86676 18.9999H13.1332C14.5358 18.9999 15.6664 18.9999 16.5556 18.8804C17.4788 18.7563 18.256 18.4908 18.8734 17.8733C19.4908 17.256 19.7563 16.4788 19.8804 15.5556C19.9999 14.6664 19.9999 13.5358 19.9999 12.1332V12.0768C19.9999 11.652 19.6555 11.3076 19.2307 11.3076C18.8058 11.3076 18.4614 11.652 18.4614 12.0768C18.4614 13.549 18.4598 14.5758 18.3557 15.3506C18.2545 16.1032 18.0694 16.5016 17.7855 16.7855C17.5016 17.0694 17.1032 17.2545 16.3506 17.3557C15.5758 17.4598 14.549 17.4614 13.0768 17.4614H6.92304C5.45083 17.4614 4.42405 17.4598 3.64933 17.3557C2.89675 17.2545 2.49821 17.0694 2.21436 16.7855C1.9305 16.5016 1.74543 16.1032 1.64425 15.3506C1.54008 14.5758 1.53845 13.549 1.53845 12.0768Z",fill:"#FF5555"}),a.createElement("path",{d:"M10.5674 0.250173C10.4216 0.0907893 10.2157 0 9.9997 0C9.7837 0 9.57775 0.0907893 9.43201 0.250173L5.32945 4.73733C5.04279 5.05086 5.06457 5.53742 5.37811 5.82409C5.69165 6.11075 6.17821 6.08897 6.46487 5.77543L9.23047 2.75055V14.1025C9.23047 14.5273 9.57488 14.8717 9.9997 14.8717C10.4245 14.8717 10.7689 14.5273 10.7689 14.1025V2.75055L13.5346 5.77543C13.8212 6.08897 14.3078 6.11075 14.6213 5.82409C14.9349 5.53742 14.9566 5.05086 14.6699 4.73733L10.5674 0.250173Z",fill:"#FF5555"})),Mo=a.memo(({CaseLoadedImage:o})=>e.jsx(w,{align:"center",gap:"15",max:!0,className:x.LastDetailsModal,children:e.jsxs(w,{gap:"10",direction:"column",children:[e.jsx("h2",{className:x.LastDetailsModal__caption,children:"Последшие штрихи"}),e.jsx("span",{className:x.LastDetailsModal__chooseImage,children:"Выберите обложку"}),e.jsxs("div",{className:x.LastDetailsModal__imgWrapper,children:[o.startsWith("data:image")?e.jsx("img",{className:x.LastDetailsModal__img,src:o,alt:"Обложка кейса"}):e.jsx("video",{controls:!0,className:x.LastDetailsModal__img,src:o,preload:"none"}),e.jsxs(w,{align:"center",gap:"3",className:x.LastDetailsModal__imgViews,children:[e.jsx(ge,{className:x.LastDetailsModal__imgViews__svg}),e.jsx("span",{className:x.LastDetailsModal__imgViews__text,children:"300"})]})]}),e.jsx(F,{className:x.LastDetailsModal__download,children:e.jsxs(w,{gap:"10",align:"center",children:[e.jsx(jo,{}),e.jsx("span",{className:x.LastDetailsModal__download__text,children:"Обрезать/выбрать обложку"})]})})]})})),bo=a.memo(()=>{const{refs:o}=a.useContext(O),[s,l]=A(),[c,r]=a.useState(!1),[_,g]=a.useState(!1),[p,n]=a.useState(!1),[I,t]=a.useState(!1),[u,m]=a.useState(V);return e.jsxs("div",{ref:o[C.PORTFOLIO],className:B.userEditPortfolio,children:[c&&e.jsx(Z,{setModalIsOpen:r,CustomSetModalAppear:g,CustomModalAppear:_,children:e.jsx(X,{className:B.userEditPortfolio__CaseLoadingModal,CustomSetModalAppear:g,setModalOpen:r,children:e.jsx(ko,{setLastDetailsModalIsOpen:n,setCaseLoadingModalIsOpen:r,setCaseLoadingModalAppear:g,CaseLoadedImage:s,setCaseLoadedImage:l})})}),p&&e.jsx(Z,{setModalIsOpen:n,CustomSetModalAppear:t,CustomModalAppear:I,children:e.jsx(X,{className:B.userEditPortfolio__LastDetailsModal,CustomSetModalAppear:t,setModalOpen:n,children:e.jsx(Mo,{CaseLoadedImage:s})})}),e.jsxs("div",{className:B.userEditPortfolio__header,children:[e.jsx("h4",{className:"UserEditPage__caption",children:"Портфолио"}),e.jsx("span",{onClick:()=>r(!0),className:B.userEditPortfolio__addCase,children:"+ Добавить кейс"})]}),e.jsx("div",{className:B.userEditPortfolio__cases,children:V.length?V.map(k=>e.jsx(to,{setExistedCases:m,Case:k,ExistedCases:u},k.index)):e.jsx("div",{className:B.userEditPortfolio__cases__empty,children:e.jsx("span",{className:B.userEditPortfolio__cases__empty__text,children:"Проектов ещё нет!"})})})]})}),No=a.memo(()=>e.jsxs("div",{className:Ke.userEdit,children:[e.jsx($a,{}),e.jsx(Za,{}),e.jsx(bo,{})]})),Po="_userEditPageWrapper_16q5v_1",Wo="_userEditPageWrapper__wrapper_16q5v_6",Do="_userEditPageWrapper__buttons_16q5v_15",Go="_userEditPageWrapper__button_16q5v_15",b={userEditPageWrapper:Po,userEditPageWrapper__wrapper:Wo,userEditPageWrapper__buttons:Do,userEditPageWrapper__button:Go},Uo=a.memo(()=>{const[o,s]=a.useState(C.GENERAL),l=a.useRef(null),c=a.useRef(null),r=a.useRef(null),_=a.useMemo(()=>({[C.GENERAL]:l,[C.ABOUT]:c,[C.PORTFOLIO]:r}),[]),g=a.useRef(null),p=a.useMemo(()=>({root:g.current,rootMargin:"0px",threshold:1}),[]),n=a.useRef(!0),I=a.useMemo(()=>new IntersectionObserver(([t])=>{if(t.isIntersecting){const u=Object.values(_).findIndex(m=>m.current==t.target);s(Object.keys(_)[u]),n.current=!1}},p),[p,_]);return a.useEffect(()=>{var t;n.current?_[o]&&((t=_[o].current)==null||t.scrollIntoView({behavior:"smooth",block:"start"})):n.current=!0},[o,_]),a.useEffect(()=>{for(const t in _)I.observe(_[t].current);return()=>{try{for(const t in _)I.unobserve(_[t].current)}catch{}}},[I,_]),a.useEffect(()=>{document.body.scrollIntoView(),setTimeout(()=>{n.current=!0},100)},[]),e.jsx(O.Provider,{value:{ActiveUserEditTab:o,setActiveUserEditTab:s,refs:_},children:e.jsxs("div",{className:b.userEditPageWrapper,children:[e.jsxs("section",{className:b.userEditPageWrapper__wrapper,children:[e.jsx(ue,{}),e.jsx(No,{})]}),e.jsxs("div",{className:b.userEditPageWrapper__buttons,children:[e.jsx(v,{className:b.userEditPageWrapper__button,type:y.BLACK_WITHOUT_OUTLINE,text:"Вернуться в профиль"}),e.jsx(v,{className:b.userEditPageWrapper__button,type:y.RED,text:"Сохранить изменения"})]})]})})}),Hr=a.memo(()=>(a.useEffect(()=>{document.querySelector("html").classList.add("UserEditPage"),document.title="TeleWorks | Редактирование профиля"},[]),e.jsx("main",{className:"UserEditPage__main",children:e.jsx("div",{className:"padding",children:e.jsx(Uo,{})})})));export{Hr as UserEditPage};
