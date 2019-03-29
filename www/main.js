(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\n</app-header>\n<main>\n \n\n\n  <router-outlet>\n\n\n  </router-outlet>\n\n  <!-- <app-overlay> </app-overlay> -->\n</main>\n\n\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'apptest';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/navbar/navbar.component */ "./src/app/components/header/navbar/navbar.component.ts");
/* harmony import */ var _components_header_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/signup/signup.component */ "./src/app/components/header/signup/signup.component.ts");
/* harmony import */ var _components_header_user_form_container_user_form_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/user-form-container/user-form-container.component */ "./src/app/components/header/user-form-container/user-form-container.component.ts");
/* harmony import */ var _components_header_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/login/login.component */ "./src/app/components/header/login/login.component.ts");
/* harmony import */ var _components_header_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/header/header.component */ "./src/app/components/header/header/header.component.ts");
/* harmony import */ var _components_header_nav_mobile_nav_mobile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/header/nav-mobile/nav-mobile.component */ "./src/app/components/header/nav-mobile/nav-mobile.component.ts");
/* harmony import */ var _components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/overlay/overlay.component */ "./src/app/components/overlay/overlay.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _directives_compare_passwords_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/compare-passwords.directive */ "./src/app/directives/compare-passwords.directive.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_clients_clientspage_clientspage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/clients/clientspage/clientspage.component */ "./src/app/components/clients/clientspage/clientspage.component.ts");
/* harmony import */ var _components_chatpage_chatpage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/chatpage/chatpage.component */ "./src/app/components/chatpage/chatpage.component.ts");
/* harmony import */ var _modules_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/routing.module */ "./src/app/modules/routing.module.ts");
/* harmony import */ var _components_clients_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/clients/add-client/add-client.component */ "./src/app/components/clients/add-client/add-client.component.ts");
/* harmony import */ var _components_clients_client_details_clients_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/clients/client-details/clients-details.component */ "./src/app/components/clients/client-details/clients-details.component.ts");
/* harmony import */ var _components_clients_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/clients/client-form/client-form.component */ "./src/app/components/clients/client-form/client-form.component.ts");
/* harmony import */ var _components_clients_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/clients/edit-client/edit-client.component */ "./src/app/components/clients/edit-client/edit-client.component.ts");
/* harmony import */ var _components_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/back-btn/back-btn.component */ "./src/app/components/back-btn/back-btn.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _components_clients_remove_modal_remove_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/clients/remove-modal/remove-modal.component */ "./src/app/components/clients/remove-modal/remove-modal.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./connection.service */ "./src/app/connection.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_header_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _components_header_user_form_container_user_form_container_component__WEBPACK_IMPORTED_MODULE_14__["UserFormContainerComponent"],
                _components_header_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _components_header_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _components_header_nav_mobile_nav_mobile_component__WEBPACK_IMPORTED_MODULE_17__["NavMobileComponent"],
                _components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_18__["OverlayComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _directives_compare_passwords_directive__WEBPACK_IMPORTED_MODULE_20__["ComparePasswordsDirective"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_21__["HomepageComponent"],
                _components_clients_clientspage_clientspage_component__WEBPACK_IMPORTED_MODULE_22__["ClientspageComponent"],
                _components_chatpage_chatpage_component__WEBPACK_IMPORTED_MODULE_23__["ChatpageComponent"],
                _components_clients_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_25__["AddClientComponent"],
                _components_clients_client_details_clients_details_component__WEBPACK_IMPORTED_MODULE_26__["ClientDetailsComponent"],
                _components_clients_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_27__["ClientFormComponent"],
                _components_clients_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_28__["EditClientComponent"],
                _components_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_29__["BackBtnComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_30__["ModalComponent"],
                _components_clients_remove_modal_remove_modal_component__WEBPACK_IMPORTED_MODULE_31__["RemoveModalComponent"],
                _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_32__["AboutUsComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_33__["ContactusComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesModule"].forRoot(),
                _modules_routing_module__WEBPACK_IMPORTED_MODULE_24__["RoutingModule"]
            ],
            providers: [_connection_service__WEBPACK_IMPORTED_MODULE_34__["ConnectionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".separator-type, .title-type, .intro-type, .content-type .intro-type p {\n    position: relative;\n}\n.intro-type .container {\n    padding: 107px 0px 102px 0px !important;\n}\n#product-header-section, .intro-type .container {\n    padding: 68px 15px 72px !important;\n}\n@media (min-width: 1630px)\n.container {\n    width: 1630px;\n}\n.parallax {\n    background-attachment: inherit !important;\n}\n.parallax {\n    background-attachment: inherit !important;\n    background-repeat: repeat;\n    background-size: cover;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    width: 100%;\n    z-index: -10;\n}\n.company-heading h1 {\n    margin-bottom: 40px;\n    line-height: 80px;\n    color: #fff;\n    font-weight: 700 !important;\n    text-align: center;\n}\n.seo-header, .product-header, .intro-type .container h1.white, .company-heading h1 {\n    font-family: 'Raleway', sans-serif;\n    font-weight: 100 !important;\n    text-transform: capitalize;\n    font-size: 65px;\n    margin-bottom: 20px;\n}\n.company-sections h2, .careers-sections h2, .perks-section h2 {\n    font-weight: 800;\n    font-size: 50px;\n}\n.company-sections h2, .company-sections h3, .careers-sections h2, .perks-section h2 {\n    font-family: 'proxima-nova', sans-serif;\n}\n.company-sections h3 {\n    font-size: 25px;\n    font-weight: 700;\n    margin: 14px 0;\n    font-family: 'proxima-nova', sans-serif;\n    text-transform: capitalize;\n}\n.red-border {\n    width: 50%;\n    border-bottom: 1px solid #d2282e;\n    margin: 0 auto;\n    height: 16px;\n}\n.company-sections p {\n    margin-top: 20px;\n}\n.ct-u-size22 {\n    font-size: 22px;\n}\n.ct-u-fontWeight300 {\n    font-weight: 300;\n}\n.marginTop40 {\n    margin-top: 40px !important;\n}\n.ct-u-paddingBoth100 {\n    padding: 100px 15px;\n}\n.culture-section {\n    background: linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)), url(https://www.solodev.com/assets/culture.jpg) top no-repeat;\n    /* background-color: #095c87; */\n    /* color: #fff; */\n}\n.company-sections, .careers-sections, .left-headquarter-section-img, .right-headquarter-section-img {\n    text-align: center;\n}\n.ct-u-paddingBoth100 {\n    padding: 100px 15px;\n}\n.company-sections h2, .careers-sections h2, .perks-section h2 {\n    font-weight: 800;\n    font-size: 50px;\n}\n.company-sections h2, .company-sections h3, .careers-sections h2, .perks-section h2 {\n    font-family: 'proxima-nova', sans-serif;\n}\n.slick-slider {\n    margin-bottom: 0;\n}\n.slick-slider {\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n.slick-slider .slick-track, .slick-slider .slick-list {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n.slick-list {\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n}\n.slick-track {\n    position: relative;\n    top: 0;\n    left: 0;\n    display: block;\n}\n.slider .item {\n    overflow: hidden;\n}\n.slick-slide {\n    display: none;\n    float: left;\n    height: 100%;\n    min-height: 1px;\n}\n.logos {\n    margin-right: -5px;\n    margin-left: -5px;\n}\nul.logos li {\n    cursor: pointer;\n}\n.logos > li {\n    float: left;\n    width: 16.66666%;\n    padding: 5px;\n}\n.logos .logos-inner {\n    position: relative;\n}\n.slick-slide img {\n    display: inline-block;\n}\n.logo-image {\n    position: relative;\n    width: 100%;\n}\nul.logos li {\n    cursor: pointer;\n}\n.logos > li {\n    float: left;\n    width: 16.66666%;\n    padding: 5px;\n}\n.logos .logos-inner {\n    position: relative;\n}\n.slick-slide img {\n    display: inline-block;\n}\nimg {\n    display: inline-block;\n    max-width: 100%;\n    vertical-align: middle;\n}\n.fa {\n  font-size: 42px;\n}\n.btn-solodev-red-reversed {\n    background-color: #fff;\n    color: #d2282e;\n    transition: all 0.3s ease;\n    padding: 12px 35px;\n}\n.btn, .btn-blk {\n    font-size: 18px !Important;\n}\na:hover, a:focus {\n    text-decoration: none;\n}\n.ct-u-size19 {\n margin-top: 40px; \n}\na:hover {\n    color: #000;\n}\nsection.clients-home .clients-logos .client-logos-repeater {\n    height: 260px;\n    border-right: 1px solid #ccc;\n    border-bottom: 1px solid #ccc;\n    cursor: pointer;\n}\nsection.clients-home .clients-logos .client-logos-repeater img {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    left: 0;\n    right: 0;\n}\n.logo-title {\n    position: absolute;\n    display: none;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 16px;\n    text-transform: uppercase;\n    color: #FFF;\n    background-color: #0079c2;\n}\n.ct-u-paddingBottom100 {\n  margin-top: 40px;\n}\n.culture-section {\n  background-size: cover;\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBOztJQUVJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHVDQUF1QztJQUN2QywwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUlBQW1JO0lBQ25JLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBRWQsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBRXhCLG1CQUFtQjtJQUNuQix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLHVDQUF1QztJQUl2QywrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBRWQseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7QUFDWjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXBhcmF0b3ItdHlwZSwgLnRpdGxlLXR5cGUsIC5pbnRyby10eXBlLCAuY29udGVudC10eXBlIC5pbnRyby10eXBlIHAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnRyby10eXBlIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwN3B4IDBweCAxMDJweCAwcHggIWltcG9ydGFudDtcbn1cbiNwcm9kdWN0LWhlYWRlci1zZWN0aW9uLCAuaW50cm8tdHlwZSAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA2OHB4IDE1cHggNzJweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MzBweClcbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxNjMwcHg7XG59XG4ucGFyYWxsYXgge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuLnBhcmFsbGF4IHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xMDtcbn1cbi5jb21wYW55LWhlYWRpbmcgaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZW8taGVhZGVyLCAucHJvZHVjdC1oZWFkZXIsIC5pbnRyby10eXBlIC5jb250YWluZXIgaDEud2hpdGUsIC5jb21wYW55LWhlYWRpbmcgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogNjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbXBhbnktc2VjdGlvbnMgaDIsIC5jYXJlZXJzLXNlY3Rpb25zIGgyLCAucGVya3Mtc2VjdGlvbiBoMiB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG4uY29tcGFueS1zZWN0aW9ucyBoMiwgLmNvbXBhbnktc2VjdGlvbnMgaDMsIC5jYXJlZXJzLXNlY3Rpb25zIGgyLCAucGVya3Mtc2VjdGlvbiBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdwcm94aW1hLW5vdmEnLCBzYW5zLXNlcmlmO1xufVxuLmNvbXBhbnktc2VjdGlvbnMgaDMge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMTRweCAwO1xuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5yZWQtYm9yZGVyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDIyODJlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMTZweDtcbn1cbi5jb21wYW55LXNlY3Rpb25zIHAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY3QtdS1zaXplMjIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5jdC11LWZvbnRXZWlnaHQzMDAge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubWFyZ2luVG9wNDAge1xuICAgIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcbn1cbi5jdC11LXBhZGRpbmdCb3RoMTAwIHtcbiAgICBwYWRkaW5nOiAxMDBweCAxNXB4O1xufVxuLmN1bHR1cmUtc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40NSkscmdiYSgwLCAwLCAwLCAwLjQ1KSksIHVybChodHRwczovL3d3dy5zb2xvZGV2LmNvbS9hc3NldHMvY3VsdHVyZS5qcGcpIHRvcCBuby1yZXBlYXQ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzA5NWM4NzsgKi9cbiAgICAvKiBjb2xvcjogI2ZmZjsgKi9cbn1cbi5jb21wYW55LXNlY3Rpb25zLCAuY2FyZWVycy1zZWN0aW9ucywgLmxlZnQtaGVhZHF1YXJ0ZXItc2VjdGlvbi1pbWcsIC5yaWdodC1oZWFkcXVhcnRlci1zZWN0aW9uLWltZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmN0LXUtcGFkZGluZ0JvdGgxMDAge1xuICAgIHBhZGRpbmc6IDEwMHB4IDE1cHg7XG59XG4uY29tcGFueS1zZWN0aW9ucyBoMiwgLmNhcmVlcnMtc2VjdGlvbnMgaDIsIC5wZXJrcy1zZWN0aW9uIGgyIHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cbi5jb21wYW55LXNlY3Rpb25zIGgyLCAuY29tcGFueS1zZWN0aW9ucyBoMywgLmNhcmVlcnMtc2VjdGlvbnMgaDIsIC5wZXJrcy1zZWN0aW9uIGgyIHtcbiAgICBmb250LWZhbWlseTogJ3Byb3hpbWEtbm92YScsIHNhbnMtc2VyaWY7XG59XG4uc2xpY2stc2xpZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnNsaWNrLXNsaWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uc2xpY2stc2xpZGVyIC5zbGljay10cmFjaywgLnNsaWNrLXNsaWRlciAuc2xpY2stbGlzdCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG4uc2xpY2stbGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4uc2xpY2stdHJhY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5zbGlkZXIgLml0ZW0ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2xpY2stc2xpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbn1cbi5sb2dvcyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxudWwubG9nb3MgbGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2dvcyA+IGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTYuNjY2NjYlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5sb2dvcyAubG9nb3MtaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGljay1zbGlkZSBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5sb2dvLWltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG51bC5sb2dvcyBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxvZ29zID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxNi42NjY2NiU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLmxvZ29zIC5sb2dvcy1pbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNsaWNrLXNsaWRlIGltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZmEge1xuICBmb250LXNpemU6IDQycHg7XG59XG4uYnRuLXNvbG9kZXYtcmVkLXJldmVyc2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjZDIyODJlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHBhZGRpbmc6IDEycHggMzVweDtcbn1cbi5idG4sIC5idG4tYmxrIHtcbiAgICBmb250LXNpemU6IDE4cHggIUltcG9ydGFudDtcbn1cbmE6aG92ZXIsIGE6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jdC11LXNpemUxOSB7XG4gbWFyZ2luLXRvcDogNDBweDsgXG59XG5hOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cbnNlY3Rpb24uY2xpZW50cy1ob21lIC5jbGllbnRzLWxvZ29zIC5jbGllbnQtbG9nb3MtcmVwZWF0ZXIge1xuICAgIGhlaWdodDogMjYwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNlY3Rpb24uY2xpZW50cy1ob21lIC5jbGllbnRzLWxvZ29zIC5jbGllbnQtbG9nb3MtcmVwZWF0ZXIgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cbi5sb2dvLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzljMjtcbn1cbi5jdC11LXBhZGRpbmdCb3R0b20xMDAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmN1bHR1cmUtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n   djfdjf\n</body>"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/components/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/components/back-btn/back-btn.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/back-btn/back-btn.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFjay1idG4vYmFjay1idG4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/back-btn/back-btn.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/back-btn/back-btn.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onClick()\" class=\"btn-dark\">\n  <i class=\"fa fa-backward\"></i>Go Back\n</button>"

/***/ }),

/***/ "./src/app/components/back-btn/back-btn.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/back-btn/back-btn.component.ts ***!
  \***********************************************************/
/*! exports provided: BackBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackBtnComponent", function() { return BackBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackBtnComponent = /** @class */ (function () {
    function BackBtnComponent(location) {
        this.location = location;
    }
    BackBtnComponent.prototype.ngOnInit = function () { };
    BackBtnComponent.prototype.onClick = function () {
        this.location.back();
    };
    BackBtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-back-btn',
            template: __webpack_require__(/*! ./back-btn.component.html */ "./src/app/components/back-btn/back-btn.component.html"),
            styles: [__webpack_require__(/*! ./back-btn.component.css */ "./src/app/components/back-btn/back-btn.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], BackBtnComponent);
    return BackBtnComponent;
}());



/***/ }),

/***/ "./src/app/components/chatpage/chatpage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/chatpage/chatpage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat {\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.card {\n  padding: 0;\n  overflow-y: scroll;\n  max-height: 450px;\n}\n\nli {\n  border-bottom: 1px dotted var(--dark);\n  padding: 5px 10px;\n}\n\nli p {\n  font-size: 14px;\n}\n\nli:nth-last-child() {\n  border: none;\n}\n\ntime {\n  font-size: 11px;\n  float: right;\n}\n\ntextarea {\n  border: 1px solid var(--dark2);\n  padding: 10px;\n  height: 60px;\n}\n\ntextarea::-webkit-input-placeholder,\ntextarea {\n  font-size: 16px;\n}\n\ntextarea:-ms-input-placeholder,\ntextarea {\n  font-size: 16px;\n}\n\ntextarea::-ms-input-placeholder,\ntextarea {\n  font-size: 16px;\n}\n\ntextarea::placeholder,\ntextarea {\n  font-size: 16px;\n}\n\nbutton {\n  margin-top: 5px;\n}\n\nform {\n  padding: 0;\n  margin-top: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0cGFnZS9jaGF0cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBSEE7O0VBRUUsZUFBZTtBQUNqQjs7QUFIQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUhBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdHBhZ2UvY2hhdHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0IHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYXJkIHtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXgtaGVpZ2h0OiA0NTBweDtcbn1cblxubGkge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWRhcmspO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxubGkgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxubGk6bnRoLWxhc3QtY2hpbGQoKSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGltZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmsyKTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5mb3JtIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/chatpage/chatpage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/chatpage/chatpage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"chat\">\n    <div class=\"card\">\n      <ul>\n        <li *ngFor=\"let msg of messages\">\n          <strong>{{msg.user}}: </strong>\n          <time>{{msg.date.toDate() | date}}</time>\n          <p>{{msg.msg}}</p>\n        </li>\n      </ul>\n    </div>\n    <form (ngSubmit)=\"onSubmit()\">\n      <textarea name=\"message\" placeholder=\"Add new message\" required [(ngModel)]=\"newMessage.msg\"></textarea>\n      <button [disabled]=\"!newMessage.msg\" class=\"btn-dark\">Send</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/chatpage/chatpage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/chatpage/chatpage.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatpageComponent", function() { return ChatpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatpageComponent = /** @class */ (function () {
    function ChatpageComponent(messageService, authService) {
        this.messageService = messageService;
        this.authService = authService;
        this.newMessage = {
            msg: '',
            user: '',
            date: null
        };
    }
    ChatpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages().subscribe(function (msgs) { return (_this.messages = msgs); });
        this.authService
            .getAuth()
            .subscribe(function (user) { return (_this.newMessage.user = user.email); });
    };
    ChatpageComponent.prototype.onSubmit = function () {
        this.newMessage.date = new Date();
        this.messageService.addMessage(this.newMessage);
        this.newMessage.msg = '';
    };
    ChatpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatpage',
            template: __webpack_require__(/*! ./chatpage.component.html */ "./src/app/components/chatpage/chatpage.component.html"),
            styles: [__webpack_require__(/*! ./chatpage.component.css */ "./src/app/components/chatpage/chatpage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ChatpageComponent);
    return ChatpageComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/add-client/add-client.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/clients/add-client/add-client.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-add {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2FkZC1jbGllbnQvYWRkLWNsaWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudHMvYWRkLWNsaWVudC9hZGQtY2xpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50LWFkZCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/clients/add-client/add-client.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/clients/add-client/add-client.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"client-add\">\n    <app-back-btn></app-back-btn>\n\n\n    <app-client-form [client]=\"client\" [onSubmit]=\"onSubmit\"></app-client-form>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/clients/add-client/add-client.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/clients/add-client/add-client.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/clients.service */ "./src/app/services/clients.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(clientService, router, flashMessage) {
        this.clientService = clientService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.client = {
            employeeid: '',
            firstName: '',
            lastName: '',
            position: '',
            city: '',
            email: '',
            phone: '',
            balance: 0
        };
    }
    AddClientComponent.prototype.ngOnInit = function () { };
    AddClientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.clientService.addClient(this.client);
        this.flashMessage.show(this.client.firstName + " " + this.client.lastName + " has been added.", { cssClass: 'alert-success', timeout: 4000 });
        this.timeout = setTimeout(function () { return _this.router.navigate(['/clients']); }, 4000);
    };
    AddClientComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timeout);
    };
    AddClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(/*! ./add-client.component.html */ "./src/app/components/clients/add-client/add-client.component.html"),
            styles: [__webpack_require__(/*! ./add-client.component.css */ "./src/app/components/clients/add-client/add-client.component.css")]
        }),
        __metadata("design:paramtypes", [_services_clients_service__WEBPACK_IMPORTED_MODULE_1__["ClientsService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/client-details/clients-details.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/clients/client-details/clients-details.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-details {\n  margin: 0 auto;\n  width: 300px;\n}\n\n.card {\n  margin-top: 20px;\n  padding: 20px;\n}\n\nli {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  margin-bottom: 30px;\n}\n\nstrong {\n  justify-self: flex-end;\n}\n\n.controls {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudC1kZXRhaWxzL2NsaWVudHMtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50LWRldGFpbHMvY2xpZW50cy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50LWRldGFpbHMge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuc3Ryb25nIHtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/clients/client-details/clients-details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/clients/client-details/clients-details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"client-details\">\n\n    <app-back-btn></app-back-btn>\n\n    <div class=\"card\">\n      <ul *ngIf=\"client\">\n        <li>\n          Name:\n          <strong>{{client.firstName}} {{client.lastName}}</strong>\n        </li>\n        <li>\n          EmployeeID:\n          <strong>{{client.employeeid}}</strong>\n        </li>\n        <li>\n          Email:\n          <strong>{{client.email}}</strong>\n        </li>\n        <li>\n          Phone number:\n          <strong>{{client.phone}}</strong>\n        </li>\n        <li>\n          Balance:\n          <strong>{{client.balance | currency:\"EUR\"}}</strong>\n        </li>\n        <li>\n          Position:\n          <strong>{{client.position}}</strong>\n        </li>\n        <li>\n          City:\n          <strong>{{client.city}}</strong>\n        </li>\n\n      </ul>\n      <div class=\"controls\">\n        <button routerLink=\"/clients/edit/{{client?.id}}\" class=\"btn-dark\">Edit\n          <i class=\"fa fa-edit\"></i>\n        </button>\n\n        <button (click)=\"onDeleteClick()\" class=\"btn-danger\">Delete\n          <i class=\"fa fa-times-circle\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <app-remove-modal [client]=\"client\"></app-remove-modal>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/clients/client-details/clients-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/clients/client-details/clients-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: ClientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsComponent", function() { return ClientDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/clients.service */ "./src/app/services/clients.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_delete_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/delete-modal.service */ "./src/app/services/delete-modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsComponent(clientService, activatedRouted, deleteModal) {
        this.clientService = clientService;
        this.activatedRouted = activatedRouted;
        this.deleteModal = deleteModal;
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRouted.snapshot.params.id;
        this.clientService
            .getClient(id)
            .subscribe(function (client) { return (_this.client = client); });
    };
    ClientDetailsComponent.prototype.onDeleteClick = function () {
        this.deleteModal.changeState(true);
    };
    ClientDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients-details',
            template: __webpack_require__(/*! ./clients-details.component.html */ "./src/app/components/clients/client-details/clients-details.component.html"),
            styles: [__webpack_require__(/*! ./clients-details.component.css */ "./src/app/components/clients/client-details/clients-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_clients_service__WEBPACK_IMPORTED_MODULE_1__["ClientsService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_delete_modal_service__WEBPACK_IMPORTED_MODULE_3__["DeleteModalService"]])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/client-form/client-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/clients/client-form/client-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-top:30px;\n}\n\nlabel {\n  font-size: 14px;\n}\n\ninput {\n  border-color: var(--light2);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudC1mb3JtL2NsaWVudC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnQtZm9ybS9jbGllbnQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBtYXJnaW4tdG9wOjMwcHg7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQyKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/clients/client-form/client-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/clients/client-form/client-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"client\">\n\n  <form #addClientForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <flash-messages *ngIf=\"showMessage\"></flash-messages>\n    <label for=\"firstName\">First Name</label>\n    <input type=\"text\" name=\"firstName\" [(ngModel)]=\"client.firstName\" [class.is-invalid]=\"validationErrors.isInputInvalid(clientFirstName)\"\n      #clientFirstName=\"ngModel\" required>\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(clientFirstName, 'required')\">\n      First name is required.\n    </div>\n\n\n\n\n\n    <label for=\"lastName\">Last Name</label>\n    <input type=\"text\" name=\"lastName\" [(ngModel)]=\"client.lastName\" [class.is-invalid]=\"validationErrors.isInputInvalid(clientLastName)\"\n      #clientLastName=\"ngModel\" required>\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(clientLastName, 'required')\">\n      Last name is required.\n    </div>\n\n\n    <label for=\"employeeid\">EmployeeID</label>\n    <input type=\"employeeid\" name=\"employeeid\" [(ngModel)]=\"client.employeeid\" #clientEmployeeid=\"ngModel\">\n\n    <label for=\"position\">Position</label>\n    <input type=\"position\" name=\"position\" [(ngModel)]=\"client.position\" #clientPosition=\"ngModel\">\n\n    <label for=\"city\">City</label>\n    <input type=\"city\" name=\"city\" [(ngModel)]=\"client.city\" #clientCity=\"ngModel\">\n\n    <label for=\"email\">Email</label>\n    <input type=\"email\" name=\"email\" [(ngModel)]=\"client.email\" #clientEmail=\"ngModel\" required pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n      [class.is-invalid]=\"validationErrors.isInputInvalid(clientEmail)\">\n\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(clientEmail, 'required')\">\n      Email is required.\n    </div>\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(clientEmail, 'pattern')\">\n      Email is not valid.\n    </div>\n\n\n\n\n    <label for=\"phone\">Phone</label>\n    <input type=\"number\" name=\"phone\" [(ngModel)]=\"client.phone\" required pattern=\"[0-9]{10}\" #clientPhone=\"ngModel\" [class.is-invalid]=\"validationErrors.isInputInvalid(clientPhone)\">\n\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(clientPhone, 'required')\">\n      Phone number is required.\n    </div>\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(clientPhone, 'pattern')\">\n      Phone number is not valid.\n    </div>\n\n\n\n    <button [disabled]=\"!addClientForm.form.valid\" class=\"btn-dark\">Submit</button>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/clients/client-form/client-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/clients/client-form/client-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: ClientFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFormComponent", function() { return ClientFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validation_errors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/validation-errors.service */ "./src/app/services/validation-errors.service.ts");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/clients.service */ "./src/app/services/clients.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientFormComponent = /** @class */ (function () {
    function ClientFormComponent(validationErrors, clientService, router, flashMessage, cdRef) {
        this.validationErrors = validationErrors;
        this.clientService = clientService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.cdRef = cdRef;
        this.showMessage = true;
    }
    ClientFormComponent.prototype.ngOnInit = function () { };
    ClientFormComponent.prototype.ngOnDestroy = function () {
        this.cdRef.markForCheck();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClientFormComponent.prototype, "client", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClientFormComponent.prototype, "onSubmit", void 0);
    ClientFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-form',
            template: __webpack_require__(/*! ./client-form.component.html */ "./src/app/components/clients/client-form/client-form.component.html"),
            styles: [__webpack_require__(/*! ./client-form.component.css */ "./src/app/components/clients/client-form/client-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validation_errors_service__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorsService"],
            _services_clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ClientFormComponent);
    return ClientFormComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/clientspage/clientspage.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/clients/clientspage/clientspage.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clients {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.fa-plus-circle {\n  font-size: 1.3em;\n}\n\n.card {\n  margin-top: 20px;\n}\n\nli {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-template-areas:\n    'name controls'\n    'email controls';\n  align-items: center;\n  border-bottom: 1px dotted black;\n  padding: 10px 20px;\n}\n\nli:last-of-type {\n  border: none;\n}\n\nli span:nth-child(1) {\n  grid-area: name;\n}\n\nli span:nth-child(2) {\n  grid-area: email;\n}\n\n.controls {\n  grid-area: controls;\n  position: relative;\n}\n\n.controls:focus-within > .dropdown {\n  display: flex;\n}\n\n.dropdown {\n  display: none;\n  z-index: 3;\n  min-width: 120px;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  flex-direction: column;\n}\n\n.dropdown > button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.filter {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n}\n\ninput {\n  border: 1px solid var(--dark);\n  padding: 10px 15px;\n  min-width: 250px;\n  width: 30%;\n}\n\ninput::-webkit-input-placeholder {\n  font-size: 16px;\n}\n\ninput:-ms-input-placeholder {\n  font-size: 16px;\n}\n\ninput::-ms-input-placeholder {\n  font-size: 16px;\n}\n\ninput::placeholder {\n  font-size: 16px;\n}\n\n@media (min-width: 600px) {\n  li {\n    grid-template-columns: 1fr auto 1fr;\n    grid-template-areas: 'name email controls';\n  }\n  .controls {\n    justify-self: end;\n  }\n  .filter {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n}\n\n@media (min-width: 900px) {\n  .controls > button {\n    display: none;\n  }\n  .dropdown {\n    position: initial;\n    display: flex;\n    justify-content: space-around;\n    flex-direction: row;\n  }\n  .dropdown > button {\n    margin-left: 5px;\n  }\n  .dropdown > button i {\n    margin-left: 5px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudHNwYWdlL2NsaWVudHNwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0I7O29CQUVrQjtFQUNsQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRkE7RUFDRSxlQUFlO0FBQ2pCOztBQUZBO0VBQ0UsZUFBZTtBQUNqQjs7QUFGQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLG1DQUFtQztJQUNuQywwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50c3BhZ2UvY2xpZW50c3BhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnRzIHtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZmEtcGx1cy1jaXJjbGUge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAnbmFtZSBjb250cm9scydcbiAgICAnZW1haWwgY29udHJvbHMnO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbmxpOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxubGkgc3BhbjpudGgtY2hpbGQoMSkge1xuICBncmlkLWFyZWE6IG5hbWU7XG59XG5cbmxpIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgZ3JpZC1hcmVhOiBlbWFpbDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgZ3JpZC1hcmVhOiBjb250cm9scztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udHJvbHM6Zm9jdXMtd2l0aGluID4gLmRyb3Bkb3duIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogMztcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZHJvcGRvd24gPiBidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWx0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyayk7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgd2lkdGg6IDMwJTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgbGkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICduYW1lIGVtYWlsIGNvbnRyb2xzJztcbiAgfVxuICAuY29udHJvbHMge1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICB9XG4gIC5maWx0ZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5jb250cm9scyA+IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuZHJvcGRvd24gPiBidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbiAgLmRyb3Bkb3duID4gYnV0dG9uIGkge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/clients/clientspage/clientspage.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/clients/clientspage/clientspage.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"clients\">\n    <div class=\"filter\">\n      <button routerLink=\"/clients/add\" class=\"btn-dark\">Add New Employee\n        <i class=\"fa fa-plus-circle\"></i>\n      </button>\n      <input (input)=\"onChange()\" type=\"search\" placeholder=\"Search...\" [(ngModel)]=\"query\">\n    </div>\n\n\n    <div class=\"card\">\n      <flash-messages></flash-messages>\n      <ul>\n        <li *ngFor=\"let client of visibleClients || clients\">\n          <span>{{client.firstName}} {{client.lastName}}</span>\n          <span>{{client.email}}</span>\n\n\n          <div class=\"controls\">\n\n            <button class=\"btn-dark\">\n              <i class=\"fa fa-cog\"></i>\n\n            </button>\n\n            <div class=\"dropdown\">\n\n              <button routerLink=\"/clients/details/{{client.id}}\" class=\"btn-dark\">\n                Details\n                <i class=\"fa fa-info-circle\"></i>\n              </button>\n\n              <button routerLink=\"/clients/edit/{{client.id}}\" class=\"btn-dark\">Edit\n                <i class=\"fa fa-edit\"></i>\n              </button>\n\n              <button (click)=\"onDeleteClick(client)\" class=\"btn-danger\">Delete\n                <i class=\"fa fa-times-circle\"></i>\n              </button>\n\n              \n            </div>\n          </div>\n\n\n        </li>\n      </ul>\n    </div>\n\n    <app-remove-modal [client]=\"currentClient\"></app-remove-modal>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/clients/clientspage/clientspage.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/clients/clientspage/clientspage.component.ts ***!
  \*************************************************************************/
/*! exports provided: ClientspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientspageComponent", function() { return ClientspageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/clients.service */ "./src/app/services/clients.service.ts");
/* harmony import */ var _services_delete_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/delete-modal.service */ "./src/app/services/delete-modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientspageComponent = /** @class */ (function () {
    function ClientspageComponent(clientService, deleteModal) {
        this.clientService = clientService;
        this.deleteModal = deleteModal;
        this.query = '';
    }
    ClientspageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService
            .getClients()
            .subscribe(function (clients) { return (_this.clients = clients); });
    };
    ClientspageComponent.prototype.onDeleteClick = function (client) {
        this.currentClient = client;
        this.deleteModal.changeState(true);
    };
    ClientspageComponent.prototype.onChange = function (e) {
        var _this = this;
        this.visibleClients = this.clients.filter(function (client) {
            var clientName = (client.firstName + " " + client.lastName).toLowerCase();
            var query = _this.query.toLowerCase().trim();
            return clientName.includes(query);
        });
    };
    ClientspageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientspage',
            template: __webpack_require__(/*! ./clientspage.component.html */ "./src/app/components/clients/clientspage/clientspage.component.html"),
            styles: [__webpack_require__(/*! ./clientspage.component.css */ "./src/app/components/clients/clientspage/clientspage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_clients_service__WEBPACK_IMPORTED_MODULE_1__["ClientsService"],
            _services_delete_modal_service__WEBPACK_IMPORTED_MODULE_2__["DeleteModalService"]])
    ], ClientspageComponent);
    return ClientspageComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/edit-client/edit-client.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/clients/edit-client/edit-client.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-edit {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n.client-edit > div {\n  display: flex;\n  justify-content: space-between;\n}\n\nh3 {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2VkaXQtY2xpZW50L2VkaXQtY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2VkaXQtY2xpZW50L2VkaXQtY2xpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50LWVkaXQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNsaWVudC1lZGl0ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5oMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/clients/edit-client/edit-client.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/clients/edit-client/edit-client.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"client-edit\">\n    <div>\n      <app-back-btn></app-back-btn>\n      <button class=\"btn-dark\" (click)=\"openModal()\">Salary\n        <i class=\"fa fa-edit\"></i>\n      </button>\n    </div>\n    <app-client-form [client]=\"client\" [onSubmit]=\"onSubmit\"></app-client-form>\n  </div>\n\n  <app-modal [(state)]=\"modal\" (changeState)=\"modal = $event\" *ngIf=\"client\">\n    <h3>Current Salary:\n      <strong>{{client.balance | currency:\"EUR\"}}</strong>\n    </h3>\n    <form (ngSubmit)=\"onBalanceChange()\">\n      <input type=\"number\" [(ngModel)]=\"client.balance\" name=\"balance\">\n      <button class=\"btn-dark\">Change Salary</button>\n    </form>\n\n  </app-modal>\n</div>"

/***/ }),

/***/ "./src/app/components/clients/edit-client/edit-client.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/clients/edit-client/edit-client.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClientComponent", function() { return EditClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/clients.service */ "./src/app/services/clients.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(clientService, activatedRoute, router, flashMessage) {
        this.clientService = clientService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.flashMessage = flashMessage;
        this.modal = false;
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.params.id;
        this.clientService
            .getClient(id)
            .subscribe(function (client) { return (_this.client = client); });
    };
    EditClientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.clientService.updateClient(this.client);
        this.flashMessage.show(this.client.firstName + " " + this.client.lastName + " has been updated.", { cssClass: 'alert-success', timeout: 4000 });
        this.timeout = setTimeout(function () { return _this.router.navigate(['/clients']); }, 4000);
    };
    EditClientComponent.prototype.openModal = function () {
        this.modal = true;
    };
    EditClientComponent.prototype.onBalanceChange = function () {
        this.clientService.updateClient(this.client);
        this.flashMessage.show('Balance has been updated', {
            cssClass: 'alert-success',
            timeout: 4000
        });
        this.modal = false;
    };
    EditClientComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timeout);
    };
    EditClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-client',
            template: __webpack_require__(/*! ./edit-client.component.html */ "./src/app/components/clients/edit-client/edit-client.component.html"),
            styles: [__webpack_require__(/*! ./edit-client.component.css */ "./src/app/components/clients/edit-client/edit-client.component.css")]
        }),
        __metadata("design:paramtypes", [_services_clients_service__WEBPACK_IMPORTED_MODULE_1__["ClientsService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], EditClientComponent);
    return EditClientComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/remove-modal/remove-modal.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/clients/remove-modal/remove-modal.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controls {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL3JlbW92ZS1tb2RhbC9yZW1vdmUtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL3JlbW92ZS1tb2RhbC9yZW1vdmUtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/clients/remove-modal/remove-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/clients/remove-modal/remove-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal [(state)]=\"showModal\" (changeState)=\"showModal = $event\" *ngIf=\"client\">\n  Do you want to remove\n  <strong>{{client.firstName}} {{client.lastName}}</strong> ?\n  <div class=\"controls\">\n    <button class=\"btn-danger\" (click)=\"onDeleteConfirm()\">Yes</button>\n    <button class=\"btn-dark\" (click)=\"onDeleteCancel()\">No</button>\n  </div>\n\n</app-modal>"

/***/ }),

/***/ "./src/app/components/clients/remove-modal/remove-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/clients/remove-modal/remove-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: RemoveModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveModalComponent", function() { return RemoveModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/clients.service */ "./src/app/services/clients.service.ts");
/* harmony import */ var _services_delete_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/delete-modal.service */ "./src/app/services/delete-modal.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemoveModalComponent = /** @class */ (function () {
    function RemoveModalComponent(clientService, deleteModal, router) {
        this.clientService = clientService;
        this.deleteModal = deleteModal;
        this.router = router;
    }
    RemoveModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deleteModal.getState().subscribe(function (state) { return (_this.showModal = state); });
    };
    RemoveModalComponent.prototype.onDeleteConfirm = function () {
        this.clientService.deleteClient(this.client);
        this.deleteModal.changeState(false);
        this.router.navigate(['/clients']);
    };
    RemoveModalComponent.prototype.onDeleteCancel = function () {
        this.deleteModal.changeState(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RemoveModalComponent.prototype, "client", void 0);
    RemoveModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-modal',
            template: __webpack_require__(/*! ./remove-modal.component.html */ "./src/app/components/clients/remove-modal/remove-modal.component.html"),
            styles: [__webpack_require__(/*! ./remove-modal.component.css */ "./src/app/components/clients/remove-modal/remove-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_clients_service__WEBPACK_IMPORTED_MODULE_1__["ClientsService"],
            _services_delete_modal_service__WEBPACK_IMPORTED_MODULE_2__["DeleteModalService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RemoveModalComponent);
    return RemoveModalComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background: var(--dark);\n  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.3);\n  height: var(--navHeight);\n  color: var(--light);\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.social {\n  font-size: 1.8em;\n}\n\n.social > * {\n  margin-left: 20px;\n}\n\n.social > *:hover {\n  color: var(--dark2);\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsMENBQTBDO0VBQzFDLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xuICBib3gtc2hhZG93OiAwIC01cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGhlaWdodDogdmFyKC0tbmF2SGVpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNvY2lhbCB7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG59XG5cbi5zb2NpYWwgPiAqIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5zb2NpYWwgPiAqOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWRhcmsyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <p>Employee Management System &copy; 2019</p>\n  <div class=\"social\">\n    <a href=\"https://www.facebook.com\" target=\"_blank\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a href=\"https://twitter.com\" target=\"_blank\">\n      <i class=\"fa fa-twitter\"></i>\n    </a>\n    <a href=\"https://www.instagram.com\" target=\"_blank\">\n      <i class=\"fa fa-instagram\"></i>\n    </a>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/header/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/header/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/header/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-signup></app-signup>\n<app-login></app-login>\n"

/***/ }),

/***/ "./src/app/components/header/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/header/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/login/login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/header/login/login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/header/login/login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/header/login/login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-form-container [type]=\"'login'\">\n\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n    <flash-messages></flash-messages>\n\n    <label for=\"email\">Email</label>\n    <input [class.is-invalid]=\"validationErrors.isInputInvalid(userEmail)\" type=\"email\" name=\"email\" #userEmail=\"ngModel\" [(ngModel)]=\"user.email\"\n      required pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n      placeholder=\"mail@mail.com\">\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(userEmail, 'required')\">\n      Email is required.\n    </div>\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(userEmail, 'pattern')\">\n      Email is not valid.\n    </div>\n\n\n    <label for=\"password\">Password</label>\n\n    <input type=\"password\" name=\"password\" #userPassword=\"ngModel\" [(ngModel)]=\"user.password\" required minlength=\"8\" placeholder=\"Must be at least 8 characters\"\n      #userPassword=\"ngModel\" [class.is-invalid]=\"validationErrors.isInputInvalid(userPassword)\">\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(userPassword, 'required')\">\n      Password is required.\n    </div>\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(userPassword, 'minlength')\">\n      Must be at least 8 characters.\n    </div>\n\n\n\n\n    <button type=\"submit\" [disabled]=\"!loginForm.form.valid\" class=\"btn-dark \">Submit</button>\n\n  </form>\n</app-user-form-container>"

/***/ }),

/***/ "./src/app/components/header/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/header/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_userform_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/userform-animation */ "./src/app/services/userform-animation.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_validation_errors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/validation-errors.service */ "./src/app/services/validation-errors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(animationService, authService, flashMessage, validationErrors) {
        this.animationService = animationService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.validationErrors = validationErrors;
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animationService.getActive().subscribe(function (active) {
            if (active !== 'login') {
                _this.user = {
                    email: '',
                    password: ''
                };
                _this.form.reset();
            }
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService
            .login(this.user.email, this.user.password)
            .then(function () {
            _this.animationService.toggle('login');
        })
            .catch(function (err) {
            console.log(err);
            _this.flashMessage.show(err.message, {
                cssClass: 'alert-error',
                timeout: 6000
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginForm'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/header/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/header/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_userform_animation__WEBPACK_IMPORTED_MODULE_1__["UserFormAnimationService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_validation_errors_service__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/header/nav-mobile/nav-mobile.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/header/nav-mobile/nav-mobile.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  position: fixed;\n  top: var(--navHeight);\n  left: -150px;\n  background: var(--light2);\n  width: 150px;\n  height: calc(100% - var(--navHeight) * 2);\n  z-index: 2;\n}\n\nul li {\n  padding: 20px;\n  border-bottom: 1px dotted var(--light);\n}\n\nul li:nth-last-child() {\n  border: none;\n}\n\nul li:hover {\n  background: var(--dark);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvbmF2LW1vYmlsZS9uYXYtbW9iaWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvbmF2LW1vYmlsZS9uYXYtbW9iaWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiB2YXIoLS1uYXZIZWlnaHQpO1xuICBsZWZ0OiAtMTUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0Mik7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1uYXZIZWlnaHQpICogMik7XG4gIHotaW5kZXg6IDI7XG59XG5cbnVsIGxpIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1saWdodCk7XG59XG5cbnVsIGxpOm50aC1sYXN0LWNoaWxkKCkge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyayk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/header/nav-mobile/nav-mobile.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/header/nav-mobile/nav-mobile.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul [@toggleMenu]=\"state\" class=\"nav-mobile\">\n  <a routerLink=\"{{link.url}}\" *ngFor=\"let link of links\">\n    <li>{{link.name}}</li>\n  </a>\n</ul>"

/***/ }),

/***/ "./src/app/components/header/nav-mobile/nav-mobile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/header/nav-mobile/nav-mobile.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMobileComponent", function() { return NavMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavMobileComponent = /** @class */ (function () {
    function NavMobileComponent() {
    }
    NavMobileComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavMobileComponent.prototype, "links", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavMobileComponent.prototype, "state", void 0);
    NavMobileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-mobile',
            template: __webpack_require__(/*! ./nav-mobile.component.html */ "./src/app/components/header/nav-mobile/nav-mobile.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggleMenu', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        left: '-150px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        left: '0px',
                        boxShadow: '5px 0px 1px 0px rgba(0, 0, 0, 0.4)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out'))
                ])
            ],
            styles: [__webpack_require__(/*! ./nav-mobile.component.css */ "./src/app/components/header/nav-mobile/nav-mobile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavMobileComponent);
    return NavMobileComponent;
}());



/***/ }),

/***/ "./src/app/components/header/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/header/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: var(--dark);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-gap: 20px;\n  grid-template-rows: var(--navHeight);\n  color: var(--light);\n  position: relative;\n  padding: 0 50px 0 25px;\n  z-index: 10;\n}\n\n/* Mobile */\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.menu-bar {\n  height: 3px;\n  width: 35px;\n  background: var(--light);\n  margin-top: 6px;\n  transition: all 0.4s ease-in-out;\n}\n\n.menu-open > div:nth-of-type(1) {\n  -webkit-transform: rotate(45deg) translate(7px, 4px);\n          transform: rotate(45deg) translate(7px, 4px);\n}\n\n.menu-open > div:nth-of-type(2) {\n  opacity: 0;\n}\n\n.menu-open > div:nth-of-type(3) {\n  -webkit-transform: rotate(-45deg) translate(9px, -7px);\n          transform: rotate(-45deg) translate(9px, -7px);\n}\n\n/* Desktop */\n\nul {\n  display: flex;\n  line-height: var(--navHeight);\n}\n\nul > a {\n  padding: 0 25px;\n}\n\nul a {\n  transition: 0.4s linear;\n}\n\nul a:hover {\n  background: var(--light2);\n}\n\n.user {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 5px;\n}\n\nstrong {\n  font-size: 14px;\n}\n\n@media (min-width: 600px) {\n  nav {\n    grid-gap: 0;\n    grid-template-columns: 1fr auto;\n  }\n  strong {\n    font-size: 18px;\n  }\n  .user {\n    grid-gap: 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9EQUE0QztVQUE1Qyw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzREFBOEM7VUFBOUMsOENBQThDO0FBQ2hEOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tbmF2SGVpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDUwcHggMCAyNXB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLyogTW9iaWxlICovXG5cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtYmFyIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodCk7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZW51LW9wZW4gPiBkaXY6bnRoLW9mLXR5cGUoMSkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDdweCwgNHB4KTtcbn1cblxuLm1lbnUtb3BlbiA+IGRpdjpudGgtb2YtdHlwZSgyKSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZW51LW9wZW4gPiBkaXY6bnRoLW9mLXR5cGUoMykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSg5cHgsIC03cHgpO1xufVxuXG4vKiBEZXNrdG9wICovXG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLW5hdkhlaWdodCk7XG59XG5cbnVsID4gYSB7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cblxudWwgYSB7XG4gIHRyYW5zaXRpb246IDAuNHMgbGluZWFyO1xufVxuXG51bCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQyKTtcbn1cblxuLnVzZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiA1cHg7XG59XG5cbnN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIG5hdiB7XG4gICAgZ3JpZC1nYXA6IDA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgfVxuICBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAudXNlciB7XG4gICAgZ3JpZC1nYXA6IDIwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/header/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ng-container *ngIf=\"innerWidth>600 then desktop; else mobile\"></ng-container>\n  <div class=\"user\">\n    <ng-container *ngIf=\"user!==null; then loggedUser; else notloggedUser\"></ng-container>\n  </div>\n</nav>\n\n\n<ng-template #mobile>\n  <div class=\"menu\" [class.menu-open]=\"navMenu==='active'? true : false\" (click)=\"toggleMenu()\">\n    <div class=\"menu-bar\"></div>\n    <div class=\"menu-bar\"></div>\n    <div class=\"menu-bar\"></div>\n    <app-nav-mobile [links]=\"links\" [state]=\"navMenu\"></app-nav-mobile>\n  </div>\n</ng-template>\n\n<ng-template #desktop>\n  <ul class=\"nav-links\">\n    <a *ngFor=\"let link of links\" routerLink=\"{{link.url}}\" [routerLinkActive]=\"['active-nav-link']\" [routerLinkActiveOptions]=\"{exact:true}\">\n      <li>{{link.name}}</li>\n    </a>\n  </ul>\n</ng-template>\n\n\n\n\n<ng-template #notloggedUser>\n  <button (click)=\"toggleForm('login')\" class=\"btn-light btn-scale\">Login</button>\n  <button (click)=\"toggleForm('signup')\" class=\"btn-light btn-scale\">Sign Up</button>\n</ng-template>\n\n\n<ng-template #loggedUser>\n  <strong>{{user}}</strong>\n  <button (click)=\"logout()\" class=\"btn-danger btn-scale\">Logout</button>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/header/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/header/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_userform_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/userform-animation */ "./src/app/services/userform-animation.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(animationService, authService) {
        this.animationService = animationService;
        this.authService = authService;
        this.navMenu = 'inactive';
        this.user = null;
        this.links = [
            { name: 'Home', url: '/' },
            { name: 'Employee', url: '/clients' },
            { name: 'Chat', url: '/chat' },
            { name: 'Contact Us', url: '/contactus' },
        ];
    }
    NavbarComponent.prototype.onResize = function () {
        this.innerWidth = window.innerWidth;
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        this.authService.getAuth().subscribe(function (user) {
            _this.user = user ? user.email : null;
        });
    };
    NavbarComponent.prototype.toggleForm = function (form) {
        this.animationService.toggle(form);
    };
    NavbarComponent.prototype.toggleMenu = function () {
        this.navMenu = this.navMenu === 'active' ? 'inactive' : 'active';
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onResize", null);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/header/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/header/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_userform_animation__WEBPACK_IMPORTED_MODULE_1__["UserFormAnimationService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/header/signup/signup.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/header/signup/signup.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/header/signup/signup.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/header/signup/signup.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-form-container [type]=\"'signup'\">\n  <form #signupForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n    <label for=\"email\">Email</label>\n    <input type=\"email\" name=\"email\" #userEmail=\"ngModel\" [(ngModel)]=\"user.email\" required [class.is-invalid]=\"validationErrors.isInputInvalid(userEmail)\"\n      placeholder=\"mail@mail.com\" pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\">\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(userEmail, 'required')\">\n      Email is required.\n    </div>\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(userEmail, 'pattern')\">\n      Email is not valid.\n    </div>\n\n\n\n    <label for=\"password\">Password</label>\n    <input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" placeholder=\"Must be at least 8 characters.\" required\n      #userPassword=\"ngModel\" minlength=\"8\" [class.is-invalid]=\"validationErrors.isInputInvalid(userPassword)\">\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(userPassword, 'required')\">\n      Password is required.\n    </div>\n\n    <div class=\"is-invalid\" [hidden]=\"validationErrors.isErrorHidden(userPassword, 'minlength')\">\n      Must be at least 8 characters.\n    </div>\n\n\n\n\n    <label for=\"password2\">Confirm Password</label>\n    <input [class.is-invalid]=\"validationErrors.isInputInvalid(userPassword2)\" [(ngModel)]=\"user.password2\" type=\"password\" name=\"password2\"\n      required #userPassword2=\"ngModel\" appComparePasswords=\"{{user.password}}\">\n\n\n    <div class=\" is-invalid \" [hidden]=\"validationErrors.isErrorHidden(userPassword2, 'differentPasswords') \">\n      Passwords don't match.\n    </div>\n\n\n    <button type=\"submit\" [disabled]=\"!signupForm.form.valid\" class=\"btn-dark \">Submit</button>\n\n  </form>\n\n\n\n\n</app-user-form-container>"

/***/ }),

/***/ "./src/app/components/header/signup/signup.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/header/signup/signup.component.ts ***!
  \**************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_userform_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/userform-animation */ "./src/app/services/userform-animation.ts");
