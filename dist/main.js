/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/observer.js":
/*!*********************************!*\
  !*** ./src/classes/observer.js ***!
  \*********************************/
/*! exports provided: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Observer =\n/*#__PURE__*/\nfunction () {\n  function Observer() {\n    _classCallCheck(this, Observer);\n\n    this.listeners = [];\n  }\n\n  _createClass(Observer, [{\n    key: \"subscribe\",\n    value: function subscribe(listener, event) {\n      if (!this.listeners[event]) {\n        this.listeners[event] = [];\n      }\n\n      if (!this.listeners[event].includes(listener)) {\n        this.listeners[event].push(listener);\n      }\n    }\n  }, {\n    key: \"unsubscribe\",\n    value: function unsubscribe(listener, event) {\n      if (!this.listeners[event] || !this.listeners[event].includes(listener)) {\n        return false;\n      }\n\n      this.listeners[event].splice(this.listeners[event].indexOf(listener), 1);\n    }\n  }, {\n    key: \"fire\",\n    value: function fire(event, data) {\n      if (!this.listeners[event]) {\n        return false;\n      }\n\n      this.listeners[event].forEach(function (listener) {\n        if (typeof listener[event] === 'function') {\n          listener[event](data);\n        }\n      });\n    }\n  }]);\n\n  return Observer;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9vYnNlcnZlci5qcz80MzJkIl0sIm5hbWVzIjpbIk9ic2VydmVyIiwibGlzdGVuZXJzIiwibGlzdGVuZXIiLCJldmVudCIsImluY2x1ZGVzIiwicHVzaCIsInNwbGljZSIsImluZGV4T2YiLCJkYXRhIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQUVPLElBQU1BLFFBQWI7QUFBQTtBQUFBO0FBQ0Usc0JBQWM7QUFBQTs7QUFDWixTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7O0FBSEg7QUFBQTtBQUFBLDhCQUtZQyxRQUxaLEVBS3NCQyxLQUx0QixFQUs2QjtBQUN6QixVQUFJLENBQUUsS0FBS0YsU0FBTCxDQUFlRSxLQUFmLENBQU4sRUFBNkI7QUFDM0IsYUFBS0YsU0FBTCxDQUFlRSxLQUFmLElBQXdCLEVBQXhCO0FBQ0Q7O0FBQ0QsVUFBSSxDQUFFLEtBQUtGLFNBQUwsQ0FBZUUsS0FBZixFQUFzQkMsUUFBdEIsQ0FBK0JGLFFBQS9CLENBQU4sRUFBZ0Q7QUFDOUMsYUFBS0QsU0FBTCxDQUFlRSxLQUFmLEVBQXNCRSxJQUF0QixDQUEyQkgsUUFBM0I7QUFDRDtBQUNGO0FBWkg7QUFBQTtBQUFBLGdDQWNjQSxRQWRkLEVBY3dCQyxLQWR4QixFQWMrQjtBQUMzQixVQUFJLENBQUUsS0FBS0YsU0FBTCxDQUFlRSxLQUFmLENBQUYsSUFBMkIsQ0FBRSxLQUFLRixTQUFMLENBQWVFLEtBQWYsRUFBc0JDLFFBQXRCLENBQStCRixRQUEvQixDQUFqQyxFQUEyRTtBQUN6RSxlQUFPLEtBQVA7QUFDRDs7QUFFRCxXQUFLRCxTQUFMLENBQWVFLEtBQWYsRUFBc0JHLE1BQXRCLENBQTZCLEtBQUtMLFNBQUwsQ0FBZUUsS0FBZixFQUFzQkksT0FBdEIsQ0FBOEJMLFFBQTlCLENBQTdCLEVBQXNFLENBQXRFO0FBQ0Q7QUFwQkg7QUFBQTtBQUFBLHlCQXNCT0MsS0F0QlAsRUFzQmNLLElBdEJkLEVBc0JvQjtBQUNoQixVQUFJLENBQUUsS0FBS1AsU0FBTCxDQUFlRSxLQUFmLENBQU4sRUFBOEI7QUFDNUIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsV0FBS0YsU0FBTCxDQUFlRSxLQUFmLEVBQXNCTSxPQUF0QixDQUE4QixVQUFBUCxRQUFRLEVBQUk7QUFDeEMsWUFBSSxPQUFPQSxRQUFRLENBQUNDLEtBQUQsQ0FBZixLQUEyQixVQUEvQixFQUEyQztBQUN6Q0Qsa0JBQVEsQ0FBQ0MsS0FBRCxDQUFSLENBQWdCSyxJQUFoQjtBQUNEO0FBQ0YsT0FKRDtBQUtEO0FBaENIOztBQUFBO0FBQUEiLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9vYnNlcnZlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5leHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICBzdWJzY3JpYmUobGlzdGVuZXIsIGV2ZW50KSB7XG4gICAgaWYgKCEgdGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBbXVxuICAgIH1cbiAgICBpZiAoISB0aGlzLmxpc3RlbmVyc1tldmVudF0uaW5jbHVkZXMobGlzdGVuZXIpKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaChsaXN0ZW5lcilcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZShsaXN0ZW5lciwgZXZlbnQpIHtcbiAgICBpZiAoISB0aGlzLmxpc3RlbmVyc1tldmVudF0gfHwgISB0aGlzLmxpc3RlbmVyc1tldmVudF0uaW5jbHVkZXMobGlzdGVuZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgXG4gICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnNwbGljZSh0aGlzLmxpc3RlbmVyc1tldmVudF0uaW5kZXhPZihsaXN0ZW5lciksIDEpXG4gIH1cblxuICBmaXJlKGV2ZW50LCBkYXRhKSB7XG4gICAgaWYgKCEgdGhpcy5saXN0ZW5lcnNbZXZlbnRdICkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcltldmVudF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbGlzdGVuZXJbZXZlbnRdKGRhdGEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/classes/observer.js\n");

/***/ }),

/***/ "./src/classes/user.js":
/*!*****************************!*\
  !*** ./src/classes/user.js ***!
  \*****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n/* harmony import */ var _writer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writer.js */ \"./src/classes/writer.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar User =\n/*#__PURE__*/\nfunction () {\n  function User(_ref) {\n    var name = _ref.name;\n\n    _classCallCheck(this, User);\n\n    this.name = name;\n  }\n\n  _createClass(User, [{\n    key: \"greeting\",\n    value: function greeting(data) {\n      var writer = new _writer_js__WEBPACK_IMPORTED_MODULE_0__[\"Writer\"]();\n      writer.printLn(\"\".concat(this.name, \" say: \").concat(data.text));\n    }\n  }]);\n\n  return User;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy91c2VyLmpzPzNkZTgiXSwibmFtZXMiOlsiVXNlciIsIm5hbWUiLCJkYXRhIiwid3JpdGVyIiwiV3JpdGVyIiwicHJpbnRMbiIsInRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQUVBO0FBRU8sSUFBTUEsSUFBYjtBQUFBO0FBQUE7QUFDRSxzQkFBc0I7QUFBQSxRQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUE7O0FBQ3BCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOztBQUhIO0FBQUE7QUFBQSw2QkFLV0MsSUFMWCxFQUtpQjtBQUNiLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxpREFBSixFQUFmO0FBQ0FELFlBQU0sQ0FBQ0UsT0FBUCxXQUFrQixLQUFLSixJQUF2QixtQkFBb0NDLElBQUksQ0FBQ0ksSUFBekM7QUFDRDtBQVJIOztBQUFBO0FBQUEiLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IFdyaXRlciB9IGZyb20gJy4vd3JpdGVyLmpzJ1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHsgbmFtZSB9KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG5cbiAgZ3JlZXRpbmcoZGF0YSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBXcml0ZXIoKVxuICAgIHdyaXRlci5wcmludExuKGAke3RoaXMubmFtZX0gc2F5OiAke2RhdGEudGV4dH1gKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/classes/user.js\n");

