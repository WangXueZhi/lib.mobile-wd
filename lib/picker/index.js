(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("classnames"), require("react"), require("../popup"), require("../tools"));
	else if(typeof define === 'function' && define.amd)
		define(["classnames", "react", "../popup", "../tools"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("classnames"), require("react"), require("../popup"), require("../tools")) : factory(root["classnames"], root["React"], root["../popup"], root["../tools"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_classnames__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_popup__, __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_tools__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/picker/Picker.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/picker/Picker.tsx":
/*!**************************************!*\
  !*** ./components/picker/Picker.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Picker; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wd_mobile_components_popup_style___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wd-mobile/components/popup/style/ */ "./components/popup/style/index.scss");
/* harmony import */ var wd_mobile_components_popup_style___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_popup_style___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wd_mobile_components_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wd-mobile/components/popup */ "wd-mobile/components/popup");
/* harmony import */ var wd_mobile_components_popup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_popup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wd-mobile/components/tools */ "wd-mobile/components/tools");
/* harmony import */ var wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/index.scss */ "./components/picker/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_6__);





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

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

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




var getUuid;
var rootElement;
var pickerInstance = {};
/**
 * @author sayll
 * @version 0.0.1
 */

var Picker = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Picker, _React$PureComponent);

  var _super = _createSuper(Picker);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _super.call(this, props);
    _this.refRoot = react__WEBPACK_IMPORTED_MODULE_4__["createRef"]();
    _this.refContent = react__WEBPACK_IMPORTED_MODULE_4__["createRef"]();
    _this.refIndicator = react__WEBPACK_IMPORTED_MODULE_4__["createRef"](); // 处理所有和滚动相关的任务

    _this.scrollHandler = function () {
      var startY = 0; // 开始的点

      var lastY = 0; // 离开的点，避免第二次点击复位

      var scrollY = -1; // 滚动的距离

      var isMoving = false; // 是否处于滚动

      var scrollDisabled = false; // 禁用滚动

      var setTransform = function setTransform(nodeStyle, value) {
        nodeStyle.transform = nodeStyle.webkitTransform = value;
      };

      var setTransition = function setTransition(nodeStyle, value) {
        nodeStyle.transition = nodeStyle.webkitTransition = value;
      };
      /**
       * 滚动到目标位置
       * 触发onScrollingComplete回调
       * */


      var scrollTo = function scrollTo(y) {
        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .3;

        if (scrollY !== y) {
          scrollY = y;

          if (time) {
            setTransition(_this.refContent.current.style, "cubic-bezier(0,0,0.2,1.15) ".concat(time, "s"));
            setTimeout(function () {
              _this.onScrollingComplete();

              _this.refContent.current && setTransition(_this.refContent.current.style, '');
            }, +time * 1000);
          }

          setTransform(_this.refContent.current.style, "translate3d(0,".concat(-y, "px,0)"));
        }
      }; // 一系列与快速滚动相关的速度计算


      var Velocity = function () {
        var minInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
        var maxInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var _y = 0;
        var _time = 0;
        var _velocity = 0;
        var recorder = {
          /**
           * @param {number} y 滚动的距离
           * */
          record: function record(y) {
            var now = +new Date();
            _velocity = (y - _y) / (now - _time);

            if (now - _time >= minInterval) {
              _velocity = now - _time <= maxInterval ? _velocity : 0;
              _y = y;
              _time = now;
            }
          },
          getVelocity: function getVelocity(y) {
            if (y !== _y) {
              recorder.record(y);
            }

            return _velocity;
          }
        };
        return recorder;
      }(); // 记录开始坐标，开启move状态，暂存最后一次的滚动距离


      var onStart = function onStart(y) {
        if (scrollDisabled) return;
        startY = y;
        lastY = scrollY;
        isMoving = true;
      };
      /**
       * 记录滚动距离，速度信息
       * 调用setTransform，设置滚动的距离
       * 调用onScrollChange回调
       * */


      var onMove = function onMove(y) {
        if (scrollDisabled || !isMoving) return; // 滚动的距离,将lastY（复位信息）计算进去

        scrollY = lastY - y + startY; // 记录当前速度信息

        Velocity.record(scrollY);
        setTransform(_this.refContent.current.style, "translate3d(0,".concat(-scrollY, "px,0)"));
      };
      /**
       * 可能的话，启用快速滚动
       * 将滚动结果固定至有效位置
       * 调用onScrollChange回调
       * */


      var onFinish = function onFinish() {
        var time = .3;
        var targetY = scrollY;
        var height = (_this.props.data.length - 1) * _this.itemHeight;
        var velocity = Velocity.getVelocity(targetY) * 4;
        isMoving = false; // 初始化加速度

        if (velocity) {
          // 过滤点击
          targetY = velocity * 40 + targetY;
          time = Math.abs(velocity) * .1;
        } // 固定滚动位置至有效位置


        if (targetY % _this.itemHeight !== 0) {
          targetY = Math.round(targetY / _this.itemHeight) * _this.itemHeight;
        }

        if (targetY < 0) {
          targetY = 0;
        } else if (targetY > height) {
          targetY = height;
        }

        scrollTo(targetY, time < .3 ? .3 : time);
      };

      return {
        scrollTo: scrollTo,
        mousedown: function mousedown(evt) {
          return onStart(evt.screenY);
        },
        mousemove: function mousemove(evt) {
          evt.preventDefault();
          onMove(evt.screenY);
        },
        mouseup: function mouseup() {
          return onFinish();
        },
        touchstart: function touchstart(evt) {
          return onStart(evt.touches[0].screenY);
        },
        touchmove: function touchmove(evt) {
          evt.preventDefault();
          onMove(evt.touches[0].screenY);
        },
        touchend: function touchend() {
          return onFinish();
        },
        touchcancel: function touchcancel() {
          return onFinish();
        },
        getValue: function getValue() {
          var data = _this.props.data;
          var index = Math.round(scrollY / _this.itemHeight);

          if (index < 0) {
            index = 0;
          } else if (index > data.length - 1) {
            index = data.length - 1;
          }

          return data[index];
        },
        setDisabled: function setDisabled() {
          var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          scrollDisabled = disabled;
        }
      };
    }(); // 滚动条定位到指定的默认值处


    _this.select = function (value) {
      if (value === undefined) return;
      var data = _this.props.data;
      var len = data.length;

      while (len--) {
        if (data[len].value === value) {
          return _this.scrollHandler.scrollTo(len * _this.itemHeight, .3);
        }
      }
    }; // 滚动结束后，触发onChange并更新state


    _this.onScrollingComplete = function () {
      var onChange = _this.props.onChange;

      var value = _this.scrollHandler.getValue();

      onChange && onChange(value, _assertThisInitialized(_this));
    };

    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(Picker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var refRoot = this.refRoot,
          refIndicator = this.refIndicator; // popup 创建时，存在无法获取 itemHeight 高度问题, 延迟解决

      setTimeout(function () {
        // 注意此处计算包含 borderWidth + padding
        _this2.itemHeight = refIndicator.current.getBoundingClientRect().height; // 设置是否禁用滚动条

        _this2.scrollHandler.setDisabled(_this2.props.disabled || _this2.props.readOnly); // 初始化滚动位置


        _this2.select(_this2.props.value);
        /**
         * 判断是否支持addEventListener的options.passive 禁用preventDefault优化滚动体验
         * 参考：http://www.cnblogs.com/ziyunfei/p/5545439.html
         * */


        var passiveSupported = _this2.passiveSupported();

        var willPreventDefault = passiveSupported ? {
          passive: false
        } : false;
        var willNotPreventDefault = passiveSupported ? {
          passive: true
        } : false; // 为root容器绑定touch&mouse监听事件

        Object.keys(_this2.scrollHandler).forEach(function (key) {
          if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
            var options = key.indexOf('move') >= 0 ? willPreventDefault : willNotPreventDefault;
            refRoot.current.addEventListener(key, _this2.scrollHandler[key], options);
          }
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      Object.keys(this.scrollHandler).forEach(function (key) {
        if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
          _this3.refRoot.current.removeEventListener(key, _this3.scrollHandler[key]);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          data = _a.data,
          onChange = _a.onChange,
          resetProps = __rest(_a, ["prefixCls", "className", "data", "onChange"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-col"), className),
        ref: this.refRoot
      }, resetProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-col-indicator")),
        ref: this.refIndicator
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-col-content")),
        ref: this.refContent
      }, data.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
          key: item.label,
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-col-item"))
        }, item.label);
      })));
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps, _prevState) {
      if (prevProps.value !== this.props.value) {
        this.select(this.props.value);
      }

      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, _prevState, _snapshot) {}
  }, {
    key: "passiveSupported",

    /**
     * 判断是否支持addEventListener的options.passive
     * 出处：https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener
     * */
    value: function passiveSupported() {
      var passiveSupported = false;

      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', null, options);
      } catch (err) {}

      return passiveSupported;
    }
    /**
     * 单级选择
     * @public
     * */

  }, {
    key: "selectItem",
    get: function get() {
      return this.scrollHandler.getValue();
    }
  }, {
    key: "value",
    get: function get() {
      return this.selectItem.value;
    },
    set: function set(value) {
      this.setState({
        value: value
      });
    }
  }], [{
    key: "show",
    value: function show(_ref) {
      var data = _ref.data,
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? '' : _ref$value,
          onOk = _ref.onOk,
          options = _ref.options;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var key, _a, _data, name, _value, onChange, resetProps, sender;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!rootElement) {
                  rootElement = document.createElement('div');
                  rootElement.className = "".concat(Picker.defaultProps.prefixCls, "-root");
                  document.body.appendChild(rootElement);
                }

                getUuid = getUuid || wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_3___default.a.helper.getUuidFn(Picker.defaultProps.prefixCls);
                key = getUuid();
                _a = options || {}, _data = _a.data, name = _a.name, _value = _a.value, onChange = _a.onChange, resetProps = __rest(_a, ["data", "name", "value", "onChange"]);
                data = _data || data;
                value = _value || value;
                _context.next = 8;
                return wd_mobile_components_popup__WEBPACK_IMPORTED_MODULE_2___default.a.create({
                  content: function content() {
                    var refPicker = react__WEBPACK_IMPORTED_MODULE_4__["createRef"]();
                    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
                      className: "".concat(Picker.defaultProps.prefixCls, "-header")
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
                      href: "javascript:;",
                      className: "x-fl",
                      onClick: function onClick() {
                        return sender.destroy();
                      }
                    }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
                      href: "javascript:;",
                      className: "x-fr",
                      onClick: function onClick() {
                        onOk && onOk(refPicker.current.selectItem, refPicker.current);
                        sender.destroy();
                      }
                    }, "\u786E\u5B9A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Picker, _extends({
                      ref: refPicker,
                      value: value,
                      data: data
                    }, resetProps)));
                  },
                  mask: true,
                  onClickMask: function onClickMask() {
                    return sender.destroy();
                  },
                  animation: 'bottom',
                  offset: {
                    bottom: 0,
                    left: 0,
                    right: 0
                  },
                  rootElement: rootElement
                });

              case 8:
                sender = _context.sent;
                return _context.abrupt("return", pickerInstance[key] = sender);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
    /**
     * 多级选择
     * @public
     * */

  }, {
    key: "multiple",
    value: function multiple(_ref2) {
      var data = _ref2.data,
          _ref2$value = _ref2.value,
          value = _ref2$value === void 0 ? [] : _ref2$value,
          onOk = _ref2.onOk,
          options = _ref2.options;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var key, _a, _data, name, _value, _onChange, resetProps, cols, sender;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!rootElement) {
                  rootElement = document.createElement('div');
                  rootElement.className = "".concat(Picker.defaultProps.prefixCls, "-root");
                  document.body.appendChild(rootElement);
                }

                getUuid = getUuid || wd_mobile_components_tools__WEBPACK_IMPORTED_MODULE_3___default.a.helper.getUuidFn(Picker.defaultProps.prefixCls);
                key = getUuid();
                _a = options || {}, _data = _a.data, name = _a.name, _value = _a.value, _onChange = _a.onChange, resetProps = __rest(_a, ["data", "name", "value", "onChange"]);
                data = _data || data || [];
                value = _value || value || [];
                cols = data.length;

                if (Array.isArray(data)) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", console.error('Picker.multiple 数据源格式错误'));

              case 9:
                _context2.next = 11;
                return wd_mobile_components_popup__WEBPACK_IMPORTED_MODULE_2___default.a.create({
                  content: function content() {
                    var refPickers = new Array(cols).fill('').map(function () {
                      return react__WEBPACK_IMPORTED_MODULE_4__["createRef"]();
                    });
                    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
                      className: "".concat(Picker.defaultProps.prefixCls, "-multiple")
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
                      className: "".concat(Picker.defaultProps.prefixCls, "-header")
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
                      href: "javascript:;",
                      className: "x-fl",
                      onClick: function onClick() {
                        return sender.destroy();
                      }
                    }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
                      href: "javascript:;",
                      className: "x-fr",
                      onClick: function onClick() {
                        onOk && onOk(refPickers.map(function (refPicker) {
                          return refPicker.current.selectItem;
                        }), refPickers.map(function (item) {
                          return item.current;
                        }));
                        sender.destroy();
                      }
                    }, "\u786E\u5B9A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
                      className: "".concat(Picker.defaultProps.prefixCls, "-multiple-container")
                    }, data.map(function (item, index) {
                      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Picker, _extends({
                        key: "".concat(item.value, "_").concat(index),
                        data: item,
                        value: value[index],
                        ref: refPickers[index],
                        onChange: function onChange(v) {
                          return _onChange && _onChange(_extends(_extends({}, v), {
                            col: index
                          }), sender);
                        }
                      }, resetProps));
                    })));
                  },
                  mask: true,
                  onClickMask: function onClickMask() {
                    return sender.destroy();
                  },
                  animation: 'bottom',
                  offset: {
                    bottom: 0,
                    left: 0,
                    right: 0
                  },
                  rootElement: rootElement
                });

              case 11:
                sender = _context2.sent;
                return _context2.abrupt("return", pickerInstance[key] = sender);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
    /**
     * 卸载所有Picker
     * @public
     * */

  }, {
    key: "destroy",
    value: function destroy() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var sender, key;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(pickerInstance);

              case 1:
                if ((_context3.t1 = _context3.t0()).done) {
                  _context3.next = 10;
                  break;
                }

                key = _context3.t1.value;
                _context3.next = 5;
                return pickerInstance[key];

              case 5:
                sender = _context3.sent;
                sender.destroy();
                delete pickerInstance[key];
                _context3.next = 1;
                break;

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
  }]);

  return Picker;
}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]);


Picker.defaultProps = {
  prefixCls: 'x-picker',
  data: []
};

/***/ }),

/***/ "./components/picker/style/index.scss":
/*!********************************************!*\
  !*** ./components/picker/style/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/popup/style/index.scss":
/*!*******************************************!*\
  !*** ./components/popup/style/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


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

/***/ "wd-mobile/components/popup":
/*!***************************!*\
  !*** external "../popup" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wd_mobile_components_popup__;

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