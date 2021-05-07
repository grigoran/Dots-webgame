/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
var genButton = document.querySelector(".generate-url-button");
var linkElem = document.createElement("a");
var socket = new WebSocket("ws://" + window.location.host);
genButton.addEventListener("click", function () {
  socket.send("newGame");
});

socket.onmessage = function (event) {
  var lobbyId = "id/" + event.data;
  linkElem.innerText = window.location.href + lobbyId;
  linkElem.setAttribute("href", lobbyId);
  document.body.append(linkElem);
  socket.close();
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3Rzd2ViLy4vc3JjL2luZGV4L2luZGV4LmpzIl0sIm5hbWVzIjpbImdlbkJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxpbmtFbGVtIiwiY3JlYXRlRWxlbWVudCIsInNvY2tldCIsIldlYlNvY2tldCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZW5kIiwib25tZXNzYWdlIiwiZXZlbnQiLCJsb2JieUlkIiwiZGF0YSIsImlubmVyVGV4dCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWhCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZjtBQUVBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxTQUFKLENBQWMsVUFBVUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUF4QyxDQUFiO0FBRUFULFNBQVMsQ0FBQ1UsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtBQUN4Q0wsUUFBTSxDQUFDTSxJQUFQLENBQVksU0FBWjtBQUNELENBRkQ7O0FBSUFOLE1BQU0sQ0FBQ08sU0FBUCxHQUFtQixVQUFVQyxLQUFWLEVBQWlCO0FBQ2xDLE1BQUlDLE9BQU8sR0FBRyxRQUFRRCxLQUFLLENBQUNFLElBQTVCO0FBQ0FaLFVBQVEsQ0FBQ2EsU0FBVCxHQUFxQlQsTUFBTSxDQUFDQyxRQUFQLENBQWdCUyxJQUFoQixHQUF1QkgsT0FBNUM7QUFDQVgsVUFBUSxDQUFDZSxZQUFULENBQXNCLE1BQXRCLEVBQThCSixPQUE5QjtBQUNBYixVQUFRLENBQUNrQixJQUFULENBQWNDLE1BQWQsQ0FBcUJqQixRQUFyQjtBQUNBRSxRQUFNLENBQUNnQixLQUFQO0FBQ0QsQ0FORCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGdlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZXJhdGUtdXJsLWJ1dHRvblwiKTtcbmxldCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG5sZXQgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCk7XG5cbmdlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzb2NrZXQuc2VuZChcIm5ld0dhbWVcIik7XG59KTtcblxuc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBsZXQgbG9iYnlJZCA9IFwiaWQvXCIgKyBldmVudC5kYXRhO1xuICBsaW5rRWxlbS5pbm5lclRleHQgPSB3aW5kb3cubG9jYXRpb24uaHJlZiArIGxvYmJ5SWQ7XG4gIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbG9iYnlJZCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGxpbmtFbGVtKTtcbiAgc29ja2V0LmNsb3NlKCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==