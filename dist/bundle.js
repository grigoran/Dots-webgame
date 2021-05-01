(()=>{"use strict";var t,e={599:()=>{var t=document.querySelector(".canvas"),e=t.getContext("2d");function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}e.save();var o=new WeakMap,i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.set(this,{writable:!0,value:this})}var e,i;return e=t,(i=[{key:"getNext",value:function(){return function(t,e){return e.get?e.get.call(t):e.value}(this,r(this,o,"get"))}},{key:"setNext",value:function(t){var e,n;n=t,function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(e=this,r(e,o,"set"),n)}},{key:"onComplete",value:function(){alert("complete")}},{key:"init",value:function(){}},{key:"update",value:function(t){}}])&&n(e.prototype,i),t}();function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,b(t,e,"set"),n),n}function y(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function v(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,b(t,e,"get"))}function b(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var d=new WeakMap,m=new WeakMap,w=new WeakMap,g=new WeakMap,x=new WeakMap,k=new WeakMap,O=new WeakMap,_=new WeakMap,S=new WeakSet,E=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(E,n);var r,o,i,a,b=(i=E,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(i);if(a){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function E(){var e;u(this,E);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=b.call.apply(b,[this].concat(r)),S.add(f(e)),d.set(f(e),{writable:!0,value:t.width}),m.set(f(e),{writable:!0,value:t.height}),w.set(f(e),{writable:!0,value:7}),g.set(f(e),{writable:!0,value:70}),x.set(f(e),{writable:!0,value:5}),k.set(f(e),{writable:!0,value:1}),O.set(f(e),{writable:!0,value:0}),_.set(f(e),{writable:!0,value:1}),e}return r=E,(o=[{key:"update",value:function(t){e.fillStyle=Tt;for(var n=0;n<v(this,x);++n){e.beginPath();var r=y(this,S,P).call(this,v(this,O)+.1*n);e.arc(Math.sin(r)*v(this,g)+v(this,d)/2,Math.cos(r)*v(this,g)+v(this,m)/2,v(this,w),0,2*Math.PI),e.fill()}h(this,O,v(this,O)+v(this,k)*t),v(this,O)>=Math.PI/4&&(v(this,_)>0&&h(this,_,v(this,_)-v(this,k)*t),v(this,_)<0?e.globalAlpha=0:e.globalAlpha=v(this,_),v(this,_)<=0&&this.onComplete())}}])&&c(r.prototype,o),E}(i);function P(t){return 4*(Math.atan(t%2-1)+4*Math.PI)}function j(t,e){"number"!=typeof t?(this.x=0,this.y=0):"number"!=typeof e?(this.x=t,this.y=t):(this.x=t,this.y=e)}function T(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||M(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){if(t){if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var C={},R=new j,W="",I=[];function N(t,e){switch(t){case 0:return new j(e.x+1,e.y);case 1:return new j(e.x+1,e.y+1);case 2:return new j(e.x,e.y+1);case 3:return new j(e.x-1,e.y+1);case 4:return new j(e.x-1,e.y);case 5:return new j(e.x-1,e.y-1);case 6:return new j(e.x,e.y-1);case 7:return new j(e.x+1,e.y-1)}}var z=function(t){R=new j(t.x,t.y),W=C.getColor(t),I=[],B(R,[],R);for(var e=0,n=I;e<n.length;e++)L(n[e]);return I.length>0?T(I[function(t){for(var e=0,n=0,r=0,o=0;o<t.length;o++)(n=D(t[o]))>e&&(e=n,r=o);return r}(I)]):[]};function B(t,e,n){var r;if(0==e.length||t.x!=R.x||t.y!=R.y){e.push(t);for(var o=0;o<8;o++)(r=N(o,t)).x==n.x&&r.y==n.y||C.getColor(r)!=W||C.isConnected(r)||B(r,T(e),t)}else I.push(T(e))}function D(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].x*t[(n+1)%t.length].y/2,e-=t[(n+1)%t.length].x*t[n].y/2;return e}function L(t){var e,n=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=M(t))){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;C.connect(r)}}catch(t){n.e(t)}finally{n.f()}}var F=new function(){this.assignArr=function(t){C=t},this.findPath=z};function q(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return U(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function $(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,X(t,e,"get"))}function H(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,X(t,e,"set"),n),n}function X(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var Y=2*Math.PI;function G(){this.color="",this.connected=!1}function J(t){for(var e=[],n=0;n<t.x;n++){e[n]=[];for(var r=0;r<t.y;r++)e[n][r]=new G}this.getColor=function(t){return e[t.x][t.y].color},this.setColor=function(t,n){e[t.x][t.y].color=n},this.connect=function(t){e[t.x][t.y].connected=!0},this.isConnected=function(t){return e[t.x][t.y].connected}}var K={},Q=new WeakMap,V=new WeakMap,Z=new WeakMap,tt=new WeakMap,et=new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Q.set(this,{writable:!0,value:0}),V.set(this,{writable:!0,value:{}}),Z.set(this,{writable:!0,value:8}),tt.set(this,{writable:!0,value:[]}),this.init=function(t,e){H(this,Q,e),H(this,V,t),K=new J(t),F.assignArr(K)},this.push=function(t,e){K.setColor(t,e);var n=F.findPath(t);n.length>0&&$(this,tt).push(n)},this.draw=function(){for(var t="",n=0;n<$(this,V).x;n++)for(var r=0;r<$(this,V).y;r++)""!=(t=K.getColor({x:n,y:r}))&&(e.beginPath(),e.fillStyle=t,e.arc(n*$(this,Q)+$(this,Q)/2,r*$(this,Q)+$(this,Q)/2,$(this,Z),0,Y),e.fill());var o,i=q($(this,tt));try{for(i.s();!(o=i.n()).done;){var a=o.value;e.beginPath(),e.strokeStyle=K.getColor(a[0]),e.lineWidth=3;var u,c=q(a);try{for(c.s();!(u=c.n()).done;){var s=u.value;e.lineTo(s.x*$(this,Q)+$(this,Q)/2,s.y*$(this,Q)+$(this,Q)/2)}}catch(t){c.e(t)}finally{c.f()}e.closePath(),e.stroke()}}catch(t){i.e(t)}finally{i.f()}}};function nt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function rt(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,ot(t,e,"get"))}function ot(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function it(t,e,n){var r=t>n?n:t;return r<e?e:r}var at=new WeakMap,ut=new(function(){function n(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),at.set(this,{writable:!0,value:0}),this.size={x:15,y:15};var r,o,i,a=new Path2D;r=this,o=at,i=t.width/this.size.x,function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(r,ot(r,o,"set"),i);for(var u=0;u<this.size.x;u++)a.moveTo(u*rt(this,at)+rt(this,at)/2,0),a.lineTo(u*rt(this,at)+rt(this,at)/2,t.height);for(var c=0;c<this.size.y;c++)a.moveTo(0,c*rt(this,at)+rt(this,at)/2),a.lineTo(t.width,c*rt(this,at)+rt(this,at)/2);et.init(this.size,rt(this,at)),this.drawField=function(){e.strokeStyle="black",e.lineWidth=2,e.stroke(a),et.draw()}}var r,o;return r=n,(o=[{key:"placeDot",value:function(t,e){var n=this.getMeshCoord(t);et.push(n,e)}},{key:"getMeshCoord",value:function(t){return{x:it(Math.floor(t.x/rt(this,at)),0,this.size.x-1),y:it(Math.floor(t.y/rt(this,at)),0,this.size.y-1)}}},{key:"getTargetCoord",value:function(t){var e={};return e.x=it(Math.floor(t.x/rt(this,at)),0,this.size.x-1),e.y=it(Math.floor(t.y/rt(this,at)),0,this.size.y-1),{x:e.x*rt(this,at)+rt(this,at)/2,y:e.y*rt(this,at)+rt(this,at)/2}}}])&&nt(r.prototype,o),n}());function ct(t){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function st(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ft(t,e){return(ft=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function pt(t,e){return!e||"object"!==ct(e)&&"function"!=typeof e?ht(t):e}function ht(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function yt(t){return(yt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function vt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var bt=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ft(t,e)}(c,n);var r,o,i,a,u=(i=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=yt(i);if(a){var n=yt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return pt(this,t)});function c(){var e;st(this,c);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return vt(ht(e=u.call.apply(u,[this].concat(r))),"step",t.width/ut.size.x),vt(ht(e),"offset",0),vt(ht(e),"speed",4*t.height),e}return r=c,(o=[{key:"update",value:function(n){e.beginPath(),e.strokeStyle="black",e.lineWidth=2,this.offset+=n*this.speed,this.offset>=t.height&&this.onComplete();for(var r=0;r<ut.size.x;r++)e.moveTo(r*this.step+this.step/2,0),e.lineTo(r*this.step+this.step/2,this.offset);for(var o=0;o<ut.size.y;o++)e.moveTo(0,o*this.step+this.step/2),e.lineTo(this.offset,o*this.step+this.step/2);e.stroke()}}])&&lt(r.prototype,o),c}(i),dt=0,mt=100,wt=new function(){this.pos=new j,this.target=new j,this.radius=10,dt=this.radius,this.speed=10,this.draw=function(){e.beginPath(),e.fillStyle=Tt,e.arc(wt.pos.x,wt.pos.y,dt,0,2*Math.PI),e.fill()},this.click=function(){mt=13,dt=0},this.update=function(t){var e,n;mt<100?(dt=this.radius*(e=mt,n=Math.cos(Math.PI*e/100),Math.abs(n)),mt+=290*t):dt=this.radius}};function gt(t){return(gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function xt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function kt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ot(t,e){return(Ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _t(t,e){return!e||"object"!==gt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function St(t){return(St=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Et=new j,Pt=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ot(t,e)}(u,e);var n,r,o,i,a=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=St(o);if(i){var n=St(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return _t(this,t)});function u(){return xt(this,u),a.apply(this,arguments)}return n=u,(r=[{key:"init",value:function(){var e,n,r;document.addEventListener("mousemove",(e=t.getBoundingClientRect(),n=t.width/e.width,r=t.height/e.height,function(t){Et.x=(t.clientX-e.left)*n,Et.y=(t.clientY-e.top)*r})),document.addEventListener("click",(function(){ut.placeDot(Et,Tt),wt.click()}))}},{key:"update",value:function(t){ut.drawField(),wt.target=ut.getTargetCoord(Et),wt.pos.x+=(wt.target.x-wt.pos.x)*t*wt.speed,wt.pos.y+=(wt.target.y-wt.pos.y)*t*wt.speed,wt.update(t),wt.draw()}}])&&kt(n.prototype,r),u}(i),jt=Date.now();i.prototype.onComplete=function(){(Rt=Rt.getNext()).init(),e.restore()};var Tt,Mt=new E,At=new bt,Ct=new Pt,Rt=Mt;function Wt(){var n=Date.now(),r=(n-jt)/1e3;jt=n,e.clearRect(0,0,t.width,t.height),Rt.update(r),requestAnimationFrame(Wt)}Mt.setNext(At),At.setNext(Ct);var It=function(){var t=document.createElement("form");t.className="welcome-popup__form";var e=document.createElement("div");e.className="welcome-popup__nickname-section";var n=document.createElement("label");n.className="welcome-popup__nickname-label",n.innerHTML='Твое имя:\n  <input\n    class="welcome-popup__nickname-field"\n    type="text"\n    name="nickname"\n    placeholder="плейсхолдер"\n    autocomplete="off"\n    autofocus="autofocus"\n  />',e.append(n);var r=document.createElement("ul");r.className="color-picker";for(var o=["#ee2b2b","#0bb870","#0db1f1","#e9a6da","#831583"],i=0;i<5;i++){var a=document.createElement("li"),u=document.createElement("input");a.className="color-picker__item",u.className="color-picker__button",u.setAttribute("type","radio"),u.setAttribute("name","color"),u.setAttribute("value",o[i]),0==i&&u.setAttribute("checked",""),a.append(u),u.style.backgroundColor=o[i],r.append(a)}var c=document.createElement("input");return c.className="welcome-popup__submit",c.setAttribute("type","submit"),c.setAttribute("name","submit"),c.setAttribute("value","Играть"),t.append(e),t.append(r),t.append(c),t.addEventListener("submit",zt),t}(),Nt=function(t){var e=document.createElement("div");e.className="welcome-popup";var n=document.createElement("h3");return n.className="welcome-popup__title",n.innerText="Вход в игру",e.append(n),e.append(t),e}(It);function zt(t){Nt.classList.contains("welcome-popup_shown")&&(Tt=It.color.value,""==It.nickname.value&&It.nickname.placeholder,Nt.classList.remove("welcome-popup_shown"),jt=Date.now(),e.save(),requestAnimationFrame(Wt),setTimeout((function(){return Nt.remove()}),150)),t.preventDefault()}window.onload=function(){document.body.append(Nt),requestAnimationFrame((function(){Nt.classList.toggle("welcome-popup_shown")}))}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,o,i)=>{if(!n){var a=1/0;for(s=0;s<t.length;s++){for(var[n,o,i]=t[s],u=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((t=>r.O[t](n[c])))?n.splice(c--,1):(u=!1,i<a&&(a=i));u&&(t.splice(s--,1),e=o())}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[n,o,i]},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0,532:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,[a,u,c]=n,s=0;for(o in u)r.o(u,o)&&(r.m[o]=u[o]);for(c&&c(r),e&&e(n);s<a.length;s++)i=a[s],r.o(t,i)&&t[i]&&t[i][0](),t[a[s]]=0;r.O()},n=self.webpackChunkdotsweb=self.webpackChunkdotsweb||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=r.O(void 0,[532],(()=>r(599)));o=r.O(o)})();