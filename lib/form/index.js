(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("classnames"), require("react"), require("../toast"), require("../tools"));
	else if(typeof define === 'function' && define.amd)
		define(["classnames", "react", "../toast", "../tools"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("classnames"), require("react"), require("../toast"), require("../tools")) : factory(root["classnames"], root["React"], root["../toast"], root["../tools"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_classnames__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_toast__, __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_tools__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/form/Form.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/form/Form.tsx":
/*!**********************************!*\
  !*** ./components/form/Form.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var wd_mobile_components_toast_style___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wd-mobile/components/toast/style/ */ "./components/toast/style/index.scss");
/* harmony import */ var wd_mobile_components_toast_style___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_toast_style___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wd_mobile_components_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wd-mobile/components/toast */ "wd-mobile/components/toast");
/* harmony import */ var wd_mobile_components_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wd-mobile/components/tools */ "wd-mobile/components/tools");
/* harmony import */ var wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/index.scss */ "./components/form/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_5__);




function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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




var scroll = wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_2___default.a.scroll;
/**
 * @author sayll
 * @version 0.0.1
 */

var Form = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Form, _React$PureComponent);

  var _super = _createSuper(Form);

  function Form() {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.apply(this, arguments);
    _this.refKey = 0;
    _this.refList = [];
    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      this.refKey = 0;

      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          cld = _a.children,
          onReset = _a.onReset,
          onSubmit = _a.onSubmit,
          resetProps = __rest(_a, ["prefixCls", "className", "children", "onReset", "onSubmit"]);

      var children = this.handleCloneChildren(cld);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, className)
      }, resetProps), children);
    }
    /**
     * 所有含 name & !disabled 字段实例
     * */

  }, {
    key: "reset",

    /**
     * 重置所有表单
     * @public
     * */
    value: function reset() {
      this.inputs.forEach(function (input) {
        return input.reset && input.reset();
      });
    }
    /**
     * 获取当前表单内所有输入域的校验结果
     * @public
     * */

  }, {
    key: "checkValidity",
    value: function checkValidity() {
      return this.inputs.map(function (input) {
        return input.checkValidity ? _extends(_extends({}, input.checkValidity()), {
          vNode: input
        }) : {
          valid: true
        };
      });
    }
    /**
     * 报告当前表单内所有输入域
     * @public
     * */

  }, {
    key: "reportValidity",
    value: function reportValidity() {
      return this.inputs.map(function (input) {
        return input.reportValidity ? _extends(_extends({}, input.reportValidity()), {
          vNode: input
        }) : {
          valid: true
        };
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e, sender) {
      var onSubmit = this.props.onSubmit;

      if (this.reportValidity().every(function (validity) {
        // 是否通过提交表单的校验，否则抛出提示信息
        if (!validity.valid) {
          wd_mobile_components_toast__WEBPACK_IMPORTED_MODULE_1___default.a.warning(validity.message); // 滚动至错误的表单空间


          if (validity.vNode) {
            var elem = validity.vNode.elem;
            var scrollable = scroll.scrollParent(elem);
            if (!scrollable) return; // 无效节点，跳出

            while (scrollable.nodeType !== 9 || !scroll.isScrollIntoView(scroll.scrollParent(scrollable))) {
              scrollable = scroll.scrollParent(scrollable);
            }

            scroll.scrollIntoViewIfNeeded(elem, scrollable);
          }
        }

        return validity.valid;
      })) {
        onSubmit && onSubmit(e, sender);
      }
    }
  }, {
    key: "handleReset",
    value: function handleReset(e, sender) {
      var onReset = this.props.onReset;
      sender.reset();
      onReset && onReset(e, sender);
    }
  }, {
    key: "handleCloneChildren",
    value: function handleCloneChildren(children) {
      var _this2 = this;

      // 遍历处理子节点
      if (Array.isArray(children)) {
        return children.map(function (cld) {
          return _this2.handleCloneChildren(cld);
        });
      }

      if (children && children.props) {
        // 子节点非表单节点，并存在更深层的节点，递归处理
        if ((react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"](children.props.children) || Array.isArray(children.props.children)) && !children.props.name && !children.props.__type__) {
          return react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](children, {
            key: children.key || "__".concat(Math.random(), "__"),
            children: this.handleCloneChildren(children.props.children)
          });
        } // 单一节点进入有效表单节点队列


        this.refList[this.refKey] = react__WEBPACK_IMPORTED_MODULE_3__["createRef"]();
        var vNode = react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](children, {
          key: children.key || "__".concat(this.refKey, "__"),
          ref: this.refList[this.refKey],
          noValidate: children.props.noValidate || this.props.noValidate,
          onClick: children.props.type === 'submit' ? function (e) {
            return _this2.handleSubmit(e, _this2);
          } : children.props.type === 'reset' ? function (e) {
            return _this2.handleReset(e, _this2);
          } : children.props.onClick
        });
        this.refKey++;
        return vNode;
      }

      return children;
    }
  }, {
    key: "inputs",
    get: function get() {
      return this.refList.map(function (item) {
        return item.current;
      }).filter(function (input) {
        return input && input.props && input.props.name && !input.props.disabled;
      });
    }
    /**
     * 表单值
     * */

  }, {
    key: "values",
    get: function get() {
      return this.inputs.reduce(function (values, input) {
        values[input.props.name] = input.value;
        return values;
      }, {});
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);


Form.defaultProps = {
  prefixCls: 'x-form',
  noValidate: false
};

/***/ }),

/***/ "./components/form/style/index.scss":
/*!******************************************!*\
  !*** ./components/form/style/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/toast/style/index.scss":
/*!*******************************************!*\
  !*** ./components/toast/style/index.scss ***!
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

/***/ "wd-mobile/components/toast":
/*!***************************!*\
  !*** external "../toast" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_toast__;

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