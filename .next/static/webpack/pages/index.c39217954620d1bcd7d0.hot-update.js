webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-iamport */ \"./node_modules/react-iamport/dist/index.js\");\n/* harmony import */ var react_iamport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_iamport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/kangjinhee/personal/react-web-iamport-nicepay/src/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import { Link } from \"next/link\";\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var handlePaments = function handlePaments(e) {\n    console.log(\"왜 아무것도 안뜨나요?\", e);\n\n    try {\n      IMP.request_pay({\n        pg: \"nice\",\n        // version 1.1.0부터 지원.\n        pay_method: \"card\",\n        merchant_uid: \"merchant_\" + new Date().getTime(),\n        name: \"주문명:결제테스트\",\n        amount: 14000,\n        buyer_email: \"iamport@siot.do\",\n        buyer_name: \"구매자이름\",\n        buyer_tel: \"010-1234-5678\",\n        buyer_addr: \"서울특별시 강남구 삼성동\",\n        buyer_postcode: \"123-456\",\n        m_redirect_url: \"https://www.yourdomain.com/payments/complete\"\n      }, function (res) {\n        if (res.success) {\n          console.log(\"rsp \", rsp);\n        } else {\n          console.log(\"err \", res.error_msg);\n        }\n      });\n    } catch (e) {\n      console.log(\"error \", e);\n    }\n  };\n\n  var arrowFun = function arrowFun(text) {\n    console.log(\"####################\");\n    console.log(text);\n    console.log(\"####################\");\n  }; // useEffect(() => {\n  //   if (window.IMP) {\n  //     const { IMP } = window;\n  //     IMP.init(\"imp94304194\");\n  //   }\n  // }, []);\n\n\n  return __jsx(\"div\", {\n    style: styles.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"https://code.jquery.com/jquery-1.12.4.min.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    type: \"text/javascript\",\n    src: \"https://cdn.iamport.kr/js/iamport.payment-1.1.5.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  })), __jsx(\"span\", {\n    style: styles.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, \"iamport Nicepay Payments\"), __jsx(\"button\", {\n    style: styles.pay_btn,\n    onClick: arrowFun,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, \"paments\"));\n};\n\n_s(Index, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Index;\nvar styles = {\n  container: {\n    display: \"flex\",\n    flex: 1,\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  },\n  title: {\n    flex: 1,\n    margin: 20\n  },\n  pay_btn: {\n    width: 300,\n    margin: 10,\n    border: 0\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVQYW1lbnRzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJJTVAiLCJyZXF1ZXN0X3BheSIsInBnIiwicGF5X21ldGhvZCIsIm1lcmNoYW50X3VpZCIsIkRhdGUiLCJnZXRUaW1lIiwibmFtZSIsImFtb3VudCIsImJ1eWVyX2VtYWlsIiwiYnV5ZXJfbmFtZSIsImJ1eWVyX3RlbCIsImJ1eWVyX2FkZHIiLCJidXllcl9wb3N0Y29kZSIsIm1fcmVkaXJlY3RfdXJsIiwicmVzIiwic3VjY2VzcyIsInJzcCIsImVycm9yX21zZyIsImFycm93RnVuIiwidGV4dCIsInN0eWxlcyIsImNvbnRhaW5lciIsInRpdGxlIiwicGF5X2J0biIsImRpc3BsYXkiLCJmbGV4IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJ3aWR0aCIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUMzQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkYsQ0FBNUI7O0FBQ0EsUUFBSTtBQUNGRyxTQUFHLENBQUNDLFdBQUosQ0FDRTtBQUNFQyxVQUFFLEVBQUUsTUFETjtBQUNjO0FBQ1pDLGtCQUFVLEVBQUUsTUFGZDtBQUdFQyxvQkFBWSxFQUFFLGNBQWMsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBSDlCO0FBSUVDLFlBQUksRUFBRSxXQUpSO0FBS0VDLGNBQU0sRUFBRSxLQUxWO0FBTUVDLG1CQUFXLEVBQUUsaUJBTmY7QUFPRUMsa0JBQVUsRUFBRSxPQVBkO0FBUUVDLGlCQUFTLEVBQUUsZUFSYjtBQVNFQyxrQkFBVSxFQUFFLGVBVGQ7QUFVRUMsc0JBQWMsRUFBRSxTQVZsQjtBQVdFQyxzQkFBYyxFQUFFO0FBWGxCLE9BREYsRUFjRSxVQUFDQyxHQUFELEVBQVM7QUFDUCxZQUFJQSxHQUFHLENBQUNDLE9BQVIsRUFBaUI7QUFDZmxCLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9Ca0IsR0FBcEI7QUFDRCxTQUZELE1BRU87QUFDTG5CLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CZ0IsR0FBRyxDQUFDRyxTQUF4QjtBQUNEO0FBQ0YsT0FwQkg7QUFzQkQsS0F2QkQsQ0F1QkUsT0FBT3JCLENBQVAsRUFBVTtBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixDQUF0QjtBQUNEO0FBQ0YsR0E1QkQ7O0FBOEJBLE1BQU1zQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDekJ0QixXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWXFCLElBQVo7QUFDQXRCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0QsR0FKRCxDQWpDa0IsQ0F1Q2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FDRTtBQUFLLFNBQUssRUFBRXNCLE1BQU0sQ0FBQ0MsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLGlCQURQO0FBRUUsT0FBRyxFQUFDLDhDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQ0UsUUFBSSxFQUFDLGlCQURQO0FBRUUsT0FBRyxFQUFDLG9EQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLEVBV0U7QUFBTSxTQUFLLEVBQUVELE1BQU0sQ0FBQ0UsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FYRixFQVlFO0FBQVEsU0FBSyxFQUFFRixNQUFNLENBQUNHLE9BQXRCO0FBQStCLFdBQU8sRUFBRUwsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLENBREY7QUFrQkQsQ0FoRUQ7O0dBQU0xQixLO1VBQ1dFLHFEOzs7S0FEWEYsSztBQWtFTixJQUFNNEIsTUFBTSxHQUFHO0FBQ2JDLFdBQVMsRUFBRTtBQUNURyxXQUFPLEVBQUUsTUFEQTtBQUVUQyxRQUFJLEVBQUUsQ0FGRztBQUdUQyxpQkFBYSxFQUFFLFFBSE47QUFJVEMsY0FBVSxFQUFFO0FBSkgsR0FERTtBQU9iTCxPQUFLLEVBQUU7QUFDTEcsUUFBSSxFQUFFLENBREQ7QUFFTEcsVUFBTSxFQUFFO0FBRkgsR0FQTTtBQVdiTCxTQUFPLEVBQUU7QUFDUE0sU0FBSyxFQUFFLEdBREE7QUFFUEQsVUFBTSxFQUFFLEVBRkQ7QUFHUEUsVUFBTSxFQUFFO0FBSEQ7QUFYSSxDQUFmO0FBaUJldEMsb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSWFtcG9ydCBmcm9tIFwicmVhY3QtaWFtcG9ydFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlUGFtZW50cyA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCLsmZwg7JWE66y06rKD64+EIOyViOucqOuCmOyalD9cIiwgZSk7XG4gICAgdHJ5IHtcbiAgICAgIElNUC5yZXF1ZXN0X3BheShcbiAgICAgICAge1xuICAgICAgICAgIHBnOiBcIm5pY2VcIiwgLy8gdmVyc2lvbiAxLjEuMOu2gO2EsCDsp4Dsm5AuXG4gICAgICAgICAgcGF5X21ldGhvZDogXCJjYXJkXCIsXG4gICAgICAgICAgbWVyY2hhbnRfdWlkOiBcIm1lcmNoYW50X1wiICsgbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgbmFtZTogXCLso7zrrLjrqoU66rKw7KCc7YWM7Iqk7Yq4XCIsXG4gICAgICAgICAgYW1vdW50OiAxNDAwMCxcbiAgICAgICAgICBidXllcl9lbWFpbDogXCJpYW1wb3J0QHNpb3QuZG9cIixcbiAgICAgICAgICBidXllcl9uYW1lOiBcIuq1rOunpOyekOydtOumhFwiLFxuICAgICAgICAgIGJ1eWVyX3RlbDogXCIwMTAtMTIzNC01Njc4XCIsXG4gICAgICAgICAgYnV5ZXJfYWRkcjogXCLshJzsmrjtirnrs4Tsi5wg6rCV64Ko6rWsIOyCvOyEseuPmVwiLFxuICAgICAgICAgIGJ1eWVyX3Bvc3Rjb2RlOiBcIjEyMy00NTZcIixcbiAgICAgICAgICBtX3JlZGlyZWN0X3VybDogXCJodHRwczovL3d3dy55b3VyZG9tYWluLmNvbS9wYXltZW50cy9jb21wbGV0ZVwiLFxuICAgICAgICB9LFxuICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJzcCBcIiwgcnNwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnIgXCIsIHJlcy5lcnJvcl9tc2cpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIFwiLCBlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXJyb3dGdW4gPSAodGV4dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XG4gICAgY29uc29sZS5sb2codGV4dCk7XG4gICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICh3aW5kb3cuSU1QKSB7XG4gIC8vICAgICBjb25zdCB7IElNUCB9ID0gd2luZG93O1xuICAvLyAgICAgSU1QLmluaXQoXCJpbXA5NDMwNDE5NFwiKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMS4xMi40Lm1pbi5qc1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmlhbXBvcnQua3IvanMvaWFtcG9ydC5wYXltZW50LTEuMS41LmpzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+aWFtcG9ydCBOaWNlcGF5IFBheW1lbnRzPC9zcGFuPlxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLnBheV9idG59IG9uQ2xpY2s9e2Fycm93RnVufT5cbiAgICAgICAgcGFtZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXg6IDEsXG4gICAgbWFyZ2luOiAyMCxcbiAgfSxcbiAgcGF5X2J0bjoge1xuICAgIHdpZHRoOiAzMDAsXG4gICAgbWFyZ2luOiAxMCxcbiAgICBib3JkZXI6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})