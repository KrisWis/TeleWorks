import{r as n,j as a}from"./react-C3EGSwTV.js";import{U as f}from"./AttachFileContainerItems-b6JYEDCX.js";import{ac as w,k as T,i as x,F as d}from"./app-routes-B1pE1BO8.js";const m=new f,D=n.memo(({children:u,setFiles:i,indexedDB:t,indexedDBStoreName:c})=>{const e=n.useCallback(async o=>{const s=await m.fetchLoadedFiles(o,c);s&&i(s.map(r=>r.file))},[c,i]);return n.useEffect(()=>{w||(async()=>(t.current=await m.openDatabase(T,1,x.map(s=>s.name)),e(t.current)))()},[t,e]),a.jsx(a.Fragment,{children:u})}),b="_TransitionBetweenBlocks__disappear_1wakk_1",j="_blockdisappear_1wakk_1",V="_TransitionBetweenBlocks__appear_1wakk_17",h="_blockappear_1wakk_1",B={TransitionBetweenBlocks__disappear:b,blockdisappear:j,TransitionBetweenBlocks__appear:V,blockappear:h},E=({className:u,blocks:i,transitionDuration:t,defaultIndex:c})=>{const[e,o]=n.useState(i[c]),[s,r]=n.useState(null),l=n.useRef(),p=n.useRef(!1);return n.useEffect(()=>{if(p.current&&!l.current)for(const k of i)k.condition&&k.id!==(e==null?void 0:e.id)&&(r(e),o(null),l.current=setTimeout(()=>{l.current=null,p.current=!0,o(k);const _=setTimeout(()=>{r(null),clearTimeout(_)},90);clearTimeout(l.current)},t));else p.current=!0},[i,t,e]),a.jsxs(d,{max:!0,align:"center",justify:"center",className:u,children:[s&&a.jsx(d,{max:!0,"data-testid":s["data-testid"]||"TransitionBetweenBlocks.PastVisibleBlock",className:B.TransitionBetweenBlocks__disappear,style:{animationDuration:`${t+100}ms`},children:s.component}),p.current?e&&a.jsx(d,{max:!0,"data-testid":e["data-testid"]||"TransitionBetweenBlocks.VisibleBlock",style:{animationDuration:`${t}ms`},className:B.TransitionBetweenBlocks__appear,children:e.component}):a.jsx(a.Fragment,{children:e&&a.jsx(d,{max:!0,"data-testid":e["data-testid"]||"TransitionBetweenBlocks.VisibleBlock",children:e.component})})]})};export{D as I,E as T};
