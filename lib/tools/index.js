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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/tools/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/tools/dom.ts":
/*!*********************************!*\
  !*** ./components/tools/dom.ts ***!
  \*********************************/
/*! exports provided: parse, query, findAll, find, match, first, last, next, prev, parent, closest, children, contains, index, append, prepend, before, after, remove, clone, getAttr, setAttr, getText, setText, getHtml, setHtml, getHTML, setHTML, hasClass, addClass, removeClass, toggleClass, vendor, getStyle, setStyle, computeStyle, getScroll, setScroll, getOffset, setOffset, offsetParent, getRect, setRect, movable, on, off, trigger, animate, isHidden, show, hide, toggle, ready */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAll", function() { return findAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttr", function() { return getAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttr", function() { return setAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getText", function() { return getText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return setText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHtml", function() { return getHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHtml", function() { return setHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHTML", function() { return getHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHTML", function() { return setHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vendor", function() { return vendor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStyle", function() { return computeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScroll", function() { return getScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScroll", function() { return setScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffset", function() { return getOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffset", function() { return setOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetParent", function() { return offsetParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return getRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRect", function() { return setRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movable", function() { return movable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHidden", function() { return isHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var parseFix;
var parseContainer;
/**
 * 解析一段 HTML 并创建相应的节点，如果 HTML 片段中有多个根节点则返回一个文档片段
 * @param html 要解析的 HTML 片段
 * @param context 节点所属的文档
 * @example parse("<div>Hello world<div>") // <div>Hello world<div>
 */

function parse(html) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  if (!parseFix) {
    var select = [1, "<select multiple=\"multiple\">", "</select>"];
    var table = [1, "<table>", "</table>"];
    var tr = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    parseFix = {
      __proto__: null,
      option: select,
      optgroup: select,
      thead: table,
      tbody: table,
      tfoot: table,
      caption: table,
      colgroup: table,
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: tr,
      th: tr,
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"]
    };
    parseContainer = document.createElement("div");
  }

  var container = context === document ? parseContainer : context.createElement("div");
  var match = /^<(\w+)/.exec(html);
  var wrapper = match && parseFix[match[1].toLowerCase()];

  if (wrapper) {
    container.innerHTML = wrapper[1] + html + wrapper[2];

    for (var level = wrapper[0]; level--;) {
      container = container.lastChild;
    }
  } else {
    container.innerHTML = html;
  }

  var node = container.firstChild || context.createTextNode(html);

  if (node.nextSibling) {
    node = context.createDocumentFragment();

    while (container.firstChild) {
      node.appendChild(container.firstChild);
    }
  }

  return node;
}
function query(parent, selector) {
  return Array.prototype.slice.call(querySelector(parent, selector), 0);
}
function findAll(parent, selector) {
  return Array.prototype.slice.call(querySelector(parent, selector), 0);
}
function find(parent, selector) {
  return querySelector(parent, selector, true);
}
var idSeed;

function querySelector(parent, selector, first) {
  if (typeof parent === "string") {
    selector = parent;
    parent = document;
  }

  try {
    return first ? parent.querySelector(selector) : parent.querySelectorAll(selector);
  } catch (e) {
    if (parent.nodeType === 1 && selector.charCodeAt(0) === 62
    /*>*/
    ) {
        var idCreated;
        selector = "#".concat(parent.id || (idCreated = true, parent.id = "__dom_q" + (idSeed = idSeed + 1 || 1) + "__"), " ").concat(selector);

        try {
          return first ? parent.querySelector(selector) : parent.querySelectorAll(selector);
        } catch (e) {} finally {
          if (idCreated) {
            parent.id = "";
          }
        }
      }

    throw e;
  }
}
/**
 * 判断元素是否匹配指定的 CSS 选择器
 * @param elem 要处理的元素
 * @param selector 要判断的 CSS 选择器
 * @param context 选择器的上下文
 * @example match(document.body, "body") // true
 */


function match(elem, selector, context) {
  if (elem.matches) {
    try {
      return elem.matches(selector);
    } catch (e) {}
  }

  var parent = elem.parentNode;

  if (parent) {
    return Array.prototype.indexOf.call(querySelector(context || parent, selector), elem) >= 0;
  }

  parent = elem.ownerDocument.documentElement;

  try {
    parent.appendChild(elem);
    return match(elem, selector, context);
  } finally {
    parent.removeChild(elem);
  }
}
/**
 * 获取节点的第一个子元素
 * @param node 要处理的节点
 * @param selector 用于筛选元素的 CSS 选择器
 */

function first(node, selector) {
  return walk(node, selector, "nextSibling", "firstChild");
}
/**
 * 获取节点的最后一个子元素
 * @param node 要处理的节点
 * @param selector 用于筛选元素的 CSS 选择器
 */

function last(node, selector) {
  return walk(node, selector, "previousSibling", "lastChild");
}
/**
 * 获取节点的下一个相邻元素
 * @param node 要处理的节点
 * @param selector 用于筛选元素的 CSS 选择器
 */

function next(node, selector) {
  return walk(node, selector, "nextSibling");
}
/**
 * 获取节点的上一个相邻元素
 * @param node 要处理的节点
 * @param selector 用于筛选元素的 CSS 选择器
 */

function prev(node, selector) {
  return walk(node, selector, "previousSibling");
}
/**
 * 获取节点的父元素
 * @param node 要处理的节点
 * @param selector 用于筛选元素的 CSS 选择器
 */

function parent(node, selector) {
  return walk(node, selector, "parentNode");
}

function walk(node, selector, nextProp) {
  var firstProp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : nextProp;

  for (node = node[firstProp]; node; node = node[nextProp]) {
    if (node.nodeType === 1 && (!selector || match(node, selector))) {
      break;
    }
  }

  return node;
}
/**
 * 从指定节点开始向父元素查找第一个匹配指定 CSS 选择器的元素
 * @param node 要处理的节点
 * @param selector 要匹配的 CSS 选择器
 * @param context 如果提供了上下文则只在指定的元素范围内搜索，否则在整个文档查找
 * @example closest(document.body, "body")
 */


function closest(node, selector, context) {
  while (node && node !== context && (node.nodeType !== 1 || !match(node, selector, context))) {
    node = node.parentNode;
  }

  return node === context ? null : node;
}
/**
 * 获取节点的所有直接子元素
 * @param node 要处理的节点
 * @param selector 用于筛选元素的 CSS 选择器
 * @example children(document.body)
 */

function children(node, selector) {
  var nodes = [];

  for (node = node.firstChild; node; node = node.nextSibling) {
    if (node.nodeType === 1 && (!selector || match(node, selector))) {
      nodes.push(node);
    }
  }

  return nodes;
}
/**
 * 判断节点是否等同于或包含另一个节点
 * @param node 要处理的节点
 * @param child 要判断的子节点
 * @example contains(document.body, document.body) // true
 */

function contains(node, child) {
  if (node.contains) {
    return node.contains(child);
  }

  for (; child; child = child.parentNode) {
    if (child === node) {
      return true;
    }
  }

  return false;
}
/**
 * 获取节点在其父节点所有直接子元素中的索引（从 0 开始）
 * @param node 要处理的节点
 */

function index(node) {
  var r = 0;

  while (node = node.previousSibling) {
    if (node.nodeType === 1) {
      r++;
    }
  }

  return r;
}
/**
 * 在节点末尾插入一段 HTML 或一个节点，返回插入的新节点
 * @param node 要处理的节点
 * @param content 要插入的 HTML 或节点
 */

function append(node, content) {
  return insert(node, content, false, false);
}
/**
 * 在节点开头插入一段 HTML 或一个节点，返回插入的新节点
 * @param node 要处理的节点
 * @param content 要插入的 HTML 或节点
 */

function prepend(node, content) {
  return insert(node, content, true, false);
}
/**
 * 在节点前插入一段 HTML 或一个节点，返回插入的新节点
 * @param node 要处理的节点该节点必须具有父节点
 * @param content 要插入的 HTML 或节点
 */

function before(node, content) {
  return insert(node, content, true, true);
}
/**
 * 在节点后插入一段 HTML 或一个节点，返回插入的新节点
 * @param node 要处理的节点该节点必须具有父节点
 * @param content 要插入的 HTML 或节点
 */

function after(node, content) {
  return insert(node, content, false, true);
}

function insert(node, content, prepend, sibling) {
  if (content == null) {
    return null;
  }

  if (_typeof(content) !== "object") {
    content = parse(content, node.ownerDocument || node);
  }

  if (sibling) {
    return node.parentNode.insertBefore(content, prepend ? node : node.nextSibling);
  }

  return prepend ? node.insertBefore(content, node.firstChild) : node.appendChild(content);
}
/**
 * 从文档中移除节点
 * @param node 要移除的节点
 */


function remove(node) {
  node && node.parentNode && node.parentNode.removeChild(node);
}
/**
 * 复制节点及其子节点，返回复制的节点
 * @param node 要复制的节点
 */

function clone(node) {
  return node.cloneNode(true);
}
/**
 * 获取元素的属性值，如果属性不存在则返回 null
 * @param elem 要处理的元素
 * @param attrName 要获取的属性名（使用骆驼规则，如 `readOnly`）
 * @example getAttr(document.body, "class")
 */

function getAttr(elem, attrName) {
  return attrName in elem ? elem[attrName] : elem.getAttribute(attrName);
}
/**
 * 设置元素的属性值
 * @param elem 要处理的元素
 * @param attrName 要设置的属性名（使用骆驼规则，如 `readOnly`）
 * @param value 要设置的属性值设置为 null 表示删除属性
 * @example setAttr(document.body, "class", "red")
 * @example setAttr(document.body, "class", null)
 */

function setAttr(elem, attrName, value) {
  if (value != null && typeof value !== "string" || attrName in elem && !/^on./.test(attrName)) {
    if (value == null && typeof elem[attrName] === "string") {
      value = "";
    }

    try {
      elem[attrName] = value;
    } catch (e) {
      // IE Edge: elem.colSpan = 0 抛出异常
      if (attrName === "colSpan") {
        elem.colSpan = +value > 0 ? +value : 1;
      } else {
        throw e;
      }
    }
  } else if (value == null) {
    elem.removeAttribute(attrName);
  } else {
    elem.setAttribute(attrName, value);
  }
}
/**
 * 获取元素的文本内容，如果是输入框则返回其输入的值
 * @param elem 要处理的元素
 * @example getText(document.body)
 */

function getText(elem) {
  return elem[textProp(elem)];
}
/**
 * 设置元素的文本内容，如果是输入框则设置其输入的值
 * @param elem 要处理的元素
 * @param value 要设置的文本内容
 * @example setText(document.body, "text")
 */

function setText(elem, value) {
  elem[textProp(elem)] = value;
}

function textProp(elem) {
  return /^(INPUT|SELECT|TEXTAREA)$/.test(elem.tagName) ? "value" : "textContent";
}
/**
 * 获取元素的内部的 HTML
 * @param elem 要处理的元素
 * @example getHtml(document.body)
 */


function getHtml(elem) {
  return elem.innerHTML;
}
/**
 * 设置元素的内部的 HTML
 * @param elem 要处理的元素
 * @param value 要设置的内部 HTML
 * @example setHtml(document.body, "html")
 */

function setHtml(elem, value) {
  elem.innerHTML = value;
}
/**
 * 获取元素的内部的 HTML
 * @param elem 要处理的元素
 * @example getHtml(document.body)
 */

function getHTML(elem) {
  return elem.innerHTML;
}
/**
 * 设置元素的内部的 HTML
 * @param elem 要处理的元素
 * @param value 要设置的内部 HTML
 * @example setHtml(document.body, "html")
 */

function setHTML(elem, value) {
  elem.innerHTML = value;
}
/**
 * 判断元素是否已添加指定的 CSS 类名
 * @param elem 要处理的元素
 * @param className 要判断的 CSS 类名（只能有一个）
 */

function hasClass(elem, className) {
  return (" " + elem.className + " ").indexOf(" " + className + " ") >= 0;
}
/**
 * 添加元素的 CSS 类名
 * @param elem 要处理的元素
 * @param className 要添加的 CSS 类名（只能有一个）
 * @example addClass(document.body, "light")
 */

function addClass(elem, className) {
  toggleClass(elem, className, true);
}
/**
 * 删除元素的 CSS 类名
 * @param elem 要处理的元素
 * @param className 要删除的 CSS 类名（只能有一个）
 * @example removeClass(document.body, "light")
 */

function removeClass(elem, className) {
  toggleClass(elem, className, false);
}
/**
 * 如果存在（不存在）则删除（添加）元素的 CSS 类名
 * @param elem 要处理的元素
 * @param className 要添加或删除的 CSS 类名（只能有一个）
 * @param value 如果为 true 则强制添加 CSS 类名，如果为 false 则强制删除 CSS 类名
 * @example toggleClass(document.body, "light")
 */

function toggleClass(elem, className, value) {
  if (hasClass(elem, className)) {
    if (!value) {
      elem.className = (" " + elem.className + " ").replace(" " + className + " ", " ").trim();
    }
  } else if (value === undefined || value) {
    elem.className = elem.className ? elem.className + " " + className : className;
  }
}
/**
 * 返回已添加当前浏览器特定的样式前缀（如 "webkit-"）的 CSS 属性名
 * @param propName 要处理的 CSS 属性名
 * @example vendor("transform")
 */

function vendor(propName) {
  if (!(propName in document.documentElement.style)) {
    var capName = propName.charAt(0).toUpperCase() + propName.slice(1);

    for (var _i = 0, _arr = ["webkit", "Moz", "ms", "O"]; _i < _arr.length; _i++) {
      var prefix = _arr[_i];

      if (prefix + capName in document.documentElement.style) {
        return prefix + capName;
      }
    }
  }

  return propName;
}
/**
 * 获取元素的实际的 CSS 属性值
 * @param elem 要处理的元素
 * @param propName 要获取的 CSS 属性名（使用骆驼规则，如 "fontSize"）
 * @example getStyle(document.body, "fontSize")
 */

function getStyle(elem, propName) {
  return elem.ownerDocument.defaultView.getComputedStyle(elem)[vendor(propName)];
}
/**
 * 设置元素的 CSS 属性值
 * @param elem 要处理的元素
 * @param propName 要设置的 CSS 属性名（使用骆驼规则，如 "fontSize"）
 * @param value 要设置的 CSS 属性值如果是数字则自动追加像素单位
 * @example setStyle(document.body, "fontSize")
 */

function setStyle(elem, propName, value) {
  elem.style[vendor(propName)] = value && typeof value === "number" && !/^(?:columnCount|fillOpacity|flexGrow|flexShrink|fontWeight|lineHeight|opacity|order|orphans|widows|zIndex|zoom)$/.test(propName) ? value + "px" : value;
}
/**
 * 计算一个元素所有 CSS 属性值的和（如果是长度则以像素为单位）
 * @param elem 要计算的元素
 * @param propNames 要计算的 CSS 属性名（使用骆驼规则，如 `fontSize`）列表
 * @example computeStyle(document.body, "fontSize", "lineHeight")
 */

function computeStyle(elem) {
  var value = 0;
  var computedStyle = elem.ownerDocument.defaultView.getComputedStyle(elem);

  for (var _len = arguments.length, propNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    propNames[_key - 1] = arguments[_key];
  }

  for (var _i2 = 0, _propNames = propNames; _i2 < _propNames.length; _i2++) {
    var propName = _propNames[_i2];
    value += parseFloat(computedStyle[propName]) || 0;
  }

  return value;
}
/**
 * 获取元素的滚动距离，如果元素不可滚动则返回原点
 * @param elem 要处理的元素或文档
 * @example getScroll(document.body)
 */

function getScroll(elem) {
  if (elem.nodeType === 9) {
    var win = elem.defaultView;

    if ("pageXOffset" in win) {
      return {
        x: win.pageXOffset,
        y: win.pageYOffset
      };
    }

    elem = elem.documentElement;
  }

  return {
    x: elem.scrollLeft,
    y: elem.scrollTop
  };
}
/**
 * 设置元素的滚动距离
 * @param elem 要处理的元素或文档
 * @param value 要设置的坐标允许只设置部分属性
 * @example setScroll(document.body, { x: 100, y: 500 })
 */

function setScroll(elem, value) {
  if (elem.nodeType === 9) {
    elem.defaultView.scrollTo((value.x == null ? getScroll(elem) : value).x, (value.y == null ? getScroll(elem) : value).y);
  } else {
    if (value.x != null) elem.scrollLeft = value.x;
    if (value.y != null) elem.scrollTop = value.y;
  }
}
/**
 * 获取元素和其定位父元素的偏移距离，如果元素未设置定位信息则返回原点
 * @param elem 要处理的元素
 * @example getOffset(document.body)
 */

function getOffset(elem) {
  var left = getStyle(elem, "left");
  var top = getStyle(elem, "top");

  if (left && top && left !== "auto" && top !== "auto" || getStyle(elem, "position") !== "absolute") {
    return {
      x: parseFloat(left) || 0,
      y: parseFloat(top) || 0
    };
  }

  var parent = offsetParent(elem);
  var rect = getRect(elem);

  if (parent.nodeName !== "HTML") {
    var rootRect = getRect(parent);
    rect.x -= rootRect.x;
    rect.y -= rootRect.y;
  }

  rect.x -= computeStyle(elem, "marginLeft") + computeStyle(parent, "borderLeftWidth");
  rect.y -= computeStyle(elem, "marginTop") + computeStyle(parent, "borderTopWidth");
  return rect;
}
/**
 * 设置元素和其定位父元素的偏移距离
 * @param elem 要处理的元素
 * @param value 要设置的坐标允许只设置部分属性
 * @example setOffset(document.body, { x: 100 })
 */

function setOffset(elem, value) {
  if (value.x >= 0) {
    elem.style.left = value.x + "px";
  }

  if (value.y >= 0) {
    elem.style.top = value.y + "px";
  }
}
/**
 * 获取元素的定位父元素
 * @param elem 要处理的元素
 * @example offsetParent(document.body)
 */

function offsetParent(elem) {
  var node = elem;

  while ((node = node.offsetParent) && node.nodeName !== "HTML" && getStyle(node, "position") === "static") {
    return node || elem.ownerDocument.documentElement;
  }

  return node;
}
/**
 * 获取元素实际占用的区域（包括内边距和边框、不包括外边距），如果元素不可见则返回空区域
 * @param elem 要处理的元素或文档
 * @example getRect(document.body)
 */

function getRect(elem) {
  var doc = elem.ownerDocument || elem;
  var html = doc.documentElement;
  var rect = getScroll(doc);

  if (elem.nodeType === 9) {
    rect.width = Math.max(elem.defaultView.innerWidth, html.clientWidth);
    rect.height = Math.max(elem.defaultView.innerHeight, html.clientHeight);
  } else {
    var elemRect = elem.getBoundingClientRect();
    rect.x += elemRect.left - html.clientLeft;
    rect.y += elemRect.top - html.clientTop;
    rect.width = elemRect.width;
    rect.height = elemRect.height;
  }

  return rect;
}
/**
 * 设置元素的区域
 * @param elem 要处理的元素
 * @param value 要设置的区域（包括内边距和边框、不包括外边距），允许只设置部分属性
 * @example setRect(document.body, {width: 200, height: 400})
 */

function setRect(elem, value) {
  var style = elem.style;

  if (value.x != null || value.y != null) {
    movable(elem);
    var currentPosition = getRect(elem);
    var offset = getOffset(elem);

    if (value.y != null) {
      style.top = offset.y + value.y - currentPosition.y + "px";
    }

    if (value.x != null) {
      style.left = offset.x + value.x - currentPosition.x + "px";
    }
  }

  if (value.width != null || value.height != null) {
    var boxSizing = getStyle(elem, "boxSizing") === "border-box";

    if (value.width != null) {
      style.width = value.width - (boxSizing ? 0 : computeStyle(elem, "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight")) + "px";
    }

    if (value.height != null) {
      style.height = value.height - (boxSizing ? 0 : computeStyle(elem, "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom")) + "px";
    }
  }
}
/**
 * 确保指定的元素可移动
 * @param elem 要处理的元素
 */

function movable(elem) {
  if (!/^(?:abs|fix)/.test(getStyle(elem, "position"))) {
    elem.style.position = "relative";
  }
}
var eventFix;
var defaultEventOptions = false;
function on(elem, eventName, selector, eventHandler, thisArg, eventOptions) {
  if (!eventFix) {
    // 检测是否支持 {passive: true}
    var opt = {
      get passive() {
        defaultEventOptions = {
          passive: false
        };
        return true;
      }

    };
    document.addEventListener("__passive__", null, opt);
    document.removeEventListener("__passive__", null, opt);

    var isEnterOrLeave = function isEnterOrLeave(e, sender) {
      return e.type.length === 12 || e.type.length === 10 && e.type.charCodeAt(0) === 109
      /*m*/
      || !contains(sender, e.relatedTarget);
    };

    eventFix = {
      __proto__: null,
      // focus/blur 不支持冒泡，委托时使用 foucin/foucsout
      focus: {
        delegate: "focusin"
      },
      blur: {
        delegate: "focusout"
      },
      // mouseenter/mouseleave 不支持冒泡，委托时使用 mouseover/mouseout
      mouseenter: {
        delegate: "mouseover",
        filter: isEnterOrLeave
      },
      mouseleave: {
        delegate: "mouseout",
        filter: isEnterOrLeave
      },
      // pointerenter/pointerleave 不支持冒泡，委托时使用 pointerover/pointerout
      pointerenter: {
        delegate: "pointerover",
        filter: isEnterOrLeave
      },
      pointerleave: {
        delegate: "pointerout",
        filter: isEnterOrLeave
      },
      mouseclick: {
        bind: "click"
      }
    };

    if (window.mozInnerScreenX !== undefined) {
      // FF 51-：不支持 focusin/focusout 事件
      var focusAdd = function focusAdd(elem, eventHandler) {
        elem.addEventListener(this.bind, eventHandler, true);
      };

      var focusRemove = function focusRemove(elem, eventHandler) {
        elem.removeEventListener(this.bind, eventHandler, true);
      };

      eventFix.focusin = {
        bind: "focus",
        add: focusAdd,
        remove: focusRemove
      };
      eventFix.focusout = {
        bind: "blur",
        add: focusAdd,
        remove: focusRemove
      }; // FF：右击也会触发 click 事件

      eventFix.click = {
        filter: function filter(e) {
          return !e.button;
        }
      };
    }

    var html = Document.prototype; // FF：不支持 mousewheel 事件

    if (!("onmousewheel" in html)) {
      eventFix.mousewheel = {
        bind: "DOMMouseScroll",
        filter: function filter(e) {
          // 统一使用 wheelDelta 获取滚轮距离
          e.wheelDelta = -(e.detail || 0) / 3;
        }
      };
    } // FF、CH 30-：不支持 mouseenter/mouseleave 事件


    if (!("onmouseenter" in html)) {
      eventFix.mouseenter.bind = "mouseover";
      eventFix.mouseleave.bind = "mouseout";
    } // 低版本浏览器：不支持 auxclick 事件


    if (!("onauxclick" in html)) {
      eventFix.auxclick = {
        bind: "mouseup",
        filter: function filter(e) {
          return e.button === 2;
        }
      };
    } // 低版本浏览器：不支持 pointer* 事件


    if (!("onpointerdown" in html)) {
      eventFix.pointerover = {
        bind: "mouseover"
      };
      eventFix.pointerout = {
        bind: "mouseout"
      };
      eventFix.pointerenter.bind = eventFix.mouseenter.bind || "mouseenter";
      eventFix.pointerenter.delegate = "mouseover";
      eventFix.pointerleave.bind = eventFix.mouseleave.bind || "mouseleave";
      eventFix.pointerleave.delegate = "mouseout";
      eventFix.pointerdown = {
        bind: "mousedown"
      };
      eventFix.pointerup = {
        bind: "mouseup"
      };
      eventFix.pointermove = {
        bind: "mousemove"
      };
    } // 触屏：适配鼠标事件


    if (window.TouchEvent) {
      // 将触摸事件模拟成鼠标事件
      Object.defineProperty(TouchEvent.prototype, "button", {
        value: 1,
        configurable: true,
        enumerable: true
      });

      var _loop = function _loop() {
        var prop = _arr2[_i3];
        Object.defineProperty(TouchEvent.prototype, prop, {
          get: function get() {
            return this.changedTouches[0][prop];
          },
          configurable: true,
          enumerable: true
        });
      };

      for (var _i3 = 0, _arr2 = ["pageX", "pageY", "clientX", "clientY", "screenX", "screenY"]; _i3 < _arr2.length; _i3++) {
        _loop();
      }

      var requireClick = function requireClick(elem) {
        switch (elem.tagName.toUpperCase()) {
          case "INPUT":
            switch (elem.type) {
              case "button":
                return false;
            }

            return !elem.disabled && !elem.readOnly;

          case "TEXTAREA":
          case "SELECT":
          case "LABEL":
          case "IFRAME":
          case "VIDEO":
          case "AUDIO":
          case "PROGRESS":
          case "SUMMARY":
            return true;

          default:
            return false;
        }
      }; // 解决部分设备 click 300ms 延时问题


      eventFix.click = {
        add: function add(elem, eventHandler) {
          var state = 0;
          elem.addEventListener("touchstart", eventHandler.__touchStart__ = function (e) {
            if (e.changedTouches.length === 1) {
              state = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
            }
          }, false);
          elem.addEventListener("touchend", eventHandler.__touchEnd__ = function (e) {
            if (state && e.changedTouches.length === 1 && Math.pow(e.changedTouches[0].pageX - state[0], 2) + Math.pow(e.changedTouches[0].pageY - state[1], 2) < 25) {
              state = 1; // 禁用非特定情况的事件防止点击穿透

              if (!requireClick(e.target) && !requireClick(elem)) {
                e.preventDefault();
              }

              eventHandler.call(elem, e);
            }
          }, false);
          elem.addEventListener("click", eventHandler.__click__ = function (e) {
            var trigger = state !== 1;
            state = 0;
            trigger && eventHandler.call(elem, e);
          }, false);
        },
        remove: function remove(elem, eventHandler) {
          elem.removeEventListener("touchstart", eventHandler.__touchStart__, false);
          elem.removeEventListener("touchend", eventHandler.__touchEnd__, false);
          elem.removeEventListener("click", eventHandler.__click__, false);
        }
      };

      var pointerAdd = function pointerAdd(elem, eventHandler, eventOptions) {
        var state = 0;
        elem.addEventListener(this.touch, eventHandler.__touch__ = function (e) {
          state = 1;
          eventHandler.call(this, e);
        }, eventOptions);
        elem.addEventListener(this.bind, eventHandler.__mouse__ = function (e) {
          if (state) {
            state = 0;
          } else {
            eventHandler.call(this, e);
          }
        }, eventOptions);
      };

      var pointerRemove = function pointerRemove(elem, eventHandler, eventOptions) {
        elem.removeEventListener(this.touch, eventHandler.__touch__, eventOptions);
        elem.removeEventListener(this.bind, eventHandler.__mouse__, eventOptions);
      }; // CH: 虽然 Chrome 支持 pointer 事件，但如果调用了 e.preventDefault() 会导致 pointermove 无法触发


      eventFix.pointerdown = {
        bind: "mousedown",
        touch: "touchstart",
        add: pointerAdd,
        remove: pointerRemove
      }; // CH: 虽然 Chrome 支持 pointer 事件，但不支持 e.preventDefault()，改用 touch+mouse

      eventFix.pointermove = {
        bind: "mousemove",
        touch: "touchmove",
        add: pointerAdd,
        remove: pointerRemove
      };
      eventFix.pointerup = {
        bind: "mouseup",
        touch: "touchend",
        add: function add(elem, eventHandler, eventOptions) {
          pointerAdd.call(this, elem, eventHandler, eventOptions);
          elem.addEventListener("touchcancel", eventHandler.__touch__, eventOptions);
        },
        remove: function remove(elem, eventHandler, eventOptions) {
          pointerRemove.call(this, elem, eventHandler, eventOptions);
          elem.removeEventListener("touchcancel", eventHandler.__touch__, eventOptions);
        }
      };
    }
  }

  if (typeof selector === "function") {
    eventOptions = thisArg;
    thisArg = eventHandler;
    eventHandler = selector;
    selector = "";
  }

  thisArg = thisArg || elem;

  if (!eventOptions || !defaultEventOptions) {
    eventOptions = defaultEventOptions;
  }

  var events = elem.__events__ || (elem.__events__ = {
    __proto__: null
  });
  var key = selector ? eventName + " " + selector : eventName;
  var eventHandlers = events[key];
  var originalFix = eventFix[eventName];
  var fix = selector && originalFix && originalFix.delegate ? eventFix[eventName = originalFix.delegate] : originalFix; // 如果满足以下任一情况，需要重新封装监听器
  // 1. 事件委托，需要重新定位目标元素
  // 2. 事件有特殊过滤器，仅在满足条件时触发
  // 3. 需要重写回调函数中的 this
  // 4. 监听器具有第二参数，需要重写回调函数的第二参数
  // 5. 监听器已添加函数，需要重新封装才能绑定成功

  if (selector || thisArg !== elem || fix && fix.filter || eventHandler.length > 1 || eventHandlers && indexOfHandler(eventHandlers, eventHandler, thisArg) >= 0) {
    var originalHandler = eventHandler;
    eventHandler = selector ? function (e) {
      var sender = closest(e.target, selector, elem);

      if (!sender) {
        return;
      }

      if (originalFix && originalFix !== fix && originalFix.filter && originalFix.filter(e, sender) === false) {
        return;
      }

      if (fix && fix.filter && fix.filter(e, sender) === false) {
        return;
      }

      originalHandler.call(thisArg, e, sender);
    } : function (e) {
      if (fix && fix.filter && fix.filter(e, elem) === false) {
        return;
      }

      originalHandler.call(thisArg, e, thisArg);
    };
    eventHandler.__original__ = originalHandler;
    eventHandler.__this__ = thisArg;
  } // 保存监听器以便之后解绑或手动触发事件


  if (!eventHandlers) {
    events[key] = eventHandler;
  } else if (Array.isArray(eventHandlers)) {
    eventHandlers.push(eventHandler);
  } else {
    events[key] = [eventHandlers, eventHandler];
  } // 底层绑定事件


  if (fix && fix.add) {
    fix.add(elem, eventHandler, eventOptions);
  } else {
    elem.addEventListener(fix && fix.bind || eventName, eventHandler, eventOptions);
  }
}
function off(elem, eventName, selector, eventHandler, thisArg, eventOptions) {
  if (typeof selector === "function") {
    eventOptions = thisArg;
    thisArg = eventHandler;
    eventHandler = selector;
    selector = "";
  }

  thisArg = thisArg || elem;

  if (!eventOptions || !defaultEventOptions) {
    eventOptions = defaultEventOptions;
  }

  var events = elem.__events__;
  var key = selector ? eventName + " " + selector : eventName;
  var eventHandlers = events && events[key];

  if (!eventHandlers) {
    return;
  }

  if (eventHandler) {
    // 更新事件列表
    var _index = indexOfHandler(eventHandlers, eventHandler, thisArg);

    if (~_index) {
      if (Array.isArray(eventHandlers)) {
        eventHandler = eventHandlers[_index];
        eventHandlers.splice(_index, 1);

        if (!eventHandlers.length) {
          delete events[key];
        }
      } else {
        eventHandler = eventHandlers;
        delete events[key];
      }
    } // 底层解绑事件


    var fix = eventFix && eventFix[eventName];

    if (fix && fix.remove) {
      fix.remove(elem, eventHandler, eventOptions);
    } else {
      elem.removeEventListener(fix && (selector ? fix.delegate : fix.bind) || eventName, eventHandler, eventOptions);
    }
  } else if (Array.isArray(eventHandlers)) {
    var _iterator = _createForOfIteratorHelper(eventHandlers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        eventHandler = _step.value;
        off(elem, eventName, selector, eventHandler, thisArg);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    off(elem, eventName, selector, eventHandlers, thisArg);
  }
}

function indexOfHandler(eventHandlers, eventHandler, thisArg) {
  if (Array.isArray(eventHandlers)) {
    for (var i = 0; i < eventHandlers.length; i++) {
      if (eventHandlers[i] === eventHandler || eventHandlers[i].__original__ === eventHandler && eventHandlers[i].__this__ === thisArg) {
        return i;
      }
    }

    return -1;
  }

  return eventHandlers === eventHandler || eventHandlers.__original__ === eventHandler && eventHandlers.__this__ === thisArg ? 0 : -1;
}

function trigger(elem, eventName, selector, event) {
  if (typeof selector !== "string") {
    event = selector;
    selector = "";
  }

  var eventHandlers = elem.__events__ && elem.__events__[selector ? eventName + " " + selector : eventName];

  if (!eventHandlers) {
    return;
  }

  event = event || {};
  if (!event.type) event.type = eventName;
  if (!event.target) event.target = selector ? find(elem, selector) : elem;

  if (Array.isArray(eventHandlers)) {
    var _iterator2 = _createForOfIteratorHelper(eventHandlers.slice(0)),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var eventHandler = _step2.value;
        eventHandler.call(elem, event);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } else {
    eventHandlers.call(elem, event);
  }
}
/** 存储特效相关配置 */

var animateFix;
/**
 * 执行一个自定义渐变
 * @param elem 要处理的元素
 * @param propNames 要渐变的 CSS 属性名和最终的属性值组成的键值对
 * @param callback 渐变执行结束的回调函数
 * @param duration 渐变执行的总毫秒数
 * @param timingFunction 渐变函数可以使用 CSS3 预设的特效渐变函数
 * @example animate(document.body, { height: 400 })
 */

function animate(elem, propNames, callback) {
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 200;
  var timingFunction = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "ease";

  if (!animateFix) {
    var transition = vendor("transition");
    animateFix = {
      support: transition in document.documentElement.style,
      transition: transition,
      transitionEnd: (transition + "End").replace(transition.length > 10 ? /^[A-Z]/ : /[A-Z]/, function (w) {
        return w.toLowerCase();
      })
    };
  }

  if (animateFix.support && duration !== 0) {
    var context = elem.style.__animate__ || (elem.style.__animate__ = {});

    var updateTransition = function updateTransition() {
      var transition = "";

      for (var key in context) {
        if (transition) transition += ",";
        transition += "".concat(key.replace(/[A-Z]|^ms|^webkit/g, function (word) {
          return "-" + word.toLowerCase();
        }), " ").concat(duration, "ms ").concat(timingFunction);
      }

      elem.style[animateFix.transition] = transition;
    };

    var transitionEnd = function transitionEnd(e) {
      // 忽略冒泡导致的调用
      if (timer && (!e || e.target === e.currentTarget)) {
        clearTimeout(timer);
        timer = 0;
        elem.removeEventListener(animateFix.transitionEnd, transitionEnd, false); // 如果新的渐变覆盖了当前渐变的所有属性，则不触发本次渐变的回调函数

        var contextUpdated = false;

        for (var key in context) {
          if (context[key] === transitionEnd) {
            delete context[key];
            contextUpdated = true;
          }
        }

        if (contextUpdated) {
          updateTransition();
          callback && callback();
        }
      }
    }; // 设置所有属性为起始值


    for (var propName in propNames) {
      propName = vendor(propName);
      context[propName] = transitionEnd;

      if (!elem.style[propName]) {
        elem.style[propName] = getStyle(elem, propName);
      }
    } // 触发重新布局以保证效果可以触发


    elem.offsetWidth && elem.clientLeft; // 设置要渐变的属性

    updateTransition(); // 绑定渐变完成事件

    elem.addEventListener(animateFix.transitionEnd, transitionEnd, false);
    var timer = setTimeout(transitionEnd, duration);
  } else {
    callback && setTimeout(callback, duration);
  } // 设置属性为最终值，触发动画


  for (var _propName in propNames) {
    setStyle(elem, _propName, propNames[_propName]);
  }
}
/**
 * 判断指定的元素是否被隐藏或正在被隐藏
 * @param elem 要处理的元素
 * @example isHidden(document.body)
 */

function isHidden(elem) {
  return elem.style.__toggle__ === false || (elem.style.display || getStyle(elem, "display")) === "none";
}
/** 存储标签默认的 display 属性 */

var defaultDisplays;
/** 存储内置切换动画 */

var toggleAnimations;
/**
 * 显示一个元素
 * @param elem 要处理的元素
 * @param animation 显示时使用的动画
 * @param callback 动画执行完成后的回调
 * @param duration 动画执行的总毫秒数
 * @param timingFunction 渐变函数可以使用 CSS3 预设的特效渐变函数
 * @param target 动画的目标元素
 */

function show(elem, animation, callback, duration, timingFunction, target) {
  if (animation || callback) {
    toggle(elem, true, animation, callback, duration, timingFunction, target);
  } else {
    elem.style.display = elem.style.__display__ || "";

    if (elem.style.__toggle__ === false) {
      delete elem.style.__toggle__;
    } // 如果清空内联 display 后 display 仍然为 none, 说明通过 CSS 设置了 display 属性
    // 这时将元素强制设为 inline 或 block


    if (getStyle(elem, "display") === "none") {
      var nodeName = elem.nodeName;
      var defaultDisplay = (defaultDisplays || (defaultDisplays = {
        __proto__: null
      }))[nodeName];

      if (!defaultDisplay) {
        // 创建一个新节点以计算其默认的 display 属性
        var tmp = document.createElement(nodeName);
        document.body.appendChild(tmp);
        defaultDisplay = getStyle(tmp, "display");
        document.body.removeChild(tmp); // 如果计算失败则设置为默认的 block

        if (defaultDisplay === "none") {
          defaultDisplay = "block";
        } // 缓存以加速下次计算


        defaultDisplays[nodeName] = defaultDisplay;
      }

      elem.style.display = defaultDisplay;
    }
  }
}
/**
 * 隐藏元素
 * @param elem 要处理的元素
 * @param animation 显示时使用的动画
 * @param callback 动画执行完成后的回调
 * @param duration 动画执行的总毫秒数
 * @param timingFunction 渐变函数可以使用 CSS3 预设的特效渐变函数
 * @param target 动画的目标元素
 */

function hide(elem, animation, callback, duration, timingFunction, target) {
  if (animation || callback) {
    toggle(elem, false, animation, callback, duration, timingFunction, target);
  } else {
    var currentDisplay = getStyle(elem, "display");

    if (elem.style.__toggle__ === true) {
      delete elem.style.__toggle__;
    }

    if (currentDisplay !== "none") {
      elem.style.__display__ = elem.style.display;
      elem.style.display = "none";
    }
  }
}
function toggle(elem, value, animation, callback, duration, timingFunction, target) {
  if (typeof value !== "boolean") {
    target = timingFunction;
    timingFunction = duration;
    duration = callback;
    callback = animation;
    animation = value;
    value = undefined;
  }

  if (value === undefined) {
    value = isHidden(elem);
  }

  if (typeof animation === "string") {
    animation = (toggleAnimations || (toggleAnimations = {
      opacity: {
        opacity: 0
      },
      height: {
        marginTop: 0,
        borderTopWidth: 0,
        paddingTop: 0,
        height: 0,
        paddingBottom: 0,
        borderBottomWidth: 0,
        marginBottom: 0
      },
      width: {
        marginLeft: 0,
        borderLeftWidth: 0,
        paddingLeft: 0,
        width: 0,
        paddinRight: 0,
        borderRightWidth: 0,
        marginRight: 0
      },
      top: {
        transform: "translateY(-100%)"
      },
      bottom: {
        transform: "translateY(100%)"
      },
      left: {
        transform: "translateX(-100%)"
      },
      right: {
        transform: "translateX(100%)"
      },
      scale: {
        transform: "scale(0, 0)"
      },
      scaleX: {
        transform: "scaleX(0)"
      },
      scaleY: {
        transform: "scaleY(0)"
      },
      slideUp: {
        opacity: 0,
        transform: "translateY(10%)"
      },
      slideLeft: {
        opacity: 0,
        transform: "translateX(10%)"
      },
      slideDown: {
        opacity: 0,
        transform: "translateY(-10%)"
      },
      slideRight: {
        opacity: 0,
        transform: "translateX(-10%)"
      },
      zoomOut: {
        opacity: 0,
        transform: "scale(0, 0)"
      },
      zoomIn: {
        opacity: 0,
        transform: "scale(1.2, 1.2)"
      },
      rotate: {
        opacity: 0,
        transform: "rotate(-180deg)"
      }
    }))[animation];
  }

  if (animation && duration !== 0) {
    // 优先显示元素以便后续计算
    if (value) {
      show(elem);
    } // 设置渐变目标
    // 如果正在执行渐变，计算新目标会出现错误，直接复用上次设置的目标


    var setTransformOrigin = target && animation.transform && elem.style.__toggle__ == undefined;

    if (setTransformOrigin) {
      var targetRect = getRect(target);
      var elemRect = getRect(elem);
      setStyle(elem, "transformOrigin", "".concat((elemRect.x + elemRect.width <= targetRect.x + targetRect.width / 4 ? targetRect.x : targetRect.x + targetRect.width <= elemRect.x + targetRect.width / 4 ? targetRect.x + targetRect.width : targetRect.x + targetRect.width / 2) - elemRect.x, "px ").concat((elemRect.y + elemRect.height <= targetRect.y + targetRect.height / 4 ? targetRect.y : targetRect.y + targetRect.height <= elemRect.y + targetRect.height / 4 ? targetRect.y + targetRect.height : targetRect.y + targetRect.height / 2) - elemRect.y, "px"));
    } // 更改宽高时隐藏滚动条


    var setOverflowX = animation.width != undefined;

    if (setOverflowX) {
      elem.style.overflowX = "hidden";
    }

    var setOverflowY = animation.height != undefined;

    if (setOverflowY) {
      elem.style.overflowY = "hidden";
    } // 计算渐变的最终属性
    // 如果需要隐藏元素，则 animation 表示最终属性
    // 如果需要显示元素，则需要手动计算最终属性


    var to = animation;

    if (value) {
      to = {}; // 如果正在执行渐变，则从当前位置开始渐变而非从隐藏时的值属性开始，同时停止渐变用于计算最终属性

      var from = animation;

      if (elem.style.__toggle__ != undefined) {
        from = {};

        for (var prop in animation) {
          from[prop] = getStyle(elem, prop);
          setStyle(elem, prop, "");
        }

        elem.style[animateFix.transition] = "";
      } // 计算最终属性值并将属性重置为初始值


      for (var _prop in animation) {
        to[_prop] = getStyle(elem, _prop);
        setStyle(elem, _prop, from[_prop]);
      }
    } // 执行渐变


    elem.style.__toggle__ = value;
    animate(elem, to, function () {
      delete elem.style.__toggle__;

      if (setOverflowX) {
        elem.style.minWidth = elem.style.overflowX = "";
      }

      if (setOverflowY) {
        elem.style.minHeight = elem.style.overflowY = "";
      }

      if (setTransformOrigin) {
        setStyle(elem, "transformOrigin", "");
      }

      for (var _prop2 in to) {
        setStyle(elem, _prop2, "");
      }

      if (!value) {
        hide(elem);
      }

      callback && callback(value);
    }, duration, timingFunction);
  } else {
    value ? show(elem) : hide(elem);
    callback && callback(value);
  }
}
/**
 * 确保在文档加载完成后再执行指定的函数
 * @param callback 要执行的回调函数
 * @param context 要等待的文档对象
 */

function ready(callback) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  if (/^(?:complete|loaded|interactive)$/.test(context.readyState) && context.body) {
    callback.call(context);
  } else {
    context.addEventListener("DOMContentLoaded", callback, false);
  }
}

/***/ }),

/***/ "./components/tools/function.ts":
/*!**************************************!*\
  !*** ./components/tools/function.ts ***!
  \**************************************/
/*! exports provided: defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/**
 * 创建一个新函数，调用该函数后，延时调用原函数。如果在延时等待期间有新的调用，则重新开始计时。
 * @param fn 要调用的原函数。
 * @param timeout 延时的毫秒数。
 * @return 返回一个新函数。
 * @example document.onscroll = defer(() => console.log("延时执行"), 100);
 */
function defer(fn) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var timer;
  return function () {
    var _this = this;

    var args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      timer = 0;
      fn.apply(_this, args);
    }, duration);
  };
}

/***/ }),

/***/ "./components/tools/helper.tsx":
/*!*************************************!*\
  !*** ./components/tools/helper.tsx ***!
  \*************************************/
/*! exports provided: getReactNode, setTransform, getMetaValue, getUuidFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReactNode", function() { return getReactNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransform", function() { return setTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetaValue", function() { return getMetaValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUuidFn", function() { return getUuidFn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 最终获取一个元素节点
 * @param {any} Node 一个节点&组件&任意数据
 * */

function getReactNode(Node) {
  return react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](Node) || typeof Node === 'string' ? Node : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Node, null);
}
/**
 * 设置元素 css3 transform 属性
 * @param {element} ele 一个节点
 * @param {string} attribute 属性值
 * */

