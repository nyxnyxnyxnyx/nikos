webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark bg-default ie-nav\" [containerInside]=\"false\">\r\n    <logo>\r\n        <a class=\"logo navbar-brand\" routerLink=\"/dashboard\"><strong>Niko's</strong></a>    \r\n    </logo>\r\n    <links>\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li *ngIf=\"this.auth.loggedIn\" class=\"nav-item waves-light\" mdbRippleRadius routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/dashboard\" >Inicio <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li *ngIf=\"this.auth.loggedIn\" class=\"nav-item waves-light\" mdbRippleRadius routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/products\" >Registrar producto</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav nav-flex-icons\">\r\n            <li *ngIf=\"this.auth.loggedIn\" class=\"nav-item waves-light\" mdbRippleRadius routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/settings\" ><i class=\"fa fa-cogs\"></i>Ajustes</a>\r\n            </li>\r\n            <li *ngIf=\"!this.auth.loggedIn\" class=\"nav-item waves-light\" mdbRippleRadius routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" routerLink=\"/login\" ><i class=\"fa fa-user\"></i> Iniciar Sesión</a>\r\n            </li>\r\n            <li *ngIf=\"this.auth.loggedIn\" class=\"nav-item waves-light\" mdbRippleRadius routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" (click)=\"logout()\" ><i class=\"fa fa-user\"></i> Cerrar Sesión</a>\r\n            </li>\r\n        </ul>\r\n    </links>\r\n  </mdb-navbar>\r\n  <!-- Main -->\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n  <!-- /.Main -->\r\n        \r\n\r\n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        localStorage.removeItem("token");
        this.auth.loggedIn = false;
        this.router.navigate(["/login"]);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mdb-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typescripts_free__ = __webpack_require__("../../../../../src/app/typescripts/free/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_select_ex__ = __webpack_require__("../../../../ngx-select-ex/esm5/ngx-select-ex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_14__products_products_component__["a" /* ProductsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    } /* ,
    { path: '**', component: PageNotFoundComponent } */
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_select_ex__["a" /* NgxSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_7__typescripts_free__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
                    apiKey: 'Your_api_key'
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_0__services_auth_guard_service__["a" /* AuthGuardService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_4__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row pt-5\">\n    <div class=\"col-6\">\n      <h3 class=\"card-header  white-text\">Graficas</h3>\n      <div class=\"card card-body\">                      \n        <div style=\"display: block\">\n          <canvas mdbChart \n              [chartType]=\"chartType\"\n              [datasets]=\"chartDatasets\" \n              [labels]=\"chartLabels\"\n              [colors]=\"chartColors\"\n              [options]=\"chartOptions\"\n              [legend]=\"true\"\n              (chartHover)=\"chartHovered($event)\" \n              (chartClick)=\"chartClicked($event)\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <h3 class=\"card-header primary-color white-text\">Opciones</h3>\n      <div class=\"card card-body\">                      \n        <h3>Por hacer:</h3>\n        <p>Selector de fechas, tipo de grafica, mostrar resumen</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--Panel-->\n\n<!--/.Panel-->\n                \n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    /*     public chartClicked(e: any): void {
             
        }
        
        public chartHovered(e: any): void {
             
        } */
    function DashboardComponent() {
        this.chartType = 'line';
        this.chartDatasets = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Ventas' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Compras' }
        ];
        this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        this.chartColors = [
            {
                backgroundColor: 'rgba(220,220,220,0.2)',
                borderColor: 'rgba(220,220,220,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(220,220,220,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(220,220,220,1)'
            },
            {
                backgroundColor: 'rgba(151,187,205,0.2)',
                borderColor: 'rgba(151,187,205,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(151,187,205,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(151,187,205,1)'
            }
        ];
        this.chartOptions = {
            responsive: true
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row pt-5\">\n        <div class=\"col-12 col-md-4 mx-auto\">\n            <h3 class=\"card-header primary-color white-text\">Iniciar Sesión</h3>\n            <div class=\"card card-body\">                      \n                <form>                  \n                    <div class=\"md-form\">\n                        <i class=\"fa fa-user prefix grey-text\"></i>\n                        <input type=\"text\" id=\"defaultForm-email\" class=\"form-control\" mdbActive [(ngModel)]=\"loginData.username\" name=\"username\">\n                        <label for=\"defaultForm-email\">Usuario</label>\n                    </div>                    \n                    <div class=\"md-form\">\n                        <i class=\"fa fa-lock prefix grey-text\"></i>\n                        <input type=\"password\" id=\"defaultForm-pass\" class=\"form-control\" mdbActive [(ngModel)]=\"loginData.password\" name=\"password\">\n                        <label for=\"defaultForm-pass\">Contraseña</label>\n                    </div>                    \n                    <div class=\"text-center\">\n                        <button class=\"btn btn-default waves-light\" mdbRippleRadius (click)=\"login()\">Iniciar Sesión</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n        <div class=\"row pt-5\">\n          <div class=\"col-6\">\n\n          </div>\n        </div>\n      </div>\n\n\n      "

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.loginData = {
            username: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginService.getUserData();
    };
    LoginComponent.prototype.login = function () {
        this.loginService.login(this.loginData);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row pt-5\">\n      <div class=\"col-12\">\n        <h3 class=\"card-header primary-color white-text\">Registrar Producto</h3>\n        <div class=\"card card-body\">  \n          <div class=\"row\">             \n              <div class=\"col-4\">\n                <ngx-select \n                  [items]=\"items2\"\n                  [(ngModel)]=\"ngxValue2\"\n                  (typed)=\"typed=$event\"\n                  placeholder=\"Agregue o seleccione un modelo\">\n                </ngx-select>\n              </div>        \n              <div class=\"col-2\">\n                  <button type=\"button\" class=\"btn btn-default waves-light\" mdbRippleRadius (click)=\"add()\">\n                    <i class=\"fa fa-plus \" aria-hidden=\"true\"></i> Agregar\n                  </button>\n              </div>\n              <div class=\"col-12\">\n                <hr/>\n              </div>\n              <div class=\"mx-auto\">\n                <table class=\"table table-responsive table-striped text-center \">\n                  <thead>\n                    <tr>\n                      <th></th>\n                      <th (click)=\"form.show()\">Rojo <i class=\"fa fa-chevron-circle-down text-success\" aria-hidden=\"true\"></i></th>\n                      <th (click)=\"form.show()\">Azul <i class=\"fa fa-chevron-circle-down text-success\" aria-hidden=\"true\"></i></th>\n                      <th (click)=\"form.show()\">Verde <i class=\"fa fa-chevron-circle-down text-success\" aria-hidden=\"true\"></i></th>\n                      <th>Agregar color <i class=\"fa fa-plus-circle text-success\" aria-hidden=\"true\"></i></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <th scope=\"row\" (click)=\"form.show()\">25 <i class=\"fa fa-chevron-circle-right text-success\" aria-hidden=\"true\"></i></th>\n                      <td>Codigo/stock <i class=\"fa fa-pencil text-primary\" aria-hidden=\"true\"></i> <i class=\"fa fa-trash text-danger\" aria-hidden=\"true\"></i></td>\n                      <td>ABC123/20 <i class=\"fa fa-pencil text-primary\" aria-hidden=\"true\"></i> <i class=\"fa fa-trash text-danger\" aria-hidden=\"true\"></i></td>\n                      <td (click)=\"form.show()\"><i class=\"fa fa-plus-circle text-primary\" aria-hidden=\"true\"></i></td>\n                      <td></td>\n                    </tr>\n                    <tr>\n                      <th scope=\"row\" (click)=\"form.show()\">28 <i class=\"fa fa-chevron-circle-right text-success\" aria-hidden=\"true\"></i></th>\n                      <td (click)=\"form.show()\"><i class=\"fa fa-plus-circle text-primary\" aria-hidden=\"true\"></i></td>\n                      <td (click)=\"form.show()\"><i class=\"fa fa-plus-circle text-primary\" aria-hidden=\"true\"></i></td>\n                      <td>DEF/0 <i class=\"fa fa-pencil text-primary\" aria-hidden=\"true\"></i> <i class=\"fa fa-trash text-danger\" aria-hidden=\"true\"></i></td>\n                      <td></td>\n                    </tr>\n                    <tr>\n                      <th scope=\"row\" (click)=\"form.show()\">31 <i class=\"fa fa-chevron-circle-right text-success\" aria-hidden=\"true\"></i></th>\n                      <td>GHI/23 <i class=\"fa fa-pencil text-primary\" aria-hidden=\"true\"></i> <i class=\"fa fa-trash text-danger\" aria-hidden=\"true\"></i></td>\n                      <td>JKM/2 <i class=\"fa fa-pencil text-primary\" aria-hidden=\"true\"></i> <i class=\"fa fa-trash text-danger\" aria-hidden=\"true\"></i></td>\n                      <td (click)=\"form.show()\"><i class=\"fa fa-plus-circle text-primary\" aria-hidden=\"true\"></i></td>\n                      <td></td>\n                    </tr>\n                    <tr>\n                      <th scope=\"row\">Agregar talla <i class=\"fa fa-plus-circle text-success\" aria-hidden=\"true\"></i></th>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                    </tr>\n                  </tbody>\n                </table>                                                      \n              </div> \n          </div>               \n        </div>\n      </div>\n    </div>\n  </div>\n  \n  \n<!--Modal: Register Form-->\n<div mdbModal #form=\"mdb-modal\" class=\"modal fade \" id=\"modalRegister\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog cascading-modal modal-lg\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content\">\n\n            <!--Header-->\n            <div class=\"modal-header bg-default darken-3 white-text\">\n                <h4 class=\"title\"><i class=\"fa fa-plus\"></i> Modelo:x17245/Color:Rojo/Talla:25</h4>\n                <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"form.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <!--Body-->\n            <div class=\"modal-body\">\n              <div class=\"row\">\n                <div class=\"col-6 mt-3\">\n                  <div class=\"md-form form-sm\">\n                      <input mdbActive type=\"text\" id=\"\" class=\"form-control\">\n                      <label for=\"\">Código de barras</label>\n                  </div>\n                  <div class=\"md-form form-sm\">\n                      <input mdbActive type=\"text\" id=\"\" class=\"form-control\">\n                      <label for=\"\">Código del producto</label>\n                  </div>\n                  <div class=\"md-form form-sm\">\n                      <input mdbActive placeholder=\"Precio de Compra\" type=\"Number\" id=\"\" class=\"form-control\">\n                      <label for=\"\"></label>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <div class=\"md-form form-sm\">\n                          <input mdbActive placeholder=\"Precio de Venta\" type=\"number\" id=\"\" class=\"form-control\">\n                          <label for=\"\"></label>\n                      </div>\n                    </div>\n                    <div class=\"col-6\">\n                      <div class=\"md-form form-sm\">\n                          <input mdbActive placeholder=\"Precio de Factura\" type=\"number\" id=\"\" class=\"form-control\">\n                          <label for=\"\"></label>\n                      </div>\n                    </div>\n                    <div class=\"col-6\">\n                      <div class=\"md-form form-sm\">\n                          <input mdbActive placeholder=\"Stock Total\" type=\"number\" id=\"\" class=\"form-control\">\n                          <label for=\"\"></label>\n                      </div>\n                    </div>\n                    <div class=\"col-6\">\n                      <div class=\"md-form form-sm\">\n                          <input mdbActive placeholder=\"Stock Web\" type=\"number\" id=\"\" class=\"form-control\">\n                          <label for=\"\"></label>\n                      </div>\n                    </div>\n                    <div class=\"col-12\">\n                        <ngx-select \n                        [multiple]=\"true\"\n                        [items]=\"items\"\n                        [(ngModel)]=\"ngxValue\"\n                        placeholder=\"Seleccione las categorias\">\n                        </ngx-select>\n                      </div>\n                  </div>\n                </div>\n                <div class=\"col-6 \">\n                  <div class=\"col-12 text-center\">\n                      <img *ngIf='url==\"\"' height=100 src=\"assets/images/no-image.png\"><br/>\n                      <img *ngIf='url!=\"\"' [src]=\"url\" height=\"100\"> <br/>\n                      <input type='file' (change)=\"onSelectFile($event)\">\n                  </div>\n                  <div class=\"col-12 mt-4\">\n                    <div class=\"md-form form-sm\">\n                        <input mdbActive type=\"text\" id=\"\" class=\"form-control\">\n                        <label for=\"\">Nombre</label>\n                    </div>\n                  </div>\n                  <div class=\"col-12\">\n                    <!--Basic textarea-->\n                    <div class=\"md-form\">\n                        <textarea mdbActive type=\"text\" id=\"form7\" class=\"md-textarea\"></textarea>\n                        <label for=\"form7\">Descripción</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n                <div class=\"text-center mt-2\">\n                    <button class=\"btn btn-info waves-light\" mdbRippleRadius>Registrar <i class=\"fa fa-sign-in ml-1\"></i></button>\n                </div>\n            </div>\n        </div>\n        <!--/.Content-->\n    </div>\n</div>\n<!--Modal: Register Form-->\n\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.name = 'Angular 4';
        this.url = '';
        this.noImage = "../assets/images/no-image.png";
        this.items = ['Bebe', 'Niño', 'Mujer', 'Hombre'];
        this.items2 = ['Zapato1', 'Zapato2', 'Taco1', 'Taco2'];
        this.ngxValue = [];
        this.ngxValue2 = [];
        this.typed = "";
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
        }
    };
    ProductsComponent.prototype.add = function () {
        this.items2.push(this.typed);
        this.ngxValue = this.typed;
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
        this.loggedIn = false;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem("token")) {
            this.loggedIn = true;
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            this.loggedIn = false;
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.url = "http://18.188.131.102:3000/";
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("token")
            })
        };
    }
    LoginService.prototype.login = function (data) {
        var _this = this;
        return this.http.post(this.url + "auth/signin", data)
            .subscribe(function (data) {
            localStorage.setItem("token", data['token']);
            _this.router.navigate(['/dashboard']);
        }, function () {
            alert("Usuario o contraseña incorrectos");
        });
    };
    LoginService.prototype.getUserData = function () {
        return this.http.get(this.url + "api/users/me", this.httpOptions)
            .subscribe(function (data) {
            console.log(data);
        }, function () {
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row pt-5\">\n      <div class=\"col-6\">\n        <h3 class=\"card-header primary-color white-text\">Usuarios</h3>\n        <div class=\"card card-body\">                    \n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Usuario</th>\n                <th>Rol</th>\n                <th>Opciones</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>Frank</td>\n                <td>Administrador</td>\n                <td>\n                  <i class=\"fa fa-pencil text-primary\" aria-hidden=\"true\"></i> \n                  <i class=\"fa fa-trash text-danger\" aria-hidden=\"true\"></i>\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>Arturo</td>\n                <td>Vendedor</td>\n                <td>\n                  <i class=\"fa fa-pencil text-primary\" aria-hidden=\"true\"></i> \n                  <i class=\"fa fa-trash text-danger\" aria-hidden=\"true\"></i>\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>Carlos</td>\n                <td>Almacenero</td>\n                <td>\n                  <i class=\"fa fa-pencil text-primary\" aria-hidden=\"true\"></i> \n                  <i class=\"fa fa-trash text-danger\" aria-hidden=\"true\"></i>\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\"><i class=\"fa fa-plus-circle text-success\" aria-hidden=\"true\" (click)=\"form.show()\"></i></th>\n                <td></td>\n                <td></td>\n                <td>\n\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <h3 class=\"card-header primary-color white-text\">Categorias</h3>\n        <div class=\"card card-body\">                    \n          <div class=\"row\">\n            <div class=\"chip col-3\">\n                <i class=\"close fa fa-times\" (click)=\"hideElement=!hideElement\"></i>\n                Bebes             \n            </div>\n            <div class=\"chip col-3\">\n                <i class=\"close fa fa-times\" (click)=\"hideElement=!hideElement\"></i>\n                Niños              \n            </div>\n            <div class=\"chip col-3\">\n                <i class=\"close fa fa-times\" (click)=\"hideElement=!hideElement\"></i>\n                Mujer              \n            </div>\n            <div class=\"chip col-3\">\n                <i class=\"close fa fa-times\" (click)=\"hideElement=!hideElement\"></i>\n                Hombre            \n            </div>\n            <div class=\"chip col-3\">\n                <i class=\"close fa fa-times\" (click)=\"hideElement=!hideElement\"></i>\n                Lorem ipsum dolor sit amet.             \n            </div>\n            <div class=\"chip2 col-3\">\n              <input type=\"text\" class=\"input\"/>\n                <i class=\"close fa fa-plus\" (click)=\"hideElement=!hideElement\"></i>      \n            </div>\n          </div>        \n        </div>\n      </div>\n      <!-- row -->\n    </div>\n  </div>\n  \n  \n<!--Modal: Login Form-->\n<div mdbModal #form=\"mdb-modal\" class=\"modal fade\" id=\"modalLogin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content\">\n\n            <!--Header-->\n            <div class=\"modal-header light-blue darken-3 white-text\">\n                <h4 class=\"title\"><i class=\"fa fa-user-plus\"></i> Registrar usuario</h4>\n                <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"form.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <!--Body-->\n            <div class=\"modal-body\">\n                <ngx-select [allowClear]=\"true\"\n                [items]=\"items\"\n                [noAutoComplete]=\"true\"\n                [disabled]=\"ngxDisabled\"\n                [(ngModel)]=\"ngxValue\"\n                placeholder=\"Seleccione un rol\">\n              </ngx-select>\n                <div class=\"md-form form-sm\">\n                    <i class=\"fa fa-envelope prefix\"></i>\n                    <input mdbActive type=\"text\" id=\"\" class=\"form-control\">\n                    <label for=\"\">Usuario</label>\n                </div>\n\n                <div class=\"md-form form-sm\">\n                    <i class=\"fa fa-lock prefix\"></i>\n                    <input mdbActive type=\"password\" id=\"\" class=\"form-control\">\n                    <label for=\"\">Contraseña</label>\n                </div>\n                <div class=\"md-form form-sm\">\n                    <i class=\"fa fa-lock prefix\"></i>\n                    <input mdbActive type=\"password\" id=\"\" class=\"form-control\">\n                    <label for=\"\">Repetir Contraseña</label>\n                </div>\n\n\n\n                <div class=\"text-center mt-2\">\n                    <button class=\"btn btn-info waves-light\" mdbRippleRadius>Registrar <i class=\"fa fa-sign-in ml-1\"></i></button>\n                </div>\n\n            </div>\n\n        </div>\n        <!--/.Content-->\n    </div>\n</div>\n<!--Modal: Login Form-->\n                "

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.items = ['Administrador', 'Almacenero', 'Vendedor', 'Almacenero/vendedor'];
        this.ngxValue = [];
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/buttons/buttons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkbox_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/buttons/checkbox.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/buttons/radio.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule_1 = ButtonsModule;
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule_1, providers: [] };
    };
    ButtonsModule = ButtonsModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__radio_directive__["a" /* ButtonRadioDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__radio_directive__["a" /* ButtonRadioDirective */]]
        })
    ], ButtonsModule);
    return ButtonsModule;
    var ButtonsModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/buttons/checkbox.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CHECKBOX_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonCheckboxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// TODO: config: activeClass - Class to apply to the checked buttons
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
* Add checkbox functionality to any element
*/
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /** Truthy value, will be set to ngModel */
        this.btnCheckboxTrue = true;
        /** Falsy value, will be set to ngModel */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    ButtonCheckboxDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ButtonCheckboxDirective.prototype, "btnCheckboxTrue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ButtonCheckboxDirective.prototype, "btnCheckboxFalse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.active'),
        __metadata("design:type", Object)
    ], ButtonCheckboxDirective.prototype, "state", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ButtonCheckboxDirective.prototype, "onClick", null);
    ButtonCheckboxDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] })
    ], ButtonCheckboxDirective);
    return ButtonCheckboxDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/buttons/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttons_module__ = __webpack_require__("../../../../../src/app/typescripts/free/buttons/buttons.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__buttons_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__radio_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/buttons/radio.directive.ts");
