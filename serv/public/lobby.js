(()=>{"use strict";var t=document.querySelector(".canvas"),e=t.getContext("2d");function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}e.save();var o=new WeakMap,i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.set(this,{writable:!0,value:this})}var e,i;return e=t,(i=[{key:"getNext",value:function(){return function(t,e){return e.get?e.get.call(t):e.value}(this,r(this,o,"get"))}},{key:"setNext",value:function(t){var e,n;n=t,function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(e=this,r(e,o,"set"),n)}},{key:"onComplete",value:function(){alert("complete")}},{key:"init",value:function(){}},{key:"update",value:function(t){}}])&&n(e.prototype,i),t}(),a=new WebSocket("ws://"+window.location.host+window.location.pathname),c=function(t){},u=function(t,e){},l=function(t){},s=function(){};function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,x(t,e,"set"),n),n}function w(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function g(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,x(t,e,"get"))}function x(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}a.onopen=function(t){a.send("con")},a.onmessage=function(t){var e=t.data.split(" ");"start"==e[0]&&c(a),"player"==e[0]&&u(e[1],e[2]),"place"==e[0]&&l({x:Number(e[1]),y:Number(e[2])}),"turn"==e[0]&&s()};var k=!1;c=function(t){t.send("player ".concat(Lt.local.color," ").concat(Lt.local.nickname)),k=!0},function(t){u=t}((function(t,e){Lt.remote.color=t,Lt.remote.nickname=e,console.log(Lt.remote)}));var S=new WeakMap,_=new WeakMap,O=new WeakMap,P=new WeakMap,E=new WeakMap,T=new WeakMap,j=new WeakMap,A=new WeakMap,C=new WeakSet,M=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(u,n);var r,o,i,a,c=(i=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(i);if(a){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return v(this,t)});function u(){var e;h(this,u);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=c.call.apply(c,[this].concat(r)),C.add(b(e)),S.set(b(e),{writable:!0,value:t.width}),_.set(b(e),{writable:!0,value:t.height}),O.set(b(e),{writable:!0,value:7}),P.set(b(e),{writable:!0,value:70}),E.set(b(e),{writable:!0,value:5}),T.set(b(e),{writable:!0,value:1}),j.set(b(e),{writable:!0,value:0}),A.set(b(e),{writable:!0,value:1}),e}return r=u,(o=[{key:"update",value:function(t){e.fillStyle=Lt.local.color;for(var n=0;n<g(this,E);++n){e.beginPath();var r=w(this,C,R).call(this,g(this,j)+.1*n);e.arc(Math.sin(r)*g(this,P)+g(this,S)/2,Math.cos(r)*g(this,P)+g(this,_)/2,g(this,O),0,2*Math.PI),e.fill()}d(this,j,g(this,j)+g(this,T)*t),k&&(g(this,A)>0&&d(this,A,g(this,A)-g(this,T)*t),g(this,A)<0?e.globalAlpha=0:e.globalAlpha=g(this,A),g(this,A)<=0&&this.onComplete())}}])&&p(r.prototype,o),u}(i);function R(t){return 4*(Math.atan(t%2-1)+4*Math.PI)}function W(t,e){"number"!=typeof t?(this.x=0,this.y=0):"number"!=typeof e?(this.x=t,this.y=t):(this.x=t,this.y=e)}function N(t,e){for(var n=t.length-1;n>=1;--n)if(e.x==t[n].x&&e.y==t[n].y)return!0;return!1}function z(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].x*t[(n+1)%t.length].y/2,e-=t[(n+1)%t.length].x*t[n].y/2;return e}function I(t){return function(t){if(Array.isArray(t))return B(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||D(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){if(t){if("string"==typeof t)return B(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(t,e):void 0}}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var L={},F=new W,q="",U=[];function $(t,e){var n;switch(t){case 0:n=new W(e.x+1,e.y);break;case 1:n=new W(e.x+1,e.y+1);break;case 2:n=new W(e.x,e.y+1);break;case 3:n=new W(e.x-1,e.y+1);break;case 4:n=new W(e.x-1,e.y);break;case 5:n=new W(e.x-1,e.y-1);break;case 6:n=new W(e.x,e.y-1);break;case 7:n=new W(e.x+1,e.y-1)}if(!(n.x<0||n.x>=L.size.x||n.y<0||n.y>=L.size.y))return n}var H=function(t){return new Promise((function(e,n){if(F=new W(t.x,t.y),q=L.getColor(t),U=[],X(F,[],F),U.length>0){var r=function(t){for(var e=0,n=0,r=0,o=[],i=[],a=0;a<t.length;a++)(e=z(t[a]))<=0||(r=e-t[a].length/2+1)<=0||(r>n?(n=r,o=[a],i=[e]):r==n&&(o.push(a),i.push(e)));if(0==n)return-1;if(o.length<1)return-1;for(var c=i[0],u=o[0],l=1;l<o.length;l++)i[l]<c&&(u=o[l],c=i[l]);return u}(U),o=[];r>=0&&function(t){var e,n=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=D(t))){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;L.connect(r)}}catch(t){n.e(t)}finally{n.f()}}(o=I(U[r])),e(function(t){for(var e=[],n=4,r=4,o=0;o<t.length-1;o++){var i=t[o+1],a=t[o];(r=i.x-a.x+3*(i.y-a.y)+4)!=n&&(n=r,e.push(a))}return e.push(t[t.length-1]),e}(o))}else e([])}))};function X(t,e,n){var r;if(0==e.length||t.x!=F.x||t.y!=F.y){e.push(t);for(var o=0;o<8;o++)!(r=$(o,t))||r.x==n.x&&r.y==n.y||L.getColor(r)!=q||L.isConnected(r)||N(e,r)||X(r,I(e),t)}else U.push(I(e))}var Y=new function(){this.assignArr=function(t){L=t},this.findPath=H};function G(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return J(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function K(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,V(t,e,"get"))}function Q(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,V(t,e,"set"),n),n}function V(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var Z=2*Math.PI;function tt(){this.color="",this.connected=!1}function et(t){for(var e=[],n=0;n<t.x;n++){e[n]=[];for(var r=0;r<t.y;r++)e[n][r]=new tt}this.size=t,this.getColor=function(t){return e[t.x][t.y].color},this.setColor=function(t,n){e[t.x][t.y].color=n},this.connect=function(t){e[t.x][t.y].connected=!0},this.isConnected=function(t){return e[t.x][t.y].connected}}var nt={},rt=new WeakMap,ot=new WeakMap,it=new WeakMap,at=new WeakMap,ct=new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),rt.set(this,{writable:!0,value:0}),ot.set(this,{writable:!0,value:{}}),it.set(this,{writable:!0,value:8}),at.set(this,{writable:!0,value:[]}),this.init=function(t,e){Q(this,rt,e),Q(this,ot,t),nt=new et(t),Y.assignArr(nt)},this.push=function(t,e){var n=this;return""==nt.getColor(t)&&(nt.setColor(t,e),Y.findPath(t).then((function(t){t.length>0&&K(n,at).push(t)})),!0)},this.draw=function(){var t,n="",r=G(K(this,at));try{for(r.s();!(t=r.n()).done;){var o=t.value;e.beginPath(),e.strokeStyle=nt.getColor(o[0]),e.fillStyle=nt.getColor(o[0]),e.lineWidth=3;var i,a=G(o);try{for(a.s();!(i=a.n()).done;){var c=i.value;e.lineTo(c.x*K(this,rt)+K(this,rt)/2,c.y*K(this,rt)+K(this,rt)/2)}}catch(t){a.e(t)}finally{a.f()}e.closePath(),e.globalAlpha=.5,e.fill(),e.globalAlpha=1,e.stroke()}}catch(t){r.e(t)}finally{r.f()}for(var u=0;u<K(this,ot).x;u++)for(var l=0;l<K(this,ot).y;l++)""!=(n=nt.getColor({x:u,y:l}))&&(e.beginPath(),e.fillStyle=n,e.arc(u*K(this,rt)+K(this,rt)/2,l*K(this,rt)+K(this,rt)/2,K(this,it),0,Z),e.fill());var s,f=G(K(this,at));try{for(f.s();!(s=f.n()).done;){var h,p=G(s.value);try{for(p.s();!(h=p.n()).done;){var y=h.value;e.beginPath(),e.fillStyle="black",e.arc(y.x*K(this,rt)+K(this,rt)/2,y.y*K(this,rt)+K(this,rt)/2,8,0,Z),e.closePath(),e.fill()}}catch(t){p.e(t)}finally{p.f()}}}catch(t){f.e(t)}finally{f.f()}}};function ut(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function lt(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,st(t,e,"get"))}function st(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function ft(t,e,n){var r=t>n?n:t;return r<e?e:r}var ht=new WeakMap,pt=new(function(){function n(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),ht.set(this,{writable:!0,value:0}),this.size={x:15,y:15};var r,o,i,a=new Path2D;r=this,o=ht,i=t.width/this.size.x,function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(r,st(r,o,"set"),i);for(var c=0;c<this.size.x;c++)a.moveTo(c*lt(this,ht)+lt(this,ht)/2,0),a.lineTo(c*lt(this,ht)+lt(this,ht)/2,t.height);for(var u=0;u<this.size.y;u++)a.moveTo(0,u*lt(this,ht)+lt(this,ht)/2),a.lineTo(t.width,u*lt(this,ht)+lt(this,ht)/2);ct.init(this.size,lt(this,ht)),this.drawField=function(){e.strokeStyle="black",e.lineWidth=2,e.stroke(a),ct.draw()}}var r,o;return r=n,(o=[{key:"placeDot",value:function(t,e){var n=this.getMeshCoord(t);return!!ct.push(n,e)&&(function(t){a.send("place ".concat(t.x," ").concat(t.y))}(n),!0)}},{key:"placeDotDirect",value:function(t,e){return ct.push(t,e)}},{key:"getMeshCoord",value:function(t){return{x:ft(Math.floor(t.x/lt(this,ht)),0,this.size.x-1),y:ft(Math.floor(t.y/lt(this,ht)),0,this.size.y-1)}}},{key:"getTargetCoord",value:function(t){var e={};return e.x=ft(Math.floor(t.x/lt(this,ht)),0,this.size.x-1),e.y=ft(Math.floor(t.y/lt(this,ht)),0,this.size.y-1),{x:e.x*lt(this,ht)+lt(this,ht)/2,y:e.y*lt(this,ht)+lt(this,ht)/2}}}])&&ut(r.prototype,o),n}());function yt(t){return(yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function vt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function mt(t,e){return(mt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function dt(t,e){return!e||"object"!==yt(e)&&"function"!=typeof e?wt(t):e}function wt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gt(t){return(gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function xt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var kt=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&mt(t,e)}(u,n);var r,o,i,a,c=(i=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=gt(i);if(a){var n=gt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return dt(this,t)});function u(){var e;vt(this,u);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return xt(wt(e=c.call.apply(c,[this].concat(r))),"step",t.width/pt.size.x),xt(wt(e),"offset",0),xt(wt(e),"speed",4*t.height),e}return r=u,(o=[{key:"update",value:function(n){e.beginPath(),e.strokeStyle="black",e.lineWidth=2,this.offset+=n*this.speed,this.offset>=t.height&&this.onComplete();for(var r=0;r<pt.size.x;r++)e.moveTo(r*this.step+this.step/2,0),e.lineTo(r*this.step+this.step/2,this.offset);for(var o=0;o<pt.size.y;o++)e.moveTo(0,o*this.step+this.step/2),e.lineTo(this.offset,o*this.step+this.step/2);e.stroke()}}])&&bt(r.prototype,o),u}(i),St=0,_t=100,Ot=new function(){this.pos=new W,this.target=new W,this.radius=10,St=this.radius,this.speed=10,this.draw=function(){e.beginPath(),e.fillStyle=Lt.local.color,e.arc(Ot.pos.x,Ot.pos.y,St,0,2*Math.PI),e.fill()},this.click=function(){_t=0,St=0},this.update=function(t){_t<100?(St=this.radius*(_t/100),_t+=500*t):St=this.radius}};function Pt(t){return(Pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Et(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Tt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function jt(t,e){return(jt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function At(t,e){return!e||"object"!==Pt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Ct(t){return(Ct=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Mt=new W;(function(t){l=t})((function(t){pt.placeDotDirect(t,Lt.remote.color)})),function(t){s=t}((function(){}));var Rt=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&jt(t,e)}(c,e);var n,r,o,i,a=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Ct(o);if(i){var n=Ct(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return At(this,t)});function c(){return Et(this,c),a.apply(this,arguments)}return n=c,(r=[{key:"init",value:function(){var e,n,r;document.addEventListener("mousemove",(e=t.getBoundingClientRect(),n=t.width/e.width,r=t.height/e.height,function(t){Mt.x=(t.clientX-e.left)*n,Mt.y=(t.clientY-e.top)*r})),document.addEventListener("click",(function(){Ot.click(),pt.placeDot(Mt,Lt.local.color)}))}},{key:"update",value:function(t){pt.drawField(),Ot.target=pt.getTargetCoord(Mt),Ot.pos.x+=(Ot.target.x-Ot.pos.x)*t*Ot.speed,Ot.pos.y+=(Ot.target.y-Ot.pos.y)*t*Ot.speed,Ot.update(t),Ot.draw()}}])&&Tt(n.prototype,r),c}(i),Wt=Date.now();i.prototype.onComplete=function(){(Dt=Dt.getNext()).init(),e.restore()};var Nt=new M,zt=new kt,It=new Rt,Dt=Nt;function Bt(){var n=Date.now(),r=(n-Wt)/1e3;Wt=n,e.clearRect(0,0,t.width,t.height),Dt.update(r),requestAnimationFrame(Bt)}Nt.setNext(zt),zt.setNext(It);var Lt={local:{},remote:{}},Ft=function(){var t=document.createElement("form");t.className="welcome-popup__form";var e=document.createElement("div");e.className="welcome-popup__nickname-section";var n=document.createElement("label");n.className="welcome-popup__nickname-label",n.innerHTML='Твое имя:\n  <input\n    class="welcome-popup__nickname-field"\n    type="text"\n    name="nickname"\n    placeholder="плейсхолдер"\n    autocomplete="off"\n    autofocus="autofocus"\n  />',e.append(n);var r=document.createElement("ul");r.className="color-picker";for(var o=["#ee2b2b","#0bb870","#0db1f1","#e9a6da","#831583"],i=0;i<5;i++){var a=document.createElement("li"),c=document.createElement("input");a.className="color-picker__item",c.className="color-picker__button",c.setAttribute("type","radio"),c.setAttribute("name","color"),c.setAttribute("value",o[i]),0==i&&c.setAttribute("checked",""),a.append(c),c.style.backgroundColor=o[i],r.append(a)}var u=document.createElement("input");return u.className="welcome-popup__submit",u.setAttribute("type","submit"),u.setAttribute("name","submit"),u.setAttribute("value","Играть"),t.append(e),t.append(r),t.append(u),t.addEventListener("submit",Ut),t}(),qt=function(t){var e=document.createElement("div");e.className="welcome-popup";var n=document.createElement("h3");return n.className="welcome-popup__title",n.innerText="Вход в игру",e.append(n),e.append(t),e}(Ft);function Ut(t){qt.classList.contains("welcome-popup_shown")&&(Lt.local.color=Ft.color.value,Lt.local.nickname=Ft.nickname.value,""==Lt.local.nickname&&(Lt.local.nickname=Ft.nickname.placeholder),qt.classList.remove("welcome-popup_shown"),a.send("join"),Wt=Date.now(),e.save(),requestAnimationFrame(Bt),setTimeout((function(){return qt.remove()}),150)),t.preventDefault()}window.onload=function(){document.body.append(qt),requestAnimationFrame((function(){qt.classList.toggle("welcome-popup_shown")}))}})();