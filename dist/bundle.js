(()=>{"use strict";var t,e={845:()=>{var t=document.querySelector(".canvas"),e=t.getContext("2d");function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}e.save();var r=new WeakMap,i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r.set(this,{writable:!0,value:this})}var e,i;return e=t,(i=[{key:"getNext",value:function(){return function(t,e){return e.get?e.get.call(t):e.value}(this,o(this,r,"get"))}},{key:"setNext",value:function(t){var e,n;n=t,function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(e=this,o(e,r,"set"),n)}},{key:"onComplete",value:function(){alert("complete")}},{key:"init",value:function(){}},{key:"update",value:function(t){}}])&&n(e.prototype,i),t}();function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,b(t,e,"set"),n),n}function y(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function v(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,b(t,e,"get"))}function b(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var d=new WeakMap,w=new WeakMap,m=new WeakMap,g=new WeakMap,k=new WeakMap,O=new WeakMap,_=new WeakMap,x=new WeakMap,E=new WeakSet,P=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(P,n);var o,r,i,a,b=(i=P,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(i);if(a){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function P(){var e;u(this,P);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return e=b.call.apply(b,[this].concat(o)),E.add(f(e)),d.set(f(e),{writable:!0,value:t.width}),w.set(f(e),{writable:!0,value:t.height}),m.set(f(e),{writable:!0,value:7}),g.set(f(e),{writable:!0,value:70}),k.set(f(e),{writable:!0,value:5}),O.set(f(e),{writable:!0,value:1}),_.set(f(e),{writable:!0,value:0}),x.set(f(e),{writable:!0,value:1}),e}return o=P,(r=[{key:"update",value:function(t){e.fillStyle=ft;for(var n=0;n<v(this,k);++n){e.beginPath();var o=y(this,E,M).call(this,v(this,_)+.1*n);e.arc(Math.sin(o)*v(this,g)+v(this,d)/2,Math.cos(o)*v(this,g)+v(this,w)/2,v(this,m),0,2*Math.PI),e.fill()}h(this,_,v(this,_)+v(this,O)*t),v(this,_)>=Math.PI/4&&(v(this,x)>0&&h(this,x,v(this,x)-v(this,O)*t),v(this,x)<0?e.globalAlpha=0:e.globalAlpha=v(this,x),v(this,x)<=0&&this.onComplete())}}])&&c(o.prototype,r),P}(i);function M(t){return 4*(Math.atan(t%2-1)+4*Math.PI)}function T(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,S(t,e,"get"))}function j(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,S(t,e,"set"),n),n}function S(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var R=[],C=2*Math.PI,W=new WeakMap,A=new WeakMap,N=new WeakMap,z=new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),W.set(this,{writable:!0,value:0}),A.set(this,{writable:!0,value:{}}),N.set(this,{writable:!0,value:8}),this.init=function(t,e){j(this,W,e),j(this,A,t);for(var n=0;n<t.x;n++){R[n]=[];for(var o=0;o<t.y;o++)R[n][o]=""}},this.push=function(t,e,n){R[t][e]=n},this.draw=function(){for(var t="",n=0;n<T(this,A).x;n++)for(var o=0;o<T(this,A).y;o++)""!=(t=R[n][o])&&(e.beginPath(),e.fillStyle=t,e.arc(n*T(this,W)+T(this,W)/2,o*T(this,W)+T(this,W)/2,T(this,N),0,C),e.fill())}};function B(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function D(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,L(t,e,"get"))}function L(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function I(t,e,n){var o=t>n?n:t;return o<e?e:o}var F=new WeakMap,q=new(function(){function n(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),F.set(this,{writable:!0,value:0}),this.size={x:15,y:15};var o,r,i,a=new Path2D;o=this,r=F,i=t.width/this.size.x,function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(o,L(o,r,"set"),i);for(var u=0;u<this.size.x;u++)a.moveTo(u*D(this,F)+D(this,F)/2,0),a.lineTo(u*D(this,F)+D(this,F)/2,t.height);for(var c=0;c<this.size.y;c++)a.moveTo(0,c*D(this,F)+D(this,F)/2),a.lineTo(t.width,c*D(this,F)+D(this,F)/2);z.init(this.size,D(this,F)),this.drawField=function(){e.strokeStyle="black",e.lineWidth=2,e.stroke(a),z.draw()}}var o,r;return o=n,(r=[{key:"placeDot",value:function(t,e){var n=this.getMeshCoord(t);z.push(n.x,n.y)}},{key:"getMeshCoord",value:function(t){return{x:I(Math.floor(t.x/D(this,F)),0,this.size.x-1),y:I(Math.floor(t.y/D(this,F)),0,this.size.y-1)}}},{key:"getTargetCoord",value:function(t){var e={};return e.x=I(Math.floor(t.x/D(this,F)),0,this.size.x-1),e.y=I(Math.floor(t.y/D(this,F)),0,this.size.y-1),{x:e.x*D(this,F)+D(this,F)/2,y:e.y*D(this,F)+D(this,F)/2}}}])&&B(o.prototype,r),n}());function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function X(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function G(t,e){return(G=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function J(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?K(t):e}function K(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var V=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&G(t,e)}(c,n);var o,r,i,a,u=(i=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Q(i);if(a){var n=Q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return J(this,t)});function c(){var e;X(this,c);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return U(K(e=u.call.apply(u,[this].concat(o))),"step",t.width/q.size.x),U(K(e),"offset",0),U(K(e),"speed",4*t.height),e}return o=c,(r=[{key:"update",value:function(n){e.beginPath(),e.strokeStyle="black",e.lineWidth=2,this.offset+=n*this.speed,this.offset>=t.height&&this.onComplete();for(var o=0;o<q.size.x;o++)e.moveTo(o*this.step+this.step/2,0),e.lineTo(o*this.step+this.step/2,this.offset);for(var r=0;r<q.size.y;r++)e.moveTo(0,r*this.step+this.step/2),e.lineTo(this.offset,r*this.step+this.step/2);e.stroke()}}])&&Y(o.prototype,r),c}(i);function Z(){this.x=0,this.y=0}var $=0,tt=100,et=new function(){this.pos=new Z,this.target=new Z,this.radius=10,$=this.radius,this.speed=10,this.draw=function(){e.beginPath(),e.fillStyle=ft,e.arc(et.pos.x,et.pos.y,$,0,2*Math.PI),e.fill()},this.click=function(){tt=13,$=0},this.update=function(t){var e,n;tt<100?($=this.radius*(e=tt,n=Math.cos(Math.PI*e/100),n=Math.abs(n),console.log(n),n),tt+=290*t):$=this.radius}};function nt(t){return(nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function it(t,e){return(it=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function at(t,e){return!e||"object"!==nt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ut(t){return(ut=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var ct=new Z,st=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&it(t,e)}(u,e);var n,o,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ut(r);if(i){var n=ut(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return at(this,t)});function u(){return ot(this,u),a.apply(this,arguments)}return n=u,(o=[{key:"init",value:function(){var e,n,o;document.addEventListener("mousemove",(e=t.getBoundingClientRect(),n=t.width/e.width,o=t.height/e.height,function(t){ct.x=(t.clientX-e.left)*n,ct.y=(t.clientY-e.top)*o})),document.addEventListener("click",(function(){q.placeDot(ct,ft),et.click()}))}},{key:"update",value:function(t){q.drawField(),et.target=q.getTargetCoord(ct),et.pos.x+=(et.target.x-et.pos.x)*t*et.speed,et.pos.y+=(et.target.y-et.pos.y)*t*et.speed,et.update(t),et.draw()}}])&&rt(n.prototype,o),u}(i),lt=Date.now();i.prototype.onComplete=function(){(bt=bt.getNext()).init(),e.restore()};var ft,pt,ht=new P,yt=new V,vt=new st,bt=ht;function dt(){var n=Date.now(),o=(n-lt)/1e3;lt=n,e.clearRect(0,0,t.width,t.height),bt.update(o),requestAnimationFrame(dt)}ht.setNext(yt),yt.setNext(vt);var wt=function(){var t=document.createElement("form");t.className="welcome-popup__form";var e=document.createElement("div");e.className="welcome-popup__nickname-section";var n=document.createElement("label");n.className="welcome-popup__nickname-label",n.innerHTML='Твое имя:\n  <input\n    class="welcome-popup__nickname-field"\n    type="text"\n    name="nickname"\n    placeholder="плейсхолдер"\n    autocomplete="off"\n    autofocus="autofocus"\n  />',e.append(n);var o=document.createElement("ul");o.className="color-picker";for(var r=["#ee2b2b","#0bb870","#0db1f1","#e9a6da","#831583"],i=0;i<5;i++){var a=document.createElement("li"),u=document.createElement("input");a.className="color-picker__item",u.className="color-picker__button",u.setAttribute("type","radio"),u.setAttribute("name","color"),u.setAttribute("value",r[i]),0==i&&u.setAttribute("checked",""),a.append(u),u.style.backgroundColor=r[i],o.append(a)}var c=document.createElement("input");return c.className="welcome-popup__submit",c.setAttribute("type","submit"),c.setAttribute("name","submit"),c.setAttribute("value","Играть"),t.append(e),t.append(o),t.append(c),t.addEventListener("submit",gt),t}(),mt=function(t){var e=document.createElement("div");e.className="welcome-popup";var n=document.createElement("h3");return n.className="welcome-popup__title",n.innerText="Вход в игру",e.append(n),e.append(t),e}(wt);function gt(t){mt.classList.contains("welcome-popup_shown")&&(ft=wt.color.value,""==(pt=wt.nickname.value)&&(pt=wt.nickname.placeholder),mt.classList.remove("welcome-popup_shown"),lt=Date.now(),e.save(),requestAnimationFrame(dt),setTimeout((function(){return mt.remove()}),150)),console.log(ft),console.log(pt),t.preventDefault()}window.onload=function(){document.body.append(mt),requestAnimationFrame((function(){mt.classList.toggle("welcome-popup_shown")}))}}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,n,r,i)=>{if(!n){var a=1/0;for(s=0;s<t.length;s++){for(var[n,r,i]=t[s],u=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((t=>o.O[t](n[c])))?n.splice(c--,1):(u=!1,i<a&&(a=i));u&&(t.splice(s--,1),e=r())}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[n,r,i]},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0,532:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,i,[a,u,c]=n,s=0;for(r in u)o.o(u,r)&&(o.m[r]=u[r]);for(c&&c(o),e&&e(n);s<a.length;s++)i=a[s],o.o(t,i)&&t[i]&&t[i][0](),t[a[s]]=0;o.O()},n=self.webpackChunkdotsweb=self.webpackChunkdotsweb||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=o.O(void 0,[532],(()=>o(845)));r=o.O(r)})();