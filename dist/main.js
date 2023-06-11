/*! For license information please see main.js.LICENSE.txt */
!function(){var t={834:function(t){self,t.exports=function(){"use strict";var t={d:function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e={};function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.d(e,{ajax:function(){return a}});var s="GET",o=[];function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=function(){var t;return XMLHttpRequest?t=new XMLHttpRequest:ActiveXObject&&(t=new ActiveXObject("Microsoft.XMLHTTP")),o.push(t),t}(),n=t.contentType,r=void 0===n?"application/json":n,i=t.responseType,p=void 0===i?a.responseType||"json":i,c=t.method,u=void 0===c?s:c,l=t.onprogress,f=void 0===l?function(){}:l,h=t.onsuccess,d=void 0===h?function(){}:h,v=t.onerror,y=void 0===v?function(){}:v,g=t.onload,m=void 0===g?function(){}:g,w=t.onloadend,b=void 0===w?function(){}:w,x=t.onabort,k=void 0===x?function(){}:x,j=t.ontimeout,S=void 0===j?function(){}:j,O=t.configure,E=void 0===O?function(){}:O,L=t.mimeType,P=void 0===L?"text/xml":L,T=t.data,M=t.url;return new Promise((function(t,n){var i;function s(){var t=e;if("json"===p){var r;try{r=JSON.parse(e.responseText)}catch(t){r=e.responseText}Object.defineProperty(e,"response",{value:r})}"function"==typeof a.response&&(t=a.response(e)),y(t),n(t)}T&&"application/json"===r&&(i=JSON.stringify(T)),e.addEventListener("load",m),e.addEventListener("abort",k),e.addEventListener("loadend",b),e.addEventListener("timeout",S),e.addEventListener("progress",(function(t){var n=t.loaded,r=t.total,i=Math.round(n/r*100);if(e.percent=i,"function"==typeof f&&f(n,r),"function"==typeof a.onprogress){var s=[];o=o.filter((function(t){return 200===t.status&&100!==t.percent&&(s.push(t.percent),!0)})),a.onprogress(Math.min.apply(Math,s.concat([100])))}})),e.addEventListener("error",s),e.addEventListener("readystatechange",(function(){var n=e.readyState,r=e.status;if(2===n)e.responseType=r>=200&&r<300?p:"text";else if(4===n)if(r>=200&&r<300){var i=e;"function"==typeof a.response&&(i=a.response(i)),d(i),t(i)}else s()})),e.open(u,M,!0),e.setRequestHeader("Content-Type",r),e.overrideMimeType(P),E(e),e.send(i)}))}return a.get=function(t){return a(r({url:t,method:s},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))},a.post=function(t){return a(r({url:t,method:"POST"},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))},a.put=function(t){return a(r({url:t,method:"PUT"},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))},a.patch=function(t){return a(r({url:t,method:"PATCH"},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))},a.delete=function(t){return a(r({url:t,method:"DELETE"},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))},a.purge=function(t){return a(r({url:t,method:"PURGE"},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))},e.ajax}()},329:function(t,e,n){"use strict";var r=n(834),i=n.n(r),s=JSON.parse('{"id":"acode.plugin.snippets","QZ":["snippets/abc.snippets","snippets/actionscript.snippets","snippets/clojure.snippets","snippets/coffee.snippets","snippets/csound_document.snippets","snippets/csound_orchestra.snippets","snippets/css.snippets","snippets/c_cpp.snippets","snippets/dart.snippets","snippets/diff.snippets","snippets/django.snippets","snippets/drools.snippets","snippets/edifact.snippets","snippets/erlang.snippets","snippets/fsl.snippets","snippets/gobstones.snippets","snippets/graphqlschema.snippets","snippets/haml.snippets","snippets/haskell.snippets","snippets/html.snippets","snippets/java.snippets","snippets/javascript.snippets","snippets/jsp.snippets","snippets/jsx.snippets","snippets/kotlin.snippets","snippets/liquid.snippets","snippets/lsl.snippets","snippets/lua.snippets","snippets/makefile.snippets","snippets/markdown.snippets","snippets/maze.snippets","snippets/perl.snippets","snippets/php.snippets","snippets/python.snippets","snippets/r.snippets","snippets/razor.snippets","snippets/robot.snippets","snippets/rst.snippets","snippets/ruby.snippets","snippets/rust.snippets","snippets/sh.snippets","snippets/snippets.snippets","snippets/sql.snippets","snippets/sqlserver.snippets","snippets/swift.snippets","snippets/tcl.snippets","snippets/tex.snippets","snippets/textile.snippets","snippets/velocity.snippets","snippets/wollok.snippets","snippets/typescript.snippets","snippets/tsx.snippets","snippets/golang.snippets"]}');function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",p=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,i){var s=e&&e.prototype instanceof d?e:d,o=Object.create(s.prototype),a=new L(i||[]);return r(o,"_invoke",{value:j(t,n,a)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function d(){}function v(){}function y(){}var g={};u(g,s,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(P([])));w&&w!==e&&n.call(w,s)&&(g=w);var b=y.prototype=d.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function i(r,s,a,p){var c=f(t[r],t,s);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==o(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){i("next",t,a,p)}),(function(t){i("throw",t,a,p)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,p)}))}p(c.arg)}var s;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return s=s?s.then(r,r):r()}})}function j(t,e,n){var r="suspendedStart";return function(i,s){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw s;return{value:void 0,done:!0}}for(n.method=i,n.arg=s;;){var o=n.delegate;if(o){var a=S(o,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var p=f(t,e,n);if("normal"===p.type){if(r=n.done?"completed":"suspendedYield",p.arg===h)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(r="completed",n.method="throw",n.arg=p.arg)}}}function S(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=f(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var s=i.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return v.prototype=y,r(b,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(k.prototype),u(k.prototype,p,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,i,s){void 0===s&&(s=Promise);var o=new k(l(e,n,r,i),s);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(b),u(b,c,"Generator"),u(b,s,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],o=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var a=n.call(s,"catchLoc"),p=n.call(s,"finallyLoc");if(a&&p){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(a){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function p(t,e,n,r,i,s,o){try{var a=t[s](o),p=a.value}catch(t){return void n(t)}a.done?e(p):Promise.resolve(p).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var s=t.apply(e,n);function o(t){p(s,r,i,o,a,"next",t)}function a(t){p(s,r,i,o,a,"throw",t)}o(void 0)}))}}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}function l(t,e){h(t,e),e.add(t)}function f(t,e,n){h(t,e),e.set(t,n)}function h(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,y(t,e,"get"))}function v(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,y(t,e,"set"),n),n}function y(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function g(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}t=n.hmd(t);var m=s.id,w=ace.require("ace/config"),b=ace.require("ace/snippets").snippetManager,x=acode.require("settings"),k=new WeakMap,j=new WeakMap,S=new WeakMap,O=new WeakSet,E=new WeakSet,L=new WeakSet,P=new WeakSet,T=new WeakSet,M=new WeakSet,W=new WeakSet,_=new WeakSet,q=new WeakSet,F=new WeakSet,N=new WeakSet,D=new WeakSet,G=new WeakSet,A=new WeakSet,C=new WeakSet,U=new WeakSet,R=new WeakSet,H=new WeakMap,I=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,H,{get:yt,set:void 0}),l(this,R),l(this,U),l(this,C),l(this,A),l(this,G),l(this,D),l(this,N),l(this,F),l(this,q),l(this,_),l(this,W),l(this,M),l(this,T),l(this,P),l(this,L),l(this,E),l(this,O),f(this,k,{writable:!0,value:void 0}),f(this,j,{writable:!0,value:void 0}),f(this,S,{writable:!0,value:""}),g(this,T,Z).call(this),v(this,j,g(this,O,X).bind(this)),x.value[s.id]||g(this,F,nt).call(this,"")}var e,n,r,i;return e=t,n=[{key:"init",value:(i=c(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=editorManager,(r=n.editor).setOption("enableBasicAutocompletion",!0),r.setOption("enableLiveAutocompletion",!0),r.on("changeMode",d(this,j)),this.baseUrl=e,g(this,M,K).call(this),g(this,O,X).call(this);case 7:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{key:"destroy",value:(r=c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:editorManager.editor.on("changeMode",d(this,j)),b.files&&(b.files=[]),g(this,W,V).call(this);case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"baseUrl",get:function(){return d(this,S)},set:function(t){v(this,S,t);var e=g(this,N,rt).call(this);v(this,k,e||g(this,q,et).call(this,t,"snippets"))}},{key:"onSettingsChange",value:function(t){"setSnippetsDirectory"!==t?"resetSnippetsDirectory"!==t||g(this,G,ot).call(this):g(this,D,it).call(this)}},{key:"settingsList",get:function(){return[{key:"setSnippetsDirectory",text:"Set snippets directory"},{key:"resetSnippetsDirectory",text:"Reset snippets directory"}]}},{key:"settings",get:function(){return x.value[s.id]}}],n&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function X(){return z.apply(this,arguments)}function z(){return(z=c(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=editorManager,n=e.editor,g(this,E,J).call(this,n.session.$mode);case 2:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function J(t){return $.apply(this,arguments)}function $(){return($=c(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("string"==typeof e&&(e=w.$modes[e]),e){t.next=3;break}return t.abrupt("return");case 3:return b.files||(b.files={}),t.next=6,g(this,L,B).call(this,e);case 6:e.modes&&e.modes.forEach(g(this,E,J));case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function B(t){return Q.apply(this,arguments)}function Q(){return(Q=c(a().mark((function t(e){var n,r,i,s,o,p=this;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$id,!b.files[n]){t.next=3;break}return t.abrupt("return");case 3:return r=n.split("/").pop(),b.files[n]={},t.prev=5,i=g(this,q,et).call(this,d(this,k),"".concat(r,".snippets")),s="",t.prev=8,t.next=11,g(this,A,pt).call(this,i);case 11:s=t.sent,t.next=16;break;case 14:t.prev=14,t.t0=t.catch(8);case 16:if(g(this,_,tt).call(this,r,s,g(this,P,Y).call(this,r)),o=ace.require("ace/snippets/".concat(r))){t.next=21;break}return b.files[n]=!0,t.abrupt("return");case 21:b.files[n]=o,!o.snippets&&o.snippetText&&(o.snippets=b.parseSnippetFile(o.snippetText)),b.register(o.snippets||[],o.scope),o.includeScopes&&(b.snippetMap[o.scope].includeScopes=o.includeScopes,o.includeScopes.forEach((function(t){g(p,E,J).call(p,"ace/mode/".concat(t))}))),t.next=30;break;case 27:t.prev=27,t.t1=t.catch(5),console.error(t.t1);case 30:case"end":return t.stop()}}),t,this,[[5,27],[8,14]])})))).apply(this,arguments)}function Y(t){switch(t){case"velocity":return["html","javascript","css"];case"markdown":return["html"];default:return null}}function Z(){b.variables.FILEPATH=function(){var t=editorManager.activeFile,e=t.SAFMode,n=t.uri,r=t.filename;return n&&"single"!==e?n:r}}function K(){var t=editorManager.editor;d(this,H).forEach((function(e){t.commands.addCommand(e)}))}function V(){var t=editorManager.editor;d(this,H).forEach((function(e){t.commands.removeCommand(e)}))}function tt(e,n,r){n&&(define("ace/snippets/".concat(e,".snippets"),["require","exports","module"],(function(t,e,r){r.exports=n})),define("ace/snippets/".concat(e),["require","exports","module","ace/snippets/".concat(e,".snippets")],(function(t,n,i){n.snippetText=t("./".concat(e,".snippets")),n.scope=e,n.includeScopes=r}))),window.require(["ace/snippets/".concat(e)],(function(e){"object"==o(t)&&"object"==("undefined"==typeof exports?"undefined":o(exports))&&t&&(t.exports=e)}))}function et(t,e){return"joinUrl"in acode?acode.joinUrl(t,e):t.endsWith("/")!==e.startsWith("/")?t+e:t.endsWith("/")===e.startsWith("/")?t.slice(0,-1)+e:"".concat(t,"/").concat(e)}function nt(t){x.value[s.id]={snippetLocation:t},x.update()}function rt(){var t;return(null===(t=x.value[s.id])||void 0===t?void 0:t.snippetLocation)||""}function it(){return st.apply(this,arguments)}function st(){return(st=c(a().mark((function t(){var e,n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,acode.fileBrowser("folder","select snippet location");case 2:return e=t.sent,n=e.url,v(this,k,n),b.files=[],g(this,O,X).call(this),r=acode.fsOperation(n),t.next=10,r.lsDir();case 10:if(t.sent.length){t.next=23;break}return t.prev=12,t.next=15,g(this,C,ut).call(this,n);case 15:g(this,F,nt).call(this,n),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(12),acode.alert("ERROR","Unable to copy snippets, "+t.t0.message);case 21:t.next=24;break;case 23:g(this,F,nt).call(this,n);case 24:case"end":return t.stop()}}),t,this,[[12,18]])})))).apply(this,arguments)}function ot(){return at.apply(this,arguments)}function at(){return(at=c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g(this,F,nt).call(this,"");case 1:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function pt(t){return ct.apply(this,arguments)}function ct(){return(ct=c(a().mark((function t(e){var n,r,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.startsWith("http")){t.next=6;break}return t.next=3,i().get(e,{responseType:"text"});case 3:return n=t.sent,r=n.response,t.abrupt("return",r);case 6:return t.next=8,acode.fsOperation(e).readFile("utf-8");case 8:return s=t.sent,t.abrupt("return",s);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ut(t){return lt.apply(this,arguments)}function lt(){return(lt=c(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=acode.loader("","Loading...")).show(),t.next=4,g(this,U,ft).call(this,s.QZ,e,n).finally((function(){n.destroy()}));case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function ft(t,e,n){return ht.apply(this,arguments)}function ht(){return(ht=c(a().mark((function t(e,n,r){var i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(i=e.shift())){t.next=4;break}return t.next=4,g(this,R,dt).call(this,i,n,r);case 4:if(!e.length){t.next=7;break}return t.next=7,g(this,U,ft).call(this,e,n,r);case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function dt(t,e,n){return vt.apply(this,arguments)}function vt(){return(vt=c(a().mark((function t(e,n,r){var s,o,p,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.setMessage("Copying ".concat(e,"...")),t.next=3,i().get("".concat(d(this,S)).concat(e),{responseType:"text"});case 3:return s=t.sent,o=s.response,p=acode.fsOperation(n),c=e.split("/").pop(),t.next=9,p.createFile(c,o);case 9:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function yt(){return[{name:"expandSnippet",description:"Expand snippet",exec:function(t){return b.expandWithTab(t)},bindKey:{win:"Tab"}}]}if(window.acode){var gt=new I;acode.setPluginInit(m,gt.init.bind(gt),{list:gt.settingsList,cb:gt.onSettingsChange.bind(gt)}),acode.setPluginUnmount(m,(function(){gt.destroy()}))}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={id:r,loaded:!1,exports:{}};return t[r](s,s.exports,n),s.loaded=!0,s.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.hmd=function(t){return(t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(329)}();