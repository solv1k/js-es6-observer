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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Observer =\n/*#__PURE__*/\nfunction () {\n  function Observer() {\n    _classCallCheck(this, Observer);\n\n    this.listeners = [];\n  }\n\n  _createClass(Observer, [{\n    key: \"subscribe\",\n    value: function subscribe(listener, event) {\n      if (!this.listeners[event]) {\n        this.listeners[event] = [];\n      }\n\n      if (!this.listeners[event].includes(listener)) {\n        this.listeners[event].push(listener);\n      }\n    }\n  }, {\n    key: \"unsubscribe\",\n    value: function unsubscribe(listener, event) {\n      if (!this.listeners[event] || !this.listeners[event].includes(listener)) {\n        return false;\n      }\n\n      this.listeners[event].splice(this.listeners[event].indexOf(listener), 1);\n    }\n  }, {\n    key: \"fire\",\n    value: function fire(event, data) {\n      if (!this.listeners[event]) {\n        return false;\n      }\n\n      this.listeners[event].forEach(function (listener) {\n        if (typeof listener[event] === 'function') {\n          listener[event](data);\n        }\n      });\n    }\n  }]);\n\n  return Observer;\n}();\n\n//# sourceURL=webpack:///./src/classes/observer.js?");

/***/ }),

/***/ "./src/classes/user.js":
/*!*****************************!*\
  !*** ./src/classes/user.js ***!
  \*****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n/* harmony import */ var _writer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writer.js */ \"./src/classes/writer.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar User =\n/*#__PURE__*/\nfunction () {\n  function User(_ref) {\n    var name = _ref.name;\n\n    _classCallCheck(this, User);\n\n    this.name = name;\n  }\n\n  _createClass(User, [{\n    key: \"greeting\",\n    value: function greeting(data) {\n      var writer = new _writer_js__WEBPACK_IMPORTED_MODULE_0__[\"Writer\"]();\n      writer.printLn(\"\".concat(this.name, \" say: \").concat(data.text));\n    }\n  }]);\n\n  return User;\n}();\n\n//# sourceURL=webpack:///./src/classes/user.js?");

/***/ }),

/***/ "./src/classes/writer.js":
/*!*******************************!*\
  !*** ./src/classes/writer.js ***!
  \*******************************/
/*! exports provided: Writer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Writer\", function() { return Writer; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar singleton = null;\nvar Writer =\n/*#__PURE__*/\nfunction () {\n  function Writer() {\n    _classCallCheck(this, Writer);\n\n    if (!singleton) {\n      this.lines = [];\n      singleton = this;\n    }\n\n    return singleton;\n  }\n\n  _createClass(Writer, [{\n    key: \"append\",\n    value: function append(text) {\n      this.lines.push(text);\n      this.printLines();\n    }\n  }, {\n    key: \"write\",\n    value: function write() {\n      this.append.apply(this, arguments);\n    }\n  }, {\n    key: \"printLine\",\n    value: function printLine() {\n      this.append.apply(this, arguments);\n    }\n  }, {\n    key: \"printLn\",\n    value: function printLn() {\n      this.append.apply(this, arguments);\n    }\n  }, {\n    key: \"printLines\",\n    value: function printLines() {\n      var appHtmlElement = document.querySelector('#app');\n\n      if (appHtmlElement) {\n        appHtmlElement.innerHTML = '';\n      }\n\n      this.lines.forEach(function (line) {\n        if (appHtmlElement) {\n          appHtmlElement.innerHTML += line + '<br>';\n        } else {\n          console.log(line);\n        }\n      });\n    }\n  }]);\n\n  return Writer;\n}();\n\n//# sourceURL=webpack:///./src/classes/writer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_writer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/writer.js */ \"./src/classes/writer.js\");\n/* harmony import */ var _classes_observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/observer.js */ \"./src/classes/observer.js\");\n/* harmony import */ var _classes_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/user.js */ \"./src/classes/user.js\");\n\n\n\n\n\nvar writer = new _classes_writer_js__WEBPACK_IMPORTED_MODULE_0__[\"Writer\"]();\nvar observer = new _classes_observer_js__WEBPACK_IMPORTED_MODULE_1__[\"Observer\"]();\nvar user1 = new _classes_user_js__WEBPACK_IMPORTED_MODULE_2__[\"User\"]({\n  name: 'Solv1k'\n});\nvar user2 = new _classes_user_js__WEBPACK_IMPORTED_MODULE_2__[\"User\"]({\n  name: 'Foo'\n});\nvar user3 = new _classes_user_js__WEBPACK_IMPORTED_MODULE_2__[\"User\"]({\n  name: 'Bar'\n});\nobserver.subscribe(user1, 'greeting');\nobserver.subscribe(user2, 'greeting');\nobserver.subscribe(user3, 'greeting');\nobserver.fire('greeting', {\n  text: 'Hello, World!'\n});\nwriter.printLn('---');\nobserver.unsubscribe(user2, 'greeting');\nobserver.fire('greeting', {\n  text: 'Hello, again!'\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });