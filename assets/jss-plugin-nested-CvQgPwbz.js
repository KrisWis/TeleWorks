import{_ as c}from"./@babel-13fjUkWY.js";var R=/\s*,\s*/g,m=/&/g,E=/\$([\w-]+)/g;function h(){function g(n,t){return function(i,e){var r=n.getRule(e)||t&&t.getRule(e);return r?r.selector:e}}function d(n,t){for(var i=t.split(R),e=n.split(R),r="",f=0;f<i.length;f++)for(var l=i[f],a=0;a<e.length;a++){var u=e[a];r&&(r+=", "),r+=u.indexOf("&")!==-1?u.replace(m,l):l+" "+u}return r}function x(n,t,i){if(i)return c({},i,{index:i.index+1});var e=n.options.nestingLevel;e=e===void 0?1:e+1;var r=c({},n.options,{nestingLevel:e,index:t.indexOf(n)+1});return delete r.name,r}function p(n,t,i){if(t.type!=="style")return n;var e=t,r=e.options.parent,f,l;for(var a in n){var u=a.indexOf("&")!==-1,o=a[0]==="@";if(!(!u&&!o)){if(f=x(e,r,f),u){var v=d(a,e.selector);l||(l=g(r,i)),v=v.replace(E,l);var s=e.key+"-"+a;"replaceRule"in r?r.replaceRule(s,n[a],c({},f,{selector:v})):r.addRule(s,n[a],c({},f,{selector:v}))}else o&&r.addRule(a,{},f).addRule(e.key,n[a],{selector:e.selector});delete n[a]}}return n}return{onProcessStyle:p}}export{h as j};
