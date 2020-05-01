(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("classnames"), require("react"), require("../list"), require("../list-item"), require("../tools"));
	else if(typeof define === 'function' && define.amd)
		define(["classnames", "react", "../list", "../list-item", "../tools"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("classnames"), require("react"), require("../list"), require("../list-item"), require("../tools")) : factory(root["classnames"], root["React"], root["../list"], root["../list-item"], root["../tools"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_classnames__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_list__, __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_list_item__, __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_tools__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/panel/Panel.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/list-item/style/index.scss":
/*!***********************************************!*\
  !*** ./components/list-item/style/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/list/style/index.scss":
/*!******************************************!*\
  !*** ./components/list/style/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/panel/Panel.tsx":
/*!************************************!*\
  !*** ./components/panel/Panel.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Panel; });
/* harmony import */ var wd_mobile_components_list_style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wd-mobile/components/list/style/ */ "./components/list/style/index.scss");
/* harmony import */ var wd_mobile_components_list_style___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_list_style___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wd_mobile_components_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wd-mobile/components/list */ "wd-mobile/components/list");
/* harmony import */ var wd_mobile_components_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wd_mobile_components_list_item_style___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wd-mobile/components/list-item/style/ */ "./components/list-item/style/index.scss");
/* harmony import */ var wd_mobile_components_list_item_style___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_list_item_style___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wd_mobile_components_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wd-mobile/components/list-item */ "wd-mobile/components/list-item");
/* harmony import */ var wd_mobile_components_list_item__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_list_item__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wd-mobile/components/tools */ "wd-mobile/components/tools");
/* harmony import */ var wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/index.scss */ "./components/panel/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_7__);






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




/**
 * @author sayll
 * @version 0.0.1
 */

var Panel = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Panel, _React$PureComponent);

  var _super = _createSuper(Panel);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _super.call(this, props);
    _this.refPanelBody = react__WEBPACK_IMPORTED_MODULE_5__["createRef"]();

    _this.handleClick = function (e) {
      var collapsed = !_this.state.collapsed;
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          collapsable = _this$props.collapsable;

      if (collapsable) {
        _this.setState({
          collapsed: collapsed
        });
      }

      onClick && onClick(e);
    }; // 存在一个默认


    _this.handleToggleCollapse = function () {
      var hasAnimation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var onCollapseChange = _this.props.onCollapseChange; // @ts-ignore

      wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_4___default.a.dom.toggle(_this.refPanelBody.current, hasAnimation ? 'height' : '');

      hasAnimation && onCollapseChange && onCollapseChange(_this.state.collapsed, _assertThisInitialized(_this));
    };

    _this.state = {
      style: {},
      collapsed: props.collapsed,
      propsCollapsed: props.collapsed
    };
    return _this;
  }

  _createClass(Panel, [{
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;

      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          _collapsed = _a.collapsed,
          collapsable = _a.collapsable,
          title = _a.title,
          children = _a.children,
          onClick = _a.onClick,
          onCollapseChange = _a.onCollapseChange,
          resetProps = __rest(_a, ["prefixCls", "className", "collapsed", "collapsable", "title", "children", "onClick", "onCollapseChange"]);

      var classNames = classnames__WEBPACK_IMPORTED_MODULE_6___default()(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-collapsed"), this.state.collapsed));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](wd_mobile_components_list__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, resetProps, {
        className: classNames
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](wd_mobile_components_list_item__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "".concat(prefixCls, "-title"),
        title: title,
        arrow: collapsed ? 'right' : 'bottom',
        onClick: this.handleClick
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        ref: this.refPanelBody,
        className: "".concat(prefixCls, "-body")
      }, children));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.collapsed) {
        this.handleToggleCollapse(false);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    // @ts-ignore
    value: function getSnapshotBeforeUpdate(prevProps, prevState) {
      if (prevState.collapsed !== this.state.collapsed) {
        this.handleToggleCollapse();
      }

      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, _prevState, _snapshot) {}
  }, {
    key: "collapsed",
    set: function set(collapsed) {
      this.setState({
        collapsed: collapsed
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      // 副本比较 及 内部状态比较
      if (nextProps.collapsed !== prevState.collapsed && nextProps.collapsed !== prevState.propsCollapsed) {
        return {
          collapsed: nextProps.collapsed,
          propsCollapsed: nextProps.collapsed
        };
      }

      return null;
    }
  }]);

  return Panel;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);


Panel.defaultProps = {
  prefixCls: 'x-panel',
  collapsed: true,
  collapsable: true
};

/***/ }),

/***/ "./components/panel/style/index.scss":
/*!*******************************************!*\
  !*** ./components/panel/style/index.scss ***!
  \*******************************************/
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

/***/ "wd-mobile/components/list":
/*!**************************!*\
  !*** external "../list" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_list__;

/***/ }),

/***/ "wd-mobile/components/list-item":
/*!*******************************!*\
  !*** external "../list-item" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_list_item__;

/***/ }),

/***/ "wd-mobile/components/tools":
/*!***************************!*\
  !*** external "../tools" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_tools__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map