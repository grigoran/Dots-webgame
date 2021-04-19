(()=>{"use strict";var e,t={280:(e,t,n)=>{var r=document.querySelector(".canvas"),o=r.getContext("2d");function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var c=new WeakMap,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c.set(this,{writable:!0,value:this})}var t,n;return t=e,(n=[{key:"getNext",value:function(){return function(e,t){return t.get?t.get.call(e):t.value}(this,i(this,c,"get"))}},{key:"setNext",value:function(e){var t,n;n=e,function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(t=this,i(t,c,"set"),n)}},{key:"onComplete",value:function(){alert("complete")}},{key:"update",value:function(e){}}])&&a(t.prototype,n),e}();function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,d(e,t,"set"),n),n}function w(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function y(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,d(e,t,"get"))}function d(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var g=new WeakMap,k=new WeakMap,_=new WeakMap,O=new WeakMap,E=new WeakMap,j=new WeakMap,x=new WeakMap,M=new WeakMap,P=new WeakSet,S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,n,a,i,c=(a=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(a);if(i){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(){var e;s(this,u);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=c.call.apply(c,[this].concat(n)),P.add(m(e)),g.set(m(e),{writable:!0,value:r.width}),k.set(m(e),{writable:!0,value:r.height}),_.set(m(e),{writable:!0,value:10}),O.set(m(e),{writable:!0,value:100}),E.set(m(e),{writable:!0,value:5}),j.set(m(e),{writable:!0,value:1}),x.set(m(e),{writable:!0,value:0}),M.set(m(e),{writable:!0,value:1}),e}return t=u,(n=[{key:"update",value:function(e){o.fillStyle=V;for(var t=0;t<y(this,E);++t){o.beginPath();var n=w(this,P,T).call(this,y(this,x)+.1*t);o.arc(Math.sin(n)*y(this,O)+y(this,g)/2,Math.cos(n)*y(this,O)+y(this,k)/2,y(this,_),0,2*Math.PI),o.fill()}v(this,x,y(this,x)+y(this,j)*e),y(this,x)>=Math.PI&&(y(this,M)>0&&v(this,M,y(this,M)-y(this,j)*e),y(this,M)<0?o.globalAlpha=0:o.globalAlpha=y(this,M),y(this,M)<=0&&(this.onComplete(),o.globalAlpha=1))}}])&&p(t.prototype,n),u}(u);function T(e){return 4*(Math.atan(e%2-1)+4*Math.PI)}var A=n(136);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?B(e):t}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,q(e,t,"get"))}function q(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var D=new WeakMap,F=new WeakMap,$=new WeakMap,H=new WeakSet,z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(u,e);var t,n,a,i,c=(a=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(a);if(i){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),e=c.call(this),H.add(B(e)),D.set(B(e),{writable:!0,value:new Image}),F.set(B(e),{writable:!0,value:0}),$.set(B(e),{writable:!0,value:0}),L(B(e),D).src=A,e}return t=u,(n=[{key:"update",value:function(e){var t,n,a;t=this,n=$,a=L(this,$)+e,function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(t,q(t,n,"set"),a),L(this,$)>=Math.PI&&this.onComplete(),o.globalAlpha=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}(this,H,G).call(this,L(this,$)),o.drawImage(L(this,D),r.width/2-L(this,D).width/2,0),o.font="35px Roboto",o.fillStyle="white",o.textAlign="center",o.textBaseline="bottom",o.fillText(X,r.width/2,L(this,D).height-2)}}])&&R(t.prototype,n),u}(u);function G(e){var t=1.5*Math.sin(e);return t<=1?t:1}var J=Date.now();u.prototype.onComplete=function(){Y=Y.getNext()};var K=new S,Q=new z,U=new u;K.setNext(Q),Q.setNext(U);var V,X,Y=K;function Z(){var e=Date.now(),t=(e-J)/1e3;J=e,o.clearRect(0,0,r.width,r.height),Y.update(t),requestAnimationFrame(Z)}var ee=function(){var e=document.createElement("form");e.className="welcome-popup__form";var t=document.createElement("div");t.className="welcome-popup__nickname-section";var n=document.createElement("label");n.className="welcome-popup__nickname-label",n.innerHTML='Твое имя:\n  <input\n    class="welcome-popup__nickname-field"\n    type="text"\n    name="nickname"\n    placeholder="Греча"\n    autocomplete="off"\n    autofocus="autofocus"\n  />',t.append(n);var r=document.createElement("ul");r.className="color-picker";for(var o=["#ee2b2b","#0bb870","#0db1f1","#e9a6da","#831583"],a=0;a<5;a++){var i=document.createElement("li"),c=document.createElement("input");i.className="color-picker__item",c.className="color-picker__button",c.setAttribute("type","radio"),c.setAttribute("name","color"),c.setAttribute("value",o[a]),0==a&&c.setAttribute("checked",""),i.append(c),c.style.backgroundColor=o[a],r.append(i)}var u=document.createElement("input");return u.className="welcome-popup__submit",u.setAttribute("type","submit"),u.setAttribute("name","submit"),u.setAttribute("value","Играть"),e.append(t),e.append(r),e.append(u),e.addEventListener("submit",ne),e}(),te=function(e){var t=document.createElement("div");t.className="welcome-popup";var n=document.createElement("h3");return n.className="welcome-popup__title",n.innerText="Вход в игру",t.append(n),t.append(e),t}(ee);function ne(e){te.classList.contains("welcome-popup_shown")&&(V=ee.color.value,""==(X=ee.nickname.value)&&(X=ee.nickname.placeholder),te.classList.remove("welcome-popup_shown"),J=Date.now(),requestAnimationFrame(Z),setTimeout((function(){return te.remove()}),150)),console.log(V),console.log(X),e.preventDefault()}window.onload=function(){document.body.append(te),requestAnimationFrame((function(){te.classList.toggle("welcome-popup_shown")}))}},136:(e,t,n)=>{e.exports=n.p+"47a85ee166d23410ad2b.jpg"}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,o,a]=e[l],c=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(c=!1,a<i&&(i=a));c&&(e.splice(l--,1),t=o())}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0,532:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,c,u]=n,l=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);for(u&&u(r),t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[i[l]]=0;r.O()},n=self.webpackChunkdotsweb=self.webpackChunkdotsweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[532],(()=>r(280)));o=r.O(o)})();