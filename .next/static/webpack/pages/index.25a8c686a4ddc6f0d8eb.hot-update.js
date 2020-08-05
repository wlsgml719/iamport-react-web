webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-iamport */ \"./node_modules/react-iamport/dist/index.js\");\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_iamport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/kangjinhee/personal/react-web-iamport-nicepay/src/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import { Link } from \"next/link\";\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(); // const IMP = window.IMP;\n\n  var handlePaments = function handlePaments() {\n    IMP.request_pay({\n      pg: \"nice\",\n      // version 1.1.0부터 지원.\n      pay_method: \"card\",\n      merchant_uid: \"merchant_\" + new Date().getTime(),\n      name: \"주문명:결제테스트\",\n      amount: 14000,\n      buyer_email: \"iamport@siot.do\",\n      buyer_name: \"구매자이름\",\n      buyer_tel: \"010-1234-5678\",\n      buyer_addr: \"서울특별시 강남구 삼성동\",\n      buyer_postcode: \"123-456\",\n      m_redirect_url: \"https://www.yourdomain.com/payments/complete\"\n    }, function (res) {\n      if (res) {\n        console.log(\"rsp \", rsp);\n      } else {\n        console.log(\"err \", res.error_msg);\n      }\n    });\n  };\n\n  var handleClick = function handleClick() {\n    console.log(\"ㅇㅓ 내가 눌렸어요.\");\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (window.IMP) {\n      var _window = window,\n          _IMP = _window.IMP;\n\n      _IMP.init(\"imp94304194\");\n    }\n  }, []);\n  return __jsx(\"div\", {\n    style: styles.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"https://code.jquery.com/jquery-1.12.4.min.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"https://cdn.iamport.kr/js/iamport.payment-1.1.5.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  })), __jsx(\"span\", {\n    style: styles.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, \"iamport Nicepay Payments\"), __jsx(\"button\", {\n    style: styles.pay_btn,\n    onClick: handleClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, \"\\uACB0\\uC81C\\uD558\\uAE30\"));\n};\n\n_s(Index, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Index;\nvar styles = {\n  container: {\n    display: \"flex\",\n    flex: 1,\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  },\n  title: {\n    flex: 1,\n    margin: 20\n  },\n  pay_btn: {\n    width: 300,\n    border: 0\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVQYW1lbnRzIiwiSU1QIiwicmVxdWVzdF9wYXkiLCJwZyIsInBheV9tZXRob2QiLCJtZXJjaGFudF91aWQiLCJEYXRlIiwiZ2V0VGltZSIsIm5hbWUiLCJhbW91bnQiLCJidXllcl9lbWFpbCIsImJ1eWVyX25hbWUiLCJidXllcl90ZWwiLCJidXllcl9hZGRyIiwiYnV5ZXJfcG9zdGNvZGUiLCJtX3JlZGlyZWN0X3VybCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyc3AiLCJlcnJvcl9tc2ciLCJoYW5kbGVDbGljayIsInVzZUVmZmVjdCIsIndpbmRvdyIsImluaXQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ0aXRsZSIsInBheV9idG4iLCJkaXNwbGF5IiwiZmxleCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwid2lkdGgiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FEa0IsQ0FHbEI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCQyxPQUFHLENBQUNDLFdBQUosQ0FDRTtBQUNFQyxRQUFFLEVBQUUsTUFETjtBQUNjO0FBQ1pDLGdCQUFVLEVBQUUsTUFGZDtBQUdFQyxrQkFBWSxFQUFFLGNBQWMsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBSDlCO0FBSUVDLFVBQUksRUFBRSxXQUpSO0FBS0VDLFlBQU0sRUFBRSxLQUxWO0FBTUVDLGlCQUFXLEVBQUUsaUJBTmY7QUFPRUMsZ0JBQVUsRUFBRSxPQVBkO0FBUUVDLGVBQVMsRUFBRSxlQVJiO0FBU0VDLGdCQUFVLEVBQUUsZUFUZDtBQVVFQyxvQkFBYyxFQUFFLFNBVmxCO0FBV0VDLG9CQUFjLEVBQUU7QUFYbEIsS0FERixFQWNFLFVBQUNDLEdBQUQsRUFBUztBQUNQLFVBQUlBLEdBQUosRUFBUztBQUNQQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CQyxHQUFwQjtBQUNELE9BRkQsTUFFTztBQUNMRixlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CRixHQUFHLENBQUNJLFNBQXhCO0FBQ0Q7QUFDRixLQXBCSDtBQXNCRCxHQXZCRDs7QUF3QkEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkosV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNELEdBRkQ7O0FBSUFJLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLE1BQU0sQ0FBQ3RCLEdBQVgsRUFBZ0I7QUFBQSxvQkFDRXNCLE1BREY7QUFBQSxVQUNOdEIsSUFETSxXQUNOQSxHQURNOztBQUVkQSxVQUFHLENBQUN1QixJQUFKLENBQVMsYUFBVDtBQUNEO0FBQ0YsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLFNBQ0U7QUFBSyxTQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLGlCQURQO0FBRUUsT0FBRyxFQUFDLDhDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQ0UsUUFBSSxFQUFDLGlCQURQO0FBRUUsT0FBRyxFQUFDLG9EQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLEVBV0U7QUFBTSxTQUFLLEVBQUVELE1BQU0sQ0FBQ0UsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FYRixFQVlFO0FBQVEsU0FBSyxFQUFFRixNQUFNLENBQUNHLE9BQXRCO0FBQStCLFdBQU8sRUFBRVAsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FaRixDQURGO0FBa0JELENBMUREOztHQUFNeEIsSztVQUNXRSxxRDs7O0tBRFhGLEs7QUE0RE4sSUFBTTRCLE1BQU0sR0FBRztBQUNiQyxXQUFTLEVBQUU7QUFDVEcsV0FBTyxFQUFFLE1BREE7QUFFVEMsUUFBSSxFQUFFLENBRkc7QUFHVEMsaUJBQWEsRUFBRSxRQUhOO0FBSVRDLGNBQVUsRUFBRTtBQUpILEdBREU7QUFPYkwsT0FBSyxFQUFFO0FBQ0xHLFFBQUksRUFBRSxDQUREO0FBRUxHLFVBQU0sRUFBRTtBQUZILEdBUE07QUFXYkwsU0FBTyxFQUFFO0FBQ1BNLFNBQUssRUFBRSxHQURBO0FBRVBDLFVBQU0sRUFBRTtBQUZEO0FBWEksQ0FBZjtBQWdCZXRDLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IElhbXBvcnQgZnJvbSBcInJlYWN0LWlhbXBvcnRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIGNvbnN0IElNUCA9IHdpbmRvdy5JTVA7XG5cbiAgY29uc3QgaGFuZGxlUGFtZW50cyA9ICgpID0+IHtcbiAgICBJTVAucmVxdWVzdF9wYXkoXG4gICAgICB7XG4gICAgICAgIHBnOiBcIm5pY2VcIiwgLy8gdmVyc2lvbiAxLjEuMOu2gO2EsCDsp4Dsm5AuXG4gICAgICAgIHBheV9tZXRob2Q6IFwiY2FyZFwiLFxuICAgICAgICBtZXJjaGFudF91aWQ6IFwibWVyY2hhbnRfXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgbmFtZTogXCLso7zrrLjrqoU66rKw7KCc7YWM7Iqk7Yq4XCIsXG4gICAgICAgIGFtb3VudDogMTQwMDAsXG4gICAgICAgIGJ1eWVyX2VtYWlsOiBcImlhbXBvcnRAc2lvdC5kb1wiLFxuICAgICAgICBidXllcl9uYW1lOiBcIuq1rOunpOyekOydtOumhFwiLFxuICAgICAgICBidXllcl90ZWw6IFwiMDEwLTEyMzQtNTY3OFwiLFxuICAgICAgICBidXllcl9hZGRyOiBcIuyEnOyauO2KueuzhOyLnCDqsJXrgqjqtawg7IK87ISx64+ZXCIsXG4gICAgICAgIGJ1eWVyX3Bvc3Rjb2RlOiBcIjEyMy00NTZcIixcbiAgICAgICAgbV9yZWRpcmVjdF91cmw6IFwiaHR0cHM6Ly93d3cueW91cmRvbWFpbi5jb20vcGF5bWVudHMvY29tcGxldGVcIixcbiAgICAgIH0sXG4gICAgICAocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJzcCBcIiwgcnNwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVyciBcIiwgcmVzLmVycm9yX21zZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIuOFh+OFkyDrgrTqsIAg64iM66C47Ja07JqULlwiKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuSU1QKSB7XG4gICAgICBjb25zdCB7IElNUCB9ID0gd2luZG93O1xuICAgICAgSU1QLmluaXQoXCJpbXA5NDMwNDE5NFwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMS4xMi40Lm1pbi5qc1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmlhbXBvcnQua3IvanMvaWFtcG9ydC5wYXltZW50LTEuMS41LmpzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+aWFtcG9ydCBOaWNlcGF5IFBheW1lbnRzPC9zcGFuPlxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLnBheV9idG59IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAg6rKw7KCc7ZWY6riwXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleDogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZmxleDogMSxcbiAgICBtYXJnaW46IDIwLFxuICB9LFxuICBwYXlfYnRuOiB7XG4gICAgd2lkdGg6IDMwMCxcbiAgICBib3JkZXI6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})