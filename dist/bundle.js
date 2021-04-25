(()=>{"use strict";var e,t={846:(e,t,n)=>{var r=document.querySelector(".canvas"),o=r.getContext("2d");function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}o.save();var c=new WeakMap,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c.set(this,{writable:!0,value:this})}var t,n;return t=e,(n=[{key:"getNext",value:function(){return function(e,t){return t.get?t.get.call(e):t.value}(this,a(this,c,"get"))}},{key:"setNext",value:function(e){var t,n;n=e,function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(t=this,a(t,c,"set"),n)}},{key:"onComplete",value:function(){alert("complete")}},{key:"update",value:function(e){}}])&&i(t.prototype,n),e}();function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,w(e,t,"set"),n),n}function v(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function d(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,w(e,t,"get"))}function w(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var g=new WeakMap,O=new WeakMap,k=new WeakMap,_=new WeakMap,P=new WeakMap,j=new WeakMap,E=new WeakMap,S=new WeakMap,T=new WeakSet,x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,i,a,c=(i=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(i);if(a){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(){var e;s(this,u);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=c.call.apply(c,[this].concat(n)),T.add(y(e)),g.set(y(e),{writable:!0,value:r.width}),O.set(y(e),{writable:!0,value:r.height}),k.set(y(e),{writable:!0,value:7}),_.set(y(e),{writable:!0,value:70}),P.set(y(e),{writable:!0,value:5}),j.set(y(e),{writable:!0,value:1}),E.set(y(e),{writable:!0,value:0}),S.set(y(e),{writable:!0,value:1}),e}return t=u,(n=[{key:"update",value:function(e){o.fillStyle=V;for(var t=0;t<d(this,P);++t){o.beginPath();var n=v(this,T,R).call(this,d(this,E)+.1*t);o.arc(Math.sin(n)*d(this,_)+d(this,g)/2,Math.cos(n)*d(this,_)+d(this,O)/2,d(this,k),0,2*Math.PI),o.fill()}m(this,E,d(this,E)+d(this,j)*e),d(this,E)>=Math.PI/4&&(d(this,S)>0&&m(this,S,d(this,S)-d(this,j)*e),d(this,S)<0?o.globalAlpha=0:o.globalAlpha=d(this,S),d(this,S)<=0&&this.onComplete())}}])&&f(t.prototype,n),u}(u);function R(e){return 4*(Math.atan(e%2-1)+4*Math.PI)}var M=15,A=15,N=function(){for(var e=new Path2D,t=r.width/M,n=0;n<M;n++)e.moveTo(n*t+t/2,0),e.lineTo(n*t+t/2,r.height);for(var i=0;i<A;i++)e.moveTo(0,i*t+t/2),e.lineTo(r.width,i*t+t/2);return function(){o.strokeStyle="black",o.lineWidth=2,o.stroke(e)}}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?q(e):t}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(u,e);var t,n,i,a,c=(i=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(i);if(a){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function u(){var e;W(this,u);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return I(q(e=c.call.apply(c,[this].concat(n))),"step",r.width/M),I(q(e),"offset",0),I(q(e),"speed",4*r.height),e}return t=u,(n=[{key:"update",value:function(e){o.beginPath(),o.strokeStyle="black",o.lineWidth=2,this.offset+=e*this.speed,this.offset>=r.height&&this.onComplete();for(var t=0;t<M;t++)o.moveTo(t*this.step+this.step/2,0),o.lineTo(t*this.step+this.step/2,this.offset);for(var n=0;n<A;n++)o.moveTo(0,n*this.step+this.step/2),o.lineTo(this.offset,n*this.step+this.step/2);o.stroke()}}])&&B(t.prototype,n),u}(u);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n(136),document.addEventListener("mousemove",(function(e){var t=r.getBoundingClientRect(),n=r.width/t.width,o=r.height/t.height;K.x=(e.clientX-t.left)*n,K.y=(e.clientY-t.top)*o}));var K={x:0,y:0},Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(c,e);var t,n,r,i,a=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(i){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function c(){return X(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"update",value:function(e){N(),o.beginPath(),o.fillStyle=V,o.arc(K.x,K.y,10,0,2*Math.PI),o.fill()}}])&&Y(t.prototype,n),c}(u),U=Date.now();u.prototype.onComplete=function(){re=re.getNext(),o.restore()};var V,Z,ee=new x,te=new $,ne=new Q,re=ee;function oe(){var e=Date.now(),t=(e-U)/1e3;U=e,o.clearRect(0,0,r.width,r.height),re.update(t),requestAnimationFrame(oe)}ee.setNext(te),te.setNext(ne);var ie=function(){var e=document.createElement("form");e.className="welcome-popup__form";var t=document.createElement("div");t.className="welcome-popup__nickname-section";var n=document.createElement("label");n.className="welcome-popup__nickname-label",n.innerHTML='Твое имя:\n  <input\n    class="welcome-popup__nickname-field"\n    type="text"\n    name="nickname"\n    placeholder="плейсхолдер"\n    autocomplete="off"\n    autofocus="autofocus"\n  />',t.append(n);var r=document.createElement("ul");r.className="color-picker";for(var o=["#ee2b2b","#0bb870","#0db1f1","#e9a6da","#831583"],i=0;i<5;i++){var a=document.createElement("li"),c=document.createElement("input");a.className="color-picker__item",c.className="color-picker__button",c.setAttribute("type","radio"),c.setAttribute("name","color"),c.setAttribute("value",o[i]),0==i&&c.setAttribute("checked",""),a.append(c),c.style.backgroundColor=o[i],r.append(a)}var u=document.createElement("input");return u.className="welcome-popup__submit",u.setAttribute("type","submit"),u.setAttribute("name","submit"),u.setAttribute("value","Играть"),e.append(t),e.append(r),e.append(u),e.addEventListener("submit",ce),e}(),ae=function(e){var t=document.createElement("div");t.className="welcome-popup";var n=document.createElement("h3");return n.className="welcome-popup__title",n.innerText="Вход в игру",t.append(n),t.append(e),t}(ie);function ce(e){ae.classList.contains("welcome-popup_shown")&&(V=ie.color.value,""==(Z=ie.nickname.value)&&(Z=ie.nickname.placeholder),ae.classList.remove("welcome-popup_shown"),U=Date.now(),o.save(),requestAnimationFrame(oe),setTimeout((function(){return ae.remove()}),150)),console.log(V),console.log(Z),e.preventDefault()}window.onload=function(){document.body.append(ae),requestAnimationFrame((function(){ae.classList.toggle("welcome-popup_shown")}))}},136:(e,t,n)=>{e.exports=n.p+"47a85ee166d23410ad2b.jpg"}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,o,i]=e[l],c=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(c=!1,i<a&&(a=i));c&&(e.splice(l--,1),t=o())}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0,532:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,c,u]=n,l=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);for(u&&u(r),t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0;r.O()},n=self.webpackChunkdotsweb=self.webpackChunkdotsweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[532],(()=>r(846)));o=r.O(o)})();