/* unused harmony reexport ButtonRadioDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/buttons/checkbox.directive.ts");
/* unused harmony reexport ButtonCheckboxDirective */





/***/ }),

/***/ "../../../../../src/app/typescripts/free/buttons/radio.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RADIO_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRadioDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
* Create radio buttons or groups of buttons.
* A value of a selected button is bound to a variable specified via ngModel.
*/
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el) {
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.el = el;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: function () {
            return this.mdbRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    // @HostBinding('class.active')
    ButtonRadioDirective.prototype.onClick = function () {
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.mdbRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.mdbRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    };
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    // ControlValueAccessor
    // model -> view
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
    };
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ButtonRadioDirective.prototype, "mdbRadio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ButtonRadioDirective.prototype, "uncheckable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ButtonRadioDirective.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.active'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], ButtonRadioDirective.prototype, "isActive", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ButtonRadioDirective.prototype, "onClick", null);
    ButtonRadioDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ButtonRadioDirective);
    return ButtonRadioDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div tabindex=\"0\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel {{ class }} {{ type }}\">\n  <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\">\n    <a class=\"btn-floating\" [class.disabled]=\"activeSlide===0&&noWrap\" (click)=\"previousSlide()\"><i class=\"fa fa-chevron-left\"></i></a>\n    <a class=\"btn-floating\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"><i class=\"fa fa-chevron-right\"></i></a>\n  </div>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\">\n   <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\">\n   <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\">\n    <img class=\"img-fluid\" src=\"{{ getImg(slidez) }}\">\n   </li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a class=\"carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n  <span  class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/typescripts/free/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_config__ = __webpack_require__("../../../../../src/app/typescripts/free/carousel/carousel.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
