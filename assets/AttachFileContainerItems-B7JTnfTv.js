var $=Object.defineProperty;var I=(e,t,i)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var u=(e,t,i)=>I(e,typeof t!="symbol"?t+"":t,i);import{r as F,j as l}from"./react-GnO0LmOb.js";import{j as D,y,U as R,F as N,P as z}from"./app-routes-MtUzyGj2.js";import{P as U}from"./primereact-CaVLV2bU.js";const P="_AttachFileContainer_1rb5f_1",S={AttachFileContainer:P},_e=F.memo(({inputRef:e,setInputFiles:t,InputFiles:i,setInputFileProgress:n,accept:_,"data-testid":m="AttachFileContainer",zIndex:o,onChange:a})=>{const r=F.useCallback(c=>{const f=c.target.files;if(f&&f.length){const j=[];for(const d of f){const A={FileData:"",FileName:"",FileSize:0,FileType:""};if(!i.find(h=>h.FileName==d.name)){D||t([...i,{FileData:"",FileName:"",FileSize:0,FileType:""}]);const h=new FileReader;A.FileName=d.name,A.FileSize=d.size,A.FileType=d.type,h.onprogress=C=>{if(C.lengthComputable){const p=Math.round(C.loaded/C.total*100);n(p)}},h.onload=function(){A.FileData=h.result,j.push(A),t([...i,...j]),e.current.files=null},h.readAsDataURL(d)}}}},[i,e,n,t]);return l.jsx("input",{style:{zIndex:o},className:S.AttachFileContainer,type:"file",ref:e,onChange:c=>{r(c),a&&y&&a(c)},accept:_,"data-testid":m,multiple:!0})}),E="_AttachFileContainerFile_7rpsn_3",T="_AttachFileContainerFile__info_7rpsn_11",B="_AttachFileContainerFile__infoWrapper_7rpsn_17",O="_AttachFileContainerFile__img_7rpsn_22",q="_AttachFileContainerFile__video_7rpsn_31",M="_AttachFileContainerFile__iconFile_7rpsn_36",k="_AttachFileContainerFile__size_7rpsn_41",Z="_AttachFileContainerFile__caption_7rpsn_54",G="_AttachFileContainerFile__buttons_7rpsn_70",H="_AttachFileContainerFile__change_7rpsn_77",J="_AttachFileContainerFile__delete_7rpsn_77",Q="_AttachFileContainerFile__changeWrapper_7rpsn_84",V="_AttachFileContainerFile__deleteWrapper_7rpsn_84",X="_AttachFileContainerFile__changeWrapper__input_7rpsn_87",Y="_AttachFileContainerFile__deleteWrapper__input_7rpsn_87",K="_AttachFileContainerFile__medium_7rpsn_97",s={AttachFileContainerFile:E,AttachFileContainerFile__info:T,AttachFileContainerFile__infoWrapper:B,AttachFileContainerFile__img:O,AttachFileContainerFile__video:q,AttachFileContainerFile__iconFile:M,AttachFileContainerFile__size:k,AttachFileContainerFile__caption:Z,AttachFileContainerFile__buttons:G,AttachFileContainerFile__change:H,AttachFileContainerFile__delete:J,AttachFileContainerFile__changeWrapper:Q,AttachFileContainerFile__deleteWrapper:V,AttachFileContainerFile__changeWrapper__input:X,AttachFileContainerFile__deleteWrapper__input:Y,AttachFileContainerFile__medium:K},ee=e=>F.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},F.createElement("g",{clipPath:"url(#clip0_280_2120)"},F.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.0293 1.17417C12.2971 0.441943 11.1099 0.441941 10.3776 1.17417L1.52916 10.0227C1.26741 10.2844 1.08899 10.6178 1.0164 10.9808L0.649481 12.8154C0.474551 13.69 1.2457 14.4612 2.12035 14.2863L3.95494 13.9193C4.31792 13.8468 4.65129 13.6683 4.91304 13.4066L13.7615 4.55806C14.4938 3.82582 14.4938 2.63864 13.7615 1.90641L13.0293 1.17417ZM11.2615 2.05806C11.5056 1.81398 11.9013 1.81398 12.1454 2.05806L12.8776 2.79029C13.1218 3.03437 13.1218 3.43009 12.8776 3.67417L11.2079 5.34392L9.59182 3.7278L11.2615 2.05806ZM8.70789 4.61169L2.41304 10.9066C2.32579 10.9938 2.26632 11.1049 2.24212 11.2259L1.87521 13.0605L3.70979 12.6936C3.83079 12.6694 3.94191 12.6099 4.02916 12.5227L10.324 6.2278L8.70789 4.61169Z",fill:"#FF5555"})),F.createElement("defs",null,F.createElement("clipPath",{id:"clip0_280_2120"},F.createElement("rect",{width:15,height:15,fill:"white"})))),te=e=>F.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},F.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.7193 1.69471C14.9014 1.50611 15.0022 1.25351 15 0.991311C14.9977 0.729114 14.8925 0.478302 14.7071 0.292893C14.5217 0.107485 14.2709 0.00231622 14.0087 3.78025e-05C13.7465 -0.00224062 13.4939 0.0985542 13.3053 0.280712L7.51229 6.07371L1.71929 0.280712C1.53069 0.0985542 1.27808 -0.00224062 1.01589 3.78025e-05C0.75369 0.00231622 0.502878 0.107485 0.31747 0.292893C0.132062 0.478302 0.0268924 0.729114 0.0246139 0.991311C0.0223355 1.25351 0.12313 1.50611 0.305288 1.69471L6.09829 7.48771L0.305288 13.2807C0.209778 13.373 0.133596 13.4833 0.0811869 13.6053C0.0287779 13.7273 0.00119157 13.8585 3.7757e-05 13.9913C-0.00111606 14.1241 0.0241854 14.2558 0.0744663 14.3787C0.124747 14.5016 0.199 14.6132 0.292893 14.7071C0.386786 14.801 0.498438 14.8753 0.621334 14.9255C0.74423 14.9758 0.87591 15.0011 1.00869 15C1.14147 14.9988 1.27269 14.9712 1.39469 14.9188C1.5167 14.8664 1.62704 14.7902 1.71929 14.6947L7.51229 8.90171L13.3053 14.6947C13.4939 14.8769 13.7465 14.9777 14.0087 14.9754C14.2709 14.9731 14.5217 14.8679 14.7071 14.6825C14.8925 14.4971 14.9977 14.2463 15 13.9841C15.0022 13.7219 14.9014 13.4693 14.7193 13.2807L8.92629 7.48771L14.7193 1.69471Z",fill:"#FF5555"}));class ie{constructor(){u(this,"openDatabase",(t,i,n)=>new Promise((_,m)=>{const o=indexedDB.open(t,i);o.onupgradeneeded=a=>{const r=a.target.result;for(const c of n)r.createObjectStore(c,{keyPath:"id"})},o.onsuccess=a=>{const r=a.target.result;_(r)},o.onerror=a=>{console.error("Ошибка при открытии базы данных:",a.target.error),m(a.target.error)}}));u(this,"saveLoadedFile",(t,i,n)=>{const m=t.transaction([i],"readwrite").objectStore(i),o=new Blob([n],{type:n.type}),a={id:n.name,file:{FileData:o,FileName:n.name,FileSize:n.size,FileType:n.type}},r=m.add(a);r.onsuccess=()=>{console.log(`Файл с названием ${n.name} успешно сохранён в IndexedDB`)},r.onerror=c=>{console.error(`Ошибка при сохранении файла ${n.name}:`,c.target.error)}});u(this,"fetchLoadedFiles",(t,i)=>new Promise((n,_)=>{const a=t.transaction([i],"readonly").objectStore(i).getAll();a.onsuccess=r=>{n(r.target.result)},a.onerror=r=>{console.error("Ошибка при извлечении файлов:",r.target.error),_(r.target.error)}}));u(this,"deleteDB",t=>{const i=indexedDB.deleteDatabase(t);i.onsuccess=function(){console.log(`База данных ${t} успешно удалена`)},i.onerror=function(n){console.error(`Ошибка при удалении базы данных ${t}:`,n)},i.onblocked=function(){console.warn(`Удаление базы данных ${t} заблокировано`)}});u(this,"deleteFileFromIndexedDB",(t,i,n)=>{const _=indexedDB.open(t);_.onsuccess=m=>{const o=m.target.result,a=o.transaction(i,"readwrite"),c=a.objectStore(i).delete(n);c.onsuccess=()=>{console.log(`Файл с ключом ${n} успешно удалён.`)},c.onerror=()=>{console.error(`Ошибка при удалении файла с ключом ${n}.`)},a.oncomplete=()=>{o.close()}},_.onerror=()=>{console.error(`Ошибка при открытии базы данных ${t}.`)}})}}const v=new ie,ne=F.memo(({loadedFile:e,InputFiles:t,setInputFiles:i,setInputFileProgress:n,fileView:_="big",accept:m,indexedDBName:o,indexedDBStore:a,onChange:r})=>{const c=F.useRef(null),f=F.useCallback(h=>{const C=h.target.files;if(C&&C.length&&!t.find(p=>p.FileName==C[0].name)){const p=new FileReader;p.onprogress=L=>{if(L.lengthComputable){const W=Math.round(L.loaded/L.total*100);n(W)}};const g=t.slice(),b=t.slice();y&&r&&o&&a&&(v.deleteFileFromIndexedDB(o,a,e.FileName),r(h));const x=g.findIndex(L=>e.FileName===L.FileName);b[x]={FileData:"",FileName:"",FileSize:0,FileType:""},D||i(b),g[x].FileName=C[0].name,g[x].FileSize=C[0].size,g[x].FileType=C[0].type,p.onload=function(){g[x].FileData=p.result,i(g)},p.readAsDataURL(C[0])}},[t,o,a,e.FileName,r,n,i]),j=()=>{const h=t.slice(),C=h.findIndex(p=>e.FileName===p.FileName);h.splice(C,1),i(h),y&&o&&a&&v.deleteFileFromIndexedDB(o,a,e.FileName)},d=e.FileType.split("/")[0]=="image",A=e.FileType.split("/")[0]=="video";return l.jsxs("div",{"data-testid":`AttachFileContainerFile.${e.FileName}`,className:`${s.AttachFileContainerFile} ${_=="medium"?s.AttachFileContainerFile__medium:""}`,children:[l.jsxs("div",{className:s.AttachFileContainerFile__info,children:[d?l.jsx("img",{className:s.AttachFileContainerFile__img,src:typeof e.FileData=="string"?e.FileData:URL.createObjectURL(e.FileData),alt:e.FileName}):A?l.jsx("video",{className:s.AttachFileContainerFile__video,src:typeof e.FileData=="string"?e.FileData:URL.createObjectURL(e.FileData),controls:!0,preload:"none"}):l.jsx("img",{className:s.AttachFileContainerFile__iconFile,src:`${R}/global/images/file.png`,alt:e.FileName}),l.jsxs("div",{className:s.AttachFileContainerFile__infoWrapper,children:[l.jsx("span",{className:s.AttachFileContainerFile__caption,children:e.FileName}),l.jsxs("span",{className:s.AttachFileContainerFile__size,children:[(e.FileSize/1048576).toFixed(1)," Мб"]})]})]}),l.jsxs("div",{className:s.AttachFileContainerFile__buttons,children:[l.jsxs("div",{className:s.AttachFileContainerFile__changeWrapper,children:[l.jsx("input",{className:s.AttachFileContainerFile__changeWrapper__input,type:"file",name:"createOrderTechnicalInformationContainer_changeFiles_input",ref:c,"data-testid":`AttachFileContainerFile.${e.FileName}.Change`,onChange:f,accept:m}),l.jsx(ee,{className:s.AttachFileContainerFile__change})]}),l.jsx("div",{className:s.AttachFileContainerFile__deleteWrapper,onClick:j,children:l.jsx(te,{"data-testid":`AttachFileContainerFile.${e.FileName}.Delete`,className:s.AttachFileContainerFile__delete})})]})]})}),ae="_AttachFileContainerItems__loadingProgressBar_reyaf_3",le="_AttachFileContainerItems__medium_reyaf_19",w={AttachFileContainerItems__loadingProgressBar:ae,AttachFileContainerItems__medium:le},Fe=F.memo(({setInputFiles:e,setInputFileProgress:t,files:i,InputFileProgress:n,fileView:_="big",accept:m,indexedDBName:o,indexedDBStore:a,onChange:r})=>l.jsx(N,{max:!0,children:i&&l.jsx(N,{max:!0,direction:"column",className:_=="medium"?w.AttachFileContainerItems__medium:"",children:i.map(c=>l.jsx(N,{max:!0,children:c.FileName!=""?l.jsx(ne,{loadedFile:c,InputFiles:i,setInputFiles:e,setInputFileProgress:t,fileView:_,accept:m,indexedDBName:o,indexedDBStore:a,onChange:r}):l.jsxs(N,{max:!0,gap:"5",direction:"column",children:[l.jsx(z,{style:{margin:"auto",marginBottom:"1%"},size:"small"}),l.jsx(U,{style:{width:`${n}%`},className:w.AttachFileContainerItems__loadingProgressBar,value:n})]})},c.FileName))})}));export{_e as A,ie as U,Fe as a};
