/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index/js/gen-link.js":
/*!**********************************!*\
  !*** ./src/index/js/gen-link.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_gen_link_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/gen-link.css */ "./src/index/css/gen-link.css");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ "./src/index/js/popup.js");


var genButton = document.querySelector(".generate-url-button");
var socket = new WebSocket("ws://" + window.location.host);
genButton.addEventListener("click", function () {
  socket.send("newGame");
});

socket.onmessage = function (event) {
  var lobbyId = "id/" + event.data;
  var lobbyLink = window.location.href + lobbyId;
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.show)(lobbyLink);
  socket.close();
};

/***/ }),

/***/ "./src/index/js/popup.js":
/*!*******************************!*\
  !*** ./src/index/js/popup.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/popup.css */ "./src/index/css/popup.css");

function show(addres) {
  var textArea = document.createElement("input");
  textArea.setAttribute("type", "text");
  textArea.value = addres;
  textArea.setAttribute("readonly", "");
  textArea.classList.add("text-area");
  var gotoButton = document.createElement("button");
  gotoButton.classList.add("goto-button");
  gotoButton.innerText = "Скопировать и перейти";
  gotoButton.addEventListener("click", function () {
    textArea.select();
    document.execCommand("copy");
    window.location.href = addres;
  });
  var popupFrame = document.createElement("div");
  popupFrame.classList.add("popup-frame");
  popupFrame.append(textArea, gotoButton);
  document.body.append(popupFrame);
}

/***/ }),

/***/ "./src/index/css/fonts.css":
/*!*********************************!*\
  !*** ./src/index/css/fonts.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index/css/gen-link.css":
/*!************************************!*\
  !*** ./src/index/css/gen-link.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index/css/index.css":
/*!*********************************!*\
  !*** ./src/index/css/index.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index/css/normalize.css":
/*!*************************************!*\
  !*** ./src/index/css/normalize.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index/css/popup.css":
/*!*********************************!*\
  !*** ./src/index/css/popup.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index/svg/logo.svg":
/*!********************************!*\
  !*** ./src/index/svg/logo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "856e277e682aa8097eeb.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/index/js/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gen_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gen-link.js */ "./src/index/js/gen-link.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/normalize.css */ "./src/index/css/normalize.css");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/fonts.css */ "./src/index/css/fonts.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/index.css */ "./src/index/css/index.css");
/* harmony import */ var _svg_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg/logo.svg */ "./src/index/svg/logo.svg");
 //resources





