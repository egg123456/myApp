"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmywebpack"] = self["webpackChunkmywebpack"] || []).push([["src_routes_eventManage_services_plan_js"],{

/***/ "./src/routes/eventManage/services/plan.js":
/*!*************************************************!*\
  !*** ./src/routes/eventManage/services/plan.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPlanApi: () => (/* binding */ addPlanApi),\n/* harmony export */   deletePlanApi: () => (/* binding */ deletePlanApi),\n/* harmony export */   editPlanApi: () => (/* binding */ editPlanApi),\n/* harmony export */   fetchPlanDetail: () => (/* binding */ fetchPlanDetail),\n/* harmony export */   fetchPlanList: () => (/* binding */ fetchPlanList)\n/* harmony export */ });\n/* harmony import */ var _utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/hecateRequest */ \"./src/utils/hecateRequest.js\");\n\n\n/**\n * @description: 获取事项\n * @param {*} params\n * @return {*}\n */\nconst fetchPlanList = params => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/event/getPlanList', {\n    method: 'GET',\n    params\n  });\n};\n\n/**\n * @description: 添加事项\n * @param {*} params\n * @return {*}\n */\nconst addPlanApi = data => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/event/addPlan', {\n    method: 'POSt',\n    data\n  });\n};\n\n/**\n * @description: 编辑事项\n * @param {*} params\n * @return {*}\n */\nconst editPlanApi = data => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/event/editPlan', {\n    method: 'POSt',\n    data\n  });\n};\n\n/**\n * @description: 删除事项\n * @param {*} params\n * @return {*}\n */\nconst deletePlanApi = data => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/event/deletePlan', {\n    method: 'POSt',\n    data\n  });\n};\n\n/**\n * @description: 事项详情\n * @param {*} params\n * @return {*}\n */\nconst fetchPlanDetail = params => {\n  return (0,_utils_hecateRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/api/event/planDetailById', {\n    method: 'get',\n    params\n  });\n};\n\n//# sourceURL=webpack://mywebpack/./src/routes/eventManage/services/plan.js?");

/***/ })

}]);