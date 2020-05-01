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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/swipe-action/SwipeAction.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/swipe-action/SwipeAction.tsx":
/*!*************************************************!*\
  !*** ./components/swipe-action/SwipeAction.tsx ***!
  \*************************************************/
/*! exports provided: SwipeActionProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeActionProps", function() { return SwipeActionProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwipeAction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/index.scss */ "./components/swipe-action/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




var SwipeActionProps = function SwipeActionProps() {
  _classCallCheck(this, SwipeActionProps);

  /**
   * 样式前缀
   * @ignore
   * @default 'x-swipe-action'
   */
  this.prefixCls = 'x-swipe-action';
  /**
   * 左侧按钮宽度
   * @default 0
   */

  this.leftwidth = 0;
  /**
   * 右侧按钮宽度
   * @default 0
   */

  this.rightwidth = 0;
};
/**
 * @author wdong
 * @version 0.0.1
 */

var SwipeAction = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SwipeAction, _React$PureComponent);

  var _super = _createSuper(SwipeAction);

  function SwipeAction(props) {
    var _this;

    _classCallCheck(this, SwipeAction);

    _this = _super.call(this, props); //滑动x起始位置

    _this.positionStartX = 0; //点击时滑块是否为打开状态

    _this.currentIsOpen = true;

    _this.onTouchStart = function (e) {
      e.preventDefault();
      _this.positionStartX = e.touches[0].pageX;
      _this.currentIsOpen = Math.abs(_this.state.left) > 0;

      _this.setState({
        left: 0
      });
    };

    _this.onTouchMove = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          leftwidth = _this$props.leftwidth,
          rightwidth = _this$props.rightwidth,
          disabled = _this$props.disabled;
      var maxLeft = leftwidth || _this.buttonLeft.clientWidth || 0;
      var minLeft = rightwidth || _this.buttonRight.clientWidth || 0;
      var moveX = e.touches[0].pageX; //禁用

      if (disabled) {
        return;
      }

      var distance = moveX - _this.positionStartX;

      if (distance > 0) {
        distance = distance > maxLeft ? maxLeft : distance;
      } else {
        distance = distance < -minLeft ? -minLeft : distance;
      }

      _this.setState({
        left: distance,
        swiping: true
      });
    };

    _this.onTouchEnd = function () {
      var distance = _this.state.left;
      var _this$props2 = _this.props,
          leftwidth = _this$props2.leftwidth,
          rightwidth = _this$props2.rightwidth,
          onOpen = _this$props2.onOpen,
          onClose = _this$props2.onClose;
      var maxLeft = leftwidth || _this.buttonLeft.clientWidth || 0;
      var minLeft = rightwidth || _this.buttonRight.clientWidth || 0;

      if (distance > 0) {
        distance = distance > maxLeft * 0.5 ? maxLeft : 0;
      } else {
        distance = distance < -minLeft * 0.5 ? -minLeft : 0;
      }

      if (_this.currentIsOpen && distance == 0) {
        onClose && typeof onClose === "function" && onClose();
      }

      if (!_this.currentIsOpen && Math.abs(distance) > 0) {
        onOpen && typeof onOpen === "function" && onOpen();
      }

      _this.setState({
        swiping: false,
        left: distance
      });
    };

    _this.state = {
      left: 0,
      swiping: false //是否处于滑动状态

    };
    return _this;
  }

  _createClass(SwipeAction, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _a = this.props,
          prefixCls = _a.prefixCls,
          resetProps = __rest(_a, ["prefixCls"]);

      var leftBtn = resetProps.left || [];
      var rightBtn = resetProps.right || [];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, _defineProperty({}, "".concat(prefixCls, "-swiping"), this.state.swiping)),
        style: resetProps.style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-buttons"), "".concat(prefixCls, "-buttons-left")),
        ref: function ref(buttonLeft) {
          return _this2.buttonLeft = buttonLeft;
        }
      }, leftBtn.map(function (btn, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-btn")),
          key: index,
          style: btn.style,
          onClick: function onClick() {
            if (resetProps.autoClose) {
              _this2.setState({
                left: 0
              });
            }

            btn.onPress && typeof btn.onPress === "function" && btn.onPress();
          }
        }, btn.text);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-buttons"), "".concat(prefixCls, "-buttons-right")),
        ref: function ref(buttonRight) {
          return _this2.buttonRight = buttonRight;
        }
      }, rightBtn.map(function (btn, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-btn")),
          key: index,
          style: btn.style,
          onClick: function onClick() {
            if (resetProps.autoClose) {
              _this2.setState({
                left: 0
              });
            }

            btn.onPress && typeof btn.onPress === "function" && btn.onPress();
          }
        }, btn.text);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "".concat(prefixCls, "-content"),
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd,
        style: {
          left: this.state.left
        }
      }, resetProps.children));
    }
  }]);

  return SwipeAction;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);


SwipeAction.defaultProps = new SwipeActionProps();

/***/ }),

/***/ "./components/swipe-action/style/index.scss":
/*!**************************************************!*\
  !*** ./components/swipe-action/style/index.scss ***!
  \**************************************************/
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