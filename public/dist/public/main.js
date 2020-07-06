(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <div>~~~~~</div>\n    <app-patient></app-patient>\n    <div>~~~~~</div>\n    <app-mono></app-mono>\n    <app-dual></app-dual>\n    <app-triple></app-triple>\n    <app-combo></app-combo>\n\n    <h4>--{{this.sharedBin.active}}--</h4>\n    <h4>-{{this.sharedBin.a1c}}-</h4>\n    <!-- <router-outlet></router-outlet> -->\n\n</div>\n\n\n<!-- \n\n    <button [routerLink]=\"['/alpha']\">Load Alpha</button>\n    <a [routerLink] = \"['details', 5]\"> Go to /products/details/5 </a> \n\n\n    <div *ngIf=\"errors\">\n        <h4>Errors:</h4>\n        <ul>\n            <div *ngFor=\"let item of errors\">\n                <li class=\"errors\">{{item.message}}</li>\n            </div>\n        </ul>\n\n    </div>\n\n\n\n\n    <div *ngIf=\"createtask\">\n        <form (submit)=\"createTask()\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"createtask.title\" [(ngModel)]=\"createtask.title\" class=\"form-control\" id=\"title\" placeholder=\"---\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"createtask.description\" [(ngModel)]=\"createtask.description\" class=\"form-control\" id=\"description\" rows=\"3\" placeholder=\"---\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Create</button>\n        </form>\n    </div>\n\n    <div *ngIf=\"updatetask\">\n        <form (submit)=\"updateTask(onetask._id)\">\n            <div class=\"form-group\">\n                <label for=\"title\">Task Name:</label>\n                <input name=\"updatetask.title\" [(ngModel)]=\"updatetask.title\" class=\"form-control\" id=\"title\" value=\"updatetask.title\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\">Description:</label>\n                <textarea name=\"updatetask.description\" [(ngModel)]=\"updatetask.description\" class=\"form-control\" id=\"description\" rows=\"3\" value=\"updatetask.description\"></textarea>\n            </div>\n\n            <button class=\"btn btn-warning\" type=\"submit\">Submit Edits</button>\n        </form>\n    </div>\n\n    <div class=\"division\"></div>\n\n    <button class=\"btn btn-primary\" (click)=\"getTasks()\">Click for Tasks</button>\n\n    <div class=\"division\"></div>\n\n    <div class=\"centered\" *ngFor=\"let task of tasks\">\n\n        <h2><a id=\"clickable\" (click)=\"getOneTask(task._id)\">{{task.title}}</a></h2>\n        <div class=\"division\"></div>\n    </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/combo/combo.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/combo/combo.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':this.sharedBin.active === 'combo'}\" \n    class=\"therapy_container\">\n\n    <header (click)=\"OnClick()\">\n        <span>Combination Injection Therapy</span>\n        <span class=\"triangle\">&#9660;</span>\n    </header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n\n        <h6>More Info To Come</h6>\n        \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dual/dual.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dual/dual.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':this.sharedBin.active === 'dual'}\" \n    class=\"therapy_container\">\n\n    <header (click)=\"OnClick()\">\n        <span>Dual Therapy</span>\n        <span class=\"triangle\">&#9660;</span>\n    </header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n        \n        <app-lifestyle></app-lifestyle>\n        <app-metformin></app-metformin>\n        <h6>Additional Agent</h6>\n        <div class=\"division\">~~~~</div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lifestyle/lifestyle.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lifestyle/lifestyle.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':active === true}\" \n    class=\"info_container\">\n    <h6 (click)=\"OnClick()\">Lifestyle Management</h6>\n\n    <div *ngIf=\"open === true\" class=\"infoback\">\n        \n        <ul>\n            <li>Diabetes self-management education (DSME)</li>\n            <li>Diabetes self-management support (DSMS)</li>\n            <li>Nuitrition therapy</li>\n            <li>Physical activity</li>\n            <li>Smoking cessation counseling</li>\n            <li>Psychosocial care</li>\n        </ul>\n\n        <div class=\"division\">~~~~</div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/metformin/metformin.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/metformin/metformin.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':active === true}\" \n    class=\"info_container\">\n    <h6 (click)=\"OnClick()\">Metaformin</h6>\n\n    <div *ngIf=\"open === true\" class=\"infoback\">\n        \n        <table>\n            <tr>\n                <th>Efficacy</th>\n                <td>High</td>\n            </tr>\n            <tr>\n                <th>Hypoglycemia</th>\n                <td>No</td>\n            </tr>\n            <tr>\n                <th>Weight Change</th>\n                <td>Neutral or Modest Loss</td>\n            </tr>\n            <tr>\n                <th>Cost</th>\n                <td>Low</td>\n            </tr>\n            <tr>\n                <th>Oral/SQ</th>\n                <td>Oral</td>\n            </tr>\n        </table>\n\n        <table>\n            <tr>\n                <th>CV Effects</th>\n                <td>\n                    <table>\n                        <tr>\n                            <th>ASCVD</th>\n                            <td>Potential Benefit</td>\n                        </tr>\n                        <tr>\n                            <th>CHF</th>\n                            <td>Neutral</td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n            <tr>\n                <th>Renal Effects</th>\n                <td>\n                    <table>\n                        <tr>\n                            <th>Progression of DKD</th>\n                            <td>Neutral</td>\n                        </tr>\n                        <tr>\n                            <th>Dosing</th>\n                            <td>Contraindicated with eGRF &lt30</td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n            <tr></tr>\n        </table>\n\n\n        <div class=\"division\">~~~~</div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mono/mono.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mono/mono.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':active === true}\" \n    class=\"therapy_container\">\n    <header (click)=\"OnClick()\">\n        <span>Mono Therapy</span>\n        <span class=\"triangle\">&#9660;</span>\n    </header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n\n        <app-lifestyle [active] = \"active\"></app-lifestyle>\n        <app-metformin [active] = \"active\"></app-metformin> \n        <div class=\"division\">~~~~</div>\n\n        <p>Initiate metformin therapy if no contradictions</p>\n        \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"patient_container\">\n\n    <header (click)=\"OnClick()\">\n        <span>Patient Info</span>\n        <span class=\"triangle\">&#9660;</span>\n    </header>\n\n    <!----------------------------->\n\n    <div *ngIf=\"open == false\" class=\"cardback\" (click)=\"OnClick()\">\n        <h6>A1C: {{this.sharedBin.a1c}}%</h6>\n        <h6>Newly Diagnosed: \n            <span *ngIf=\"this.sharedBin.newly_diagnosed === true\">Yes</span>\n            <span *ngIf=\"this.sharedBin.newly_diagnosed === false\">No</span>\n        </h6>\n        <h6>Has Symptoms: \n            <span *ngIf=\"this.sharedBin.have_symptoms === true\">Yes</span>\n            <span *ngIf=\"this.sharedBin.have_symptoms === false\">No</span>\n        </h6>\n        <h6>Weight: {{this.sharedBin.weight_kg}} kg, {{this.sharedBin.weight_lb}} lb</h6>\n        <h6>Current Insulin: {{this.sharedBin.insulin_current}}</h6>\n        <h6>Cholesterol: {{this.sharedBin.cholesterol}}</h6>\n        <h6>Past Heart Attack: \n            <span *ngIf=\"this.sharedBin.heart_attack === true\">Yes</span>\n            <span *ngIf=\"this.sharedBin.heart_attack === false\">No</span>\n        </h6>\n        <h6>EF: {{this.sharedBin.EF}}</h6>\n        <h6>Microalbuminuria: {{this.sharedBin.micro_album}}</h6>\n        <h6>Creatinine: {{this.sharedBin.creatinine}}</h6>\n        <h6>Blood Pressure: {{this.sharedBin.blood_pressure_syst}}/{{this.sharedBin.blood_pressure_dias}}</h6>\n        <h6>eGFR: {{this.sharedBin.eGFR}}</h6>\n    </div>\n\n    <!----------------------------->\n\n    <div *ngIf=\"open == true\" class=\"cardback\">\n\n        <!--A1C-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>A1C%:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.a1c\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.a1c\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--New Patient-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>New Patient:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <label class=\"switch_container\">\n                    <input type=\"checkbox\" [(ngModel)]=\"this.sharedBin.newly_diagnosed\" class=\"form-control\">\n                    <span class=\"switch round\"></span>\n                </label>\n            </div>\n            <div class=\"patient_col_c\">\n                <span *ngIf=\"this.sharedBin.newly_diagnosed === true\">Yes</span>\n                <span *ngIf=\"this.sharedBin.newly_diagnosed === false\">No</span>\n            </div>\n        </div>\n\n        <!--Symptoms-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Showing Symptoms:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <label class=\"switch_container\">\n                    <input type=\"checkbox\" [(ngModel)]=\"this.sharedBin.have_symptoms\" class=\"form-control\">\n                    <span class=\"switch round\"></span>\n                </label>\n            </div>\n            <div class=\"patient_col_c\">\n                <span *ngIf=\"this.sharedBin.have_symptoms === true\">Yes</span>\n                <span *ngIf=\"this.sharedBin.have_symptoms === false\">No</span>\n            </div>\n        </div>\n\n        <!--Weight-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Weight:</p>\n            </div>\n            <div class=\"patient_col_b\"></div>\n            <div class=\"patient_col_c\"></div>\n        </div>\n\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p class=\"sub_offset\">kg:&nbsp;&nbsp;&nbsp;</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.weight_kg\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.weight_kg\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p class=\"sub_offset\">lb:&nbsp;&nbsp;&nbsp;</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.weight_lb\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.weight_lb\" \n                    type=\"range\" min=\"5\" max=\"400\" value=\"50\" class=\"slider\" step=\"1\">\n                </div>\n            </div>\n        </div>\n            \n        <!--Insulin-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Current Insulin:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.insulin_current\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.insulin_current\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--Cholesterol-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Cholesterol:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.cholesterol\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.cholesterol\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--Heart Attack-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Past Heart Attack:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <label class=\"switch_container\">\n                    <input type=\"checkbox\" [(ngModel)]=\"this.sharedBin.heart_attack\" class=\"form-control\">\n                    <span class=\"switch round\"></span>\n                </label>\n            </div>\n            <div class=\"patient_col_c\">\n                <span *ngIf=\"this.sharedBin.heart_attack === true\">Yes</span>\n                <span *ngIf=\"this.sharedBin.heart_attack === false\">No</span>\n            </div>\n        </div>\n\n        <!--EF-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>EF:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.EF\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.EF\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--Micro Album-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Microalbuminuria:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.micro_album\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.micro_album\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--Creatinine-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Creatinine:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.creatinine\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.creatinine\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--Blood Pressure-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Blood Pressure:</p>\n            </div>\n            <div class=\"patient_col_b\"></div>\n            <div class=\"patient_col_c\">{{this.sharedBin.blood_pressure_syst}}/{{this.sharedBin.blood_pressure_dias}}</div>\n        </div>\n\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p class=\"sub_offset\">Systolic:&nbsp;&nbsp;&nbsp;</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.blood_pressure_syst\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.blood_pressure_syst\" \n                    type=\"range\" min=\"90\" max=\"250\" value=\"50\" class=\"slider\" step=\"10\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p class=\"sub_offset\">Diastolic:&nbsp;&nbsp;&nbsp;</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.blood_pressure_dias\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.blood_pressure_dias\" \n                    type=\"range\" min=\"60\" max=\"140\" value=\"50\" class=\"slider\" step=\"10\">\n                </div>\n            </div>\n        </div>\n\n        <!--eGFR-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>eGFR:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.eGFR\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.eGFR\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n    \n    </div>\n\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/triple/triple.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/triple/triple.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':this.sharedBin.active === 'triple'}\" \n    class=\"therapy_container\">\n\n    <header (click)=\"OnClick()\">\n        <span>Triple Therapy</span>\n        <span class=\"triangle\">&#9660;</span>\n    </header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n\n        <app-lifestyle></app-lifestyle>\n        <app-metformin></app-metformin>\n        <h6>First Agent</h6>\n        <h6>Second Agent</h6>\n        <div class=\"division\">~~~~</div>\n\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes = [
// { path: '',component: HomeComponent },
// { path: '####',component: ListComponent },
// { path: '####/new',component: NewComponent },
// { path: '####/edit/:id', component: EditComponent },
// { path: '', pathMatch: 'full', redirectTo: '/' },
// { path: '**', component: PageNotFoundComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

// const routes: Routes = [
//     { path: 'product',component: ProductComponent, children: [
//         { path: 'details/:id', component: ProductDetailComponent },
//     ]},
//     { path: 'review',component: ReviewComponent, children: [
//         { path: 'details/:id', component: ReviewDetailComponent },
//     ]},
//     { path: '', pathMatch: 'full', redirectTo: '/product' },
// ];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-bin.service */ "./src/app/shared-bin.service.ts");



let AppComponent = class AppComponent {
    constructor(sharedBin) {
        this.sharedBin = sharedBin;
    }
    ngOnInit() {
        // this.sharedBin.set_example("mage");
    }
    ngOnChanges() {
        // console.log("hhehe");
        // if (this.sharedBin.a1c >= 9 && this.sharedBin.a1c < 10){
        //     console.log("hyoyoyoyoyo");
        //     this.sharedBin.active = "triple";
        // }
        // else{
        //     this.sharedBin.active = "";
        // }
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__["SharedBinService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);

//this._router.navigate(['authors/all'])
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


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _mono_mono_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mono/mono.component */ "./src/app/mono/mono.component.ts");
/* harmony import */ var _dual_dual_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dual/dual.component */ "./src/app/dual/dual.component.ts");
/* harmony import */ var _triple_triple_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./triple/triple.component */ "./src/app/triple/triple.component.ts");
/* harmony import */ var _combo_combo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./combo/combo.component */ "./src/app/combo/combo.component.ts");
/* harmony import */ var _metformin_metformin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metformin/metformin.component */ "./src/app/metformin/metformin.component.ts");
/* harmony import */ var _lifestyle_lifestyle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lifestyle/lifestyle.component */ "./src/app/lifestyle/lifestyle.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _shared_bin_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared-bin.service */ "./src/app/shared-bin.service.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _mono_mono_component__WEBPACK_IMPORTED_MODULE_7__["MonoComponent"],
            _dual_dual_component__WEBPACK_IMPORTED_MODULE_8__["DualComponent"],
            _triple_triple_component__WEBPACK_IMPORTED_MODULE_9__["TripleComponent"],
            _combo_combo_component__WEBPACK_IMPORTED_MODULE_10__["ComboComponent"],
            _metformin_metformin_component__WEBPACK_IMPORTED_MODULE_11__["MetforminComponent"],
            _lifestyle_lifestyle_component__WEBPACK_IMPORTED_MODULE_12__["LifestyleComponent"],
            _patient_patient_component__WEBPACK_IMPORTED_MODULE_13__["PatientComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        providers: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shared_bin_service__WEBPACK_IMPORTED_MODULE_14__["SharedBinService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/combo/combo.component.css":
/*!*******************************************!*\
  !*** ./src/app/combo/combo.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWJvL2NvbWJvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/combo/combo.component.ts":
/*!******************************************!*\
  !*** ./src/app/combo/combo.component.ts ***!
  \******************************************/
/*! exports provided: ComboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboComponent", function() { return ComboComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-bin.service */ "./src/app/shared-bin.service.ts");



