webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-iamport */ \"./node_modules/react-iamport/dist/index.js\");\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_iamport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/kangjinhee/personal/react-web-iamport-nicepay/src/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import { Link } from \"next/link\";\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(); // const IMP = window.IMP;\n\n  var handleSuccess = function handleSuccess(res) {\n    console.group(\"handleSuccess\");\n    console.log(res);\n    console.groupEnd(\"handleSuccess\");\n  };\n\n  var handleFailed = function handleFailed(err) {\n    console.group(\"handleFailed\");\n    console.log(err);\n    console.groupEnd(\"handleFailed\");\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {// IMP.init(\"imp94304194\"); // 초기화\n  }, []);\n  return __jsx(\"div\", {\n    style: styles.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    style: styles.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"iamport Nicepay Payments\"), console.log(window.IMP));\n};\n\n_s(Index, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Index;\nvar styles = {\n  container: {\n    display: \"flex\",\n    flex: 1,\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  },\n  title: {\n    flex: 1,\n    margin: 20\n  },\n  pay_btn: {\n    width: 300,\n    border: 0\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVTdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImdyb3VwIiwibG9nIiwiZ3JvdXBFbmQiLCJoYW5kbGVGYWlsZWQiLCJlcnIiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ0aXRsZSIsIndpbmRvdyIsIklNUCIsImRpc3BsYXkiLCJmbGV4IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJwYXlfYnRuIiwid2lkdGgiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQURrQixDQUdsQjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBUztBQUM3QkMsV0FBTyxDQUFDQyxLQUFSLENBQWMsZUFBZDtBQUNBRCxXQUFPLENBQUNFLEdBQVIsQ0FBWUgsR0FBWjtBQUNBQyxXQUFPLENBQUNHLFFBQVIsQ0FBaUIsZUFBakI7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBUztBQUM1QkwsV0FBTyxDQUFDQyxLQUFSLENBQWMsY0FBZDtBQUNBRCxXQUFPLENBQUNFLEdBQVIsQ0FBWUcsR0FBWjtBQUNBTCxXQUFPLENBQUNHLFFBQVIsQ0FBaUIsY0FBakI7QUFDRCxHQUpEOztBQU1BRyx5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxTQUNFO0FBQUssU0FBSyxFQUFFQyxNQUFNLENBQUNDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFNBQUssRUFBRUQsTUFBTSxDQUFDRSxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLEVBMkJHVCxPQUFPLENBQUNFLEdBQVIsQ0FBWVEsTUFBTSxDQUFDQyxHQUFuQixDQTNCSCxDQURGO0FBcURELENBMUVEOztHQUFNaEIsSztVQUNXRSxxRDs7O0tBRFhGLEs7QUE0RU4sSUFBTVksTUFBTSxHQUFHO0FBQ2JDLFdBQVMsRUFBRTtBQUNUSSxXQUFPLEVBQUUsTUFEQTtBQUVUQyxRQUFJLEVBQUUsQ0FGRztBQUdUQyxpQkFBYSxFQUFFLFFBSE47QUFJVEMsY0FBVSxFQUFFO0FBSkgsR0FERTtBQU9iTixPQUFLLEVBQUU7QUFDTEksUUFBSSxFQUFFLENBREQ7QUFFTEcsVUFBTSxFQUFFO0FBRkgsR0FQTTtBQVdiQyxTQUFPLEVBQUU7QUFDUEMsU0FBSyxFQUFFLEdBREE7QUFFUEMsVUFBTSxFQUFFO0FBRkQ7QUFYSSxDQUFmO0FBZ0JleEIsb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSWFtcG9ydCBmcm9tIFwicmVhY3QtaWFtcG9ydFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gY29uc3QgSU1QID0gd2luZG93LklNUDtcblxuICBjb25zdCBoYW5kbGVTdWNjZXNzID0gKHJlcykgPT4ge1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJoYW5kbGVTdWNjZXNzXCIpO1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgY29uc29sZS5ncm91cEVuZChcImhhbmRsZVN1Y2Nlc3NcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmFpbGVkID0gKGVycikgPT4ge1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJoYW5kbGVGYWlsZWRcIik7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKFwiaGFuZGxlRmFpbGVkXCIpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSU1QLmluaXQoXCJpbXA5NDMwNDE5NFwiKTsgLy8g7LSI6riw7ZmUXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+aWFtcG9ydCBOaWNlcGF5IFBheW1lbnRzPC9zcGFuPlxuICAgICAgey8qIDxMaW5rIGhyZWY9e1wiL3BheW1lbnRcIn0+ICovfVxuICAgICAgey8qIDxhIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT7qsrDsoJztmZTrqbQ8L2E+ICovfVxuICAgICAgey8qIDwvTGluaz4gKi99XG4gICAgICB7LyogPElhbXBvcnRcbiAgICAgICAgaWRlbnRpZmljYXRpb25Db2RlPXtcImlkZW50aWZpZXJcIn1cbiAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgcGc6IFwiaW5pY2lzXCIsXG4gICAgICAgICAgcGF5X21ldGhvZDogXCJjYXJkXCIsXG4gICAgICAgICAgbWVyY2hhbnRfdWlkOiBcIm1lcmNoYW50X1wiICsgbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgbmFtZTogXCLso7zrrLjrqoU66rKw7KCc7YWM7Iqk7Yq4XCIsXG4gICAgICAgICAgYW1vdW50OiAyMjIsXG4gICAgICAgICAgYnV5ZXJfZW1haWw6IFwiYnV5ZXJAZW1haWwuY29tXCIsXG4gICAgICAgICAgYnV5ZXJfbmFtZTogXCLsoJXsp4DsirlcIixcbiAgICAgICAgICBidXllcl90ZWw6IFwiMDEwLTEyMzQtNTY3OFwiLFxuICAgICAgICAgIGJ1eWVyX2FkZHI6IFwi7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsgrzshLHrj5lcIixcbiAgICAgICAgICBidXllcl9wb3N0Y29kZTogXCIxMjMtNDU2XCIsXG4gICAgICAgICAgbV9yZWRpcmVjdF91cmw6IFwiaHR0cHM6Ly93d3cueW91cmRvbWFpbi5jb20vcGF5bWVudHMvY29tcGxldGVcIixcbiAgICAgICAgfX1cbiAgICAgICAganF1ZXJ5TG9hZGVkPXt0cnVlfVxuICAgICAgICBvbkZhaWxlZD17aGFuZGxlRmFpbGVkfVxuICAgICAgICBvblN1Y2Nlc3M9e2hhbmRsZVN1Y2Nlc3N9XG4gICAgICAgIHJlbmRlcj17KHJlbmRlclByb3BzKSA9PiAoXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLnBheV9idG59PuqysOygnO2VmOq4sDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgLz4gKi99XG4gICAgICB7Y29uc29sZS5sb2cod2luZG93LklNUCl9XG4gICAgICB7Lyoge0lNUC5yZXF1ZXN0cGF5KFxuICAgICAgICB7XG4gICAgICAgICAgcGc6IFwibmljZVwiLCAvLyB2ZXJzaW9uIDEuMS4w67aA7YSwIOyngOybkC5cbiAgICAgICAgICBwYXlfbWV0aG9kOiBcImNhcmRcIixcbiAgICAgICAgICBtZXJjaGFudF91aWQ6IFwibWVyY2hhbnRfXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICBuYW1lOiBcIuyjvOusuOuqhTrqsrDsoJzthYzsiqTtirhcIixcbiAgICAgICAgICBhbW91bnQ6IDE0MDAwLFxuICAgICAgICAgIGJ1eWVyX2VtYWlsOiBcImlhbXBvcnRAc2lvdC5kb1wiLFxuICAgICAgICAgIGJ1eWVyX25hbWU6IFwi6rWs66ek7J6Q7J2066aEXCIsXG4gICAgICAgICAgYnV5ZXJfdGVsOiBcIjAxMC0xMjM0LTU2NzhcIixcbiAgICAgICAgICBidXllcl9hZGRyOiBcIuyEnOyauO2KueuzhOyLnCDqsJXrgqjqtawg7IK87ISx64+ZXCIsXG4gICAgICAgICAgYnV5ZXJfcG9zdGNvZGU6IFwiMTIzLTQ1NlwiLFxuICAgICAgICAgIG1fcmVkaXJlY3RfdXJsOiBcImh0dHBzOi8vd3d3LnlvdXJkb21haW4uY29tL3BheW1lbnRzL2NvbXBsZXRlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJzcCBcIiwgcnNwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnIgXCIsIHJlcy5lcnJvcl9tc2cpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKX0gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXg6IDEsXG4gICAgbWFyZ2luOiAyMCxcbiAgfSxcbiAgcGF5X2J0bjoge1xuICAgIHdpZHRoOiAzMDAsXG4gICAgYm9yZGVyOiAwLFxuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})