/* harmony import */ var _services_validation_errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validation-errors.service */ "./src/app/services/validation-errors.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(animationService, validationErrors, authService) {
        this.animationService = animationService;
        this.validationErrors = validationErrors;
        this.authService = authService;
        this.user = {
            email: '',
            password: '',
            password2: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animationService.getActive().subscribe(function (active) {
            if (active !== 'login') {
                _this.user = {
                    email: '',
                    password: '',
                    password2: ''
                };
                _this.form.reset();
            }
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.signUp(this.user.email, this.user.password).then(function (user) {
            _this.animationService.toggle('signup');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('signupForm'),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "form", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/header/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/header/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_userform_animation__WEBPACK_IMPORTED_MODULE_1__["UserFormAnimationService"],
            _services_validation_errors_service__WEBPACK_IMPORTED_MODULE_2__["ValidationErrorsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/header/user-form-container/user-form-container.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/header/user-form-container/user-form-container.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  position: fixed;\n  z-index: 2;\n  top: var(--navHeight);\n  right: 0;\n  width: 100%;\n  background: var(--light2);\n  overflow: hidden;\n  color: var(--light);\n  text-align: center;\n  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.4);\n}\n\nh1 {\n  margin-top: 15px;\n}\n\n@media (min-width: 550px) {\n  div {\n    width: 400px;\n    right: 50px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvdXNlci1mb3JtLWNvbnRhaW5lci91c2VyLWZvcm0tY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL3VzZXItZm9ybS1jb250YWluZXIvdXNlci1mb3JtLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IHZhcigtLW5hdkhlaWdodCk7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQyKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHZhcigtLWxpZ2h0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xuICBkaXYge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICByaWdodDogNTBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/header/user-form-container/user-form-container.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/header/user-form-container/user-form-container.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@slideInOut] *ngIf=\"state\">\n  <h1>{{type |uppercase}}</h1>\n\n  <ng-content></ng-content>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/header/user-form-container/user-form-container.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/header/user-form-container/user-form-container.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserFormContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormContainerComponent", function() { return UserFormContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_userform_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/userform-animation */ "./src/app/services/userform-animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var animationTime = 400;
var UserFormContainerComponent = /** @class */ (function () {
    function UserFormContainerComponent(animationService) {
        this.animationService = animationService;
        this.state = false;
    }
    UserFormContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animationService
            .getState(this.type)
            .subscribe(function (newState) { return (_this.state = newState); });
        this.animationService.setAnimationTime(animationTime);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserFormContainerComponent.prototype, "type", void 0);
    UserFormContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form-container',
            template: __webpack_require__(/*! ./user-form-container.component.html */ "./src/app/components/header/user-form-container/user-form-container.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(animationTime + "ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(animationTime + "ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./user-form-container.component.css */ "./src/app/components/header/user-form-container/user-form-container.component.css")]
        }),
        __metadata("design:paramtypes", [_services_userform_animation__WEBPACK_IMPORTED_MODULE_2__["UserFormAnimationService"]])
    ], UserFormContainerComponent);
    return UserFormContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\nh1 {\n  color: var(--dark);\n  font-size: 3em;\n  text-align: center;\n  font-weight: bold;\n  color: var(--light);\n  text-transform: uppercase;\n  text-shadow: 2px 2px 2px #000;\n}\n\nspan {\n  width: 100px;\n  height: 100px;\n  background: url('data:image/svg+xml,\\\n  <svg xmlns=\"http://www.w3.org/2000/svg\">\\\n    <style>@keyframes border{to{stroke-dashoffset:-50px;}}</style>\\\n    <linearGradient id=\"gradient\" gradientTransform=\"rotate(45)\">\\\n      <stop stop-color=\"#4db6ac\"></stop>\\\n      <stop stop-color=\"#004d40\" offset=\"1\"></stop>\\\n    </linearGradient>\\\n    <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"url(#gradient)\" stroke-width=\"10\" fill=\"none\" stroke-dasharray=\"25px\\ 25px\" style=\"animation:border 1s infinite linear;\"/>\\\n    </svg>');\n}\n\n@media (min-width: 600px) {\n  h1 {\n    font-size: 4em;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYjs7Ozs7Ozs7WUFRVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgZm9udC1zaXplOiAzZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMDAwO1xufVxuXG5zcGFuIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCxcXFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cXFxuICAgIDxzdHlsZT5Aa2V5ZnJhbWVzIGJvcmRlcnt0b3tzdHJva2UtZGFzaG9mZnNldDotNTBweDt9fTwvc3R5bGU+XFxcbiAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudFwiIGdyYWRpZW50VHJhbnNmb3JtPVwicm90YXRlKDQ1KVwiPlxcXG4gICAgICA8c3RvcCBzdG9wLWNvbG9yPVwiIzRkYjZhY1wiPjwvc3RvcD5cXFxuICAgICAgPHN0b3Agc3RvcC1jb2xvcj1cIiMwMDRkNDBcIiBvZmZzZXQ9XCIxXCI+PC9zdG9wPlxcXG4gICAgPC9saW5lYXJHcmFkaWVudD5cXFxuICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNDBcIiBzdHJva2U9XCJ1cmwoI2dyYWRpZW50KVwiIHN0cm9rZS13aWR0aD1cIjEwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtZGFzaGFycmF5PVwiMjVweFxcIDI1cHhcIiBzdHlsZT1cImFuaW1hdGlvbjpib3JkZXIgMXMgaW5maW5pdGUgbGluZWFyO1wiLz5cXFxuICAgIDwvc3ZnPicpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home page\">\n  <div class=\"home\">\n    <h1>Employee Management System</h1>\n    <span></span>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/modal/modal.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 10;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-content {\n  width: 80%;\n  position: relative;\n  padding: 20px;\n  padding-top: 50px;\n}\n\ni {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 2.5em;\n  padding: 5px;\n  color: var(--danger);\n}\n\ni:hover {\n  cursor: pointer;\n  color: var(--error);\n}\n\n@media (min-width: 600px) {\n  .modal-content {\n    width: auto;\n    min-width: 350px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbn1cblxuaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" *ngIf=\"state\" [@fadeInOut]>\n  <div class=\"modal-content card\">\n\n    <i (click)=\"onClick()\" class=\"fa fa-times-circle\"></i>\n\n    <ng-content></ng-content>\n  </div>"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.changeState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent.prototype.onClick = function () {
        this.changeState.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "state", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "changeState", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))])
                ])
            ],
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/overlay/overlay.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/overlay/overlay.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  position: absolute;\n  top: var(--navHeight);\n  left: 0;\n  width: 100%;\n  height: calc(100% - var(--navHeight) * 2);\n  z-index: 1;\n  background: #e0f2f170;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsT0FBTztFQUNQLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiB2YXIoLS1uYXZIZWlnaHQpO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1uYXZIZWlnaHQpICogMik7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNlMGYyZjE3MDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/overlay/overlay.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/overlay/overlay.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" #overlay>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/overlay/overlay.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/overlay/overlay.component.ts ***!
  \*********************************************************/
