module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-iamport */ \"react-iamport\");\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_iamport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/kangjinhee/personal/react-web-iamport-nicepay/src/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import { Link } from \"next/link\";\n\n\n\n\n\nconst Index = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(); // const IMP = window.IMP;\n\n  const handlePaments = () => {\n    IMP.request_pay({\n      pg: \"nice\",\n      // version 1.1.0부터 지원.\n      pay_method: \"card\",\n      merchant_uid: \"merchant_\" + new Date().getTime(),\n      name: \"주문명:결제테스트\",\n      amount: 14000,\n      buyer_email: \"iamport@siot.do\",\n      buyer_name: \"구매자이름\",\n      buyer_tel: \"010-1234-5678\",\n      buyer_addr: \"서울특별시 강남구 삼성동\",\n      buyer_postcode: \"123-456\",\n      m_redirect_url: \"https://www.yourdomain.com/payments/complete\"\n    }, res => {\n      if (res) {\n        console.log(\"rsp \", rsp);\n      } else {\n        console.log(\"err \", res.error_msg);\n      }\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (window.IMP) {\n      const {\n        IMP\n      } = window;\n      IMP.init(\"imp94304194\");\n    }\n  }, []);\n  return __jsx(\"div\", {\n    style: styles.container,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    style: styles.title,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, \"iamport Nicepay Payments\"), __jsx(\"button\", {\n    style: styles.pay_btn,\n    onClick: handlePaments,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, \"\\uACB0\\uC81C\\uD558\\uAE30\"));\n};\n\nconst styles = {\n  container: {\n    display: \"flex\",\n    flex: 1,\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  },\n  title: {\n    flex: 1,\n    margin: 20\n  },\n  pay_btn: {\n    width: 300,\n    border: 0\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJJbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVBhbWVudHMiLCJJTVAiLCJyZXF1ZXN0X3BheSIsInBnIiwicGF5X21ldGhvZCIsIm1lcmNoYW50X3VpZCIsIkRhdGUiLCJnZXRUaW1lIiwibmFtZSIsImFtb3VudCIsImJ1eWVyX2VtYWlsIiwiYnV5ZXJfbmFtZSIsImJ1eWVyX3RlbCIsImJ1eWVyX2FkZHIiLCJidXllcl9wb3N0Y29kZSIsIm1fcmVkaXJlY3RfdXJsIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJzcCIsImVycm9yX21zZyIsInVzZUVmZmVjdCIsIndpbmRvdyIsImluaXQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ0aXRsZSIsInBheV9idG4iLCJkaXNwbGF5IiwiZmxleCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwid2lkdGgiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRGtCLENBR2xCOztBQUVBLFFBQU1DLGFBQWEsR0FBRyxNQUFNO0FBQzFCQyxPQUFHLENBQUNDLFdBQUosQ0FDRTtBQUNFQyxRQUFFLEVBQUUsTUFETjtBQUNjO0FBQ1pDLGdCQUFVLEVBQUUsTUFGZDtBQUdFQyxrQkFBWSxFQUFFLGNBQWMsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBSDlCO0FBSUVDLFVBQUksRUFBRSxXQUpSO0FBS0VDLFlBQU0sRUFBRSxLQUxWO0FBTUVDLGlCQUFXLEVBQUUsaUJBTmY7QUFPRUMsZ0JBQVUsRUFBRSxPQVBkO0FBUUVDLGVBQVMsRUFBRSxlQVJiO0FBU0VDLGdCQUFVLEVBQUUsZUFUZDtBQVVFQyxvQkFBYyxFQUFFLFNBVmxCO0FBV0VDLG9CQUFjLEVBQUU7QUFYbEIsS0FERixFQWNHQyxHQUFELElBQVM7QUFDUCxVQUFJQSxHQUFKLEVBQVM7QUFDUEMsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkMsR0FBcEI7QUFDRCxPQUZELE1BRU87QUFDTEYsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkYsR0FBRyxDQUFDSSxTQUF4QjtBQUNEO0FBQ0YsS0FwQkg7QUFzQkQsR0F2QkQ7O0FBeUJBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJQyxNQUFNLENBQUNyQixHQUFYLEVBQWdCO0FBQ2QsWUFBTTtBQUFFQTtBQUFGLFVBQVVxQixNQUFoQjtBQUNBckIsU0FBRyxDQUFDc0IsSUFBSixDQUFTLGFBQVQ7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxTQUNFO0FBQUssU0FBSyxFQUFFQyxNQUFNLENBQUNDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXRTtBQUFNLFNBQUssRUFBRUQsTUFBTSxDQUFDRSxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQVhGLEVBWUU7QUFBUSxTQUFLLEVBQUVGLE1BQU0sQ0FBQ0csT0FBdEI7QUFBK0IsV0FBTyxFQUFFM0IsYUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FaRixDQURGO0FBa0JELENBdkREOztBQXlEQSxNQUFNd0IsTUFBTSxHQUFHO0FBQ2JDLFdBQVMsRUFBRTtBQUNURyxXQUFPLEVBQUUsTUFEQTtBQUVUQyxRQUFJLEVBQUUsQ0FGRztBQUdUQyxpQkFBYSxFQUFFLFFBSE47QUFJVEMsY0FBVSxFQUFFO0FBSkgsR0FERTtBQU9iTCxPQUFLLEVBQUU7QUFDTEcsUUFBSSxFQUFFLENBREQ7QUFFTEcsVUFBTSxFQUFFO0FBRkgsR0FQTTtBQVdiTCxTQUFPLEVBQUU7QUFDUE0sU0FBSyxFQUFFLEdBREE7QUFFUEMsVUFBTSxFQUFFO0FBRkQ7QUFYSSxDQUFmO0FBZ0JlckMsb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSWFtcG9ydCBmcm9tIFwicmVhY3QtaWFtcG9ydFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gY29uc3QgSU1QID0gd2luZG93LklNUDtcblxuICBjb25zdCBoYW5kbGVQYW1lbnRzID0gKCkgPT4ge1xuICAgIElNUC5yZXF1ZXN0X3BheShcbiAgICAgIHtcbiAgICAgICAgcGc6IFwibmljZVwiLCAvLyB2ZXJzaW9uIDEuMS4w67aA7YSwIOyngOybkC5cbiAgICAgICAgcGF5X21ldGhvZDogXCJjYXJkXCIsXG4gICAgICAgIG1lcmNoYW50X3VpZDogXCJtZXJjaGFudF9cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBuYW1lOiBcIuyjvOusuOuqhTrqsrDsoJzthYzsiqTtirhcIixcbiAgICAgICAgYW1vdW50OiAxNDAwMCxcbiAgICAgICAgYnV5ZXJfZW1haWw6IFwiaWFtcG9ydEBzaW90LmRvXCIsXG4gICAgICAgIGJ1eWVyX25hbWU6IFwi6rWs66ek7J6Q7J2066aEXCIsXG4gICAgICAgIGJ1eWVyX3RlbDogXCIwMTAtMTIzNC01Njc4XCIsXG4gICAgICAgIGJ1eWVyX2FkZHI6IFwi7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsgrzshLHrj5lcIixcbiAgICAgICAgYnV5ZXJfcG9zdGNvZGU6IFwiMTIzLTQ1NlwiLFxuICAgICAgICBtX3JlZGlyZWN0X3VybDogXCJodHRwczovL3d3dy55b3VyZG9tYWluLmNvbS9wYXltZW50cy9jb21wbGV0ZVwiLFxuICAgICAgfSxcbiAgICAgIChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicnNwIFwiLCByc3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyIFwiLCByZXMuZXJyb3JfbXNnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93LklNUCkge1xuICAgICAgY29uc3QgeyBJTVAgfSA9IHdpbmRvdztcbiAgICAgIElNUC5pbml0KFwiaW1wOTQzMDQxOTRcIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIHsvKiA8SGVhZD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0xLjEyLjQubWluLmpzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uaWFtcG9ydC5rci9qcy9pYW1wb3J0LnBheW1lbnQtMS4xLjUuanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+ICovfVxuICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+aWFtcG9ydCBOaWNlcGF5IFBheW1lbnRzPC9zcGFuPlxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLnBheV9idG59IG9uQ2xpY2s9e2hhbmRsZVBhbWVudHN9PlxuICAgICAgICDqsrDsoJztlZjquLBcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmbGV4OiAxLFxuICAgIG1hcmdpbjogMjAsXG4gIH0sXG4gIHBheV9idG46IHtcbiAgICB3aWR0aDogMzAwLFxuICAgIGJvcmRlcjogMCxcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-iamport":
/*!********************************!*\
  !*** external "react-iamport" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-iamport\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pYW1wb3J0XCI/NWIwMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pYW1wb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWFtcG9ydFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-iamport\n");

/***/ })

/******/ });