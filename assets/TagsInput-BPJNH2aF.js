import{r as a,j as r}from"./react-GnO0LmOb.js";import{R as C}from"./react-quill-new-CZBXvqAG.js";import{U as v}from"./index-BvH5l1xJ.js";const h="_markdownTextarea_1wqk5_3",E="_markdownTextareaWrapper_1wqk5_17",y="_markdownTextarea__textarea_1wqk5_24",j="_markdownTextarea__textarea__warn_1wqk5_34",L="_markdownTextarea__symbols_1wqk5_37",x={markdownTextarea:h,markdownTextareaWrapper:E,markdownTextarea__textarea:y,markdownTextarea__textarea__warn:j,markdownTextarea__symbols:L},b={toolbar:[["bold","italic"],[{list:"ordered"}]]},W=["bold","italic","list"],F=a.memo(({TextareaValue:e,setTextareaValue:n,maxSymbolsAmount:p,minSymbolsAmount:s,className:d,placeholder:_,isWarn:o,onChange:l})=>{const[c,t]=a.useState(""),[u,i]=a.useState(""),[T,w]=v(),I=(k,g)=>{g.length<=p?(n(g),t(k),i(g)):(t(""),T||setTimeout(()=>{alert("Вы превысили ограничение по символам! Если хотите вернуть текст, нажмите CTRL+Z")},0),n(u),w(!0))};return a.useEffect(()=>{e==`
`&&n("")},[e,n]),a.useEffect(()=>{e&&t(e)},[]),r.jsxs("div",{className:`${x.markdownTextareaWrapper} ${d}`,children:[r.jsx(C,{className:`${x.markdownTextarea__textarea} 
          ${T||o?x.markdownTextarea__textarea__warn:""}`,theme:"snow",value:c,onChange:(k,g,B,f)=>{I(k,f.getText()),l&&l()},formats:W,modules:b,placeholder:_}),r.jsxs("span",{className:`UserEditPage__desc ${x.markdownTextarea__symbols}`,children:[e.length," из ",p," символов (минимум"," ",s,")"]})]})}),R="_TagsInput__tagsInput_upmjh_3",D="_TagsInput__tagsInputWrapper_upmjh_26",N="_TagsInput__tag_upmjh_3",$="_TagsInput__tag__text_upmjh_64",M="_TagsInput__tag__delete_upmjh_75",m={TagsInput__tagsInput:R,TagsInput__tagsInputWrapper:D,TagsInput__tag:N,TagsInput__tag__text:$,TagsInput__tag__delete:M},q=e=>a.createElement("svg",{width:7,height:7,viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.869 0.790865C6.95401 0.702851 7.00105 0.58497 6.99998 0.462612C6.99892 0.340253 6.94984 0.223207 6.86332 0.136684C6.77679 0.0501599 6.65975 0.0010809 6.53739 1.76411e-05C6.41503 -0.00104562 6.29715 0.0459919 6.20913 0.130999L3.50573 2.8344L0.802334 0.130999C0.71432 0.0459919 0.596439 -0.00104562 0.474081 1.76411e-05C0.351722 0.0010809 0.234676 0.0501599 0.148153 0.136684C0.0616287 0.223207 0.0125498 0.340253 0.0114865 0.462612C0.0104232 0.58497 0.0574608 0.702851 0.142468 0.790865L2.84587 3.49427L0.142468 6.19766C0.0978965 6.24071 0.0623447 6.29221 0.0378872 6.34914C0.0134297 6.40608 0.000556068 6.46731 1.762e-05 6.52928C-0.000520828 6.59124 0.0112865 6.65269 0.0347509 6.71004C0.0582154 6.7674 0.0928668 6.8195 0.136683 6.86332C0.1805 6.90713 0.232604 6.94178 0.289956 6.96525C0.347308 6.98871 0.408758 7.00052 0.470722 6.99998C0.532685 6.99944 0.593921 6.98657 0.650856 6.96211C0.707792 6.93765 0.759286 6.9021 0.802334 6.85753L3.50573 4.15413L6.20913 6.85753C6.29715 6.94254 6.41503 6.98958 6.53739 6.98851C6.65975 6.98745 6.77679 6.93837 6.86332 6.85185C6.94984 6.76532 6.99892 6.64828 6.99998 6.52592C7.00105 6.40356 6.95401 6.28568 6.869 6.19766L4.1656 3.49427L6.869 0.790865Z",fill:"#FF5555"})),H=a.memo(({SelectedTags:e,setSelectedTags:n,onChange:p})=>{const[s,d]=a.useState(""),_=a.useRef(null),o=a.useCallback(t=>{t.preventDefault(),(t.keyCode==13||t.key=="Enter")&&s&&document.activeElement==_.current&&(e.includes(s)||(n([...e,s]),d(""),_.current.focus()))},[e,s,n]);a.useEffect(()=>{document.activeElement==_.current&&s?document.addEventListener("keyup",o):document.removeEventListener("keyup",o)},[document.activeElement,s]),a.useEffect(()=>()=>{document.removeEventListener("keyup",o)},[o]);const l=a.useCallback(t=>{n(e.filter(u=>u!=t)),_.current.focus()},[e,n]),c=a.useCallback(t=>{if(document.activeElement==_.current&&!s){const u=t.keyCode||t.charCode;if(u==8||u==46||t.key=="Backspace"){const i=e.slice();i.pop(),n(i)}}},[e,s,n]);return a.useEffect(()=>(document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}),[c]),r.jsxs("div",{className:m.TagsInput__tagsInputWrapper,children:[e.map(t=>r.jsxs("div",{"data-testid":`TagsInput.tag.${t}`,className:m.TagsInput__tag,children:[r.jsx("span",{className:m.TagsInput__tag__text,children:t}),r.jsx("div",{"data-testid":`TagsInput.tag.${t}.Delete`,onClick:()=>l(t),className:m.TagsInput__tag__delete,children:r.jsx(q,{})})]},t)),r.jsx("input",{"data-testid":"TagsInput.input",className:m.TagsInput__tagsInput,type:"text",value:s,onChange:t=>{d(t.target.value),p&&p()},ref:_,placeholder:"Добавьте теги..."})]})});export{F as M,q as S,H as T};