/*! exports provided: OverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayComponent", function() { return OverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_userform_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/userform-animation */ "./src/app/services/userform-animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverlayComponent = /** @class */ (function () {
    function OverlayComponent(userFormAnimation) {
        this.userFormAnimation = userFormAnimation;
    }
    OverlayComponent.prototype.onclick = function (e) {
        if (e.path.includes(this.overlay.nativeElement) &&
            this.userFormAnimation.active.getValue()) {
            this.userFormAnimation.toggle(this.userFormAnimation.active.getValue());
        }
    };
    OverlayComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('overlay'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OverlayComponent.prototype, "overlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OverlayComponent.prototype, "onclick", null);
    OverlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overlay',
            template: __webpack_require__(/*! ./overlay.component.html */ "./src/app/components/overlay/overlay.component.html"),
            styles: [__webpack_require__(/*! ./overlay.component.css */ "./src/app/components/overlay/overlay.component.css")]
        }),
        __metadata("design:paramtypes", [_services_userform_animation__WEBPACK_IMPORTED_MODULE_1__["UserFormAnimationService"]])
    ], OverlayComponent);
    return OverlayComponent;
}());



/***/ }),

/***/ "./src/app/connection.service.ts":
/*!***************************************!*\
  !*** ./src/app/connection.service.ts ***!
  \***************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectionService = /** @class */ (function () {
    function ConnectionService(http) {
        this.http = http;
        this.url = 'https://employeems-417b8.firebaseapp.com/send';
    }
    ConnectionService.prototype.sendMessage = function (messageContent) {
        return this.http.post(this.url, JSON.stringify(messageContent), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }), responseType: 'text' });
    };
    ConnectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ConnectionService);
    return ConnectionService;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default form contact -->\r\n<form class=\"text-center border border-light p-5\" [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <p class=\"h4 mb-4\">Contact us</p>\r\n\r\n  <!-- Name -->\r\n  <input type=\"text\" formControlName=\"contactFormName\" id=\"defaultContactFormName\" mdbInputDirective\r\n         class=\"form-control mb-4\" placeholder=\"Name\">\r\n\r\n  <!-- Email -->\r\n  <input type=\"email\" formControlName=\"contactFormEmail\" id=\"defaultContactFormEmail\" mdbInputDirective\r\n         class=\"form-control mb-4\" placeholder=\"E-mail\">\r\n\r\n  <!-- Subject -->\r\n  <label>Subject</label>\r\n  <select formControlName=\"contactFormSubjects\" class=\"browser-default custom-select mb-4\">\r\n    <option value=\"\" disabled>Choose option</option>\r\n    <option value=\"1\" selected>Feedback</option>\r\n    <option value=\"2\">Report a bug</option>\r\n    <option value=\"3\">Feature request</option>\r\n    <option value=\"4\">Feature request</option>\r\n  </select>\r\n\r\n  <!-- Message -->\r\n  <div class=\"form-group\">\r\n    <textarea formControlName=\"contactFormMessage\" class=\"form-control rounded-0\" mdbInputDirective id=\"exampleFormControlTextarea2\"\r\n              rows=\"3\" placeholder=\"Message\"></textarea>\r\n  </div>\r\n\r\n  <!-- Copy -->\r\n  <div class=\"custom-control custom-checkbox mb-4\">\r\n    <input formControlName=\"contactFormCopy\" type=\"checkbox\" class=\"custom-control-input\" id=\"defaultContactFormCopy\">\r\n    <label class=\"custom-control-label\" for=\"defaultContactFormCopy\">Send me a copy of this message</label>\r\n  </div>\r\n\r\n  <!-- Send button -->\r\n  <button mdbBtn color=\"info\" outline=\"true\" block=\"true\" class=\"z-depth-0 my-4 waves-effect\"\r\n          mdbWavesEffect type=\"submit\" [disabled]=\"disabledSubmitButton\">Send</button>\r\n\r\n</form>\r\n<!-- Default form contact -->\r\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.scss":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connection.service */ "./src/app/connection.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(fb, connectionService) {
        this.fb = fb;
        this.connectionService = connectionService;
        this.disabledSubmitButton = true;
        this.contactForm = fb.group({
            'contactFormName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'contactFormEmail': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            'contactFormSubjects': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'contactFormMessage': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'contactFormCopy': [''],
        });
    }
    ContactusComponent.prototype.oninput = function () {
        if (this.contactForm.valid) {
            this.disabledSubmitButton = false;
        }
    };
    ContactusComponent.prototype.onSubmit = function () {
        var _this = this;
        this.connectionService.sendMessage(this.contactForm.value).subscribe(function () {
            alert('Your message has been sent.');
            _this.contactForm.reset();
            _this.disabledSubmitButton = true;
        }, function (error) {
            console.log('Error', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ContactusComponent.prototype, "oninput", null);
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.scss */ "./src/app/contactus/contactus.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _connection_service__WEBPACK_IMPORTED_MODULE_0__["ConnectionService"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/directives/compare-passwords.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/directives/compare-passwords.directive.ts ***!
  \***********************************************************/
/*! exports provided: ComparePasswordsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparePasswordsDirective", function() { return ComparePasswordsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComparePasswordsDirective = /** @class */ (function () {
    function ComparePasswordsDirective() {
    }
    ComparePasswordsDirective_1 = ComparePasswordsDirective;
    ComparePasswordsDirective.prototype.validate = function (control) {
        return control.value !== this.appComparePasswords
            ? { differentPasswords: true }
            : null;
    };
    var ComparePasswordsDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComparePasswordsDirective.prototype, "appComparePasswords", void 0);
    ComparePasswordsDirective = ComparePasswordsDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appComparePasswords]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: ComparePasswordsDirective_1,
                    multi: true
                }
            ]
        })
    ], ComparePasswordsDirective);
    return ComparePasswordsDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, fireAuth) {
        this.router = router;
        this.fireAuth = fireAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.fireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) {
            if (auth) {
                return true;
            }
            _this.router.navigate['/'];
            return false;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _node_modules_angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/modules/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_clients_clientspage_clientspage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/clients/clientspage/clientspage.component */ "./src/app/components/clients/clientspage/clientspage.component.ts");
