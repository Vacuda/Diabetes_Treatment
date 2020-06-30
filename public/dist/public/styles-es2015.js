(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n/* ----------SLIDER-------------*/\n\n.slidecontainer {\n    padding-left: 10%;\n    padding-right: 10%;\n    display: block;\n    width: 100%;\n}\n\n.extra {\n    text-align: center;\n}\n\n.slider {\n    -webkit-appearance: none;  /* Override default CSS styles */\n    -moz-appearance: none;\n         appearance: none;\n    width: 100%; /* Full-width */\n    height: 15px; /* Specified height */\n    background: #ffffff; /* Grey background */\n    outline: none; /* Remove outline */\n    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */ /* 0.2 seconds transition on hover */\n    transition: opacity .2s;\n}\n\n.slider:hover {\n    opacity: 1; /* Fully shown on mouse-over */\n}\n\n/* The slider handle */\n\n.slider::-webkit-slider-thumb {\n    -webkit-appearance: none; /* Override default look */\n    appearance: none;\n    width: 15px; /* Set a specific slider handle width */\n    height: 30px; /* Slider handle height */\n    background: gray; /* Green background */\n    cursor: pointer; /* Cursor on hover */\n    border-radius: 10px;\n}\n\n.slider::-moz-range-thumb {\n    width: 25px; /* Set a specific slider handle width */\n    height: 25px; /* Slider handle height */\n    background: #4CAF50; /* Green background */\n    cursor: pointer; /* Cursor on hover */\n}\n\n/* ------------------------------*/\n\n.therapy_container {\n    margin: 0px auto;\n    display: block;\n    width: 90%;\n    padding: 5px;\n    /* outline: 1px dashed blue; */\n}\n\nh6, p {\n    text-align: center;\n    text-underline-offset: 2px;\n}\n\nheader {\n    background-color: grey;\n    border: 1 px solid black;\n    text-align: center;\n}\n\n.division {\n    font-size: 12px;\n    margin: 5px;\n    text-align: center;\n}\n\n.cardback {\n    margin-top: 5px;\n    background-color: lightgray;\n    padding: 5px;\n}\n\n.infoback {\n    margin-top: 5px;\n    background-color: lightgrey;\n    padding: 5px;\n    outline: 1px solid grey;\n}\n\n/* -----------INFO TABLES-------------*/\n\ntable {\n    margin: 5px auto;\n    display: block;\n    background-color: yellow;\n}\n\nth, td {\n    border: 1px solid grey;\n}\n\n/* -----------ACTIVE-------------*/\n\n.active header {\n    background-color: orange;\n}\n\n.active .cardback {\n    background-color: rgb(255, 255, 255);\n    outline: 1px solid orange;\n}\n\n.active .infoback {\n    background-color: lightpink;\n    outline: 1px solid orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTs7QUFFOUUsaUNBQWlDOztBQUVqQztJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QixHQUFHLGdDQUFnQztJQUMzRCxxQkFBZ0I7U0FBaEIsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxxQkFBcUI7SUFDbkMsbUJBQW1CLEVBQUUsb0JBQW9CO0lBQ3pDLGFBQWEsRUFBRSxtQkFBbUI7SUFDbEMsWUFBWSxFQUFFLHVEQUF1RCxFQUM1QyxvQ0FBb0M7SUFDN0QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVSxFQUFFLDhCQUE4QjtBQUM5Qzs7QUFFQSxzQkFBc0I7O0FBQ3RCO0lBQ0ksd0JBQXdCLEVBQUUsMEJBQTBCO0lBQ3BELGdCQUFnQjtJQUNoQixXQUFXLEVBQUUsdUNBQXVDO0lBQ3BELFlBQVksRUFBRSx5QkFBeUI7SUFDdkMsZ0JBQWdCLEVBQUUscUJBQXFCO0lBQ3ZDLGVBQWUsRUFBRSxvQkFBb0I7SUFDckMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVyxFQUFFLHVDQUF1QztJQUNwRCxZQUFZLEVBQUUseUJBQXlCO0lBQ3ZDLG1CQUFtQixFQUFFLHFCQUFxQjtJQUMxQyxlQUFlLEVBQUUsb0JBQW9CO0FBQ3pDOztBQUdBLGtDQUFrQzs7QUFFbEM7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUEsdUNBQXVDOztBQUV2QztJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBLGtDQUFrQzs7QUFFbEM7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuLyogLS0tLS0tLS0tLVNMSURFUi0tLS0tLS0tLS0tLS0qL1xuXG4uc2xpZGVjb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmV4dHJhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGlkZXIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgIC8qIE92ZXJyaWRlIGRlZmF1bHQgQ1NTIHN0eWxlcyAqL1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwtd2lkdGggKi9cbiAgICBoZWlnaHQ6IDE1cHg7IC8qIFNwZWNpZmllZCBoZWlnaHQgKi9cbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyAvKiBHcmV5IGJhY2tncm91bmQgKi9cbiAgICBvdXRsaW5lOiBub25lOyAvKiBSZW1vdmUgb3V0bGluZSAqL1xuICAgIG9wYWNpdHk6IDAuNzsgLyogU2V0IHRyYW5zcGFyZW5jeSAoZm9yIG1vdXNlLW92ZXIgZWZmZWN0cyBvbiBob3ZlcikgKi9cbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4yczsgLyogMC4yIHNlY29uZHMgdHJhbnNpdGlvbiBvbiBob3ZlciAqL1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xufVxuXG4uc2xpZGVyOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxOyAvKiBGdWxseSBzaG93biBvbiBtb3VzZS1vdmVyICovXG59XG4gIFxuLyogVGhlIHNsaWRlciBoYW5kbGUgKi9cbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIE92ZXJyaWRlIGRlZmF1bHQgbG9vayAqL1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDE1cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cbiAgICBoZWlnaHQ6IDMwcHg7IC8qIFNsaWRlciBoYW5kbGUgaGVpZ2h0ICovXG4gICAgYmFja2dyb3VuZDogZ3JheTsgLyogR3JlZW4gYmFja2dyb3VuZCAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc29yIG9uIGhvdmVyICovXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiAgXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICB3aWR0aDogMjVweDsgLyogU2V0IGEgc3BlY2lmaWMgc2xpZGVyIGhhbmRsZSB3aWR0aCAqL1xuICAgIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwOyAvKiBHcmVlbiBiYWNrZ3JvdW5kICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBDdXJzb3Igb24gaG92ZXIgKi9cbn1cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4udGhlcmFweV9jb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgLyogb3V0bGluZTogMXB4IGRhc2hlZCBibHVlOyAqL1xufVxuXG5oNiwgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMnB4O1xufVxuXG5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgYm9yZGVyOiAxIHB4IHNvbGlkIGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdmlzaW9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZGJhY2sge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uaW5mb2JhY2sge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBncmV5O1xufVxuXG4vKiAtLS0tLS0tLS0tLUlORk8gVEFCTEVTLS0tLS0tLS0tLS0tLSovXG5cbnRhYmxlIHtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxudGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuXG4vKiAtLS0tLS0tLS0tLUFDVElWRS0tLS0tLS0tLS0tLS0qL1xuXG4uYWN0aXZlIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uYWN0aXZlIC5jYXJkYmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBvcmFuZ2U7XG59XG5cbi5hY3RpdmUgLmluZm9iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIG9yYW5nZTtcbn0iXX0= */", '', '']]

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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\X-Chill-X\Github\Diabetes_Treatment\public\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map