function setTransform(ele, attribute) {
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };

  for (var name in transformNames) {
    if (ele.style[transformNames[name]] !== undefined) {
      ele.style[transformNames[name]] = attribute;
    }
  }
}
/**
 * 获取meta标签的content值
 * @param {string} name meta中的name
 * */

function getMetaValue(name) {
  var meta = Array.from(document.getElementsByTagName('meta')).filter(function (item) {
    return item.name === name;
  })[0];
  var value = meta ? meta.content && meta.content.toLowerCase() : null;
  if (name === 'theme' && value !== 'ios' && value !== 'android') value = 'ios';
  return value;
}
/**
 * 创建一个生成唯一标示的函数
 * */

function getUuidFn(key) {
  var id = 0;
  var nowDate = Date.now();
  return function () {
    return "".concat(key, "_").concat(nowDate, "_").concat(id++);
  };
}

/***/ }),

/***/ "./components/tools/index.ts":
/*!***********************************!*\
  !*** ./components/tools/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./components/tools/dom.ts");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./components/tools/scroll.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./components/tools/helper.tsx");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function */ "./components/tools/function.ts");




/* harmony default export */ __webpack_exports__["default"] = ({
  dom: _dom__WEBPACK_IMPORTED_MODULE_0__,
  helper: _helper__WEBPACK_IMPORTED_MODULE_2__,
  scroll: _scroll__WEBPACK_IMPORTED_MODULE_1__,
  fns: _function__WEBPACK_IMPORTED_MODULE_3__
});

