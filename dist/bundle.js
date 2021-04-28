(()=>{"use strict";var t,e={99:(t,e,n)=>{var r=document.querySelector(".canvas"),o=r.getContext("2d");function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}o.save();var u=new WeakMap,c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u.set(this,{writable:!0,value:this})}var e,n;return e=t,(n=[{key:"getNext",value:function(){return function(t,e){return e.get?e.get.call(t):e.value}(this,a(this,u,"get"))}},{key:"setNext",value:function(t){var e,n;n=t,function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(e=this,a(e,u,"set"),n)}},{key:"onComplete",value:function(){alert("complete")}},{key:"init",value:function(){}},{key:"update",value:function(t){}}])&&i(e.prototype,n),t}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?y(t):e}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,m(t,e,"set"),n),n}function w(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function d(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,m(t,e,"get"))}function m(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var g=new WeakMap,k=new WeakMap,O=new WeakMap,_=new WeakMap,x=new WeakMap,E=new WeakMap,T=new WeakMap,P=new WeakMap,j=new WeakSet,M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(c,t);var e,n,i,a,u=(i=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(i);if(a){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function c(){var t;l(this,c);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t=u.call.apply(u,[this].concat(n)),j.add(y(t)),g.set(y(t),{writable:!0,value:r.width}),k.set(y(t),{writable:!0,value:r.height}),O.set(y(t),{writable:!0,value:7}),_.set(y(t),{writable:!0,value:70}),x.set(y(t),{writable:!0,value:5}),E.set(y(t),{writable:!0,value:1}),T.set(y(t),{writable:!0,value:0}),P.set(y(t),{writable:!0,value:1}),t}return e=c,(n=[{key:"update",value:function(t){o.fillStyle=pt;for(var e=0;e<d(this,x);++e){o.beginPath();var n=w(this,j,S).call(this,d(this,T)+.1*e);o.arc(Math.sin(n)*d(this,_)+d(this,g)/2,Math.cos(n)*d(this,_)+d(this,k)/2,d(this,O),0,2*Math.PI),o.fill()}b(this,T,d(this,T)+d(this,E)*t),d(this,T)>=Math.PI/4&&(d(this,P)>0&&b(this,P,d(this,P)-d(this,E)*t),d(this,P)<0?o.globalAlpha=0:o.globalAlpha=d(this,P),d(this,P)<=0&&this.onComplete())}}])&&f(e.prototype,n),c}(c);function S(t){return 4*(Math.atan(t%2-1)+4*Math.PI)}function R(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,W(t,e,"get"))}function C(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,W(t,e,"set"),n),n}function W(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var A=[],N=2*Math.PI,z=new WeakMap,B=new WeakMap,D=new WeakMap,L=new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),z.set(this,{writable:!0,value:0}),B.set(this,{writable:!0,value:{}}),D.set(this,{writable:!0,value:8}),this.init=function(t,e){C(this,z,e),C(this,B,t);for(var n=0;n<t.x;n++){A[n]=[];for(var r=0;r<t.y;r++)A[n][r]=""}},this.push=function(t,e,n){A[t][e]=n},this.draw=function(){for(var t="",e=0;e<R(this,B).x;e++)for(var n=0;n<R(this,B).y;n++)""!=(t=A[e][n])&&(o.beginPath(),o.fillStyle=t,o.arc(e*R(this,z)+R(this,z)/2,n*R(this,z)+R(this,z)/2,R(this,D),0,N),o.fill())}};function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function I(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,q(t,e,"get"))}function q(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function $(t,e,n){var r=t>n?n:t;return r<e?e:r}var H=new WeakMap,X=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),H.set(this,{writable:!0,value:0}),this.size={x:15,y:15};var e,n,i,a=new Path2D;e=this,n=H,i=r.width/this.size.x,function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(e,q(e,n,"set"),i);for(var u=0;u<this.size.x;u++)a.moveTo(u*I(this,H)+I(this,H)/2,0),a.lineTo(u*I(this,H)+I(this,H)/2,r.height);for(var c=0;c<this.size.y;c++)a.moveTo(0,c*I(this,H)+I(this,H)/2),a.lineTo(r.width,c*I(this,H)+I(this,H)/2);L.init(this.size,I(this,H)),this.drawField=function(){o.strokeStyle="black",o.lineWidth=2,o.stroke(a),L.draw()}}var e,n;return e=t,(n=[{key:"placeDot",value:function(t,e){var n=this.getMeshCoord(t);L.push(n.x,n.y)}},{key:"getMeshCoord",value:function(t){return{x:$(Math.floor(t.x/I(this,H)),0,this.size.x-1),y:$(Math.floor(t.y/I(this,H)),0,this.size.y-1)}}},{key:"getTargetCoord",value:function(t){var e={};return e.x=$(Math.floor(t.x/I(this,H)),0,this.size.x-1),e.y=$(Math.floor(t.y/I(this,H)),0,this.size.y-1),{x:e.x*I(this,H)+I(this,H)/2,y:e.y*I(this,H)+I(this,H)/2}}}])&&F(e.prototype,n),t}());function Y(t){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function G(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function K(t,e){return(K=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Q(t,e){return!e||"object"!==Y(e)&&"function"!=typeof e?U(t):e}function U(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var tt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&K(t,e)}(c,t);var e,n,i,a,u=(i=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(i);if(a){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Q(this,t)});function c(){var t;G(this,c);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return Z(U(t=u.call.apply(u,[this].concat(n))),"step",r.width/X.size.x),Z(U(t),"offset",0),Z(U(t),"speed",4*r.height),t}return e=c,(n=[{key:"update",value:function(t){o.beginPath(),o.strokeStyle="black",o.lineWidth=2,this.offset+=t*this.speed,this.offset>=r.height&&this.onComplete();for(var e=0;e<X.size.x;e++)o.moveTo(e*this.step+this.step/2,0),o.lineTo(e*this.step+this.step/2,this.offset);for(var n=0;n<X.size.y;n++)o.moveTo(0,n*this.step+this.step/2),o.lineTo(this.offset,n*this.step+this.step/2);o.stroke()}}])&&J(e.prototype,n),c}(c);function et(t){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ot(t,e){return(ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function it(t,e){return!e||"object"!==et(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function at(t){return(at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ut(){this.x=0,this.y=0}n(136);var ct=new ut,st={};st.pos=new ut,st.target=new ut,st.radius=10,st.speed=10,st.draw=function(){o.beginPath(),o.fillStyle=pt,o.arc(st.pos.x,st.pos.y,st.radius,0,2*Math.PI),o.fill()};var lt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ot(t,e)}(u,t);var e,n,o,i,a=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=at(o);if(i){var n=at(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return it(this,t)});function u(){return nt(this,u),a.apply(this,arguments)}return e=u,(n=[{key:"init",value:function(){var t,e,n;document.addEventListener("mousemove",(t=r.getBoundingClientRect(),e=r.width/t.width,n=r.height/t.height,function(r){ct.x=(r.clientX-t.left)*e,ct.y=(r.clientY-t.top)*n})),document.addEventListener("click",(function(){X.placeDot(ct,pt)}))}},{key:"update",value:function(t){X.drawField(),st.target=X.getTargetCoord(ct),st.pos.x+=(st.target.x-st.pos.x)*t*st.speed,st.pos.y+=(st.target.y-st.pos.y)*t*st.speed,st.draw()}}])&&rt(e.prototype,n),u}(c),ft=Date.now();c.prototype.onComplete=function(){(wt=wt.getNext()).init(),o.restore()};var pt,ht,yt=new M,vt=new tt,bt=new lt,wt=yt;function dt(){var t=Date.now(),e=(t-ft)/1e3;ft=t,o.clearRect(0,0,r.width,r.height),wt.update(e),requestAnimationFrame(dt)}yt.setNext(vt),vt.setNext(bt);var mt=function(){var t=document.createElement("form");t.className="welcome-popup__form";var e=document.createElement("div");e.className="welcome-popup__nickname-section";var n=document.createElement("label");n.className="welcome-popup__nickname-label",n.innerHTML='Твое имя:\n  <input\n    class="welcome-popup__nickname-field"\n    type="text"\n    name="nickname"\n    placeholder="плейсхолдер"\n    autocomplete="off"\n    autofocus="autofocus"\n  />',e.append(n);var r=document.createElement("ul");r.className="color-picker";for(var o=["#ee2b2b","#0bb870","#0db1f1","#e9a6da","#831583"],i=0;i<5;i++){var a=document.createElement("li"),u=document.createElement("input");a.className="color-picker__item",u.className="color-picker__button",u.setAttribute("type","radio"),u.setAttribute("name","color"),u.setAttribute("value",o[i]),0==i&&u.setAttribute("checked",""),a.append(u),u.style.backgroundColor=o[i],r.append(a)}var c=document.createElement("input");return c.className="welcome-popup__submit",c.setAttribute("type","submit"),c.setAttribute("name","submit"),c.setAttribute("value","Играть"),t.append(e),t.append(r),t.append(c),t.addEventListener("submit",kt),t}(),gt=function(t){var e=document.createElement("div");e.className="welcome-popup";var n=document.createElement("h3");return n.className="welcome-popup__title",n.innerText="Вход в игру",e.append(n),e.append(t),e}(mt);function kt(t){gt.classList.contains("welcome-popup_shown")&&(pt=mt.color.value,""==(ht=mt.nickname.value)&&(ht=mt.nickname.placeholder),gt.classList.remove("welcome-popup_shown"),ft=Date.now(),o.save(),requestAnimationFrame(dt),setTimeout((function(){return gt.remove()}),150)),console.log(pt),console.log(ht),t.preventDefault()}window.onload=function(){document.body.append(gt),requestAnimationFrame((function(){gt.classList.toggle("welcome-popup_shown")}))}},136:(t,e,n)=>{t.exports=n.p+"47a85ee166d23410ad2b.jpg"}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,o,i)=>{if(!n){var a=1/0;for(s=0;s<t.length;s++){for(var[n,o,i]=t[s],u=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((t=>r.O[t](n[c])))?n.splice(c--,1):(u=!1,i<a&&(a=i));u&&(t.splice(s--,1),e=o())}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[n,o,i]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{var t={179:0,532:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,[a,u,c]=n,s=0;for(o in u)r.o(u,o)&&(r.m[o]=u[o]);for(c&&c(r),e&&e(n);s<a.length;s++)i=a[s],r.o(t,i)&&t[i]&&t[i][0](),t[a[s]]=0;r.O()},n=self.webpackChunkdotsweb=self.webpackChunkdotsweb||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=r.O(void 0,[532],(()=>r(99)));o=r.O(o)})();