(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eitan/Downloads/job_interview/ZoomInfo/attempt_2_august_2021/zoominfoAssignment/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'zoominfoAssignment';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "jdvj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "jdvj":
/*!***************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 16, vars: 0, consts: [["action", "/action_page.php"], [1, "imgcontainer"], ["src", "https://wewantbgu.co.il/wp-content/uploads/2021/05/Zoominfo-1.png", "alt", "Avatar", 1, "avatar"], [1, "container"], ["type", "text", "placeholder", "Enter Username", "name", "uname", "required", ""], ["type", "password", "placeholder", "Enter Password", "name", "psw", "required", ""], ["type", "submit"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["form[_ngcontent-%COMP%] {\n    border: 3px solid #f1f1f1;\n}\n      \n  \n      \n  input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n      \n  \n      \n  button[_ngcontent-%COMP%] {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n      \n  \n      \n  button[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n}\n      \n  \n      \n  .cancelbtn[_ngcontent-%COMP%] {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n      \n  \n      \n  .imgcontainer[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n      \n  \n      \n  img.avatar[_ngcontent-%COMP%] {\n    width: 40%;\n    border-radius: 50%;\n}\n      \n  \n      \n  .container[_ngcontent-%COMP%] {\n    padding: 16px;\n}\n      \n  \n      \n  span.psw[_ngcontent-%COMP%] {\n    float: right;\n    padding-top: 16px;\n}\n      \n  \n      \n  @media screen and (max-width: 300px) {\n    span.psw[_ngcontent-%COMP%] {\n        display: block;\n        float: none;\n    }\n    .cancelbtn[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRSx5QkFBeUI7O0VBRXpCO0lBQ0UseUJBQXlCO0FBQzdCOztFQUNBLDJCQUEyQjs7RUFFM0I7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7O0VBQ0EsOEJBQThCOztFQUU5QjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7RUFDQSxxQ0FBcUM7O0VBRXJDO0lBQ0ksWUFBWTtBQUNoQjs7RUFDQSx3Q0FBd0M7O0VBRXhDO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0VBQ0EsZ0RBQWdEOztFQUVoRDtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0VBQ0EsdUJBQXVCOztFQUV2QjtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0VBQ0EsK0JBQStCOztFQUUvQjtJQUNJLGFBQWE7QUFDakI7O0VBQ0EsK0JBQStCOztFQUUvQjtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0VBQ0EseURBQXlEOztFQUV6RDtJQUNJO1FBQ0ksY0FBYztRQUNkLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKnNldCBib3JkZXIgdG8gdGhlIGZvcm0qL1xuICAgICAgXG4gIGZvcm0ge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG59XG4vKmFzc2lnbiBmdWxsIHdpZHRoIGlucHV0cyovXG4gIFxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLypzZXQgYSBzdHlsZSBmb3IgdGhlIGJ1dHRvbnMqL1xuICBcbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi8qIHNldCBhIGhvdmVyIGVmZmVjdCBmb3IgdGhlIGJ1dHRvbiovXG4gIFxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG4vKnNldCBleHRyYSBzdHlsZSBmb3IgdGhlIGNhbmNlbCBidXR0b24qL1xuICBcbi5jYW5jZWxidG4ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuLypjZW50cmUgdGhlIGRpc3BsYXkgaW1hZ2UgaW5zaWRlIHRoZSBjb250YWluZXIqL1xuICBcbi5pbWdjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XG59XG4vKnNldCBpbWFnZSBwcm9wZXJ0aWVzKi9cbiAgXG5pbWcuYXZhdGFyIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi8qc2V0IHBhZGRpbmcgdG8gdGhlIGNvbnRhaW5lciovXG4gIFxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cbi8qc2V0IHRoZSBmb3Jnb3QgcGFzc3dvcmQgdGV4dCovXG4gIFxuc3Bhbi5wc3cge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi8qc2V0IHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBzbWFsbCBzY3JlZW5zKi9cbiAgXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIHNwYW4ucHN3IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAuY2FuY2VsYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "jdvj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map