/***/ }),

/***/ "./components/tools/scroll.ts":
/*!************************************!*\
  !*** ./components/tools/scroll.ts ***!
  \************************************/
/*! exports provided: scrollTo, scrollBy, scrollSize, isScrollIntoView, scrollIntoView, scrollIntoViewIfNeeded, scrollShow, scrollParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollBy", function() { return scrollBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollSize", function() { return scrollSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScrollIntoView", function() { return isScrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollIntoViewIfNeeded", function() { return scrollIntoViewIfNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollShow", function() { return scrollShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollParent", function() { return scrollParent; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./components/tools/dom.ts");

/**
 * 滚动元素到指定的位置。
 * @param elem 元素或文档。
 * @param value 要滚动的目标坐标。允许只设置部分属性。
 * @param duration 滚动的动画时间。如果为 0 则不使用动画。
 * @param callback 滚动动画结束的回调函数。
 * @example scrollTo(document, {y: 400})
 */

function scrollTo(elem, value) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 ? arguments[3] : undefined;
  var start = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getScroll"])(elem);
  var last = start;

  if (duration === 0) {
    Object(_dom__WEBPACK_IMPORTED_MODULE_0__["setScroll"])(elem, value);
  } else if (value.x != null || value.y != null) {
    var deltaX = value.x - start.x;
    var deltaY = value.y - start.y;
    var maxCount = duration / 20;
    var count = 0;

    var step = function step() {
      value = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getScroll"])(elem);

      if (value.x === last.x && value.y === last.y) {
        if (deltaX) {
          value.x = start.x + (1 - Math.pow(1 - count / maxCount, 3)) * deltaX;
        }

        if (deltaY) {
          value.y = start.y + (1 - Math.pow(1 - count / maxCount, 3)) * deltaY;
        }

        Object(_dom__WEBPACK_IMPORTED_MODULE_0__["setScroll"])(elem, value);

        if (count++ < maxCount) {
          last = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getScroll"])(elem);
          setTimeout(step, 20);
        } else {
          callback && callback(last);
        }
      }
    };

    step();
    return;
  }

  callback && callback(last);
}
/**
 * 滚动元素指定的偏移量。
 * @param elem 要滚动的元素或文档。
 * @param value 要滚动的距离坐标。允许只设置部分属性。
 * @param duration 滚动的动画时间。如果为 0 则不使用动画。
 * @param callback 滚动动画结束的回调函数。
 * @example scrollBy(document, {y: 400})
 */

