webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-iamport */ \"./node_modules/react-iamport/dist/index.js\");\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_iamport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/kangjinhee/personal/react-web-iamport-nicepay/src/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import { Link } from \"next/link\";\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(); // const IMP = window.IMP;\n\n  var handlePaments = function handlePaments() {\n    IMP.request_pay({\n      pg: \"nice\",\n      // version 1.1.0부터 지원.\n      pay_method: \"card\",\n      merchant_uid: \"merchant_\" + new Date().getTime(),\n      name: \"주문명:결제테스트\",\n      amount: 14000,\n      buyer_email: \"iamport@siot.do\",\n      buyer_name: \"구매자이름\",\n      buyer_tel: \"010-1234-5678\",\n      buyer_addr: \"서울특별시 강남구 삼성동\",\n      buyer_postcode: \"123-456\",\n      m_redirect_url: \"https://www.yourdomain.com/payments/complete\"\n    }, function (res) {\n      if (res) {\n        console.log(\"rsp \", rsp);\n      } else {\n        console.log(\"err \", res.error_msg);\n      }\n    });\n  };\n\n  var handleClick = function handleClick(e) {\n    console.log(e);\n    console.log(\"ㅇㅓ 내가 눌렸어요.\");\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (window.IMP) {\n      var _window = window,\n          _IMP = _window.IMP;\n\n      _IMP.init(\"imp94304194\");\n    }\n  }, []);\n  return __jsx(\"div\", {\n    style: styles.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    style: styles.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, \"iamport Nicepay Payments\"), __jsx(\"button\", {\n    style: styles.pay_btn,\n    onClick: function onClick(e) {\n      console.log(e);\n      console.log(\"dj\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, \"\\uACB0\\uC81C\\uD558\\uAE30\"));\n};\n\n_s(Index, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Index;\nvar styles = {\n  container: {\n    display: \"flex\",\n    flex: 1,\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  },\n  title: {\n    flex: 1,\n    margin: 20\n  },\n  pay_btn: {\n    width: 300,\n    border: 0\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVQYW1lbnRzIiwiSU1QIiwicmVxdWVzdF9wYXkiLCJwZyIsInBheV9tZXRob2QiLCJtZXJjaGFudF91aWQiLCJEYXRlIiwiZ2V0VGltZSIsIm5hbWUiLCJhbW91bnQiLCJidXllcl9lbWFpbCIsImJ1eWVyX25hbWUiLCJidXllcl90ZWwiLCJidXllcl9hZGRyIiwiYnV5ZXJfcG9zdGNvZGUiLCJtX3JlZGlyZWN0X3VybCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyc3AiLCJlcnJvcl9tc2ciLCJoYW5kbGVDbGljayIsImUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbml0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwidGl0bGUiLCJwYXlfYnRuIiwiZGlzcGxheSIsImZsZXgiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsIndpZHRoIiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRGtCLENBR2xCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQkMsT0FBRyxDQUFDQyxXQUFKLENBQ0U7QUFDRUMsUUFBRSxFQUFFLE1BRE47QUFDYztBQUNaQyxnQkFBVSxFQUFFLE1BRmQ7QUFHRUMsa0JBQVksRUFBRSxjQUFjLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUg5QjtBQUlFQyxVQUFJLEVBQUUsV0FKUjtBQUtFQyxZQUFNLEVBQUUsS0FMVjtBQU1FQyxpQkFBVyxFQUFFLGlCQU5mO0FBT0VDLGdCQUFVLEVBQUUsT0FQZDtBQVFFQyxlQUFTLEVBQUUsZUFSYjtBQVNFQyxnQkFBVSxFQUFFLGVBVGQ7QUFVRUMsb0JBQWMsRUFBRSxTQVZsQjtBQVdFQyxvQkFBYyxFQUFFO0FBWGxCLEtBREYsRUFjRSxVQUFDQyxHQUFELEVBQVM7QUFDUCxVQUFJQSxHQUFKLEVBQVM7QUFDUEMsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkMsR0FBcEI7QUFDRCxPQUZELE1BRU87QUFDTEYsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkYsR0FBRyxDQUFDSSxTQUF4QjtBQUNEO0FBQ0YsS0FwQkg7QUFzQkQsR0F2QkQ7O0FBeUJBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkwsV0FBTyxDQUFDQyxHQUFSLENBQVlJLENBQVo7QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNELEdBSEQ7O0FBS0FLLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLE1BQU0sQ0FBQ3ZCLEdBQVgsRUFBZ0I7QUFBQSxvQkFDRXVCLE1BREY7QUFBQSxVQUNOdkIsSUFETSxXQUNOQSxHQURNOztBQUVkQSxVQUFHLENBQUN3QixJQUFKLENBQVMsYUFBVDtBQUNEO0FBQ0YsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLFNBQ0U7QUFBSyxTQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdFO0FBQU0sU0FBSyxFQUFFRCxNQUFNLENBQUNFLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBWEYsRUFZRTtBQUNFLFNBQUssRUFBRUYsTUFBTSxDQUFDRyxPQURoQjtBQUVFLFdBQU8sRUFBRSxpQkFBVVAsQ0FBVixFQUFhO0FBQ3BCTCxhQUFPLENBQUNDLEdBQVIsQ0FBWUksQ0FBWjtBQUNBTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQVpGLENBREY7QUF3QkQsQ0FsRUQ7O0dBQU1yQixLO1VBQ1dFLHFEOzs7S0FEWEYsSztBQW9FTixJQUFNNkIsTUFBTSxHQUFHO0FBQ2JDLFdBQVMsRUFBRTtBQUNURyxXQUFPLEVBQUUsTUFEQTtBQUVUQyxRQUFJLEVBQUUsQ0FGRztBQUdUQyxpQkFBYSxFQUFFLFFBSE47QUFJVEMsY0FBVSxFQUFFO0FBSkgsR0FERTtBQU9iTCxPQUFLLEVBQUU7QUFDTEcsUUFBSSxFQUFFLENBREQ7QUFFTEcsVUFBTSxFQUFFO0FBRkgsR0FQTTtBQVdiTCxTQUFPLEVBQUU7QUFDUE0sU0FBSyxFQUFFLEdBREE7QUFFUEMsVUFBTSxFQUFFO0FBRkQ7QUFYSSxDQUFmO0FBZ0JldkMsb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSWFtcG9ydCBmcm9tIFwicmVhY3QtaWFtcG9ydFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gY29uc3QgSU1QID0gd2luZG93LklNUDtcblxuICBjb25zdCBoYW5kbGVQYW1lbnRzID0gKCkgPT4ge1xuICAgIElNUC5yZXF1ZXN0X3BheShcbiAgICAgIHtcbiAgICAgICAgcGc6IFwibmljZVwiLCAvLyB2ZXJzaW9uIDEuMS4w67aA7YSwIOyngOybkC5cbiAgICAgICAgcGF5X21ldGhvZDogXCJjYXJkXCIsXG4gICAgICAgIG1lcmNoYW50X3VpZDogXCJtZXJjaGFudF9cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBuYW1lOiBcIuyjvOusuOuqhTrqsrDsoJzthYzsiqTtirhcIixcbiAgICAgICAgYW1vdW50OiAxNDAwMCxcbiAgICAgICAgYnV5ZXJfZW1haWw6IFwiaWFtcG9ydEBzaW90LmRvXCIsXG4gICAgICAgIGJ1eWVyX25hbWU6IFwi6rWs66ek7J6Q7J2066aEXCIsXG4gICAgICAgIGJ1eWVyX3RlbDogXCIwMTAtMTIzNC01Njc4XCIsXG4gICAgICAgIGJ1eWVyX2FkZHI6IFwi7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsgrzshLHrj5lcIixcbiAgICAgICAgYnV5ZXJfcG9zdGNvZGU6IFwiMTIzLTQ1NlwiLFxuICAgICAgICBtX3JlZGlyZWN0X3VybDogXCJodHRwczovL3d3dy55b3VyZG9tYWluLmNvbS9wYXltZW50cy9jb21wbGV0ZVwiLFxuICAgICAgfSxcbiAgICAgIChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicnNwIFwiLCByc3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyIFwiLCByZXMuZXJyb3JfbXNnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNvbnNvbGUubG9nKFwi44WH44WTIOuCtOqwgCDriIzroLjslrTsmpQuXCIpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5JTVApIHtcbiAgICAgIGNvbnN0IHsgSU1QIH0gPSB3aW5kb3c7XG4gICAgICBJTVAuaW5pdChcImltcDk0MzA0MTk0XCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICB7LyogPEhlYWQ+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMS4xMi40Lm1pbi5qc1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmlhbXBvcnQua3IvanMvaWFtcG9ydC5wYXltZW50LTEuMS41LmpzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPiAqL31cbiAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PmlhbXBvcnQgTmljZXBheSBQYXltZW50czwvc3Bhbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e3N0eWxlcy5wYXlfYnRufVxuICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGpcIik7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIOqysOygnO2VmOq4sFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXg6IDEsXG4gICAgbWFyZ2luOiAyMCxcbiAgfSxcbiAgcGF5X2J0bjoge1xuICAgIHdpZHRoOiAzMDAsXG4gICAgYm9yZGVyOiAwLFxuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})