* Base element to create carousel
*/
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, el) {
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this._slides = new __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* LinkedList */]();
        this.destroyed = false;
        // protected el: ElementRef = null;
        this.el = null;
        this.animationEnd = true;
        this.isControls = true;
        this.class = '';
        this.type = '';
        this.animation = '';
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](false);
        Object.assign(this, config);
        this.el = el;
    }
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.checkNavigation = function () {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    };
    CarouselComponent.prototype.checkDots = function () {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    };
    CarouselComponent.prototype.getImg = function (slide) {
        return slide.el.nativeElement.querySelector('img').src;
    };
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle automatically.
         */
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active and starts auto changing
     * @param slide
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another slide
     * @param slide
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            //  let nextSlideIndex: number = void 0;
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
                // in case, if this slide in middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    // Fixed problem while cannot swipe next / previous image while using HammerJS.
    CarouselComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.previousSlide();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextSlide();
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            var direction = Direction.NEXT;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
        }
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            var direction = Direction.PREV;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
        }
    };
    CarouselComponent.prototype.fadeAnimation = function (goToIndex) {
        var _this = this;
        //const currentSlide = this._slides.get(this._currentActiveSlide);
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            setTimeout(function () {
                goToSlide.directionNext = false;
                _this.animationEnd = true;
                _this.activeSlide = goToIndex;
                _this.play();
            }, 100);
        }
    };
    CarouselComponent.prototype.slideAnimation = function (goToIndex, direction) {
        var _this = this;
        var currentSlide = this._slides.get(this._currentActiveSlide);
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                setTimeout(function () {
                    goToSlide.directionLeft = true;
                    currentSlide.directionLeft = true;
                }, 100);
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                setTimeout(function () {
                    goToSlide.directionRight = true;
                    currentSlide.directionRight = true;
                }, 100);
            }
            setTimeout(function () {
                goToSlide.directionLeft = false;
                goToSlide.directionNext = false;
                currentSlide.directionLeft = false;
                currentSlide.directionNext = false;
                goToSlide.directionRight = false;
                goToSlide.directionPrev = false;
                currentSlide.directionRight = false;
                currentSlide.directionPrev = false;
                _this.animationEnd = true;
                _this.activeSlide = goToIndex;
                var directionName;
                if (direction === Direction.NEXT) {
                    directionName = 'Next';
                }
                else if (direction === Direction.PREV) {
                    directionName = 'Prev';
                }
                _this.activeSlideChange.emit({ 'direction': directionName, 'relatedTarget': _this.activeSlide });
                _this.play();
            }, 700);
        }
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.pause();
        if (this.animation === 'slide') {
            if (this.activeSlide < index) {
                this.slideAnimation(index, Direction.NEXT);
            }
            else if (this.activeSlide > index) {
                this.slideAnimation(index, Direction.PREV);
            }
        }
        else if (this.animation === 'fade') {
            if (index !== this.activeSlide) {
                this.fadeAnimation(index);
            }
        }
        this.play();
    };
    /**
     * Starts a auto changing of slides
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @returns {number}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     * @returns {boolean}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will return undefined if next slide require wrapping
     * @returns {any}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled and need to going forward - select current slide, as a next
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled and need to going backward - select current slide, as a next
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     * @private
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            // this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(function () {
                var nInterval = +_this.interval;
                if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                    _this.nextSlide();
                }
                else {
                    _this.pause();
                }
            }, interval);
        }
    };
    /**
     * Stops loop of auto changing of slides
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.prototype.hasClass = function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    CarouselComponent.prototype.classAdd = function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    };
    CarouselComponent.prototype.removeClass = function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    CarouselComponent.prototype.keyboardControl = function (event) {
        if (this.keyboard) {
            if (event.keyCode === 39) {
                this.nextSlide();
            }
            if (event.keyCode === 37) {
                this.previousSlide();
            }
        }
    };
    CarouselComponent.prototype.focus = function () {
        this.el.nativeElement.focus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "noWrap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "noPause", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('isControls'),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "isControls", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "keyboard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('class'),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "class", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('type'),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('animation'),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "animation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CarouselComponent.prototype, "activeSlideChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CarouselComponent.prototype, "activeSlide", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CarouselComponent.prototype, "interval", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "play", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "pause", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "keyboardControl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "focus", null);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mdb-carousel',
            template: __webpack_require__("../../../../../src/app/typescripts/free/carousel/carousel.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__carousel_config__["a" /* CarouselConfig */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/carousel/carousel.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        this.keyboard = false;
    }
    CarouselConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], CarouselConfig);
    return CarouselConfig;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/carousel/carousel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__("../../../../../src/app/typescripts/free/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_component__ = __webpack_require__("../../../../../src/app/typescripts/free/carousel/slide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_config__ = __webpack_require__("../../../../../src/app/typescripts/free/carousel/carousel.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule_1 = CarouselModule;
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule_1, providers: [] };
    };
    CarouselModule = CarouselModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__carousel_config__["a" /* CarouselConfig */]]
        })
    ], CarouselModule);
    return CarouselModule;
    var CarouselModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/carousel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_component__ = __webpack_require__("../../../../../src/app/typescripts/free/carousel/carousel.component.ts");
/* unused harmony reexport CarouselComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_module__ = __webpack_require__("../../../../../src/app/typescripts/free/carousel/carousel.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_component__ = __webpack_require__("../../../../../src/app/typescripts/free/carousel/slide.component.ts");
/* unused harmony reexport SlideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__("../../../../../src/app/typescripts/free/carousel/carousel.config.ts");
/* unused harmony reexport CarouselConfig */






/***/ }),

/***/ "../../../../../src/app/typescripts/free/carousel/slide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_component__ = __webpack_require__("../../../../../src/app/typescripts/free/carousel/carousel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel, el) {
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        // public el: ElementRef = null;
        this.el = null;
        this.carousel = carousel;
        this.el = el;
    }
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.active'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SlideComponent.prototype, "active", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.animated'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "animated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.carousel-item-next'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionNext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.carousel-item-left'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.carousel-item-prev'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionPrev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.carousel-item-right'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.carousel-item')
        /** Link to Parent(container-collection) component */
        ,
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__carousel_component__["a" /* CarouselComponent */])
    ], SlideComponent.prototype, "carousel", void 0);
    SlideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mdb-slide',
            template: "\n  <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__carousel_component__["a" /* CarouselComponent */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/charts/chart.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseChartDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var BaseChartDirective = /** @class */ (function () {
    function BaseChartDirective(element, platformId) {
        this.labels = [];
        this.options = {
            legend: { display: false }
        };
        this.legend = false;
        this.chartClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.chartHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.initFlag = false;
        this.isBrowser = false;
        this.element = element;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(platformId);
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (event, active) {
                if (active && active.length) {
                    _this.chartHover.emit({ event: event, active: active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new Chart(ctx, opts);
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "datasets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "labels", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BaseChartDirective.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BaseChartDirective.prototype, "chartType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "colors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BaseChartDirective.prototype, "legend", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BaseChartDirective.prototype, "chartClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BaseChartDirective.prototype, "chartHover", void 0);
    BaseChartDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], String])
    ], BaseChartDirective);
    return BaseChartDirective;
}());

function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}


/***/ }),

/***/ "../../../../../src/app/typescripts/free/charts/chart.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBChartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/charts/chart.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MDBChartsModule = /** @class */ (function () {
    function MDBChartsModule() {
    }
    MDBChartsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__chart_directive__["a" /* BaseChartDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__chart_directive__["a" /* BaseChartDirective */]
            ],
            imports: []
        })
    ], MDBChartsModule);
    return MDBChartsModule;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/charts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/charts/chart.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_module__ = __webpack_require__("../../../../../src/app/typescripts/free/charts/chart.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__chart_module__["a"]; });




/***/ }),

/***/ "../../../../../src/app/typescripts/free/collapse/collapse.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// todo: add animations when https://github.com/angular/angular/issues/9947 solved

