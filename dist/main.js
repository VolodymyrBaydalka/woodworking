/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".input-layout label {\n  display: inline-block;\n  min-width: 100px; }\n\n.sides-editor {\n  display: block;\n  position: relative; }\n  .sides-editor .left {\n    position: absolute;\n    left: 0px;\n    top: 10;\n    height: calc(100% - 2 * $thickness); }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/cabinet/cabinet.tsx":
/*!*********************************!*\
  !*** ./src/cabinet/cabinet.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "react");
const react_2 = __importDefault(__webpack_require__(/*! react */ "react"));
const viewport3d_1 = __webpack_require__(/*! ../common/3d/viewport3d */ "./src/common/3d/viewport3d.tsx");
const utils_1 = __webpack_require__(/*! ../common/3d/utils */ "./src/common/3d/utils.ts");
const inputlayout_1 = __webpack_require__(/*! ../common/forms/inputlayout */ "./src/common/forms/inputlayout.tsx");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
function CabinetEditor(props) {
    const [state, setState] = react_1.useState(function () {
        var state = {
            width: 400,
            height: 720,
            depth: 550,
            thickness: 18
        };
        state.model = utils_1.createCabinetModel(state.width, state.height, state.depth, state.thickness, 0xff0000, 0xffffff);
        return state;
    });
    let history = react_router_dom_1.useHistory();
    function onInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        var state = Object.assign({}, state);
        state[name] = value;
        state.model = utils_1.createCabinetModel(state.width, state.height, state.depth, state.thickness, 0xff0000, 0xffffff);
        setState(state);
    }
    function build() {
        let parts = [
            { width: state.depth, height: state.height, number: 2 },
            { width: state.depth, height: state.width - (2 * state.thickness), number: 2 },
        ];
        history.push("/cutlist", {
            parts: parts
        });
    }
    return react_2.default.createElement("form", null,
        react_2.default.createElement(inputlayout_1.InputLayout, { label: "Width" },
            react_2.default.createElement("input", { name: "width", type: "number", value: state.width, onChange: onInputChange })),
        react_2.default.createElement(inputlayout_1.InputLayout, { label: "Height" },
            react_2.default.createElement("input", { name: "height", type: "number", value: state.height, onChange: onInputChange })),
        react_2.default.createElement(inputlayout_1.InputLayout, { label: "Depth" },
            react_2.default.createElement("input", { name: "depth", type: "number", value: state.depth, onChange: onInputChange })),
        react_2.default.createElement(inputlayout_1.InputLayout, { label: "Thickness" },
            react_2.default.createElement("input", { name: "thickness", type: "number", value: state.thickness, onChange: onInputChange })),
        react_2.default.createElement("button", { type: "button", onClick: build }, "Build Cutlist"),
        react_2.default.createElement(viewport3d_1.Viewport3D, { width: 600, height: 600, model: state.model }));
}
exports.CabinetEditor = CabinetEditor;


/***/ }),

/***/ "./src/common/3d/utils.ts":
/*!********************************!*\
  !*** ./src/common/3d/utils.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const three_1 = __webpack_require__(/*! three */ "three");
function createBox(width, height, depth, fillColor, lineColor) {
    var geometry = new three_1.BoxGeometry(width, height, depth);
    var material = new three_1.MeshBasicMaterial({ color: fillColor });
    var edges = new three_1.EdgesGeometry(geometry);
    var line = new three_1.LineSegments(edges, new three_1.LineBasicMaterial({ color: lineColor }));
    var g = new three_1.Group();
    g.add(new three_1.Mesh(geometry, material), line);
    return g;
}
exports.createBox = createBox;
function createCabinetModel(width, height, depth, thickness, fill, stroke, boxType = "TypeA") {
    var panelW = boxType == "TypeA" ? width - 2 * thickness : width;
    var panelH = boxType == "TypeB" ? height - 2 * thickness : height;
    var left = createBox(thickness, panelH, depth, fill, stroke);
    var right = createBox(thickness, panelH, depth, fill, stroke);
    var top = createBox(panelW, thickness, depth, fill, stroke);
    var bottom = createBox(panelW, thickness, depth, fill, stroke);
    left.translateX(-(width - thickness) / 2);
    right.translateX((width - thickness) / 2);
    top.translateY(-(height - thickness) / 2);
    bottom.translateY((height - thickness) / 2);
    var g = new three_1.Group();
    g.add(left, right, top, bottom);
    return g;
}
exports.createCabinetModel = createCabinetModel;