let ComboComponent = class ComboComponent {
    constructor(sharedBin) {
        this.sharedBin = sharedBin;
        this.active = false;
        this.open = false;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        // if (this.a1c >= 10){
        // this.active = true;
        // }
        // else{
        // this.active = false;
        // }
    }
    //open - close
    OnClick() {
        if (this.open === true) {
            this.open = false;
        }
        else {
            this.open = true;
        }
    }
};
ComboComponent.ctorParameters = () => [
    { type: _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__["SharedBinService"] }
];
ComboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-combo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./combo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/combo/combo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./combo.component.css */ "./src/app/combo/combo.component.css")).default]
    })
], ComboComponent);



/***/ }),

/***/ "./src/app/dual/dual.component.css":
/*!*****************************************!*\
  !*** ./src/app/dual/dual.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R1YWwvZHVhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dual/dual.component.ts":
/*!****************************************!*\
  !*** ./src/app/dual/dual.component.ts ***!
  \****************************************/
/*! exports provided: DualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DualComponent", function() { return DualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-bin.service */ "./src/app/shared-bin.service.ts");



let DualComponent = class DualComponent {
    constructor(sharedBin) {
        this.sharedBin = sharedBin;
        this.active = false;
        this.open = false;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        // if (this.a1c >= 9 && this.a1c < 10){
        // this.active = true;
        // }
        // else{
        // this.active = false;
        // }
    }
    //open - close
    OnClick() {
        if (this.open === true) {
            this.open = false;
        }
        else {
            this.open = true;
        }
    }
};
DualComponent.ctorParameters = () => [
    { type: _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__["SharedBinService"] }
];
DualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dual',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dual.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dual/dual.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dual.component.css */ "./src/app/dual/dual.component.css")).default]
    })
], DualComponent);



