import{r as o}from"./react-CA4AiUJV.js";const D=0,U=1,m=2,N=3,R=4,q=5,P=6,z=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],B=t=>({_s:t,status:z[t],isEnter:t<N,isMounted:t!==P,isResolved:t===m||t>R}),X=t=>t?P:q,F=(t,r)=>{switch(t){case U:case D:return m;case R:case N:return X(r)}},H=t=>typeof t=="object"?[t.enter,t.exit]:[t,t],J=(t,r)=>setTimeout(()=>{isNaN(document.body.offsetTop)||t(r+1)},0),K=new Map,L=new Map,C=(t,r,d,u,T,p)=>{clearTimeout(T);const f=B(r),a=new Map(u.current);a.set(t,f),d(a),u.current=a,p&&p({key:t,current:f})},Q=({allowMultiple:t,enter:r=!0,exit:d=!0,preEnter:u,preExit:T,timeout:p,initialEntered:f,mountOnEnter:a,unmountOnExit:l,onStateChange:g}={})=>{const[A,E]=o.useState(K),c=o.useRef(A),b=o.useRef(L),[_,w]=H(p),v=o.useCallback((e,s)=>{const{initialEntered:i=f}=s||{},n=i?m:X(a);C(e,n,E,c),b.current.set(e,{})},[f,a]),h=o.useCallback(e=>{const s=new Map(c.current);return s.delete(e)?(E(s),c.current=s,b.current.delete(e),!0):!1},[]),I=o.useCallback(e=>{const s=c.current.get(e);if(!s)return;const{timeoutId:i}=b.current.get(e),n=F(s._s,l);n&&C(e,n,E,c,i,g)},[g,l]),S=o.useCallback((e,s)=>{const i=c.current.get(e);if(!i)return;const n=b.current.get(e),j=M=>{switch(C(e,M,E,c,n.timeoutId,g),M){case U:_>=0&&(n.timeoutId=setTimeout(()=>I(e),_));break;case R:w>=0&&(n.timeoutId=setTimeout(()=>I(e),w));break;case D:case N:n.timeoutId=J(j,M);break}},x=i.isEnter;typeof s!="boolean"&&(s=!x),s?x||(j(r?u?D:U:m),!t&&c.current.forEach((M,G)=>G!==e&&S(G,!1))):x&&j(d?T?N:R:X(l))},[g,I,t,r,d,u,T,_,w,l]),k=o.useCallback(e=>{if(!(!t&&e!==!1))for(const s of c.current.keys())S(s,e)},[t,S]);return{stateMap:A,toggle:S,toggleAll:k,endTransition:I,setItem:v,deleteItem:h}};export{Q as u};