function scrollBy(elem, value, duration, callback) {
  var scroll = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getScroll"])(elem);
  if (value.x != null) scroll.x += value.x;
  if (value.y != null) scroll.y += value.y;
  scrollTo(elem, scroll, duration, callback);
}
/**
 * 获取元素的滚动区域大小。
 * @param elem 要获取的元素或文档。
 * @return 返回一个大小。
 * @example scrollSize(document.body)
 */

function scrollSize(elem) {
  return {
    width: elem.nodeType === 9 ? Math.max(elem.documentElement.scrollWidth || 0, elem.body.scrollWidth || 0, elem.clientWidth || 0) : elem.scrollWidth,
    height: elem.nodeType === 9 ? Math.max(elem.documentElement.scrollHeight || 0, elem.body.scrollHeight || 0, elem.clientHeight || 0) : elem.scrollHeight
  };
}
/**
 * 判断指定元素是否在可见区域内。
 * @param elem 要判断的元素或文档。
 * @param scrollable 滚动的容器元素。
 * @param padding 判断是否在区域内的最小距离。
 * @return 如果元素部分或全部在可见区域内则返回 true，否则返回 false。
 * @example isScrollIntoView(document.body)
 */

function isScrollIntoView(elem) {
  var scrollable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scrollParent(elem);
  var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var container = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getRect"])(scrollable);
  var rect = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getRect"])(elem);
  var deltaY = rect.y - container.y;
  var deltaX = rect.x - container.x;
  return (deltaY < padding ? deltaY + rect.height > padding : deltaY < container.height) && (deltaX < padding ? deltaX + rect.width > padding : deltaX < container.width);
}
/**
 * 将元素滚动到可见区域。
 * @param elem 要滚动的元素或文档。
 * @param position 滚动的位置。
 * @param scrollable 滚动的容器元素。
 * @param duration 滚动的动画时间。如果为 0 则不使用动画。
 * @param offset 如果需要滚动则额外偏移的距离。
 * @param callback 滚动动画结束的回调函数。
 */

