import{r as e,j as r}from"./react-C3EGSwTV.js";import{F as m}from"./app-routes-DOYk1v_t.js";import{c as C,u as x}from"./react-redux-DCb0tGWe.js";const f="_Counter_115u3_3",h="_Counter__disabled_115u3_6",b="_Counter__button_115u3_10",g="_Counter__button__small_115u3_49",E="_Counter__button__disabled_115u3_52",p="_Counter__increase_115u3_65",w="_Counter__dicrease_115u3_68",j="_Counter__text_115u3_71",v="_Counter__text__small_115u3_83",t={Counter:f,Counter__disabled:h,Counter__button:b,Counter__button__small:g,Counter__button__disabled:E,Counter__increase:p,Counter__dicrease:w,Counter__text:j,Counter__text__small:v},c=n=>e.createElement("svg",{width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},e.createElement("g",{filter:"url(#filter0_d_306_1558)"},e.createElement("circle",{cx:14,cy:14,r:9,fill:"white"}),e.createElement("circle",{cx:14,cy:14,r:8.5,stroke:"#EAF2FF"})),e.createElement("defs",null,e.createElement("filter",{id:"filter0_d_306_1558",x:0,y:0,width:28,height:28,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},e.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),e.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),e.createElement("feOffset",null),e.createElement("feGaussianBlur",{stdDeviation:2.5}),e.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),e.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}),e.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_306_1558"}),e.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_306_1558",result:"shape"})))),i=n=>e.createElement("svg",{width:29,height:29,viewBox:"0 0 29 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},e.createElement("circle",{cx:14.5,cy:14.5,r:14,stroke:"#FF5555"})),B=e.memo(({amount:n,dicreaseAmount:u,increaseAmount:a,isDisabled:s=!1,type:o="medium",canAlwaysDicrease:l=!1})=>{const _=e.useMemo(()=>l?!l:n==1,[n,l]);return r.jsxs(m,{align:"center",gap:o=="medium"?"5":"0",className:`${t.Counter} 
        ${s?t.Counter__disabled:""}`,children:[r.jsx("button",{disabled:_,onClick:()=>_?{}:u(),className:`${t.Counter__button} 
          ${o=="small"?t.Counter__button__small:""}
          ${t.Counter__dicrease} 
          ${_?t.Counter__button__disabled:""}`,children:o=="medium"?r.jsx(i,{}):r.jsx(c,{})}),r.jsx("span",{className:`${o=="medium"?t.Counter__text:t.Counter__text__small}`,children:n}),r.jsx("button",{onClick:()=>a(),className:`${t.Counter__button} 
          ${o=="small"?t.Counter__button__small:""}
           ${t.Counter__increase}`,children:o=="medium"?r.jsx(i,{}):r.jsx(c,{})})]})}),k=({children:n,reducers:u,removeAfterUnmount:a=!0})=>{const s=C(),o=x(),l=s.reducerManager.getMountedReducers();return e.useEffect(()=>(Object.entries(u).forEach(([_,d])=>{l[_]||s.reducerManager.add(_,d)}),()=>{a&&Object.entries(u).forEach(([_])=>{s.reducerManager.remove(_)})}),[o,l,u,a,s.reducerManager]),r.jsx(r.Fragment,{children:n})};export{B as C,k as D};