var CollapseDirective = /** @class */ (function () {
    function CollapseDirective(_el, _renderer) {
        this.showBsCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.shownBsCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.hideBsCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.hiddenBsCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /** This event fires as soon as content collapses */
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // shown
        // @HostBinding('class.in')
        // @HostBinding('class.show')
        // @HostBinding('attr.aria-expanded')
        this.isExpanded = true;
        // hidden
        // @HostBinding('attr.aria-hidden')
        this.isCollapsed = false;
        // stale state
        // @HostBinding('class.collapse')
        this.isCollapse = true;
        // animation state
        // @HostBinding('class.collapsing')
        this.isCollapsing = false;
        this.collapsing = false;
        this.animationTime = 500;
        this._el = _el;
        this._renderer = _renderer;
    }
    CollapseDirective.prototype.ngOnInit = function () {
        this._el.nativeElement.classList.add('show');
        this.maxHeight = this._el.nativeElement.scrollHeight;
        this._el.nativeElement.style.transition = this.animationTime + 'ms ease';
        if (!this.collapse) {
            this._el.nativeElement.classList.remove('show');
            this.hide();
        }
        else {
            this.show();
        }
        this.isExpanded = this.collapse;
    };
    CollapseDirective.prototype.resize = function () {
        var container = this._el.nativeElement;
        this.maxHeight = this._el.nativeElement.scrollHeight;
        this._renderer.setElementStyle(container, 'height', this.maxHeight + 'px');
    };
    /** allows to manually toggle content visibility */
    CollapseDirective.prototype.toggle = function () {
        if (!this.collapsing) {
            if (this.isExpanded) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    /** allows to manually hide content */
    CollapseDirective.prototype.hide = function () {
        var _this = this;
        this.collapsing = true;
        this.hideBsCollapse.emit();
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        var container = this._el.nativeElement;
        container.classList.remove('collapse');
        container.classList.remove('show');
        container.classList.add('collapsing');
        this._renderer.setElementStyle(container, 'height', '0px');
        setTimeout(function () {
            container.classList.remove('collapsing');
            container.classList.add('collapse');
            _this.hiddenBsCollapse.emit();
            _this.collapsing = false;
        }, this.animationTime);
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    CollapseDirective.prototype.show = function () {
        var _this = this;
        if (!this.isExpanded) {
            this.collapsing = true;
            this.showBsCollapse.emit();
            this.isCollapse = false;
            this.isCollapsing = true;
            this.isExpanded = true;
            this.isCollapsed = false;
            var container_1 = this._el.nativeElement;
            container_1.classList.remove('collapse');
            container_1.classList.add('collapsing');
            setTimeout(function () {
                _this._renderer.setElementStyle(container_1, 'height', _this.maxHeight + 'px');
            }, 10);
            setTimeout(function () {
                container_1.classList.remove('collapsing');
                container_1.classList.add('collapse');
                container_1.classList.add('show');
                _this.shownBsCollapse.emit();
                _this.collapsing = false;
            }, this.animationTime - (this.animationTime * 0.5));
            this.expanded.emit(this);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('showBsCollapse'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "showBsCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('shownBsCollapse'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "shownBsCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('hideBsCollapse'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "hideBsCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('hiddenBsCollapse'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "hiddenBsCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "collapsed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CollapseDirective.prototype, "collapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CollapseDirective.prototype, "animationTime", void 0);
    CollapseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbCollapse]',
            exportAs: 'bs-collapse',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */]])
    ], CollapseDirective);
    return CollapseDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/collapse/collapse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/collapse/collapse.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    CollapseModule_1 = CollapseModule;
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule_1, providers: [] };
    };
    CollapseModule = CollapseModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]]
        })
    ], CollapseModule);
    return CollapseModule;
    var CollapseModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/collapse/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/collapse/collapse.directive.ts");
/* unused harmony reexport CollapseDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_module__ = __webpack_require__("../../../../../src/app/typescripts/free/collapse/collapse.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__collapse_module__["a"]; });




/***/ }),

/***/ "../../../../../src/app/typescripts/free/dropdown/dropdown-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_state__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsDropdownContainerComponent = /** @class */ (function () {
    function BsDropdownContainerComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('style.display'),
        __metadata("design:type", Object)
    ], BsDropdownContainerComponent.prototype, "display", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('style.position'),
        __metadata("design:type", Object)
    ], BsDropdownContainerComponent.prototype, "position", void 0);
    BsDropdownContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mdb-dropdown-container',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "\n  <div [class.dropup]=\"direction === 'up'\"\n  [class.dropdown]=\"direction === 'down'\"\n  [class.show]=\"isOpen\"\n  [class.open]=\"isOpen\">\n    <ng-content></ng-content>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dropdown_state__["a" /* BsDropdownState */]])
    ], BsDropdownContainerComponent);
    return BsDropdownContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/dropdown/dropdown-menu.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownMenuDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_state__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsDropdownMenuDirective = /** @class */ (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbDropdownMenu],[dropdownMenu]',
            exportAs: 'bs-dropdown-menu'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dropdown_state__["a" /* BsDropdownState */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */]])
    ], BsDropdownMenuDirective);
    return BsDropdownMenuDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/dropdown/dropdown-toggle.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_state__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsDropdownToggleDirective = /** @class */ (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        // @HostBinding('attr.disabled') isDisabled: boolean = null;
        this.isDisabled = null;
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('attr.aria-haspopup'),
        __metadata("design:type", Object)
    ], BsDropdownToggleDirective.prototype, "ariaHaspopup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('attr.disabled'),
        __metadata("design:type", Object)
    ], BsDropdownToggleDirective.prototype, "isDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('attr.aria-expanded'),
        __metadata("design:type", Boolean)
    ], BsDropdownToggleDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BsDropdownToggleDirective.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BsDropdownToggleDirective.prototype, "onDocumentClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keyup.esc'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BsDropdownToggleDirective.prototype, "onEsc", null);
    BsDropdownToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbDropdownToggle],[dropdownToggle]',
            exportAs: 'bs-dropdown-toggle'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dropdown_state__["a" /* BsDropdownState */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], BsDropdownToggleDirective);
    return BsDropdownToggleDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/dropdown/dropdown.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Default dropdown configuration */
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
    }
    BsDropdownConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], BsDropdownConfig);
    return BsDropdownConfig;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/dropdown/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_component_loader_index__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_config__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_container_component__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_state__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_5__dropdown_state__["a" /* BsDropdownState */], useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_6__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .filter(function (value) { return value === true; })
            .subscribe(function () { return _this.hide(); }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then(function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        //const parent = this._elementRef.nativeElement.classList;
        var container = this._elementRef.nativeElement.lastElementChild;
        setTimeout(function () { container.classList.add('fadeInDropdown'); }, 200);
        if (this._showInline) {
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(__WEBPACK_IMPORTED_MODULE_4__dropdown_container_component__["a" /* BsDropdownContainerComponent */])
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.hide = function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        var parent = this._elementRef.nativeElement.classList;
        var container = this._elementRef.nativeElement.lastElementChild;
        if ((parent.value === 'dropdown open show') || (parent.value === 'btn-group dropup open show')) {
            container.classList.remove('fadeInDropdown');
            setTimeout(function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }, 560);
        }
        else {
            if (this._showInline) {
                this._isInlineOpen = false;
                this.onHidden.emit(true);
            }
            else {
                this._dropdown.hide();
            }
            this._state.isOpenChange.emit(false);
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "placement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "triggers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.dropup'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], BsDropdownDirective.prototype, "dropup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "autoClose", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "isDisabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.open'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.show'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "isOpen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BsDropdownDirective.prototype, "isOpenChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BsDropdownDirective.prototype, "onShown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BsDropdownDirective.prototype, "onHidden", void 0);
    BsDropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbDropdown],[dropdown]',
            exportAs: 'bs-dropdown',
            providers: [__WEBPACK_IMPORTED_MODULE_5__dropdown_state__["a" /* BsDropdownState */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_2__utils_component_loader_index__["a" /* ComponentLoaderFactory */],
            __WEBPACK_IMPORTED_MODULE_3__dropdown_config__["a" /* BsDropdownConfig */],
            __WEBPACK_IMPORTED_MODULE_5__dropdown_state__["a" /* BsDropdownState */]])
    ], BsDropdownDirective);
    return BsDropdownDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/dropdown/dropdown.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_component_loader_index__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_positioning_index__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/positioning/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_container_component__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_menu_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown-menu.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_toggle_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown-toggle.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropdown_config__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dropdown_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dropdown_state__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BsDropdownModule = /** @class */ (function () {
    function BsDropdownModule() {
    }
    BsDropdownModule_1 = BsDropdownModule;
    BsDropdownModule.forRoot = function (config) {
        return {
            ngModule: BsDropdownModule_1, providers: [
                __WEBPACK_IMPORTED_MODULE_1__utils_component_loader_index__["a" /* ComponentLoaderFactory */],
                __WEBPACK_IMPORTED_MODULE_2__utils_positioning_index__["a" /* PositioningService */],
                __WEBPACK_IMPORTED_MODULE_8__dropdown_state__["a" /* BsDropdownState */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__dropdown_config__["a" /* BsDropdownConfig */], useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    ;
    BsDropdownModule = BsDropdownModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                __WEBPACK_IMPORTED_MODULE_5__dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                __WEBPACK_IMPORTED_MODULE_3__dropdown_container_component__["a" /* BsDropdownContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dropdown_directive__["a" /* BsDropdownDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                __WEBPACK_IMPORTED_MODULE_5__dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                __WEBPACK_IMPORTED_MODULE_7__dropdown_directive__["a" /* BsDropdownDirective */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__dropdown_container_component__["a" /* BsDropdownContainerComponent */]]
        })
    ], BsDropdownModule);
    return BsDropdownModule;
    var BsDropdownModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/dropdown/dropdown.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isDisabledChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.toggleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BsDropdownState);
    return BsDropdownState;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/dropdown/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.directive.ts");
/* unused harmony reexport BsDropdownDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_menu_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown-menu.directive.ts");
/* unused harmony reexport BsDropdownMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_toggle_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown-toggle.directive.ts");
/* unused harmony reexport BsDropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_container_component__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown-container.component.ts");
/* unused harmony reexport BsDropdownContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_state__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.state.ts");
/* unused harmony reexport BsDropdownState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_config__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.config.ts");
/* unused harmony reexport BsDropdownConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropdown_module__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/dropdown.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__dropdown_module__["a"]; });









/***/ }),

