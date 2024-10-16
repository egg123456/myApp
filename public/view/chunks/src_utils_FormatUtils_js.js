"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmywebpack"] = self["webpackChunkmywebpack"] || []).push([["src_utils_FormatUtils_js"],{

/***/ "./src/utils/FormatUtils.js":
/*!**********************************!*\
  !*** ./src/utils/FormatUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormatDateTime: () => (/* binding */ FormatDateTime),\n/* harmony export */   dateTimeFormat: () => (/* binding */ dateTimeFormat),\n/* harmony export */   dealDateTimeToDayjs: () => (/* binding */ dealDateTimeToDayjs),\n/* harmony export */   toDayJs: () => (/* binding */ toDayJs)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';\nconst FormatDateTime = function (val) {\n  let defaultVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';\n  if (!val) {\n    return defaultVal;\n  }\n  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(val).format(dateTimeFormat);\n};\nconst toDayJs = val => {\n  if (!val) return undefined;\n  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(val);\n};\nconst dealDateTimeToDayjs = data => {\n  const obj = data;\n  if (Array.isArray(obj)) {\n    obj.forEach(item => {\n      dealDateTimeToDayjs(item);\n    });\n  } else if (typeof obj === 'object') {\n    // 格式化时间\n    Object.keys(obj).forEach(key => {\n      const currVal = obj[key];\n      console.log(currVal, key, 'key');\n      if (Array.isArray(currVal)) {\n        currVal.forEach(item => {\n          dealDateTimeToDayjs(item);\n        });\n      } else if (typeof currVal === 'object') {\n        dealDateTimeToDayjs(currVal);\n      } else {\n        if (/^\\d{4}-\\d{2}-\\d{2}/.test(obj[key])) {\n          obj[key] = toDayJs(obj[key]);\n          // obj[key] = dayjs(obj[key]).valueOf();\n        }\n      }\n    });\n  }\n\n  console.log(obj, 'dealDateTimeToDayjsb');\n  return obj;\n};\n\n//# sourceURL=webpack://mywebpack/./src/utils/FormatUtils.js?");

/***/ })

}]);