/***/ }),

/***/ "./src/app/lifestyle/lifestyle.component.css":
/*!***************************************************!*\
  !*** ./src/app/lifestyle/lifestyle.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpZmVzdHlsZS9saWZlc3R5bGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/lifestyle/lifestyle.component.ts":
/*!**************************************************!*\
  !*** ./src/app/lifestyle/lifestyle.component.ts ***!
  \**************************************************/
/*! exports provided: LifestyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifestyleComponent", function() { return LifestyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-bin.service */ "./src/app/shared-bin.service.ts");



let LifestyleComponent = class LifestyleComponent {
    constructor(sharedBin) {
        this.sharedBin = sharedBin;
        this.open = false;
    }
    ngOnInit() {
    }
    ngOnChanges() {
    }
    //open - close
    OnClick() {
        if (this.open === true) {
            this.open = false;
        }
        else {
            this.open = true;
        }
    }
};
LifestyleComponent.ctorParameters = () => [
    { type: _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__["SharedBinService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LifestyleComponent.prototype, "active", void 0);
LifestyleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lifestyle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lifestyle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lifestyle/lifestyle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lifestyle.component.css */ "./src/app/lifestyle/lifestyle.component.css")).default]
    })
], LifestyleComponent);



/***/ }),

/***/ "./src/app/metformin/metformin.component.css":
/*!***************************************************!*\
  !*** ./src/app/metformin/metformin.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGZvcm1pbi9tZXRmb3JtaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/metformin/metformin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/metformin/metformin.component.ts ***!
  \**************************************************/
