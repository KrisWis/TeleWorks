import{r as a,j as r}from"./react-C3EGSwTV.js";import{R as f}from"./react-quill-new-BekiOLBF.js";import{U as v}from"./index-CfAEGk7Q.js";const A=e=>a.createElement("svg",{width:19,height:19,viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.2211 0.762396C16.2046 -0.25413 14.5564 -0.254134 13.5399 0.762396L1.25589 13.0464C0.892513 13.4098 0.644822 13.8726 0.544043 14.3765L0.0346636 16.9234C-0.208185 18.1376 0.862371 19.2082 2.07661 18.9653L4.6235 18.4559C5.12741 18.3552 5.59022 18.1075 5.9536 17.7441L18.2376 5.4601C19.2541 4.44357 19.2541 2.79546 18.2376 1.77892L17.2211 0.762396ZM14.7669 1.98945C15.1058 1.65061 15.6552 1.65061 15.9941 1.98945L17.0105 3.00599C17.3494 3.34482 17.3494 3.89419 17.0105 4.23304L14.6925 6.55107L12.449 4.30749L14.7669 1.98945ZM11.2218 5.53455L2.48295 14.2735C2.36182 14.3946 2.27926 14.5489 2.24567 14.7168L1.73629 17.2637L4.28318 16.7543C4.45115 16.7207 4.60542 16.6382 4.72654 16.5171L13.4654 7.77813L11.2218 5.53455Z",fill:"#FF5555"})),L="_markdownTextarea_1wqk5_3",h="_markdownTextareaWrapper_1wqk5_17",E="_markdownTextarea__textarea_1wqk5_24",y="_markdownTextarea__textarea__warn_1wqk5_34",b="_markdownTextarea__symbols_1wqk5_37",m={markdownTextarea:L,markdownTextareaWrapper:h,markdownTextarea__textarea:E,markdownTextarea__textarea__warn:y,markdownTextarea__symbols:b},j={toolbar:[["bold","italic"],[{list:"ordered"}]]},q=["bold","italic","list"],H=a.memo(({TextareaValue:e,setTextareaValue:n,maxSymbolsAmount:c,minSymbolsAmount:w,className:x,placeholder:T,isWarn:s,onChange:i})=>{const[_,o]=a.useState(""),[I,l]=a.useState(""),[t,u]=v(),d=(k,g)=>{g.length<=c?(n(g),o(k),l(g)):(o(""),t||setTimeout(()=>{alert("Вы превысили ограничение по символам! Если хотите вернуть текст, нажмите CTRL+Z")},0),n(I),u(!0))};return a.useEffect(()=>{e==`
`&&n("")},[e,n]),a.useEffect(()=>{e&&o(e)},[]),r.jsxs("div",{className:`${m.markdownTextareaWrapper} ${x}`,children:[r.jsx(f,{className:`${m.markdownTextarea__textarea} 
          ${t||s?m.markdownTextarea__textarea__warn:""}`,theme:"snow",value:_,onChange:(k,g,B,C)=>{d(k,C.getText()),i&&i()},formats:q,modules:j,placeholder:T}),r.jsxs("span",{className:`UserEditPage__desc ${m.markdownTextarea__symbols}`,children:[e.length," из ",c," символов (минимум"," ",w,")"]})]})}),R="_TagsInput__tagsInput_6iwq1_3",W="_TagsInput__tagsInput__warning_6iwq1_17",$="_TagsInput__tagsInputWrapper_6iwq1_32",M="_TagsInput__tag_6iwq1_3",D="_TagsInput__tag__text_6iwq1_70",N="_TagsInput__tag__delete_6iwq1_81",p={TagsInput__tagsInput:R,TagsInput__tagsInput__warning:W,TagsInput__tagsInputWrapper:$,TagsInput__tag:M,TagsInput__tag__text:D,TagsInput__tag__delete:N},Z=e=>a.createElement("svg",{width:7,height:7,viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.869 0.790865C6.95401 0.702851 7.00105 0.58497 6.99998 0.462612C6.99892 0.340253 6.94984 0.223207 6.86332 0.136684C6.77679 0.0501599 6.65975 0.0010809 6.53739 1.76411e-05C6.41503 -0.00104562 6.29715 0.0459919 6.20913 0.130999L3.50573 2.8344L0.802334 0.130999C0.71432 0.0459919 0.596439 -0.00104562 0.474081 1.76411e-05C0.351722 0.0010809 0.234676 0.0501599 0.148153 0.136684C0.0616287 0.223207 0.0125498 0.340253 0.0114865 0.462612C0.0104232 0.58497 0.0574608 0.702851 0.142468 0.790865L2.84587 3.49427L0.142468 6.19766C0.0978965 6.24071 0.0623447 6.29221 0.0378872 6.34914C0.0134297 6.40608 0.000556068 6.46731 1.762e-05 6.52928C-0.000520828 6.59124 0.0112865 6.65269 0.0347509 6.71004C0.0582154 6.7674 0.0928668 6.8195 0.136683 6.86332C0.1805 6.90713 0.232604 6.94178 0.289956 6.96525C0.347308 6.98871 0.408758 7.00052 0.470722 6.99998C0.532685 6.99944 0.593921 6.98657 0.650856 6.96211C0.707792 6.93765 0.759286 6.9021 0.802334 6.85753L3.50573 4.15413L6.20913 6.85753C6.29715 6.94254 6.41503 6.98958 6.53739 6.98851C6.65975 6.98745 6.77679 6.93837 6.86332 6.85185C6.94984 6.76532 6.99892 6.64828 6.99998 6.52592C7.00105 6.40356 6.95401 6.28568 6.869 6.19766L4.1656 3.49427L6.869 0.790865Z",fill:"#FF5555"})),K=a.memo(({SelectedTags:e,setSelectedTags:n,onChange:c,inputClassname:w,placeholder:x,isWarn:T})=>{const[s,i]=a.useState(""),_=a.useRef(null),o=a.useCallback(t=>{t.preventDefault(),(t.keyCode==13||t.key=="Enter")&&s&&document.activeElement==_.current&&(e.includes(s)||(n([...e,s]),i(""),_.current.focus()))},[e,s,n]);a.useEffect(()=>{document.activeElement==_.current&&s?document.addEventListener("keyup",o):document.removeEventListener("keyup",o)},[document.activeElement,s]),a.useEffect(()=>()=>{document.removeEventListener("keyup",o)},[o]);const I=a.useCallback(t=>{n(e.filter(u=>u!=t)),_.current.focus()},[e,n]),l=a.useCallback(t=>{if(document.activeElement==_.current&&!s){const u=t.keyCode||t.charCode;if(u==8||u==46||t.key=="Backspace"){const d=e.slice();d.pop(),n(d)}}},[e,s,n]);return a.useEffect(()=>(document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}),[l]),r.jsxs("div",{className:p.TagsInput__tagsInputWrapper,children:[e.map(t=>r.jsxs("div",{"data-testid":`TagsInput.tag.${t}`,className:p.TagsInput__tag,children:[r.jsx("span",{className:p.TagsInput__tag__text,children:t}),r.jsx("div",{"data-testid":`TagsInput.tag.${t}.Delete`,onClick:()=>I(t),className:p.TagsInput__tag__delete,children:r.jsx(Z,{})})]},t)),r.jsx("input",{"data-testid":"TagsInput.input",className:`${p.TagsInput__tagsInput} ${w} 
          ${T?p.TagsInput__tagsInput__warning:""}`,type:"text",value:s,onChange:t=>{i(t.target.value),c&&c()},ref:_,placeholder:x||"Добавьте теги..."})]})});export{H as M,A as S,K as T,Z as a};
