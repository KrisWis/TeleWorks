import{i as v}from"./is-in-browser-I-S1O4Zl.js";import{b as O}from"./@babel-BoqLWp7i.js";var l="",b="",w="",W="",C=v&&"ontouchstart"in document.documentElement;if(v){var p={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},M=document.createElement("p"),m=M.style,A="Transform";for(var P in p)if(P+A in m){l=P,b=p[P];break}l==="Webkit"&&"msHyphens"in m&&(l="ms",b=p.ms,W="edge"),l==="Webkit"&&"-apple-trailing-word"in m&&(w="apple")}var t={js:l,css:b,vendor:w,browser:W,isTouch:C};function sr(e){return e[1]==="-"||t.js==="ms"?e:"@"+t.css+"keyframes"+e.substr(10)}var N={noPrefill:["appearance"],supportedProperty:function(r){return r!=="appearance"?!1:t.js==="ms"?"-webkit-"+r:t.css+r}},T={noPrefill:["color-adjust"],supportedProperty:function(r){return r!=="color-adjust"?!1:t.js==="Webkit"?t.css+"print-"+r:r}},K=/[-\s]+(.)?/g;function S(e,r){return r?r.toUpperCase():""}function g(e){return e.replace(K,S)}function a(e){return g("-"+e)}var V={noPrefill:["mask"],supportedProperty:function(r,n){if(!/^mask/.test(r))return!1;if(t.js==="Webkit"){var i="mask-image";if(g(i)in n)return r;if(t.js+a(i)in n)return t.css+r}return r}},B={noPrefill:["text-orientation"],supportedProperty:function(r){return r!=="text-orientation"?!1:t.vendor==="apple"&&!t.isTouch?t.css+r:r}},U={noPrefill:["transform"],supportedProperty:function(r,n,i){return r!=="transform"?!1:i.transform?r:t.css+r}},D={noPrefill:["transition"],supportedProperty:function(r,n,i){return r!=="transition"?!1:i.transition?r:t.css+r}},H={noPrefill:["writing-mode"],supportedProperty:function(r){return r!=="writing-mode"?!1:t.js==="Webkit"||t.js==="ms"&&t.browser!=="edge"?t.css+r:r}},I={noPrefill:["user-select"],supportedProperty:function(r){return r!=="user-select"?!1:t.js==="Moz"||t.js==="ms"||t.vendor==="apple"?t.css+r:r}},L={supportedProperty:function(r,n){if(!/^break-/.test(r))return!1;if(t.js==="Webkit"){var i="WebkitColumn"+a(r);return i in n?t.css+"column-"+r:!1}if(t.js==="Moz"){var d="page"+a(r);return d in n?"page-"+r:!1}return!1}},R={supportedProperty:function(r,n){if(!/^(border|margin|padding)-inline/.test(r))return!1;if(t.js==="Moz")return r;var i=r.replace("-inline","");return t.js+a(i)in n?t.css+i:!1}},_={supportedProperty:function(r,n){return g(r)in n?r:!1}},$={supportedProperty:function(r,n){var i=a(r);return r[0]==="-"||r[0]==="-"&&r[1]==="-"?r:t.js+i in n?t.css+r:t.js!=="Webkit"&&"Webkit"+i in n?"-webkit-"+r:!1}},q={supportedProperty:function(r){return r.substring(0,11)!=="scroll-snap"?!1:t.js==="ms"?""+t.css+r:r}},F={supportedProperty:function(r){return r!=="overscroll-behavior"?!1:t.js==="ms"?t.css+"scroll-chaining":r}},G={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},J={supportedProperty:function(r,n){var i=G[r];return i&&t.js+a(i)in n?t.css+i:!1}},z={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},Q=Object.keys(z),X=function(r){return t.css+r},Y={supportedProperty:function(r,n,i){var d=i.multiple;if(Q.indexOf(r)>-1){var u=z[r];if(!Array.isArray(u))return t.js+a(u)in n?t.css+u:!1;if(!d)return!1;for(var j=0;j<u.length;j++)if(!(t.js+a(u[0])in n))return!1;return u.map(X)}return!1}},E=[N,T,V,B,U,D,H,I,L,R,_,$,q,F,J,Y],k=E.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),Z=E.filter(function(e){return e.noPrefill}).reduce(function(e,r){return e.push.apply(e,O(r.noPrefill)),e},[]),c,f={};if(v){c=document.createElement("p");var x=window.getComputedStyle(document.documentElement,"");for(var y in x)isNaN(y)||(f[x[y]]=x[y]);Z.forEach(function(e){return delete f[e]})}function h(e,r){if(r===void 0&&(r={}),!c)return e;if(f[e]!=null)return f[e];(e==="transition"||e==="transform")&&(r[e]=e in c.style);for(var n=0;n<k.length&&(f[e]=k[n](e,c.style,r),!f[e]);n++);try{c.style[e]=""}catch{return!1}return f[e]}var o={},rr={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},er=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,s;function tr(e,r,n){if(r==="var")return"var";if(r==="all")return"all";if(n==="all")return", all";var i=r?h(r):", "+h(n);return i||r||n}v&&(s=document.createElement("p"));function ar(e,r){var n=r;if(!s||e==="content")return r;if(typeof n!="string"||!isNaN(parseInt(n,10)))return n;var i=e+n;if(o[i]!=null)return o[i];try{s.style[e]=n}catch{return o[i]=!1,!1}if(rr[e])n=n.replace(er,tr);else if(s.style[e]===""&&(n=t.css+n,n==="-ms-flex"&&(s.style[e]="-ms-flexbox"),s.style[e]=n,s.style[e]===""))return o[i]=!1,!1;return s.style[e]="",o[i]=n,o[i]}export{ar as a,h as b,sr as s};
