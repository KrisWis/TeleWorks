import{r as n,j as a}from"./react-e8hmi6Ay.js";import{c as i,u as p}from"./react-redux-qk2IzDxo.js";const E=({children:u,reducers:t,removeAfterUnmount:c=!0})=>{const r=i(),s=p(),o=r.reducerManager.getMountedReducers();return n.useEffect(()=>(Object.entries(t).forEach(([e,d])=>{o[e]||(r.reducerManager.add(e,d),s({type:`@INIT ${e} reducer`}))}),()=>{c&&Object.entries(t).forEach(([e])=>{r.reducerManager.remove(e),s({type:`@DESTROY ${e} reducer`})})}),[s,o,t,c,r.reducerManager]),a.jsx(a.Fragment,{children:u})};export{E as D};
