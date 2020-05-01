(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("classnames"), require("react"), require("../icon"), require("../touch-feedback"));
	else if(typeof define === 'function' && define.amd)
		define(["classnames", "react", "../icon", "../touch-feedback"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("classnames"), require("react"), require("../icon"), require("../touch-feedback")) : factory(root["classnames"], root["React"], root["../icon"], root["../touch-feedback"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_classnames__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_icon__, __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_touch_feedback__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/list-item/ListItem.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/icon/style/index.scss":
/*!******************************************!*\
  !*** ./components/icon/style/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/list-item/ListItem.tsx":
/*!*******************************************!*\
  !*** ./components/list-item/ListItem.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItem; });
/* harmony import */ var wd_mobile_components_touch_feedback_style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wd-mobile/components/touch-feedback/style/ */ "./components/touch-feedback/style/index.scss");
/* harmony import */ var wd_mobile_components_touch_feedback_style___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_touch_feedback_style___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wd_mobile_components_touch_feedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wd-mobile/components/touch-feedback */ "wd-mobile/components/touch-feedback");
/* harmony import */ var wd_mobile_components_touch_feedback__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_touch_feedback__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wd_mobile_components_icon_style___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wd-mobile/components/icon/style/ */ "./components/icon/style/index.scss");
/* harmony import */ var wd_mobile_components_icon_style___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_icon_style___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wd_mobile_components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wd-mobile/components/icon */ "wd-mobile/components/icon");
/* harmony import */ var wd_mobile_components_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/index.scss */ "./components/list-item/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_6__);





function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



 // 偷懒了～～，extra API被移除，改用children,配合表单的children查询

/**
 * @author tongxiaokang
 * @version 0.0.1
 *
 * 实现了 [TouchFeedback](#/Components/TouchFeedback) 组件的所有API。
 */

var ListItem = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ListItem, _React$PureComponent);

  var _super = _createSuper(ListItem);

  function ListItem(props) {
    var _this;

    _classCallCheck(this, ListItem);

    _this = _super.call(this, props);

    _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;

      if (!disabled && onClick) {
        onClick(e);
      }
    };

    _this.state = {
      rotate: wd_mobile_components_icon__WEBPACK_IMPORTED_MODULE_3___default.a.getRotate(props.arrow)
    };
    return _this;
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          activeStyle = _a.activeStyle,
          activeClassName = _a.activeClassName,
          wrap = _a.wrap,
          disabled = _a.disabled,
          title = _a.title,
          children = _a.children,
          thumb = _a.thumb,
          arrow = _a.arrow,
          onClick = _a.onClick,
          prefixCls = _a.prefixCls,
          restProps = __rest(_a, ["className", "activeStyle", "activeClassName", "wrap", "disabled", "title", "children", "thumb", "arrow", "onClick", "prefixCls"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](wd_mobile_components_touch_feedback__WEBPACK_IMPORTED_MODULE_1___default.a, {
        disabled: disabled,
        activeStyle: activeStyle,
        activeClassName: activeClassName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", _extends({}, restProps, {
        onClick: this.handleClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls), className, {
          'x-disabled': disabled
        })
      }), thumb ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: "".concat(prefixCls, "-thumb")
      }, typeof thumb === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        className: "".concat(prefixCls, "-thumb-img"),
        src: thumb
      }) : thumb) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-line"), _defineProperty({}, "".concat(prefixCls, "-line-wrap"), wrap))
      }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: "".concat(prefixCls, "-line-content")
      }, title) : null, children !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: "".concat(prefixCls, "-line-extra")
      }, children), arrow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: "".concat(prefixCls, "-line-arrow")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](wd_mobile_components_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        rotate: this.state.rotate,
        className: "x-icon-arrow-left"
      })))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.arrow !== prevState.arrow) {
        return {
          rotate: wd_mobile_components_icon__WEBPACK_IMPORTED_MODULE_3___default.a.getRotate(nextProps.arrow)
        };
      }

      return null;
    }
    /**
     * 辅助说明
     * */

  }, {
    key: "Brief",
    value: function Brief(props) {
      var prefixCls = ListItem.defaultProps.prefixCls;
      if (!props.children) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: "".concat(prefixCls, "-brief")
      }, props.children);
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]);


ListItem.defaultProps = {
  wrap: false,
  arrow: '',
  disabled: false,
  prefixCls: 'x-list-item',
  activeClassName: 'x-active'
};

/***/ }),

/***/ "./components/list-item/style/index.scss":
/*!***********************************************!*\
  !*** ./components/list-item/style/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/touch-feedback/style/index.scss":
/*!****************************************************!*\
  !*** ./components/touch-feedback/style/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "classnames":
/*!**********************************************************************************************************!*\
  !*** external {"amd":"classnames","root":"classnames","commonjs":"classnames","commonjs2":"classnames"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_classnames__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "wd-mobile/components/icon":
/*!**************************!*\
  !*** external "../icon" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_icon__;

/***/ }),

/***/ "wd-mobile/components/touch-feedback":
/*!************************************!*\
  !*** external "../touch-feedback" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_touch_feedback__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map