/***/ }),

/***/ "./src/classes/writer.js":
/*!*******************************!*\
  !*** ./src/classes/writer.js ***!
  \*******************************/
/*! exports provided: Writer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Writer\", function() { return Writer; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar singleton = null;\nvar Writer =\n/*#__PURE__*/\nfunction () {\n  function Writer() {\n    _classCallCheck(this, Writer);\n\n    if (!singleton) {\n      this.lines = [];\n      singleton = this;\n    }\n\n    return singleton;\n  }\n\n  _createClass(Writer, [{\n    key: \"append\",\n    value: function append(text) {\n      this.lines.push(text);\n      this.printLines();\n    }\n  }, {\n    key: \"write\",\n    value: function write() {\n      this.append.apply(this, arguments);\n    }\n  }, {\n    key: \"printLine\",\n    value: function printLine() {\n      this.append.apply(this, arguments);\n    }\n  }, {\n    key: \"printLn\",\n    value: function printLn() {\n      this.append.apply(this, arguments);\n    }\n  }, {\n    key: \"printLines\",\n    value: function printLines() {\n      var appHtmlElement = document.querySelector('#app');\n\n      if (appHtmlElement) {\n        appHtmlElement.innerHTML = '';\n      }\n\n      this.lines.forEach(function (line) {\n        if (appHtmlElement) {\n          appHtmlElement.innerHTML += line + '<br>';\n        } else {\n          console.log(line);\n        }\n      });\n    }\n  }]);\n\n  return Writer;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy93cml0ZXIuanM/OGE3YyJdLCJuYW1lcyI6WyJzaW5nbGV0b24iLCJXcml0ZXIiLCJsaW5lcyIsInRleHQiLCJwdXNoIiwicHJpbnRMaW5lcyIsImFwcGVuZCIsImFyZ3VtZW50cyIsImFwcEh0bWxFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsImxpbmUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBUyxHQUFHLElBQWhCO0FBRU8sSUFBTUMsTUFBYjtBQUFBO0FBQUE7QUFDRSxvQkFBYztBQUFBOztBQUVaLFFBQUksQ0FBRUQsU0FBTixFQUFpQjtBQUNmLFdBQUtFLEtBQUwsR0FBYSxFQUFiO0FBQ0FGLGVBQVMsR0FBRyxJQUFaO0FBQ0Q7O0FBRUQsV0FBT0EsU0FBUDtBQUNEOztBQVRIO0FBQUE7QUFBQSwyQkFXU0csSUFYVCxFQVdlO0FBQ1gsV0FBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCRCxJQUFoQjtBQUNBLFdBQUtFLFVBQUw7QUFDRDtBQWRIO0FBQUE7QUFBQSw0QkFnQlU7QUFDTixXQUFLQyxNQUFMLGFBQWVDLFNBQWY7QUFDRDtBQWxCSDtBQUFBO0FBQUEsZ0NBb0JjO0FBQ1YsV0FBS0QsTUFBTCxhQUFlQyxTQUFmO0FBQ0Q7QUF0Qkg7QUFBQTtBQUFBLDhCQXdCWTtBQUNSLFdBQUtELE1BQUwsYUFBZUMsU0FBZjtBQUNEO0FBMUJIO0FBQUE7QUFBQSxpQ0E0QmU7QUFDWCxVQUFNQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUF2Qjs7QUFFQSxVQUFJRixjQUFKLEVBQW9CO0FBQ2xCQSxzQkFBYyxDQUFDRyxTQUFmLEdBQTJCLEVBQTNCO0FBQ0Q7O0FBRUQsV0FBS1QsS0FBTCxDQUFXVSxPQUFYLENBQW1CLFVBQUFDLElBQUksRUFBSTtBQUN6QixZQUFJTCxjQUFKLEVBQW9CO0FBQ2xCQSx3QkFBYyxDQUFDRyxTQUFmLElBQTRCRSxJQUFJLEdBQUcsTUFBbkM7QUFDRCxTQUZELE1BRU87QUFDTEMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0Q7QUFDRixPQU5EO0FBT0Q7QUExQ0g7O0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9jbGFzc2VzL3dyaXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5sZXQgc2luZ2xldG9uID0gbnVsbFxuXG5leHBvcnQgY2xhc3MgV3JpdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBpZiAoISBzaW5nbGV0b24pIHtcbiAgICAgIHRoaXMubGluZXMgPSBbXVxuICAgICAgc2luZ2xldG9uID0gdGhpc1xuICAgIH1cblxuICAgIHJldHVybiBzaW5nbGV0b25cbiAgfVxuXG4gIGFwcGVuZCh0ZXh0KSB7XG4gICAgdGhpcy5saW5lcy5wdXNoKHRleHQpXG4gICAgdGhpcy5wcmludExpbmVzKClcbiAgfVxuXG4gIHdyaXRlKCkge1xuICAgIHRoaXMuYXBwZW5kKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIHByaW50TGluZSgpIHtcbiAgICB0aGlzLmFwcGVuZCguLi5hcmd1bWVudHMpXG4gIH1cblxuICBwcmludExuKCkge1xuICAgIHRoaXMuYXBwZW5kKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIHByaW50TGluZXMoKSB7XG4gICAgY29uc3QgYXBwSHRtbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJylcblxuICAgIGlmIChhcHBIdG1sRWxlbWVudCkge1xuICAgICAgYXBwSHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICB0aGlzLmxpbmVzLmZvckVhY2gobGluZSA9PiB7XG4gICAgICBpZiAoYXBwSHRtbEVsZW1lbnQpIHtcbiAgICAgICAgYXBwSHRtbEVsZW1lbnQuaW5uZXJIVE1MICs9IGxpbmUgKyAnPGJyPidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpbmUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/classes/writer.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_writer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/writer.js */ \"./src/classes/writer.js\");\n/* harmony import */ var _classes_observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/observer.js */ \"./src/classes/observer.js\");\n/* harmony import */ var _classes_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/user.js */ \"./src/classes/user.js\");\n\n\n\n\n\nvar writer = new _classes_writer_js__WEBPACK_IMPORTED_MODULE_0__[\"Writer\"]();\nvar observer = new _classes_observer_js__WEBPACK_IMPORTED_MODULE_1__[\"Observer\"]();\nvar user1 = new _classes_user_js__WEBPACK_IMPORTED_MODULE_2__[\"User\"]({\n  name: 'Solv1k'\n});\nvar user2 = new _classes_user_js__WEBPACK_IMPORTED_MODULE_2__[\"User\"]({\n  name: 'Foo'\n});\nvar user3 = new _classes_user_js__WEBPACK_IMPORTED_MODULE_2__[\"User\"]({\n  name: 'Baz'\n});\nobserver.subscribe(user1, 'greeting');\nobserver.subscribe(user2, 'greeting');\nobserver.subscribe(user3, 'greeting');\nobserver.fire('greeting', {\n  text: 'Hello, World!'\n});\nwriter.printLn('---');\nobserver.unsubscribe(user2, 'greeting');\nobserver.fire('greeting', {\n  text: 'Hello, again!'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJ3cml0ZXIiLCJXcml0ZXIiLCJvYnNlcnZlciIsIk9ic2VydmVyIiwidXNlcjEiLCJVc2VyIiwibmFtZSIsInVzZXIyIiwidXNlcjMiLCJzdWJzY3JpYmUiLCJmaXJlIiwidGV4dCIsInByaW50TG4iLCJ1bnN1YnNjcmliZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMseURBQUosRUFBZjtBQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJQyw2REFBSixFQUFqQjtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJQyxxREFBSixDQUFTO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQVQsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRixxREFBSixDQUFTO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQVQsQ0FBZDtBQUNBLElBQU1FLEtBQUssR0FBRyxJQUFJSCxxREFBSixDQUFTO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQVQsQ0FBZDtBQUVBSixRQUFRLENBQUNPLFNBQVQsQ0FBbUJMLEtBQW5CLEVBQTBCLFVBQTFCO0FBQ0FGLFFBQVEsQ0FBQ08sU0FBVCxDQUFtQkYsS0FBbkIsRUFBMEIsVUFBMUI7QUFDQUwsUUFBUSxDQUFDTyxTQUFULENBQW1CRCxLQUFuQixFQUEwQixVQUExQjtBQUNBTixRQUFRLENBQUNRLElBQVQsQ0FBYyxVQUFkLEVBQTBCO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTFCO0FBRUFYLE1BQU0sQ0FBQ1ksT0FBUCxDQUFlLEtBQWY7QUFFQVYsUUFBUSxDQUFDVyxXQUFULENBQXFCTixLQUFyQixFQUE0QixVQUE1QjtBQUNBTCxRQUFRLENBQUNRLElBQVQsQ0FBYyxVQUFkLEVBQTBCO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQTFCIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IFdyaXRlciB9IGZyb20gJy4vY2xhc3Nlcy93cml0ZXIuanMnXG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4vY2xhc3Nlcy9vYnNlcnZlci5qcydcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL2NsYXNzZXMvdXNlci5qcydcblxuY29uc3Qgd3JpdGVyID0gbmV3IFdyaXRlcigpXG5jb25zdCBvYnNlcnZlciA9IG5ldyBPYnNlcnZlcigpXG5jb25zdCB1c2VyMSA9IG5ldyBVc2VyKHsgbmFtZTogJ1NvbHYxayd9IClcbmNvbnN0IHVzZXIyID0gbmV3IFVzZXIoeyBuYW1lOiAnRm9vJ30gKVxuY29uc3QgdXNlcjMgPSBuZXcgVXNlcih7IG5hbWU6ICdCYXonfSApXG5cbm9ic2VydmVyLnN1YnNjcmliZSh1c2VyMSwgJ2dyZWV0aW5nJylcbm9ic2VydmVyLnN1YnNjcmliZSh1c2VyMiwgJ2dyZWV0aW5nJylcbm9ic2VydmVyLnN1YnNjcmliZSh1c2VyMywgJ2dyZWV0aW5nJylcbm9ic2VydmVyLmZpcmUoJ2dyZWV0aW5nJywgeyB0ZXh0OiAnSGVsbG8sIFdvcmxkIScgfSlcblxud3JpdGVyLnByaW50TG4oJy0tLScpXG5cbm9ic2VydmVyLnVuc3Vic2NyaWJlKHVzZXIyLCAnZ3JlZXRpbmcnKVxub2JzZXJ2ZXIuZmlyZSgnZ3JlZXRpbmcnLCB7IHRleHQ6ICdIZWxsbywgYWdhaW4hJyB9KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });