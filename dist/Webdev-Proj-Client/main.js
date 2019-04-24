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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/recipe-details/recipe-details.component */ "./src/app/components/recipe-details/recipe-details.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin-page/admin-page.component */ "./src/app/components/admin-page/admin-page.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");










var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: "search/:searchText", component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"] },
    { path: "search/:searchText/:recipeId", component: _components_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: "profile/:username", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: "admin", component: _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_8__["AdminPageComponent"] },
    { path: "**", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] } // last
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: \"Product Sans\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local(\"Open Sans\"), local(\"OpenSans\"),\r\n    url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2)\r\n      format(\"woff2\");\r\n}\r\n\r\n.font-box {\r\n  font-family: Product Sans;\r\n}\r\n\r\n.vertical-center {\r\n  min-height: 100%; /* Fallback for browsers do NOT support vh unit */\r\n  min-height: 100vh; /* These two lines are counted as one :-)       */\r\n\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjs7cUJBRW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCLEVBQUUsaURBQWlEO0VBQ25FLGlCQUFpQixFQUFFLGlEQUFpRDs7RUFFcEUsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJvZHVjdCBTYW5zXCI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgc3JjOiBsb2NhbChcIk9wZW4gU2Fuc1wiKSwgbG9jYWwoXCJPcGVuU2Fuc1wiKSxcclxuICAgIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcHJvZHVjdHNhbnMvdjUvSFl2Z1UyZkUyblJKdlo1SkZBdW13ZWdkbTBMWmRqcXI1LW9heVhTT2VmZy53b2ZmMilcclxuICAgICAgZm9ybWF0KFwid29mZjJcIik7XHJcbn1cclxuXHJcbi5mb250LWJveCB7XHJcbiAgZm9udC1mYW1pbHk6IFByb2R1Y3QgU2FucztcclxufVxyXG5cclxuLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTsgLyogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIGRvIE5PVCBzdXBwb3J0IHZoIHVuaXQgKi9cclxuICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogVGhlc2UgdHdvIGxpbmVzIGFyZSBjb3VudGVkIGFzIG9uZSA6LSkgICAgICAgKi9cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"font-box\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Webdev-Proj-Client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin-page/admin-page.component */ "./src/app/components/admin-page/admin-page.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _services_follow_service_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/follow.service.client */ "./src/app/services/follow.service.client.ts");
/* harmony import */ var _services_rating_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/rating.service.client */ "./src/app/services/rating.service.client.ts");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/like.service.client */ "./src/app/services/like.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_yummly_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/yummly.service.client */ "./src/app/services/yummly.service.client.ts");
/* harmony import */ var _components_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/recipe-details/recipe-details.component */ "./src/app/components/recipe-details/recipe-details.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__["AdminPageComponent"],
                _components_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_21__["RecipeDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot(),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["WavesModule"]
            ],
            providers: [
                _services_yummly_service_client__WEBPACK_IMPORTED_MODULE_20__["YummlyServiceClient"],
                _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_9__["RecipeServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_19__["UserServiceClient"],
                _services_like_service_client__WEBPACK_IMPORTED_MODULE_18__["LikeServiceClient"],
                _services_rating_service_client__WEBPACK_IMPORTED_MODULE_17__["RatingServiceClient"],
                _services_follow_service_client__WEBPACK_IMPORTED_MODULE_16__["FollowServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin-page/admin-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/admin-page/admin-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wbdv-navbar {\r\n  position: fixed;\r\n  top: 0px;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n\r\n.list-group-item.wbdv-user {\r\n  cursor: pointer;\r\n}\r\n\r\n.list-group-item.wbdv-recipe {\r\n  cursor: pointer;\r\n}\r\n\r\n.container-fluid.wbdv-profile {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  width: 90%;\r\n  padding-top: 50px;\r\n}\r\n\r\n.wbdv-nav {\r\n  margin-top:20px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.wbdv-nav .active {\r\n  background-color: #343A40;\r\n}\r\n\r\n.wbdv-selection {\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.wbdv-users-heading {\r\n  background-color: #343A40;\r\n  color: white;\r\n}\r\n\r\n.btn.btn-outline-light {\r\n  margin-right: 5px;\r\n}\r\n\r\n.list-group {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.btn.btn-danger.fa.fa-trash {\r\n  margin-right: 5px;\r\n}\r\n\r\n.btn.btn-primary.fa.fa-pencil {\r\n  margin-right: 5px;\r\n}\r\n\r\n.wbdv-pagination-component {\r\n  text-align: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1wYWdlL2FkbWluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1wYWdlL2FkbWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YmR2LW5hdmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ud2Jkdi11c2VyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ud2Jkdi1yZWNpcGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZC53YmR2LXByb2ZpbGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ud2Jkdi1uYXYge1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53YmR2LW5hdiAuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzQTQwO1xyXG59XHJcblxyXG4ud2Jkdi1zZWxlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLndiZHYtdXNlcnMtaGVhZGluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M0E0MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4uYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmJ0bi5idG4tZGFuZ2VyLmZhLmZhLXRyYXNoIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmJ0bi5idG4tcHJpbWFyeS5mYS5mYS1wZW5jaWwge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ud2Jkdi1wYWdpbmF0aW9uLWNvbXBvbmVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/admin-page/admin-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-page/admin-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<!--<nav class=\"navbar navbar-dark bg-dark justify-content-between wbdv-navbar\">\r\n  <h3 class=\"navbar-brand\">Admin</h3>\r\n  <form class=\"form-inline\">\r\n    <a routerLink=\"/profile\">\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"button\">\r\n        Profile\r\n      </button>\r\n    </a>\r\n    <a routerLink=\"/home\">\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"button\">\r\n        Home\r\n      </button>\r\n    </a>\r\n  </form>\r\n</nav> -->\r\n\r\n<div class=\"container-fluid wbdv-profile\">\r\n  <div class=\"wbdv-nav\">\r\n    <nav class=\"nav nav-pills nav-justified\">\r\n      <div\r\n        class=\"nav-item nav-link\"\r\n        [ngClass]=\"{ active: selection === 'Manage Users' }\"\r\n        (click)=\"changeSelection('Manage Users')\"\r\n      >\r\n        Manage Users\r\n      </div>\r\n      <div\r\n        class=\"nav-item nav-link\"\r\n        [ngClass]=\"{ active: selection === 'Manage Recipes' }\"\r\n        (click)=\"changeSelection('Manage Recipes')\"\r\n      >\r\n        Manage Recipes\r\n      </div>\r\n    </nav>\r\n  </div>\r\n\r\n  <div class=\"wbdv-selection\" *ngIf=\"selection === 'Manage Users'\">\r\n    <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" *ngIf=\"!newUser._id\">\r\n          Create a user\r\n        </h4>\r\n        <h4 class=\"modal-title\" *ngIf=\"newUser._id\">\r\n          Update a user\r\n        </h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          aria-label=\"Close\"\r\n          (click)=\"d('Cross click')\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div\r\n          class=\"alert alert-danger alert-dismissible fade show\"\r\n          role=\"alert\"\r\n          *ngIf=\"alertUsername == true\"\r\n        >\r\n          Username is already taken. Please try another username.\r\n          <button\r\n            type=\"button\"\r\n            class=\"close\"\r\n            data-dismiss=\"alert\"\r\n            (click)=\"removeUsernameAlert()\"\r\n            aria-label=\"Close\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Username</label>\r\n          <input\r\n            [(ngModel)]=\"newUser.username\"\r\n            [readonly]=\"newUser._id\"\r\n            placeholder=\"username\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Password</label>\r\n          <input\r\n            [(ngModel)]=\"newUser.password\"\r\n            [readonly]=\"newUser._id\"\r\n            placeholder=\"password\"\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>First Name</label>\r\n          <input\r\n            [(ngModel)]=\"newUser.firstName\"\r\n            placeholder=\"first name\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Last Name</label>\r\n          <input\r\n            [(ngModel)]=\"newUser.lastName\"\r\n            placeholder=\"last name\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Email</label>\r\n          <input\r\n            [(ngModel)]=\"newUser.email\"\r\n            placeholder=\"email address\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Role</label>\r\n          <select [(ngModel)]=\"newUser.role\" class=\"form-control\">\r\n            <option value=\"\" disabled selected\r\n              >What do you want the user to be?</option\r\n            >\r\n            <option value=\"FOODIE\">Foodie</option>\r\n            <option value=\"CHEF\">Chef</option>\r\n          </select>\r\n        </div>\r\n\r\n        <button\r\n          (click)=\"createUser()\"\r\n          *ngIf=\"!newUser._id\"\r\n          class=\"btn btn-dark btn-block\"\r\n        >\r\n          Add\r\n        </button>\r\n\r\n        <button\r\n          (click)=\"updateUser()\"\r\n          *ngIf=\"newUser._id\"\r\n          class=\"btn btn-dark btn-block\"\r\n        >\r\n          Update\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">\r\n          Close\r\n        </button>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <button\r\n      class=\"btn btn-dark btn-block mb-2\"\r\n      (click)=\"openAddUserModal(content2)\"\r\n    >\r\n      Add a user\r\n    </button>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-sm-12\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item wbdv-users-heading\">Chefs</li>\r\n          <li\r\n            *ngFor=\"let chef of chefs\"\r\n            (click)=\"navigateToProfile(chef.username)\"\r\n            class=\"list-group-item wbdv-user\"\r\n          >\r\n            {{ chef.username }}\r\n            <button\r\n              class=\"btn btn-danger fa fa-trash float-right\"\r\n              (click)=\"deleteUser(chef)\"\r\n            ></button>\r\n            <button\r\n              class=\"btn btn-primary fa fa-pencil-alt float-right\"\r\n              (click)=\"openEditModal(content2, chef)\"\r\n            ></button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"col-lg-6 col-sm-12\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item wbdv-users-heading\">Foodies</li>\r\n          <li\r\n            *ngFor=\"let customer of customers\"\r\n            (click)=\"navigateToProfile(customer.username)\"\r\n            class=\"list-group-item wbdv-user\"\r\n          >\r\n            {{ customer.username }}\r\n            <button\r\n              class=\"btn btn-danger fa fa-trash float-right\"\r\n              (click)=\"deleteUser(customer)\"\r\n            ></button>\r\n            <button\r\n              class=\"btn btn-primary fa fa-pencil-alt float-right\"\r\n              (click)=\"openEditModal(content2, customer)\"\r\n            ></button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wbdv-selection\" *ngIf=\"selection === 'Manage Recipes'\">\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" *ngIf=\"!newRecipe._id\">\r\n          Create a recipe\r\n        </h4>\r\n        <h4 class=\"modal-title\" *ngIf=\"newRecipe._id\">\r\n          Update a recipe\r\n        </h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          aria-label=\"Close\"\r\n          (click)=\"d('Cross click')\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n          <label>Recipe Name</label>\r\n          <input\r\n            [(ngModel)]=\"newRecipe.name\"\r\n            placeholder=\"recipe name\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Ingredients (Add each ingredient on a new line)</label>\r\n          <textarea\r\n            [(ngModel)]=\"newRecipe.ingredients\"\r\n            placeholder=\"ingredients\"\r\n            class=\"form-control\"\r\n          >\r\n          </textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label\r\n            >ImageUrl (Provide a square image of size at least 360x360)</label\r\n          >\r\n          <input\r\n            [(ngModel)]=\"newRecipe.imageUrl\"\r\n            placeholder=\"image url of recipe\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Total time required</label>\r\n          <input\r\n            [(ngModel)]=\"newRecipe.totalTime\"\r\n            placeholder=\"total time required\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Number of Servings</label>\r\n          <input\r\n            [(ngModel)]=\"newRecipe.numberOfServings\"\r\n            placeholder=\"number of servings\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n\r\n        <button\r\n          (click)=\"createRecipe()\"\r\n          *ngIf=\"!newRecipe._id\"\r\n          class=\"btn btn-dark btn-block\"\r\n        >\r\n          Add\r\n        </button>\r\n        <button\r\n          (click)=\"updateRecipe()\"\r\n          *ngIf=\"newRecipe._id\"\r\n          class=\"btn btn-dark btn-block\"\r\n        >\r\n          Update\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">\r\n          Close\r\n        </button>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-sm-12\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item wbdv-users-heading\">Chef's Special</li>\r\n          <li\r\n            *ngFor=\"let chefSpecial of chefSpecials\"\r\n            (click)=\"navigateToRecipe(chefSpecial)\"\r\n            class=\"list-group-item wbdv-recipe\"\r\n          >\r\n            {{ chefSpecial.name }}\r\n            <button\r\n              (click)=\"deleteRecipe(chefSpecial)\"\r\n              class=\"btn btn-danger fa fa-trash float-right\"\r\n            ></button>\r\n            <button\r\n              (click)=\"openEditModal(content, chefSpecial)\"\r\n              class=\"btn btn-primary fa fa-pencil-alt float-right\"\r\n            ></button>\r\n          </li>\r\n        </ul>\r\n        <div class=\"wbdv-pagination-component\" *ngIf=\"chefSpecials.length > 0\">\r\n          <button\r\n            type=\"button\"\r\n            *ngIf=\"chefCurrentPage !== chefFirstPage\"\r\n            (click)=\"loadPageChefRecipes(chefCurrentPage - 1)\"\r\n            class=\"btn btn-primary wbdv-pagination-button\"\r\n          >\r\n            Previous\r\n          </button>\r\n          Page {{ chefCurrentPage }} of {{ chefLastPage }}\r\n          <button\r\n            type=\"button\"\r\n            *ngIf=\"chefCurrentPage !== chefLastPage\"\r\n            (click)=\"loadPageChefRecipes(chefCurrentPage + 1)\"\r\n            class=\"btn btn-primary wbdv-pagination-button\"\r\n          >\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-6 col-sm-12\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item wbdv-users-heading\">Yummly's Special</li>\r\n          <li\r\n            *ngFor=\"let yummlySpecial of yummlySpecials\"\r\n            (click)=\"navigateToRecipe(yummlySpecial)\"\r\n            class=\"list-group-item wbdv-recipe\"\r\n          >\r\n            {{ yummlySpecial.name }}\r\n            <button\r\n              (click)=\"deleteRecipe(yummlySpecial)\"\r\n              class=\"btn btn-danger fa fa-trash float-right\"\r\n            ></button>\r\n          </li>\r\n        </ul>\r\n        <div\r\n          class=\"wbdv-pagination-component\"\r\n          *ngIf=\"yummlySpecials.length > 0\"\r\n        >\r\n          <button\r\n            type=\"button\"\r\n            *ngIf=\"yummlyCurrentPage !== yummlyFirstPage\"\r\n            (click)=\"loadPageYummlyRecipes(yummlyCurrentPage - 1)\"\r\n            class=\"btn btn-primary wbdv-pagination-button\"\r\n          >\r\n            Previous\r\n          </button>\r\n          Page {{ yummlyCurrentPage }} of {{ yummlyLastPage }}\r\n          <button\r\n            type=\"button\"\r\n            *ngIf=\"yummlyCurrentPage !== yummlyLastPage\"\r\n            (click)=\"loadPageYummlyRecipes(yummlyCurrentPage + 1)\"\r\n            class=\"btn btn-primary wbdv-pagination-button\"\r\n          >\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/admin-page/admin-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-page/admin-page.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");
/* harmony import */ var _models_recipe_model_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/recipe.model.client */ "./src/app/models/recipe.model.client.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent(userService, recipeService, modalService, router) {
        this.userService = userService;
        this.recipeService = recipeService;
        this.modalService = modalService;
        this.router = router;
        this.chefs = [];
        this.critics = [];
        this.customers = [];
        this.allChefSpecials = [];
        this.chefSpecials = [];
        this.yummlySpecials = [];
        this.allYummlySpecials = [];
        this.selection = "Manage Users";
        this.newRecipe = new _models_recipe_model_client__WEBPACK_IMPORTED_MODULE_6__["Recipe"]();
        this.newUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.alertUsername = false;
        this.yummlyCurrentPage = 1;
        this.yummlyFirstPage = 1;
        this.yummlyLastPage = 0;
        this.chefCurrentPage = 1;
        this.chefFirstPage = 1;
        this.chefLastPage = 0;
        this.currentUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    AdminPageComponent.prototype.loadPageChefRecipes = function (pageNumber) {
        this.chefCurrentPage = pageNumber;
        var startIndex = (pageNumber - 1) * 10;
        this.chefSpecials = this.allChefSpecials.slice(startIndex, startIndex + 10);
    };
    AdminPageComponent.prototype.loadPageYummlyRecipes = function (pageNumber) {
        this.yummlyCurrentPage = pageNumber;
        var startIndex = (pageNumber - 1) * 10;
        this.yummlySpecials = this.allYummlySpecials.slice(startIndex, startIndex + 10);
    };
    AdminPageComponent.prototype.deleteUser = function (user) {
        var _this = this;
        event.stopPropagation();
        this.recipeService
            .findCreatedRecipesForUser(user._id)
            .then(function (recipes) {
            return recipes.map(function (recipe) { return _this.recipeService.deleteRecipe(recipe._id); });
        })
            .then(function () { return _this.userService.deleteUser(user._id); })
            .then(function () {
            _this.loadAllUsers();
            _this.loadAllRecipes();
        });
    };
    AdminPageComponent.prototype.createUser = function () {
        var _this = this;
        this.alertUsername = false;
        this.userService.createUserByAdmin(this.newUser).then(function (user) {
            if (user.username) {
                _this.loadAllUsers();
                _this.modalReference.close();
                _this.alertUsername = false;
            }
            else {
                _this.alertUsername = true;
            }
        });
    };
    AdminPageComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUserByAdmin(this.newUser).then(function () {
            _this.loadAllUsers();
            _this.modalReference.close();
        });
    };
    AdminPageComponent.prototype.deleteRecipe = function (recipe) {
        var _this = this;
        event.stopPropagation();
        this.recipeService
            .deleteRecipe(recipe._id)
            .then(function () { return _this.loadAllRecipes(); });
    };
    AdminPageComponent.prototype.updateRecipe = function () {
        var _this = this;
        this.recipeService.updateRecipe(this.newRecipe).then(function () {
            _this.loadAllRecipes();
            _this.modalReference.close();
        });
    };
    AdminPageComponent.prototype.navigateToRecipe = function (recipe) {
        if (recipe.yummlyId) {
            this.router.navigate(["search/" + recipe.name + "/" + recipe.yummlyId]);
        }
        else {
            this.router.navigate([
                "search/" + recipe.name + "/foodfood-" + recipe._id
            ]);
        }
    };
    AdminPageComponent.prototype.navigateToProfile = function (username) {
        this.router.navigate(["profile/" + username]);
    };
    AdminPageComponent.prototype.changeSelection = function (selection) {
        this.selection = selection;
    };
    AdminPageComponent.prototype.open = function (content) {
        var _this = this;
        this.modalReference = this.modalService.open(content, { size: "lg" });
        this.modalReference.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AdminPageComponent.prototype.openAddUserModal = function (content) {
        event.stopPropagation();
        this.newUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.newRecipe = new _models_recipe_model_client__WEBPACK_IMPORTED_MODULE_6__["Recipe"]();
        this.newUser["role"] = "";
        this.open(content);
    };
    AdminPageComponent.prototype.openEditModal = function (content, entity) {
        event.stopPropagation();
        if (entity["username"]) {
            this.newUser = entity;
        }
        else {
            this.newRecipe = entity;
        }
        this.open(content);
    };
    AdminPageComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    AdminPageComponent.prototype.removeUsernameAlert = function () {
        this.alertUsername = false;
    };
    AdminPageComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.findAllUsers().then(function (users) {
            var allUsers = users.filter(function (user) { return user.role !== "ADMIN"; });
            _this.chefs = allUsers.filter(function (user) { return user.role === "CHEF"; });
            _this.customers = allUsers.filter(function (user) { return user.role === "FOODIE"; });
        });
    };
    AdminPageComponent.prototype.loadAllRecipes = function () {
        var _this = this;
        this.recipeService.findAllRecipes().then(function (recipes) {
            var allRecipes = recipes;
            _this.allChefSpecials = allRecipes.filter(function (recipe) { return recipe["createdBy"]; });
            _this.chefLastPage = Math.ceil(_this.allChefSpecials.length / 10);
            _this.loadPageChefRecipes(_this.chefFirstPage);
            _this.allYummlySpecials = allRecipes.filter(function (recipe) { return !recipe["createdBy"]; });
            _this.yummlyLastPage = Math.ceil(_this.allYummlySpecials.length / 10);
            _this.loadPageYummlyRecipes(_this.yummlyFirstPage);
        });
    };
    AdminPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile().then(function (user) {
            if (user["role"]) {
                if (user["role"] === "ADMIN") {
                    _this.currentUser = user;
                }
                else {
                    _this.router.navigate(["profile"]);
                }
            }
            else {
                _this.router.navigate(["login"]);
            }
        });
        this.loadAllUsers();
        this.loadAllRecipes();
    };
    AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "admin-page",
            template: __webpack_require__(/*! ./admin-page.component.html */ "./src/app/components/admin-page/admin-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/components/admin-page/admin-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_5__["RecipeServiceClient"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wbdv-top-container {\r\n  padding-top: 60px;\r\n}\r\n\r\n.wbdv-bottom-container {\r\n  margin-top: 40px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.wbdv-bottom-container .card {\r\n  cursor: pointer;\r\n}\r\n\r\n.view {\r\n  -webkit-filter: brightness(70%);\r\n          filter: brightness(70%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Jkdi10b3AtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuLndiZHYtYm90dG9tLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ud2Jkdi1ib3R0b20tY29udGFpbmVyIC5jYXJkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52aWV3IHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n\r\n<div class=\"wbdv-top-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\" *ngIf=\"likedRecipes !== undefined\">\r\n      <h5 class=\"h5\">Your Favourites</h5>\r\n      <ul class=\"list-group\">\r\n        <li\r\n          *ngFor=\"let likedRecipe of likedRecipes\"\r\n          (click)=\"navigateToRecipe(likedRecipe)\"\r\n          class=\"list-group-item wbdv-liked-recipe\"\r\n        >\r\n          <b>{{ likedRecipe.recipe.name }}</b>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-6\" *ngIf=\"topRatedRecipes !== undefined\">\r\n      <h5 class=\"h5\">Recipes With Least Ingredients</h5>\r\n      <ul class=\"list-group\">\r\n        <li\r\n          *ngFor=\"let ratedRecipe of topRatedRecipes\"\r\n          (click)=\"navigateToRecipe(ratedRecipe)\"\r\n          class=\"list-group-item wbdv-liked-recipe\"\r\n        >\r\n          <b>{{ ratedRecipe.name }}</b>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<h2>Recently Added Recipes</h2>\r\n\r\n<div class=\"container wbdv-bottom-container\">\r\n  <div class=\"card-columns\">\r\n    <div\r\n      class=\"card\"\r\n      *ngFor=\"let dish of dishes\"\r\n      (click)=\"navigate(dish.id, dish.recipeName)\"\r\n    >\r\n      <img\r\n        class=\"card-img-top\"\r\n        src=\"{{ getImageUrl(dish.smallImageUrls[0]) }}\"\r\n      />\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{ text_truncate(dish.recipeName) }}</h5>\r\n        <p class=\"card-text\">{{ dish.sourceDisplayName }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_yummly_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/yummly.service.client */ "./src/app/services/yummly.service.client.ts");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/like.service.client */ "./src/app/services/like.service.client.ts");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, likeService, recipeService, yummlyService) {
        this.router = router;
        this.likeService = likeService;
        this.recipeService = recipeService;
        this.yummlyService = yummlyService;
    }
    HomeComponent.prototype.getImageUrl = function (url) {
        return url.replace("s90", "s320-c-rj-v1-e365");
    };
    HomeComponent.prototype.text_truncate = function (name) {
        if (name.length > 35) {
            return name.substring(0, 32) + " ...";
        }
        else {
            return name;
        }
    };
    HomeComponent.prototype.navigate = function (yummlyId, recipeName) {
        this.router.navigate(["search/" + recipeName + "/" + yummlyId]);
    };
    HomeComponent.prototype.navigateToRecipe = function (recipe) {
        var likedRecipe = { recipe: recipe };
        if (recipe.recipe == undefined) {
            likedRecipe.recipe = recipe;
        }
        else {
            likedRecipe = recipe;
        }
        if (likedRecipe.recipe.yummlyId) {
            this.router.navigate([
                "search/" + likedRecipe.recipe.name + "/" + likedRecipe.recipe.yummlyId
            ]);
        }
        else {
            this.router.navigate([
                "search/" +
                    likedRecipe.recipe.name +
                    "/foodfood-" +
                    likedRecipe.recipe._id
            ]);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.yummlyService.findHomePageRecipes().then(function (res) {
            _this.dishes = res.matches;
        });
        this.likeService
            .findLikedRecipesForCurrentUser()
            .then(function (recipes) { return (_this.likedRecipes = recipes); })
            .then(function () { return (_this.likedRecipes = _this.likedRecipes.slice(0, 5)); });
        this.recipeService
            .findAllRecipes()
            .then(function (recipes) { return (_this.topRatedRecipes = recipes); })
            .then(function () {
            _this.topRatedRecipes = _this.topRatedRecipes.slice(0, 5);
            _this.topRatedRecipes = _this.topRatedRecipes.sort(function (a, b) {
                try {
                    var aNo = a.numberOfServings;
                    var bNo = b.numberOfServings;
                    return aNo - bNo;
                }
                catch (e) {
                    return 0;
                }
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_like_service_client__WEBPACK_IMPORTED_MODULE_4__["LikeServiceClient"],
            _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_5__["RecipeServiceClient"],
            src_app_services_yummly_service_client__WEBPACK_IMPORTED_MODULE_3__["YummlyServiceClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wbdv-login {\r\n  margin-top: 20px;\r\n  width: 60%;\r\n  padding: 60px;\r\n}\r\n\r\n.btn.btn-outline-light {\r\n  margin-right: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Jkdi1sb2dpbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogNjAlO1xyXG4gIHBhZGRpbmc6IDYwcHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<!-- <nav class=\"navbar navbar-dark bg-dark justify-content-between wbdv-navbar\">\r\n  <h3 class=\"navbar-brand\">Login</h3>\r\n  <form class=\"form-inline\">\r\n    <a routerLink=\"/register\">\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0\"\r\n              type=\"button\">\r\n        Register\r\n      </button>\r\n    </a>\r\n    <a routerLink=\"/home\">\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0\"\r\n              type=\"button\">\r\n        Home\r\n      </button>\r\n    </a>\r\n  </form>\r\n</nav> -->\r\n\r\n<div class=\"container-fluid wbdv-login\">\r\n  <div class=\"alert alert-danger alert-dismissible fade show\"\r\n       role=\"alert\"\r\n       *ngIf=\"alertUsername == true\">\r\n    Invalid username or password. Please try again.\r\n    <button type=\"button\"\r\n            class=\"close\"\r\n            data-dismiss=\"alert\"\r\n            (click)=\"removeUsernameAlert()\"\r\n            aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input [(ngModel)]=\"username\"\r\n           placeholder=\"username\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input [(ngModel)]=\"password\"\r\n           placeholder=\"password\"\r\n           type=\"password\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <button (click)=\"login(username, password)\"\r\n          class=\"btn btn-primary btn-block\">\r\n    Login\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.alertUsername = false;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService.login(username, password).then(function (user) {
            if (user.username) {
                _this.alertUsername = false;
                _this.router.navigate(["profile"]);
            }
            else {
                _this.alertUsername = true;
            }
        });
    };
    LoginComponent.prototype.removeUsernameAlert = function () {
        this.alertUsername = false;
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.wbdv-navbar .navbar-brand {\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.btn-outline-light {\r\n  margin-right: 5px;\r\n}\r\n\r\n.btn.btn-dark {\r\n  margin-right: 15px;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n}\r\n\r\n.col-3.wbdv-login-register {\r\n  padding-right: 0px;\r\n}\r\n\r\n.col-11.wbdv-search-input {\r\n  padding-right: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ud2Jkdi1uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1vdXRsaW5lLWxpZ2h0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmJ0bi5idG4tZGFyayB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbC0zLndiZHYtbG9naW4tcmVnaXN0ZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmNvbC0xMS53YmR2LXNlYXJjaC1pbnB1dCB7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top wbdv-navbar\">\r\n  <h3 class=\"navbar-brand\" (click)=\"redirectToHome()\">\r\n    FoodFood\r\n  </h3>\r\n  <button\r\n    class=\"navbar-toggler\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\"\r\n    (click)=\"isCollapsed = !isCollapsed\"\r\n    [attr.aria-expanded]=\"!isCollapsed\"\r\n    aria-label=\"Toggle navigation\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div\r\n    class=\"collapse navbar-collapse\"\r\n    [ngbCollapse]=\"isCollapsed\"\r\n    id=\"navbarSupportedContent\"\r\n  >\r\n    <ul class=\"navbar-nav mr-auto\"></ul>\r\n\r\n    <div class=\"form-inline my-2 my-lg-0\">\r\n      <input\r\n        class=\"form-control wbdv-navbar-search\"\r\n        [(ngModel)]=\"searchText\"\r\n        (keyup.enter)=\"navigate(searchText)\"\r\n        placeholder=\"Search for recipes\"\r\n      />\r\n      <button\r\n        type=\"button\"\r\n        (click)=\"navigate(searchText)\"\r\n        class=\"btn btn-dark wbdv-search-button\"\r\n      >\r\n        <span class=\"fa fa-search\"></span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"form-inline my-2 my-lg-0\" *ngIf=\"!currentUser['username']\">\r\n      <a routerLink=\"/login\">\r\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"button\">\r\n          Login\r\n        </button>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-inline my-2 my-lg-0\" *ngIf=\"!currentUser['username']\">\r\n      <a routerLink=\"/register\">\r\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"button\">\r\n          Register\r\n        </button>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"form-inline my-2 my-lg-0\" *ngIf=\"currentUser['username']\">\r\n      <h3 class=\"navbar-brand float-right\">\r\n        <div (click)=\"goToProfile()\" class=\"wbdv-username-anchor\">\r\n          {{ currentUser[\"username\"] }}\r\n          <i class=\"fa fa-lg fa-user-circle-o\"></i>\r\n        </div>\r\n      </h3>\r\n    </div>\r\n    <div class=\"form-inline my-2 my-lg-0\" *ngIf=\"currentUser['username']\">\r\n      <button\r\n        class=\"btn btn-outline-light my-2 my-sm-0\"\r\n        (click)=\"logout()\"\r\n        type=\"button\"\r\n      >\r\n        Logout\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"form-inline my-2 my-lg-0\" *ngIf=\"currentUser['role'] === 'ADMIN'\">\r\n      <a routerLink=\"/admin\">\r\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"button\">\r\n          Admin Page\r\n        </button>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user.model.client */ "./src/app/models/user.model.client.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, route, userService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.searchText = "";
        this.currentUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.isCollapsed = true;
        this.route.params.subscribe(function (params) { return (_this.searchText = params["searchText"]); });
    }
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().then(function () { return _this.router.navigate(["login"]); });
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Init");
        this.userService.profile().then(function (response) {
            _this.currentUser = response;
            console.log(_this.currentUser);
        });
    };
    NavbarComponent.prototype.navigate = function (searchText) {
        this.router.navigate(["search/" + searchText]);
    };
    NavbarComponent.prototype.goToProfile = function () {
        this.router.navigate(["profile"]);
    };
    NavbarComponent.prototype.redirectToHome = function () {
        this.router.navigate(["home"]);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group.wbdv-profile {\r\n  margin-top: 20px;\r\n}\r\n\r\n.btn.btn-outline-light {\r\n  margin-right: 5px;\r\n}\r\n\r\n.container-fluid.wbdv-profile {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  width: 90%;\r\n  padding-top: 50px;\r\n}\r\n\r\n.wbdv-nav {\r\n  margin-top:20px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.wbdv-nav .active {\r\n  background-color: #343A40;\r\n}\r\n\r\n.wbdv-selection {\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.list-group-item.wbdv-liked-recipe {\r\n  cursor: pointer;\r\n}\r\n\r\n.list-group-item.wbdv-rated-recipe {\r\n  cursor: pointer;\r\n}\r\n\r\n.list-group-item.wbdv-created-recipe {\r\n  cursor: pointer;\r\n}\r\n\r\n.list-group-item.wbdv-follower {\r\n  cursor: pointer;\r\n}\r\n\r\n.list-group-item.wbdv-following {\r\n  cursor: pointer;\r\n}\r\n\r\n.wbdv-rated {\r\n  border: none;\r\n  float: right;\r\n}\r\n\r\n.wbdv-rated .highlight ~ label {\r\n  color: #e16120;\r\n}\r\n\r\n.wbdv-rated > input {\r\n  display: none;\r\n}\r\n\r\n.wbdv-rated > label:before {\r\n  margin: 5px;\r\n  font-size: 1.25em;\r\n  font-family: FontAwesome;\r\n  display: inline-block;\r\n  content: \"\\f005\";\r\n}\r\n\r\n.wbdv-rated > label {\r\n  color: #ddd;\r\n  float: right;\r\n}\r\n\r\n.wbdv-review {\r\n  white-space: normal;\r\n  width: 100%;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.btn.btn-danger.fa.fa-trash {\r\n  margin-right: 5px;\r\n}\r\n\r\n.btn.btn-primary.fa.fa-pencil {\r\n  margin-right: 5px;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n}\r\n\r\n.col-11.wbdv-search-input {\r\n  padding-right: 0px;\r\n}\r\n\r\n.btn.btn-dark {\r\n  margin-right: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC53YmR2LXByb2ZpbGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkLndiZHYtcHJvZmlsZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi53YmR2LW5hdiB7XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndiZHYtbmF2IC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNBNDA7XHJcbn1cclxuXHJcbi53YmR2LXNlbGVjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLndiZHYtbGlrZWQtcmVjaXBlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ud2Jkdi1yYXRlZC1yZWNpcGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS53YmR2LWNyZWF0ZWQtcmVjaXBlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ud2Jkdi1mb2xsb3dlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLndiZHYtZm9sbG93aW5nIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53YmR2LXJhdGVkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ud2Jkdi1yYXRlZCAuaGlnaGxpZ2h0IH4gbGFiZWwge1xyXG4gIGNvbG9yOiAjZTE2MTIwO1xyXG59XHJcblxyXG4ud2Jkdi1yYXRlZCA+IGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ud2Jkdi1yYXRlZCA+IGxhYmVsOmJlZm9yZSB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb250ZW50OiBcIlxcZjAwNVwiO1xyXG59XHJcblxyXG4ud2Jkdi1yYXRlZCA+IGxhYmVsIHtcclxuICBjb2xvcjogI2RkZDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi53YmR2LXJldmlldyB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB3aWR0aDogMTAwJTtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5idG4uYnRuLWRhbmdlci5mYS5mYS10cmFzaCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLXByaW1hcnkuZmEuZmEtcGVuY2lsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb2wtMTEud2Jkdi1zZWFyY2gtaW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmJ0bi5idG4tZGFyayB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <a routerLink=\"/home\">\r\n    <h3 class=\"navbar-brand\">\r\n      FoodFood\r\n    </h3>\r\n  </a>\r\n  <button\r\n    class=\"navbar-toggler\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\"\r\n    (click)=\"isCollapsed = !isCollapsed\"\r\n    [attr.aria-expanded]=\"!isCollapsed\"\r\n    aria-label=\"Toggle navigation\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div\r\n    class=\"collapse navbar-collapse\"\r\n    [ngbCollapse]=\"isCollapsed\"\r\n    id=\"navbarSupportedContent\"\r\n  >\r\n    <ul class=\"navbar-nav mr-auto\"></ul>\r\n\r\n    <div class=\"form-inline my-2 my-lg-0\">\r\n      <input\r\n        class=\"form-control wbdv-navbar-search\"\r\n        [(ngModel)]=\"searchText\"\r\n        (keyup.enter)=\"navigate(searchText)\"\r\n        placeholder=\"Search for recipes\"\r\n      />\r\n      <button\r\n        type=\"button\"\r\n        (click)=\"navigate(searchText)\"\r\n        class=\"btn btn-dark wbdv-search-button\"\r\n      >\r\n        <span class=\"fa fa-search\"></span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"form-inline my-2 my-lg-0\">\r\n      <button\r\n        class=\"btn btn-outline-light my-2 my-sm-0\"\r\n        (click)=\"logout()\"\r\n        type=\"button\"\r\n      >\r\n        Logout\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"form-inline my-2 my-lg-0\" *ngIf=\"user['role'] === 'ADMIN'\">\r\n      <a routerLink=\"/admin\">\r\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"button\">\r\n          Admin Page\r\n        </button>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav> -->\r\n<navbar></navbar>\r\n\r\n\r\n\r\n<div class=\"container-fluid wbdv-profile\">\r\n  <div class=\"accordion\" id=\"accordionExample\">\r\n    <div class=\"card\" *ngIf=\"notSelfProfile\">\r\n      <button\r\n        class=\"btn btn-link\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\"#collapseP\"\r\n        aria-expanded=\"true\"\r\n        aria-controls=\"collapseP\"\r\n      >\r\n        <div class=\"card-header\" id=\"headingP\">\r\n          <h5 class=\"mb-0\">\r\n            Profile\r\n          </h5>\r\n        </div>\r\n      </button>\r\n\r\n      <div\r\n        id=\"collapseP\"\r\n        class=\"collapse show\"\r\n        aria-labelledby=\"headingP\"\r\n        data-parent=\"#accordionExample\"\r\n      >\r\n        <div class=\"card-body wbdv-selection\">\r\n\r\n          <button\r\n            class=\"btn btn-success wbdv-follow\"\r\n            *ngIf=\"!profileUser.username || (!isUserFollowed && profileUser.role !== 'Admin')\"\r\n            (click)=\"follow()\"\r\n          >\r\n            Follow\r\n          </button>\r\n          <button\r\n            class=\"btn btn-warning wbdv-unfollow\"\r\n            *ngIf=\"isUserFollowed\"\r\n            (click)=\"unfollow()\"\r\n          >\r\n            UnFollow\r\n          </button>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n\r\n            <input\r\n              readonly\r\n              [(ngModel)]=\"profileUser['username']\"\r\n              placeholder=\"username\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>First Name</label>\r\n            <input\r\n              readonly\r\n              [(ngModel)]=\"profileUser['firstName']\"\r\n              placeholder=\"first name\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Last Name</label>\r\n            <input\r\n              readonly\r\n              [(ngModel)]=\"profileUser['lastName']\"\r\n              placeholder=\"lastName\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input\r\n              readonly\r\n              [(ngModel)]=\"profileUser['email']\"\r\n              placeholder=\"email\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Role</label>\r\n            <input\r\n              readonly\r\n              [(ngModel)]=\"user['role']\"\r\n              placeholder=\"role\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"card\" *ngIf=\"!notSelfProfile\">\r\n      <button\r\n        class=\"btn btn-link\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\"#collapseOne\"\r\n        aria-expanded=\"true\"\r\n        aria-controls=\"collapseOne\"\r\n      >\r\n        <div class=\"card-header\" id=\"headingOne\">\r\n          <h5 class=\"mb-0\">\r\n            Update Profile\r\n          </h5>\r\n        </div>\r\n      </button>\r\n\r\n      <div\r\n        id=\"collapseOne\"\r\n        class=\"collapse show\"\r\n        aria-labelledby=\"headingOne\"\r\n        data-parent=\"#accordionExample\"\r\n      >\r\n        <div class=\"card-body wbdv-selection\">\r\n          <div\r\n            class=\"alert alert-success alert-dismissible fade show\"\r\n            role=\"alert\"\r\n            *ngIf=\"alertSuccess == true\"\r\n          >\r\n            Profile updated successfully.\r\n            <button\r\n              type=\"button\"\r\n              class=\"close\"\r\n              data-dismiss=\"alert\"\r\n              (click)=\"removeAlert()\"\r\n              aria-label=\"Close\"\r\n            >\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n\r\n            <input\r\n              readonly\r\n              [(ngModel)]=\"user['username']\"\r\n              placeholder=\"username\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>First Name</label>\r\n            <input\r\n              [(ngModel)]=\"user['firstName']\"\r\n              placeholder=\"first name\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Last Name</label>\r\n            <input\r\n              [(ngModel)]=\"user['lastName']\"\r\n              placeholder=\"lastName\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input\r\n              [(ngModel)]=\"user['email']\"\r\n              placeholder=\"email\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Role</label>\r\n            <input\r\n              readonly\r\n              [(ngModel)]=\"user['role']\"\r\n              placeholder=\"role\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n\r\n          <button (click)=\"update(user)\" class=\"btn btn-dark btn-block\">\r\n            Update\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\" *ngIf=\"user.role != 'ADMIN'\">\r\n      <button\r\n        class=\"btn btn-link collapsed\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\"#collapseTwo\"\r\n        aria-expanded=\"false\"\r\n        aria-controls=\"collapseTwo\"\r\n      >\r\n        <div class=\"card-header\" id=\"headingTwo\">\r\n          <h5 class=\"mb-0\">\r\n            Liked Recipes\r\n          </h5>\r\n        </div>\r\n      </button>\r\n\r\n      <div\r\n        id=\"collapseTwo\"\r\n        class=\"collapse\"\r\n        aria-labelledby=\"headingTwo\"\r\n        data-parent=\"#accordionExample\"\r\n      >\r\n        <div class=\"card-body\">\r\n          <ul class=\"list-group\">\r\n            <li\r\n              *ngFor=\"let likedRecipe of likedRecipes\"\r\n              (click)=\"navigateToRecipe(likedRecipe)\"\r\n              class=\"list-group-item wbdv-liked-recipe\"\r\n            >\r\n              <b>{{ likedRecipe.recipe.name }}</b>\r\n              <button\r\n                class=\"btn btn-warning float-right\"\r\n                (click)=\"unlike(likedRecipe)\"\r\n                *ngIf=\"!notSelfProfile\"\r\n              >\r\n                Unlike\r\n              </button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card\" *ngIf=\"user.role != 'ADMIN'\">\r\n        <button\r\n          class=\"btn btn-link collapsed\"\r\n          type=\"button\"\r\n          data-toggle=\"collapse\"\r\n          data-target=\"#collapseThree\"\r\n          aria-expanded=\"false\"\r\n          aria-controls=\"collapseThree\"\r\n        >\r\n          <div class=\"card-header\" id=\"headingThree\">\r\n            <h5 class=\"mb-0\">\r\n              Rated Recipes\r\n            </h5>\r\n          </div>\r\n        </button>\r\n\r\n        <div\r\n          id=\"collapseThree\"\r\n          class=\"collapse\"\r\n          aria-labelledby=\"headingThree\"\r\n          data-parent=\"#accordionExample\"\r\n        >\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n              <li\r\n                *ngFor=\"let ratedRecipe of ratedRecipes\"\r\n                (click)=\"navigateToRecipe(ratedRecipe)\"\r\n                class=\"list-group-item wbdv-rated-recipe\"\r\n              >\r\n                <b>{{ ratedRecipe.recipe.name }}</b>\r\n\r\n                <div class=\"wbdv-rated\">\r\n                  <input\r\n                    type=\"radio\"\r\n                    id=\"star5a\"\r\n                    [ngClass]=\"{ highlight: ratedRecipe.rating === 5 }\"\r\n                  />\r\n                  <label for=\"star5a\" title=\"OUTSTANDING\"> </label>\r\n                  <input\r\n                    type=\"radio\"\r\n                    id=\"star4a\"\r\n                    [ngClass]=\"{ highlight: ratedRecipe.rating === 4 }\"\r\n                  />\r\n                  <label for=\"star4a\" title=\"REALLY GOOD\"> </label>\r\n                  <input\r\n                    type=\"radio\"\r\n                    id=\"star3a\"\r\n                    [ngClass]=\"{ highlight: ratedRecipe.rating === 3 }\"\r\n                  />\r\n                  <label for=\"star3a\" title=\"JUST GOOD\"> </label>\r\n                  <input\r\n                    type=\"radio\"\r\n                    id=\"star2a\"\r\n                    [ngClass]=\"{ highlight: ratedRecipe.rating === 2 }\"\r\n                  />\r\n                  <label for=\"star2a\" title=\"SO SO\"> </label>\r\n                  <input\r\n                    type=\"radio\"\r\n                    id=\"star1a\"\r\n                    [ngClass]=\"{ highlight: ratedRecipe.rating === 1 }\"\r\n                  />\r\n                  <label for=\"star1a\" title=\"DIDN'T LIKE IT\"> </label>\r\n                </div>\r\n\r\n                <div class=\"wbdv-review\">{{ ratedRecipe.review }}</div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card\" *ngIf=\"user.role != 'ADMIN'\">\r\n        <button\r\n          class=\"btn btn-link collapsed\"\r\n          type=\"button\"\r\n          data-toggle=\"collapse\"\r\n          data-target=\"#collapseFour\"\r\n          aria-expanded=\"false\"\r\n          aria-controls=\"collapseFour\"\r\n        >\r\n          <div class=\"card-header\" id=\"headingFour\">\r\n            <h5 class=\"mb-0\">\r\n              Followers\r\n            </h5>\r\n          </div>\r\n        </button>\r\n\r\n        <div\r\n          id=\"collapseFour\"\r\n          class=\"collapse\"\r\n          aria-labelledby=\"headingFour\"\r\n          data-parent=\"#accordionExample\"\r\n        >\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n              <li\r\n                *ngFor=\"let follower of followers\"\r\n                (click)=\"navigateToFollowerProfile(follower)\"\r\n                class=\"list-group-item wbdv-follower\"\r\n              >\r\n                <b>{{ follower.from.username }}</b>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card\" *ngIf=\"user.role != 'ADMIN'\">\r\n        <button\r\n          class=\"btn btn-link collapsed\"\r\n          type=\"button\"\r\n          data-toggle=\"collapse\"\r\n          data-target=\"#collapseFive\"\r\n          aria-expanded=\"false\"\r\n          aria-controls=\"collapseFive\"\r\n        >\r\n          <div class=\"card-header\" id=\"headingFive\">\r\n            <h5 class=\"mb-0\">\r\n              Following\r\n            </h5>\r\n          </div>\r\n        </button>\r\n\r\n        <div\r\n          id=\"collapseFive\"\r\n          class=\"collapse\"\r\n          aria-labelledby=\"headingFive\"\r\n          data-parent=\"#accordionExample\"\r\n        >\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n              <li\r\n                *ngFor=\"let following of followings\"\r\n                (click)=\"navigateToFollowingProfile(following)\"\r\n                class=\"list-group-item wbdv-following\"\r\n              >\r\n                <b>{{ following.to.username }}</b>\r\n                <button\r\n                  class=\"btn btn-warning float-right\"\r\n                  (click)=\"unfollow(following)\"\r\n                  *ngIf=\"!notSelfProfile\"\r\n                >\r\n                  Unfollow\r\n                </button>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card\" *ngIf=\"user.role == 'CHEF' && !notSelfProfile\">\r\n        <button\r\n          class=\"btn btn-link collapsed\"\r\n          type=\"button\"\r\n          data-toggle=\"collapse\"\r\n          data-target=\"#collapseSix\"\r\n          aria-expanded=\"false\"\r\n          aria-controls=\"collapseSix\"\r\n        >\r\n          <div class=\"card-header\" id=\"headingSix\">\r\n            <h5 class=\"mb-0\">\r\n              Your Recipes\r\n            </h5>\r\n          </div>\r\n        </button>\r\n\r\n        <div\r\n          id=\"collapseSix\"\r\n          class=\"collapse\"\r\n          aria-labelledby=\"headingSix\"\r\n          data-parent=\"#accordionExample\"\r\n        >\r\n          <div class=\"card-body\">\r\n            <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" *ngIf=\"!newRecipe._id\">\r\n                  Create your own recipe\r\n                </h4>\r\n                <h4 class=\"modal-title\" *ngIf=\"newRecipe._id\">\r\n                  Update your own recipe\r\n                </h4>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"close\"\r\n                  aria-label=\"Close\"\r\n                  (click)=\"d('Cross click')\"\r\n                >\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                  <label>Recipe Name</label>\r\n                  <input\r\n                    [(ngModel)]=\"newRecipe.name\"\r\n                    placeholder=\"recipe name\"\r\n                    class=\"form-control\"\r\n                  />\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label>Ingredients (Add each ingredient on a new line)</label>\r\n                  <textarea\r\n                    [(ngModel)]=\"newRecipe.ingredients\"\r\n                    placeholder=\"ingredients\"\r\n                    class=\"form-control\"\r\n                  >\r\n                  </textarea>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label\r\n                    >ImageUrl (Provide a square image of size at least\r\n                    360x360)</label\r\n                  >\r\n                  <input\r\n                    [(ngModel)]=\"newRecipe.imageUrl\"\r\n                    placeholder=\"image url of recipe\"\r\n                    class=\"form-control\"\r\n                  />\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label>Total time required</label>\r\n                  <input\r\n                    [(ngModel)]=\"newRecipe.totalTime\"\r\n                    placeholder=\"total time required\"\r\n                    class=\"form-control\"\r\n                  />\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label>Number of Servings</label>\r\n                  <input\r\n                    [(ngModel)]=\"newRecipe.numberOfServings\"\r\n                    placeholder=\"number of servings\"\r\n                    class=\"form-control\"\r\n                  />\r\n                </div>\r\n\r\n                <button\r\n                  (click)=\"createRecipe()\"\r\n                  *ngIf=\"!newRecipe._id\"\r\n                  class=\"btn btn-dark btn-block\"\r\n                >\r\n                  Add\r\n                </button>\r\n                <button\r\n                  (click)=\"updateRecipe()\"\r\n                  *ngIf=\"newRecipe._id\"\r\n                  class=\"btn btn-dark btn-block\"\r\n                >\r\n                  Update\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"modal-footer\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-light\"\r\n                  (click)=\"c('Close click')\"\r\n                >\r\n                  Close\r\n                </button>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <button\r\n              class=\"btn btn-dark btn-block mb-2 mr-2\"\r\n              (click)=\"openAddModal(content)\"\r\n            >\r\n              Add a recipe\r\n            </button>\r\n\r\n            <ul class=\"list-group\">\r\n              <li\r\n                class=\"list-group-item wbdv-created-recipe\"\r\n                *ngFor=\"let recipe of createdRecipes\"\r\n                (click)=\"navigateToRecipe(recipe)\"\r\n              >\r\n                <b>{{ recipe.name }}</b>\r\n                <button\r\n                  (click)=\"deleteRecipe(recipe)\"\r\n                  class=\"btn btn-danger fa fa-trash float-right\"\r\n                ></button>\r\n                <button\r\n                  (click)=\"openEditModal(content, recipe)\"\r\n                  class=\"btn btn-primary fas fa-pencil-alt float-right\"\r\n                ></button>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/like.service.client */ "./src/app/services/like.service.client.ts");
/* harmony import */ var _services_rating_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/rating.service.client */ "./src/app/services/rating.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_follow_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/follow.service.client */ "./src/app/services/follow.service.client.ts");
/* harmony import */ var _models_recipe_model_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/recipe.model.client */ "./src/app/models/recipe.model.client.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");











var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, recipeService, likeService, ratingService, followService, modalService, router, route) {
        var _this = this;
        this.userService = userService;
        this.recipeService = recipeService;
        this.likeService = likeService;
        this.ratingService = ratingService;
        this.followService = followService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.notSelfProfile = true;
        this.username = "";
        this.isUserFollowed = false;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.likedRecipes = [];
        this.ratedRecipes = [];
        this.followers = [];
        this.followings = [];
        this.alertSuccess = false;
        this.selection = "Liked Recipes";
        this.newRecipe = new _models_recipe_model_client__WEBPACK_IMPORTED_MODULE_9__["Recipe"]();
        this.createdRecipes = [];
        this.searchText = "";
        this.isCollapsed = true;
        this.profileUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.loadLikedRecipesForUser = function () {
            if (!_this.notSelfProfile) {
                _this.likeService
                    .findLikedRecipesForCurrentUser()
                    .then(function (recipes) { return (_this.likedRecipes = recipes); });
            }
            else {
                _this.likeService
                    .findLikedRecipesForUser(_this.profileUser._id)
                    .then(function (recipes) { return (_this.likedRecipes = recipes); });
            }
        };
        this.loadRatedRecipesForUser = function () {
            if (!_this.notSelfProfile) {
                _this.ratingService
                    .findRatedRecipesForCurrentUser()
                    .then(function (recipes) { return (_this.ratedRecipes = recipes); });
            }
            else {
                _this.ratingService
                    .findRatedRecipesForUser(_this.profileUser._id)
                    .then(function (recipes) { return (_this.ratedRecipes = recipes); });
            }
        };
        this.loadFollowersForUser = function () {
            if (!_this.notSelfProfile) {
                _this.followService
                    .getFollowersForCurrentUser()
                    .then(function (followers) { return (_this.followers = followers); });
            }
            else {
                _this.followService.getFollowers(_this.profileUser._id).then(function (followers) {
                    _this.followers = followers;
                    _this.isFollowed();
                });
            }
        };
        this.loadFollowingForUser = function () {
            if (!_this.notSelfProfile) {
                _this.followService
                    .getFollowingForCurrentUser()
                    .then(function (followings) { return (_this.followings = followings); });
            }
            else {
                _this.followService
                    .getFollowing(_this.profileUser._id)
                    .then(function (followings) { return (_this.followings = followings); });
            }
        };
        this.loadCreatedRecipes = function () {
            if (!_this.notSelfProfile) {
                _this.recipeService
                    .findCreatedRecipesForCurrentUser()
                    .then(function (recipes) { _this.createdRecipes = recipes; console.log(recipes); });
            }
            else {
                _this.recipeService
                    .findCreatedRecipesForUser(_this.profileUser._id)
                    .then(function (recipes) { return (_this.createdRecipes = recipes); });
            }
        };
        this.route.params.subscribe(function (params) { return _this.loadUser(params["username"]); });
        console.log("const");
    }
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().then(function () { return _this.router.navigate(["login"]); });
    };
    ProfileComponent.prototype.removeAlert = function () {
        this.alertSuccess = false;
    };
    ProfileComponent.prototype.createRecipe = function () {
        var _this = this;
        this.recipeService
            .createChefsRecipe(this.newRecipe, this.user._id)
            .then(function () {
            _this.loadCreatedRecipes();
            _this.modalReference.close();
        });
    };
    ProfileComponent.prototype.deleteRecipe = function (recipe) {
        var _this = this;
        event.stopPropagation();
        this.recipeService
            .deleteRecipe(recipe._id)
            .then(function () { return _this.loadCreatedRecipes(); });
    };
    ProfileComponent.prototype.updateRecipe = function () {
        var _this = this;
        this.recipeService.updateRecipe(this.newRecipe).then(function () {
            _this.loadCreatedRecipes();
            _this.modalReference.close();
        });
    };
    ProfileComponent.prototype.unfollow = function () {
        var _this = this;
        this.followService.unfollow(this.profileUser._id).then(function () {
            _this.isUserFollowed = false;
            _this.loadFollowersForUser();
        });
    };
    ProfileComponent.prototype.unlike = function (likedRecipe) {
        var _this = this;
        event.stopPropagation();
        this.likeService
            .unlike(likedRecipe.recipe._id)
            .then(function () { return _this.loadLikedRecipesForUser(); });
    };
    ProfileComponent.prototype.navigate = function (searchText) {
        this.router.navigate(["search/" + searchText]);
    };
    ProfileComponent.prototype.navigateToRecipe = function (recipe) {
        var likedRecipe = { recipe: recipe };
        if (recipe.recipe == undefined) {
            likedRecipe.recipe = recipe;
        }
        else {
            likedRecipe = recipe;
        }
        console.log(likedRecipe);
        if (likedRecipe.recipe.yummlyId) {
            this.router.navigate([
                "search/" + likedRecipe.recipe.name + "/" + likedRecipe.recipe.yummlyId
            ]);
        }
        else {
            this.router.navigate([
                "search/" +
                    likedRecipe.recipe.name +
                    "/foodfood-" +
                    likedRecipe.recipe._id
            ]);
        }
    };
    ProfileComponent.prototype.navigateToFoodFoodRecipe = function (createdRecipe) {
        this.router.navigate([
            "search/" + createdRecipe.name + "/foodfood-" + createdRecipe._id
        ]);
    };
    ProfileComponent.prototype.navigateToFollowerProfile = function (follower) {
        this.router.navigate(["profile/" + follower.from.username]);
    };
    ProfileComponent.prototype.navigateToFollowingProfile = function (following) {
        this.router.navigate(["profile/" + following.to.username]);
    };
    ProfileComponent.prototype.changeSelection = function (selection) {
        this.selection = selection;
    };
    ProfileComponent.prototype.update = function (user) {
        var _this = this;
        this.userService.update(user).then(function () {
            _this.alertSuccess = true;
        });
    };
    ProfileComponent.prototype.open = function (content) {
        var _this = this;
        this.modalReference = this.modalService.open(content, { size: "lg" });
        this.modalReference.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ProfileComponent.prototype.openAddModal = function (content) {
        event.stopPropagation();
        this.newRecipe = new _models_recipe_model_client__WEBPACK_IMPORTED_MODULE_9__["Recipe"]();
        this.open(content);
    };
    ProfileComponent.prototype.openEditModal = function (content, recipe) {
        event.stopPropagation();
        this.newRecipe = recipe;
        this.open(content);
    };
    ProfileComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    ProfileComponent.prototype.isFollowed = function () {
        var followerUserIds = this.followers.map(function (follow) { return follow.from._id; });
        this.isUserFollowed = !(followerUserIds.indexOf(this.user._id) === -1);
        return this.isUserFollowed;
    };
    ProfileComponent.prototype.follow = function () {
        var _this = this;
        if (this.user["username"]) {
            this.followService.follow(this.profileUser._id).then(function () {
                _this.loadFollowersForUser();
                _this.isUserFollowed = true;
            });
        }
        else {
            this.router.navigate(["login"]);
        }
    };
    ProfileComponent.prototype.loadUser = function (username) {
        var _this = this;
        this.username = username;
        if (username === undefined) {
            this.notSelfProfile = false;
            return;
        }
        console.log(username);
        this.selection = "Liked Recipes";
        this.userService
            .profile()
            .then(function (user) {
            _this.user = user;
        })
            .then(function () {
            if (_this.user.username === _this.username) {
                _this.router.navigate(["profile"]);
            }
        });
        this.userService.profileOfUser(username).then(function (user) {
            console.log(user);
            if (user.role === "ADMIN") {
                _this.router.navigate(["profile"]);
            }
            //this.user = user;
            console.log(_this.user);
            _this.profileUser = user;
            _this.loadLikedRecipesForUser();
            _this.loadRatedRecipesForUser();
            _this.loadFollowersForUser();
            _this.loadFollowingForUser();
            _this.loadCreatedRecipes();
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.notSelfProfile) {
            this.userService.profile().then(function (user) {
                if (user["username"]) {
                    if (user.role === "ADMIN") {
                        _this.selection = "Manage Users";
                    }
                    _this.user = user;
                    _this.loadLikedRecipesForUser();
                    _this.loadRatedRecipesForUser();
                    _this.loadFollowersForUser();
                    _this.loadFollowingForUser();
                    _this.loadCreatedRecipes();
                }
                else {
                    _this.router.navigate(["login"]);
                }
                console.log(_this.user);
            });
        }
        else {
            console.log(this.user);
        }
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_4__["RecipeServiceClient"],
            _services_like_service_client__WEBPACK_IMPORTED_MODULE_5__["LikeServiceClient"],
            _services_rating_service_client__WEBPACK_IMPORTED_MODULE_6__["RatingServiceClient"],
            _services_follow_service_client__WEBPACK_IMPORTED_MODULE_8__["FollowServiceClient"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe-details/recipe-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/recipe-details/recipe-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-bottom: 1.25em;\r\n  margin-top: 1.25em;\r\n}\r\n\r\n.proj-recipe {\r\n  margin-bottom: 1.25em;\r\n  margin-top: 1.25em;\r\n}\r\n\r\n.proj-recipe-summary {\r\n  color: #a3a3a3;\r\n  text-align: center;\r\n}\r\n\r\n.proj-recipe-summary-item {\r\n  position: relative;\r\n  cursor: default;\r\n  display: inline-block;\r\n  width: 33%;\r\n  font-size: 1.125em;\r\n}\r\n\r\n.proj-recipe-summary-item .value {\r\n  font-weight: 100;\r\n  font-size: 2.25em;\r\n  color: #e16120;\r\n  margin: 0.1em;\r\n}\r\n\r\n.proj-ingredients-heading {\r\n  background-color: #343a40;\r\n  color: white;\r\n}\r\n\r\n.proj-image-wrap {\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.proj-like-button {\r\n  border-radius: 35px;\r\n  background-color: #f3f3f3;\r\n  position: absolute;\r\n  bottom: 10px;\r\n  right: 10px;\r\n  width: 60px;\r\n  height: 60px;\r\n  z-index: 1;\r\n}\r\n\r\n.proj-like-icon {\r\n  color: #343a40;\r\n  font-size: 25px;\r\n}\r\n\r\n.proj-liked-button {\r\n  border-radius: 35px;\r\n  background-color: #343a40;\r\n  position: absolute;\r\n  bottom: 10px;\r\n  right: 10px;\r\n  width: 60px;\r\n  height: 60px;\r\n  z-index: 1;\r\n}\r\n\r\n.proj-liked-icon {\r\n  color: #e16120;\r\n  font-size: 25px;\r\n}\r\n\r\n.proj-group-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.proj-rating {\r\n  border: none;\r\n  float: left;\r\n}\r\n\r\n.proj-rating > input {\r\n  display: none;\r\n}\r\n\r\n.proj-rating > label:before {\r\n  margin: 5px;\r\n  font-size: 1.25em;\r\n  font-family: FontAwesome;\r\n  display: inline-block;\r\n  content: \"\\f005\";\r\n}\r\n\r\n.proj-rating > label {\r\n  color: #ddd;\r\n  float: right;\r\n}\r\n\r\n.proj-rating > input:checked ~ label, /* show gold star when clicked */\r\n.proj-rating:not(:checked) > label:hover, /* hover current star */\r\n.proj-rating:not(:checked) > label:hover ~ label {\r\n  color: #e16120;\r\n}\r\n\r\n/* hover previous stars in list */\r\n\r\n.proj-rating > input:checked + label:hover, /* hover current star when changing rating */\r\n.proj-rating > input:checked ~ label:hover,\r\n.proj-rating > label:hover ~ input:checked ~ label, /* lighten current selection */\r\n.proj-rating > input:checked ~ label:hover ~ label {\r\n  color: #ffa577;\r\n}\r\n\r\n.proj-rated {\r\n  border: none;\r\n  float: right;\r\n}\r\n\r\n.proj-rated .highlight ~ label {\r\n  color: #e16120;\r\n}\r\n\r\n.proj-rated > input {\r\n  display: none;\r\n}\r\n\r\n.proj-rated > label:before {\r\n  margin: 5px;\r\n  font-size: 1.25em;\r\n  font-family: FontAwesome;\r\n  display: inline-block;\r\n  content: \"\\f005\";\r\n}\r\n\r\n.proj-rated > label {\r\n  color: #ddd;\r\n  float: right;\r\n}\r\n\r\n.proj-linebreaks {\r\n  white-space: pre;\r\n}\r\n\r\n.proj-review {\r\n  white-space: normal;\r\n  width: 100%;\r\n  word-wrap: break-word;\r\n}\r\n\r\nimg {\r\n  width: 420px;\r\n  height: 420px;\r\n}\r\n\r\n.recipe-details.has-image {\r\n  padding-top: 80px;\r\n}\r\n\r\n.recipe-details {\r\n  background: #363636;\r\n  background-position: 50% 50%;\r\n  background-size: cover;\r\n  position: relative;\r\n  transition: all 0.6s ease;\r\n}\r\n\r\n.recipe-details:before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  background-image: initial;\r\n  background-position-x: initial;\r\n  background-position-y: initial;\r\n  background-size: initial;\r\n  background-repeat-x: initial;\r\n  background-repeat-y: initial;\r\n  background-attachment: initial;\r\n  background-origin: initial;\r\n  background-clip: initial;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  transition: background-color 0.6s ease;\r\n}\r\n\r\n.col-lg-5.col-sm-12.text-center {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.col-lg-7.col-sm-12.text-center {\r\n  color: #f3f3f3;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUtZGV0YWlscy9yZWNpcGUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsY0FBYztBQUNoQjs7QUFFQSxpQ0FBaUM7O0FBRWpDOzs7O0VBSUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixvQ0FBb0M7RUFDcEMsc0NBQXNDO0FBQ3hDOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLWRldGFpbHMvcmVjaXBlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcclxuICBtYXJnaW4tdG9wOiAxLjI1ZW07XHJcbn1cclxuXHJcbi5wcm9qLXJlY2lwZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS4yNWVtO1xyXG4gIG1hcmdpbi10b3A6IDEuMjVlbTtcclxufVxyXG5cclxuLnByb2otcmVjaXBlLXN1bW1hcnkge1xyXG4gIGNvbG9yOiAjYTNhM2EzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2otcmVjaXBlLXN1bW1hcnktaXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBmb250LXNpemU6IDEuMTI1ZW07XHJcbn1cclxuXHJcbi5wcm9qLXJlY2lwZS1zdW1tYXJ5LWl0ZW0gLnZhbHVlIHtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGZvbnQtc2l6ZTogMi4yNWVtO1xyXG4gIGNvbG9yOiAjZTE2MTIwO1xyXG4gIG1hcmdpbjogMC4xZW07XHJcbn1cclxuXHJcbi5wcm9qLWluZ3JlZGllbnRzLWhlYWRpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvai1pbWFnZS13cmFwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvai1saWtlLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9qLWxpa2UtaWNvbiB7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4ucHJvai1saWtlZC1idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJvai1saWtlZC1pY29uIHtcclxuICBjb2xvcjogI2UxNjEyMDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5wcm9qLWdyb3VwLWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2otcmF0aW5nIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5wcm9qLXJhdGluZyA+IGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucHJvai1yYXRpbmcgPiBsYWJlbDpiZWZvcmUge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29udGVudDogXCJcXGYwMDVcIjtcclxufVxyXG5cclxuLnByb2otcmF0aW5nID4gbGFiZWwge1xyXG4gIGNvbG9yOiAjZGRkO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnByb2otcmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLCAvKiBzaG93IGdvbGQgc3RhciB3aGVuIGNsaWNrZWQgKi9cclxuLnByb2otcmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciwgLyogaG92ZXIgY3VycmVudCBzdGFyICovXHJcbi5wcm9qLXJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XHJcbiAgY29sb3I6ICNlMTYxMjA7XHJcbn1cclxuXHJcbi8qIGhvdmVyIHByZXZpb3VzIHN0YXJzIGluIGxpc3QgKi9cclxuXHJcbi5wcm9qLXJhdGluZyA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDpob3ZlciwgLyogaG92ZXIgY3VycmVudCBzdGFyIHdoZW4gY2hhbmdpbmcgcmF0aW5nICovXHJcbi5wcm9qLXJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlcixcclxuLnByb2otcmF0aW5nID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwsIC8qIGxpZ2h0ZW4gY3VycmVudCBzZWxlY3Rpb24gKi9cclxuLnByb2otcmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyIH4gbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZhNTc3O1xyXG59XHJcblxyXG4ucHJvai1yYXRlZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnByb2otcmF0ZWQgLmhpZ2hsaWdodCB+IGxhYmVsIHtcclxuICBjb2xvcjogI2UxNjEyMDtcclxufVxyXG5cclxuLnByb2otcmF0ZWQgPiBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnByb2otcmF0ZWQgPiBsYWJlbDpiZWZvcmUge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29udGVudDogXCJcXGYwMDVcIjtcclxufVxyXG5cclxuLnByb2otcmF0ZWQgPiBsYWJlbCB7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvai1saW5lYnJlYWtzIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlO1xyXG59XHJcblxyXG4ucHJvai1yZXZpZXcge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiA0MjBweDtcclxuICBoZWlnaHQ6IDQyMHB4O1xyXG59XHJcblxyXG4ucmVjaXBlLWRldGFpbHMuaGFzLWltYWdlIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG5cclxuLnJlY2lwZS1kZXRhaWxzIHtcclxuICBiYWNrZ3JvdW5kOiAjMzYzNjM2O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcclxufVxyXG5cclxuLnJlY2lwZS1kZXRhaWxzOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBpbml0aWFsO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0LXg6IGluaXRpYWw7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQteTogaW5pdGlhbDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaXRpYWw7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGluaXRpYWw7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBpbml0aWFsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcclxufVxyXG4uY29sLWxnLTUuY29sLXNtLTEyLnRleHQtY2VudGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jb2wtbGctNy5jb2wtc20tMTIudGV4dC1jZW50ZXIge1xyXG4gIGNvbG9yOiAjZjNmM2YzO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/recipe-details/recipe-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/recipe-details/recipe-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n\r\n<div class=\"recipe-details has-image\">\r\n  <div class=\"container proj-recipe-details-top\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-5 col-sm-12 text-center\">\r\n        <div class=\"proj-image-wrap\">\r\n          <img\r\n            alt=\"Image not available\"\r\n            *ngIf=\"recipeDetails['imageUrl']\"\r\n            src=\"{{ recipeDetails['imageUrl'] }}\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-7 col-sm-12  text-center\">\r\n        <h1>{{ recipeDetails[\"name\"] }}</h1>\r\n        <br />\r\n        <button\r\n          class=\"btn btn-outline-success\"\r\n          *ngIf=\"\r\n            !currentUser.username ||\r\n            (!isRecipeLiked && currentUser.role !== 'ADMIN')\r\n          \"\r\n          (click)=\"like()\"\r\n        >\r\n          Like\r\n        </button>\r\n        <button\r\n          class=\"btn btn-outline-danger\"\r\n          *ngIf=\"isRecipeLiked && currentUser.role !== 'ADMIN'\"\r\n          (click)=\"unlike()\"\r\n        >\r\n          Unlike\r\n        </button>\r\n        <span *ngIf=\"likedUsers.length === 1\" class=\"ml-2\">\r\n          {{ likedUsers.length }} Like\r\n        </span>\r\n        <span *ngIf=\"likedUsers.length > 1\" class=\"ml-2\">\r\n          {{ likedUsers.length }} Likes\r\n        </span>\r\n        <div class=\"proj-recipe-summary\">\r\n          <div class=\"proj-recipe-summary-item\">\r\n            <span class=\"value\">{{ ingredientsCount }}</span>\r\n            <label>Ingredients</label>\r\n          </div>\r\n          <div class=\"proj-recipe-summary-item nutrition\">\r\n            <span class=\"value\" *ngIf=\"recipeDetails['numberOfServings']\">\r\n              {{ recipeDetails[\"numberOfServings\"] }}\r\n            </span>\r\n            <span class=\"value\" *ngIf=\"!recipeDetails['numberOfServings']\">\r\n              ---\r\n            </span>\r\n            <label>Servings</label>\r\n          </div>\r\n          <div class=\"proj-recipe-summary-item\">\r\n            <span class=\"value\">{{ totalTime }}</span>\r\n            <span class=\"value\" *ngIf=\"!recipeDetails['totalTime']\">\r\n              ---\r\n            </span>\r\n            <label *ngIf=\"!recipeDetails['totalTime']\">mins</label>\r\n            <label>{{ totalTimeUnit }}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <ul class=\"list-group proj-recipe\">\r\n        <li class=\"list-group-item proj-ingredients-heading\">Ingredients</li>\r\n        <li\r\n          *ngFor=\"let ingredient of recipeDetails['ingredients']\"\r\n          class=\"list-group-item\"\r\n        >\r\n          {{ ingredient }}\r\n        </li>\r\n        <li class=\"list-group-item proj-ingredients-heading\">\r\n          <a\r\n            class=\"btn btn-outline-light\"\r\n            href=\"{{ recipeDetails['sourceRecipeUrl'] }}\"\r\n            >View Recipe</a\r\n          >\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <span *ngIf=\"currentUser.role !== 'ADMIN'\" style=\"padding:2px\">\r\n        <h4>Rate {{ recipeDetails[\"name\"] }}:</h4>\r\n        <div\r\n          class=\"alert alert-success alert-dismissible fade show\"\r\n          role=\"alert\"\r\n          *ngIf=\"alertReview == true\"\r\n        >\r\n          Rating submitted successfully\r\n          <button\r\n            type=\"button\"\r\n            class=\"close\"\r\n            data-dismiss=\"alert\"\r\n            (click)=\"removeReviewAlert()\"\r\n            aria-label=\"Close\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"proj-rating\">\r\n          <input\r\n            type=\"radio\"\r\n            id=\"star5\"\r\n            name=\"rating\"\r\n            [checked]=\"newRating === 5\"\r\n            (click)=\"changeRating(5)\"\r\n          />\r\n          <label class=\"full\" for=\"star5\" title=\"OUTSTANDING\"> </label>\r\n          <input\r\n            type=\"radio\"\r\n            id=\"star4\"\r\n            name=\"rating\"\r\n            [checked]=\"newRating === 4\"\r\n            (click)=\"changeRating(4)\"\r\n          />\r\n          <label class=\"full\" for=\"star4\" title=\"REALLY GOOD\"> </label>\r\n          <input\r\n            type=\"radio\"\r\n            id=\"star3\"\r\n            name=\"rating\"\r\n            [checked]=\"newRating === 3\"\r\n            (click)=\"changeRating(3)\"\r\n          />\r\n          <label class=\"full\" for=\"star3\" title=\"JUST GOOD\"> </label>\r\n          <input\r\n            type=\"radio\"\r\n            id=\"star2\"\r\n            name=\"rating\"\r\n            [checked]=\"newRating === 2\"\r\n            (click)=\"changeRating(2)\"\r\n          />\r\n          <label class=\"full\" for=\"star2\" title=\"SO SO\"> </label>\r\n          <input\r\n            type=\"radio\"\r\n            id=\"star1\"\r\n            name=\"rating\"\r\n            [checked]=\"newRating === 1\"\r\n            (click)=\"changeRating(1)\"\r\n          />\r\n          <label class=\"full\" for=\"star1\" title=\"DIDN'T LIKE IT\"> </label>\r\n        </div>\r\n        <br /><br />\r\n\r\n        <div\r\n          class=\"form-group\"\r\n          *ngIf=\"currentUser.role === 'Critic' && newRating !== 0\"\r\n        >\r\n          <textarea\r\n            [(ngModel)]=\"newReview\"\r\n            rows=\"4\"\r\n            placeholder=\"Write something about {{ recipeDetails['name'] }}\"\r\n            class=\"form-control\"\r\n          >\r\n          </textarea>\r\n        </div>\r\n\r\n        <div *ngIf=\"newRating !== 0 && myRatingId === ''\">\r\n          <button (click)=\"rate()\" class=\"btn btn-dark\">\r\n            Submit\r\n          </button>\r\n        </div>\r\n\r\n        <div *ngIf=\"newRating !== 0 && myRatingId !== ''\">\r\n          <button (click)=\"updateRating()\" class=\"btn btn-dark\">\r\n            Update\r\n          </button>\r\n        </div>\r\n      </span>\r\n\r\n      <hr />\r\n\r\n      <h4>Critic's Reviews ({{ reviewedUsers.length }})</h4>\r\n\r\n      <ul class=\"list-group proj-recipe\">\r\n        <li\r\n          *ngFor=\"let reviewedUser of reviewedUsers\"\r\n          (click)=\"goToUserProfile(reviewedUser.user.username)\"\r\n          class=\"list-group-item proj-group-item proj-linebreaks\"\r\n        >\r\n          <b>{{ reviewedUser.user.username }}</b>\r\n\r\n          <div class=\"proj-rated\">\r\n            <input\r\n              type=\"radio\"\r\n              id=\"star5b\"\r\n              [ngClass]=\"{ highlight: reviewedUser.rating === 5 }\"\r\n            />\r\n            <label for=\"star5b\" title=\"OUTSTANDING\"> </label>\r\n            <input\r\n              type=\"radio\"\r\n              id=\"star4b\"\r\n              [ngClass]=\"{ highlight: reviewedUser.rating === 4 }\"\r\n            />\r\n            <label for=\"star4b\" title=\"REALLY GOOD\"> </label>\r\n            <input\r\n              type=\"radio\"\r\n              id=\"star3b\"\r\n              [ngClass]=\"{ highlight: reviewedUser.rating === 3 }\"\r\n            />\r\n            <label for=\"star3b\" title=\"JUST GOOD\"> </label>\r\n            <input\r\n              type=\"radio\"\r\n              id=\"star2b\"\r\n              [ngClass]=\"{ highlight: reviewedUser.rating === 2 }\"\r\n            />\r\n            <label for=\"star2b\" title=\"SO SO\"> </label>\r\n            <input\r\n              type=\"radio\"\r\n              id=\"star1b\"\r\n              [ngClass]=\"{ highlight: reviewedUser.rating === 1 }\"\r\n            />\r\n            <label for=\"star1b\" title=\"DIDN'T LIKE IT\"> </label>\r\n          </div>\r\n\r\n          <div class=\"proj-review\">{{ reviewedUser.review }}</div>\r\n        </li>\r\n      </ul>\r\n\r\n      <h4>Ratings ({{ ratedUsers.length }})</h4>\r\n\r\n      <ul class=\"list-group proj-recipe\">\r\n        <li\r\n          *ngFor=\"let ratedUser of ratedUsers\"\r\n          (click)=\"goToUserProfile(ratedUser.user.username)\"\r\n          class=\"list-group-item proj-group-item\"\r\n        >\r\n          <b>{{ ratedUser.user.username }}</b>\r\n\r\n          <div class=\"proj-rated\">\r\n            <input\r\n              type=\"radio\"\r\n              id=\"star5a\"\r\n              [ngClass]=\"{ highlight: ratedUser.rating === 5 }\"\r\n            />\r\n            <label for=\"star5a\" title=\"OUTSTANDING\"> </label>\r\n            <input\r\n              type=\"radio\"\r\n              id=\"star4a\"\r\n              [ngClass]=\"{ highlight: ratedUser.rating === 4 }\"\r\n            />\r\n            <label for=\"star4a\" title=\"REALLY GOOD\"> </label>\r\n            <input\r\n              type=\"radio\"\r\n              id=\"star3a\"\r\n              [ngClass]=\"{ highlight: ratedUser.rating === 3 }\"\r\n            />\r\n            <label for=\"star3a\" title=\"JUST GOOD\"> </label>\r\n            <input\r\n              type=\"radio\"\r\n              id=\"star2a\"\r\n              [ngClass]=\"{ highlight: ratedUser.rating === 2 }\"\r\n            />\r\n            <label for=\"star2a\" title=\"SO SO\"> </label>\r\n            <input\r\n              type=\"radio\"\r\n              id=\"star1a\"\r\n              [ngClass]=\"{ highlight: ratedUser.rating === 1 }\"\r\n            />\r\n            <label for=\"star1a\" title=\"DIDN'T LIKE IT\"> </label>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/recipe-details/recipe-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/recipe-details/recipe-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: RecipeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsComponent", function() { return RecipeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_yummly_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/yummly.service.client */ "./src/app/services/yummly.service.client.ts");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/like.service.client */ "./src/app/services/like.service.client.ts");
/* harmony import */ var _services_rating_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/rating.service.client */ "./src/app/services/rating.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");









var RecipeDetailsComponent = /** @class */ (function () {
    function RecipeDetailsComponent(route, router, yummlyService, likeService, ratingService, recipeService, userService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.yummlyService = yummlyService;
        this.likeService = likeService;
        this.ratingService = ratingService;
        this.recipeService = recipeService;
        this.userService = userService;
        this.recipeDetails = {};
        this.yummlyId = "";
        this.recipeId = "";
        this.likedUsers = [];
        this.ratedUsers = [];
        this.reviewedUsers = [];
        this.currentUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.ingredientsCount = "";
        this.totalTime = "";
        this.totalTimeUnit = "";
        this.isRecipeLiked = false;
        this.newRating = 0;
        this.newReview = "";
        this.myRatings = [];
        this.myRatingId = "";
        this.alertReview = false;
        this.route.params.subscribe(function (params) { return _this.setRecipeId(params); });
    }
    RecipeDetailsComponent.prototype.changeRating = function (newRating) {
        this.newRating = newRating;
    };
    RecipeDetailsComponent.prototype.like = function () {
        var _this = this;
        if (this.currentUser["username"]) {
            this.likeService.like(this.recipeId).then(function () {
                _this.isRecipeLiked = true;
                _this.loadLikedUsersForRecipe(_this.recipeId);
            });
        }
        else {
            this.router.navigate(["login"]);
        }
    };
    RecipeDetailsComponent.prototype.unlike = function () {
        var _this = this;
        this.likeService.unlike(this.recipeId).then(function () {
            _this.isRecipeLiked = false;
            _this.loadLikedUsersForRecipe(_this.recipeId);
        });
    };
    RecipeDetailsComponent.prototype.isLiked = function () {
        var likedUserIds = this.likedUsers.map(function (like) { return like.user._id; });
        this.isRecipeLiked = !(likedUserIds.indexOf(this.currentUser._id) === -1);
        return this.isRecipeLiked;
    };
    RecipeDetailsComponent.prototype.rate = function () {
        var _this = this;
        if (this.currentUser["username"]) {
            this.alertReview = true;
            this.ratingService
                .rate(this.recipeId, this.newRating, this.newReview)
                .then(function () { return _this.loadRatedUsersForRecipe(_this.recipeId); });
        }
        else {
            this.router.navigate(["login"]);
        }
    };
    RecipeDetailsComponent.prototype.removeReviewAlert = function () {
        this.alertReview = false;
    };
    RecipeDetailsComponent.prototype.updateRating = function () {
        var _this = this;
        this.alertReview = true;
        this.ratingService
            .updateRating(this.myRatingId, this.newRating, this.newReview)
            .then(function () { return _this.loadRatedUsersForRecipe(_this.recipeId); });
    };
    RecipeDetailsComponent.prototype.setRecipeId = function (params) {
        this.yummlyId = params["recipeId"];
        this.findRecipeById(this.yummlyId);
    };
    RecipeDetailsComponent.prototype.getImageUrl = function () {
        if (this.recipeDetails["imageUrl"]) {
            return "url(" + this.recipeDetails["imageUrl"] + ")";
        }
    };
    RecipeDetailsComponent.prototype.loadLikedUsersForRecipe = function (recipeId) {
        var _this = this;
        this.likeService
            .findLikedUsersForRecipe(recipeId)
            .then(function (users) { return (_this.likedUsers = users); })
            .then(function () { return _this.isLiked(); });
    };
    RecipeDetailsComponent.prototype.loadRatedUsersForRecipe = function (recipeId) {
        var _this = this;
        this.ratingService.findRatedUsersForRecipe(recipeId).then(function (ratings) {
            _this.myRatings = ratings.filter(function (rating) { return rating.user._id === _this.currentUser._id; });
            if (_this.myRatings.length > 0) {
                _this.myRatingId = _this.myRatings[0]._id;
                _this.newRating = _this.myRatings[0].rating;
                _this.newReview = _this.myRatings[0].review;
            }
            _this.ratedUsers = ratings.filter(function (rating) { return !(rating.user.role === "Critic"); });
            _this.reviewedUsers = ratings.filter(function (rating) { return rating.user.role === "Critic"; });
        });
    };
    RecipeDetailsComponent.prototype.goToUserProfile = function (username) {
        this.router.navigate(["/profile/" + username]);
    };
    RecipeDetailsComponent.prototype.loadRecipeDetails = function (recipe) {
        recipe["ingredients"] = recipe["ingredients"].split("\n");
        this.ingredientsCount = recipe["ingredients"].length;
        if (recipe["totalTime"]) {
            this.totalTime = recipe["totalTime"].substr(0, recipe["totalTime"].indexOf(" "));
            this.totalTimeUnit = recipe["totalTime"].substr(recipe["totalTime"].indexOf(" ") + 1);
        }
        this.recipeDetails = recipe;
        this.recipeId = recipe["_id"];
        this.loadRatedUsersForRecipe(this.recipeId);
        this.loadLikedUsersForRecipe(this.recipeId);
    };
    RecipeDetailsComponent.prototype.findRecipeById = function (yummlyId) {
        var _this = this;
        if (yummlyId.startsWith("foodfood-")) {
            this.recipeService.findRecipeById(yummlyId.substr(9)).then(function (response) {
                if (response["name"]) {
                    _this.loadRecipeDetails(response);
                }
            });
        }
        else {
            this.recipeService.findRecipeByYummlyId(yummlyId).then(function (response) {
                if (response["name"]) {
                    _this.loadRecipeDetails(response);
                }
                else {
                    _this.yummlyService
                        .findRecipeById(yummlyId)
                        .then(function (result) { return _this.recipeService.createRecipe(result); })
                        .then(function (recipe) {
                        if (recipe["ingredients"]) {
                            _this.loadRecipeDetails(recipe);
                        }
                    });
                }
            });
        }
    };
    RecipeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile().then(function (response) {
            _this.currentUser = response;
        });
    };
    RecipeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "recipe-details",
            template: __webpack_require__(/*! ./recipe-details.component.html */ "./src/app/components/recipe-details/recipe-details.component.html"),
            styles: [__webpack_require__(/*! ./recipe-details.component.css */ "./src/app/components/recipe-details/recipe-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_yummly_service_client__WEBPACK_IMPORTED_MODULE_3__["YummlyServiceClient"],
            _services_like_service_client__WEBPACK_IMPORTED_MODULE_5__["LikeServiceClient"],
            _services_rating_service_client__WEBPACK_IMPORTED_MODULE_6__["RatingServiceClient"],
            _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_4__["RecipeServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__["UserServiceClient"]])
    ], RecipeDetailsComponent);
    return RecipeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wbdv-register {\r\n  margin-top: 20px;\r\n  width: 60%;\r\n  padding: 60px;\r\n}\r\n\r\n.btn.btn-outline-light {\r\n  margin-right: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Jkdi1yZWdpc3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogNjAlO1xyXG4gIHBhZGRpbmc6IDYwcHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<!--<nav class=\"navbar navbar-dark bg-dark justify-content-between wbdv-navbar\">\r\n  <h3 class=\"navbar-brand\">Register</h3>\r\n  <form class=\"form-inline\">\r\n    <a routerLink=\"/login\">\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0\"\r\n              type=\"button\">\r\n        Login\r\n      </button>\r\n    </a>\r\n    <a routerLink=\"/home\">\r\n      <button class=\"btn btn-outline-light my-2 my-sm-0\"\r\n              type=\"button\">\r\n        Home\r\n      </button>\r\n    </a>\r\n  </form>\r\n</nav> -->\r\n\r\n<div class=\"container-fluid wbdv-register\">\r\n  <div class=\"alert alert-danger alert-dismissible fade show\"\r\n       role=\"alert\"\r\n       *ngIf=\"alertPassword == true\">\r\n    Passwords do not match. Please try again.\r\n    <button type=\"button\"\r\n            class=\"close\"\r\n            data-dismiss=\"alert\"\r\n            (click)=\"removeAlert()\"\r\n            aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"alert alert-danger alert-dismissible fade show\"\r\n       role=\"alert\"\r\n       *ngIf=\"alertUsername == true\">\r\n    Username is already taken. Please try another username.\r\n    <button type=\"button\"\r\n            class=\"close\"\r\n            data-dismiss=\"alert\"\r\n            (click)=\"removeUsernameAlert()\"\r\n            aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n  <input [(ngModel)]=\"username\"\r\n         placeholder=\"username\"\r\n         class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Role</label>\r\n  <select [(ngModel)]=\"userRole\"\r\n          class=\"form-control\">\r\n    <option value=\"\" disabled selected>What do you want to be?</option>\r\n    <option value=\"FOODIE\">Foodie</option>\r\n    <option value=\"CHEF\">Chef</option>\r\n  </select>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n  <input [(ngModel)]=\"password\"\r\n         placeholder=\"password\"\r\n         type=\"password\"\r\n         class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Verify Password</label>\r\n  <input [(ngModel)]=\"password2\"\r\n         placeholder=\"verify password\"\r\n         type=\"password\"\r\n         class=\"form-control\"/>\r\n  </div>\r\n\r\n  <button (click)=\"register(username, password, password2)\"\r\n          class=\"btn btn-primary btn-block\">\r\n    Register\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.userRole = "";
        this.alertPassword = false;
        this.alertUsername = false;
        this.removeAlert = function () {
            _this.alertPassword = false;
        };
        this.removeUsernameAlert = function () {
            _this.alertUsername = false;
        };
        this.checkPasswords = function (password, password2) {
            if (password !== password2) {
                _this.alertPassword = true;
            }
            else {
                _this.alertPassword = false;
            }
        };
        this.register = function (username, password, password2) {
            _this.checkPasswords(password, password2);
            _this.alertUsername = false;
            if (_this.alertPassword === false) {
                _this.userService
                    .createUser(username, password, _this.userRole)
                    .then(function (user) {
                    if (user.username) {
                        _this.alertUsername = false;
                        _this.router.navigate(["profile"]);
                    }
                    else {
                        _this.alertUsername = true;
                    }
                });
            }
        };
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wbdv-container {\r\n  margin-bottom: 30px;\r\n  padding-top: 70px;\r\n}\r\n\r\n.list-group.wbdv-project {\r\n  margin-top: 15px;\r\n}\r\n\r\n.wbdv-chefs-special {\r\n  margin-top: 15px;\r\n}\r\n\r\n.wbdv-pagination-button {\r\n  margin: 15px;\r\n}\r\n\r\nimg {\r\n  margin-right: 5px;\r\n  width: 90px;\r\n  height: 60px;\r\n}\r\n\r\n.wbdv-group-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.wbdv-pagination-component {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Jkdi1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDcwcHg7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLndiZHYtcHJvamVjdCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLndiZHYtY2hlZnMtc3BlY2lhbCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLndiZHYtcGFnaW5hdGlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi53YmR2LWdyb3VwLWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndiZHYtcGFnaW5hdGlvbi1jb21wb25lbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n\r\n<div class=\"container wbdv-container\">\r\n  <div>\r\n    <ul class=\"list-group wbdv-project\">\r\n      <li\r\n        *ngFor=\"let result of yummlyResults\"\r\n        (click)=\"navigateYum(result.id)\"\r\n        class=\"list-group-item wbdv-group-item\"\r\n      >\r\n        <img\r\n          alt=\" \"\r\n          *ngIf=\"result.smallImageUrls\"\r\n          src=\"{{ result.smallImageUrls[0] }}\"\r\n        />\r\n        {{ result[\"recipeName\"] }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"wbdv-pagination-component\" *ngIf=\"yummlyResults.length > 0\">\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"searchRecipes(searchText, currentPage - 1)\"\r\n      *ngIf=\"currentPage !== firstPage\"\r\n      class=\"btn btn-primary wbdv-pagination-button\"\r\n    >\r\n      Previous\r\n    </button>\r\n    Page {{ currentPage }} of {{ lastPage }}\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"searchRecipes(searchText, currentPage + 1)\"\r\n      *ngIf=\"currentPage !== lastPage\"\r\n      class=\"btn btn-primary wbdv-pagination-button\"\r\n    >\r\n      Next\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"wbdv-chefs-special\">\r\n    <h2>Chef's specials ({{ foodfoodResults.length }})</h2>\r\n    <ul class=\"list-group wbdv-project\">\r\n      <li\r\n        *ngFor=\"let result of foodfoodResults\"\r\n        (click)=\"navigateFoodFood(result._id)\"\r\n        class=\"list-group-item wbdv-group-item\"\r\n      >\r\n        <img alt=\" \" *ngIf=\"result.imageUrl\" src=\"{{ result.imageUrl }}\" />\r\n        {{ result[\"name\"] }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_yummly_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/yummly.service.client */ "./src/app/services/yummly.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/recipe.service.client */ "./src/app/services/recipe.service.client.ts");





var SearchComponent = /** @class */ (function () {
    function SearchComponent(yummlyService, route, recipeService, router) {
        var _this = this;
        this.yummlyService = yummlyService;
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.searchText = "";
        this.yummlyResults = [];
        this.foodfoodResults = [];
        this.currentPage = 1;
        this.firstPage = 1;
        this.lastPage = 0;
        this.route.params.subscribe(function (params) { return _this.setSearchText(params); });
        this.searchRecipes(this.searchText, 1);
    }
    SearchComponent.prototype.setSearchText = function (params) {
        this.searchText = params["searchText"];
        this.searchRecipes(this.searchText, 1);
    };
    SearchComponent.prototype.searchRecipes = function (input, pageNumber) {
        var _this = this;
        this.currentPage = pageNumber;
        var query = input.replace("%20", "+");
        this.yummlyService
            .findAllRecipes(query, pageNumber)
            .then(function (results) {
            _this.lastPage = Math.ceil(results["totalMatchCount"] / 10);
            _this.yummlyResults = results["matches"];
            return _this.recipeService.findRecipesBySearchQuery(query);
        })
            .then(function (recipes) {
            _this.foodfoodResults = recipes;
        });
    };
    SearchComponent.prototype.navigateYum = function (yummlyId) {
        this.router.navigate(["search/" + this.searchText + "/" + yummlyId]);
    };
    SearchComponent.prototype.navigateFoodfood = function (foodId) {
        this.router.navigate(["search/" + this.searchText + "/foodfood-" + foodId]);
    };
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "search",
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_yummly_service_client__WEBPACK_IMPORTED_MODULE_2__["YummlyServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_recipe_service_client__WEBPACK_IMPORTED_MODULE_4__["RecipeServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/models/recipe.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/recipe.model.client.ts ***!
  \***********************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
//TODO moderator should have user object
var Recipe = /** @class */ (function () {
    function Recipe() {
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password) {
        if (username === void 0) { username = ""; }
        if (password === void 0) { password = ""; }
        (this.username = username), (this.password = password);
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/follow.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/follow.service.client.ts ***!
  \***************************************************/
/*! exports provided: FollowServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowServiceClient", function() { return FollowServiceClient; });
var FollowServiceClient = /** @class */ (function () {
    function FollowServiceClient() {
        this.LOCAL_URL = "http://localhost:4000";
        this.REMOTE_URL = "https://webdev-proj-server.herokuapp.com";
        this.VARIABLE_URL = this.REMOTE_URL;
        this.USER_URL = this.VARIABLE_URL + "/api/user/UID";
        this.CURRENT_USER__URL = this.VARIABLE_URL + "/api/user";
    }
    FollowServiceClient.prototype.follow = function (toUserId) {
        return fetch(this.USER_URL.replace("UID", toUserId) + "/follow", {
            method: "post",
            credentials: "include"
        });
    };
    FollowServiceClient.prototype.unfollow = function (toUserId) {
        return fetch(this.USER_URL.replace("UID", toUserId) + "/unfollow", {
            method: "delete",
            credentials: "include"
        });
    };
    FollowServiceClient.prototype.getFollowers = function (userId) {
        return fetch(this.USER_URL.replace("UID", userId) + "/followers").then(function (response) { return response.json(); });
    };
    FollowServiceClient.prototype.getFollowersForCurrentUser = function () {
        return fetch(this.CURRENT_USER__URL + "/followers", {
            credentials: "include"
        }).then(function (response) { return response.json(); });
    };
    FollowServiceClient.prototype.getFollowing = function (userId) {
        return fetch(this.USER_URL.replace("UID", userId) + "/following").then(function (response) { return response.json(); });
    };
    FollowServiceClient.prototype.getFollowingForCurrentUser = function () {
        return fetch(this.CURRENT_USER__URL + "/following", {
            credentials: "include"
        }).then(function (response) { return response.json(); });
    };
    return FollowServiceClient;
}());



/***/ }),

/***/ "./src/app/services/like.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/like.service.client.ts ***!
  \*************************************************/
/*! exports provided: LikeServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeServiceClient", function() { return LikeServiceClient; });
var LikeServiceClient = /** @class */ (function () {
    function LikeServiceClient() {
        var _this = this;
        this.LOCAL_URL = "http://localhost:4000";
        this.REMOTE_URL = "https://webdev-proj-server.herokuapp.com";
        this.VARIABLE_URL = this.REMOTE_URL;
        this.RECIPE_URL = this.VARIABLE_URL + "/api/recipe";
        this.CURRENT_USER_LIKE_URL = this.VARIABLE_URL + "/api/user/likedRecipe";
        this.USER_LIKE_URL = this.VARIABLE_URL + "/api/user/UID/likedRecipe";
        this.getTotalLikesByRecipes = function () {
            return fetch(_this.REMOTE_URL + "/api/topLike")
                .then(function (response) { return response.json(); });
        };
    }
    LikeServiceClient.prototype.like = function (recipeId) {
        return fetch(this.RECIPE_URL + "/" + recipeId + "/like", {
            method: "post",
            credentials: "include"
        });
    };
    LikeServiceClient.prototype.unlike = function (recipeId) {
        return fetch(this.RECIPE_URL + "/" + recipeId + "/unlike", {
            method: "delete",
            credentials: "include"
        });
    };
    LikeServiceClient.prototype.findLikedRecipesForCurrentUser = function () {
        return fetch(this.CURRENT_USER_LIKE_URL, {
            credentials: "include"
        }).then(function (response) { return response.json(); });
    };
    LikeServiceClient.prototype.findLikedRecipesForUser = function (userId) {
        return fetch(this.USER_LIKE_URL.replace("UID", userId)).then(function (response) {
            return response.json();
        });
    };
    LikeServiceClient.prototype.findLikedUsersForRecipe = function (recipeId) {
        return fetch(this.RECIPE_URL + "/" + recipeId + "/likedUser").then(function (response) { return response.json(); });
    };
    return LikeServiceClient;
}());



/***/ }),

/***/ "./src/app/services/rating.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/rating.service.client.ts ***!
  \***************************************************/
/*! exports provided: RatingServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingServiceClient", function() { return RatingServiceClient; });
var RatingServiceClient = /** @class */ (function () {
    function RatingServiceClient() {
        this.LOCAL_URL = "http://localhost:4000";
        this.REMOTE_URL = "https://webdev-proj-server.herokuapp.com";
        this.VARIABLE_URL = this.REMOTE_URL;
        this.RECIPE_URL = this.VARIABLE_URL + "/api/recipe";
        this.CURRENT_USER_RATING_URL = this.VARIABLE_URL + "/api/user/ratedRecipe";
        this.USER_RATING_URL = this.VARIABLE_URL + "/api/user/UID/ratedRecipe";
        this.RATING_URL = this.VARIABLE_URL + "/api/rating/RATID";
    }
    RatingServiceClient.prototype.rate = function (recipeId, rating, review) {
        var ratingObject;
        if (review === "") {
            ratingObject = {
                rating: rating
            };
        }
        else {
            ratingObject = {
                rating: rating,
                review: review
            };
        }
        return fetch(this.RECIPE_URL + "/" + recipeId + "/rating", {
            method: "post",
            credentials: "include",
            body: JSON.stringify(ratingObject),
            headers: {
                "content-type": "application/json"
            }
        });
    };
    RatingServiceClient.prototype.updateRating = function (ratingId, rating, review) {
        var ratingObject;
        if (review === "") {
            ratingObject = {
                rating: rating
            };
        }
        else {
            ratingObject = {
                rating: rating,
                review: review
            };
        }
        return fetch(this.RATING_URL.replace("RATID", ratingId), {
            method: "put",
            body: JSON.stringify(ratingObject),
            headers: {
                "content-type": "application/json"
            }
        });
    };
    RatingServiceClient.prototype.findRatedRecipesForCurrentUser = function () {
        return fetch(this.CURRENT_USER_RATING_URL, {
            credentials: "include"
        }).then(function (response) { return response.json(); });
    };
    RatingServiceClient.prototype.findRatedRecipesForUser = function (userId) {
        return fetch(this.USER_RATING_URL.replace("UID", userId)).then(function (response) {
            return response.json();
        });
    };
    RatingServiceClient.prototype.findRatedUsersForRecipe = function (recipeId) {
        return fetch(this.RECIPE_URL + "/" + recipeId + "/ratedUser").then(function (response) { return response.json(); });
    };
    return RatingServiceClient;
}());



/***/ }),

/***/ "./src/app/services/recipe.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/recipe.service.client.ts ***!
  \***************************************************/
/*! exports provided: RecipeServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeServiceClient", function() { return RecipeServiceClient; });
var RecipeServiceClient = /** @class */ (function () {
    function RecipeServiceClient() {
        var _this = this;
        this.LOCAL_URL = "http://localhost:4000";
        this.REMOTE_URL = "https://webdev-proj-server.herokuapp.com";
        this.VARIABLE_URL = this.REMOTE_URL;
        this.RECIPE_URL = this.VARIABLE_URL + "/api/recipe";
        this.CURRENT_USER_CREATED_RECIPE_URL = this.VARIABLE_URL + "/api/user/createdRecipe";
        this.USER_CREATED_RECIPE_URL = this.VARIABLE_URL + "/api/user/UID/createdRecipe";
        this.createRecipe = function (result) {
            var recipe = {
                name: result["name"],
                ingredients: result["ingredientLines"].join("\n"),
                imageUrl: result["images"][0]["imageUrlsBySize"][360],
                totalTime: result["totalTime"],
                numberOfServings: result["numberOfServings"],
                yummlyRating: result["rating"],
                yummlyId: result["id"],
                sourceRecipeUrl: result["source"]["sourceRecipeUrl"]
            };
            return fetch(_this.RECIPE_URL, {
                method: "post",
                body: JSON.stringify(recipe),
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (response) { return response.json(); });
        };
        this.createChefsRecipe = function (newRecipe, chefId) {
            var recipe = {
                name: newRecipe["name"],
                ingredients: newRecipe["ingredients"],
                imageUrl: newRecipe["imageUrl"],
                totalTime: newRecipe["totalTime"],
                numberOfServings: newRecipe["numberOfServings"],
                createdBy: "CHEF",
                chef: chefId
            };
            console.log(recipe);
            return fetch(_this.RECIPE_URL, {
                method: "post",
                body: JSON.stringify(recipe),
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (response) { return response.json(); });
        };
        this.findRecipeByYummlyId = function (yummyId) {
            return fetch(_this.RECIPE_URL + "/yummly/" + yummyId)
                .then(function (response) { return response.text(); })
                .then(function (text) { return (text.length ? JSON.parse(text) : {}); });
        };
        this.findRecipeById = function (recipeId) {
            return fetch(_this.RECIPE_URL + "/" + recipeId)
                .then(function (response) { return response.text(); })
                .then(function (text) { return (text.length ? JSON.parse(text) : {}); });
        };
        this.findRecipesBySearchQuery = function (searchText) {
            return fetch(_this.RECIPE_URL + "/search/" + searchText).then(function (response) {
                return response.json();
            });
        };
        this.findCreatedRecipesForCurrentUser = function () {
            return fetch(_this.CURRENT_USER_CREATED_RECIPE_URL, {
                credentials: "include"
            }).then(function (response) { return response.json(); });
        };
        this.findCreatedRecipesForUser = function (userId) {
            return fetch(_this.USER_CREATED_RECIPE_URL.replace("UID", userId)).then(function (response) { return response.json(); });
        };
        this.findAllRecipes = function () {
            return fetch(_this.RECIPE_URL).then(function (response) { return response.json(); });
        };
        this.deleteRecipe = function (recipeId) {
            return fetch(_this.RECIPE_URL + "/" + recipeId, {
                method: "delete"
            });
        };
        this.updateRecipe = function (newRecipe) {
            return fetch(_this.RECIPE_URL + "/" + newRecipe._id, {
                method: "put",
                body: JSON.stringify(newRecipe),
                headers: {
                    "content-type": "application/json"
                }
            });
        };
    }
    return RecipeServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        var _this = this;
        this.LOCAL_URL = "http://localhost:4000";
        this.REMOTE_URL = "https://webdev-proj-server.herokuapp.com";
        this.VARIABLE_URL = this.REMOTE_URL;
        this.USER_URL = this.VARIABLE_URL + "/api/user";
        this.ADMIN_USER_URL = this.VARIABLE_URL + "/api/admin/user";
        this.USER_PROFILE_URL = this.VARIABLE_URL + "/api/profile";
        this.USER_LOGIN_URL = this.VARIABLE_URL + "/api/login";
        this.USER_LOGOUT_URL = this.VARIABLE_URL + "/api/logout";
        this.login = function (username, password) {
            var user = {
                username: username,
                password: password
            };
            return fetch(_this.USER_LOGIN_URL, {
                body: JSON.stringify(user),
                credentials: "include",
                method: "post",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (response) { return response.json(); });
        };
        this.findAllUsers = function () {
            return fetch(_this.USER_URL).then(function (response) { return response.json(); });
        };
        this.logout = function () {
            return fetch(_this.USER_LOGOUT_URL, {
                method: "post",
                credentials: "include"
            });
        };
        this.createUser = function (username, password, userRole) {
            var user = {
                username: username,
                password: password,
                role: userRole
            };
            return fetch(_this.USER_URL, {
                body: JSON.stringify(user),
                credentials: "include",
                method: "post",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (response) { return response.json(); });
        };
        this.createUserByAdmin = function (user) {
            return fetch(_this.ADMIN_USER_URL, {
                body: JSON.stringify(user),
                method: "post",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (response) { return response.json(); });
        };
        this.updateUserByAdmin = function (user) {
            return fetch(_this.ADMIN_USER_URL + "/" + user._id, {
                body: JSON.stringify(user),
                method: "put",
                headers: {
                    "content-type": "application/json"
                }
            }).then(function (response) { return response.json(); });
        };
        this.profile = function () {
            return fetch(_this.USER_PROFILE_URL, {
                credentials: "include" // include, same-origin, *omit
            })
                .then(function (response) { return response.text(); })
                .then(function (text) { return (text.length ? JSON.parse(text) : {}); });
        };
        this.update = function (user) {
            return fetch(_this.USER_PROFILE_URL, {
                credentials: "include",
                method: "put",
                body: JSON.stringify(user),
                headers: {
                    "content-type": "application/json"
                }
            });
        };
        this.profileOfUser = function (username) {
            return fetch(_this.USER_PROFILE_URL + "/" + username).then(function (response) {
                return response.json();
            });
        };
        this.deleteUser = function (userId) {
            return fetch(_this.USER_URL + "/" + userId, {
                method: "delete"
            });
        };
    }
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/yummly.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/yummly.service.client.ts ***!
  \***************************************************/
/*! exports provided: YummlyServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YummlyServiceClient", function() { return YummlyServiceClient; });
var YummlyServiceClient = /** @class */ (function () {
    function YummlyServiceClient() {
        this.YUMMLY_SEARCH_API_URL = "https://api.yummly.com/v1/api/recipes?_app_id=2d8ae64b&_app_key=00c159ff00a68d8e4e38083ac3a4bdd6&" +
            "q=QUERY&" +
            "maxResult=10&" +
            "start=STARTINDEX&" +
            "requirePictures=true";
        this.YUMMLY_GET_API_URL = "https://api.yummly.com/v1/api/recipe/RECIPEID?_app_id=2d8ae64b&_app_key=00c159ff00a68d8e4e38083ac3a4bdd6";
        this.YUMMLY_HOME_RECIPIES_URL = "https://api.yummly.com/v1/api/recipes?_app_id=2d8ae64b&_app_key=00c159ff00a68d8e4e38083ac3a4bdd6" +
            "&maxResult=12&requirePictures=true";
    }
    YummlyServiceClient.prototype.findAllRecipes = function (query, pageNumber) {
        var startIndex = (pageNumber - 1) * 10;
        return fetch(this.YUMMLY_SEARCH_API_URL.replace("QUERY", query).replace("STARTINDEX", startIndex.toString())).then(function (response) { return response.json(); });
    };
    YummlyServiceClient.prototype.findRecipeById = function (recipeId) {
        return fetch(this.YUMMLY_GET_API_URL.replace("RECIPEID", recipeId)).then(function (response) { return response.json(); });
    };
    YummlyServiceClient.prototype.findHomePageRecipes = function () {
        var url = this.YUMMLY_HOME_RECIPIES_URL;
        return fetch(url, {
            credentials: "include"
        }).then(function (response) { return response.json(); });
    };
    return YummlyServiceClient;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Study\MS\3rdSem\WebDev\repos\Webdev-Proj-Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map