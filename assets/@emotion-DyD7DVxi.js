import"./hoist-non-react-statics-Buxaj0Kl.js";import{r as w,R as de}from"./react-B8VV3c8w.js";import{_ as Fe}from"./@babel-DnEJNfVd.js";function Se(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var ze=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,We=Se(function(e){return ze.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function De(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function He(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Ue=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(He(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=De(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),C="-ms-",X="-moz-",l="-webkit-",Ce="comm",ae="rule",ie="decl",qe="@import",Ee="@keyframes",Ge="@layer",je=Math.abs,K=String.fromCharCode,Ve=Object.assign;function Be(e,r){return k(e,0)^45?(((r<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}function Pe(e){return e.trim()}function Ye(e,r){return(e=r.exec(e))?e[0]:e}function u(e,r,t){return e.replace(r,t)}function re(e,r){return e.indexOf(r)}function k(e,r){return e.charCodeAt(r)|0}function W(e,r,t){return e.slice(r,t)}function _(e){return e.length}function se(e){return e.length}function j(e,r){return r.push(e),e}function Xe(e,r){return e.map(r).join("")}var Z=1,L=1,Ae=0,E=0,x=0,F="";function J(e,r,t,n,a,i,s){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:Z,column:L,length:s,return:""}}function z(e,r){return Ve(J("",null,null,"",null,null,0),e,{length:-e.length},r)}function Ke(){return x}function Ze(){return x=E>0?k(F,--E):0,L--,x===10&&(L=1,Z--),x}function O(){return x=E<Ae?k(F,E++):0,L++,x===10&&(L=1,Z++),x}function N(){return k(F,E)}function V(){return E}function U(e,r){return W(F,e,r)}function D(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Oe(e){return Z=L=1,Ae=_(F=e),E=0,[]}function Te(e){return F="",e}function B(e){return Pe(U(E-1,te(e===91?e+2:e===40?e+1:e)))}function Je(e){for(;(x=N())&&x<33;)O();return D(e)>2||D(x)>3?"":" "}function Qe(e,r){for(;--r&&O()&&!(x<48||x>102||x>57&&x<65||x>70&&x<97););return U(e,V()+(r<6&&N()==32&&O()==32))}function te(e){for(;O();)switch(x){case e:return E;case 34:case 39:e!==34&&e!==39&&te(x);break;case 40:e===41&&te(e);break;case 92:O();break}return E}function er(e,r){for(;O()&&e+x!==57;)if(e+x===84&&N()===47)break;return"/*"+U(r,E-1)+"*"+K(e===47?e:O())}function rr(e){for(;!D(N());)O();return U(e,E)}function tr(e){return Te(Y("",null,null,null,[""],e=Oe(e),0,[0],e))}function Y(e,r,t,n,a,i,s,o,f){for(var g=0,h=0,m=s,R=0,P=0,p=0,c=1,v=1,y=1,b=0,S="",M=a,T=i,A=n,d=S;v;)switch(p=b,b=O()){case 40:if(p!=108&&k(d,m-1)==58){re(d+=u(B(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:d+=B(b);break;case 9:case 10:case 13:case 32:d+=Je(p);break;case 92:d+=Qe(V()-1,7);continue;case 47:switch(N()){case 42:case 47:j(nr(er(O(),V()),r,t),f);break;default:d+="/"}break;case 123*c:o[g++]=_(d)*y;case 125*c:case 59:case 0:switch(b){case 0:case 125:v=0;case 59+h:y==-1&&(d=u(d,/\f/g,"")),P>0&&_(d)-m&&j(P>32?me(d+";",n,t,m-1):me(u(d," ","")+";",n,t,m-2),f);break;case 59:d+=";";default:if(j(A=he(d,r,t,g,h,a,o,S,M=[],T=[],m),i),b===123)if(h===0)Y(d,r,A,A,M,i,m,o,T);else switch(R===99&&k(d,3)===110?100:R){case 100:case 108:case 109:case 115:Y(e,A,A,n&&j(he(e,A,A,0,0,a,o,S,a,M=[],m),T),a,T,m,o,n?M:T);break;default:Y(d,A,A,A,[""],T,0,o,T)}}g=h=P=0,c=y=1,S=d="",m=s;break;case 58:m=1+_(d),P=p;default:if(c<1){if(b==123)--c;else if(b==125&&c++==0&&Ze()==125)continue}switch(d+=K(b),b*c){case 38:y=h>0?1:(d+="\f",-1);break;case 44:o[g++]=(_(d)-1)*y,y=1;break;case 64:N()===45&&(d+=B(O())),R=N(),h=m=_(S=d+=rr(V())),b++;break;case 45:p===45&&_(d)==2&&(c=0)}}return i}function he(e,r,t,n,a,i,s,o,f,g,h){for(var m=a-1,R=a===0?i:[""],P=se(R),p=0,c=0,v=0;p<n;++p)for(var y=0,b=W(e,m+1,m=je(c=s[p])),S=e;y<P;++y)(S=Pe(c>0?R[y]+" "+b:u(b,/&\f/g,R[y])))&&(f[v++]=S);return J(e,r,t,a===0?ae:o,f,g,h)}function nr(e,r,t){return J(e,r,t,Ce,K(Ke()),W(e,2,-2),0)}function me(e,r,t,n){return J(e,r,t,ie,W(e,0,n),W(e,n+1,-1),n)}function I(e,r){for(var t="",n=se(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function ar(e,r,t,n){switch(e.type){case Ge:if(e.children.length)break;case qe:case ie:return e.return=e.return||e.value;case Ce:return"";case Ee:return e.return=e.value+"{"+I(e.children,n)+"}";case ae:e.value=e.props.join(",")}return _(t=I(e.children,n))?e.return=e.value+"{"+t+"}":""}function ir(e){var r=se(e);return function(t,n,a,i){for(var s="",o=0;o<r;o++)s+=e[o](t,n,a,i)||"";return s}}function sr(e){return function(r){r.root||(r=r.return)&&e(r)}}var or=function(r,t,n){for(var a=0,i=0;a=i,i=N(),a===38&&i===12&&(t[n]=1),!D(i);)O();return U(r,E)},cr=function(r,t){var n=-1,a=44;do switch(D(a)){case 0:a===38&&N()===12&&(t[n]=1),r[n]+=or(E-1,t,n);break;case 2:r[n]+=B(a);break;case 4:if(a===44){r[++n]=N()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=K(a)}while(a=O());return r},fr=function(r,t){return Te(cr(Oe(r),t))},pe=new WeakMap,lr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!pe.get(n))&&!a){pe.set(r,!0);for(var i=[],s=fr(t,i),o=n.props,f=0,g=0;f<s.length;f++)for(var h=0;h<o.length;h++,g++)r.props[g]=i[f]?s[f].replace(/&\f/g,o[h]):o[h]+" "+s[f]}}},ur=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Re(e,r){switch(Be(e,r)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+X+e+C+e+e;case 6828:case 4268:return l+e+C+e+e;case 6165:return l+e+C+"flex-"+e+e;case 5187:return l+e+u(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+C+"flex-$1$2")+e;case 5443:return l+e+C+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return l+e+C+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return l+e+C+u(e,"shrink","negative")+e;case 5292:return l+e+C+u(e,"basis","preferred-size")+e;case 6060:return l+"box-"+u(e,"-grow","")+l+e+C+u(e,"grow","positive")+e;case 4554:return l+u(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+C+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-r>6)switch(k(e,r+1)){case 109:if(k(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+X+(k(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~re(e,"stretch")?Re(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(k(e,r+1)!==115)break;case 6444:switch(k(e,_(e)-3-(~re(e,"!important")&&10))){case 107:return u(e,":",":"+l)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+l+(k(e,14)===45?"inline-":"")+"box$3$1"+l+"$2$3$1"+C+"$2box$3")+e}break;case 5936:switch(k(e,r+11)){case 114:return l+e+C+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+C+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+C+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return l+e+C+e+e}return e}var dr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ie:r.return=Re(r.value,r.length);break;case Ee:return I([z(r,{value:u(r.value,"@","@"+l)})],a);case ae:if(r.length)return Xe(r.props,function(i){switch(Ye(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return I([z(r,{props:[u(i,/:(read-\w+)/,":"+X+"$1")]})],a);case"::placeholder":return I([z(r,{props:[u(i,/:(plac\w+)/,":"+l+"input-$1")]}),z(r,{props:[u(i,/:(plac\w+)/,":"+X+"$1")]}),z(r,{props:[u(i,/:(plac\w+)/,C+"input-$1")]})],a)}return""})}},hr=[dr],mr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(c){var v=c.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(c),c.setAttribute("data-s",""))})}var a=r.stylisPlugins||hr,i={},s,o=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(c){for(var v=c.getAttribute("data-emotion").split(" "),y=1;y<v.length;y++)i[v[y]]=!0;o.push(c)});var f,g=[lr,ur];{var h,m=[ar,sr(function(c){h.insert(c)})],R=ir(g.concat(a,m)),P=function(v){return I(tr(v),R)};f=function(v,y,b,S){h=b,P(v?v+"{"+y.styles+"}":y.styles),S&&(p.inserted[y.name]=!0)}}var p={key:t,sheet:new Ue({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:f};return p.sheet.hydrate(o),p},pr=!0;function _e(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var oe=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||pr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},ce=function(r,t,n){oe(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+a:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}};function gr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var vr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yr=/[A-Z]|^ms/g,br=/_EMO_([^_]+?)_([^]*?)_EMO_/g,$e=function(r){return r.charCodeAt(1)===45},ge=function(r){return r!=null&&typeof r!="boolean"},ee=Se(function(e){return $e(e)?e:e.replace(yr,"-$&").toLowerCase()}),ve=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(br,function(n,a,i){return $={name:a,styles:i,next:$},a})}return vr[r]!==1&&!$e(r)&&typeof t=="number"&&t!==0?t+"px":t};function H(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return $={name:t.name,styles:t.styles,next:$},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)$={name:n.name,styles:n.styles,next:$},n=n.next;var a=t.styles+";";return a}return xr(e,r,t)}case"function":{if(e!==void 0){var i=$,s=t(e);return $=i,H(e,r,s)}break}}if(r==null)return t;var o=r[t];return o!==void 0?o:t}function xr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=H(e,r,t[a])+";";else for(var i in t){var s=t[i];if(typeof s!="object")r!=null&&r[s]!==void 0?n+=i+"{"+r[s]+"}":ge(s)&&(n+=ee(i)+":"+ve(i,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var o=0;o<s.length;o++)ge(s[o])&&(n+=ee(i)+":"+ve(i,s[o])+";");else{var f=H(e,r,s);switch(i){case"animation":case"animationName":{n+=ee(i)+":"+f+";";break}default:n+=i+"{"+f+"}"}}}return n}var ye=/label:\s*([^\s;\n{]+)\s*(;|$)/g,$,Q=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,i="";$=void 0;var s=r[0];s==null||s.raw===void 0?(a=!1,i+=H(n,t,s)):i+=s[0];for(var o=1;o<r.length;o++)i+=H(n,t,r[o]),a&&(i+=s[o]);ye.lastIndex=0;for(var f="",g;(g=ye.exec(i))!==null;)f+="-"+g[1];var h=gr(i)+f;return{name:h,styles:i,next:$}},wr=function(r){return r()},Ne=de.useInsertionEffect?de.useInsertionEffect:!1,Me=Ne||wr,be=Ne||w.useLayoutEffect,fe={}.hasOwnProperty,Ie=w.createContext(typeof HTMLElement<"u"?mr({key:"css"}):null),Ir=Ie.Provider,le=function(r){return w.forwardRef(function(t,n){var a=w.useContext(Ie);return r(t,a,n)})},ue=w.createContext({}),ne="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",kr=function(r,t){var n={};for(var a in t)fe.call(t,a)&&(n[a]=t[a]);return n[ne]=r,n},Sr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return oe(t,n,a),Me(function(){return ce(t,n,a)}),null},Cr=le(function(e,r,t){var n=e.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=e[ne],i=[n],s="";typeof e.className=="string"?s=_e(r.registered,i,e.className):e.className!=null&&(s=e.className+" ");var o=Q(i,void 0,w.useContext(ue));s+=r.key+"-"+o.name;var f={};for(var g in e)fe.call(e,g)&&g!=="css"&&g!==ne&&(f[g]=e[g]);return f.ref=t,f.className=s,w.createElement(w.Fragment,null,w.createElement(Sr,{cache:r,serialized:o,isStringTag:typeof a=="string"}),w.createElement(a,f))}),Er=Cr,Lr=function(r,t){var n=arguments;if(t==null||!fe.call(t,"css"))return w.createElement.apply(void 0,n);var a=n.length,i=new Array(a);i[0]=Er,i[1]=kr(r,t);for(var s=2;s<a;s++)i[s]=n[s];return w.createElement.apply(null,i)},Fr=le(function(e,r){var t=e.styles,n=Q([t],void 0,w.useContext(ue)),a=w.useRef();return be(function(){var i=r.key+"-global",s=new r.sheet.constructor({key:i,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),o=!1,f=document.querySelector('style[data-emotion="'+i+" "+n.name+'"]');return r.sheet.tags.length&&(s.before=r.sheet.tags[0]),f!==null&&(o=!0,f.setAttribute("data-emotion",i),s.hydrate([f])),a.current=[s,o],function(){s.flush()}},[r]),be(function(){var i=a.current,s=i[0],o=i[1];if(o){i[1]=!1;return}if(n.next!==void 0&&ce(r,n.next,!0),s.tags.length){var f=s.tags[s.tags.length-1].nextElementSibling;s.before=f,s.flush()}r.insert("",n,s,!1)},[r,n.name]),null});function Pr(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return Q(r)}var zr=function(){var r=Pr.apply(void 0,arguments),t="animation-"+r.name;return{name:t,styles:"@keyframes "+t+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ar=We,Or=function(r){return r!=="theme"},xe=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Ar:Or},we=function(r,t,n){var a;if(t){var i=t.shouldForwardProp;a=r.__emotion_forwardProp&&i?function(s){return r.__emotion_forwardProp(s)&&i(s)}:i}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},Tr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return oe(t,n,a),Me(function(){return ce(t,n,a)}),null},Rr=function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,i,s;t!==void 0&&(i=t.label,s=t.target);var o=we(r,t,n),f=o||xe(a),g=!f("as");return function(){var h=arguments,m=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(i!==void 0&&m.push("label:"+i+";"),h[0]==null||h[0].raw===void 0)m.push.apply(m,h);else{m.push(h[0][0]);for(var R=h.length,P=1;P<R;P++)m.push(h[P],h[0][P])}var p=le(function(c,v,y){var b=g&&c.as||a,S="",M=[],T=c;if(c.theme==null){T={};for(var A in c)T[A]=c[A];T.theme=w.useContext(ue)}typeof c.className=="string"?S=_e(v.registered,M,c.className):c.className!=null&&(S=c.className+" ");var d=Q(m.concat(M),v.registered,T);S+=v.key+"-"+d.name,s!==void 0&&(S+=" "+s);var Le=g&&o===void 0?xe(b):f,q={};for(var G in c)g&&G==="as"||Le(G)&&(q[G]=c[G]);return q.className=S,q.ref=y,w.createElement(w.Fragment,null,w.createElement(Tr,{cache:v,serialized:d,isStringTag:typeof b=="string"}),w.createElement(b,q))});return p.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",p.defaultProps=r.defaultProps,p.__emotion_real=p,p.__emotion_base=a,p.__emotion_styles=m,p.__emotion_forwardProp=o,Object.defineProperty(p,"toString",{value:function(){return"."+s}}),p.withComponent=function(c,v){return e(c,Fe({},t,v,{shouldForwardProp:we(p,v,!0)})).apply(void 0,m)},p}},_r=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ke=Rr.bind();_r.forEach(function(e){ke[e]=ke(e)});export{Ir as C,Fr as G,ue as T,Pr as a,mr as c,Lr as j,zr as k,ke as n};