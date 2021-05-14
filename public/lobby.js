(()=>{"use strict";var t=document.querySelector(".canvas"),e=t.getContext("2d");function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}e.save();var o=new WeakMap,i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.set(this,{writable:!0,value:this})}var e,i;return e=t,(i=[{key:"getNext",value:function(){return function(t,e){return e.get?e.get.call(t):e.value}(this,r(this,o,"get"))}},{key:"setNext",value:function(t){var e,n;n=t,function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(e=this,r(e,o,"set"),n)}},{key:"onComplete",value:function(){alert("complete")}},{key:"init",value:function(){}},{key:"update",value:function(t){}}])&&n(e.prototype,i),t}(),a=new WebSocket("ws://"+window.location.host+window.location.pathname),c=function(t){},u=function(t,e){},l=function(t){},s=function(t){};function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?m(t):e}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,x(t,e,"set"),n),n}function w(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function g(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,x(t,e,"get"))}function x(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}a.onopen=function(t){a.send("con")},a.onmessage=function(t){var e=t.data.split(" ");"start"==e[0]&&c(a),"player"==e[0]&&u(e[1],e[2]),"place"==e[0]&&l({x:Number(e[1]),y:Number(e[2])}),"turn"==e[0]&&s(e[1])};var k=!1;c=function(t){t.send("player ".concat(Gt.local.color," ").concat(Gt.local.nickname)),k=!0},function(t){u=t}((function(t,e){Gt.remote.color=t,Gt.remote.nickname=e,console.log(Gt.remote)}));var _=new WeakMap,S=new WeakMap,E=new WeakMap,O=new WeakMap,T=new WeakMap,P=new WeakMap,j=new WeakMap,A=new WeakMap,C=new WeakSet,M=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(u,n);var r,o,i,a,c=(i=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(i);if(a){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return d(this,t)});function u(){var e;p(this,u);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=c.call.apply(c,[this].concat(r)),C.add(m(e)),_.set(m(e),{writable:!0,value:t.width}),S.set(m(e),{writable:!0,value:t.height}),E.set(m(e),{writable:!0,value:7}),O.set(m(e),{writable:!0,value:70}),T.set(m(e),{writable:!0,value:5}),P.set(m(e),{writable:!0,value:1}),j.set(m(e),{writable:!0,value:0}),A.set(m(e),{writable:!0,value:1}),e}return r=u,(o=[{key:"update",value:function(t){e.fillStyle=Gt.local.color;for(var n=0;n<g(this,T);++n){e.beginPath();var r=w(this,C,R).call(this,g(this,j)+.1*n);e.arc(Math.sin(r)*g(this,O)+g(this,_)/2,Math.cos(r)*g(this,O)+g(this,S)/2,g(this,E),0,2*Math.PI),e.fill()}b(this,j,g(this,j)+g(this,P)*t),k&&(g(this,A)>0&&b(this,A,g(this,A)-g(this,P)*t),g(this,A)<0?e.globalAlpha=0:e.globalAlpha=g(this,A),g(this,A)<=0&&this.onComplete())}}])&&h(r.prototype,o),u}(i);function R(t){return 4*(Math.atan(t%2-1)+4*Math.PI)}function W(t,e){"number"!=typeof t?(this.x=0,this.y=0):"number"!=typeof e?(this.x=t,this.y=t):(this.x=t,this.y=e)}function I(t,e){for(var n=t.length-1;n>=1;--n)if(e.x==t[n].x&&e.y==t[n].y)return!0;return!1}function L(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].x*t[(n+1)%t.length].y/2,e-=t[(n+1)%t.length].x*t[n].y/2;return e}function N(t,e){for(var n,r,o=e.y+.5,i=0,a=0;a<t.length;a++)if(a==t.length-1?(n=t[a],r=t[0]):(n=t[a],r=t[a+1]),!((o-n.y)*(r.x-n.x)/(r.y-n.y)+n.x<e.x)){var c=o-n.y,u=o-r.y;0!=c&&0!=u||i++,Math.sign(c)!=Math.sign(u)&&i++}return i%2==1}function z(t){return function(t){if(Array.isArray(t))return B(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||D(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){if(t){if("string"==typeof t)return B(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(t,e):void 0}}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var q={},F=new W,U="",$=[];function H(t,e){var n;switch(t){case 0:n=new W(e.x+1,e.y);break;case 1:n=new W(e.x+1,e.y+1);break;case 2:n=new W(e.x,e.y+1);break;case 3:n=new W(e.x-1,e.y+1);break;case 4:n=new W(e.x-1,e.y);break;case 5:n=new W(e.x-1,e.y-1);break;case 6:n=new W(e.x,e.y-1);break;case 7:n=new W(e.x+1,e.y-1)}if(!(n.x<0||n.x>=q.size.x||n.y<0||n.y>=q.size.y))return n}var X=function(t){return new Promise((function(e,n){if(F=new W(t.x,t.y),U=q.getColor(t),$=[],Y(F,[],F),$.length>0){var r=function(t){for(var e=0,n=0,r=0,o=[],i=[],a=0;a<t.length;a++)(e=L(t[a]))<=0||(r=e-t[a].length/2+1)<=0||(r>n?(n=r,o=[a],i=[e]):r==n&&(o.push(a),i.push(e)));if(0==n)return-1;if(o.length<1)return-1;for(var c=i[0],u=o[0],l=1;l<o.length;l++)i[l]<c&&(u=o[l],c=i[l]);return u}($),o=[];r>=0&&(function(t){var e,n=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=D(t))){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;q.connect(r)}}catch(t){n.e(t)}finally{n.f()}}(o=z($[r])),function(t){for(var e=new W,n=(q.getColor(t.path[0]),t.bounding.min.x);n<t.bounding.max.x;n++)for(var r=t.bounding.min.y;r<t.bounding.max.y;r++)e.x=n,e.y=r,q.isConnected(e)||N(t.path,e)&&q.markInside(e)}(o=function(t){for(var e=[],n=4,r=4,o={min:{x:t[0].x,y:t[0].y},max:{x:t[0].x,y:t[0].y}},i=0;i<t.length-1;i++){var a=t[i+1],c=t[i];c.x<o.min.x&&(o.min.x=c.x),c.y<o.min.y&&(o.min.y=c.y),c.x>o.max.x&&(o.max.x=c.x),c.y>o.max.y&&(o.max.y=c.y),(r=a.x-c.x+3*(a.y-c.y)+4)!=n&&(n=r,e.push(c))}return e.push(t[t.length-1]),{path:e,bounding:o,source:t}}(o))),e(o.path)}else e([])}))};function Y(t,e,n){var r;if(0==e.length||t.x!=F.x||t.y!=F.y){e.push(t);for(var o=0;o<8;o++)!(r=H(o,t))||r.x==n.x&&r.y==n.y||q.getColor(r)!=U||q.isConnected(r)||q.isInside(r)||I(e,r)||Y(r,z(e),t)}else $.push(z(e))}var G=new function(){this.assignArr=function(t){q=t},this.findPath=X};function J(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Q(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,Z(t,e,"get"))}function V(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,Z(t,e,"set"),n),n}function Z(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var tt=2*Math.PI;function et(){this.color="",this.connected=!1,this.inside=!1}function nt(t){for(var e=[],n=0;n<t.x;n++){e[n]=[];for(var r=0;r<t.y;r++)e[n][r]=new et}this.size=t,this.getColor=function(t){return e[t.x][t.y].color},this.setColor=function(t,n){e[t.x][t.y].color=n},this.connect=function(t){e[t.x][t.y].connected=!0},this.isConnected=function(t){return e[t.x][t.y].connected},this.markInside=function(t){e[t.x][t.y].inside=!0},this.isInside=function(t){return e[t.x][t.y].inside}}var rt={},ot=new WeakMap,it=new WeakMap,at=new WeakMap,ct=new WeakMap,ut=new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),ot.set(this,{writable:!0,value:0}),it.set(this,{writable:!0,value:{}}),at.set(this,{writable:!0,value:8}),ct.set(this,{writable:!0,value:[]}),this.init=function(t,e){V(this,ot,e),V(this,it,t),rt=new nt(t),G.assignArr(rt)},this.push=function(t,e){var n=this;return""==rt.getColor(t)&&!rt.isInside(t)&&(rt.setColor(t,e),G.findPath(t).then((function(t){t.length>0&&Q(n,ct).push(t)})),!0)},this.draw=function(){for(var t="",n=Q(this,ct).length-1;n>=0;n--){var r=Q(this,ct)[n];e.beginPath(),e.strokeStyle=rt.getColor(r[0]),e.fillStyle=rt.getColor(r[0]),e.lineWidth=3;var o,i=J(r);try{for(i.s();!(o=i.n()).done;){var a=o.value;e.lineTo(a.x*Q(this,ot)+Q(this,ot)/2,a.y*Q(this,ot)+Q(this,ot)/2)}}catch(t){i.e(t)}finally{i.f()}e.closePath(),e.globalAlpha=.3,e.fill(),e.globalAlpha=1,e.stroke()}for(var c=0;c<Q(this,it).x;c++)for(var u=0;u<Q(this,it).y;u++)""!=(t=rt.getColor({x:c,y:u}))&&(e.beginPath(),e.fillStyle=t,e.arc(c*Q(this,ot)+Q(this,ot)/2,u*Q(this,ot)+Q(this,ot)/2,Q(this,at),0,tt),e.fill())}};function lt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function st(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,ft(t,e,"get"))}function ft(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function pt(t,e,n){var r=t>n?n:t;return r<e?e:r}var ht=new WeakMap,yt=new(function(){function n(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),ht.set(this,{writable:!0,value:0}),this.size={x:15,y:15};var r,o,i,a=new Path2D;r=this,o=ht,i=t.width/this.size.x,function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(r,ft(r,o,"set"),i);for(var c=0;c<this.size.x;c++)a.moveTo(c*st(this,ht)+st(this,ht)/2,0),a.lineTo(c*st(this,ht)+st(this,ht)/2,t.height);for(var u=0;u<this.size.y;u++)a.moveTo(0,u*st(this,ht)+st(this,ht)/2),a.lineTo(t.width,u*st(this,ht)+st(this,ht)/2);ut.init(this.size,st(this,ht)),this.drawField=function(){e.strokeStyle="black",e.lineWidth=2,e.stroke(a),ut.draw()}}var r,o;return r=n,(o=[{key:"placeDot",value:function(t,e){var n=this.getMeshCoord(t);return!!ut.push(n,e)&&(function(t){a.send("place ".concat(t.x," ").concat(t.y))}(n),!0)}},{key:"placeDotDirect",value:function(t,e){return ut.push(t,e)}},{key:"getMeshCoord",value:function(t){return{x:pt(Math.floor(t.x/st(this,ht)),0,this.size.x-1),y:pt(Math.floor(t.y/st(this,ht)),0,this.size.y-1)}}},{key:"getTargetCoord",value:function(t){var e={};return e.x=pt(Math.floor(t.x/st(this,ht)),0,this.size.x-1),e.y=pt(Math.floor(t.y/st(this,ht)),0,this.size.y-1),{x:e.x*st(this,ht)+st(this,ht)/2,y:e.y*st(this,ht)+st(this,ht)/2}}}])&&lt(r.prototype,o),n}());function dt(t){return(dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function mt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function vt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function bt(t,e){return(bt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function wt(t,e){return!e||"object"!==dt(e)&&"function"!=typeof e?gt(t):e}function gt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function xt(t){return(xt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _t=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&bt(t,e)}(u,n);var r,o,i,a,c=(i=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=xt(i);if(a){var n=xt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return wt(this,t)});function u(){var e;mt(this,u);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return kt(gt(e=c.call.apply(c,[this].concat(r))),"step",t.width/yt.size.x),kt(gt(e),"offset",0),kt(gt(e),"speed",4*t.height),e}return r=u,(o=[{key:"update",value:function(n){e.beginPath(),e.strokeStyle="black",e.lineWidth=2,this.offset+=n*this.speed,this.offset>=t.height&&this.onComplete();for(var r=0;r<yt.size.x;r++)e.moveTo(r*this.step+this.step/2,0),e.lineTo(r*this.step+this.step/2,this.offset);for(var o=0;o<yt.size.y;o++)e.moveTo(0,o*this.step+this.step/2),e.lineTo(this.offset,o*this.step+this.step/2);e.stroke()}}])&&vt(r.prototype,o),u}(i),St=0,Et=100,Ot=new function(){this.pos=new W,this.target=new W,this.radius=10,St=this.radius,this.speed=10,this.draw=function(){e.beginPath(),e.fillStyle=Gt.local.color,e.arc(Ot.pos.x,Ot.pos.y,St,0,2*Math.PI),e.fill()},this.click=function(){Et=0,St=0},this.update=function(t){Et<100?(St=this.radius*(Et/100),Et+=500*t):St=this.radius}},Tt=document.createElement("div");Tt.classList.add("now-turn");var Pt=document.createElement("p");Pt.classList.add("now-turn__text"),Pt.innerText="Сейчас ходит:",Tt.append(Pt);var jt=document.createElement("div");jt.classList.add("turn-container");var At=document.createElement("p");At.classList.add("turn-container__player");var Ct=document.createElement("p");function Mt(t){t?(Ct.classList.add("turn-container__player_hidden"),jt.append(At),setTimeout((function(){Ct.remove(),Ct.classList.remove("turn-container__player_hidden")}),200)):(At.classList.add("turn-container__player_hidden"),jt.append(Ct),setTimeout((function(){At.remove(),At.classList.remove("turn-container__player_hidden")}),200))}function Rt(t){return(Rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Wt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function It(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Lt(t,e){return(Lt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Nt(t,e){return!e||"object"!==Rt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function zt(t){return(zt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Ct.classList.add("turn-container__player"),Tt.append(jt);var Dt=new W,Bt=!1;(function(t){l=t})((function(t){yt.placeDotDirect(t,Gt.remote.color),Mt(Bt=!0)})),function(t){s=t}((function(t){console.log(t),Bt="local"==t}));var qt=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Lt(t,e)}(c,e);var n,r,o,i,a=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=zt(o);if(i){var n=zt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Nt(this,t)});function c(){return Wt(this,c),a.apply(this,arguments)}return n=c,(r=[{key:"init",value:function(){var e,n,r;!function(t){document.querySelector(".header__logo").after(Tt),At.innerText=Gt.local.nickname,At.style.color=Gt.local.color,Ct.innerText=Gt.remote.nickname,Ct.style.color=Gt.remote.color,jt.append(t?At:Ct)}(Bt),document.addEventListener("mousemove",(e=t.getBoundingClientRect(),n=t.width/e.width,r=t.height/e.height,function(t){Dt.x=(t.clientX-e.left)*n,Dt.y=(t.clientY-e.top)*r})),document.addEventListener("click",(function(){Bt&&(Ot.click(),yt.placeDot(Dt,Gt.local.color)&&Mt(Bt=!1))}))}},{key:"update",value:function(t){yt.drawField(),Ot.target=yt.getTargetCoord(Dt),Ot.pos.x+=(Ot.target.x-Ot.pos.x)*t*Ot.speed,Ot.pos.y+=(Ot.target.y-Ot.pos.y)*t*Ot.speed,Ot.update(t),Ot.draw()}}])&&It(n.prototype,r),c}(i),Ft=Date.now();i.prototype.onComplete=function(){(Xt=Xt.getNext()).init(),e.restore()};var Ut=new M,$t=new _t,Ht=new qt,Xt=Ut;function Yt(){var n=Date.now(),r=(n-Ft)/1e3;Ft=n,e.clearRect(0,0,t.width,t.height),Xt.update(r),requestAnimationFrame(Yt)}Ut.setNext($t),$t.setNext(Ht);var Gt={local:{},remote:{}},Jt=function(){var t=document.createElement("form");t.className="welcome-popup__form";var e=document.createElement("div");e.className="welcome-popup__nickname-section";var n=document.createElement("label");n.className="welcome-popup__nickname-label",n.innerHTML='Твое имя:\n  <input\n    class="welcome-popup__nickname-field"\n    type="text"\n    name="nickname"\n    placeholder="плейсхолдер"\n    autocomplete="off"\n    autofocus="autofocus"\n  />',e.append(n);var r=document.createElement("ul");r.className="color-picker";for(var o=["#ee2b2b","#0bb870","#0db1f1","#e9a6da","#831583"],i=0;i<5;i++){var a=document.createElement("li"),c=document.createElement("input");a.className="color-picker__item",c.className="color-picker__button",c.setAttribute("type","radio"),c.setAttribute("name","color"),c.setAttribute("value",o[i]),0==i&&c.setAttribute("checked",""),a.append(c),c.style.backgroundColor=o[i],r.append(a)}var u=document.createElement("input");return u.className="welcome-popup__submit",u.setAttribute("type","submit"),u.setAttribute("name","submit"),u.setAttribute("value","Играть"),t.append(e),t.append(r),t.append(u),t.addEventListener("submit",Qt),t}(),Kt=function(t){var e=document.createElement("div");e.className="welcome-popup";var n=document.createElement("h3");return n.className="welcome-popup__title",n.innerText="Вход в игру",e.append(n),e.append(t),e}(Jt);function Qt(t){Kt.classList.contains("welcome-popup_shown")&&(Gt.local.color=Jt.color.value,Gt.local.nickname=Jt.nickname.value,""==Gt.local.nickname&&(Gt.local.nickname=Jt.nickname.placeholder),Kt.classList.remove("welcome-popup_shown"),a.send("join"),Ft=Date.now(),e.save(),requestAnimationFrame(Yt),setTimeout((function(){return Kt.remove()}),150)),t.preventDefault()}window.onload=function(){document.body.append(Kt),requestAnimationFrame((function(){Kt.classList.toggle("welcome-popup_shown")}))}})();