function scrollIntoView(elem, position) {
  var scrollable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : scrollParent(elem);
  var duration = arguments.length > 3 ? arguments[3] : undefined;
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var callback = arguments.length > 5 ? arguments[5] : undefined;
  var container = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getRect"])(scrollable);
  var rect = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getRect"])(elem);
  var deltaY = rect.y - container.y;
  var deltaX = rect.x - container.x;
  var value = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getScroll"])(scrollable);

  if (!position || position === "start" || position === "nearest" && deltaY <= (container.height - rect.height) / 2) {
    value.y += deltaY - offset;
  } else {
    value.y += deltaY - container.height + rect.height + offset;

    if (position === "center") {
      value.y += (container.height - rect.height) / 2;
    }
  }

  if (!position || position === "start" || position === "nearest" && deltaX <= (container.width - rect.width) / 2) {
    value.x -= -deltaX + offset;
  } else {
    value.x -= -deltaX + container.width - rect.width - offset;

    if (position === "center") {
      value.x += (container.width - rect.width) / 2;
    }
  }

  scrollTo(scrollable, value, duration, callback);
}
/**
 * 如果元素可见区域内则将元素滚动到可见区域。
 * @param elem 要滚动的元素或文档。
 * @param scrollable 滚动的容器元素。
 * @param padding 判断是否在区域内的最小距离。
 * @param offset 如果需要滚动则额外偏移的距离。
 * @param duration 滚动的动画时间。如果为 0 则不使用动画。
 * @param callback 滚动动画结束的回调函数。
 * @example scrollIntoViewIfNeeded(document.body)
 */