/*! exports provided: MetforminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetforminComponent", function() { return MetforminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-bin.service */ "./src/app/shared-bin.service.ts");



let MetforminComponent = class MetforminComponent {
    constructor(sharedBin) {
        this.sharedBin = sharedBin;
        this.open = false;
    }
    ngOnInit() {
    }
    ngOnChanges() {
    }
    //open - close
    OnClick() {
        if (this.open === true) {
            this.open = false;
        }
        else {
            this.open = true;
        }
    }
};
MetforminComponent.ctorParameters = () => [
    { type: _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__["SharedBinService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MetforminComponent.prototype, "active", void 0);
MetforminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-metformin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./metformin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/metformin/metformin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./metformin.component.css */ "./src/app/metformin/metformin.component.css")).default]
    })
], MetforminComponent);



/***/ }),

/***/ "./src/app/mono/mono.component.css":
/*!*****************************************!*\
  !*** ./src/app/mono/mono.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbm8vbW9uby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/mono/mono.component.ts":
/*!****************************************!*\
  !*** ./src/app/mono/mono.component.ts ***!
  \****************************************/
/*! exports provided: MonoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonoComponent", function() { return MonoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-bin.service */ "./src/app/shared-bin.service.ts");



let MonoComponent = class MonoComponent {
    constructor(sharedBin) {
        this.sharedBin = sharedBin;
        this.open = false;
    }
    ngOnInit() {
        this.active = true;
    }
    ngOnChanges() {
        // if (this.a1c >= 7 && this.a1c < 9){
        // this.active = true;
        // }
        // else{
        // this.active = false;
        // }
    }
    //open - close
    OnClick() {
        if (this.open === true) {
            this.open = false;
        }
        else {
            this.open = true;
        }
    }
};
MonoComponent.ctorParameters = () => [
    { type: _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__["SharedBinService"] }
];
MonoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mono',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mono.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mono/mono.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mono.component.css */ "./src/app/mono/mono.component.css")).default]
    })
], MonoComponent);