/***/ "../../../../../src/app/typescripts/free/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDBRootModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBBootstrapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inputs___ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons__ = __webpack_require__("../../../../../src/app/typescripts/free/buttons/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ripple__ = __webpack_require__("../../../../../src/app/typescripts/free/ripple/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputs__ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbars__ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropdown__ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__carousel___ = __webpack_require__("../../../../../src/app/typescripts/free/carousel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__charts___ = __webpack_require__("../../../../../src/app/typescripts/free/charts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collapse__ = __webpack_require__("../../../../../src/app/typescripts/free/collapse/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tooltip__ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__popover__ = __webpack_require__("../../../../../src/app/typescripts/free/popover/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__buttons___ = __webpack_require__("../../../../../src/app/typescripts/free/buttons/index.ts");
/* unused harmony reexport ButtonsModule */
/* unused harmony reexport ButtonRadioDirective */
/* unused harmony reexport ButtonCheckboxDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ripple___ = __webpack_require__("../../../../../src/app/typescripts/free/ripple/index.ts");
/* unused harmony reexport RippleModule */
/* unused harmony reexport RippleDirective */
/* unused harmony reexport DeepModule */
/* unused harmony reexport DeepDirective */
/* unused harmony reexport ActiveModule */
/* unused harmony reexport ActiveDirective */
/* unused harmony reexport InputValidateDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navbars___ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/index.ts");
/* unused harmony reexport NavbarModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dropdown___ = __webpack_require__("../../../../../src/app/typescripts/free/dropdown/index.ts");
/* unused harmony reexport BsDropdownConfig */
/* unused harmony reexport BsDropdownContainerComponent */
/* unused harmony reexport BsDropdownDirective */
/* unused harmony reexport BsDropdownMenuDirective */
/* unused harmony reexport BsDropdownModule */
/* unused harmony reexport BsDropdownState */
/* unused harmony reexport BsDropdownToggleDirective */
/* unused harmony reexport CarouselComponent */
/* unused harmony reexport CarouselConfig */
/* unused harmony reexport CarouselModule */
/* unused harmony reexport MDBChartsModule */
/* unused harmony reexport BaseChartDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__collapse___ = __webpack_require__("../../../../../src/app/typescripts/free/collapse/index.ts");
/* unused harmony reexport CollapseDirective */
/* unused harmony reexport CollapseModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modals___ = __webpack_require__("../../../../../src/app/typescripts/free/modals/index.ts");
/* unused harmony reexport ModalBackdropComponent */
/* unused harmony reexport ModalBackdropOptions */
/* unused harmony reexport ModalDirective */
/* unused harmony reexport ModalModule */
/* unused harmony reexport ModalOptions */
/* unused harmony reexport MDBModalService */
/* unused harmony reexport ModalContainerComponent */
/* unused harmony reexport MDBModalRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tooltip___ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/index.ts");
/* unused harmony reexport TooltipConfig */
/* unused harmony reexport TooltipContainerComponent */
/* unused harmony reexport TooltipDirective */
/* unused harmony reexport MDBTooltipModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__popover___ = __webpack_require__("../../../../../src/app/typescripts/free/popover/index.ts");
/* unused harmony reexport PopoverConfig */
/* unused harmony reexport PopoverContainerComponent */
/* unused harmony reexport PopoverModule */
/* unused harmony reexport PopoverDirective */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// free

























var MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__inputs___["b" /* DeepModule */],
    __WEBPACK_IMPORTED_MODULE_2__buttons__["a" /* ButtonsModule */],
    __WEBPACK_IMPORTED_MODULE_3__ripple__["a" /* RippleModule */],
    __WEBPACK_IMPORTED_MODULE_4__inputs__["a" /* ActiveModule */],
    __WEBPACK_IMPORTED_MODULE_5__navbars__["a" /* NavbarModule */],
    __WEBPACK_IMPORTED_MODULE_6__dropdown__["a" /* BsDropdownModule */],
    __WEBPACK_IMPORTED_MODULE_7__carousel___["a" /* CarouselModule */],
    __WEBPACK_IMPORTED_MODULE_8__charts___["a" /* MDBChartsModule */],
    __WEBPACK_IMPORTED_MODULE_9__collapse__["a" /* CollapseModule */],
    __WEBPACK_IMPORTED_MODULE_10__modals__["a" /* ModalModule */],
    __WEBPACK_IMPORTED_MODULE_11__tooltip__["a" /* MDBTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_12__popover__["a" /* PopoverModule */],
];
var MDBRootModule = /** @class */ (function () {
    function MDBRootModule() {
    }
    MDBRootModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__buttons__["a" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_1__inputs___["b" /* DeepModule */],
                __WEBPACK_IMPORTED_MODULE_3__ripple__["a" /* RippleModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__inputs__["a" /* ActiveModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__navbars__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__carousel___["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__charts___["a" /* MDBChartsModule */],
                __WEBPACK_IMPORTED_MODULE_9__collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__modals__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__tooltip__["a" /* MDBTooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__popover__["a" /* PopoverModule */].forRoot(),
            ],
            exports: MODULES,
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], MDBRootModule);
    return MDBRootModule;
}());

var MDBBootstrapModule = /** @class */ (function () {
    function MDBBootstrapModule() {
    }
    MDBBootstrapModule.forRoot = function () {
        return { ngModule: MDBRootModule };
    };
    MDBBootstrapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({ exports: MODULES })
    ], MDBBootstrapModule);
    return MDBBootstrapModule;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/inputs/active.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ActiveDirective = /** @class */ (function () {
    function ActiveDirective(el, renderer, platformId) {
        this.renderer = renderer;
        this.isBrowser = false;
        this.isClicked = false;
        // public el: ElementRef = null;
        this.el = null;
        // public elLabel: ElementRef = null;
        this.elLabel = null;
        // public elIcon: Element = null;
        this.elIcon = null;
        this.el = el;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(platformId);
    }
    ActiveDirective.prototype.onClick = function () {
        this.initComponent();
        this.isClicked = true;
    };
    ActiveDirective.prototype.Click = function () {
        this.isClicked = true;
    };
    ActiveDirective.prototype.onBlur = function () {
        this.checkValue();
        this.isClicked = false;
    };
    // ngAfterViewInit with checkValue after setTimeout is needed in situation when we have prefilled
    // forms, and label has to be lifted up.
    ActiveDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initComponent();
        setTimeout(function () {
            _this.checkValue();
        }, 0);
    };
    ActiveDirective.prototype.ngAfterViewChecked = function () {
        this.initComponent();
        this.checkValue();
    };
    ActiveDirective.prototype.initComponent = function () {
        var inputId;
        var inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel != null) {
                this.renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this.renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    ActiveDirective.prototype.checkValue = function () {
        var value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this.renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked || value === '' && this.el.nativeElement.placeholder || value === '' && this.el.nativeElement.attributes.placeholder) {
                this.renderer.addClass(this.elLabel, 'active');
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", ActiveDirective)
    ], ActiveDirective.prototype, "mdbActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ActiveDirective.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ActiveDirective.prototype, "Click", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ActiveDirective.prototype, "onBlur", null);
    ActiveDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbActive]'
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], String])
    ], ActiveDirective);
    return ActiveDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/inputs/active.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__active_class__ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/active.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equal_validator_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/equal-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_validate_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/input-validate.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ActiveModule = /** @class */ (function () {
    function ActiveModule() {
    }
    ActiveModule_1 = ActiveModule;
    ActiveModule.forRoot = function () {
        return { ngModule: ActiveModule_1, providers: [] };
    };
    ActiveModule = ActiveModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__active_class__["a" /* ActiveDirective */], __WEBPACK_IMPORTED_MODULE_2__equal_validator_directive__["a" /* EqualValidatorDirective */], __WEBPACK_IMPORTED_MODULE_3__input_validate_directive__["a" /* InputValidateDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__active_class__["a" /* ActiveDirective */], __WEBPACK_IMPORTED_MODULE_2__equal_validator_directive__["a" /* EqualValidatorDirective */], __WEBPACK_IMPORTED_MODULE_3__input_validate_directive__["a" /* InputValidateDirective */]]
        })
    ], ActiveModule);
    return ActiveModule;
    var ActiveModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/inputs/deep.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeepDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeepDirective = /** @class */ (function () {
    function DeepDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    DeepDirective.prototype.ngAfterViewInit = function () {
        this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
    };
    DeepDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbDeepDirective]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */]])
    ], DeepDirective);
    return DeepDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/inputs/deep.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeepModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deep_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/deep.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DeepModule = /** @class */ (function () {
    function DeepModule() {
    }
    DeepModule_1 = DeepModule;
    DeepModule.forRoot = function () {
        return { ngModule: DeepModule_1, providers: [] };
    };
    DeepModule = DeepModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__deep_directive__["a" /* DeepDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__deep_directive__["a" /* DeepDirective */]]
        })
    ], DeepModule);
    return DeepModule;
    var DeepModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/inputs/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidatorDirective = /** @class */ (function () {
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidatorDirective_1 = EqualValidatorDirective;
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidatorDirective.prototype.validate = function (c) {
        var setToNullValue = null;
        // self value (e.g. retype password)
        var v = c.value;
        // control value (e.g. password)
        // const e: any = c.root.get(this.validateEqual);
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        // return null;
        return setToNullValue;
    };
    EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return EqualValidatorDirective_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidatorDirective);
    return EqualValidatorDirective;
    var EqualValidatorDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/inputs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__active_module__ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/active.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__active_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__active_class__ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/active.class.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equal_validator_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/equal-validator.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_validate_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/input-validate.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deep_module__ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/deep.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__deep_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deep_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/inputs/deep.directive.ts");
/* unused harmony namespace reexport */








/***/ }),

