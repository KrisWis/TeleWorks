import{c as n}from"./@babel-BoqLWp7i.js";import{c as l}from"./style-to-object-DIwjqYgu.js";var t={};Object.defineProperty(t,"__esModule",{value:!0});t.camelCase=void 0;var f=/^--[a-zA-Z0-9_-]+$/,s=/-([a-z])/g,m=/^[^-]+$/,v=/^-(webkit|moz|ms|o|khtml)-/,E=/^-(ms)-/,o=function(a){return!a||m.test(a)||f.test(a)},R=function(a,e){return e.toUpperCase()},_=function(a,e){return"".concat(e,"-")},C=function(a,e){return e===void 0&&(e={}),o(a)?a:(a=a.toLowerCase(),e.reactCompat?a=a.replace(E,_):a=a.replace(v,_),a.replace(s,R))};t.camelCase=C;var P=n&&n.__importDefault||function(a){return a&&a.__esModule?a:{default:a}},X=P(l),G=t;function c(a,e){var i={};return!a||typeof a!="string"||(0,X.default)(a,function(r,u){r&&u&&(i[(0,G.camelCase)(r,e)]=u)}),i}c.default=c;var j=c;export{j as c};