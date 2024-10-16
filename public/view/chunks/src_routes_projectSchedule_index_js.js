"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmywebpack"] = self["webpackChunkmywebpack"] || []).push([["src_routes_projectSchedule_index_js"],{

/***/ "./src/routes/projectSchedule/index.js":
/*!*********************************************!*\
  !*** ./src/routes/projectSchedule/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/tag/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/calendar/index.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/routes/projectSchedule/index.css\");\n/* harmony import */ var _utils_FormatUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/FormatUtils */ \"./src/utils/FormatUtils.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst second = 1000;\nconst hours = 60 * 60 * second;\nconst day = 24 * hours;\nconst colorMap = {\n  'dev': '#87d068',\n  'coordinate': '#2db7f5',\n  'extra': '#f50'\n};\nconst obtainTime = (item, tempTime) => {\n  const startTime = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(item.beginTime).valueOf();\n  const endTime = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(item.endTime).valueOf();\n  return startTime <= tempTime && endTime > tempTime;\n};\nconst getTagList = _ref => {\n  let {\n    eventTimeList = [],\n    currTime\n  } = _ref;\n  const baseHeight = 22;\n  const tagStyle = {\n    width: '12.5%',\n    height: baseHeight,\n    marginRight: 0,\n    padding: 0,\n    overflow: 'hidden',\n    verticalAlign: 'bottom'\n  };\n  const arr = new Array(9);\n  const startTimeOfDay = currTime + 9 * hours;\n  const sleepTime = currTime + 12 * hours;\n  let usedTimeLength = 0;\n  for (var i = 0; i < arr.length; i++) {\n    const tempTime = startTimeOfDay + hours * i;\n    if (i === 3) {\n      continue;\n    }\n    const task = eventTimeList.find(item => {\n      const startTime = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(item.beginTime).valueOf();\n      const endTime = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(item.endTime).valueOf();\n      return startTime <= tempTime && endTime > tempTime;\n    });\n    if (task) {\n      const hasSleep = obtainTime(task, sleepTime);\n      const endOfWorkDay = currTime + 18 * hours;\n      const endVal = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(task.endTime).valueOf();\n      const startTime = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(task.beginTime).valueOf();\n      const tagLength = ((endVal >= endOfWorkDay ? endOfWorkDay : endVal) - (startTime < startTimeOfDay ? startTimeOfDay : startTime)) / hours - (hasSleep ? 1 : 0);\n      i += tagLength - (endVal >= endOfWorkDay && startTime <= sleepTime ? 0 : 1);\n      usedTimeLength += tagLength;\n      arr[i] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        style: {\n          ...tagStyle,\n          width: `${12.5 * tagLength}%`\n        },\n        color: colorMap[task.timeType],\n        title: task.name,\n        onClick: () => task.link && window.open(task.link)\n      }, tagLength > 2 ? task.name : '');\n    } else {\n      arr[i] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        style: tagStyle,\n        color: \"#fff\"\n      });\n    }\n  }\n  return [arr, usedTimeLength];\n};\nconst renderCell = (val, _ref2, index, currTime) => {\n  let {\n    eventTimeList = []\n  } = _ref2;\n  const eventTimeListOfDemand = eventTimeList.filter(el => ['dev', 'coordinate'].includes(el.timeType));\n  const eventTimeListOfExtra = eventTimeList.filter(el => ['extra'].includes(el.timeType));\n  const [demandTags, demandUsedTags] = getTagList({\n    eventTimeList: eventTimeListOfDemand,\n    currTime\n  });\n  const [extraTags, extraUsedTags] = getTagList({\n    eventTimeList: eventTimeListOfExtra,\n    currTime\n  });\n  return [...(demandUsedTags ? demandTags : []), ...(extraUsedTags ? extraTags : [])];\n};\nconst getMonthData = value => {\n  if (value.month() === 8) {\n    return 1394;\n  }\n};\nconst ProjectSchedule = _ref3 => {\n  let {\n    data,\n    month\n  } = _ref3;\n  const monthCellRender = value => {\n    const num = getMonthData(value);\n    return num ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"notes-month\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", null, num), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Backlog number\")) : null;\n  };\n  const dateCellRender = value => {\n    const listData = [];\n    data.forEach(el => {\n      listData.push(...el.eventTimeList);\n    });\n    const end = value.endOf('D');\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n      className: \"events\"\n    }, renderCell('', {\n      eventTimeList: listData\n    }, '', value));\n  };\n  const cellRender = (current, info) => {\n    if (info.type === 'date') return dateCellRender(current);\n    if (info.type === 'month') return monthCellRender(current);\n    return info.originNode;\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    cellRender: cellRender,\n    value: (0,_utils_FormatUtils__WEBPACK_IMPORTED_MODULE_2__.toDayJs)(month)\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectSchedule);\n\n//# sourceURL=webpack://mywebpack/./src/routes/projectSchedule/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/routes/projectSchedule/index.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/routes/projectSchedule/index.css ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.events {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.events .ant-badge-status {\n  width: 100%;\n  overflow: hidden;\n  font-size: 12px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.notes-month {\n  font-size: 28px;\n  text-align: center;\n}\n.notes-month section {\n  font-size: 28px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mywebpack/./src/routes/projectSchedule/index.css?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/routes/projectSchedule/index.css":
/*!**********************************************!*\
  !*** ./src/routes/projectSchedule/index.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/routes/projectSchedule/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mywebpack/./src/routes/projectSchedule/index.css?");

/***/ })

}]);