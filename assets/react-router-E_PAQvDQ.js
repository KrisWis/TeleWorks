import{r as a}from"./react-Dfg0QzLj.js";import{i as p,m as z,j as P,A as k,p as M,s as W,g as D,r as J,a as A}from"./@remix-run-Bwh-Hsl8.js";/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},R.apply(this,arguments)}const L=a.createContext(null),V=a.createContext(null),y=a.createContext(null),B=a.createContext(null),x=a.createContext({outlet:null,matches:[],isDataRoute:!1}),T=a.createContext(null);function ue(t,e){let{relative:r}=e===void 0?{}:e;b()||p(!1);let{basename:n,navigator:i}=a.useContext(y),{hash:s,pathname:o,search:f}=G(t,{relative:r}),c=o;return n!=="/"&&(c=o==="/"?n:P([n,o])),i.createHref({pathname:c,search:f,hash:s})}function b(){return a.useContext(B)!=null}function F(){return b()||p(!1),a.useContext(B).location}function _(t){a.useContext(y).static||a.useLayoutEffect(t)}function ce(){let{isDataRoute:t}=a.useContext(x);return t?ae():q()}function q(){b()||p(!1);let t=a.useContext(L),{basename:e,future:r,navigator:n}=a.useContext(y),{matches:i}=a.useContext(x),{pathname:s}=F(),o=JSON.stringify(D(i,r.v7_relativeSplatPath)),f=a.useRef(!1);return _(()=>{f.current=!0}),a.useCallback(function(v,u){if(u===void 0&&(u={}),!f.current)return;if(typeof v=="number"){n.go(v);return}let l=J(v,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(l.pathname=l.pathname==="/"?e:P([e,l.pathname])),(u.replace?n.replace:n.push)(l,u.state,u)},[e,n,o,s,t])}function G(t,e){let{relative:r}=e===void 0?{}:e,{future:n}=a.useContext(y),{matches:i}=a.useContext(x),{pathname:s}=F(),o=JSON.stringify(D(i,n.v7_relativeSplatPath));return a.useMemo(()=>J(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function K(t,e){return Q(t,e)}function Q(t,e,r,n){b()||p(!1);let{navigator:i}=a.useContext(y),{matches:s}=a.useContext(x),o=s[s.length-1],f=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let v=F(),u;if(e){var l;let d=typeof e=="string"?M(e):e;c==="/"||(l=d.pathname)!=null&&l.startsWith(c)||p(!1),u=d}else u=v;let h=u.pathname||"/",m=h;if(c!=="/"){let d=c.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(d.length).join("/")}let g=z(t,{pathname:m}),C=H(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},f,d.params),pathname:P([c,i.encodeLocation?i.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:P([c,i.encodeLocation?i.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),s,r,n);return e&&C?a.createElement(B.Provider,{value:{location:R({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:k.Pop}},C):C}function X(){let t=ne(),e=A(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},e),r?a.createElement("pre",{style:i},r):null,null)}const Y=a.createElement(X,null);class Z extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?a.createElement(x.Provider,{value:this.props.routeContext},a.createElement(T.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $(t){let{routeContext:e,match:r,children:n}=t,i=a.useContext(L);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(x.Provider,{value:e},n)}function H(t,e,r,n){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),n===void 0&&(n=null),t==null){var s;if((s=r)!=null&&s.errors)t=r.matches;else return null}let o=t,f=(i=r)==null?void 0:i.errors;if(f!=null){let u=o.findIndex(l=>l.route.id&&(f==null?void 0:f[l.route.id]));u>=0||p(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,v=-1;if(r&&n&&n.v7_partialHydration)for(let u=0;u<o.length;u++){let l=o[u];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(v=u),l.route.id){let{loaderData:h,errors:m}=r,g=l.route.loader&&h[l.route.id]===void 0&&(!m||m[l.route.id]===void 0);if(l.route.lazy||g){c=!0,v>=0?o=o.slice(0,v+1):o=[o[0]];break}}}return o.reduceRight((u,l,h)=>{let m,g=!1,C=null,d=null;r&&(m=f&&l.route.id?f[l.route.id]:void 0,C=l.route.errorElement||Y,c&&(v<0&&h===0?(oe("route-fallback"),g=!0,d=null):v===h&&(g=!0,d=l.route.hydrateFallbackElement||null)));let U=e.concat(o.slice(0,h+1)),O=()=>{let E;return m?E=C:g?E=d:l.route.Component?E=a.createElement(l.route.Component,null):l.route.element?E=l.route.element:E=u,a.createElement($,{match:l,routeContext:{outlet:u,matches:U,isDataRoute:r!=null},children:E})};return r&&(l.route.ErrorBoundary||l.route.errorElement||h===0)?a.createElement(Z,{location:r.location,revalidation:r.revalidation,component:C,error:m,children:O(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):O()},null)}var w=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(w||{}),N=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(N||{});function ee(t){let e=a.useContext(L);return e||p(!1),e}function te(t){let e=a.useContext(V);return e||p(!1),e}function re(t){let e=a.useContext(x);return e||p(!1),e}function S(t){let e=re(),r=e.matches[e.matches.length-1];return r.route.id||p(!1),r.route.id}function ne(){var t;let e=a.useContext(T),r=te(N.UseRouteError),n=S(N.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[n]}function ae(){let{router:t}=ee(w.UseNavigateStable),e=S(N.UseNavigateStable),r=a.useRef(!1);return _(()=>{r.current=!0}),a.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,R({fromRouteId:e},s)))},[t,e])}const j={};function oe(t,e,r){j[t]||(j[t]=!0)}function le(t){p(!1)}function de(t){let{basename:e="/",children:r=null,location:n,navigationType:i=k.Pop,navigator:s,static:o=!1,future:f}=t;b()&&p(!1);let c=e.replace(/^\/*/,"/"),v=a.useMemo(()=>({basename:c,navigator:s,static:o,future:R({v7_relativeSplatPath:!1},f)}),[c,f,s,o]);typeof n=="string"&&(n=M(n));let{pathname:u="/",search:l="",hash:h="",state:m=null,key:g="default"}=n,C=a.useMemo(()=>{let d=W(u,c);return d==null?null:{location:{pathname:d,search:l,hash:h,state:m,key:g},navigationType:i}},[c,u,l,h,m,g,i]);return C==null?null:a.createElement(y.Provider,{value:v},a.createElement(B.Provider,{children:r,value:C}))}function fe(t){let{children:e,location:r}=t;return K(I(e),r)}new Promise(()=>{});function I(t,e){e===void 0&&(e=[]);let r=[];return a.Children.forEach(t,(n,i)=>{if(!a.isValidElement(n))return;let s=[...e,i];if(n.type===a.Fragment){r.push.apply(r,I(n.props.children,s));return}n.type!==le&&p(!1),!n.props.index||!n.props.children||p(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=I(n.props.children,s)),r.push(o)}),r}export{y as N,de as R,ce as a,F as b,G as c,fe as d,le as e,K as f,ue as u};
