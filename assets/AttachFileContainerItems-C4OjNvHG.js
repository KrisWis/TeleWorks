var W=Object.defineProperty;var R=(e,t,n)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var g=(e,t,n)=>R(e,typeof t!="symbol"?t+"":t,n);import{r as h,j as r}from"./react-GnO0LmOb.js";import{af as b,U,F as N,P as z}from"./app-routes-C4n3CW9s.js";import{P as D}from"./primereact-CaVLV2bU.js";const P="_AttachFileContainer_1rb5f_1",S={AttachFileContainer:P};class I{constructor(){g(this,"openDatabase",(t,n,i)=>new Promise((_,C)=>{const o=indexedDB.open(t,n);o.onupgradeneeded=a=>{const l=a.target.result;for(const F of i)l.createObjectStore(F,{keyPath:"id"})},o.onsuccess=a=>{const l=a.target.result;_(l)},o.onerror=a=>{console.error("Ошибка при открытии базы данных:",a.target.error),C(a.target.error)}}));g(this,"saveLoadedFile",(t,n,i)=>{const C=t.transaction([n],"readwrite").objectStore(n),o=new Blob([i],{type:i.type}),a={id:i.name,file:{FileData:o,FileName:i.name,FileSize:i.size,FileType:i.type}},l=C.add(a);l.onsuccess=()=>{console.log(`Файл с названием ${i.name} успешно сохранён в IndexedDB`)},l.onerror=F=>{console.error(`Ошибка при сохранении файла ${i.name}:`,F.target.error)}});g(this,"fetchLoadedFiles",(t,n)=>new Promise((i,_)=>{const a=t.transaction([n],"readonly").objectStore(n).getAll();a.onsuccess=l=>{i(l.target.result)},a.onerror=l=>{console.error("Ошибка при извлечении файлов:",l.target.error),_(l.target.error)}}));g(this,"deleteDB",t=>{const n=indexedDB.deleteDatabase(t);n.onsuccess=function(){console.log(`База данных ${t} успешно удалена`)},n.onerror=function(i){console.error(`Ошибка при удалении базы данных ${t}:`,i)},n.onblocked=function(){console.warn(`Удаление базы данных ${t} заблокировано`)}});g(this,"deleteFileFromIndexedDB",(t,n,i)=>{const _=indexedDB.open(t);_.onsuccess=C=>{const o=C.target.result,a=o.transaction(n,"readwrite"),F=a.objectStore(n).delete(i);F.onsuccess=()=>{console.log(`Файл с ключом ${i} успешно удалён.`)},F.onerror=()=>{console.error(`Ошибка при удалении файла с ключом ${i}.`)},a.oncomplete=()=>{o.close()}},_.onerror=()=>{console.error(`Ошибка при открытии базы данных ${t}.`)}})}}const E=new I,_e=h.memo(({inputRef:e,setInputFiles:t,InputFiles:n,setInputFileProgress:i,accept:_,"data-testid":C="AttachFileContainer",zIndex:o,indexedDB:a,indexedDBStoreName:l})=>{const F=h.useCallback(u=>{const f=u.target.files;if(f&&f.length){const j=[];for(const d of f){const p={FileData:"",FileName:"",FileSize:0,FileType:""};if(!n.find(s=>s.FileName==d.name)){b||(t([...n,{FileData:"",FileName:"",FileSize:0,FileType:""}]),a&&l&&E.saveLoadedFile(a,l,d));const s=new FileReader;p.FileName=d.name,p.FileSize=d.size,p.FileType=d.type,s.onprogress=m=>{if(m.lengthComputable){const A=Math.round(m.loaded/m.total*100);i(A)}},s.onload=function(){p.FileData=s.result,j.push(p),t([...n,...j]),e.current.files=null},s.readAsDataURL(d)}}}},[n,a,l,e,i,t]);return r.jsx("input",{style:{zIndex:o},className:S.AttachFileContainer,type:"file",ref:e,onChange:u=>F(u),accept:_,"data-testid":C,multiple:!0})}),T="_AttachFileContainerFile_7rpsn_3",O="_AttachFileContainerFile__info_7rpsn_11",q="_AttachFileContainerFile__infoWrapper_7rpsn_17",M="_AttachFileContainerFile__img_7rpsn_22",k="_AttachFileContainerFile__video_7rpsn_31",Z="_AttachFileContainerFile__iconFile_7rpsn_36",B="_AttachFileContainerFile__size_7rpsn_41",G="_AttachFileContainerFile__caption_7rpsn_54",H="_AttachFileContainerFile__buttons_7rpsn_70",J="_AttachFileContainerFile__change_7rpsn_77",Q="_AttachFileContainerFile__delete_7rpsn_77",V="_AttachFileContainerFile__changeWrapper_7rpsn_84",X="_AttachFileContainerFile__deleteWrapper_7rpsn_84",Y="_AttachFileContainerFile__changeWrapper__input_7rpsn_87",K="_AttachFileContainerFile__deleteWrapper__input_7rpsn_87",ee="_AttachFileContainerFile__medium_7rpsn_97",c={AttachFileContainerFile:T,AttachFileContainerFile__info:O,AttachFileContainerFile__infoWrapper:q,AttachFileContainerFile__img:M,AttachFileContainerFile__video:k,AttachFileContainerFile__iconFile:Z,AttachFileContainerFile__size:B,AttachFileContainerFile__caption:G,AttachFileContainerFile__buttons:H,AttachFileContainerFile__change:J,AttachFileContainerFile__delete:Q,AttachFileContainerFile__changeWrapper:V,AttachFileContainerFile__deleteWrapper:X,AttachFileContainerFile__changeWrapper__input:Y,AttachFileContainerFile__deleteWrapper__input:K,AttachFileContainerFile__medium:ee},te=e=>h.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("g",{clipPath:"url(#clip0_280_2120)"},h.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.0293 1.17417C12.2971 0.441943 11.1099 0.441941 10.3776 1.17417L1.52916 10.0227C1.26741 10.2844 1.08899 10.6178 1.0164 10.9808L0.649481 12.8154C0.474551 13.69 1.2457 14.4612 2.12035 14.2863L3.95494 13.9193C4.31792 13.8468 4.65129 13.6683 4.91304 13.4066L13.7615 4.55806C14.4938 3.82582 14.4938 2.63864 13.7615 1.90641L13.0293 1.17417ZM11.2615 2.05806C11.5056 1.81398 11.9013 1.81398 12.1454 2.05806L12.8776 2.79029C13.1218 3.03437 13.1218 3.43009 12.8776 3.67417L11.2079 5.34392L9.59182 3.7278L11.2615 2.05806ZM8.70789 4.61169L2.41304 10.9066C2.32579 10.9938 2.26632 11.1049 2.24212 11.2259L1.87521 13.0605L3.70979 12.6936C3.83079 12.6694 3.94191 12.6099 4.02916 12.5227L10.324 6.2278L8.70789 4.61169Z",fill:"#FF5555"})),h.createElement("defs",null,h.createElement("clipPath",{id:"clip0_280_2120"},h.createElement("rect",{width:15,height:15,fill:"white"})))),ne=e=>h.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.7193 1.69471C14.9014 1.50611 15.0022 1.25351 15 0.991311C14.9977 0.729114 14.8925 0.478302 14.7071 0.292893C14.5217 0.107485 14.2709 0.00231622 14.0087 3.78025e-05C13.7465 -0.00224062 13.4939 0.0985542 13.3053 0.280712L7.51229 6.07371L1.71929 0.280712C1.53069 0.0985542 1.27808 -0.00224062 1.01589 3.78025e-05C0.75369 0.00231622 0.502878 0.107485 0.31747 0.292893C0.132062 0.478302 0.0268924 0.729114 0.0246139 0.991311C0.0223355 1.25351 0.12313 1.50611 0.305288 1.69471L6.09829 7.48771L0.305288 13.2807C0.209778 13.373 0.133596 13.4833 0.0811869 13.6053C0.0287779 13.7273 0.00119157 13.8585 3.7757e-05 13.9913C-0.00111606 14.1241 0.0241854 14.2558 0.0744663 14.3787C0.124747 14.5016 0.199 14.6132 0.292893 14.7071C0.386786 14.801 0.498438 14.8753 0.621334 14.9255C0.74423 14.9758 0.87591 15.0011 1.00869 15C1.14147 14.9988 1.27269 14.9712 1.39469 14.9188C1.5167 14.8664 1.62704 14.7902 1.71929 14.6947L7.51229 8.90171L13.3053 14.6947C13.4939 14.8769 13.7465 14.9777 14.0087 14.9754C14.2709 14.9731 14.5217 14.8679 14.7071 14.6825C14.8925 14.4971 14.9977 14.2463 15 13.9841C15.0022 13.7219 14.9014 13.4693 14.7193 13.2807L8.92629 7.48771L14.7193 1.69471Z",fill:"#FF5555"})),v=new I,ie=h.memo(({loadedFile:e,InputFiles:t,setInputFiles:n,setInputFileProgress:i,fileView:_="big",accept:C,indexedDBName:o,indexedDBStore:a,indexedDB:l})=>{const F=h.useRef(null),u=h.useCallback(p=>{const s=p.target.files;if(s&&s.length&&!t.find(m=>m.FileName==s[0].name)){const m=new FileReader;m.onprogress=x=>{if(x.lengthComputable){const $=Math.round(x.loaded/x.total*100);i($)}};const A=t.slice(),y=t.slice();!b&&l&&o&&a&&(v.deleteFileFromIndexedDB(o,a,e.FileName),v.saveLoadedFile(l,a,s[0]));const L=A.findIndex(x=>e.FileName===x.FileName);y[L]={FileData:"",FileName:"",FileSize:0,FileType:""},b||n(y),A[L].FileName=s[0].name,A[L].FileSize=s[0].size,A[L].FileType=s[0].type,m.onload=function(){A[L].FileData=m.result,n(A)},m.readAsDataURL(s[0])}},[t,l,o,a,e.FileName,i,n]),f=()=>{const p=t.slice(),s=p.findIndex(m=>e.FileName===m.FileName);p.splice(s,1),n(p),!b&&o&&a&&v.deleteFileFromIndexedDB(o,a,e.FileName)},j=e.FileType.split("/")[0]=="image",d=e.FileType.split("/")[0]=="video";return r.jsxs("div",{"data-testid":`AttachFileContainerFile.${e.FileName}`,className:`${c.AttachFileContainerFile} ${_=="medium"?c.AttachFileContainerFile__medium:""}`,children:[r.jsxs("div",{className:c.AttachFileContainerFile__info,children:[j?r.jsx("img",{className:c.AttachFileContainerFile__img,src:typeof e.FileData=="string"?e.FileData:URL.createObjectURL(e.FileData),alt:e.FileName}):d?r.jsx("video",{className:c.AttachFileContainerFile__video,src:typeof e.FileData=="string"?e.FileData:URL.createObjectURL(e.FileData),controls:!0,preload:"none"}):r.jsx("img",{className:c.AttachFileContainerFile__iconFile,src:`${U}/global/images/file.png`,alt:e.FileName}),r.jsxs("div",{className:c.AttachFileContainerFile__infoWrapper,children:[r.jsx("span",{className:c.AttachFileContainerFile__caption,children:e.FileName}),r.jsxs("span",{className:c.AttachFileContainerFile__size,children:[(e.FileSize/1048576).toFixed(1)," Мб"]})]})]}),r.jsxs("div",{className:c.AttachFileContainerFile__buttons,children:[r.jsxs("div",{className:c.AttachFileContainerFile__changeWrapper,children:[r.jsx("input",{className:c.AttachFileContainerFile__changeWrapper__input,type:"file",name:"createOrderTechnicalInformationContainer_changeFiles_input",ref:F,"data-testid":`AttachFileContainerFile.${e.FileName}.Change`,onChange:u,accept:C}),r.jsx(te,{className:c.AttachFileContainerFile__change})]}),r.jsx("div",{className:c.AttachFileContainerFile__deleteWrapper,onClick:f,children:r.jsx(ne,{"data-testid":`AttachFileContainerFile.${e.FileName}.Delete`,className:c.AttachFileContainerFile__delete})})]})]})}),ae="_AttachFileContainerItems__loadingProgressBar_reyaf_3",le="_AttachFileContainerItems__medium_reyaf_19",w={AttachFileContainerItems__loadingProgressBar:ae,AttachFileContainerItems__medium:le},Fe=h.memo(({setInputFiles:e,setInputFileProgress:t,files:n,InputFileProgress:i,fileView:_="big",accept:C,indexedDBName:o,indexedDBStore:a,indexedDB:l})=>r.jsx(N,{max:!0,children:n&&r.jsx(N,{max:!0,direction:"column",className:_=="medium"?w.AttachFileContainerItems__medium:"",children:n.map(F=>r.jsx(N,{max:!0,children:F.FileName!=""?r.jsx(ie,{loadedFile:F,InputFiles:n,setInputFiles:e,setInputFileProgress:t,fileView:_,accept:C,indexedDBName:o,indexedDBStore:a,indexedDB:l}):r.jsxs(N,{max:!0,gap:"5",direction:"column",children:[r.jsx(z,{style:{margin:"auto",marginBottom:"1%"},size:"small"}),r.jsx(D,{style:{width:`${i}%`},className:w.AttachFileContainerItems__loadingProgressBar,value:i})]})},F.FileName))})}));export{_e as A,I as U,Fe as a};