function scrollIntoViewIfNeeded(elem) {
  var scrollable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scrollParent(elem);
  var duration = arguments.length > 2 ? arguments[2] : undefined;
  var padding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var callback = arguments.length > 5 ? arguments[5] : undefined;
  var container = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getRect"])(scrollable);
  var rect = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getRect"])(elem);
  var deltaY = rect.y - container.y;
  var deltaX = rect.x - container.x;
  var value = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getScroll"])(scrollable);

  if (deltaY < padding) {
    value.y += deltaY - offset;
  } else if (deltaY + rect.height + padding > container.height) {
    value.y += deltaY - container.height + rect.height + offset;
  } else {
    delete value.y;
  }

  if (deltaX < padding) {
    value.x += deltaX - offset;
  } else if (deltaX + rect.width + padding > container.width) {
    value.x += deltaX - container.width + rect.width + offset;
  } else {
    delete value.x;
  }

  scrollTo(scrollable, value, duration, callback);
}
/**
 * 设置滚动到当前指定元素或文档时的回调。
 * @param elem 要绑定事件的元素或文档。
 * @param callback 滚动到当前指定元素时的回调。
 * @param once 是否只在第一次滚动时执行。
 * @param scrollable 滚动的容器元素。
 * @param padding 判断是否在区域内的最小距离。
 * @example scrollShow(document.body, () => { alert("hi"); })
 */

function scrollShow(elem, callback) {
  var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var scrollable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : scrollParent(elem);
  var padding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var container = scrollable.nodeType === 9 ? scrollable.defaultView : scrollable;
  var inView = false;

  var handleScroll = function handleScroll() {
    var oldInView = inView;

    if (inView = isScrollIntoView(elem, scrollable, padding)) {
      if (!oldInView) {
        callback();
      }

      if (once) {
        container.removeEventListener("scroll", handleScroll, false);
      }
    }
  };

  container.addEventListener("scroll", handleScroll, false);
  window.addEventListener("resize", handleScroll, false);
  handleScroll();
}
/**
 * 获取指定元素第一个可滚动的父元素。
 * @param elem 要搜索的元素。
 * @return 返回父元素。
 */

function scrollParent(elem) {
  if (elem.nodeType !== 9) {
    while ((elem = elem.parentNode) && elem.nodeType === 1 && !/^(?:auto|scroll)$/.test(Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getStyle"])(elem, "overflow"))) {
      ;
    }
  }

  return elem;
}

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