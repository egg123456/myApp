"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmywebpack"] = self["webpackChunkmywebpack"] || []).push([["src_routes_ceremony_config_index_js"],{

/***/ "./src/routes/ceremony/config/index.js":
/*!*********************************************!*\
  !*** ./src/routes/ceremony/config/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getColumns: () => (/* binding */ getColumns),\n/* harmony export */   getCustomItem: () => (/* binding */ getCustomItem)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/EditOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/divider/index.js\");\n\n\n\nconst getCustomItem = () => {\n  return [{\n    label: 'username',\n    field: 'username'\n  }, {\n    label: 'addr',\n    field: 'addr'\n  }];\n};\nconst getColumns = _ref => {\n  let {\n    handleEditClick,\n    handleDeleteClick\n  } = _ref;\n  return [{\n    title: 'name',\n    dataIndex: 'name',\n    key: 'name'\n  }, {\n    title: 'addr',\n    dataIndex: 'addr',\n    key: 'addr'\n  },\n  // {\n  //   title: 'relationShip',\n  //   dataIndex: 'relationShip',\n  //   key: 'relationShip',\n  // },\n  {\n    title: 'ceremonyMoney',\n    dataIndex: 'ceremonyMoney',\n    key: 'ceremonyMoney'\n  }, {\n    title: 'remark',\n    dataIndex: 'remark',\n    key: 'remark'\n  }, {\n    title: 'operate',\n    dataIndex: 'operate',\n    key: 'operate',\n    render: (val, record) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        onClick: () => handleEditClick(record)\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        type: \"vertical\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onClick: () => handleDeleteClick(record)\n      }));\n    }\n  }];\n};\n\n//# sourceURL=webpack://mywebpack/./src/routes/ceremony/config/index.js?");

/***/ })

}]);