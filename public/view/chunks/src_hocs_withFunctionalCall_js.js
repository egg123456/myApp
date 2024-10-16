"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmywebpack"] = self["webpackChunkmywebpack"] || []).push([["src_hocs_withFunctionalCall_js"],{

/***/ "./src/hocs/withFunctionalCall.js":
/*!****************************************!*\
  !*** ./src/hocs/withFunctionalCall.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n// 这个函数本质不是 hoc\n// 所以包裹组件时必须放在最外层，否则无法拿到 OriginalModal.show 方法\nconst withFunctionalCall = OriginalModal => {\n  OriginalModal.show = config => {\n    const div = document.createElement('div');\n    document.body.appendChild(div);\n    function destroy() {\n      const unmountResult = react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(div);\n      if (unmountResult && div.parentNode) {\n        div.parentNode.removeChild(div);\n      }\n    }\n    function render(props) {\n      react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OriginalModal, _extends({\n        visible: true,\n        onOk: () => destroy(),\n        onCancel: () => destroy(),\n        onClose: () => destroy()\n      }, props)), div);\n    }\n    render(config);\n    return {\n      close: destroy\n    };\n  };\n  return OriginalModal;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withFunctionalCall);\n\n//# sourceURL=webpack://mywebpack/./src/hocs/withFunctionalCall.js?");

/***/ })

}]);