/***/ "../../../../../src/app/typescripts/free/inputs/input-validate.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputValidateDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputValidateDirective = /** @class */ (function () {
    function InputValidateDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.value = '';
        this.minLength = '0';
        this.maxLength = '524288';
    }
    InputValidateDirective.prototype.ngOnInit = function () {
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        this.wrongTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.wrongTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.wrongTextContainer, 'text-danger', true);
        var textWrong = this._elRef.nativeElement.getAttribute('data-error');
        this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
        this._renderer.setElementStyle(this.wrongTextContainer, 'visibility', 'hidden');
        this.rightTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.rightTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.rightTextContainer, 'text-success', true);
        var textSuccess = this._elRef.nativeElement.getAttribute('data-success');
        this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
        this._renderer.setElementStyle(this.rightTextContainer, 'visibility', 'hidden');
    };
    InputValidateDirective.prototype.onBlur = function () {
        var inputType = this._elRef.nativeElement.type;
        if (inputType === 'email') {
            if (this.customRegex) {
                var re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    /*tslint:disable:max-line-length*/
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                }
            }
            else if (!this.customRegex) {
                /*tslint:disable:max-line-length*/
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                }
            }
        }
        else if (inputType === 'password') {
            if (this.customRegex) {
                var re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(re) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(re) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'text') {
            if (this.customRegex) {
                var re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(re) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(re) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'submit') {
            for (var i = 0; i < this._elRef.nativeElement.parentElement.length; i++) {
                if (this._elRef.nativeElement.parentElement[i].value == null || this._elRef.nativeElement.parentElement[i].value === '') {
                    this._renderer.setElementClass(this._elRef.nativeElement.parentElement[i], 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement.parentElement[i], 'counter-success', false);
                }
                else if (!this._elRef.nativeElement.parentElement[i].value == null) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'tel') {
            if (this.customRegex) {
                var re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= 8 && this._elRef.nativeElement.value.length <= 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length > 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                var re = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= 8 && this._elRef.nativeElement.value.length <= 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length > 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'number') {
            if (this.customRegex) {
                var re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length > 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < 1) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                var re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length > 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < 1) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], InputValidateDirective.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('minLength'),
        __metadata("design:type", String)
    ], InputValidateDirective.prototype, "minLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('maxLength'),
        __metadata("design:type", String)
    ], InputValidateDirective.prototype, "maxLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('customRegex'),
        __metadata("design:type", Object)
    ], InputValidateDirective.prototype, "customRegex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputValidateDirective.prototype, "onBlur", null);
    InputValidateDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbInputValidate]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */]])
    ], InputValidateDirective);
    return InputValidateDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/modals/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modalBackdrop_component__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modalBackdrop.component.ts");
/* unused harmony reexport ModalBackdropComponent */
/* unused harmony reexport ModalBackdropOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modal.options.ts");
/* unused harmony reexport ModalOptions */
/* unused harmony reexport MDBModalRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modal.directive.ts");
/* unused harmony reexport ModalDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_module__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modal.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__modal_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_service__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modal.service.ts");
/* unused harmony reexport MDBModalService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modalContainer_component__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modalContainer.component.ts");
/* unused harmony reexport ModalContainerComponent */








/***/ }),

/***/ "../../../../../src/app/typescripts/free/modals/modal.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/facade/browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/utils.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modalBackdrop_component__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modalBackdrop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_options__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modal.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_component_loader_component_loader_factory__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/component-loader.factory.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = /** @class */ (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /** This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete) */
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /** This event is fired immediately when the hide instance method has been called. */
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /** This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete). */
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // seems like an Options
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._element = _element;
        this._renderer = _renderer;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        // public get config(): ModalOptions {
        get: function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options__["b" /* DISMISS_REASONS */].BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options__["b" /* DISMISS_REASONS */].ESC;
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.classList.contains(__WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.setElementClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].OPEN, true);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].IN, false);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
            this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].SHOW, false);
        }
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__modal_options__["f" /* modalConfigDefaults */], config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setElementAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setElementProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this._element.nativeElement);
        }
        this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].IN, true);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
            this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].SHOW, true);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setElementAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                    _this._renderer.setElementClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].OPEN, false);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(__WEBPACK_IMPORTED_MODULE_4__modalBackdrop_component__["a" /* ModalBackdropComponent */])
                .to('body')
                .show({ isAnimated: this.isAnimated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    ModalDirective.prototype.focusOtherModal = function () {
        var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[mdbModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        this._renderer.invokeElementMethod(otherOpenedModals[otherOpenedModals.length - 1], 'focus');
    };
    /** @internal */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setElementStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setElementStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.clientWidth < __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */]) {
            return;
        }
        this.originalBodyPadding = parseInt(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */].getComputedStyle(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body).getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = this.originalBodyPadding;
    };
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, 'div', void 0);
        scrollDiv.className = __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].SCROLLBAR_MEASURER;
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])()
        // public set config(conf: ModalOptions) {
        ,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ModalDirective.prototype, "config", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ModalDirective.prototype, "onShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ModalDirective.prototype, "onShown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ModalDirective.prototype, "onHide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ModalDirective.prototype, "onHidden", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ModalDirective.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keydown.esc'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ModalDirective.prototype, "onEsc", null);
    ModalDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbModal]',
            exportAs: 'mdb-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */], __WEBPACK_IMPORTED_MODULE_6__utils_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */]])
    ], ModalDirective);
    return ModalDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/modals/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modalBackdrop_component__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modalBackdrop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modal.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_positioning__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/positioning/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_component_loader__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modalContainer_component__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modalContainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_service__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule_1 = ModalModule;
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule_1, providers: [__WEBPACK_IMPORTED_MODULE_6__modal_service__["a" /* MDBModalService */], __WEBPACK_IMPORTED_MODULE_4__utils_component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__utils_positioning__["a" /* PositioningService */]] };
    };
    ModalModule = ModalModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__modalBackdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */], __WEBPACK_IMPORTED_MODULE_5__modalContainer_component__["a" /* ModalContainerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__modalBackdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modalBackdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_5__modalContainer_component__["a" /* ModalContainerComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], ModalModule);
    return ModalModule;
    var ModalModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/modals/modal.options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MDBModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return modalConfigDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassName; });
/* unused harmony export Selector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TransitionDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DISMISS_REASONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ModalOptions);
    return ModalOptions;
}());

var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     */
    MDBModalRef.prototype.hide = function () { };
    MDBModalRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], MDBModalRef);
    return MDBModalRef;
}());

var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true
};
var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};


/***/ }),

/***/ "../../../../../src/app/typescripts/free/modals/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_component_loader__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modalBackdrop_component__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modalBackdrop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modalContainer_component__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modalContainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_options__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modal.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modalService_config__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modalService.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MDBModalService = /** @class */ (function () {
    // public constructor(private clf: ComponentLoaderFactory) {
    function MDBModalService(clf, el, v, r) {
        this.clf = clf;
        this.el = el;
        this.v = v;
        this.r = r;
        // constructor props
        this.config = __WEBPACK_IMPORTED_MODULE_4__modal_options__["f" /* modalConfigDefaults */];
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        // private lastDismissReason = '';
        this.lastDismissReason = '';
        this.loaders = [];
        //   this._backdropLoader = this.clf.createLoader<ModalBackdropComponent>(null, null, null);
        this._backdropLoader = this.clf.createLoader(this.el, this.v, this.r);
        __WEBPACK_IMPORTED_MODULE_5__modalService_config__["a" /* msConfig */].serviceInstance = this;
    }
    /** Shows a modal */
    MDBModalService.prototype.show = function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__modal_options__["f" /* modalConfigDefaults */], config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    MDBModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options__["e" /* TransitionDurations */].BACKDROP : 0);
    };
    MDBModalService.prototype._showBackdrop = function () {
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(__WEBPACK_IMPORTED_MODULE_2__modalBackdrop_component__["a" /* ModalBackdropComponent */])
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    MDBModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var duration = this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options__["e" /* TransitionDurations */].BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    MDBModalService.prototype._showModal = function (content) {
        var modalLoader = this.loaders[this.loaders.length - 1];
        var mdbModalRef = new __WEBPACK_IMPORTED_MODULE_4__modal_options__["c" /* MDBModalRef */]();
        var modalContainerRef = modalLoader
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__modal_options__["d" /* ModalOptions */], useValue: this.config })
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__modal_options__["c" /* MDBModalRef */], useValue: mdbModalRef })
            .attach(__WEBPACK_IMPORTED_MODULE_3__modalContainer_component__["a" /* ModalContainerComponent */])
            .to('body')
            .show({ content: content, isAnimated: this.config.animated });
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    };
    MDBModalService.prototype._hideModal = function (level) {
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    MDBModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    MDBModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    MDBModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /** @internal */
    MDBModalService.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    MDBModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    MDBModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    MDBModalService.prototype.getScrollbarWidth = function () {
        var scrollDiv = document.createElement('div');
        scrollDiv.className = __WEBPACK_IMPORTED_MODULE_4__modal_options__["a" /* ClassName */].SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    MDBModalService.prototype._createLoaders = function () {
        // const loader = this.clf.createLoader<ModalContainerComponent>(null, null, null);
        var loader = this.clf.createLoader(this.el, this.v, this.r);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    MDBModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    MDBModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    MDBModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */]])
    ], MDBModalService);
    return MDBModalService;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/modals/modalBackdrop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModalBackdropOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBackdropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modal.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/utils.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalBackdropOptions = /** @class */ (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());

