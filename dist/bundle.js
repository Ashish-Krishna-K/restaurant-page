/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg.jpg */ "./src/images/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* CSS RESET BEGINS */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* CSS RESET ENDS */

* {
    box-sizing: border-box;
}

html,
body {
    height: 100dvh;
}

img {
    width: 15rem;
    height: 15rem;
}

p, h1, h2, h3 {
    text-align: center;
}

body {
    background:url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    color: rgb(255, 255, 0);
    font-family: 'Roboto Condensed', sans-serif;
}

#content {
    height: 100dvh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 4fr 3rem;
}

header,
footer,
section#home-page,
section#contact-page,
li.menu-item {
    background-color: rgba(0, 0, 0, 0.60);
}

header {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
}

h1 {
    font-size: 3rem;
    font-weight: 900;
    font-family: 'Leckerli One', cursive;
}

ul.nav-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 10vw;
    padding: 1rem;
}

ul.nav-bar>li {
    cursor: pointer;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    transition: background-color 0.1s ease-in-out, box-shadow 0.5s ease-in-out;
}


ul.nav-bar>li:hover {
    border-radius: 5px;
    background-color: rgba(255, 255, 0);
    color: black;
}


.selected {
    box-shadow: 0 5px 1px -1px rgb(255, 255, 0);
}

main {
    overflow: auto;
    transition: opacity 0.5s ease-in-out;
}

main.render-animation {
    opacity: 0;
}

main>section {
    width: 80%;
    margin: 5vh auto;
    border-radius: 10px;
}

section#home-page {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    height: 85%;  
    font-size: 2rem;
}

h2 {
    font-size: 2rem;
    font-weight: 800;
}

section#menu-page {
    width: 60%;
}

ul.menu-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}

li.menu-item {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 250px;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
    gap: 2vh;
    padding: 5rem 1rem;
    border: 1px solid black;
    border-radius: 20px;
}

h3 {
    font-weight: 700;
    font-size: 1.5rem;
}

section#contact-page {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    height: 85%;
    font-size: 1.5rem;
}

footer {
    display: grid;
    align-items: center;
    justify-items: center;
    font-family: 'Noto Sans', sans-serif;
}

footer p {
    font-size: 1.5rem;
    font-weight: 900;
}

footer a,
footer a:visited {
    color: rgb(255, 51, 204);
    text-decoration: none;
}

/* Below Scorllbar styling was obtained from a stackoverflow answer */

