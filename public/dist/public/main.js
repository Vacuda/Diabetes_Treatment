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
/* harmony default export */ __webpack_exports__["default"] = (" <!-- These values are taken from the Shared Bin Service and inputted into\n    the Doctors Office, a component that houses all of the project. \n    \n    The Inputs are hooked up directly to the Shared Bin Service.  When those\n    values are changed, it will trigger these to change, which will trigger ngOnChanges\n    to trigger within the Doctors Office TS.  The main diagnosis logic, housed with the\n    Doctors Office TS, will make the diagnosis and send the diagnosis down to the\n    components that need it.\n\n    Every input change thus changes the diagnosis-->\n\n\n<app-doctors-office \n\n    [newly_diagnosed]=\"this.sharedBin.newly_diagnosed\"\n    [have_symptoms]=\"this.sharedBin.have_symptoms\"\n\n    [a1c]=\"this.sharedBin.a1c\"\n    [weight_lb]=\"this.sharedBin.weight_lb\"\n    [weight_kg]=\"this.sharedBin.weight_kg\"\n    [insulin_current]=\"this.sharedBin.insulin_current\"\n\n    [cholesterol]=\"this.sharedBin.cholesterol\"\n    [heart_attack]=\"this.sharedBin.heart_attack\"\n    [EF]=\"this.sharedBin.EF\"\n\n    [micro_album]=\"this.sharedBin.micro_album\"\n    [creatinine]=\"this.sharedBin.creatinine\"\n    [blood_pressure_syst]=\"this.sharedBin.blood_pressure_syst\"\n    [blood_pressure_dias]=\"this.sharedBin.blood_pressure_dias\"\n    [eGFR]=\"this.sharedBin.eGFR\">\n\n</app-doctors-office>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/combo/combo.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/combo/combo.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':this.sharedBin.active === 'combo'}\" \n    class=\"therapy_container\">\n\n    <header (click)=\"OnClick()\">\n        <span>Combination Injection Therapy</span>\n        <span class=\"hamburger\">&#9776;</span>\n    </header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n\n        <h6>More Info To Come</h6>\n        \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctors-office/doctors-office.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctors-office/doctors-office.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div>~~~~~</div>\n    <app-patient></app-patient>\n    <div>~~~~~</div>\n    <app-mono [diagnosis]=\"diagnosis\"></app-mono>\n    <app-dual [diagnosis]=\"diagnosis\"></app-dual>\n    <app-triple [diagnosis]=\"diagnosis\"></app-triple>\n    <app-combo [diagnosis]=\"diagnosis\"></app-combo>\n\n    <h4>--{{diagnosis.active_therapy}}--</h4>\n    <h4>-{{this.sharedBin.a1c}}-</h4>\n    <!-- <router-outlet></router-outlet> -->\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dual/dual.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dual/dual.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':active === true}\" \n    class=\"therapy_container\">\n\n    <header (click)=\"OnClick()\">\n        <span>Dual Therapy</span>\n        <span class=\"hamburger\">&#9776;</span>\n    </header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n        \n        <app-lifestyle></app-lifestyle>\n        <app-metformin></app-metformin>\n        <h6>Additional Agent</h6>\n        <div class=\"division\">~~~~</div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lifestyle/lifestyle.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lifestyle/lifestyle.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':active === true}\" \n    class=\"info_container\">\n    \n    <h6 (click)=\"OnClick()\">\n        <span>Lifestyle Managment</span>\n        <span class=\"hamburger\">&#9776;</span>\n    </h6>\n\n    <div *ngIf=\"open === true\" class=\"infoback\">\n        \n        <ul>\n            <li>Diabetes self-management education (DSME)</li>\n            <li>Diabetes self-management support (DSMS)</li>\n            <li>Nuitrition therapy</li>\n            <li>Physical activity</li>\n            <li>Smoking cessation counseling</li>\n            <li>Psychosocial care</li>\n        </ul>\n\n        <div class=\"division\">~~~~</div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/metformin/metformin.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/metformin/metformin.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':active === true}\" \n    class=\"info_container\">\n    \n    <h6 (click)=\"OnClick()\">\n        <span>Metaformin</span>\n        <span class=\"hamburger\">&#9776;</span>\n    </h6>\n\n    <div *ngIf=\"open === true\" class=\"infoback\">\n        \n        <!--Dosage-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Metaformin Dosage:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.metaformin_dosage\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>mg</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.metaformin_dosage\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n\n        <table>\n            <tr>\n                <th>Efficacy</th>\n                <td>High</td>\n            </tr>\n            <tr>\n                <th>Hypoglycemia</th>\n                <td>No</td>\n            </tr>\n            <tr>\n                <th>Weight Change</th>\n                <td>Neutral or Modest Loss</td>\n            </tr>\n            <tr>\n                <th>Cost</th>\n                <td>Low</td>\n            </tr>\n            <tr>\n                <th>Oral/SQ</th>\n                <td>Oral</td>\n            </tr>\n        </table>\n\n        <table>\n            <tr>\n                <th>CV Effects</th>\n                <td>\n                    <table>\n                        <tr>\n                            <th>ASCVD</th>\n                            <td>Potential Benefit</td>\n                        </tr>\n                        <tr>\n                            <th>CHF</th>\n                            <td>Neutral</td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n            <tr>\n                <th>Renal Effects</th>\n                <td>\n                    <table>\n                        <tr>\n                            <th>Progression of DKD</th>\n                            <td>Neutral</td>\n                        </tr>\n                        <tr>\n                            <th>Dosing</th>\n                            <td>Contraindicated with eGRF &lt30</td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n            <tr></tr>\n        </table>\n\n\n        <div class=\"division\">~~~~</div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mono/mono.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mono/mono.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':active === true}\" \n    class=\"therapy_container\">\n    <header (click)=\"OnClick()\">\n        <span>Mono Therapy</span>\n        <span class=\"hamburger\">&#9776;</span>\n    </header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n\n        <app-lifestyle [active] = \"active\"></app-lifestyle>\n        <app-metformin [active] = \"active\"></app-metformin> \n        <div class=\"division\">~~~~</div>\n        \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"patient_container\">\n\n    <header (click)=\"OnClick()\">\n        <span>Patient Info</span>\n        <span class=\"hamburger\">&#9776;</span>\n    </header>\n\n    <!----------------------------->\n\n    <div *ngIf=\"open == false\" class=\"cardback\" (click)=\"OnClick()\">\n        <h6>A1C: {{this.sharedBin.a1c}}%</h6>\n        <h6>Newly Diagnosed: \n            <span *ngIf=\"this.sharedBin.newly_diagnosed === true\">Yes</span>\n            <span *ngIf=\"this.sharedBin.newly_diagnosed === false\">No</span>\n        </h6>\n        <h6>Has Symptoms: \n            <span *ngIf=\"this.sharedBin.have_symptoms === true\">Yes</span>\n            <span *ngIf=\"this.sharedBin.have_symptoms === false\">No</span>\n        </h6>\n        <h6>Weight: {{this.sharedBin.weight_kg}} kg, {{this.sharedBin.weight_lb}} lb</h6>\n        <h6>Current Insulin: {{this.sharedBin.insulin_current}}</h6>\n        <h6>Cholesterol: {{this.sharedBin.cholesterol}}</h6>\n        <h6>Past Heart Attack: \n            <span *ngIf=\"this.sharedBin.heart_attack === true\">Yes</span>\n            <span *ngIf=\"this.sharedBin.heart_attack === false\">No</span>\n        </h6>\n        <h6>EF: {{this.sharedBin.EF}}</h6>\n        <h6>Microalbuminuria: {{this.sharedBin.micro_album}}</h6>\n        <h6>Creatinine: {{this.sharedBin.creatinine}}</h6>\n        <h6>Blood Pressure: {{this.sharedBin.blood_pressure_syst}}/{{this.sharedBin.blood_pressure_dias}}</h6>\n        <h6>eGFR: {{this.sharedBin.eGFR}}</h6>\n    </div>\n\n    <!----------------------------->\n\n    <div *ngIf=\"open == true\" class=\"cardback\">\n\n        <!--A1C-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>A1C:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.a1c\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>%</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.a1c\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--New Patient-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>New Patient:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <label class=\"switch_container\">\n                    <input type=\"checkbox\" [(ngModel)]=\"this.sharedBin.newly_diagnosed\" class=\"form-control\">\n                    <span class=\"switch round\"></span>\n                </label>\n            </div>\n            <div class=\"patient_col_c\"></div>\n            <div class=\"patient_col_d\">\n                <span *ngIf=\"this.sharedBin.newly_diagnosed === true\">Yes</span>\n                <span *ngIf=\"this.sharedBin.newly_diagnosed === false\">No</span>\n            </div>\n        </div>\n\n        <!--Symptoms-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Showing Symptoms:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <label class=\"switch_container\">\n                    <input type=\"checkbox\" [(ngModel)]=\"this.sharedBin.have_symptoms\" class=\"form-control\">\n                    <span class=\"switch round\"></span>\n                </label>\n            </div>\n            <div class=\"patient_col_c\"></div>\n            <div class=\"patient_col_d\">\n                <span *ngIf=\"this.sharedBin.have_symptoms === true\">Yes</span>\n                <span *ngIf=\"this.sharedBin.have_symptoms === false\">No</span>\n            </div>\n        </div>\n\n        <!--Weight-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Weight:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.weight_kg\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>kg</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.weight_kg\" \n                    type=\"range\" min=\"2\" max=\"182\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\"></div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.weight_lb\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>lb</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.weight_lb\" \n                    type=\"range\" min=\"5\" max=\"400\" value=\"50\" class=\"slider\" step=\"1\">\n                </div>\n            </div>\n        </div>\n            \n        <!--Insulin-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Current Insulin:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.insulin_current\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>??</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.insulin_current\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--Cholesterol-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Cholesterol:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.cholesterol\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>mg/mL</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.cholesterol\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--Heart Attack-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Past Heart Attack:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <label class=\"switch_container\">\n                    <input type=\"checkbox\" [(ngModel)]=\"this.sharedBin.heart_attack\" class=\"form-control\">\n                    <span class=\"switch round\"></span>\n                </label>\n            </div>\n            <div class=\"patient_col_c\"></div>\n            <div class=\"patient_col_d\">\n                <span *ngIf=\"this.sharedBin.heart_attack === true\">Yes</span>\n                <span *ngIf=\"this.sharedBin.heart_attack === false\">No</span>\n            </div>\n        </div>\n\n        <!--EF-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>EF:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.EF\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>??</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.EF\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--Micro Album-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Microalbuminuria:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.micro_album\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>mg/g</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.micro_album\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--Creatinine-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Creatinine:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.creatinine\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>mg/mL</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.creatinine\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n        <!--Blood Pressure-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>Blood Pressure:</p>\n            </div>\n            <div class=\"patient_col_b\"></div>\n            <div class=\"patient_col_c\"></div>\n            <div class=\"patient_col_d\">{{this.sharedBin.blood_pressure_syst}}/{{this.sharedBin.blood_pressure_dias}}</div>\n        </div>\n\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p class=\"sub_offset\">-Systolic:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.blood_pressure_syst\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>mmHg</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.blood_pressure_syst\" \n                    type=\"range\" min=\"90\" max=\"250\" value=\"50\" class=\"slider\" step=\"10\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p class=\"sub_offset\">-Diastolic:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.blood_pressure_dias\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>mmHg</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.blood_pressure_dias\" \n                    type=\"range\" min=\"60\" max=\"140\" value=\"50\" class=\"slider\" step=\"10\">\n                </div>\n            </div>\n        </div>\n\n        <!--eGFR-->\n        <div class=\"patient_row\">\n            <div class=\"patient_col_a\">\n                <p>eGFR:</p>\n            </div>\n            <div class=\"patient_col_b\">\n                <input [(ngModel)]=\"this.sharedBin.eGFR\" class=\"form-control\" placeholder=\"---\">\n            </div>\n            <div class=\"patient_col_c\">\n                <p>mL/min</p>\n            </div>\n            <div class=\"patient_col_d\">\n                <div class=\"slider_container\">\n                    <input [(ngModel)]=\"this.sharedBin.eGFR\" \n                    type=\"range\" min=\"5\" max=\"12\" value=\"50\" class=\"slider\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n\n    \n    </div>\n\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/triple/triple.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/triple/triple.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'active':active === true}\" \n    class=\"therapy_container\">\n\n    <header (click)=\"OnClick()\">\n        <span>Triple Therapy</span>\n        <span class=\"hamburger\">&#9776;</span>\n    </header>\n\n    <div *ngIf=\"open === true\" class=\"cardback\">\n\n        <app-lifestyle></app-lifestyle>\n        <app-metformin></app-metformin>\n        <h6>First Agent</h6>\n        <h6>Second Agent</h6>\n        <div class=\"division\">~~~~</div>\n\n    </div>\n</div>\n\n");

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
    constructor(sharedBin, cd) {
        this.sharedBin = sharedBin;
        this.cd = cd;
    }
    //this evaluates the changes again, for this parent component, because some values are changed herewithin(removes an error)
    ngAfterViewInit() {
        this.cd.detectChanges();
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__["SharedBinService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _doctors_office_doctors_office_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./doctors-office/doctors-office.component */ "./src/app/doctors-office/doctors-office.component.ts");
















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
            _doctors_office_doctors_office_component__WEBPACK_IMPORTED_MODULE_15__["DoctorsOfficeComponent"],
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
        if (this.diagnosis.active_therapy == "combo") {
            this.active = true;
        }
        else {
            this.active = false;
        }
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ComboComponent.prototype, "diagnosis", void 0);
ComboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-combo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./combo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/combo/combo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./combo.component.css */ "./src/app/combo/combo.component.css")).default]
    })
], ComboComponent);



