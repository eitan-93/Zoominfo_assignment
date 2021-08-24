(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eitan/Downloads/job_interview/ZoomInfo/attempt_2_august_2021/client/src/main.ts */"zUnb");


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

/***/ "RgSg":
/*!*********************************************************************!*\
  !*** ./src/app/components/contacts-page/contacts-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageComponent", function() { return ContactsPageComponent; });
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! igniteui-angular */ "YIDO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ContactsPageComponent_igx_suffix_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "igx-suffix", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsPageComponent_igx_suffix_8_Template_igx_suffix_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.searchContact = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactsPageComponent_igx_list_item_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "igx-list-item", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "igx-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "igx-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsPageComponent_igx_list_item_13_Template_igx_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const contact_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.toggleFavorite(contact_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", contact_r5.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contact_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contact_r5.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", contact_r5.isFavorite ? "orange" : "lightgray");
} }
class ContactsPageComponent {
    constructor() {
        this.contacts = [
            {
                isFavorite: false,
                name: 'Terrance Orta',
                phone: '770-504-2217',
                photo: 'https://www.infragistics.com/angular-demos/assets/images/men/27.jpg'
            },
            {
                isFavorite: true,
                name: 'Richard Mahoney',
                phone: '423-676-2869',
                photo: 'https://www.infragistics.com/angular-demos/assets/images/men/1.jpg'
            },
            {
                isFavorite: false,
                name: 'Donna Price',
                phone: '859-496-2817',
                photo: 'https://www.infragistics.com/angular-demos/assets/images/women/50.jpg'
            },
            {
                isFavorite: false,
                name: 'Lisa Landers',
                phone: '901-747-3428',
                photo: 'https://www.infragistics.com/angular-demos/assets/images/women/3.jpg'
            },
            {
                isFavorite: true,
                name: 'Dorothy H. Spencer',
                phone: '573-394-9254',
                photo: 'https://www.infragistics.com/angular-demos/assets/images/women/67.jpg'
            }
        ];
        this.density = 'comfortable';
    }
    ngOnInit() {
        this.displayDensities = [
            { label: 'comfortable', selected: this.density === 'comfortable', togglable: true },
            { label: 'cosy', selected: this.density === 'cosy', togglable: true },
            { label: 'compact', selected: this.density === 'compact', togglable: true }
        ];
    }
    selectDensity(event) {
        this.density = this.displayDensities[event.index].label;
    }
    toggleFavorite(contact) {
        contact.isFavorite = !contact.isFavorite;
    }
    get filterContacts() {
        const fo = new igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxFilterOptions"]();
        fo.key = 'name';
        fo.inputValue = this.searchContact;
        return fo;
    }
}
ContactsPageComponent.ɵfac = function ContactsPageComponent_Factory(t) { return new (t || ContactsPageComponent)(); };
ContactsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactsPageComponent, selectors: [["app-contacts-page"]], decls: 15, vars: 8, consts: [[1, "density-chooser"], [3, "values", "selected"], ["type", "search", 1, "search"], ["igxInput", "", "placeholder", "Search Contacts", 3, "ngModel", "ngModelChange"], ["search", ""], [3, "click", 4, "ngIf"], [1, "list-sample"], [3, "displayDensity"], ["isHeader", "true"], ["igxRipple", "", "igxRippleTarget", ".igx-list__item-content", 4, "ngFor", "ngForOf"], [3, "click"], ["igxRipple", "", "igxRippleTarget", ".igx-list__item-content"], ["item", ""], ["igxListThumbnail", "", "roundShape", "true", 3, "src"], ["igxListLineTitle", ""], ["igxListLineSubTitle", ""], ["igxListAction", "", 3, "color", "click"]], template: function ContactsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "igx-buttongroup", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function ContactsPageComponent_Template_igx_buttongroup_selected_1_listener($event) { return ctx.selectDensity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "igx-input-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "igx-prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "igx-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactsPageComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchContact = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ContactsPageComponent_igx_suffix_8_Template, 3, 0, "igx-suffix", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "igx-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "igx-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ContactsPageComponent_igx_list_item_13_Template, 9, 4, "igx-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "igxFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("values", ctx.displayDensities);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.value.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayDensity", ctx.density);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 5, ctx.contacts, ctx.filterContacts));
    } }, directives: [igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxButtonGroupComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxInputGroupComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxPrefixDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxListComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxSuffixDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxRippleDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxAvatarComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxListThumbnailDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxListLineTitleDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxListLineSubTitleDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxListActionDirective"]], pipes: [igniteui_angular__WEBPACK_IMPORTED_MODULE_0__["IgxFilterPipe"]], styles: ["[_nghost-%COMP%] {\n    display: block;\n    padding: 16px;\n}\n\n.list-sample[_ngcontent-%COMP%] {\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n        0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n        0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n\nigx-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.listItemLeftPanningStyle[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    background-color:orange;\n    color: white;\n    width: 100%;\n    padding-right: 10px;\n    align-items: center;\n}\n\n.listItemRightPanningStyle[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    background-color:limegreen;\n    color: white;\n    width: 100%;\n    padding-left: 10px;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7OzRDQUV3QztBQUM1Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiY29udGFjdHMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5saXN0LXNhbXBsZSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuaWd4LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saXN0SXRlbUxlZnRQYW5uaW5nU3R5bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6b3JhbmdlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5saXN0SXRlbVJpZ2h0UGFubmluZ1N0eWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaW1lZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });


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
        this.title = 'client';
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
/* harmony import */ var _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contacts-page/contacts-page.component */ "RgSg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! igniteui-angular */ "YIDO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxAvatarModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxFilterModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxIconModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxListModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxInputGroupModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxButtonGroupModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxRippleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
        _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactsPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxAvatarModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxFilterModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxIconModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxListModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxInputGroupModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxButtonGroupModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxRippleModule"]] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class LoginPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 16, vars: 0, consts: [["action", "/action_page.php"], [1, "imgcontainer"], ["src", "https://wewantbgu.co.il/wp-content/uploads/2021/05/Zoominfo-1.png", "alt", "Avatar", 1, "avatar"], [1, "container"], ["type", "text", "placeholder", "Enter Username", "name", "uname"], ["type", "password", "placeholder", "Enter Password", "name", "psw"], ["type", "submit", "herf", "contacts"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["form[_ngcontent-%COMP%] {\n    border: 3px solid #f1f1f1;\n}\n      \n  \n      \n  input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n      \n  \n      \n  button[_ngcontent-%COMP%] {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n      \n  \n      \n  button[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n}\n      \n  \n      \n  .cancelbtn[_ngcontent-%COMP%] {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n      \n  \n      \n  .imgcontainer[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n      \n  \n      \n  img.avatar[_ngcontent-%COMP%] {\n    width: 40%;\n    border-radius: 50%;\n}\n      \n  \n      \n  .container[_ngcontent-%COMP%] {\n    padding: 16px;\n}\n      \n  \n      \n  span.psw[_ngcontent-%COMP%] {\n    float: right;\n    padding-top: 16px;\n}\n      \n  \n      \n  @media screen and (max-width: 300px) {\n    span.psw[_ngcontent-%COMP%] {\n        display: block;\n        float: none;\n    }\n    .cancelbtn[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRSx5QkFBeUI7O0VBRXpCO0lBQ0UseUJBQXlCO0FBQzdCOztFQUNBLDJCQUEyQjs7RUFFM0I7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7O0VBQ0EsOEJBQThCOztFQUU5QjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7RUFDQSxxQ0FBcUM7O0VBRXJDO0lBQ0ksWUFBWTtBQUNoQjs7RUFDQSx3Q0FBd0M7O0VBRXhDO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0VBQ0EsZ0RBQWdEOztFQUVoRDtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0VBQ0EsdUJBQXVCOztFQUV2QjtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0VBQ0EsK0JBQStCOztFQUUvQjtJQUNJLGFBQWE7QUFDakI7O0VBQ0EsK0JBQStCOztFQUUvQjtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0VBQ0EseURBQXlEOztFQUV6RDtJQUNJO1FBQ0ksY0FBYztRQUNkLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKnNldCBib3JkZXIgdG8gdGhlIGZvcm0qL1xuICAgICAgXG4gIGZvcm0ge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG59XG4vKmFzc2lnbiBmdWxsIHdpZHRoIGlucHV0cyovXG4gIFxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLypzZXQgYSBzdHlsZSBmb3IgdGhlIGJ1dHRvbnMqL1xuICBcbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi8qIHNldCBhIGhvdmVyIGVmZmVjdCBmb3IgdGhlIGJ1dHRvbiovXG4gIFxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG4vKnNldCBleHRyYSBzdHlsZSBmb3IgdGhlIGNhbmNlbCBidXR0b24qL1xuICBcbi5jYW5jZWxidG4ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuLypjZW50cmUgdGhlIGRpc3BsYXkgaW1hZ2UgaW5zaWRlIHRoZSBjb250YWluZXIqL1xuICBcbi5pbWdjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XG59XG4vKnNldCBpbWFnZSBwcm9wZXJ0aWVzKi9cbiAgXG5pbWcuYXZhdGFyIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi8qc2V0IHBhZGRpbmcgdG8gdGhlIGNvbnRhaW5lciovXG4gIFxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cbi8qc2V0IHRoZSBmb3Jnb3QgcGFzc3dvcmQgdGV4dCovXG4gIFxuc3Bhbi5wc3cge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi8qc2V0IHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBzbWFsbCBzY3JlZW5zKi9cbiAgXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIHNwYW4ucHN3IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAuY2FuY2VsYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */"] });


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
/* harmony import */ var _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contacts-page/contacts-page.component */ "RgSg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"] },
    { path: 'contacts', component: _components_contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_2__["ContactsPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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