function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n\n    <h5>~~~~~~~~~~~</h5>\n    <h3>Enter A1C %</h3>\n    <h5>~~~~~~~~~~~</h5>\n\n    <input name=\"a1c\" [(ngModel)]=\"a1c\" class=\"form-control extra\" placeholder=\"---\">\n\n    <div class=\"slidecontainer\">\n        <input name=\"a1c\" [(ngModel)]=\"a1c\" \n        type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n    </div>\n\n    <h3>{{a1c}}%</h3>\n\n    <app-mono [a1c]=\"a1c\"></app-mono>\n    <app-dual [a1c]=\"a1c\"></app-dual>\n    <app-triple [a1c]=\"a1c\"></app-triple>\n    <app-combo [a1c]=\"a1c\"></app-combo>\n\n\n    <!-- <router-outlet></router-outlet> -->\n\n</div>\n\n\n<!-- \n\n    <button [routerLink]=\"['/alpha']\">Load Alpha</button>\n    <a [routerLink] = \"['details', 5]\"> Go to /products/details/5 </a> \n\n\n    <div *ngIf=\"errors\">\n        <h4>Errors:</h4>\n        <ul>\n            <div *ngFor=\"let item of errors\">\n                <li class=\"errors\">{{item.message}}</li>\n            </div>\n        </ul>\n\n    </div>\n\n\n\n\n    <div *ngIf=\"createtask\">\n        <form (submit)=\"createTask()\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"createtask.title\" [(ngModel)]=\"createtask.title\" class=\"form-control\" id=\"title\" placeholder=\"---\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"createtask.description\" [(ngModel)]=\"createtask.description\" class=\"form-control\" id=\"description\" rows=\"3\" placeholder=\"---\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Create</button>\n        </form>\n    </div>\n\n    <div *ngIf=\"updatetask\">\n        <form (submit)=\"updateTask(onetask._id)\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"updatetask.title\" [(ngModel)]=\"updatetask.title\" class=\"form-control\" id=\"title\" value=\"updatetask.title\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"updatetask.description\" [(ngModel)]=\"updatetask.description\" class=\"form-control\" id=\"description\" rows=\"3\" value=\"updatetask.description\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Submit Edits</button>\n        </form>\n    </div>\n\n    <div class=\"division\"></div>\n\n    <button class=\"btn btn-primary\" (click)=\"getTasks()\">Click for Tasks</button>\n\n    <div class=\"division\"></div>\n\n    <div class=\"centered\" *ngFor=\"let task of tasks\">\n\n        <h2><a id=\"clickable\" (click)=\"getOneTask(task._id)\">{{task.title}}</a></h2>\n        <div class=\"division\"></div>\n    </div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/combo/combo.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/combo/combo.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComboComboComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass]=\"{'active':active === true}\" \n    class=\"container\"\n    (click)=\"OnClick()\">\n    <header>Combination Injection Therapy</header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n\n        <h6>More Info To Come</h6>\n        \n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dual/dual.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dual/dual.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDualDualComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass]=\"{'active':active === true}\" \n    class=\"container\"\n    (click)=\"OnClick()\">\n    <header>Dual Therapy</header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n        \n        <h6>Lifestyle Management</h6>\n        <h6>Metformin</h6>\n        <h6>Additional Agent</h6>\n        <div class=\"division\">~~~~</div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Home Component</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mono/mono.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mono/mono.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMonoMonoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass]=\"{'active':active === true}\" \n    class=\"container\"\n    (click)=\"OnClick()\">\n    <header>Mono Therapy</header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n\n        <h6>Lifestyle Management</h6>\n        <h6>Metformin</h6>\n        <div class=\"division\">~~~~</div>\n\n        <p>Initiate metformin therapy if no contradictions</p>\n        \n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/triple/triple.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/triple/triple.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTripleTripleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass]=\"{'active':active === true}\" \n    class=\"container\"\n    (click)=\"OnClick()\">\n    <header>Triple Therapy</header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n\n        <h6>Lifestyle Management</h6>\n        <h6>Metformin</h6>\n        <h6>First Agent</h6>\n        <h6>Second Agent</h6>\n        <div class=\"division\">~~~~</div>\n\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
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
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // import { EditComponent } from './edit/edit.component';
    // import { NewComponent } from './new/new.component';
    // import { ListComponent } from './list/list.component';
    // import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AppRoutingModule); // const routes: Routes = [
    //     { path: 'product',component: ProductComponent, children: [
    //         { path: 'details/:id', component: ProductDetailComponent },
    //     ]},
    //     { path: 'review',component: ReviewComponent, children: [
    //         { path: 'details/:id', component: ReviewDetailComponent },
    //     ]},
    //     { path: '', pathMatch: 'full', redirectTo: '/product' },
    // ];

    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\nh2, h3, h5{\r\n    margin: 0px auto;\r\n    width: 75%;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\ninput {\r\n    margin: 10px 0px;\r\n}\r\n\r\n.division {\r\n    background-color: rgb(49, 72, 173);\r\n    height: 2px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px darkblue;\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\n#clickable:hover {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.btn-warning {\r\n    margin-top: 15px;\r\n}\r\n\r\n.errors {\r\n    color: red;\r\n}\r\n\r\nspan {\r\n    color: rgb(161, 0, 0);\r\n    display: block;\r\n}\r\n\r\nheader p {\r\n    margin-bottom: 0px;\r\n    font-size: 10px;\r\n    text-align: end;\r\n}\r\n\r\nheader a {\r\n    font-size: 18px;\r\n    display: block;\r\n    text-align: end;\r\n}\r\n\r\n.th-big {\r\n    width: 40%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-medium {\r\n    width: 20%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-small {\r\n    width: 10%;\r\n    text-align: center;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}\r\n\r\ntr th.bordered {\r\n    border: 1px solid black;\r\n}\r\n\r\n.btn-delete {\r\n    width: 30px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-edit {\r\n    width: 60px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin: 10px auto;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-complete {\r\n    text-align: center;\r\n    display: block;\r\n    width: 200px;\r\n    height: 40px;\r\n    line-height: 23px;\r\n    background-color: rgb(82, 82, 82);\r\n    font-weight: bold;\r\n    color: black;\r\n    box-shadow: 2px 2px 3px black;\r\n    /* margin-top: 20px; */\r\n}\r\n\r\n.btn-add:hover{\r\n    color: white;\r\n}\r\n\r\ntable {\r\n    overflow: hidden;\r\n}\r\n\r\n.table-backplate {\r\n    height: 400px;\r\n    display: block;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.length {\r\n    width: 300px;\r\n}\r\n\r\n/* EXAM SPECIFIC  */\r\n\r\n.squeeze {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n\r\n}\r\n\r\n.midbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n    width: 200px;\r\n}\r\n\r\n.desc {\r\n    margin-left: 200px;\r\n    margin-right: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFNQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFPQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQSxtQkFBbUI7O0FBR25CO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQStCQTs7OztBQUlBOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7QUFJQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgLyogb3V0bGluZTogMXB4IGRvdHRlZCByZWQ7ICovXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTcwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTYzLCAxNTQpO1xyXG59XHJcblxyXG5oMiwgaDMsIGg1e1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5kaXZpc2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDcyLCAxNzMpO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggZGFya2JsdWU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNjbGlja2FibGU6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmJ0bi13YXJuaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5lcnJvcnMge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiByZ2IoMTYxLCAwLCAwKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oZWFkZXIgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbmhlYWRlciBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4udGgtYmlnIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbn1cclxuXHJcbi50aC1tZWRpdW0ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxufVxyXG5cclxuLnRoLXNtYWxsIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRyIHRoLmJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRlbGV0ZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWVkaXQge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWNvbXBsZXRlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IGJsYWNrO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMjBweDsgKi9cclxufVxyXG5cclxuLmJ0bi1hZGQ6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YWJsZS1iYWNrcGxhdGUge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmxlbmd0aCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBFWEFNIFNQRUNJRklDICAqL1xyXG5cclxuXHJcbi5zcXVlZXplIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1pZGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5kZXNjIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuIFxyXG4gICAgXHJcbn1cclxuICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcblxyXG5cclxuXHJcbn1cclxuICAgIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxuXHJcblxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      // tasks:any;
      // onetask:any;
      // createtask:any;
      // updatetask:any;
      // @Input() taskToShow:any;
      // errors:any;
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent); //this._router.navigate(['authors/all'])
    // private _route: ActivatedRoute,
    // private _router: Router
    //import { ActivatedRoute, Params, Router } from '@angular/router';
    // this._route.params.subscribe(params => {
    //             console.log(params);
    //             this.id=params.id;
    //         })
    // getTasks(){
    //     this.updatetask = null;
    //     this.createtask = {
    //         title: "",
    //         description: ""
    //     }
    //     let observable = this._httpService.getTasks()
    //     observable.subscribe(data => {
    //         this.tasks = data['results'];
    //         this.onetask = null;
    //     });
    // }
    // getOneTask(id:number){
    //     this.errors = null;
    //     let observable = this._httpService.getOneTask(id)
    //     observable.subscribe(data => {
    //         this.tasks = null;
    //         this.onetask = data['results'];
    //     });
    // }
    // createTask(){
    //     this.errors = null;
    //     let observable = this._httpService.createTask(this.createtask)
    //     observable.subscribe(data => {
    //         if(data["results"]){
    //             this.getTasks();
    //             this.createtask = {
    //                 title: "",
    //                 description: ""
    //             }
    //         }
    //         else if(data["errors"]){
    //             this.errors = [];
    //             for(let item in data["errors"]){
    //                 this.errors.push(data["errors"][item]);
    //             }
    //         }
    //     });       
    // }
    // deleteTask(id:number){
    //     //resets
    //     this.errors = null;
    //     this.updatetask = null;
    //     this.createtask = {
    //         title: "",
    //         description: ""
    //     }
    //     let observable = this._httpService.deleteTask(id)
    //     observable.subscribe(data => {
    //         this.getTasks();
    //         this.onetask = null;
    //     });
    // }
    // markComplete(id:number){
    //     //resets
    //     this.errors = null;
    //     let observable = this._httpService.markComplete(id)
    //     observable.subscribe(data => {
    //         this.getOneTask(id);
    //     });
    // }
    // editTask(){
    //     console.log("hereh;rake;jrakj;er")
    //     //resets
    //     this.createtask = null;
    //     this.errors = null;
    //     this.updatetask = {
    //         title: this.onetask.title,
    //         description: this.onetask.description
    //     }
    // }
    // updateTask(id:number){
    //     console.log(id)
    //     let observable = this._httpService.updateTask(id, this.updatetask)
    //     observable.subscribe(data => {
    //         if(data["results"]){
    //             this.createtask = {
    //             title: "",
    //             description: ""
    //             }
    //             this.getOneTask(id);
    //             this.updatetask = null;
    //         }
    //         else if(data["errors"]){
    //             this.errors = [];
    //             for(let item in data["errors"]){
    //                 this.errors.push(data["errors"][item]);
    //             }
    //         }
    //     });
    // }

    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _mono_mono_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./mono/mono.component */
    "./src/app/mono/mono.component.ts");
    /* harmony import */


    var _dual_dual_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dual/dual.component */
    "./src/app/dual/dual.component.ts");
    /* harmony import */


    var _triple_triple_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./triple/triple.component */
    "./src/app/triple/triple.component.ts");
    /* harmony import */


    var _combo_combo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./combo/combo.component */
    "./src/app/combo/combo.component.ts"); // import { TaskService } from './task.service';
    // import { ShowComponent } from './show/show.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _mono_mono_component__WEBPACK_IMPORTED_MODULE_8__["MonoComponent"], _dual_dual_component__WEBPACK_IMPORTED_MODULE_9__["DualComponent"], _triple_triple_component__WEBPACK_IMPORTED_MODULE_10__["TripleComponent"], _combo_combo_component__WEBPACK_IMPORTED_MODULE_11__["ComboComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
      providers: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/combo/combo.component.css":
  /*!*******************************************!*\
    !*** ./src/app/combo/combo.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppComboComboComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    width: 90%;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tYm8vY29tYm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tYm8vY29tYm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/combo/combo.component.ts":
  /*!******************************************!*\
    !*** ./src/app/combo/combo.component.ts ***!
    \******************************************/

  /*! exports provided: ComboComponent */

  /***/
  function srcAppComboComboComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComboComponent", function () {
      return ComboComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ComboComponent = /*#__PURE__*/function () {
      function ComboComponent() {
        _classCallCheck(this, ComboComponent);

        this.active = false;
        this.open = false;
      }

      _createClass(ComboComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.a1c >= 10) {
            this.active = true;
          } else {
            this.active = false;
          }
        }
      }, {
        key: "OnClick",
        value: function OnClick() {
          if (this.open === true) {
            this.open = false;
          } else {
            this.open = true;
          }
        }
      }]);

      return ComboComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ComboComponent.prototype, "a1c", void 0);
    ComboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-combo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./combo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/combo/combo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./combo.component.css */
      "./src/app/combo/combo.component.css"))["default"]]
    })], ComboComponent);
    /***/
  },

  /***/
  "./src/app/dual/dual.component.css":
  /*!*****************************************!*\
    !*** ./src/app/dual/dual.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDualDualComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    width: 90%;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHVhbC9kdWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2R1YWwvZHVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dual/dual.component.ts":
  /*!****************************************!*\
    !*** ./src/app/dual/dual.component.ts ***!
    \****************************************/

  /*! exports provided: DualComponent */

  /***/
  function srcAppDualDualComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DualComponent", function () {
      return DualComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DualComponent = /*#__PURE__*/function () {
      function DualComponent() {
        _classCallCheck(this, DualComponent);

        this.active = false;
        this.open = false;
      }

      _createClass(DualComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.a1c >= 9 && this.a1c < 10) {
            this.active = true;
          } else {
            this.active = false;
          }
        }
      }, {
        key: "OnClick",
        value: function OnClick() {
          if (this.open === true) {
            this.open = false;
          } else {
            this.open = true;
          }
        }
      }]);

      return DualComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DualComponent.prototype, "a1c", void 0);
    DualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dual',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dual.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dual/dual.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dual.component.css */
      "./src/app/dual/dual.component.css"))["default"]]
    })], DualComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    vertical-align: top;\r\n    /* outline: 1px dotted red; */\r\n    color: black;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.container {\r\n    width: 970px;\r\n    min-height: 800px;\r\n    margin: 0px auto;\r\n    padding: 60px;\r\n    font-size: 15px;\r\n    background-color: rgb(160, 163, 154);\r\n}\r\n\r\n.division {\r\n    background-color: rgb(49, 72, 173);\r\n    height: 2px;\r\n    width: 80%;\r\n    margin: 20px auto 20px auto;\r\n    box-shadow: 0px 0px 3px darkblue;\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n}\r\n\r\n#clickable:hover {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.btn-warning {\r\n    margin-top: 15px;\r\n}\r\n\r\n.errors {\r\n    color: red;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 0px;\r\n}\r\n\r\nspan {\r\n    color: rgb(161, 0, 0);\r\n    display: block;\r\n}\r\n\r\nheader p {\r\n    margin-bottom: 0px;\r\n    font-size: 10px;\r\n    text-align: end;\r\n}\r\n\r\nheader a {\r\n    font-size: 18px;\r\n    display: block;\r\n    text-align: end;\r\n}\r\n\r\n.th-big {\r\n    width: 40%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-medium {\r\n    width: 20%;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.th-small {\r\n    width: 10%;\r\n    text-align: center;\r\n    background-color: rgb(82, 82, 82);\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}\r\n\r\ntr th.bordered {\r\n    border: 1px solid black;\r\n}\r\n\r\n.btn-delete {\r\n    width: 30px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-edit {\r\n    width: 60px;\r\n    height: 20px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    padding: 0px;\r\n    margin: 10px auto;\r\n    line-height: 20px;\r\n}\r\n\r\n.btn-complete {\r\n    text-align: center;\r\n    display: block;\r\n    width: 200px;\r\n    height: 40px;\r\n    line-height: 23px;\r\n    background-color: rgb(82, 82, 82);\r\n    font-weight: bold;\r\n    color: black;\r\n    box-shadow: 2px 2px 3px black;\r\n    /* margin-top: 20px; */\r\n}\r\n\r\n.btn-add:hover{\r\n    color: white;\r\n}\r\n\r\ntable {\r\n    overflow: hidden;\r\n}\r\n\r\n.table-backplate {\r\n    height: 400px;\r\n    display: block;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.length {\r\n    width: 300px;\r\n}\r\n\r\n/* EXAM SPECIFIC  */\r\n\r\n.squeeze {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n\r\n}\r\n\r\n.midbutton {\r\n    margin: 0px auto;\r\n    display: block;\r\n    width: 200px;\r\n}\r\n\r\n.desc {\r\n    margin-left: 200px;\r\n    margin-right: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n \r\n    \r\n}\r\n\r\n@media only screen and (min-width: 481px) {\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFJQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFRQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBLG1CQUFtQjs7QUFHbkI7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBK0JBOzs7O0FBSUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7OztBQUlBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvKiBvdXRsaW5lOiAxcHggZG90dGVkIHJlZDsgKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNjMsIDE1NCk7XHJcbn1cclxuXHJcblxyXG5cclxuLmRpdmlzaW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNzIsIDE3Myk7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBkYXJrYmx1ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2NsaWNrYWJsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmVycm9ycyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3I6IHJnYigxNjEsIDAsIDApO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmhlYWRlciBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuaGVhZGVyIGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi50aC1iaWcge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxufVxyXG5cclxuLnRoLW1lZGl1bSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xyXG59XHJcblxyXG4udGgtc21hbGwge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudHIgdGguYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGVsZXRlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tZWRpdCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tY29tcGxldGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggYmxhY2s7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xyXG59XHJcblxyXG4uYnRuLWFkZDpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhYmxlLWJhY2twbGF0ZSB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4ubGVuZ3RoIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuXHJcbi8qIEVYQU0gU1BFQ0lGSUMgICovXHJcblxyXG5cclxuLnNxdWVlemUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcblxyXG59XHJcblxyXG4ubWlkYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gXHJcbiAgICBcclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuXHJcblxyXG5cclxufVxyXG4gICAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG5cclxuXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/mono/mono.component.css":
  /*!*****************************************!*\
    !*** ./src/app/mono/mono.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMonoMonoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    width: 90%;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9uby9tb25vLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vbm8vbW9uby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/mono/mono.component.ts":
  /*!****************************************!*\
    !*** ./src/app/mono/mono.component.ts ***!
    \****************************************/

  /*! exports provided: MonoComponent */

  /***/
  function srcAppMonoMonoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonoComponent", function () {
      return MonoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MonoComponent = /*#__PURE__*/function () {
      function MonoComponent() {
        _classCallCheck(this, MonoComponent);

        this.active = false;
        this.open = false;
      }

      _createClass(MonoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.a1c >= 7 && this.a1c < 9) {
            this.active = true;
          } else {
            this.active = false;
          }
        }
      }, {
        key: "OnClick",
        value: function OnClick() {
          if (this.open === true) {
            this.open = false;
          } else {
            this.open = true;
          }
        }
      }]);

      return MonoComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MonoComponent.prototype, "a1c", void 0);
    MonoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mono',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mono.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mono/mono.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mono.component.css */
      "./src/app/mono/mono.component.css"))["default"]]
    })], MonoComponent);
    /***/
  },

  /***/
  "./src/app/triple/triple.component.css":
  /*!*********************************************!*\
    !*** ./src/app/triple/triple.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTripleTripleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    width: 90%;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcGxlL3RyaXBsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90cmlwbGUvdHJpcGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/triple/triple.component.ts":
  /*!********************************************!*\
    !*** ./src/app/triple/triple.component.ts ***!
    \********************************************/

  /*! exports provided: TripleComponent */

  /***/
  function srcAppTripleTripleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripleComponent", function () {
      return TripleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TripleComponent = /*#__PURE__*/function () {
      function TripleComponent() {
        _classCallCheck(this, TripleComponent);

        this.active = false;
        this.open = false;
      }

      _createClass(TripleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.a1c >= 9 && this.a1c < 10) {
            this.active = true;
          } else {
            this.active = false;
          }
        }
      }, {
        key: "OnClick",
        value: function OnClick() {
          if (this.open === true) {
            this.open = false;
          } else {
            this.open = true;
          }
        }
      }]);

      return TripleComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TripleComponent.prototype, "a1c", void 0);
    TripleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-triple',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./triple.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/triple/triple.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./triple.component.css */
      "./src/app/triple/triple.component.css"))["default"]]
    })], TripleComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\X-Chill-X\Github\Diabetes_Treatment\public\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map