console.log("test change");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2luZGV4L2pzL2dlbi1saW5rLmpzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvaW5kZXgvanMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9pbmRleC9jc3MvZm9udHMuY3NzIiwid2VicGFjazovL2RvdHN3ZWIvLi9zcmMvaW5kZXgvY3NzL2dlbi1saW5rLmNzcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2luZGV4L2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9pbmRleC9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2luZGV4L2Nzcy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vZG90c3dlYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kb3Rzd2ViL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG90c3dlYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RvdHN3ZWIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZG90c3dlYi8uL3NyYy9pbmRleC9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZW5CdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzb2NrZXQiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3QiLCJhZGRFdmVudExpc3RlbmVyIiwic2VuZCIsIm9ubWVzc2FnZSIsImV2ZW50IiwibG9iYnlJZCIsImRhdGEiLCJsb2JieUxpbmsiLCJocmVmIiwic2hvd1BvcHVwIiwiY2xvc2UiLCJzaG93IiwiYWRkcmVzIiwidGV4dEFyZWEiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJnb3RvQnV0dG9uIiwiaW5uZXJUZXh0Iiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJwb3B1cEZyYW1lIiwiYXBwZW5kIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWhCO0FBRUEsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFNBQUosQ0FBYyxVQUFVQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQXhDLENBQWI7QUFFQVAsU0FBUyxDQUFDUSxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxZQUFNO0FBQ3hDTCxRQUFNLENBQUNNLElBQVAsQ0FBWSxTQUFaO0FBQ0QsQ0FGRDs7QUFJQU4sTUFBTSxDQUFDTyxTQUFQLEdBQW1CLFVBQVVDLEtBQVYsRUFBaUI7QUFDbEMsTUFBSUMsT0FBTyxHQUFHLFFBQVFELEtBQUssQ0FBQ0UsSUFBNUI7QUFDQSxNQUFJQyxTQUFTLEdBQUdULE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlMsSUFBaEIsR0FBdUJILE9BQXZDO0FBQ0FJLGlEQUFTLENBQUNGLFNBQUQsQ0FBVDtBQUNBWCxRQUFNLENBQUNjLEtBQVA7QUFDRCxDQUxELEM7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRU8sU0FBU0MsSUFBVCxDQUFjQyxNQUFkLEVBQXNCO0FBQzNCLE1BQUlDLFFBQVEsR0FBR25CLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZjtBQUNBRCxVQUFRLENBQUNFLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUI7QUFDQUYsVUFBUSxDQUFDRyxLQUFULEdBQWlCSixNQUFqQjtBQUNBQyxVQUFRLENBQUNFLFlBQVQsQ0FBc0IsVUFBdEIsRUFBa0MsRUFBbEM7QUFDQUYsVUFBUSxDQUFDSSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixXQUF2QjtBQUVBLE1BQUlDLFVBQVUsR0FBR3pCLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQUssWUFBVSxDQUFDRixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixhQUF6QjtBQUNBQyxZQUFVLENBQUNDLFNBQVgsR0FBdUIsdUJBQXZCO0FBQ0FELFlBQVUsQ0FBQ2xCLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQU07QUFDekNZLFlBQVEsQ0FBQ1EsTUFBVDtBQUNBM0IsWUFBUSxDQUFDNEIsV0FBVCxDQUFxQixNQUFyQjtBQUNBeEIsVUFBTSxDQUFDQyxRQUFQLENBQWdCUyxJQUFoQixHQUF1QkksTUFBdkI7QUFDRCxHQUpEO0FBTUEsTUFBSVcsVUFBVSxHQUFHN0IsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBUyxZQUFVLENBQUNOLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLGFBQXpCO0FBQ0FLLFlBQVUsQ0FBQ0MsTUFBWCxDQUFrQlgsUUFBbEIsRUFBNEJNLFVBQTVCO0FBRUF6QixVQUFRLENBQUMrQixJQUFULENBQWNELE1BQWQsQ0FBcUJELFVBQXJCO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUN2QkQ7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQSw0Qjs7Ozs7Ozs7Ozs7Ozs7OztDQ0VBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2Nzcy9nZW4tbGluay5jc3NcIjtcbmltcG9ydCB7IHNob3cgYXMgc2hvd1BvcHVwIH0gZnJvbSBcIi4vcG9wdXAuanNcIjtcblxubGV0IGdlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZXJhdGUtdXJsLWJ1dHRvblwiKTtcblxubGV0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QpO1xuXG5nZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc29ja2V0LnNlbmQoXCJuZXdHYW1lXCIpO1xufSk7XG5cbnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgbGV0IGxvYmJ5SWQgPSBcImlkL1wiICsgZXZlbnQuZGF0YTtcbiAgbGV0IGxvYmJ5TGluayA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgbG9iYnlJZDtcbiAgc2hvd1BvcHVwKGxvYmJ5TGluayk7XG4gIHNvY2tldC5jbG9zZSgpO1xufTtcbiIsImltcG9ydCBcIi4uL2Nzcy9wb3B1cC5jc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3coYWRkcmVzKSB7XG4gIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRleHRBcmVhLnZhbHVlID0gYWRkcmVzO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCBcIlwiKTtcbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChcInRleHQtYXJlYVwiKTtcblxuICBsZXQgZ290b0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGdvdG9CdXR0b24uY2xhc3NMaXN0LmFkZChcImdvdG8tYnV0dG9uXCIpO1xuICBnb3RvQnV0dG9uLmlubmVyVGV4dCA9IFwi0KHQutC+0L/QuNGA0L7QstCw0YLRjCDQuCDQv9C10YDQtdC50YLQuFwiO1xuICBnb3RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGV4dEFyZWEuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYWRkcmVzO1xuICB9KTtcblxuICBsZXQgcG9wdXBGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBvcHVwRnJhbWUuY2xhc3NMaXN0LmFkZChcInBvcHVwLWZyYW1lXCIpO1xuICBwb3B1cEZyYW1lLmFwcGVuZCh0ZXh0QXJlYSwgZ290b0J1dHRvbik7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQocG9wdXBGcmFtZSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsImltcG9ydCBcIi4vZ2VuLWxpbmsuanNcIjtcblxuLy9yZXNvdXJjZXNcbmltcG9ydCBcIi4uL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvZm9udHMuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuLi9zdmcvbG9nby5zdmdcIjtcblxuY29uc29sZS5sb2coXCJ0ZXN0IGNoYW5nZVwiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=