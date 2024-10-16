"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmywebpack"] = self["webpackChunkmywebpack"] || []).push([["src_routes_eventManage_services_index_js"],{

/***/ "./src/routes/eventManage/services/index.js":
/*!**************************************************!*\
  !*** ./src/routes/eventManage/services/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEventApi: () => (/* binding */ addEventApi),\n/* harmony export */   deleteEventApi: () => (/* binding */ deleteEventApi),\n/* harmony export */   editEventApi: () => (/* binding */ editEventApi),\n/* harmony export */   fetchEventDetail: () => (/* binding */ fetchEventDetail),\n/* harmony export */   fetchEventList: () => (/* binding */ fetchEventList),\n/* harmony export */   fetchEventTimeList: () => (/* binding */ fetchEventTimeList)\n/* harmony export */ });\n/* harmony import */ var _utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/hecateRequest */ \"./src/utils/hecateRequest.js\");\n\n\n/**\n * @description: 获取事项\n * @param {*} params\n * @return {*}\n */\nconst fetchEventList = params => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/event/getEventList', {\n    method: 'GET',\n    params\n  });\n};\n\n/**\n * @description: 添加事项\n * @param {*} params\n * @return {*}\n */\nconst addEventApi = data => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/event/addEvent', {\n    method: 'POSt',\n    data\n  });\n};\n\n/**\n * @description: 编辑事项\n * @param {*} params\n * @return {*}\n */\nconst editEventApi = data => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/event/editEvent', {\n    method: 'POSt',\n    data\n  });\n};\n\n/**\n * @description: 删除事项\n * @param {*} params\n * @return {*}\n */\nconst deleteEventApi = data => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/event/deleteEvent', {\n    method: 'POSt',\n    data\n  });\n};\n\n/**\n * @description: 事项详情\n * @param {*} params\n * @return {*}\n */\nconst fetchEventDetail = params => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/event/eventDetailById', {\n    method: 'get',\n    params\n  });\n};\n\n/**\n * @description: 获取事项\n * @param {*} params\n * @return {*}\n */\nconst fetchEventTimeList = data => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/event/getEventTimeList', {\n    method: 'POST',\n    data\n  });\n};\n\n//# sourceURL=webpack://mywebpack/./src/routes/eventManage/services/index.js?");

/***/ })

}]);