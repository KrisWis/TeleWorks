import{d as p}from"./@babel-BoqLWp7i.js";import{d as g}from"./map-age-cleaner-HORcHgLU.js";const m=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const o=Object.getOwnPropertyDescriptor(e,n),c=Object.getOwnPropertyDescriptor(t,n);!b(o,c)&&r||Object.defineProperty(e,n,c)},b=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},w=(e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},y=(e,t)=>`/* Wrapped ${e}*/
${t}`,d=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),O=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),h=(e,t,n)=>{const r=n===""?"":`with ${n.trim()}() `,o=y.bind(null,r,t.toString());Object.defineProperty(o,"name",O),Object.defineProperty(e,"toString",{...d,value:o})},P=(e,t,{ignoreNonConfigurable:n=!1}={})=>{const{name:r}=e;for(const o of Reflect.ownKeys(t))m(e,t,o,n);return w(e,t),h(e,t,r),e};var j=P;const S=j,T=g,i=new WeakMap,f=new WeakMap,a=(e,{cacheKey:t,cache:n=new Map,maxAge:r}={})=>{typeof r=="number"&&T(n);const o=function(...c){const s=t?t(c):c[0],u=n.get(s);if(u)return u.data;const l=e.apply(this,c);return n.set(s,{data:l,maxAge:r?Date.now()+r:Number.POSITIVE_INFINITY}),l};return S(o,e,{ignoreNonConfigurable:!0}),f.set(o,n),o};a.decorator=(e={})=>(t,n,r)=>{const o=t[n];if(typeof o!="function")throw new TypeError("The decorated value must be a function");delete r.value,delete r.writable,r.get=function(){if(!i.has(this)){const c=a(o,e);return i.set(this,c),c}return i.get(this)}};a.clear=e=>{const t=f.get(e);if(!t)throw new TypeError("Can't clear a function that was not memoized!");if(typeof t.clear!="function")throw new TypeError("The cache Map can't be cleared!");t.clear()};var v=a;const E=p(v);export{E as m};