/* harmony import */ var _components_chatpage_chatpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/chatpage/chatpage.component */ "./src/app/components/chatpage/chatpage.component.ts");
/* harmony import */ var _components_clients_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/clients/add-client/add-client.component */ "./src/app/components/clients/add-client/add-client.component.ts");
/* harmony import */ var _components_clients_client_details_clients_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/clients/client-details/clients-details.component */ "./src/app/components/clients/client-details/clients-details.component.ts");
/* harmony import */ var _components_clients_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/clients/edit-client/edit-client.component */ "./src/app/components/clients/edit-client/edit-client.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../connection.service */ "./src/app/connection.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var router = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] },
    { path: 'clients', component: _components_clients_clientspage_clientspage_component__WEBPACK_IMPORTED_MODULE_3__["ClientspageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'clients/add', component: _components_clients_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_5__["AddClientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'clients/details/:id', component: _components_clients_client_details_clients_details_component__WEBPACK_IMPORTED_MODULE_6__["ClientDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'clients/edit/:id', component: _components_clients_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_7__["EditClientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'chat', component: _components_chatpage_chatpage_component__WEBPACK_IMPORTED_MODULE_4__["ChatpageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'connectionservice', component: _connection_service__WEBPACK_IMPORTED_MODULE_10__["ConnectionService"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(router)],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(auth) {
        this.auth = auth;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.auth
                .signInWithEmailAndPassword(email, password)
                .then(function (user) { return resolve(user); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.signUp = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.auth
                .createUserWithEmailAndPassword(email, password)
                .then(function (user) { return resolve(user); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.logout = function () {
        this.auth.auth.signOut();
    };
    AuthService.prototype.getAuth = function () {
        return this.auth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) { return auth; }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/clients.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/clients.service.ts ***!
  \*********************************************/
/*! exports provided: ClientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsService", function() { return ClientsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsService = /** @class */ (function () {
    function ClientsService(firestore) {
        this.firestore = firestore;
        this.clientsCollection = this.firestore.collection('clients', function (ref) { return ref; });
    }
    ClientsService.prototype.getClients = function () {
        this.clients = this.clientsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        return this.clients;
    };
    ClientsService.prototype.addClient = function (client) {
        this.clientsCollection.add(client);
    };
    ClientsService.prototype.deleteClient = function (client) {
        this.firestore.doc("clients/" + client.id).delete();
    };
    ClientsService.prototype.getClient = function (id) {
        var client = this.firestore.doc("clients/" + id);
        return client.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
    };
    ClientsService.prototype.updateClient = function (client) {
        this.clientDoc = this.firestore.doc("clients/" + client.id);
        this.clientDoc.update(client);
    };
    ClientsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ClientsService);
    return ClientsService;
}());



/***/ }),

/***/ "./src/app/services/delete-modal.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/delete-modal.service.ts ***!
  \**************************************************/
/*! exports provided: DeleteModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModalService", function() { return DeleteModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteModalService = /** @class */ (function () {
    function DeleteModalService() {
        this.showModal = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    DeleteModalService.prototype.changeState = function (state) {
        this.showModal.next(state);
    };
    DeleteModalService.prototype.getState = function () {
        return this.showModal.asObservable();
    };
    DeleteModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DeleteModalService);
    return DeleteModalService;
}());



/***/ }),

/***/ "./src/app/services/messages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesService = /** @class */ (function () {
    function MessagesService(firestore) {
        this.firestore = firestore;
        this.messagesCollection = this.firestore.collection('messages', function (ref) {
            return ref.orderBy('date', 'desc');
        });
    }
    MessagesService.prototype.getMessages = function () {
        this.messages = this.messagesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        return this.messages;
    };
    MessagesService.prototype.addMessage = function (message) {
        this.messagesCollection.add(message);
    };
    MessagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/services/userform-animation.ts":
/*!************************************************!*\
  !*** ./src/app/services/userform-animation.ts ***!
  \************************************************/
/*! exports provided: UserFormAnimationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormAnimationService", function() { return UserFormAnimationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserFormAnimationService = /** @class */ (function () {
    function UserFormAnimationService() {
        this.signup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.login = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.active = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    UserFormAnimationService.prototype.toggle = function (type) {
        var _this = this;
        var active = this.active.getValue();
        var state = this[type].getValue();
        //  If a form is active and another one is going to be open close the active one and open the new one after its closed
        if (active && active !== type) {
            this[active].next(false);
            setTimeout(function () {
                _this[type].next(!state ? true : false);
                _this.active.next(type);
            }, this.animationTime + 100);
        }
        else {
            this[type].next(!state ? true : false);
            // If both forms are closed set active to null
            if (this.signup.getValue() === this.login.getValue()) {
                this.active.next(null);
            }
            else {
                this.active.next(type);
            }
        }
    };
    UserFormAnimationService.prototype.getState = function (type) {
        return this[type].asObservable();
    };
    UserFormAnimationService.prototype.setAnimationTime = function (time) {
        this.animationTime = time;
    };
    UserFormAnimationService.prototype.getActive = function () {
        return this.active.asObservable();
    };
    UserFormAnimationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserFormAnimationService);
    return UserFormAnimationService;
}());



/***/ }),

/***/ "./src/app/services/validation-errors.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/validation-errors.service.ts ***!
  \*******************************************************/
/*! exports provided: ValidationErrorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorsService", function() { return ValidationErrorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationErrorsService = /** @class */ (function () {
    function ValidationErrorsService() {
    }
    ValidationErrorsService.prototype.isInputInvalid = function (input) {
        if (input.errors && (input.touched || input.dirty)) {
            return true;
        }
        return false;
    };
    ValidationErrorsService.prototype.isErrorHidden = function (input, errorType) {
        if (input.errors &&
            input.errors[errorType] &&
            (input.dirty || input.touched)) {
            return false;
        }
        return true;
    };
    ValidationErrorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidationErrorsService);
    return ValidationErrorsService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAo7_kRM__t-j6coF6L9H7PRsKHRVZP0F8",
        authDomain: "employeems-417b8.firebaseapp.com",
        databaseURL: "https://employeems-417b8.firebaseio.com",
        projectId: "employeems-417b8",
        storageBucket: "employeems-417b8.appspot.com",
        messagingSenderId: "352420675066"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\EmployeeManagementSystem-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map