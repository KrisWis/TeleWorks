import{r as s,j as t}from"./react-GnO0LmOb.js";import{F as o}from"./index-B_N_4Euv.js";const m="_TransitionBetweenBlocks__disappear_1wakk_1",T="_blockdisappear_1wakk_1",w="_TransitionBetweenBlocks__appear_1wakk_17",x="_blockappear_1wakk_1",u={TransitionBetweenBlocks__disappear:m,blockdisappear:T,TransitionBetweenBlocks__appear:w,blockappear:x},j=({className:B,blocks:r,transitionDuration:a,defaultIndex:d})=>{const[e,p]=s.useState(r[d]),[c,k]=s.useState(null),n=s.useRef(),i=s.useRef(!1);return s.useEffect(()=>{if(i.current&&!n.current)for(const l of r)l.condition&&l.id!==(e==null?void 0:e.id)&&(k(e),p(null),n.current=setTimeout(()=>{n.current=null,i.current=!0,p(l);const _=setTimeout(()=>{k(null),clearTimeout(_)},90);clearTimeout(n.current)},a));else i.current=!0},[r,a,e]),t.jsxs(o,{max:!0,align:"center",justify:"center",className:B,children:[c&&t.jsx(o,{max:!0,"data-testid":c["data-testid"]||"TransitionBetweenBlocks.PastVisibleBlock",className:u.TransitionBetweenBlocks__disappear,style:{animationDuration:`${a+100}ms`},children:c.component}),i.current?e&&t.jsx(o,{max:!0,"data-testid":e["data-testid"]||"TransitionBetweenBlocks.VisibleBlock",style:{animationDuration:`${a}ms`},className:u.TransitionBetweenBlocks__appear,children:e.component}):t.jsx(t.Fragment,{children:e&&t.jsx(o,{max:!0,"data-testid":e["data-testid"]||"TransitionBetweenBlocks.VisibleBlock",children:e.component})})]})};export{j as T};
