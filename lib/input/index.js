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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/input/Input.tsx");
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

/***/ "./components/input/Input.tsx":
/*!************************************!*\
  !*** ./components/input/Input.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
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
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/index.scss */ "./components/input/style/index.scss");
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




/**
 * @author tongxiaokang
 * @version 0.0.1
 */

var Input = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Input, _React$PureComponent);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.refInput = react__WEBPACK_IMPORTED_MODULE_4__["createRef"]();

    _this.onInputChange = function (e) {
      var el = e.target;
      var rawVal = el.value,
          prePos = el.selectionEnd;
      var _this$state$value = _this.state.value,
          preCtrlVal = _this$state$value === void 0 ? '' : _this$state$value;
      var type = _this.props.type;
      var ctrlValue = rawVal;

      switch (type) {
        case 'number':
          ctrlValue = rawVal.replace(/\D/g, '');
          break;

        case 'money':
          ctrlValue = rawVal.replace(/[^\d.]/g, '');
          break;

        case 'phone':
          ctrlValue = rawVal.replace(/\D/g, '').substring(0, 11);
          var valueLen = ctrlValue.length;

          if (valueLen > 3 && valueLen < 8) {
            ctrlValue = "".concat(ctrlValue.substr(0, 3), " ").concat(ctrlValue.substr(3));
          } else if (valueLen >= 8) {
            ctrlValue = "".concat(ctrlValue.substr(0, 3), " ").concat(ctrlValue.substr(3, 4), " ").concat(ctrlValue.substr(7));
          }

          break;

        case 'bankCard':
          ctrlValue = rawVal.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
          break;

        default:
      }

      _this.handleOnChange(ctrlValue, e, function () {
        switch (type) {
          case 'bankCard':
          case 'phone':
            // 受控输入类型需要调整插入符号的位置
            try {
              // 设置选择可能会抛出错误 (https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange)
              var pos = _this.calcPos(prePos || 0, preCtrlVal, rawVal, ctrlValue, [' '], /\D/g);

              if (type === 'phone' && (pos === 4 || pos === 9) || type === 'bankCard' && pos > 0 && pos % 5 === 0) {
                pos -= 1;
              }

              el.selectionStart = el.selectionEnd = pos;
            } catch (error) {
              console.warn('Set selection error:', error);
            }

            break;

          default:
        }
      });
    }; // 计算插入符号的位置


    _this.calcPos = function (prePos, preCtrlVal, rawVal, ctrlVal, placeholderChars, maskReg) {
      var editLength = rawVal.length - preCtrlVal.length;
      var isAddition = editLength > 0;
      var pos = prePos;

      if (isAddition) {
        var additionStr = rawVal.substr(pos - editLength, editLength);
        var ctrlCharCount = additionStr.replace(maskReg, '').length;
        pos -= editLength - ctrlCharCount;
        var placeholderCharCount = 0;

        while (ctrlCharCount > 0) {
          if (placeholderChars.indexOf(ctrlVal.charAt(pos - ctrlCharCount + placeholderCharCount)) === -1) {
            ctrlCharCount--;
          } else {
            placeholderCharCount++;
          }
        }

        pos += placeholderCharCount;
      }

      return pos;
    };

    _this.handleOnChange = function (value, event, adjustPos) {
      var onChange = _this.props.onChange; // 受控组件的一些限制操作

      if ('value' in _this.props) {
        _this.setState({
          value: _this.props.value
        });
      } else {
        _this.setState({
          value: value
        });
      } // 修复光标错位问题


      setTimeout(function () {
        adjustPos();
      });
      onChange && onChange(event, _assertThisInitialized(_this));
    };

    _this.handleOnBlur = function (e) {
      var onBlur = _this.props.onBlur;
      onBlur && onBlur(e);

      _this.reportValidity();
    };
    /**
     * 提示校验失败的情况
     * */


    _this.reportValidity = function () {
      var report = _this.checkValidity();

      _this.setState({
        isWarn: !report.valid
      });

      return report;
    };

    _this.getStyleValue = function (dom, style) {
      return window.getComputedStyle(dom).getPropertyValue(style);
    };

    _this.state = {
      isWarn: false,
      value: props.value || props.defaultValue || '',
      defaultValue: props.defaultValue
    };
    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.value = this.state.value || '';
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // 为 textarea 自动计算高度
      if (this.props.autoSize && this.props.type === 'textarea') {
        var textareaDom = this.elem;
        var paddingHeight = parseInt(this.getStyleValue(textareaDom, 'padding-top')) + parseInt(this.getStyleValue(textareaDom, 'padding-bottom'));
        textareaDom.style.height = ''; // fix：行数减少时，高度不发生变化的问题

        textareaDom.style.height = "".concat(textareaDom.scrollHeight - paddingHeight, "px");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          value = _this$state.value,
          isWarn = _this$state.isWarn;

      var _a = this.props,
          prefixCls = _a.prefixCls,
          type = _a.type,
          rows = _a.rows,
          className = _a.className,
          readOnly = _a.readOnly,
          disabled = _a.disabled,
          hidden = _a.hidden,
          clearable = _a.clearable,
          onChange = _a.onChange,
          requiredMessage = _a.requiredMessage,
          patternMessage = _a.patternMessage,
          minLengthMessage = _a.minLengthMessage,
          maxLengthMessage = _a.maxLengthMessage,
          autoSize = _a.autoSize,
          defaultValue = _a.defaultValue,
          resetProps = __rest(_a, ["prefixCls", "type", "rows", "className", "readOnly", "disabled", "hidden", "clearable", "onChange", "requiredMessage", "patternMessage", "minLengthMessage", "maxLengthMessage", "autoSize", "defaultValue"]);

      var classNames = classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, _defineProperty({
        'x-disabled': disabled
      }, "".concat(prefixCls, "-warn"), isWarn));

      var props = _extends(_extends({}, resetProps), {
        ref: this.refInput,
        value: value,
        className: classNames,
        disabled: disabled,
        onBlur: this.handleOnBlur,
        onChange: this.onInputChange
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        hidden: hidden,
        className: "".concat(prefixCls, "-wrap ").concat(className)
      }, type === 'textarea' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("textarea", _extends({}, props, {
        rows: rows
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", _extends({
        hidden: hidden
      }, props, {
        type: this.getInputType()
      })), clearable && value !== '' && !('value' in this.props) && !disabled && !readOnly ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](wd_mobile_components_touch_feedback__WEBPACK_IMPORTED_MODULE_1___default.a, {
        activeClassName: "".concat(prefixCls, "-clear")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](wd_mobile_components_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "".concat(prefixCls, "-clear x-icon-close-circle"),
        onClick: function onClick() {
          _this2.reset();

          _this2.focus();
        }
      })) : null);
    }
  }, {
    key: "getInputType",
    // 以下格式化函数剽窃于 ant 😄
    value: function getInputType() {
      var inputType = this.props.type || 'text';

      switch (inputType) {
        case 'phone':
        case 'bankCard':
          return 'tel';

        case 'digit':
          return 'number';

        case 'money':
          return 'text';

        default:
          return inputType;
      }
    }
    /**
     * 重置当前输入域
     * @public
     * */

  }, {
    key: "reset",
    value: function reset() {
      this.value = '';
    }
    /**
     * 令当前控件获得焦点
     * @public
     * */

  }, {
    key: "focus",
    value: function focus() {
      this.elem.focus();
    }
    /**
     * 令当前控件失去焦点
     * @public
     * */

  }, {
    key: "blur",
    value: function blur() {
      this.elem.blur();
    }
    /**
     * 验证当前输入框
     * @public
     * */

  }, {
    key: "checkValidity",
    value: function checkValidity() {
      var _this$props = this.props,
          type = _this$props.type,
          pattern = _this$props.pattern,
          patternMessage = _this$props.patternMessage,
          noValidate = _this$props.noValidate,
          onValidate = _this$props.onValidate,
          required = _this$props.required,
          minLength = _this$props.minLength,
          requiredMessage = _this$props.requiredMessage,
          minLengthMessage = _this$props.minLengthMessage,
          maxLength = _this$props.maxLength,
          maxLengthMessage = _this$props.maxLengthMessage;
      var valid = true,
          message = patternMessage,
          value = this.value; // 自定义校验

      if (onValidate) return onValidate(value, this); // 必填字段校验

      if (value == null || value.length === 0 && (Array.isArray(value) || typeof value === 'string')) {
        // 无需校验
        return required ? {
          valid: noValidate,
          message: requiredMessage
        } : {
          valid: true,
          message: null
        };
      } // 长度校验


      var length = value.length;

      if (minLength && minLength !== -1 && length < minLength) {
        return {
          valid: false,
          // @ts-ignore
          message: (minLengthMessage || '').replace('{bound}', minLength).replace('{delta}', minLength - length)
        };
      } else if (maxLength && maxLength !== -1 && length > maxLength) {
        return {
          valid: false,
          // @ts-ignore
          message: (maxLengthMessage || '').replace('{bound}', maxLength).replace('{delta}', length - maxLength)
        };
      } // 格式校验


      switch (type) {
        case 'phone':
          valid = /^1\d{10}$/.test(value);
          break;

        case 'money':
          valid = /^(0|[1-9]\d*)(\.\d\d?)?$/.test(value);
          break;

        case 'digit':
          valid = /^\d*$/.test(value);
          break;

        case 'email':
          valid = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
          break;

        case 'chineseId':
          valid = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|x|X)$/.test(value);
          break;

        default:
          if (pattern instanceof RegExp) {
            valid = pattern.test(value);
          }

      }

      return {
        valid: valid,
        message: valid ? null : message
      };
    }
  }, {
    key: "value",
    get: function get() {
      var value = this.elem.value;

      switch (this.props.type) {
        case 'phone':
        case 'bankCard':
          value = value.replace(/ /g, '');
          break;

        default:
      }

      return this.props.trim ? value.trim() : value;
    },
    set: function set(value) {
      this.elem.value = value;
      this.setState({
        value: value
      });
      this.onInputChange({
        target: this.elem
      });
    }
  }, {
    key: "elem",
    get: function get() {
      return this.refInput.current;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ('value' in nextProps && nextProps.value !== prevState.value) {
        return {
          value: nextProps.value
        };
      } else if ('defaultValue' in nextProps && nextProps.defaultValue !== prevState.defaultValue) {
        return {
          value: nextProps.defaultValue,
          defaultValue: nextProps.defaultValue
        };
      }

      return null;
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]);


Input.defaultProps = {
  prefixCls: 'x-input',
  className: '',
  rows: 2,
  type: 'text',
  disabled: false,
  clearable: true,
  noValidate: false,
  maxLength: -1,
  minLength: -1,
  requiredMessage: "\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879",
  patternMessage: '该字段格式不正确',
  minLengthMessage: "\u8BE5\u5B57\u6BB5\u6700\u5C11\u957F\u5EA6\u4E3A {bound}\uFF0C\u7F3A\u5C11 {delta}",
  maxLengthMessage: "\u8BE5\u5B57\u6BB5\u6700\u5927\u957F\u5EA6\u4E3A {bound}\uFF0C\u8D85\u51FA {delta}",
  __type__: 'input' // 用于Form 组件区分组件类型

};

/***/ }),

/***/ "./components/input/style/index.scss":
/*!*******************************************!*\
  !*** ./components/input/style/index.scss ***!
  \*******************************************/
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