/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = /** @class */ (function () {
    function ModalBackdropComponent(element, renderer) {
        this.classNameBackDrop = true;
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].IN, value);
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
                this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].SHOW, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].FADE, this.isAnimated);
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.modal-backdrop'),
        __metadata("design:type", Object)
    ], ModalBackdropComponent.prototype, "classNameBackDrop", void 0);
    ModalBackdropComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mdb-modal-backdrop',
            template: "",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */]])
    ], ModalBackdropComponent);
    return ModalBackdropComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/modals/modalContainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modal.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modalService_config__ = __webpack_require__("../../../../../src/app/typescripts/free/modals/modalService.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._renderer = _renderer;
        this.tabindex = -1;
        this.role = 'dialog';
        this.modla = true;
        this.isShown = false;
        this.isModalHiding = false;
        this.mdbModalService = __WEBPACK_IMPORTED_MODULE_3__modalService_config__["a" /* msConfig */].serviceInstance;
        this._element = _element;
        this.config = Object.assign({}, options);
    }
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options__["b" /* DISMISS_REASONS */].BACKRDOP);
        this.hide();
    };
    ModalContainerComponent.prototype.onEsc = function () {
        if (this.config.keyboard && this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options__["b" /* DISMISS_REASONS */].ESC);
            this.hide();
        }
    };
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].FADE, true);
        }
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.setElementClass(_this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].SHOW, true);
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options__["e" /* TransitionDurations */].BACKDROP : 0);
        if (document && document.body) {
            if (this.mdbModalService.getModalsCount() === 1) {
                this.mdbModalService.checkScrollbar();
                this.mdbModalService.setScrollbar();
            }
            this._renderer.setElementClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].OPEN, true);
        }
    };
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.setElementClass(this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].SHOW, false);
        setTimeout(function () {
            _this.isShown = false;
            if (document && document.body && _this.mdbModalService.getModalsCount() === 1) {
                _this._renderer.setElementClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].OPEN, false);
            }
            _this.mdbModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options__["e" /* TransitionDurations */].MODAL : 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('tabindex'),
        __metadata("design:type", Object)
    ], ModalContainerComponent.prototype, "tabindex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('role'),
        __metadata("design:type", Object)
    ], ModalContainerComponent.prototype, "role", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.modal'),
        __metadata("design:type", Object)
    ], ModalContainerComponent.prototype, "modla", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ModalContainerComponent.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:keydown.esc'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ModalContainerComponent.prototype, "onEsc", null);
    ModalContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mdb-modal-container',
            template: "\n  <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n  <div class=\"modal-content\"><ng-content></ng-content></div>\n</div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modal_options__["d" /* ModalOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */]])
    ], ModalContainerComponent);
    return ModalContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/modals/modalService.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return msConfig; });
var msConfig = {
    serviceInstance: new Object()
};


/***/ }),

/***/ "../../../../../src/app/typescripts/free/navbars/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_module__ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/navbar.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__navbar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_component__ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/navbar.component.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/app/typescripts/free/navbars/links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_service__ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinksComponent = /** @class */ (function () {
    function LinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
    }
    LinksComponent.prototype.ngAfterContentInit = function () {
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    LinksComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterLinkWithHref */], { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], descendants: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* QueryList */])
    ], LinksComponent.prototype, "links", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], LinksComponent.prototype, "linkClick", void 0);
    LinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'links',
            template: "\n        <ng-content></ng-content>\n    ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__navbar_service__["a" /* NavbarService */]])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/navbars/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'logo',
            template: "\n  <ng-content></ng-content>\n  "
        })
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/navbars/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"{{SideClass}}\" #nav>\n  <div [ngClass]=\"{'container': containerInside}\" [ngStyle]=\"{'display': displayStyle}\" #container>\n    <ng-content select=\"logo\"></ng-content>\n    <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content>\n    <div *ngIf=\"this.doubleNav == false\">\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggle($event)\" mdbRippleRadius *ngIf=\"this.el.nativeElement.children.length !== 0\">\n        <span class=\"navbar-toggler-icon\">\n        </span>\n      </button>\n    </div>\n    <div #navbar [style.height]=\"height\" class=\"navbar-collapse collapse\" [ngClass]=\"{'collapse': collapse, 'show': showClass, 'collapsing': collapsing}\">\n      <ng-content select=\"links\"></ng-content>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/typescripts/free/navbars/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_service__ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(renderer, _navbarService) {
        var _this = this;
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this.containerInside = true;
        this.shown = false;
        this.duration = 350; // ms
        this.collapse = false;
        this.showClass = false;
        this.collapsing = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(function (navbarLinkClicks) { _this.closeNavbarOnClick(navbarLinkClicks); });
    }
    NavbarComponent.prototype.closeNavbarOnClick = function (navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /* bugfix - bez tego sypie ExpressionChangedAfterItHasBeenCheckedError -
        https://github.com/angular/angular/issues/6005#issuecomment-165951692 */
        setTimeout(function () {
            _this.height = _this.el.nativeElement.scrollHeight;
            _this.collapse = true;
            if (!_this.containerInside) {
                var childrens = Array.from(_this.container.nativeElement.children);
                childrens.forEach(function (child) {
                    // this.navbar.nativeElement.append(child);
                    _this.renderer.appendChild(_this.navbar.nativeElement, child);
                    _this.container.nativeElement.remove();
                });
            }
            if (_this.el.nativeElement.children.length === 0) {
                _this.el.nativeElement.remove();
            }
        });
    };
    NavbarComponent.prototype.toggle = function (event) {
        event.preventDefault();
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    NavbarComponent.prototype.show = function () {
        var _this = this;
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
            _this.showClass = true;
        }, this.duration);
    };
    NavbarComponent.prototype.hide = function () {
        var _this = this;
        this.shown = false;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
        }, this.duration);
    };
    Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
        get: function () {
            // if(!this.containerInside) {
            //  return 'flex';
            // } else {
            return '';
            // }
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.onResize = function (event) {
        var _this = this;
        var breakpoit = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoit = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoit = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoit = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoit = 576;
        }
        else {
            breakpoit = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoit) {
            if (!this.shown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout(function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.collapse = true;
                    _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
                }, 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    };
    NavbarComponent.prototype.onScroll = function () {
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            if (window.pageYOffset > 120) {
                this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
            else {
                this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "SideClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "containerInside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])('navbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], NavbarComponent.prototype, "el", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])('mobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], NavbarComponent.prototype, "mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], NavbarComponent.prototype, "navbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], NavbarComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* HostListener */])('document:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onScroll", null);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'mdb-navbar',
            template: __webpack_require__("../../../../../src/app/typescripts/free/navbars/navbar.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Z" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__navbar_service__["a" /* NavbarService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/navbars/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__links_component__ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_component__ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_service__ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_component__ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navlinks_component__ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/navlinks.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_0__links_component__["a" /* LinksComponent */], __WEBPACK_IMPORTED_MODULE_1__logo_component__["a" /* LogoComponent */], __WEBPACK_IMPORTED_MODULE_6__navlinks_component__["a" /* NavlinksComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_0__links_component__["a" /* LinksComponent */], __WEBPACK_IMPORTED_MODULE_1__logo_component__["a" /* LogoComponent */], __WEBPACK_IMPORTED_MODULE_6__navlinks_component__["a" /* NavlinksComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__navbar_service__["a" /* NavbarService */]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/navbars/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.navbarLinkClicks = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    NavbarService.prototype.getNavbarLinkClicks = function () {
        return this.navbarLinkClicks.asObservable();
    };
    NavbarService.prototype.setNavbarLinkClicks = function () {
        this.navbarLinkClicks.next();
    };
    NavbarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/navbars/navlinks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavlinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_service__ = __webpack_require__("../../../../../src/app/typescripts/free/navbars/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavlinksComponent = /** @class */ (function () {
    function NavlinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
    }
    NavlinksComponent.prototype.ngAfterContentInit = function () {
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    NavlinksComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterLinkWithHref */], { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], descendants: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* QueryList */])
    ], NavlinksComponent.prototype, "links", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], NavlinksComponent.prototype, "linkClick", void 0);
    NavlinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'navlinks',
            template: "\n        <ng-content></ng-content>\n    ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__navbar_service__["a" /* NavbarService */]])
    ], NavlinksComponent);
    return NavlinksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/popover/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/popover/popover.directive.ts");
/* unused harmony reexport PopoverDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_module__ = __webpack_require__("../../../../../src/app/typescripts/free/popover/popover.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__popover_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_config__ = __webpack_require__("../../../../../src/app/typescripts/free/popover/popover.config.ts");
/* unused harmony reexport PopoverConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__("../../../../../src/app/typescripts/free/popover/popover-container.component.ts");
/* unused harmony reexport PopoverContainerComponent */






/***/ }),

/***/ "../../../../../src/app/typescripts/free/popover/popover-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__("../../../../../src/app/typescripts/free/popover/popover.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.prototype.ngOnInit = function () {
        this.class = 'popover-fadeIn popover in popover-' + this.placement + ' ' + this.placement + ' bs-popover-' + this.placement;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverContainerComponent.prototype, "placement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverContainerComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.show'),
        __metadata("design:type", Object)
    ], PopoverContainerComponent.prototype, "show", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('attr.role'),
        __metadata("design:type", Object)
    ], PopoverContainerComponent.prototype, "role", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], PopoverContainerComponent.prototype, "class", void 0);
    PopoverContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mdb-popover-container',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "\n <h3 class=\"popover-header\" *ngIf=\"title\">{{title}}</h3>\n <div class=\"popover-body\">\n <ng-content></ng-content>\n </div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */]])
    ], PopoverContainerComponent);
    return PopoverContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/popover/popover.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
    }
    PopoverConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], PopoverConfig);
    return PopoverConfig;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/popover/popover.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__("../../../../../src/app/typescripts/free/popover/popover.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_component_loader__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__("../../../../../src/app/typescripts/free/popover/popover-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = /** @class */ (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () { return this._popover.isShown; },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown) {
            return;
        }
        this._popover
            .attach(__WEBPACK_IMPORTED_MODULE_3__popover_container_component__["a" /* PopoverContainerComponent */])
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbPopover,
            placement: this.placement,
            title: this.popoverTitle
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
    };
    PopoverDirective.prototype.dispose = function () {
        this._popover.dispose();
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PopoverDirective.prototype, "mdbPopover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "popoverTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "placement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "triggers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PopoverDirective.prototype, "isOpen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PopoverDirective.prototype, "onShown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PopoverDirective.prototype, "onHidden", void 0);
    PopoverDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */],
            __WEBPACK_IMPORTED_MODULE_2__utils_component_loader__["a" /* ComponentLoaderFactory */]])
    ], PopoverDirective);
    return PopoverDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/popover/popover.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_component_loader__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_positioning__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/positioning/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_config__ = __webpack_require__("../../../../../src/app/typescripts/free/popover/popover.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/popover/popover.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_container_component__ = __webpack_require__("../../../../../src/app/typescripts/free/popover/popover-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule_1 = PopoverModule;
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_4__popover_config__["a" /* PopoverConfig */], __WEBPACK_IMPORTED_MODULE_2__utils_component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__utils_positioning__["a" /* PositioningService */]]
        };
    };
    PopoverModule = PopoverModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */], __WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]]
        })
    ], PopoverModule);
    return PopoverModule;
    var PopoverModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/ripple/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ripple_effect_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/ripple/ripple-effect.directive.ts");