/***/ }),

/***/ "./src/app/doctors-office/doctors-office.component.css":
/*!*************************************************************!*\
  !*** ./src/app/doctors-office/doctors-office.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3RvcnMtb2ZmaWNlL2RvY3RvcnMtb2ZmaWNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/doctors-office/doctors-office.component.ts":
/*!************************************************************!*\
  !*** ./src/app/doctors-office/doctors-office.component.ts ***!
  \************************************************************/
/*! exports provided: DoctorsOfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsOfficeComponent", function() { return DoctorsOfficeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-bin.service */ "./src/app/shared-bin.service.ts");
// All Diagnosis Logic //
// Diagnosis is sent down to the components from here //



let DoctorsOfficeComponent = class DoctorsOfficeComponent {
    constructor(sharedBin) {
        this.sharedBin = sharedBin;
        this.diagnosis = {
            active_therapy: ""
        };
    }
    ngOnInit() {
        this.main_Diagnosis_Logic();
    }
    ngOnChanges(changes) {
        this.weight_conversion(changes);
        this.main_Diagnosis_Logic();
    }
    main_Diagnosis_Logic() {
        console.log("shared" + this.sharedBin.weight_kg);
        console.log("direct" + this.weight_kg);
        if (this.newly_diagnosed == true && this.a1c) {
            this.diagnosis = { active_therapy: "mono" };
        }
        if (this.a1c > 7 && this.a1c < 9) {
            this.diagnosis = { active_therapy: "mono" };
        }
        else if (this.a1c >= 9 && this.a1c < 10) {
            this.diagnosis = { active_therapy: "dual" };
        }
        else if (this.a1c >= 10) {
            this.diagnosis = { active_therapy: "triple" };
        }
        else {
            this.diagnosis = { active_therapy: "none" };
        }
    }
    //2.2046226218 lb in 1 kilogram
    weight_conversion(changes) {
        // if kg was changed, change lb
        if (changes.weight_kg) {
            var converted_to_lb = Math.round(2.2046226218 * changes.weight_kg.currentValue);
            //checks if needed first.  Infinite loop would happen without
            if (this.sharedBin.weight_lb != converted_to_lb) {
                this.sharedBin.weight_lb = converted_to_lb;
            }
        }
        // if lb was changed, change kg
        if (changes.weight_lb) {
            var converted_to_kg = Math.round(changes.weight_lb.currentValue / 2.2046226218);
            //checks if needed first.  Infinite loop would happen without
            if (this.sharedBin.weight_kg != converted_to_kg) {
                this.sharedBin.weight_kg = converted_to_kg;
            }
        }
    }
};
DoctorsOfficeComponent.ctorParameters = () => [
    { type: _shared_bin_service__WEBPACK_IMPORTED_MODULE_2__["SharedBinService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "newly_diagnosed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "have_symptoms", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "a1c", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "weight_lb", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "weight_kg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "insulin_current", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "cholesterol", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "heart_attack", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "EF", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "micro_album", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "creatinine", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "blood_pressure_syst", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "blood_pressure_dias", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoctorsOfficeComponent.prototype, "eGFR", void 0);
DoctorsOfficeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctors-office',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctors-office.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctors-office/doctors-office.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctors-office.component.css */ "./src/app/doctors-office/doctors-office.component.css")).default]
    })
], DoctorsOfficeComponent);



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
        if (this.diagnosis.active_therapy == "dual") {
            this.active = true;
        }
        else {
            this.active = false;
        }
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DualComponent.prototype, "diagnosis", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("/* -----------this includes patient.component.css for all of the form css-------------*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0Zm9ybWluL21ldGZvcm1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1RiIsImZpbGUiOiJzcmMvYXBwL21ldGZvcm1pbi9tZXRmb3JtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLS0tdGhpcyBpbmNsdWRlcyBwYXRpZW50LmNvbXBvbmVudC5jc3MgZm9yIGFsbCBvZiB0aGUgZm9ybSBjc3MtLS0tLS0tLS0tLS0tKi9cclxuIl19 */");

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
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../patient/patient.component.css */ "./src/app/patient/patient.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./metformin.component.css */ "./src/app/metformin/metformin.component.css")).default]
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
        this.active = false;
        this.open = false;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.diagnosis.active_therapy == "mono") {
            this.active = true;
        }
        else {
            this.active = false;
        }
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MonoComponent.prototype, "diagnosis", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.patient_row {\r\n    width: 100%;\r\n    height: 36px;\r\n}\r\n\r\n    .patient_col_a {\r\n        width: 40%;\r\n        height: 36px;\r\n        padding-top: 8.5px;\r\n        display: inline-block;\r\n        text-align: center;\r\n        /* outline: 1px dashed purple; */\r\n    }\r\n\r\n    .patient_col_a p {\r\n            margin-bottom: 0px;\r\n            font-size: 12px;\r\n            overflow: hidden;\r\n            white-space: nowrap;\r\n        }\r\n\r\n    .sub_offset {\r\n                text-align: right;\r\n            }\r\n\r\n    .patient_col_b {\r\n        width: 20%;\r\n        height: 36px;\r\n        padding: 2.5px 2px 2.5px 2px;\r\n        display: inline-block;\r\n        /* outline: 1px dashed orangered; */\r\n    }\r\n\r\n    input {\r\n            margin: 0px auto;\r\n            display: block;\r\n            text-align: center;\r\n            width: 100%;\r\n            height: 30px;\r\n            font-size: 12px;\r\n        }\r\n\r\n    .patient_col_c {\r\n        width:10%;\r\n        height: 36px;\r\n        padding-top: 12px;\r\n        display: inline-block;\r\n        text-align: center;\r\n    }\r\n\r\n    .patient_col_c p{\r\n        font-size: 8px;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .patient_col_d {\r\n        width: 30%;\r\n        height: 36px;\r\n        padding: 6.5px 5px;\r\n        display: inline-block;\r\n        text-align: left;\r\n        /* outline: 1px dashed red; */\r\n    }\r\n\r\n    .patient_col_d span {\r\n            margin-top: 13px;\r\n            margin-bottom: 0px;\r\n        }\r\n\r\n    /* ----------SWITCH-------------*/\r\n\r\n    .switch_container {\r\n    position: relative;\r\n    top: 1px;\r\n    margin: 2.5px 10px;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 24px;\r\n  }\r\n\r\n    /* Hide default HTML checkbox */\r\n\r\n    .switch_container input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n    /* The switch */\r\n\r\n    .switch {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: gray;\r\n    transition: .4s;\r\n  }\r\n\r\n    .switch:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 24px;\r\n    width: 24px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n\r\n    input:checked + .switch {\r\n    background-color: orange;\r\n  }\r\n\r\n    input:focus + .switch {\r\n    box-shadow: 0 0 1px orange;\r\n  }\r\n\r\n    input:checked + .switch:before {\r\n    transform: translateX(16px);\r\n  }\r\n\r\n    /* Rounded sliders */\r\n\r\n    .switch.round {\r\n    border-radius: 24px;\r\n  }\r\n\r\n    .switch.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n    /* ----------SLIDER-------------*/\r\n\r\n    .slider_container {\r\n    display: inline-block;\r\n    padding: 3.75px 0px 0px 0px;\r\n    width: 100%;\r\n}\r\n\r\n    .slider {\r\n    -webkit-appearance: none;  /* Override default CSS styles */\r\n    -moz-appearance: none;\r\n         appearance: none;\r\n    width: 100%; /* Full-width */\r\n    height: 15px; /* Specified height */\r\n    background: #ffffff; /* Grey background */\r\n    outline: none; /* Remove outline */\r\n    border-radius: 2px;\r\n    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */ /* 0.2 seconds transition on hover */\r\n    transition: opacity .2s;\r\n}\r\n\r\n    .slider:hover {\r\n    opacity: 1; /* Fully shown on mouse-over */\r\n}\r\n\r\n    /* The slider handle */\r\n\r\n    .slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none; /* Override default look */\r\n    appearance: none;\r\n    width: 13px; /* Set a specific slider handle width */\r\n    height: 25px; /* Slider handle height */\r\n    background: gray; /* Green background */\r\n    cursor: pointer; /* Cursor on hover */\r\n    border-radius: 10px;\r\n}\r\n\r\n    .slider::-moz-range-thumb {\r\n    width: 25px; /* Set a specific slider handle width */\r\n    height: 25px; /* Slider handle height */\r\n    background: #4CAF50; /* Green background */\r\n    cursor: pointer; /* Cursor on hover */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0lBRUk7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGdDQUFnQztJQUNwQzs7SUFFSTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtRQUN2Qjs7SUFFSTtnQkFDSSxpQkFBaUI7WUFDckI7O0lBRVI7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsbUNBQW1DO0lBQ3ZDOztJQUVJO1lBQ0ksZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFlBQVk7WUFDWixlQUFlO1FBQ25COztJQUVKO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLDZCQUE2QjtJQUNqQzs7SUFFSTtZQUNJLGdCQUFnQjtZQUNoQixrQkFBa0I7UUFDdEI7O0lBR1IsaUNBQWlDOztJQUVqQztJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztJQUVBLCtCQUErQjs7SUFDL0I7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7RUFDWDs7SUFFQSxlQUFlOztJQUNmO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBRXRCLGVBQWU7RUFDakI7O0lBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFFdkIsZUFBZTtFQUNqQjs7SUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7SUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7SUFFQTtJQUdFLDJCQUEyQjtFQUM3Qjs7SUFFQSxvQkFBb0I7O0lBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCOztJQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztJQUtGLGlDQUFpQzs7SUFFakM7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7SUFFQTtJQUNJLHdCQUF3QixHQUFHLGdDQUFnQztJQUMzRCxxQkFBZ0I7U0FBaEIsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxxQkFBcUI7SUFDbkMsbUJBQW1CLEVBQUUsb0JBQW9CO0lBQ3pDLGFBQWEsRUFBRSxtQkFBbUI7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVksRUFBRSx1REFBdUQsRUFDNUMsb0NBQW9DO0lBQzdELHVCQUF1QjtBQUMzQjs7SUFFQTtJQUNJLFVBQVUsRUFBRSw4QkFBOEI7QUFDOUM7O0lBRUEsc0JBQXNCOztJQUN0QjtJQUNJLHdCQUF3QixFQUFFLDBCQUEwQjtJQUNwRCxnQkFBZ0I7SUFDaEIsV0FBVyxFQUFFLHVDQUF1QztJQUNwRCxZQUFZLEVBQUUseUJBQXlCO0lBQ3ZDLGdCQUFnQixFQUFFLHFCQUFxQjtJQUN2QyxlQUFlLEVBQUUsb0JBQW9CO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7SUFFQTtJQUNJLFdBQVcsRUFBRSx1Q0FBdUM7SUFDcEQsWUFBWSxFQUFFLHlCQUF5QjtJQUN2QyxtQkFBbUIsRUFBRSxxQkFBcUI7SUFDMUMsZUFBZSxFQUFFLG9CQUFvQjtBQUN6QyIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wYXRpZW50X3JvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuICAgIC5wYXRpZW50X2NvbF9hIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOC41cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvKiBvdXRsaW5lOiAxcHggZGFzaGVkIHB1cnBsZTsgKi9cclxuICAgIH1cclxuXHJcbiAgICAgICAgLnBhdGllbnRfY29sX2EgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdWJfb2Zmc2V0IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgLnBhdGllbnRfY29sX2Ige1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIuNXB4IDJweCAyLjVweCAycHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIC8qIG91dGxpbmU6IDFweCBkYXNoZWQgb3JhbmdlcmVkOyAqL1xyXG4gICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgLnBhdGllbnRfY29sX2Mge1xyXG4gICAgICAgIHdpZHRoOjEwJTtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGF0aWVudF9jb2xfYyBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLnBhdGllbnRfY29sX2Qge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDYuNXB4IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAvKiBvdXRsaW5lOiAxcHggZGFzaGVkIHJlZDsgKi9cclxuICAgIH1cclxuXHJcbiAgICAgICAgLnBhdGllbnRfY29sX2Qgc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLVNXSVRDSC0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnN3aXRjaF9jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBtYXJnaW46IDIuNXB4IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cclxuICAuc3dpdGNoX2NvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBzd2l0Y2ggKi9cclxuICAuc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgLnN3aXRjaDpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnN3aXRjaCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmZvY3VzICsgLnN3aXRjaCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IG9yYW5nZTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zd2l0Y2g6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcclxuICB9XHJcbiAgXHJcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXHJcbiAgLnN3aXRjaC5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAuc3dpdGNoLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLVNMSURFUi0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnNsaWRlcl9jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMy43NXB4IDBweCAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgLyogT3ZlcnJpZGUgZGVmYXVsdCBDU1Mgc3R5bGVzICovXHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwtd2lkdGggKi9cclxuICAgIGhlaWdodDogMTVweDsgLyogU3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjsgLyogR3JleSBiYWNrZ3JvdW5kICovXHJcbiAgICBvdXRsaW5lOiBub25lOyAvKiBSZW1vdmUgb3V0bGluZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgb3BhY2l0eTogMC43OyAvKiBTZXQgdHJhbnNwYXJlbmN5IChmb3IgbW91c2Utb3ZlciBlZmZlY3RzIG9uIGhvdmVyKSAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7IC8qIDAuMiBzZWNvbmRzIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xyXG59XHJcblxyXG4uc2xpZGVyOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHNob3duIG9uIG1vdXNlLW92ZXIgKi9cclxufVxyXG4gIFxyXG4vKiBUaGUgc2xpZGVyIGhhbmRsZSAqL1xyXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIE92ZXJyaWRlIGRlZmF1bHQgbG9vayAqL1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxM3B4OyAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDI1cHg7IC8qIFNsaWRlciBoYW5kbGUgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5OyAvKiBHcmVlbiBiYWNrZ3JvdW5kICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4gIFxyXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgIHdpZHRoOiAyNXB4OyAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDI1cHg7IC8qIFNsaWRlciBoYW5kbGUgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwOyAvKiBHcmVlbiBiYWNrZ3JvdW5kICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xyXG59Il19 */");

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
    constructor() {
        this.newly_diagnosed = true;
        this.have_symptoms = false;
        this.a1c = 7.0;
        this.weight_lb = 0;
        this.weight_kg = 0;
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
        if (this.diagnosis.active_therapy == "triple") {
            this.active = true;
        }
        else {
            this.active = false;
        }
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TripleComponent.prototype, "diagnosis", void 0);
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