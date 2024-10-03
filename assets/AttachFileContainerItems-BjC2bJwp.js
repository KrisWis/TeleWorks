import{r as n,j as e}from"./react-CA4AiUJV.js";import{U as L,F as g,E as v}from"./index-BFlVQC6e.js";import{P as j}from"./primereact-G5W_VwUW.js";const y="_AttachFileContainer_1rb5f_1",W={AttachFileContainer:y},X=n.memo(({inputRef:t,setInputFiles:l,InputFiles:a,setInputFileProgress:_,accept:m})=>{const h=n.useCallback(u=>{const o=u.target.files,C={FileData:"",FileName:"",FileSize:0,FileType:""};if(o&&o.length&&!a.find(s=>s.FileName==o[0].name)){l([...a,{FileData:"",FileName:"",FileSize:0,FileType:""}]);const s=new FileReader;C.FileName=o[0].name,C.FileSize=o[0].size,C.FileType=o[0].type,s.onprogress=c=>{if(c.lengthComputable){const r=Math.round(c.loaded/c.total*100);_(r)}},s.onload=function(){C.FileData=s.result,l([...a,C]),t.current.files=null},s.readAsDataURL(o[0])}},[a,t,_,l]);return e.jsx("input",{className:W.AttachFileContainer,type:"file",ref:t,onChange:h,accept:m})}),w="_AttachFileContainerFile_7rpsn_3",z="_AttachFileContainerFile__info_7rpsn_11",R="_AttachFileContainerFile__infoWrapper_7rpsn_17",b="_AttachFileContainerFile__img_7rpsn_22",D="_AttachFileContainerFile__video_7rpsn_31",E="_AttachFileContainerFile__iconFile_7rpsn_36",I="_AttachFileContainerFile__size_7rpsn_41",S="_AttachFileContainerFile__caption_7rpsn_54",P="_AttachFileContainerFile__buttons_7rpsn_70",T="_AttachFileContainerFile__change_7rpsn_77",B="_AttachFileContainerFile__delete_7rpsn_77",$="_AttachFileContainerFile__changeWrapper_7rpsn_84",M="_AttachFileContainerFile__deleteWrapper_7rpsn_84",U="_AttachFileContainerFile__changeWrapper__input_7rpsn_87",O="_AttachFileContainerFile__deleteWrapper__input_7rpsn_87",Z="_AttachFileContainerFile__medium_7rpsn_97",i={AttachFileContainerFile:w,AttachFileContainerFile__info:z,AttachFileContainerFile__infoWrapper:R,AttachFileContainerFile__img:b,AttachFileContainerFile__video:D,AttachFileContainerFile__iconFile:E,AttachFileContainerFile__size:I,AttachFileContainerFile__caption:S,AttachFileContainerFile__buttons:P,AttachFileContainerFile__change:T,AttachFileContainerFile__delete:B,AttachFileContainerFile__changeWrapper:$,AttachFileContainerFile__deleteWrapper:M,AttachFileContainerFile__changeWrapper__input:U,AttachFileContainerFile__deleteWrapper__input:O,AttachFileContainerFile__medium:Z},k=t=>n.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("g",{clipPath:"url(#clip0_280_2120)"},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.0293 1.17417C12.2971 0.441943 11.1099 0.441941 10.3776 1.17417L1.52916 10.0227C1.26741 10.2844 1.08899 10.6178 1.0164 10.9808L0.649481 12.8154C0.474551 13.69 1.2457 14.4612 2.12035 14.2863L3.95494 13.9193C4.31792 13.8468 4.65129 13.6683 4.91304 13.4066L13.7615 4.55806C14.4938 3.82582 14.4938 2.63864 13.7615 1.90641L13.0293 1.17417ZM11.2615 2.05806C11.5056 1.81398 11.9013 1.81398 12.1454 2.05806L12.8776 2.79029C13.1218 3.03437 13.1218 3.43009 12.8776 3.67417L11.2079 5.34392L9.59182 3.7278L11.2615 2.05806ZM8.70789 4.61169L2.41304 10.9066C2.32579 10.9938 2.26632 11.1049 2.24212 11.2259L1.87521 13.0605L3.70979 12.6936C3.83079 12.6694 3.94191 12.6099 4.02916 12.5227L10.324 6.2278L8.70789 4.61169Z",fill:"#FF5555"})),n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_280_2120"},n.createElement("rect",{width:15,height:15,fill:"white"})))),q=t=>n.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.7193 1.69471C14.9014 1.50611 15.0022 1.25351 15 0.991311C14.9977 0.729114 14.8925 0.478302 14.7071 0.292893C14.5217 0.107485 14.2709 0.00231622 14.0087 3.78025e-05C13.7465 -0.00224062 13.4939 0.0985542 13.3053 0.280712L7.51229 6.07371L1.71929 0.280712C1.53069 0.0985542 1.27808 -0.00224062 1.01589 3.78025e-05C0.75369 0.00231622 0.502878 0.107485 0.31747 0.292893C0.132062 0.478302 0.0268924 0.729114 0.0246139 0.991311C0.0223355 1.25351 0.12313 1.50611 0.305288 1.69471L6.09829 7.48771L0.305288 13.2807C0.209778 13.373 0.133596 13.4833 0.0811869 13.6053C0.0287779 13.7273 0.00119157 13.8585 3.7757e-05 13.9913C-0.00111606 14.1241 0.0241854 14.2558 0.0744663 14.3787C0.124747 14.5016 0.199 14.6132 0.292893 14.7071C0.386786 14.801 0.498438 14.8753 0.621334 14.9255C0.74423 14.9758 0.87591 15.0011 1.00869 15C1.14147 14.9988 1.27269 14.9712 1.39469 14.9188C1.5167 14.8664 1.62704 14.7902 1.71929 14.6947L7.51229 8.90171L13.3053 14.6947C13.4939 14.8769 13.7465 14.9777 14.0087 14.9754C14.2709 14.9731 14.5217 14.8679 14.7071 14.6825C14.8925 14.4971 14.9977 14.2463 15 13.9841C15.0022 13.7219 14.9014 13.4693 14.7193 13.2807L8.92629 7.48771L14.7193 1.69471Z",fill:"#FF5555"})),G=n.memo(({loadedFile:t,InputFiles:l,setInputFiles:a,setInputFileProgress:_,fileView:m="big"})=>{const h=n.useRef(null),u=n.useCallback(c=>{const r=c.target.files;if(r&&r.length&&!l.find(F=>F.FileName==r[0].name)){const F=new FileReader;F.onprogress=A=>{if(A.lengthComputable){const N=Math.round(A.loaded/A.total*100);_(N)}};const p=l.slice(),f=l.slice(),d=p.findIndex(A=>t.FileName===A.FileName);f[d]={FileData:"",FileName:"",FileSize:0,FileType:""},a(f),p[d].FileName=r[0].name,p[d].FileSize=r[0].size,p[d].FileType=r[0].type,F.onload=function(){p[d].FileData=F.result,a(p)},F.readAsDataURL(r[0])}},[l,t.FileName,_,a]),o=()=>{const c=l.slice(),r=c.findIndex(F=>t.FileName===F.FileName);c.splice(r,1),a(c)},C=t.FileType.split("/")[0]=="image",s=t.FileType.split("/")[0]=="video";return e.jsxs("div",{className:`${i.AttachFileContainerFile} ${m=="medium"?i.AttachFileContainerFile__medium:""}`,children:[e.jsxs("div",{className:i.AttachFileContainerFile__info,children:[C?e.jsx("img",{className:i.AttachFileContainerFile__img,src:t.FileData,alt:t.FileName}):s?e.jsx("video",{className:i.AttachFileContainerFile__video,src:t.FileData,controls:!0,preload:"none"}):e.jsx("img",{className:i.AttachFileContainerFile__iconFile,src:`${L}/global/images/file.png`,alt:t.FileName}),e.jsxs("div",{className:i.AttachFileContainerFile__infoWrapper,children:[e.jsx("span",{className:i.AttachFileContainerFile__caption,children:t.FileName}),e.jsxs("span",{className:i.AttachFileContainerFile__size,children:[(t.FileSize/1048576).toFixed(1)," Мб"]})]})]}),e.jsxs("div",{className:i.AttachFileContainerFile__buttons,children:[e.jsxs("div",{className:i.AttachFileContainerFile__changeWrapper,children:[e.jsx("input",{className:i.AttachFileContainerFile__changeWrapper__input,type:"file",name:"createOrderTechnicalInformationContainer_changeFiles_input",ref:h,onChange:u}),e.jsx(k,{className:i.AttachFileContainerFile__change})]}),e.jsx("div",{className:i.AttachFileContainerFile__deleteWrapper,onClick:o,children:e.jsx(q,{className:i.AttachFileContainerFile__delete})})]})]})}),H="_AttachFileContainerItems__loadingProgressBar_reyaf_3",J="_AttachFileContainerItems__medium_reyaf_19",x={AttachFileContainerItems__loadingProgressBar:H,AttachFileContainerItems__medium:J},Y=n.memo(({setInputFiles:t,setInputFileProgress:l,files:a,InputFileProgress:_,fileView:m="big"})=>e.jsx(g,{max:!0,children:a&&e.jsx(g,{max:!0,direction:"column",className:m=="medium"?x.AttachFileContainerItems__medium:"",children:a.map(h=>e.jsx(g,{max:!0,children:h.FileName!=""?e.jsx(G,{loadedFile:h,InputFiles:a,setInputFiles:t,setInputFileProgress:l,fileView:m}):e.jsxs(g,{max:!0,gap:"5",direction:"column",children:[e.jsx(v,{style:{margin:"auto",marginBottom:"1%"},size:"small"}),e.jsx(j,{style:{width:`${_}%`},className:x.AttachFileContainerItems__loadingProgressBar,value:_})]})},h.FileName))})}));export{X as A,Y as a};
