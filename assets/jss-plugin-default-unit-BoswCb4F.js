import{h as l}from"./jss-lo838h9F.js";var r=l&&CSS?CSS.px:"px",b=l&&CSS?CSS.ms:"ms",s=l&&CSS?CSS.percent:"%",m={"animation-delay":b,"animation-duration":b,"background-position":r,"background-position-x":r,"background-position-y":r,"background-size":r,border:r,"border-bottom":r,"border-bottom-left-radius":r,"border-bottom-right-radius":r,"border-bottom-width":r,"border-left":r,"border-left-width":r,"border-radius":r,"border-right":r,"border-right-width":r,"border-top":r,"border-top-left-radius":r,"border-top-right-radius":r,"border-top-width":r,"border-width":r,"border-block":r,"border-block-end":r,"border-block-end-width":r,"border-block-start":r,"border-block-start-width":r,"border-block-width":r,"border-inline":r,"border-inline-end":r,"border-inline-end-width":r,"border-inline-start":r,"border-inline-start-width":r,"border-inline-width":r,"border-start-start-radius":r,"border-start-end-radius":r,"border-end-start-radius":r,"border-end-end-radius":r,margin:r,"margin-bottom":r,"margin-left":r,"margin-right":r,"margin-top":r,"margin-block":r,"margin-block-end":r,"margin-block-start":r,"margin-inline":r,"margin-inline-end":r,"margin-inline-start":r,padding:r,"padding-bottom":r,"padding-left":r,"padding-right":r,"padding-top":r,"padding-block":r,"padding-block-end":r,"padding-block-start":r,"padding-inline":r,"padding-inline-end":r,"padding-inline-start":r,"mask-position-x":r,"mask-position-y":r,"mask-size":r,height:r,width:r,"min-height":r,"max-height":r,"min-width":r,"max-width":r,bottom:r,left:r,top:r,right:r,inset:r,"inset-block":r,"inset-block-end":r,"inset-block-start":r,"inset-inline":r,"inset-inline-end":r,"inset-inline-start":r,"box-shadow":r,"text-shadow":r,"column-gap":r,"column-rule":r,"column-rule-width":r,"column-width":r,"font-size":r,"font-size-delta":r,"letter-spacing":r,"text-decoration-thickness":r,"text-indent":r,"text-stroke":r,"text-stroke-width":r,"word-spacing":r,motion:r,"motion-offset":r,outline:r,"outline-offset":r,"outline-width":r,perspective:r,"perspective-origin-x":s,"perspective-origin-y":s,"transform-origin":s,"transform-origin-x":s,"transform-origin-y":s,"transform-origin-z":s,"transition-delay":b,"transition-duration":b,"vertical-align":r,"flex-basis":r,"shape-margin":r,size:r,gap:r,grid:r,"grid-gap":r,"row-gap":r,"grid-row-gap":r,"grid-column-gap":r,"grid-template-rows":r,"grid-template-columns":r,"grid-auto-rows":r,"grid-auto-columns":r,"box-shadow-x":r,"box-shadow-y":r,"box-shadow-blur":r,"box-shadow-spread":r,"font-line-height":r,"text-shadow-x":r,"text-shadow-y":r,"text-shadow-blur":r};function c(n){var t=/(-[a-z])/g,d=function(e){return e[1].toUpperCase()},o={};for(var i in n)o[i]=n[i],o[i.replace(t,d)]=n[i];return o}var h=c(m);function g(n,t,d){if(t==null)return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)t[o]=g(n,t[o],d);else if(typeof t=="object")if(n==="fallbacks")for(var i in t)t[i]=g(i,t[i],d);else for(var a in t)t[a]=g(n+"-"+a,t[a],d);else if(typeof t=="number"&&isNaN(t)===!1){var e=d[n]||h[n];return e&&!(t===0&&e===r)?typeof e=="function"?e(t).toString():""+t+e:t.toString()}return t}function p(n){n===void 0&&(n={});var t=c(n);function d(i,a){if(a.type!=="style")return i;for(var e in i)i[e]=g(e,i[e],t);return i}function o(i,a){return g(a,i,t)}return{onProcessStyle:d,onChangeValue:o}}export{p as d};
