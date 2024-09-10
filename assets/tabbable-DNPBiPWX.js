/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var N=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],v=N.join(","),S=typeof Element>"u",d=S?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,b=!S&&Element.prototype.getRootNode?function(i){var t;return i==null||(t=i.getRootNode)===null||t===void 0?void 0:t.call(i)}:function(i){return i==null?void 0:i.ownerDocument},h=function i(t,e){var r;e===void 0&&(e=!0);var a=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),l=a===""||a==="true",n=l||e&&t&&i(t.parentNode);return n},E=function(t){var e,r=t==null||(e=t.getAttribute)===null||e===void 0?void 0:e.call(t,"contenteditable");return r===""||r==="true"},A=function(t,e,r){if(h(t))return[];var a=Array.prototype.slice.apply(t.querySelectorAll(v));return e&&d.call(t,v)&&a.unshift(t),a=a.filter(r),a},R=function i(t,e,r){for(var a=[],l=Array.from(t);l.length;){var n=l.shift();if(!h(n,!1))if(n.tagName==="SLOT"){var u=n.assignedElements(),s=u.length?u:n.children,c=i(s,!0,r);r.flatten?a.push.apply(a,c):a.push({scopeParent:n,candidates:c})}else{var f=d.call(n,v);f&&r.filter(n)&&(e||!t.includes(n))&&a.push(n);var o=n.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(n),w=!h(o,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(n));if(o&&w){var p=i(o===!0?n.children:o.children,!0,r);r.flatten?a.push.apply(a,p):a.push({scopeParent:n,candidates:p})}else l.unshift.apply(l,n.children)}}return a},T=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},I=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||E(t))&&!T(t)?0:t.tabIndex},x=function(t,e){var r=I(t);return r<0&&e&&!T(t)?0:r},C=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},m=function(t){return t.tagName==="INPUT"},O=function(t){return m(t)&&t.type==="hidden"},D=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return e},F=function(t,e){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===e)return t[r]},k=function(t){if(!t.name)return!0;var e=t.form||b(t),r=function(u){return e.querySelectorAll('input[type="radio"][name="'+u+'"]')},a;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")a=r(window.CSS.escape(t.name));else try{a=r(t.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var l=F(a,t.form);return!l||l===t},M=function(t){return m(t)&&t.type==="radio"},L=function(t){return M(t)&&!k(t)},P=function(t){var e,r=t&&b(t),a=(e=r)===null||e===void 0?void 0:e.host,l=!1;if(r&&r!==t){var n,u,s;for(l=!!((n=a)!==null&&n!==void 0&&(u=n.ownerDocument)!==null&&u!==void 0&&u.contains(a)||t!=null&&(s=t.ownerDocument)!==null&&s!==void 0&&s.contains(t));!l&&a;){var c,f,o;r=b(a),a=(c=r)===null||c===void 0?void 0:c.host,l=!!((f=a)!==null&&f!==void 0&&(o=f.ownerDocument)!==null&&o!==void 0&&o.contains(a))}}return l},y=function(t){var e=t.getBoundingClientRect(),r=e.width,a=e.height;return r===0&&a===0},B=function(t,e){var r=e.displayCheck,a=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var l=d.call(t,"details>summary:first-of-type"),n=l?t.parentElement:t;if(d.call(n,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof a=="function"){for(var u=t;t;){var s=t.parentElement,c=b(t);if(s&&!s.shadowRoot&&a(s)===!0)return y(t);t.assignedSlot?t=t.assignedSlot:!s&&c!==t.ownerDocument?t=c.host:t=s}t=u}if(P(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return y(t);return!1},q=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var r=0;r<e.children.length;r++){var a=e.children.item(r);if(a.tagName==="LEGEND")return d.call(e,"fieldset[disabled] *")?!0:!a.contains(t)}return!0}e=e.parentElement}return!1},U=function(t,e){return!(e.disabled||h(e)||O(e)||B(e,t)||D(e)||q(e))},g=function(t,e){return!(L(e)||I(e)<0||!U(t,e))},V=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},W=function i(t){var e=[],r=[];return t.forEach(function(a,l){var n=!!a.scopeParent,u=n?a.scopeParent:a,s=x(u,n),c=n?i(a.candidates):u;s===0?n?e.push.apply(e,c):e.push(u):r.push({documentOrder:l,tabIndex:s,item:a,isScope:n,content:c})}),r.sort(C).reduce(function(a,l){return l.isScope?a.push.apply(a,l.content):a.push(l.content),a},[]).concat(e)},Z=function(t,e){e=e||{};var r;return e.getShadowRoot?r=R([t],e.includeContainer,{filter:g.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:V}):r=A(t,e.includeContainer,g.bind(null,e)),W(r)},j=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return d.call(t,v)===!1?!1:g(e,t)};export{j as i,Z as t};