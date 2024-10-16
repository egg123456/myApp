"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmywebpack"] = self["webpackChunkmywebpack"] || []).push([["src_routes_ceremony_services_index_js"],{

/***/ "./src/routes/ceremony/services/index.js":
/*!***********************************************!*\
  !*** ./src/routes/ceremony/services/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCeremonyBookApi: () => (/* binding */ addCeremonyBookApi),\n/* harmony export */   deleteCeremonyBookApi: () => (/* binding */ deleteCeremonyBookApi),\n/* harmony export */   editCeremonyBookApi: () => (/* binding */ editCeremonyBookApi),\n/* harmony export */   fetchCeremonyBookDetail: () => (/* binding */ fetchCeremonyBookDetail),\n/* harmony export */   fetchCeremonyBooks: () => (/* binding */ fetchCeremonyBooks),\n/* harmony export */   fetchCeremonyRecord: () => (/* binding */ fetchCeremonyRecord)\n/* harmony export */ });\n/* harmony import */ var _utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/hecateRequest */ \"./src/utils/hecateRequest.js\");\n\n\n/**\n * @description: 获取ceremony\n * @param {*} params\n * @return {*}\n */\nconst fetchCeremonyRecord = params => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/getCeremonyRecord', {\n    method: 'GET',\n    params\n  });\n};\n\n/**\n * @description: 获取ceremonyBooks\n * @param {*} params\n * @return {*}\n */\nconst fetchCeremonyBooks = params => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/getCeremonyBooks', {\n    method: 'GET',\n    params\n  });\n};\n\n/**\n * @description: 获取ceremonyDetail\n * @param {*} params\n * @return {*}\n */\nconst fetchCeremonyBookDetail = params => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/getCeremonyBookDetail', {\n    method: 'GET',\n    params\n  });\n};\n\n/**\n * @description: 添加事项\n * @param {*} params\n * @return {*}\n */\nconst addCeremonyBookApi = data => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/addCeremonyBook', {\n    method: 'POSt',\n    data\n  });\n};\n\n/**\n * @description: 编辑事项\n * @param {*} params\n * @return {*}\n */\nconst editCeremonyBookApi = data => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/editCeremonyBook', {\n    method: 'POSt',\n    data\n  });\n};\n\n/**\n * @description: 删除事项\n * @param {*} params\n * @return {*}\n */\nconst deleteCeremonyBookApi = data => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/deleteCeremonyBook', {\n    method: 'POSt',\n    data\n  });\n};\n\n//# sourceURL=webpack://mywebpack/./src/routes/ceremony/services/index.js?");

/***/ })

}]);