/***/ }),

/***/ "./src/common/3d/viewport3d.tsx":
/*!**************************************!*\
  !*** ./src/common/3d/viewport3d.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const three_1 = __webpack_require__(/*! three */ "three");
function Viewport3D(props) {
    const viewEl = react_1.useRef(null);
    const sceneRef = react_1.useRef(null);
    react_1.useEffect(() => {
        let play = true;
        let scene = sceneRef.current = new three_1.Scene();
        var container = viewEl.current;
        var width = props.width;
        var height = props.height;
        var camera = new three_1.PerspectiveCamera(75, width / height, 0.1, 10000);
        var renderer = new three_1.WebGLRenderer();
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);
        var controls = new THREE.OrbitControls(camera, renderer.domElement);
        camera.position.set(0, 20, 1000);
        var animate = () => {
            if (!play)
                return;
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
        return () => {
            play = false;
        };
    }, []);
    react_1.useEffect(() => {
        var scene = sceneRef.current;
        scene.children = [];
        if (props.model)
            scene.add(props.model);
    }, [props.model]);
    return react_1.default.createElement("div", { ref: viewEl, style: { width: props.width, height: props.height } });
}
exports.Viewport3D = Viewport3D;


/***/ }),

/***/ "./src/common/forms/inputlayout.tsx":
/*!******************************************!*\
  !*** ./src/common/forms/inputlayout.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
function InputLayout(props) {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "input-layout" },
            react_1.default.createElement("label", null, props.label),
            props.children));
}
exports.InputLayout = InputLayout;


/***/ }),

/***/ "./src/cutlist/cutlist.tsx":
/*!*********************************!*\
  !*** ./src/cutlist/cutlist.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const initialPart = {
    width: 0,
    height: 0,
    number: 1
};
function CutListEditor(props) {
    const [parts, setParts] = react_1.useState(props.parts || []);
    const [newPart, setNewPart] = react_1.useState(initialPart);
    function handleInput(e) {
        var input = e.target;
        var newValue = Object.assign({}, newPart);
        newValue[input.name] = input.value;
        setNewPart(newValue);
    }
    function handleSubmit(e) {
        setParts([newPart, ...parts]);
        setNewPart(initialPart);
        e.preventDefault();
    }
    function removePart(part) {
        setParts(parts.filter(p => p != part));
    }
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        react_1.default.createElement("table", null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", null, "Number"),
                    react_1.default.createElement("th", null, "Width"),
                    react_1.default.createElement("th", null, "Height"),
                    react_1.default.createElement("th", null, "Actions"))),
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("input", { name: "number", value: newPart.number, onChange: handleInput })),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("input", { name: "width", value: newPart.width, onChange: handleInput })),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("input", { name: "height", value: newPart.height, onChange: handleInput })),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("button", { type: "submit" }, "Add"))),
                parts.map((p, i) => {
                    return (react_1.default.createElement("tr", { key: i },
                        react_1.default.createElement("td", null, p.number),
                        react_1.default.createElement("td", null, p.width),
                        react_1.default.createElement("td", null, p.height),
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("button", { type: "button", onClick: () => removePart(p) }, "remove"))));
                })))));
}
exports.CutListEditor = CutListEditor;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "react-dom"));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const cabinet_1 = __webpack_require__(/*! ./cabinet/cabinet */ "./src/cabinet/cabinet.tsx");
__webpack_require__(/*! ./styles/styles */ "./src/styles/styles.scss");
const cutlist_1 = __webpack_require__(/*! ./cutlist/cutlist */ "./src/cutlist/cutlist.tsx");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
function Home() {
    return (react_1.default.createElement(react_router_dom_1.MemoryRouter, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("nav", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home"),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/cabinet" }, "Cabinet"),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/cutlist" }, "Cutlist")),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/" }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/cabinet" },
                    react_1.default.createElement(cabinet_1.CabinetEditor, null)),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/cutlist", render: routeProps => {
                        return (react_1.default.createElement(cutlist_1.CutListEditor, Object.assign({}, routeProps.location.state)));
                    } })))));
}
react_dom_1.default.render(react_1.default.createElement(Home, null), document.getElementById('root'));


/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "ReactRouterDOM" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRouterDOM;

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "THREE" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = THREE;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map