/***/ }),

/***/ "./src/app/patient/patient.component.css":
/*!***********************************************!*\
  !*** ./src/app/patient/patient.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.patient_row {\r\n    width: 100%;\r\n}\r\n\r\n.patient_col_a {\r\n    width: 40%;\r\n    padding: 3px 0px;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.patient_col_a p {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.patient_col_b {\r\n    width: 20%;\r\n    display: inline-block;\r\n}\r\n\r\n.patient_col_c {\r\n    width: 40%;\r\n    display: inline-block;\r\n    /* outline: 1px dashed purple; */\r\n}\r\n\r\ninput {\r\n    margin: 0px auto;\r\n    display: block;\r\n    text-align: center;\r\n    width: 60%;\r\n    height: 30px;\r\n}\r\n\r\n.sub_offset {\r\n    text-align: right;\r\n}\r\n\r\n/* input, .move_switch {\r\n    position: absolute;\r\n    left: 40%;\r\n    outline: 1px dashed purple;\r\n}\r\n\r\n.choice_box p {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 30px;\r\n}\r\n\r\n.move_yesno {\r\n    position: absolute;\r\n    left: 50%;\r\n} */\r\n\r\n/* ----------SWITCH-------------*/\r\n\r\n.switch_container {\r\n    position: relative;\r\n    top: 1px;\r\n    margin: 0px 10px;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 24px;\r\n  }\r\n\r\n/* Hide default HTML checkbox */\r\n\r\n.switch_container input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n/* The switch */\r\n\r\n.switch {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: gray;\r\n    transition: .4s;\r\n  }\r\n\r\n.switch:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 24px;\r\n    width: 24px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n\r\ninput:checked + .switch {\r\n    background-color: orange;\r\n  }\r\n\r\ninput:focus + .switch {\r\n    box-shadow: 0 0 1px orange;\r\n  }\r\n\r\ninput:checked + .switch:before {\r\n    transform: translateX(16px);\r\n  }\r\n\r\n/* Rounded sliders */\r\n\r\n.switch.round {\r\n    border-radius: 24px;\r\n  }\r\n\r\n.switch.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n/* ----------SLIDER-------------*/\r\n\r\n.slider_container {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.slider {\r\n    -webkit-appearance: none;  /* Override default CSS styles */\r\n    -moz-appearance: none;\r\n         appearance: none;\r\n    width: 100%; /* Full-width */\r\n    height: 15px; /* Specified height */\r\n    background: #ffffff; /* Grey background */\r\n    outline: none; /* Remove outline */\r\n    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */ /* 0.2 seconds transition on hover */\r\n    transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n    opacity: 1; /* Fully shown on mouse-over */\r\n}\r\n\r\n/* The slider handle */\r\n\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none; /* Override default look */\r\n    appearance: none;\r\n    width: 13px; /* Set a specific slider handle width */\r\n    height: 25px; /* Slider handle height */\r\n    background: gray; /* Green background */\r\n    cursor: pointer; /* Cursor on hover */\r\n    border-radius: 10px;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 25px; /* Set a specific slider handle width */\r\n    height: 25px; /* Slider handle height */\r\n    background: #4CAF50; /* Green background */\r\n    cursor: pointer; /* Cursor on hover */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRzs7QUFHSCxpQ0FBaUM7O0FBRWpDO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUEsK0JBQStCOztBQUMvQjtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYOztBQUVBLGVBQWU7O0FBQ2Y7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFFdEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUV2QixlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztBQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztBQUVBO0lBR0UsMkJBQTJCO0VBQzdCOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBS0YsaUNBQWlDOztBQUVqQztJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0IsR0FBRyxnQ0FBZ0M7SUFDM0QscUJBQWdCO1NBQWhCLGdCQUFnQjtJQUNoQixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUscUJBQXFCO0lBQ25DLG1CQUFtQixFQUFFLG9CQUFvQjtJQUN6QyxhQUFhLEVBQUUsbUJBQW1CO0lBQ2xDLFlBQVksRUFBRSx1REFBdUQsRUFDNUMsb0NBQW9DO0lBQzdELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVUsRUFBRSw4QkFBOEI7QUFDOUM7O0FBRUEsc0JBQXNCOztBQUN0QjtJQUNJLHdCQUF3QixFQUFFLDBCQUEwQjtJQUNwRCxnQkFBZ0I7SUFDaEIsV0FBVyxFQUFFLHVDQUF1QztJQUNwRCxZQUFZLEVBQUUseUJBQXlCO0lBQ3ZDLGdCQUFnQixFQUFFLHFCQUFxQjtJQUN2QyxlQUFlLEVBQUUsb0JBQW9CO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVcsRUFBRSx1Q0FBdUM7SUFDcEQsWUFBWSxFQUFFLHlCQUF5QjtJQUN2QyxtQkFBbUIsRUFBRSxxQkFBcUI7SUFDMUMsZUFBZSxFQUFFLG9CQUFvQjtBQUN6QyIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wYXRpZW50X3JvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBhdGllbnRfY29sX2Ege1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHBhZGRpbmc6IDNweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXRpZW50X2NvbF9hIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ucGF0aWVudF9jb2xfYiB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGF0aWVudF9jb2xfYyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLyogb3V0bGluZTogMXB4IGRhc2hlZCBwdXJwbGU7ICovXHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5zdWJfb2Zmc2V0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIGlucHV0LCAubW92ZV9zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgb3V0bGluZTogMXB4IGRhc2hlZCBwdXJwbGU7XHJcbn1cclxuXHJcbi5jaG9pY2VfYm94IHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5tb3ZlX3llc25vIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxufSAqL1xyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS1TV0lUQ0gtLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5zd2l0Y2hfY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xyXG4gIC5zd2l0Y2hfY29udGFpbmVyIGlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHN3aXRjaCAqL1xyXG4gIC5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICAuc3dpdGNoOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc3dpdGNoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMgKyAuc3dpdGNoIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggb3JhbmdlO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnN3aXRjaDpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xyXG4gIH1cclxuICBcclxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuICAuc3dpdGNoLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zd2l0Y2gucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tU0xJREVSLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uc2xpZGVyX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICAvKiBPdmVycmlkZSBkZWZhdWx0IENTUyBzdHlsZXMgKi9cclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbC13aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxNXB4OyAvKiBTcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyAvKiBHcmV5IGJhY2tncm91bmQgKi9cclxuICAgIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZSBvdXRsaW5lICovXHJcbiAgICBvcGFjaXR5OiAwLjc7IC8qIFNldCB0cmFuc3BhcmVuY3kgKGZvciBtb3VzZS1vdmVyIGVmZmVjdHMgb24gaG92ZXIpICovXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4yczsgLyogMC4yIHNlY29uZHMgdHJhbnNpdGlvbiBvbiBob3ZlciAqL1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XHJcbn1cclxuXHJcbi5zbGlkZXI6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTsgLyogRnVsbHkgc2hvd24gb24gbW91c2Utb3ZlciAqL1xyXG59XHJcbiAgXHJcbi8qIFRoZSBzbGlkZXIgaGFuZGxlICovXHJcbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogT3ZlcnJpZGUgZGVmYXVsdCBsb29rICovXHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDEzcHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cclxuICAgIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQ6IGdyYXk7IC8qIEdyZWVuIGJhY2tncm91bmQgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc29yIG9uIGhvdmVyICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiAgXHJcbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gICAgd2lkdGg6IDI1cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cclxuICAgIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7IC8qIEdyZWVuIGJhY2tncm91bmQgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc29yIG9uIGhvdmVyICovXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/patient/patient.component.ts":
/*!**********************************************!*\
  !*** ./src/app/patient/patient.component.ts ***!
  \**********************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-bin.service */ "./src/app/shared-bin.service.ts");



let PatientComponent = class PatientComponent {
    constructor(sharedBin) {
        this.sharedBin = sharedBin;
    }
    ngOnInit() {
        this.open = true;
    }
    ngOnChanges() {
    }
    //open - close
    OnClick() {
        if (this.open === true) {
            this.open = false;
        }
        else {
            this.open = true;
        }
    }
};
PatientComponent.ctorParameters = () => [
    { type: _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__["SharedBinService"] }
];
PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient.component.css */ "./src/app/patient/patient.component.css")).default]
    })
], PatientComponent);



