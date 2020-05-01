(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/pull-to-refresh/PullToRefresh.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/pull-to-refresh/PullToRefresh.tsx":
/*!******************************************************!*\
  !*** ./components/pull-to-refresh/PullToRefresh.tsx ***!
  \******************************************************/
/*! exports provided: PullToRefreshProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PullToRefreshProps", function() { return PullToRefreshProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PullToRefresh; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.scss */ "./components/pull-to-refresh/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_1__);
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



var PullToRefreshProps = function PullToRefreshProps() {
  _classCallCheck(this, PullToRefreshProps);

  /**
   * 样式前缀
   * @ignore
   * @default 'x-pull-to-refresh'
   */
  this.prefixCls = 'x-pull-to-refresh';
  /**
   * 是否显示刷新状态
   */

  this.refreshing = false;
  /**
   * 触发刷新最小下拉距离
   */

  this.distance = 100;
  /**
   * 容器高度，默认高度为浏览器高度即document.documentElement.clientHeight
   */

  this.height = document.documentElement.clientHeight;
};
/**
 * @author wdong
 * @version 0.0.1
 */

var PullToRefresh = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PullToRefresh, _React$PureComponent);

  var _super = _createSuper(PullToRefresh);

  function PullToRefresh(props) {
    var _this;

    _classCallCheck(this, PullToRefresh);

    _this = _super.call(this, props);
    _this.wrap = null; //添加滑动事件监听

    _this.addPullListenEvent = function () {
      var startY = 0;
      var distance = 0;

      var overscroll = function overscroll(el) {
        el.addEventListener('touchstart', function (evt) {
          var top = el.scrollTop;
          var totalScroll = el.scrollHeight;
          var currentScroll = top + el.offsetHeight;

          if (!_this.state.doing) {
            _this.setState({
              doing: true
            });
          }

          if (top === 0) {
            el.scrollTop = 1;
          } else if (currentScroll === totalScroll) {
            el.scrollTop = top - 1;
          }

          startY = evt.touches[0].pageY;
        });
        el.addEventListener('touchmove', function (evt) {
          distance = evt.touches[0].pageY - startY;

          if (distance > 0 && el.scrollTop <= 0) {
            // evt.stopPropagation();
            evt.preventDefault();
          } else {
            return;
          }

          _this.setState({
            translateY: distance - 50
          });

          if (distance >= _this.props.distance) {
            _this.setState({
              overMinDistance: true,
              step: 1,
              text: "松开立即刷新"
            });
          }
        });
        el.addEventListener('touchend', function (evt) {
          if (distance > 0 && el.scrollTop <= 0) {
            evt.preventDefault();
          } else {
            return;
          }

          if (distance >= _this.props.distance) {
            _this.props.refresh && _this.props.refresh();

            _this.setState({
              step: 2,
              translateY: 0,
              overMinDistance: true
            });
          } else {
            _this.setState({
              step: 0,
              text: "下拉可以刷新",
              translateY: -50,
              overMinDistance: false,
              doing: false
            });
          }
        });
      };

      if (!_this.state.doing) {
        overscroll(_this.wrap);
      }
    };

    _this.state = {
      text: "下拉可以刷新",
      step: 0,
      translateY: -50,
      overMinDistance: false,
      doing: false //是否处于操作状态

    };
    return _this;
  }

  _createClass(PullToRefresh, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addPullListenEvent();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          height = _this$props.height;
      var _this$state = this.state,
          step = _this$state.step,
          translateY = _this$state.translateY,
          text = _this$state.text,
          overMinDistance = _this$state.overMinDistance;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: prefixCls,
        style: {
          height: height
        },
        ref: function ref(wrap) {
          return _this2.wrap = wrap;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: step == 2 || step == 0 && translateY == -50 ? "".concat(prefixCls, "-back") : "",
        style: {
          transform: "translateY(".concat(translateY, "px)")
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: step == 2 ? "".concat(prefixCls, "-main ").concat(prefixCls, "-doing") : "".concat(prefixCls, "-main")
      }, overMinDistance && (step == 2 || step == 0 && translateY == -50) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "".concat(prefixCls, "-text")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
        className: "".concat(prefixCls, "-loading")
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "".concat(prefixCls, "-text")
      }, text), this.props.children)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!nextProps.refreshing && prevState.step == 2) {
        //刷新完成
        return {
          step: 0,
          text: "下拉可以刷新",
          translateY: -50,
          doing: false
        };
      }

      return null;
    }
  }]);

  return PullToRefresh;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);


PullToRefresh.defaultProps = new PullToRefreshProps();

/***/ }),

/***/ "./components/pull-to-refresh/style/index.scss":
/*!*****************************************************!*\
  !*** ./components/pull-to-refresh/style/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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