/* unused harmony reexport RippleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ripple_module__ = __webpack_require__("../../../../../src/app/typescripts/free/ripple/ripple.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__ripple_module__["a"]; });




/***/ }),

/***/ "../../../../../src/app/typescripts/free/ripple/ripple-effect.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RippleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RippleDirective = /** @class */ (function () {
    function RippleDirective(el) {
        this.el = el;
    }
    RippleDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            var xPos = event.clientX - button.getBoundingClientRect().left;
            var yPos = event.clientY - button.getBoundingClientRect().top;
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            var ripple = button.appendChild(tmp);
            var top_1 = yPos + 'px';
            var left = xPos + 'px';
            tmp.style.top = top_1;
            tmp.style.left = left;
            var scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            var duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    RippleDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RippleDirective.prototype, "click", null);
    RippleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbRippleRadius]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], RippleDirective);
    return RippleDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/ripple/ripple.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RippleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ripple_effect_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/ripple/ripple-effect.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RippleModule = /** @class */ (function () {
    function RippleModule() {
    }
    RippleModule_1 = RippleModule;
    RippleModule.forRoot = function () {
        return { ngModule: RippleModule_1, providers: [] };
    };
    RippleModule = RippleModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__ripple_effect_directive__["a" /* RippleDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__ripple_effect_directive__["a" /* RippleDirective */]]
        })
    ], RippleModule);
    return RippleModule;
    var RippleModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/tooltip/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_component__ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/tooltip.component.ts");
/* unused harmony reexport TooltipContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/tooltip.directive.ts");
/* unused harmony reexport TooltipDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_module__ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/tooltip.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__tooltip_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_service__ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/tooltip.service.ts");
/* unused harmony reexport TooltipConfig */






/***/ }),

/***/ "../../../../../src/app/typescripts/free/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_service__ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/tooltip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config) {
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.show'),
        __metadata("design:type", Object)
    ], TooltipContainerComponent.prototype, "show", void 0);
    TooltipContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mdb-tooltip-container',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            // tslint:disable-next-line
            host: {
                '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
            },
            template: "\n  <div class=\"tooltip-arrow\"></div>\n  <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tooltip_service__["a" /* TooltipConfig */]])
    ], TooltipContainerComponent);
    return TooltipContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/tooltip/tooltip.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_component__ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_service__ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/tooltip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_component_loader__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_decorators__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/decorators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /** Fired when tooltip content changes */
        this.tooltipChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.delay = 0;
        this.fadeDuration = 150;
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_2__tooltip_service__["a" /* TooltipConfig */], useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: function () { return this._tooltip.isShown; },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        var showTooltip = function () { return _this._tooltip
            .attach(__WEBPACK_IMPORTED_MODULE_1__tooltip_component__["a" /* TooltipContainerComponent */])
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.mdbTooltip,
            placement: _this.placement
        }); };
        if (this.delay) {
            this._delayTimeoutId = setTimeout(function () { showTooltip(); }, this.delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.fadeDuration);
    };
    TooltipDirective.prototype.dispose = function () {
        this._tooltip.dispose();
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_decorators__["a" /* OnChange */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "mdbTooltip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TooltipDirective.prototype, "tooltipChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "placement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "triggers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TooltipDirective.prototype, "isOpen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "isDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TooltipDirective.prototype, "onShown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TooltipDirective.prototype, "onHidden", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "delay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "fadeDuration", void 0);
    TooltipDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbTooltip]',
            exportAs: 'mdb-tooltip'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__utils_component_loader__["a" /* ComponentLoaderFactory */],
            __WEBPACK_IMPORTED_MODULE_2__tooltip_service__["a" /* TooltipConfig */]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/tooltip/tooltip.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBTooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_component__ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_directive__ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/tooltip.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_service__ = __webpack_require__("../../../../../src/app/typescripts/free/tooltip/tooltip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_component_loader__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_positioning__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/positioning/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MDBTooltipModule = /** @class */ (function () {
    function MDBTooltipModule() {
    }
    MDBTooltipModule_1 = MDBTooltipModule;
    MDBTooltipModule.forRoot = function () {
        return {
            ngModule: MDBTooltipModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_4__tooltip_service__["a" /* TooltipConfig */], __WEBPACK_IMPORTED_MODULE_5__utils_component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_6__utils_positioning__["a" /* PositioningService */]]
        };
    };
    ;
    MDBTooltipModule = MDBTooltipModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */], __WEBPACK_IMPORTED_MODULE_2__tooltip_component__["a" /* TooltipContainerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tooltip_component__["a" /* TooltipContainerComponent */]]
        })
    ], MDBTooltipModule);
    return MDBTooltipModule;
    var MDBTooltipModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/tooltip/tooltip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Default values provider for tooltip */
var TooltipConfig = /** @class */ (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    TooltipConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], TooltipConfig);
    return TooltipConfig;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/component-loader/component-loader.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__triggers__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/triggers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/content-ref.class.ts");
// todo: add delay support
// todo: merge events onShow, onShown, etc...
// todo: add global positioning configuration?



var ComponentLoader = /** @class */ (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._providers = [];
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ReflectiveInjector */].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) {
                this.container.nativeElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                //  document.querySelector(this.container as string)
                document.querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this.onHidden.emit();
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = Object(__WEBPACK_IMPORTED_MODULE_1__triggers__["a" /* listenToTriggers */])(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([]);
        }
        if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */]) {
            if (this._viewContainerRef) {
                var viewRef_1 = this._viewContainerRef.createEmbeddedView(content);
                return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([viewRef_1.rootNodes], viewRef_1);
            }
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var modalContentInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ReflectiveInjector */].resolveAndCreate(this._providers.concat([content]), this._injector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([[this._renderer.createText(null, "" + content)]]);
    };
    return ComponentLoader;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/component-loader/component-loader.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentLoaderFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_class__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/component-loader.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/positioning/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentLoaderFactory = /** @class */ (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new __WEBPACK_IMPORTED_MODULE_1__component_loader_class__["a" /* ComponentLoader */](_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_2__positioning__["a" /* PositioningService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]])
    ], ComponentLoaderFactory);
    return ComponentLoaderFactory;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/component-loader/content-ref.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentRef; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/component-loader/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_loader_class__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/component-loader.class.ts");
/* unused harmony reexport ComponentLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/component-loader.factory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/component-loader/content-ref.class.ts");
/* unused harmony reexport ContentRef */





/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/decorators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = OnChange;
/*tslint:disable:no-invalid-this */
function OnChange() {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () { return this[_key]; },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */


/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/facade/browser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return document; });
/* unused harmony export location */
/* unused harmony export gc */
/* unused harmony export performance */
/* unused harmony export Event */
/* unused harmony export MouseEvent */
/* unused harmony export KeyboardEvent */
/* unused harmony export EventTarget */
/* unused harmony export History */
/* unused harmony export Location */
/* unused harmony export EventListener */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];


/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorators__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/decorators.ts");
/* unused harmony reexport OnChange */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linked_list_class__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/linked-list.class.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__linked_list_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_bootstrap_config__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__ng2_bootstrap_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trigger_class__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/trigger.class.ts");
/* unused harmony reexport Trigger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_class__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/utils.class.ts");
/* unused harmony reexport Utils */







/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/linked-list.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedList; });
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        // public length: = 0;
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var outArray = [];
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    // public get(position: number): T {
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var currentPreviousNode = this.getNode(position - 1);
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    LinkedList.prototype.findAll = function (fn) {
        var current = this.head;
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    // public pop(): T {
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    // public shift(): T {
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    LinkedList.prototype.forEach = function (fn) {
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    LinkedList.prototype.indexOf = function (value) {
        var current = this.head;
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    LinkedList.prototype.some = function (fn) {
        var current = this.head;
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.every = function (fn) {
        var current = this.head;
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    // public find(fn: any): T {
    LinkedList.prototype.find = function (fn) {
        var current = this.head;
        // let result: T;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.findIndex = function (fn) {
        var current = this.head;
        // let result: number;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    return LinkedList;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/ng2-bootstrap-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isBs3;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/facade/browser.ts");

function isBs3() {
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["b" /* window */].__theme === 'bs4';
}


/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/positioning/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_positioning__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/positioning/ng-positioning.ts");
/* unused harmony reexport positionElements */
/* unused harmony reexport Positioning */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioning_service__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/positioning/positioning.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__positioning_service__["a"]; });




/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/positioning/ng-positioning.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ __webpack_exports__["a"] = positionElements;
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}


/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/positioning/positioning.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositioningService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_positioning__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/positioning/ng-positioning.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PositioningService = /** @class */ (function () {
    function PositioningService() {
    }
    //  public position(options: PositioningOptions): void {
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        Object(__WEBPACK_IMPORTED_MODULE_1__ng_positioning__["a" /* positionElements */])(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) {
            return element.nativeElement;
        }
        return element;
    };
    PositioningService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], PositioningService);
    return PositioningService;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/trigger.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trigger; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());



/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/triggers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseTriggers */
/* harmony export (immutable) */ __webpack_exports__["a"] = listenToTriggers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trigger_class__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/trigger.class.ts");

var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new __WEBPACK_IMPORTED_MODULE_0__trigger_class__["a" /* Trigger */](alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    //  parsedTriggers.forEach((trigger: Trigger) => {
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}


/***/ }),

/***/ "../../../../../src/app/typescripts/free/utils/utils.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__("../../../../../src/app/typescripts/free/utils/facade/browser.ts");

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = __WEBPACK_IMPORTED_MODULE_0__facade_browser__["b" /* window */];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map