webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-iamport */ \"./node_modules/react-iamport/dist/index.js\");\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_iamport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/kangjinhee/personal/react-web-iamport-nicepay/src/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import { Link } from \"next/link\";\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(); // const IMP = window.IMP;\n\n  var handleSuccess = function handleSuccess(res) {\n    console.group(\"handleSuccess\");\n    console.log(res);\n    console.groupEnd(\"handleSuccess\");\n  };\n\n  var handleFailed = function handleFailed(err) {\n    console.group(\"handleFailed\");\n    console.log(err);\n    console.groupEnd(\"handleFailed\");\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (window.IMP) {\n      console.log(window.IMP);\n    } // console.log(IMP);\n    // IMP.init(\"imp94304194\"); // 초기화\n\n  });\n  return __jsx(\"div\", {\n    style: styles.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    style: styles.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"iamport Nicepay Payments\"));\n};\n\n_s(Index, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Index;\nvar styles = {\n  container: {\n    display: \"flex\",\n    flex: 1,\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  },\n  title: {\n    flex: 1,\n    margin: 20\n  },\n  pay_btn: {\n    width: 300,\n    border: 0\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVTdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImdyb3VwIiwibG9nIiwiZ3JvdXBFbmQiLCJoYW5kbGVGYWlsZWQiLCJlcnIiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJJTVAiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ0aXRsZSIsImRpc3BsYXkiLCJmbGV4IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJwYXlfYnRuIiwid2lkdGgiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQURrQixDQUdsQjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBUztBQUM3QkMsV0FBTyxDQUFDQyxLQUFSLENBQWMsZUFBZDtBQUNBRCxXQUFPLENBQUNFLEdBQVIsQ0FBWUgsR0FBWjtBQUNBQyxXQUFPLENBQUNHLFFBQVIsQ0FBaUIsZUFBakI7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBUztBQUM1QkwsV0FBTyxDQUFDQyxLQUFSLENBQWMsY0FBZDtBQUNBRCxXQUFPLENBQUNFLEdBQVIsQ0FBWUcsR0FBWjtBQUNBTCxXQUFPLENBQUNHLFFBQVIsQ0FBaUIsY0FBakI7QUFDRCxHQUpEOztBQU1BRyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFNLENBQUNDLEdBQVgsRUFBZ0I7QUFDZFIsYUFBTyxDQUFDRSxHQUFSLENBQVlLLE1BQU0sQ0FBQ0MsR0FBbkI7QUFDRCxLQUhhLENBSWQ7QUFDQTs7QUFDRCxHQU5RLENBQVQ7QUFRQSxTQUNFO0FBQUssU0FBSyxFQUFFQyxNQUFNLENBQUNDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFNBQUssRUFBRUQsTUFBTSxDQUFDRSxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLENBREY7QUE4QkQsQ0F2REQ7O0dBQU1oQixLO1VBQ1dFLHFEOzs7S0FEWEYsSztBQXlETixJQUFNYyxNQUFNLEdBQUc7QUFDYkMsV0FBUyxFQUFFO0FBQ1RFLFdBQU8sRUFBRSxNQURBO0FBRVRDLFFBQUksRUFBRSxDQUZHO0FBR1RDLGlCQUFhLEVBQUUsUUFITjtBQUlUQyxjQUFVLEVBQUU7QUFKSCxHQURFO0FBT2JKLE9BQUssRUFBRTtBQUNMRSxRQUFJLEVBQUUsQ0FERDtBQUVMRyxVQUFNLEVBQUU7QUFGSCxHQVBNO0FBV2JDLFNBQU8sRUFBRTtBQUNQQyxTQUFLLEVBQUUsR0FEQTtBQUVQQyxVQUFNLEVBQUU7QUFGRDtBQVhJLENBQWY7QUFnQmV4QixvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJYW1wb3J0IGZyb20gXCJyZWFjdC1pYW1wb3J0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBjb25zdCBJTVAgPSB3aW5kb3cuSU1QO1xuXG4gIGNvbnN0IGhhbmRsZVN1Y2Nlc3MgPSAocmVzKSA9PiB7XG4gICAgY29uc29sZS5ncm91cChcImhhbmRsZVN1Y2Nlc3NcIik7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKFwiaGFuZGxlU3VjY2Vzc1wiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGYWlsZWQgPSAoZXJyKSA9PiB7XG4gICAgY29uc29sZS5ncm91cChcImhhbmRsZUZhaWxlZFwiKTtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoXCJoYW5kbGVGYWlsZWRcIik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93LklNUCkge1xuICAgICAgY29uc29sZS5sb2cod2luZG93LklNUCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKElNUCk7XG4gICAgLy8gSU1QLmluaXQoXCJpbXA5NDMwNDE5NFwiKTsgLy8g7LSI6riw7ZmUXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnRpdGxlfT5pYW1wb3J0IE5pY2VwYXkgUGF5bWVudHM8L3NwYW4+XG4gICAgICB7LyogPExpbmsgaHJlZj17XCIvcGF5bWVudFwifT4gKi99XG4gICAgICB7LyogPGEgb25DbGljaz17aGFuZGxlQ2xpY2t9PuqysOygnO2ZlOuptDwvYT4gKi99XG4gICAgICB7LyogPC9MaW5rPiAqL31cbiAgICAgIHsvKiB7SU1QLnJlcXVlc3RwYXkoXG4gICAgICAgIHtcbiAgICAgICAgICBwZzogXCJuaWNlXCIsIC8vIHZlcnNpb24gMS4xLjDrtoDthLAg7KeA7JuQLlxuICAgICAgICAgIHBheV9tZXRob2Q6IFwiY2FyZFwiLFxuICAgICAgICAgIG1lcmNoYW50X3VpZDogXCJtZXJjaGFudF9cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgIG5hbWU6IFwi7KO866y466qFOuqysOygnO2FjOyKpO2KuFwiLFxuICAgICAgICAgIGFtb3VudDogMTQwMDAsXG4gICAgICAgICAgYnV5ZXJfZW1haWw6IFwiaWFtcG9ydEBzaW90LmRvXCIsXG4gICAgICAgICAgYnV5ZXJfbmFtZTogXCLqtazrp6TsnpDsnbTrpoRcIixcbiAgICAgICAgICBidXllcl90ZWw6IFwiMDEwLTEyMzQtNTY3OFwiLFxuICAgICAgICAgIGJ1eWVyX2FkZHI6IFwi7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsgrzshLHrj5lcIixcbiAgICAgICAgICBidXllcl9wb3N0Y29kZTogXCIxMjMtNDU2XCIsXG4gICAgICAgICAgbV9yZWRpcmVjdF91cmw6IFwiaHR0cHM6Ly93d3cueW91cmRvbWFpbi5jb20vcGF5bWVudHMvY29tcGxldGVcIixcbiAgICAgICAgfSxcbiAgICAgICAgKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicnNwIFwiLCByc3ApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVyciBcIiwgcmVzLmVycm9yX21zZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApfSAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleDogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZmxleDogMSxcbiAgICBtYXJnaW46IDIwLFxuICB9LFxuICBwYXlfYnRuOiB7XG4gICAgd2lkdGg6IDMwMCxcbiAgICBib3JkZXI6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})