/***/ }),

/***/ "./src/app/shared-bin.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared-bin.service.ts ***!
  \***************************************/
/*! exports provided: SharedBinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedBinService", function() { return SharedBinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SharedBinService = class SharedBinService {
    // a1cchange: Subject<string> = new Subject<number>();
    constructor() {
        this.active = "mono";
        this.newly_diagnosed = true;
        this.have_symptoms = false;
        this.a1c = 7.0;
        this.heart_attack = false;
        this.blood_pressure_syst = 120;
        this.blood_pressure_dias = 80;
    }
};
SharedBinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedBinService);



/***/ }),

/***/ "./src/app/triple/triple.component.css":
/*!*********************************************!*\
  !*** ./src/app/triple/triple.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyaXBsZS90cmlwbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/triple/triple.component.ts":
/*!********************************************!*\
  !*** ./src/app/triple/triple.component.ts ***!
  \********************************************/
/*! exports provided: TripleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripleComponent", function() { return TripleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-bin.service */ "./src/app/shared-bin.service.ts");



let TripleComponent = class TripleComponent {
    constructor(sharedBin) {
        this.sharedBin = sharedBin;
        this.active = false;
        this.open = false;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        // if (this.a1c >= 9 && this.a1c < 10){
        // this.active = true;
        // }
        // else{
        // this.active = false;
        // }
    }
    //open - close
    OnClick() {
        if (this.open === true) {
            this.open = false;
        }
        else {
            this.open = true;
        }
    }
};
TripleComponent.ctorParameters = () => [
    { type: _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__["SharedBinService"] }
];
TripleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-triple',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./triple.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/triple/triple.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./triple.component.css */ "./src/app/triple/triple.component.css")).default]
    })
], TripleComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\X-Chill-X\Github\Diabetes_Treatment\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map