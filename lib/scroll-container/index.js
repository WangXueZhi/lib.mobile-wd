(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("classnames"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["classnames", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("classnames"), require("react")) : factory(root["classnames"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_classnames__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/scroll-container/ScrollContainer.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/scroll-container/ScrollContainer.tsx":
/*!*********************************************************!*\
  !*** ./components/scroll-container/ScrollContainer.tsx ***!
  \*********************************************************/
/*! exports provided: ScrollContainerProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollContainerProps", function() { return ScrollContainerProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/index.scss */ "./components/scroll-container/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ScrollContainerProps = function ScrollContainerProps() {
  _classCallCheck(this, ScrollContainerProps);

  /**
   * 样式前缀
   * @ignore
   * @default 'x-scroll-container'
   */
  this.prefixCls = 'x-scroll-container';
  /**
   * 触底阈值，单位像素
   */

  this.threshold = 0;
  /**
   * 底部加载中文案
   */

  this.loadText = "正在加载更多";
  /**
   * 显示底部文案
   */

  this.showScrollLoadText = true;
  /**
   * 节流时间间隔
   */

  this.throttleTime = 1000;
  /**
   * 样式
   */

  this.style = {};
};
/**
 * @author wang
 * @version 0.0.1
 * @description 滚动容器，支持滚动到底触发
 */

var ScrollContainer = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ScrollContainer, _React$PureComponent);

  var _super = _createSuper(ScrollContainer);

  function ScrollContainer(props) {
    var _this;

    _classCallCheck(this, ScrollContainer);

    _this = _super.call(this, props);
    /**
     * wrapperRef
     */

    _this.wrapperRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    /**
     * containerRef
     */

    _this.containerRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    /**
     * 节流标记
     */

    _this.canRunReachEnd = true; // 节流标记

    _this.state = {};
    return _this;
  }

  _createClass(ScrollContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 添加滚动监听
      this.containerRef.current.addEventListener("scroll", this.onScroll.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 移除滚动监听
      this.containerRef.current.removeEventListener("scroll", this.onScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className),
        style: style,
        ref: this.containerRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: this.wrapperRef
      }, this.props.children, !!this.props.showScrollLoadText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "".concat(prefixCls, "-loadtext")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, this.props.loadText))));
    } // 滚动监听

  }, {
    key: "onScroll",
    value: function onScroll() {
      var scrollTop = this.containerRef.current.scrollTop;
      var containerHeight = this.containerRef.current.offsetHeight;
      var scrollHeight = this.containerRef.current.scrollHeight; // 容器高+滚动距离 > 滚动高度（容器高+最大滚动距离）- 阈值, 判定为触底

      if (containerHeight + scrollTop >= scrollHeight - this.props.threshold) {
        if (this.props.throttleTime > 0) {
          // 如果节流时间大于0
          this.throttle(this.props.onReachEnd);
        } else {
          // 如果节流时间等于0，则立即执行
          this.props.onReachEnd();
        }
      } // 滚动高度回调


      this.props.onScroll && this.props.onScroll(this.containerRef.current.scrollTop);
    } // 节流

  }, {
    key: "throttle",
    value: function throttle(fn) {
      var _this2 = this;

      if (!this.canRunReachEnd) {
        return false;
      }

      fn && fn();
      this.canRunReachEnd = false;
      setTimeout(function () {
        _this2.canRunReachEnd = true;
      }, this.props.throttleTime);
    }
  }]);

  return ScrollContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);


ScrollContainer.defaultProps = new ScrollContainerProps();

/***/ }),

/***/ "./components/scroll-container/style/index.scss":
/*!******************************************************!*\
  !*** ./components/scroll-container/style/index.scss ***!
  \******************************************************/
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

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map