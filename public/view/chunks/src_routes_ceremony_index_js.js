"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmywebpack"] = self["webpackChunkmywebpack"] || []).push([["src_routes_ceremony_index_js"],{

/***/ "./src/routes/ceremony/index.js":
/*!**************************************!*\
  !*** ./src/routes/ceremony/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/List */ \"./src/components/List/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ \"./src/routes/ceremony/services/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ \"./src/routes/ceremony/config/index.js\");\n\n\n\n\nconst Ceremony = () => {\n  const [listData, setListData] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({});\n  const handleSearch = params => {\n    (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchCeremonyRecord)(params).then(res => {\n      console.log(res);\n      setListData({\n        data: res.data.result\n      });\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_List__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    customItem: (0,_config__WEBPACK_IMPORTED_MODULE_3__.getCustomItem)(),\n    table: {\n      columns: _config__WEBPACK_IMPORTED_MODULE_3__.columns,\n      dataSource: listData.data\n    },\n    onSearch: handleSearch\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ceremony);\n\n//# sourceURL=webpack://mywebpack/./src/routes/ceremony/index.js?");

/***/ })

}]);