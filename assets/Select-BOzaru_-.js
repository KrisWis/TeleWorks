import{r as o,j as s}from"./react-B8VV3c8w.js";import{S as C}from"./react-select-C6CRNscn.js";var S=(e=>(e.BLACK="black",e.GRAY="gray",e))(S||{});const _={black:{fontSize:"15px",color:"var(--black-color)"},gray:{fontSize:"14px",color:"#b2b2b2"}};var d=(e=>(e.BIG="2px 20px",e.MEDIUM="2px 15px",e.SMALL="2px 7px",e))(d||{});const I="_Select_12sr2_1",R="_Select__svg_12sr2_7",w="_Select__svg__active_12sr2_10",r={Select:I,Select__svg:R,Select__svg__active:w},j=o.memo(({selectedOptions:e,CustomDropdownIndicator:x,TextStyles:g,className:v,theme:l=S.BLACK,valueContainerPadding:u=d.MEDIUM,setState:n,DefaultSelectedOption:f})=>{const a=o.useRef(null),[m,b]=o.useState(f||null),c=o.useRef(null),h=t=>{b(t),n&&n(t)},k=()=>s.jsx("div",{ref:c,children:x()}),i=()=>({color:_[l].color,fontSize:_[l].fontSize,...g,gridArea:"1 / 1 / 2 / 3"}),y={control:()=>({display:"flex",width:"100%",height:"100%"}),singleValue:i,placeholder:i,valueContainer:()=>({padding:u,display:"grid",alignItems:"center",flex:1}),indicatorSeparator:()=>({}),menu:()=>({zIndex:"var(--z-index-dropdown)",top:"100%",position:"absolute",width:"100%",backgroundColor:"hsl(0, 0%, 100%)",borderRadius:"4px",boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:"8px",marginTop:"8px",boxSizing:"border-box"})};o.useEffect(()=>{const t=z=>{var p;(p=a.current)!=null&&p.contains(z.target)||c.current.classList.remove(r.Select__svg__active)};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[]);const L=()=>{c.current.classList.toggle(r.Select__svg__active)};return s.jsx("div",{ref:a,onClick:L,children:s.jsx(C,{className:`${r.Select} ${v}`,defaultValue:m,onChange:t=>{h(t)},options:e,styles:y,placeholder:e[0].label,components:{DropdownIndicator:k}})})});export{j as S,S as a,r as s,d as v};