::-webkit-scrollbar {
    width: 15px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.50);
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 0, 0.5);
  } `, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;IAII,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA,mBAAmB;;AAEnB;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kDAAkC;IAClC,uBAAuB;IACvB,2CAA2C;AAC/C;;AAEA;IACI,cAAc;IACd,aAAa;IACb,0BAA0B;IAC1B,gCAAgC;AACpC;;AAEA;;;;;IAKI,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,0EAA0E;AAC9E;;;AAGA;IACI,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;AAChB;;;AAGA;IACI,2CAA2C;AAC/C;;AAEA;IACI,cAAc;IACd,oCAAoC;AACxC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,6BAA6B;IAC7B,mBAAmB;IACnB,qBAAqB;IACrB,6BAA6B;IAC7B,QAAQ;IACR,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,kCAAkC;IAClC,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;IAEI,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA,qEAAqE;;AAErE;IACI,WAAW;EACb;;EAEA,UAAU;EACV;IACE,gBAAgB;EAClB;;EAEA,WAAW;EACX;IACE,+BAA+B;EACjC;;EAEA,oBAAoB;EACpB;IACE,kCAAkC;EACpC","sourcesContent":["/* CSS RESET BEGINS */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n/* CSS RESET ENDS */\n\n* {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    height: 100dvh;\n}\n\nimg {\n    width: 15rem;\n    height: 15rem;\n}\n\np, h1, h2, h3 {\n    text-align: center;\n}\n\nbody {\n    background:url('../images/bg.jpg');\n    color: rgb(255, 255, 0);\n    font-family: 'Roboto Condensed', sans-serif;\n}\n\n#content {\n    height: 100dvh;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 4fr 3rem;\n}\n\nheader,\nfooter,\nsection#home-page,\nsection#contact-page,\nli.menu-item {\n    background-color: rgba(0, 0, 0, 0.60);\n}\n\nheader {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n\nh1 {\n    font-size: 3rem;\n    font-weight: 900;\n    font-family: 'Leckerli One', cursive;\n}\n\nul.nav-bar {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 1fr;\n    gap: 10vw;\n    padding: 1rem;\n}\n\nul.nav-bar>li {\n    cursor: pointer;\n    padding: 1rem;\n    text-align: center;\n    font-weight: bold;\n    transition: background-color 0.1s ease-in-out, box-shadow 0.5s ease-in-out;\n}\n\n\nul.nav-bar>li:hover {\n    border-radius: 5px;\n    background-color: rgba(255, 255, 0);\n    color: black;\n}\n\n\n.selected {\n    box-shadow: 0 5px 1px -1px rgb(255, 255, 0);\n}\n\nmain {\n    overflow: auto;\n    transition: opacity 0.5s ease-in-out;\n}\n\nmain.render-animation {\n    opacity: 0;\n}\n\nmain>section {\n    width: 80%;\n    margin: 5vh auto;\n    border-radius: 10px;\n}\n\nsection#home-page {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3, 1fr);\n    justify-items: center;\n    align-items: center;\n    height: 85%;  \n    font-size: 2rem;\n}\n\nh2 {\n    font-size: 2rem;\n    font-weight: 800;\n}\n\nsection#menu-page {\n    width: 60%;\n}\n\nul.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 1rem;\n}\n\nli.menu-item {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 250px;\n    align-items: center;\n    justify-items: center;\n    justify-content: space-around;\n    gap: 2vh;\n    padding: 5rem 1rem;\n    border: 1px solid black;\n    border-radius: 20px;\n}\n\nh3 {\n    font-weight: 700;\n    font-size: 1.5rem;\n}\n\nsection#contact-page {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3, 1fr);\n    align-items: center;\n    justify-items: center;\n    height: 85%;\n    font-size: 1.5rem;\n}\n\nfooter {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    font-family: 'Noto Sans', sans-serif;\n}\n\nfooter p {\n    font-size: 1.5rem;\n    font-weight: 900;\n}\n\nfooter a,\nfooter a:visited {\n    color: rgb(255, 51, 204);\n    text-decoration: none;\n}\n\n/* Below Scorllbar styling was obtained from a stackoverflow answer */\n\n::-webkit-scrollbar {\n    width: 15px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: none;\n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.50);\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(255, 255, 0, 0.5);\n  } "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactPage.ts":
/*!****************************!*\
  !*** ./src/contactPage.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateContactPage)
/* harmony export */ });
function generateContactPage() {
    var contact = document.createElement('section');
    contact.setAttribute("id", "contact-page");
    var heading = document.createElement('h2');
    heading.textContent = "CONTACT US";
    contact.appendChild(heading);
    var phone = document.createElement('p');
    phone.textContent = "CALL US AT 080-123456";
    contact.appendChild(phone);
    var email = document.createElement('p');
    email.textContent = "EMAIL US AT BHATTHINDIMANE@EMAIL.COM";
    contact.appendChild(email);
    return contact;
}


/***/ }),

/***/ "./src/homePage.ts":
/*!*************************!*\
  !*** ./src/homePage.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateHomePage)
/* harmony export */ });
/* harmony import */ var _images_main_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/main.webp */ "./src/images/main.webp");
// importing the image used in the home page

function generateHomePage() {
    var home = document.createElement('section');
    home.setAttribute("id", "home-page");
    var heading = document.createElement('h2');
    heading.textContent = "AUTHENTIC SOUTH INDIAN BREAKFAST";
    home.appendChild(heading);
    var img = document.createElement('img');
    // setting the img src as the imported image
    img.src = _images_main_webp__WEBPACK_IMPORTED_MODULE_0__;
    home.appendChild(img);
    var p = document.createElement('p');
    p.textContent = "BENGALURU, KARNATAKA, INDIA - 000000";
    home.appendChild(p);
    return home;
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ switchTabs)
/* harmony export */ });
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.ts");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ "./src/homePage.ts");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.ts");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.ts");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");





var removeSelectedClass = function () {
    // remove selected class from all the tabs
    var navBar = document.querySelectorAll('li.nav-element');
    navBar.forEach(function (li) { return li.classList.remove('selected'); });
};
var addCurrentTabClass = function (tab) {
    // remove the current selected class
    removeSelectedClass();
    tab.classList.add('selected');
};
function switchTabs(ev) {
    var _this = this;
    // Selected tab should be assigned with selected class
    addCurrentTabClass(this);
    var main = document.querySelector('main');
    // below class adds an opacity of 0 to give it an appearance
    // of fading away
    main.classList.add('render-animation');
    // the rendering is synced with opacity transition to give it 
    // appearance of fading in
    setTimeout(function () {
        // remove current content of main
        main.removeChild(main.firstChild);
        // render correct page based on selected tab's value
        switch (_this.value) {
            case 0:
                main.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])());
                break;
            case 1:
                main.appendChild((0,_menuPage__WEBPACK_IMPORTED_MODULE_2__["default"])());
                break;
            case 2:
                main.appendChild((0,_contactPage__WEBPACK_IMPORTED_MODULE_3__["default"])());
                break;
        }
        main.classList.remove('render-animation');
    }, 500);
}
// render the inital page.
(0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/menuPage.ts":
/*!*************************!*\
  !*** ./src/menuPage.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMenuPage)
/* harmony export */ });
/* harmony import */ var _images_idli_vada_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/idli-vada.webp */ "./src/images/idli-vada.webp");
/* harmony import */ var _images_dosa_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/dosa.webp */ "./src/images/dosa.webp");
/* harmony import */ var _images_khara_bath_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/khara-bath.jpg */ "./src/images/khara-bath.jpg");
/* harmony import */ var _images_lemon_rice_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/lemon-rice.jpg */ "./src/images/lemon-rice.jpg");
/* harmony import */ var _images_chai_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/chai.jpg */ "./src/images/chai.jpg");
/* harmony import */ var _images_filter_coffee_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/filter-coffee.webp */ "./src/images/filter-coffee.webp");






// An array of objects corresponding to the menu item, each object
// contains the menu item name and the corresponding image for the 
// menu item, we will loop through this array and pass the data to 
// the createMenuItem function which will return an element 
// corresponding to the menu item
var menuItems = [
    { itemName: "IDLI-VADA", itemImg: _images_idli_vada_webp__WEBPACK_IMPORTED_MODULE_0__ },
    { itemName: "DOSA", itemImg: _images_dosa_webp__WEBPACK_IMPORTED_MODULE_1__ },
    { itemName: "KHARA-BATH", itemImg: _images_khara_bath_jpg__WEBPACK_IMPORTED_MODULE_2__ },
    { itemName: "LEMON-RICE", itemImg: _images_lemon_rice_jpg__WEBPACK_IMPORTED_MODULE_3__ },
    { itemName: "CHAI", itemImg: _images_chai_jpg__WEBPACK_IMPORTED_MODULE_4__ },
    { itemName: "FILTER-COFFEE", itemImg: _images_filter_coffee_webp__WEBPACK_IMPORTED_MODULE_5__ },
];
function generateMenuPage() {
    var menu = document.createElement('section');
    menu.setAttribute("id", "menu-page");
    var container = document.createElement('ul');
    container.classList.add('menu-container');
    // loop through the menuItems array passing each object to the
    // createMenuItem function and append the element returned by that
    // function to the container.
    menuItems.forEach(function (item) {
        var itemName = item.itemName, itemImg = item.itemImg;
        container.appendChild(createMenuItem(itemName, itemImg));
    });
    menu.appendChild(container);
    return menu;
}
var createMenuItem = function (itemName, imgUrl) {
    var li = document.createElement('li');
    li.classList.add('menu-item');
    var itemNameHeading = document.createElement('h3');
    itemNameHeading.textContent = itemName;
    li.appendChild(itemNameHeading);
    var itemImg = document.createElement('img');
    itemImg.src = imgUrl;
    li.appendChild(itemImg);
    return li;
};


/***/ }),

/***/ "./src/page-load.ts":
/*!**************************!*\
  !*** ./src/page-load.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ "./src/homePage.ts");


var createHeader = function () {
    var header = document.createElement('header');
    var heading = document.createElement('h1');
    heading.textContent = "BHAT'S THINDI MANE";
    header.appendChild(heading);
    header.appendChild(createNavbar());
    return header;
};
var createNavbar = function () {
    var nav = document.createElement('nav');
    var ul = document.createElement('ul');
    ul.classList.add('nav-bar');
    var homeTab = document.createElement('li');
    homeTab.setAttribute("id", "home-tab");
    homeTab.classList.add('nav-element', 'selected');
    homeTab.textContent = "HOME";
    // we'll grab this value when it's clicked and use it to determine
    // which page to render.
    homeTab.value = 0;
    homeTab.addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_0__["default"]);
    ul.appendChild(homeTab);
    var menuTab = document.createElement('li');
    menuTab.setAttribute("id", "menu-tab");
    menuTab.classList.add('nav-element');
    menuTab.textContent = "MENU";
    menuTab.value = 1;
    menuTab.addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_0__["default"]);
    ul.appendChild(menuTab);
    var contactTab = document.createElement('li');
    contactTab.setAttribute("id", "contact-tab");
    contactTab.classList.add('nav-element');
    contactTab.textContent = "CONTACT";
    contactTab.value = 2;
    contactTab.addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_0__["default"]);
    ul.appendChild(contactTab);
    nav.appendChild(ul);
    return nav;
};
var createMain = function () {
    var main = document.createElement('main');
    // createMain is called only on the initial page load, and by default
    // we want the homePage to be rendered.
    main.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])());
    return main;
};
var createFooter = function () {
    var footer = document.createElement('footer');
    var p = document.createElement('p');
    var link = document.createElement('a');
    link.setAttribute("href", "https://github.com/Ashish-Krishna-K");
    link.textContent = 'Ashish-Krishna-K';
    p.textContent = 'Project by ';
    p.appendChild(link);
    footer.append(p);
    return footer;
};
function loadPage() {
    var contentDiv = document.querySelector('div#content');
    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createMain());
    contentDiv.appendChild(createFooter());
}


/***/ }),

/***/ "./src/images/bg.jpg":
/*!***************************!*\
  !*** ./src/images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce3dd9644c117e3288f3.jpg";

/***/ }),

/***/ "./src/images/chai.jpg":
/*!*****************************!*\
  !*** ./src/images/chai.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91fb7c2105895cb8b893.jpg";

/***/ }),

/***/ "./src/images/dosa.webp":
/*!******************************!*\
  !*** ./src/images/dosa.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9113f383c9c4e6136a3d.webp";

/***/ }),

/***/ "./src/images/filter-coffee.webp":
/*!***************************************!*\
  !*** ./src/images/filter-coffee.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9318a3543ef682a43062.webp";

/***/ }),

/***/ "./src/images/idli-vada.webp":
/*!***********************************!*\
  !*** ./src/images/idli-vada.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a291b14ec774259e0ed.webp";

/***/ }),

/***/ "./src/images/khara-bath.jpg":
/*!***********************************!*\
  !*** ./src/images/khara-bath.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f30a109c05819e64d74.jpg";

/***/ }),

/***/ "./src/images/lemon-rice.jpg":
/*!***********************************!*\
  !*** ./src/images/lemon-rice.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "221aa0a12fff70876851.jpg";

/***/ }),

/***/ "./src/images/main.webp":
/*!******************************!*\
  !*** ./src/images/main.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "690db514b9e66c9051e0.webp";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsNEdBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixtQ0FBbUM7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyw4RkFBOEYsUUFBUSxNQUFNLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksZ0JBQWdCLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxRQUFRLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxTQUFTLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLHl0QkFBeXRCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHNCQUFzQixvQkFBb0IsK0JBQStCLEdBQUcsMEpBQTBKLHFCQUFxQixHQUFHLFVBQVUscUJBQXFCLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsK0RBQStELGtCQUFrQixvQkFBb0IsR0FBRyxXQUFXLGdDQUFnQyx3QkFBd0IsR0FBRywrQkFBK0IsNkJBQTZCLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLFNBQVMsbUJBQW1CLG9CQUFvQixHQUFHLG1CQUFtQix5QkFBeUIsR0FBRyxVQUFVLHlDQUF5Qyw4QkFBOEIsa0RBQWtELEdBQUcsY0FBYyxxQkFBcUIsb0JBQW9CLGlDQUFpQyx1Q0FBdUMsR0FBRywrRUFBK0UsNENBQTRDLEdBQUcsWUFBWSxvQkFBb0IsaUNBQWlDLHlDQUF5Qyw0QkFBNEIsMEJBQTBCLEdBQUcsUUFBUSxzQkFBc0IsdUJBQXVCLDJDQUEyQyxHQUFHLGdCQUFnQixvQkFBb0IsNENBQTRDLDhCQUE4QixnQkFBZ0Isb0JBQW9CLEdBQUcsbUJBQW1CLHNCQUFzQixvQkFBb0IseUJBQXlCLHdCQUF3QixpRkFBaUYsR0FBRywyQkFBMkIseUJBQXlCLDBDQUEwQyxtQkFBbUIsR0FBRyxpQkFBaUIsa0RBQWtELEdBQUcsVUFBVSxxQkFBcUIsMkNBQTJDLEdBQUcsMkJBQTJCLGlCQUFpQixHQUFHLGtCQUFrQixpQkFBaUIsdUJBQXVCLDBCQUEwQixHQUFHLHVCQUF1QixvQkFBb0IsaUNBQWlDLHlDQUF5Qyw0QkFBNEIsMEJBQTBCLG9CQUFvQixzQkFBc0IsR0FBRyxRQUFRLHNCQUFzQix1QkFBdUIsR0FBRyx1QkFBdUIsaUJBQWlCLEdBQUcsdUJBQXVCLG9CQUFvQixrRUFBa0UsZ0JBQWdCLEdBQUcsa0JBQWtCLG9CQUFvQixpQ0FBaUMsb0NBQW9DLDBCQUEwQiw0QkFBNEIsb0NBQW9DLGVBQWUseUJBQXlCLDhCQUE4QiwwQkFBMEIsR0FBRyxRQUFRLHVCQUF1Qix3QkFBd0IsR0FBRywwQkFBMEIsb0JBQW9CLGlDQUFpQyx5Q0FBeUMsMEJBQTBCLDRCQUE0QixrQkFBa0Isd0JBQXdCLEdBQUcsWUFBWSxvQkFBb0IsMEJBQTBCLDRCQUE0QiwyQ0FBMkMsR0FBRyxjQUFjLHdCQUF3Qix1QkFBdUIsR0FBRyxpQ0FBaUMsK0JBQStCLDRCQUE0QixHQUFHLG1HQUFtRyxrQkFBa0IsS0FBSyxrREFBa0QsdUJBQXVCLEtBQUssbURBQW1ELHNDQUFzQyxLQUFLLGtFQUFrRSx5Q0FBeUMsTUFBTSxtQkFBbUI7QUFDNTNNO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDL1UxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JlLFNBQVMsbUJBQW1CO0lBQ3ZDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFFM0MsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxPQUFPLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztJQUNuQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsS0FBSyxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztJQUM1QyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTNCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxzQ0FBc0MsQ0FBQztJQUMzRCxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTNCLE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkQsNENBQTRDO0FBQ047QUFFdkIsU0FBUyxnQkFBZ0I7SUFDcEMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVyQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsa0NBQWtDLENBQUM7SUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUUxQixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLDRDQUE0QztJQUM1QyxHQUFHLENBQUMsR0FBRyxHQUFHLDhDQUFJLENBQUM7SUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXRCLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxzQ0FBc0MsQ0FBQztJQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJrQztBQUNPO0FBQ0E7QUFDTTtBQUNwQjtBQUU1QixJQUFNLG1CQUFtQixHQUFHO0lBQ3hCLDBDQUEwQztJQUMxQyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzRCxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQUUsSUFBSSxTQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFFRCxJQUFNLGtCQUFrQixHQUFHLFVBQUMsR0FBa0I7SUFDMUMsb0NBQW9DO0lBQ3BDLG1CQUFtQixFQUFFLENBQUM7SUFDdEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVjLFNBQVMsVUFBVSxDQUFzQixFQUFjO0lBQXRFLGlCQTBCQztJQXpCRyxzREFBc0Q7SUFDdEQsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1Qyw0REFBNEQ7SUFDNUQsaUJBQWlCO0lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdkMsOERBQThEO0lBQzlELDBCQUEwQjtJQUMxQixVQUFVLENBQUM7UUFDUCxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsb0RBQW9EO1FBQ3BELFFBQVEsS0FBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxREFBZ0IsRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxREFBZ0IsRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyx3REFBbUIsRUFBRSxDQUFDLENBQUM7Z0JBQ3hDLE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDOUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1osQ0FBQztBQUVELDBCQUEwQjtBQUMxQixzREFBUSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Db0M7QUFDVDtBQUNVO0FBQ0E7QUFDWDtBQUNrQjtBQUV2RCxrRUFBa0U7QUFDbEUsbUVBQW1FO0FBQ25FLG1FQUFtRTtBQUNuRSw0REFBNEQ7QUFDNUQsaUNBQWlDO0FBQ2pDLElBQU0sU0FBUyxHQUFHO0lBQ2QsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxtREFBUSxFQUFFO0lBQzVDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsOENBQUksRUFBRTtJQUNuQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLG1EQUFTLEVBQUU7SUFDOUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxtREFBUyxFQUFFO0lBQzlDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsNkNBQUksRUFBRTtJQUNuQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLHVEQUFZLEVBQUU7Q0FDdkQ7QUFFYyxTQUFTLGdCQUFnQjtJQUNwQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRXJDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUUxQyw4REFBOEQ7SUFDOUQsa0VBQWtFO0lBQ2xFLDZCQUE2QjtJQUM3QixTQUFTLENBQUMsT0FBTyxDQUFDLGNBQUk7UUFDVixZQUFRLEdBQWMsSUFBSSxTQUFsQixFQUFFLE9BQU8sR0FBSyxJQUFJLFFBQVQsQ0FBVTtRQUNuQyxTQUFTLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUM7SUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxJQUFNLGNBQWMsR0FBRyxVQUFDLFFBQWdCLEVBQUUsTUFBYztJQUNwRCxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTlCLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsZUFBZSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFDdkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVoQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBQ3JCLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFeEIsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEZ0M7QUFDUztBQUcxQyxJQUFNLFlBQVksR0FBRztJQUNqQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWhELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsT0FBTyxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztJQUUzQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNuQyxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsSUFBTSxZQUFZLEdBQUc7SUFDakIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTVCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBQzdCLGtFQUFrRTtJQUNsRSx3QkFBd0I7SUFDeEIsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbEIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSw4Q0FBVSxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV4QixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsOENBQVUsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFeEIsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM3QyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxVQUFVLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUNuQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNyQixVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLDhDQUFVLENBQUMsQ0FBQztJQUNqRCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRTNCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEIsT0FBTyxHQUFHO0FBQ2QsQ0FBQztBQUVELElBQU0sVUFBVSxHQUFHO0lBQ2YsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxxRUFBcUU7SUFDckUsdUNBQXVDO0lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMscURBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxJQUFNLFlBQVksR0FBRztJQUNqQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV6QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7SUFFdEMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxhQUFhO0lBQzdCLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRWMsU0FBUyxRQUFRO0lBQzVCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFekQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNyQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDM0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0VEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0UGFnZS50cyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS50cyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLnRzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDU1MgUkVTRVQgQkVHSU5TICovXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCxcbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gICAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNvbnRlbnQ6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBDU1MgUkVTRVQgRU5EUyAqL1xuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDBkdmg7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGhlaWdodDogMTVyZW07XG59XG5cbnAsIGgxLCBoMiwgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZDp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMCk7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRlbnQge1xuICAgIGhlaWdodDogMTAwZHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDNyZW07XG59XG5cbmhlYWRlcixcbmZvb3RlcixcbnNlY3Rpb24jaG9tZS1wYWdlLFxuc2VjdGlvbiNjb250YWN0LXBhZ2UsXG5saS5tZW51LWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MCk7XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1mYW1pbHk6ICdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlO1xufVxuXG51bC5uYXYtYmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ2FwOiAxMHZ3O1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbnVsLm5hdi1iYXI+bGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC41cyBlYXNlLWluLW91dDtcbn1cblxuXG51bC5uYXYtYmFyPmxpOmhvdmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCk7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5cbi5zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMXB4IC0xcHggcmdiKDI1NSwgMjU1LCAwKTtcbn1cblxubWFpbiB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5tYWluLnJlbmRlci1hbmltYXRpb24ge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbm1haW4+c2VjdGlvbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDV2aCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbnNlY3Rpb24jaG9tZS1wYWdlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4NSU7ICBcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuc2VjdGlvbiNtZW51LXBhZ2Uge1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbnVsLm1lbnUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIGdhcDogMXJlbTtcbn1cblxubGkubWVudS1pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGdhcDogMnZoO1xuICAgIHBhZGRpbmc6IDVyZW0gMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5oMyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuc2VjdGlvbiNjb250YWN0LXBhZ2Uge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDg1JTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuZm9vdGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbmZvb3RlciBhLFxuZm9vdGVyIGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAyMDQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogQmVsb3cgU2NvcmxsYmFyIHN0eWxpbmcgd2FzIG9idGFpbmVkIGZyb20gYSBzdGFja292ZXJmbG93IGFuc3dlciAqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuICBcbiAgLyogVHJhY2sgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuICBcbiAgLyogSGFuZGxlICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MCk7XG4gIH1cbiAgXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjUpO1xuICB9IGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCO0FBQ3JCOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUZJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7SUFXSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7OztJQUlJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtEQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0FBQ3BDOztBQUVBOzs7OztJQUtJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBFQUEwRTtBQUM5RTs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUEscUVBQXFFOztBQUVyRTtJQUNJLFdBQVc7RUFDYjs7RUFFQSxVQUFVO0VBQ1Y7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUEsV0FBVztFQUNYO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBLG9CQUFvQjtFQUNwQjtJQUNFLGtDQUFrQztFQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDU1MgUkVTRVQgQkVHSU5TICovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIENTUyBSRVNFVCBFTkRTICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIGhlaWdodDogMTVyZW07XFxufVxcblxcbnAsIGgxLCBoMiwgaDMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOnVybCgnLi4vaW1hZ2VzL2JnLmpwZycpO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAwKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAzcmVtO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyLFxcbnNlY3Rpb24jaG9tZS1wYWdlLFxcbnNlY3Rpb24jY29udGFjdC1wYWdlLFxcbmxpLm1lbnUtaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MCk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LWZhbWlseTogJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmU7XFxufVxcblxcbnVsLm5hdi1iYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ2FwOiAxMHZ3O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG51bC5uYXYtYmFyPmxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxudWwubmF2LWJhcj5saTpob3ZlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMXB4IC0xcHggcmdiKDI1NSwgMjU1LCAwKTtcXG59XFxuXFxubWFpbiB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm1haW4ucmVuZGVyLWFuaW1hdGlvbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbm1haW4+c2VjdGlvbiB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogNXZoIGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbnNlY3Rpb24jaG9tZS1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4NSU7ICBcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuc2VjdGlvbiNtZW51LXBhZ2Uge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG51bC5tZW51LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbmxpLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiAydmg7XFxuICAgIHBhZGRpbmc6IDVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbnNlY3Rpb24jY29udGFjdC1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuZm9vdGVyIGEsXFxuZm9vdGVyIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMjA0KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBCZWxvdyBTY29ybGxiYXIgc3R5bGluZyB3YXMgb2J0YWluZWQgZnJvbSBhIHN0YWNrb3ZlcmZsb3cgYW5zd2VyICovXFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgfVxcbiAgXFxuICAvKiBUcmFjayAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIEhhbmRsZSAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MCk7XFxuICB9XFxuICBcXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNSk7XFxuICB9IFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0UGFnZSgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LXBhZ2VcIik7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJDT05UQUNUIFVTXCI7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lLnRleHRDb250ZW50ID0gXCJDQUxMIFVTIEFUIDA4MC0xMjM0NTZcIjtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHBob25lKTtcblxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gXCJFTUFJTCBVUyBBVCBCSEFUVEhJTkRJTUFORUBFTUFJTC5DT01cIjtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICAgIHJldHVybiBjb250YWN0O1xufSIsIi8vIGltcG9ydGluZyB0aGUgaW1hZ2UgdXNlZCBpbiB0aGUgaG9tZSBwYWdlXG5pbXBvcnQgbWFpbiBmcm9tICcuL2ltYWdlcy9tYWluLndlYnAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaG9tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtcGFnZVwiKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFVVEhFTlRJQyBTT1VUSCBJTkRJQU4gQlJFQUtGQVNUXCI7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIC8vIHNldHRpbmcgdGhlIGltZyBzcmMgYXMgdGhlIGltcG9ydGVkIGltYWdlXG4gICAgaW1nLnNyYyA9IG1haW47XG4gICAgaG9tZS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gXCJCRU5HQUxVUlUsIEtBUk5BVEFLQSwgSU5ESUEgLSAwMDAwMDBcIjtcbiAgICBob21lLmFwcGVuZENoaWxkKHApO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xuaW1wb3J0IGdlbmVyYXRlSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVBhZ2VcIjtcbmltcG9ydCBnZW5lcmF0ZU1lbnVQYWdlIGZyb20gXCIuL21lbnVQYWdlXCI7XG5pbXBvcnQgZ2VuZXJhdGVDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0UGFnZVwiO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5jc3MnO1xuXG5jb25zdCByZW1vdmVTZWxlY3RlZENsYXNzID0gKCkgPT4ge1xuICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBmcm9tIGFsbCB0aGUgdGFic1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLm5hdi1lbGVtZW50Jyk7XG4gICAgbmF2QmFyLmZvckVhY2gobGkgPT4gbGkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG59XG5cbmNvbnN0IGFkZEN1cnJlbnRUYWJDbGFzcyA9ICh0YWI6IEhUTUxMSUVsZW1lbnQpID0+IHtcbiAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgY2xhc3NcbiAgICByZW1vdmVTZWxlY3RlZENsYXNzKCk7XG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN3aXRjaFRhYnModGhpczogSFRNTExJRWxlbWVudCwgZXY6IE1vdXNlRXZlbnQpIHtcbiAgICAvLyBTZWxlY3RlZCB0YWIgc2hvdWxkIGJlIGFzc2lnbmVkIHdpdGggc2VsZWN0ZWQgY2xhc3NcbiAgICBhZGRDdXJyZW50VGFiQ2xhc3ModGhpcyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAvLyBiZWxvdyBjbGFzcyBhZGRzIGFuIG9wYWNpdHkgb2YgMCB0byBnaXZlIGl0IGFuIGFwcGVhcmFuY2VcbiAgICAvLyBvZiBmYWRpbmcgYXdheVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgncmVuZGVyLWFuaW1hdGlvbicpO1xuICAgIC8vIHRoZSByZW5kZXJpbmcgaXMgc3luY2VkIHdpdGggb3BhY2l0eSB0cmFuc2l0aW9uIHRvIGdpdmUgaXQgXG4gICAgLy8gYXBwZWFyYW5jZSBvZiBmYWRpbmcgaW5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gcmVtb3ZlIGN1cnJlbnQgY29udGVudCBvZiBtYWluXG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgICAgLy8gcmVuZGVyIGNvcnJlY3QgcGFnZSBiYXNlZCBvbiBzZWxlY3RlZCB0YWIncyB2YWx1ZVxuICAgICAgICBzd2l0Y2ggKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGdlbmVyYXRlSG9tZVBhZ2UoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChnZW5lcmF0ZU1lbnVQYWdlKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250YWN0UGFnZSgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbmRlci1hbmltYXRpb24nKTtcbiAgICB9LCA1MDApO1xufVxuXG4vLyByZW5kZXIgdGhlIGluaXRhbCBwYWdlLlxubG9hZFBhZ2UoKTsiLCJpbXBvcnQgaWRsaXZhZGEgZnJvbSAnLi9pbWFnZXMvaWRsaS12YWRhLndlYnAnO1xuaW1wb3J0IGRvc2EgZnJvbSAnLi9pbWFnZXMvZG9zYS53ZWJwJztcbmltcG9ydCBraGFyYWJhdGggZnJvbSAnLi9pbWFnZXMva2hhcmEtYmF0aC5qcGcnO1xuaW1wb3J0IGxlbW9ucmljZSBmcm9tICcuL2ltYWdlcy9sZW1vbi1yaWNlLmpwZyc7XG5pbXBvcnQgY2hhaSBmcm9tICcuL2ltYWdlcy9jaGFpLmpwZyc7XG5pbXBvcnQgZmlsdGVyQ29mZmVlIGZyb20gJy4vaW1hZ2VzL2ZpbHRlci1jb2ZmZWUud2VicCc7XG5cbi8vIEFuIGFycmF5IG9mIG9iamVjdHMgY29ycmVzcG9uZGluZyB0byB0aGUgbWVudSBpdGVtLCBlYWNoIG9iamVjdFxuLy8gY29udGFpbnMgdGhlIG1lbnUgaXRlbSBuYW1lIGFuZCB0aGUgY29ycmVzcG9uZGluZyBpbWFnZSBmb3IgdGhlIFxuLy8gbWVudSBpdGVtLCB3ZSB3aWxsIGxvb3AgdGhyb3VnaCB0aGlzIGFycmF5IGFuZCBwYXNzIHRoZSBkYXRhIHRvIFxuLy8gdGhlIGNyZWF0ZU1lbnVJdGVtIGZ1bmN0aW9uIHdoaWNoIHdpbGwgcmV0dXJuIGFuIGVsZW1lbnQgXG4vLyBjb3JyZXNwb25kaW5nIHRvIHRoZSBtZW51IGl0ZW1cbmNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7IGl0ZW1OYW1lOiBcIklETEktVkFEQVwiLCBpdGVtSW1nOiBpZGxpdmFkYSB9LFxuICAgIHsgaXRlbU5hbWU6IFwiRE9TQVwiLCBpdGVtSW1nOiBkb3NhIH0sXG4gICAgeyBpdGVtTmFtZTogXCJLSEFSQS1CQVRIXCIsIGl0ZW1JbWc6IGtoYXJhYmF0aCB9LFxuICAgIHsgaXRlbU5hbWU6IFwiTEVNT04tUklDRVwiLCBpdGVtSW1nOiBsZW1vbnJpY2UgfSxcbiAgICB7IGl0ZW1OYW1lOiBcIkNIQUlcIiwgaXRlbUltZzogY2hhaSB9LFxuICAgIHsgaXRlbU5hbWU6IFwiRklMVEVSLUNPRkZFRVwiLCBpdGVtSW1nOiBmaWx0ZXJDb2ZmZWUgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNZW51UGFnZSgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LXBhZ2VcIik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBtZW51SXRlbXMgYXJyYXkgcGFzc2luZyBlYWNoIG9iamVjdCB0byB0aGVcbiAgICAvLyBjcmVhdGVNZW51SXRlbSBmdW5jdGlvbiBhbmQgYXBwZW5kIHRoZSBlbGVtZW50IHJldHVybmVkIGJ5IHRoYXRcbiAgICAvLyBmdW5jdGlvbiB0byB0aGUgY29udGFpbmVyLlxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCB7IGl0ZW1OYW1lLCBpdGVtSW1nIH0gPSBpdGVtO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaXRlbU5hbWUsIGl0ZW1JbWcpKTtcbiAgICB9KVxuXG4gICAgbWVudS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHJldHVybiBtZW51O1xufVxuXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IChpdGVtTmFtZTogc3RyaW5nLCBpbWdVcmw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgIGNvbnN0IGl0ZW1OYW1lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaXRlbU5hbWVIZWFkaW5nLnRleHRDb250ZW50ID0gaXRlbU5hbWU7XG4gICAgbGkuYXBwZW5kQ2hpbGQoaXRlbU5hbWVIZWFkaW5nKTtcblxuICAgIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpdGVtSW1nLnNyYyA9IGltZ1VybDtcbiAgICBsaS5hcHBlbmRDaGlsZChpdGVtSW1nKTtcblxuICAgIHJldHVybiBsaTtcbn1cblxuIiwiaW1wb3J0IHN3aXRjaFRhYnMgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBnZW5lcmF0ZUhvbWVQYWdlIGZyb20gXCIuL2hvbWVQYWdlXCI7XG5cblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkJIQVQnUyBUSElOREkgTUFORVwiO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZiYXIoKSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuY29uc3QgY3JlYXRlTmF2YmFyID0gKCk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuXG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaG9tZVRhYi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtdGFiXCIpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnbmF2LWVsZW1lbnQnLCAnc2VsZWN0ZWQnKTtcbiAgICBob21lVGFiLnRleHRDb250ZW50ID0gXCJIT01FXCI7XG4gICAgLy8gd2UnbGwgZ3JhYiB0aGlzIHZhbHVlIHdoZW4gaXQncyBjbGlja2VkIGFuZCB1c2UgaXQgdG8gZGV0ZXJtaW5lXG4gICAgLy8gd2hpY2ggcGFnZSB0byByZW5kZXIuXG4gICAgaG9tZVRhYi52YWx1ZSA9IDA7XG4gICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoVGFicyk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG5cbiAgICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtZW51VGFiLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS10YWJcIik7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCduYXYtZWxlbWVudCcpO1xuICAgIG1lbnVUYWIudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgICBtZW51VGFiLnZhbHVlID0gMTtcbiAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hUYWJzKTtcbiAgICB1bC5hcHBlbmRDaGlsZChtZW51VGFiKTtcblxuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhY3RUYWIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LXRhYlwiKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ25hdi1lbGVtZW50Jyk7XG4gICAgY29udGFjdFRhYi50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xuICAgIGNvbnRhY3RUYWIudmFsdWUgPSAyO1xuICAgIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFRhYnMpO1xuICAgIHVsLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICByZXR1cm4gbmF2XG59XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgLy8gY3JlYXRlTWFpbiBpcyBjYWxsZWQgb25seSBvbiB0aGUgaW5pdGlhbCBwYWdlIGxvYWQsIGFuZCBieSBkZWZhdWx0XG4gICAgLy8gd2Ugd2FudCB0aGUgaG9tZVBhZ2UgdG8gYmUgcmVuZGVyZWQuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChnZW5lcmF0ZUhvbWVQYWdlKCkpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgaHR0cHM6Ly9naXRodWIuY29tL0FzaGlzaC1LcmlzaG5hLUtgKTtcbiAgICBsaW5rLnRleHRDb250ZW50ID0gJ0FzaGlzaC1LcmlzaG5hLUsnO1xuXG4gICAgcC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IGJ5ICdcbiAgICBwLmFwcGVuZENoaWxkKGxpbmspO1xuXG4gICAgZm9vdGVyLmFwcGVuZChwKTtcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9