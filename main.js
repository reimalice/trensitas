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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-app-nav></app-app-nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-app-footer></app-app-footer>\r\n"

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
        this.title = 'tourism-web';
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-fontawesome/angular2-fontawesome */ "./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app-nav/app-nav.component */ "./src/app/components/app-nav/app-nav.component.ts");
/* harmony import */ var _components_app_home_app_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app-home/app-home.component */ "./src/app/components/app-home/app-home.component.ts");
/* harmony import */ var _components_app_blog_app_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/app-blog/app-blog.component */ "./src/app/components/app-blog/app-blog.component.ts");
/* harmony import */ var _components_app_contact_app_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/app-contact/app-contact.component */ "./src/app/components/app-contact/app-contact.component.ts");
/* harmony import */ var _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/app-footer/app-footer.component */ "./src/app/components/app-footer/app-footer.component.ts");
/* harmony import */ var _components_app_slide_app_slide_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/app-slide/app-slide.component */ "./src/app/components/app-slide/app-slide.component.ts");
/* harmony import */ var _components_app_articles_app_articles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/app-articles/app-articles.component */ "./src/app/components/app-articles/app-articles.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'home', component: _components_app_home_app_home_component__WEBPACK_IMPORTED_MODULE_7__["AppHomeComponent"] },
    { path: 'blog', component: _components_app_blog_app_blog_component__WEBPACK_IMPORTED_MODULE_8__["AppBlogComponent"] },
    { path: 'contact', component: _components_app_contact_app_contact_component__WEBPACK_IMPORTED_MODULE_9__["AppContactComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_6__["AppNavComponent"],
                _components_app_home_app_home_component__WEBPACK_IMPORTED_MODULE_7__["AppHomeComponent"],
                _components_app_blog_app_blog_component__WEBPACK_IMPORTED_MODULE_8__["AppBlogComponent"],
                _components_app_contact_app_contact_component__WEBPACK_IMPORTED_MODULE_9__["AppContactComponent"],
                _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_10__["AppFooterComponent"],
                _components_app_slide_app_slide_component__WEBPACK_IMPORTED_MODULE_11__["AppSlideComponent"],
                _components_app_articles_app_articles_component__WEBPACK_IMPORTED_MODULE_12__["AppArticlesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_4__["Angular2FontawesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app-articles/app-articles.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/app-articles/app-articles.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app-articles/app-articles.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/app-articles/app-articles.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\" *ngFor=\"let article of articles\" >\r\n    <div class=\"card mb-1\" >\r\n      <img class=\"card-img-top\" [src]=\"article.img\" alt=\"Card image cap\" >\r\n\r\n      <a class=\"btn btn-primary\" routerLink=\"/blog\">Detalles</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/app-articles/app-articles.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/app-articles/app-articles.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppArticlesComponent", function() { return AppArticlesComponent; });
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

var AppArticlesComponent = /** @class */ (function () {
    function AppArticlesComponent() {
        this.artimg = 'https://reimalice.github.io/ajayu-biker/assets/articles/img.jpg';
        this.articles = [
            { title: 'La Paz 360°', content: 'This is article one', img: 'assets/images/uno.jpg' }
            // { title: 'Pura Pura Under', content: 'This is article Two', img:'https://i.ibb.co/18xzjJR/under.jpg' }
        ];
    }
    AppArticlesComponent.prototype.ngOnInit = function () {
    };
    AppArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-articles',
            template: __webpack_require__(/*! ./app-articles.component.html */ "./src/app/components/app-articles/app-articles.component.html"),
            styles: [__webpack_require__(/*! ./app-articles.component.css */ "./src/app/components/app-articles/app-articles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppArticlesComponent);
    return AppArticlesComponent;
}());



/***/ }),

/***/ "./src/app/components/app-blog/app-blog.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/app-blog/app-blog.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app-blog/app-blog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/app-blog/app-blog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-light\">\r\n  <section class=\"my-5\">\r\n    <!--heading -->\r\n    <h2 class=\"font-weight-bold text-center my-5\">ITINERARIOS MAX PAREDES</h2>\r\n    <!--description -->\r\n    <p class=\"text-center dark-grey-text mx-auto mb-5\">\r\n      Le ofrecemos los siguientes itinerarios los cuales recorren por lo mejor de la ciudad de La Paz la ciudad maravilla. Con este recorrido el turista se apartará de la principal ruta turística para entrar en los distintos miradores y lugares misteriosos de la ciudad de La Paz. \r\n    </p>\r\n\r\n    <div class=\"row my-5\">\r\n      <div class=\"col-lg-5 col-xl-4\">\r\n        <div class=\"mb-lg-0 mb-4\">\r\n          <img class=\"img-fluid\" src=\"https://i.ibb.co/bHCbxdL/lapaz.jpg\" alt=\"Blog image\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-7 col-xl-8\">\r\n        <!-- Post title -->\r\n        <h3 class=\"font-weight-bold mb-3\"><strong>ITINERARIO LA PAZ 360º</strong></h3>\r\n        <table class=\"table\">\r\n          <thead class=\"thead-dark\">\r\n            <tr>\r\n              <th scope=\"col\">HORARIO</th>\r\n              <th scope=\"col\">ACTIVIDADES</th>\r\n              <th scope=\"col\">DESCRIPCIÓN</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>8:00</td>\r\n              <td>ENCUENTRO</td>\r\n              <td>TELEFÉRICO ROJO ESTACIÓN \r\n                CENTRAL\r\n                Se esperará máximo 10 min.\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>8:10</td>\r\n              <td>PARTIDA AL MIRADOR\r\n                21 DE ENERO\r\n                </td>\r\n              <td>El bus se dirigirá hacia el\r\n                primer mirador\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>8:20</td>\r\n              <td>LLEGADA AL \r\n                MIRADOR\r\n                21 DE ENERO\r\n                </td>\r\n              <td>LOS TURISTAS TENDRÁN 25 MIN\r\n                PARA ESCUCHAR UNA \r\n                EXPLICACIÓN\r\n                OBSERVAR Y TOMAR \r\n                FOTOGRAFÍAS.\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>8:45</td>\r\n              <td>PARTIDA AL MIRADOR\r\n                VILLA VICTORIA\r\n                </td>\r\n              <td>El bus que estará esperando\r\n                se dirigirá hacia el Segundo mirador\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>8:55</td>\r\n              <td>LLEGADA AL\r\n                MIRADOR\r\n               VILLA VICTORIA\r\n               </td>\r\n              <td>LOS TURISTAS TENDRÁN 25 MIN\r\n                PARA ESCUCHAR UNA \r\n                EXPLICACIÓN\r\n                OBSERVAR Y TOMAR \r\n                FOTOGRAFÍAS.\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>9:20</td>\r\n              <td>PARTIDA AL MIRADOR\r\n                MUNAYPATA\r\n                </td>\r\n              <td>El bus que estará esperando\r\n                se dirigirá hacia el tercer mirador\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td> \r\n \r\n                9:30\r\n                </td>\r\n              <td>LLEGADA AL \r\n                MIRADOR\r\n                MUNAYPATA\r\n                </td>\r\n              <td>LOS TURISTAS TENDRÁN 30 MIN\r\n                PARA ESCUCHAR UNA \r\n                EXPLICACIÓN,\r\n                OBSERVAR, TOMAR FOTOGRAFÍAS\r\n                 Y RECORRER EL PARQUE Y EL \r\n                MIRADOR\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td> \r\n                10: 00\r\n                </td>\r\n              <td>PARTIDA AL MIRADOR\r\n                NACIONES UNIDAS\r\n                </td>\r\n              <td>El bus que estará esperando\r\n                se dirigirá hacia el cuarto mirador\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>10:15</td>\r\n              <td> \r\n                LLEGADA AL MIRADOR\r\n                NACIONES UNIDAS\r\n                </td>\r\n              <td>LOS TURISTAS TENDRAN 30 MIN\r\n                PARA ESCUCHAR UNA EXPLICACIÓN,\r\n                OBSERVAR, TOMAR FOTOGRAFÍAS Y\r\n                RECORRER EL PARQUE Y EL MIRADOR\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>10:45</td>\r\n              <td>REFRIGERIO</td>\r\n              <td>SE DARÁ UN REFRIGERIO LIVIANO A\r\n                LOS TURISTAS (UN SÁNDWICH Y UN JUGO)\r\n                Y 15 MIN PARA CONSUMIRLO\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>11:00</td>\r\n              <td>PARTIDA AL MIRADOR\r\n                ILLIMANI\r\n                </td>\r\n              <td>El bus que estará esperando\r\n                se dirigirá hacia el último mirador\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>11:15</td>\r\n              <td> \r\n                LLEGADA AL MIRADOR\r\n                ILLIMANI\r\n                </td>\r\n              <td>LOS TURISTAS TENDRAN 40 MIN\r\n                PARA ESCUCHAR UNA EXPLICACIÓN,\r\n                OBSERVAR, TOMAR FOTOGRAFÍAS\r\n                CON UN FONDO COMPLETO DEL ILLIMANI Y\r\n                LA CIUDAD DE 180 GRADOS y PRESENCIAR DE UN RITUAL TRADICIONAL\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td> \r\n                12:00\r\n                </td>\r\n              <td> \r\n                PARTIDA AL PUNTO FINAL\r\n                FIN DE LA RUTA\r\n                </td>\r\n              <td>El bus dejará a los turistas en el\r\n                Teleférico Rojo, Estación Jacha\r\n                Qhathu de El Alto\r\n                </td>\r\n            </tr>\r\n           \r\n          </tbody>\r\n        </table>\r\n        \r\n   \r\n        <!-- Post data -->\r\n        <p class=\"text-muted\">por <a>Rocio Limachi Condori</a>, 20/06/2021</p>\r\n        <a class=\"btn btn-primary text-white\">Reservar</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row my-5\">\r\n      <div class=\"col-lg-5 col-xl-4\">\r\n        <div class=\"mb-lg-0 mb-4\">\r\n          <img class=\"img-fluid\" src=\"https://i.ibb.co/18xzjJR/under.jpg\" alt=\"Blog image\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-7 col-xl-8\">\r\n        <!-- Post title -->\r\n        <h3 class=\"font-weight-bold mb-3\"><strong>ITINERARIO PURA PURA UNDER</strong></h3>\r\n        <table class=\"table\">\r\n          <thead class=\"thead-dark\">\r\n            <tr>\r\n              <th scope=\"col\">HORARIO</th>\r\n              <th scope=\"col\">ACTIVIDADES</th>\r\n              <th scope=\"col\">DESCRIPCIÓN</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>8:00</td>\r\n              <td>ENCUENTRO</td>\r\n              <td>TELEFÉRICO ROJO ESTACIÓN \r\n                CENTRAL\r\n                Se esperará máximo 10 min.\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>8:10</td>\r\n              <td>PARTIDA HACIA EL\r\n                BOSQUECILLO\r\n               DE PURA PURA               \r\n                </td>\r\n              <td>El bus se dirigirá hacia el\r\n                Bosquecillo de Pura Pura                \r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>8:25</td>\r\n              <td>LLEGADA AL BOSQUECILLO\r\n                DE  PURA PURA\r\n                </td>\r\n              <td>LOS TURISTAS RECIBIRÁN UNA EXPLICACIÓN GENERAL ACERCA DE LOS TÚNELES Y EL BOSQUECILLO DE PURA PURA, TAMBIÉN RECOMENDACIONES DE SEGURIDAD Y SE LES DOTARÁ DE EQUIPAMIENTO NECESARIO.\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>8:50</td>\r\n              <td>VISITA A LA CASA DE LOS\r\n                DUENDES (EX DEPÓSITO DE\r\n                CARBÓN DE ENFE)\r\n                \r\n                </td>\r\n              <td>LOS TURISTAS RECIBIRÁN UNA EXPLICACIÓN DE LA CASA DE LOS DUENDES, LEYENDA DE SALVIETTI Y SE ASIGNARÁ UN\r\n                TIEMPO PARA FOTOGRAFÍAS\r\n                \r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>9:25</td>\r\n              <td>  CAMINATA AL PRIMER\r\n                TÚNEL\r\n                \r\n               </td>\r\n              <td>CAMINATA SOBRE LAS RIELES DEL\r\n                FERROCARRIL HACIA EL INGRESO, EXPLICACIÒN Y FOTOGRAFÍAS\r\n                \r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>9:40</td>\r\n              <td>DOTACIÓN DE\r\n                EQUIPAMIENTO\r\n               \r\n                </td>\r\n              <td>SE DOTARÁ A CADA TURISTA DE UN CASCO UNA LINTERNA Y UN BASTÓN DE CAMINATA.\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td> \r\n \r\n                9:55\r\n                </td>\r\n              <td>EXPLORACIÓN AL PRIMER\r\n                TÚNEL(SOBRE LA TIERRA)\r\n                \r\n                </td>\r\n              <td>SE INGRESARÁ AL TÚNEL CON LOS GUÍAS ASIGNADOS LOS CUALES DARÁN UNA PREVIA EXPLICACIÓN, ES PRIMORDIAL QUE EL GRUPO NO SE SEPARE\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td> \r\n                10: 25\r\n                </td>\r\n              <td>INGRESO Y EXPLORACIÓN AL SEGUNDO TÚNEL(SUBTERRÁNEO)\r\n                </td>\r\n              <td>SE INGRESARÁ AL TÚNEL CON LOS GUÍAS ASIGNADOS, Y SE EXPLICARÁ ACERCA DE LA INFINIDAD DE BOLSAS NEGRAS PRESENTES EN ESTE TÚNEL\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>10:55</td>\r\n              <td> \r\n                INGRESO Y EXPLORACIÓN AL\r\n                TERCER\r\n                 TÚNEL(SUBTERRÁNEO)\r\n                \r\n                </td>\r\n              <td>ANTES DE INGRESAR AL TÚNEL SE FORMARÁN GRUPOS DE 5 CADA UNO CON UN GUÍA DEBIDO AL OXÍGENO, YA QUE ESTE ES EL MÁS LARGO, SE RECORRERÁ EL TÚNEL EN GRUPOS SEPARADOS SIN PÉRDIDA DE COMUNICACIÓN\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>11:30</td>\r\n              <td>SALIDA DEL TERCER\r\n                TÚNEL (EN EL PARQUE PURA\r\n               PURA)\r\n               Y\r\n               REFRIGERIO\r\n               </td>\r\n              <td>SE REALIZARÁ UNA CONVIVENCIA DONDE SE RELATAN LEYENDAS Y EXPERIENCIAS RELACIONADAS Y CONCIENTIZACIÓN DE LA VALORACIÓN DEL PATRIMONIO DE ESTE BOSQUECILLO MIENTRAS SE COMPARTE UN REFRIGERIO\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n              <td>12:00</td>\r\n              <td> \r\n                FIN DE LA EXCURSIÓN\r\n                \r\n                </td>\r\n              <td>LA DESPEDIDA SERÁ FUERA DE LA PUERTA PRINCIPAL AL INGRESO DEL PARQUE PURA PURA\r\n                </td>\r\n            </tr>\r\n \r\n           \r\n          </tbody>\r\n        </table>\r\n        \r\n   \r\n        <!-- Post data -->\r\n        <p class=\"text-muted\">por <a>Rocio Limachi Condori</a>, 20/06/2021</p>\r\n        <a class=\"btn btn-primary text-white\">Reservar</a>\r\n      </div>\r\n    </div>\r\n\r\n    <hr class=\"my-5\">\r\n\r\n  </section>\r\n  <!-- Section: Blog v.3 -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/app-blog/app-blog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/app-blog/app-blog.component.ts ***!
  \***********************************************************/
/*! exports provided: AppBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBlogComponent", function() { return AppBlogComponent; });
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

var AppBlogComponent = /** @class */ (function () {
    function AppBlogComponent() {
        this.blogimg = 'https://reimalice.github.io/ajayu-biker/assets/blog/blog.jpg';
        this.blogcontent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, provident corrupti? Soluta deleniti eveniet\n  dolorem ducimus vitae? Adipisci culpa amet earum molestias impedit. Fuga animi aliquid molestiae eligendi. Earum\n  odio veritatis sint mollitia labore ipsam tenetur cum vitae, atque suscipit rem, corrupti obcaecati ullam nulla,\n  sunt doloribus tempore fugiat quibusdam!";
        this.posts = [
            { title: 'LA PAZ 360º', content: 'This is article one', by: 'jessica doe', on: '12/02/2017', img: 'https://i.ibb.co/bHCbxdL/lapaz.jpg' },
            { title: 'PURA PURA UNDER', content: 'This is article Two', by: 'jhon smith', on: '02/07/2016', img: 'https://i.ibb.co/18xzjJR/under.jpg' }
        ];
    }
    AppBlogComponent.prototype.ngOnInit = function () {
    };
    AppBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-blog',
            template: __webpack_require__(/*! ./app-blog.component.html */ "./src/app/components/app-blog/app-blog.component.html"),
            styles: [__webpack_require__(/*! ./app-blog.component.css */ "./src/app/components/app-blog/app-blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppBlogComponent);
    return AppBlogComponent;
}());



/***/ }),

/***/ "./src/app/components/app-contact/app-contact.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/app-contact/app-contact.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app-contact/app-contact.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/app-contact/app-contact.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <section class=\"section pb-5\">\r\n\r\n    <h2 class=\"pt-4 text-center text-light\"> CONTACTANOS</h2>\r\n    <p class=\"pb-4 text-center text-light\">Escribenos con tu sugerencia sobre nuevas rutas, opiniones sobre nuestra empresa, con gusto nosotros te responderemos.</p>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-5 mb-4\">\r\n        <div class=\"card\">\r\n\r\n          <div class=\"card-body\">\r\n            <!--Header-->\r\n            <div class=\"\">\r\n              <h3><i class=\"fa fa-envelope\"></i> Escríbenos</h3>\r\n            </div>\r\n\r\n            <br>\r\n\r\n            <!--Body-->\r\n            <form [formGroup]=\"myForm\" (ngSubmit)=\"addForm(myForm.value)\">\r\n\r\n              <div class=\"\">\r\n                <i class=\"fa fa-user\"></i>\r\n                <label for=\"name\">Nombre completo</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\">\r\n              </div>\r\n\r\n              <div class=\"\">\r\n                <i class=\"fa fa-envelope\"></i>\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\">\r\n              </div>\r\n\r\n              <div class=\"\">\r\n                <i class=\"fa fa-pencil\"></i>\r\n                <label for=\"message\">Mensaje</label>\r\n                <textarea type=\"text\" id=\"message\" class=\"form-control\" rows=\"3\" formControlName=\"message\"></textarea>\r\n              </div>\r\n\r\n              <div class=\"text-center mt-4\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n              </div>\r\n\r\n            </form>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <!--Form with header-->\r\n\r\n      </div>\r\n\r\n      <div class=\"col-lg-7\">\r\n\r\n        <!--Google map-->\r\n        <!-- <div id=\"map-container-7\" class=\"z-depth-1-half map-container\" style=\"height: 400px\"></div> -->\r\n        <div id=\"googleMap\" #googleMap style=\"width:100%; height:300px\"></div>\r\n\r\n        <br>\r\n        <!---->\r\n        <div class=\"row text-center text-light\">\r\n          <div class=\"col-md-4\">\r\n            <a class=\"btn-floating blue accent-1\"><i class=\"fa fa-map-marker\"></i></a>\r\n            <p> Sagarnnaga 245 esq. Linares,</p>\r\n            <p> La Paz</p>\r\n            <p> Bolivia</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <a class=\"btn-floating blue accent-1\"><i class=\"fa fa-phone\"></i></a>\r\n            <p>+591 78920444</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <a class=\"btn-floating blue accent-1\"><i class=\"fa fa-envelope\"></i></a>\r\n            <p>travelmaxparedes@gmail.com</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!--Grid column-->\r\n\r\n    </div>\r\n\r\n  </section>\r\n  <!--Section: Contact v.1-->\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/app-contact/app-contact.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-contact/app-contact.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContactComponent", function() { return AppContactComponent; });
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


// import { } from '@types/googlemaps';
var AppContactComponent = /** @class */ (function () {
    function AppContactComponent(fb) {
        this.fb = fb;
    }
    AppContactComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'message': ['']
        });
        this.myForm.valueChanges.subscribe(console.log);
        var mapProp = {
            center: new google.maps.LatLng(19.2372, 72.8441),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    };
    AppContactComponent.prototype.addForm = function (data) {
        console.log(data);
    };
    AppContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-contact',
            template: __webpack_require__(/*! ./app-contact.component.html */ "./src/app/components/app-contact/app-contact.component.html"),
            styles: [__webpack_require__(/*! ./app-contact.component.css */ "./src/app/components/app-contact/app-contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AppContactComponent);
    return AppContactComponent;
}());



/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/app-footer/app-footer.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  background-color: rgb(0, 0, 0);\r\n  color: #fff;\r\n}\r\n\r\nfooter a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\nfooter #copyright {\r\n  background-color: #000;\r\n}\r\n\r\n.f-icon:hover {\r\n  color: #3b5999;\r\n}\r\n\r\n.t-icon:hover {\r\n  color: #55acee;\r\n}\r\n\r\n.i-icon:hover {\r\n  color: #e4405f;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-footer/app-footer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n\r\n  <div class=\"container my-2\">\r\n    <div class=\"row p-2\">\r\n\r\n      <div class=\"col-md-10 pt-10\">\r\n        <p> Un último mensaje:</p>\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"px-2\">\r\n          <p>Sé que no quieres hablarme ni verme, pero quisiera que nos podamos ver mañana (28/02/2022) a las 3 pm de la tarde, si puedes, estaré en el parquecito de la avenida Vázquez, en las bancas donde alguna vez festejamos por primera vez mi cumpleaños, te esperare ahí hasta que anochezca y si decides no venir, lo sabré por tu ausencia, no te quiero molestar más, cuídate mucho, te quiero.</p>\r\n \r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"copyright\">\r\n    <div class=\"container p-1\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\"> Copyright &copy;Rei malice</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/app-footer/app-footer.component.ts ***!
  \***************************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
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

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
        this.cimg1 = 'https://raw.githubusercontent.com/biker-ajayu/website/gh-pages/assets/images/logoBiker.jpeg';
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    AppFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-footer',
            template: __webpack_require__(/*! ./app-footer.component.html */ "./src/app/components/app-footer/app-footer.component.html"),
            styles: [__webpack_require__(/*! ./app-footer.component.css */ "./src/app/components/app-footer/app-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/app-home/app-home.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/app-home/app-home.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n  font-family: 'Satisfy', cursive !important;\r\n  font-weight: 600;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.carousel-item {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 50%;\r\n}\r\n\r\n.banner-overlay {\r\n  padding: 100px 0;\r\n  background: rgba(0,0,0, .1);\r\n}\r\n\r\n#header-banner {\r\n  background: url('/src/assets/images/once.jpeg');\r\n  height: 70px;\r\n}\r\n\r\n.page-title {\r\n  margin-bottom: 1.5rem;\r\n  font-size: 3rem;\r\n  line-height: 1.2;\r\n  \r\n  font-family: 'Impallari Type, Cyreal ', sans-serif;\r\n  text-align: center;\r\ncolor: white;\r\n}"

/***/ }),

/***/ "./src/app/components/app-home/app-home.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/app-home/app-home.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel slide mb-3\" data-ride=\"carousel\">\r\n\r\n <div class=\"text-center  text-white\">\r\n    <h1 class=\"title\">PERDÓN</h1>\r\n  </div>\r\n\r\n  <div class=\"container py-5\">\r\n\r\n\r\n\r\n    <app-app-articles></app-app-articles>\r\n\r\n    <div class=\"row\">\r\n      <app-app-slide class=\"mx-auto\"></app-app-slide>\r\n    </div>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/components/app-home/app-home.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/app-home/app-home.component.ts ***!
  \***********************************************************/
/*! exports provided: AppHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHomeComponent", function() { return AppHomeComponent; });
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

var AppHomeComponent = /** @class */ (function () {
    function AppHomeComponent() {
        this.cimg1 = 'https://reimalice.github.io/ajayu-biker/assets/images/carousel/cimg1.jpg';
        this.cimg2 = 'https://reimalice.github.io/ajayu-biker/assets/images/carousel/cimg2.jpg';
    }
    AppHomeComponent.prototype.ngOnInit = function () {
    };
    AppHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-home',
            template: __webpack_require__(/*! ./app-home.component.html */ "./src/app/components/app-home/app-home.component.html"),
            styles: [__webpack_require__(/*! ./app-home.component.css */ "./src/app/components/app-home/app-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHomeComponent);
    return AppHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/app-nav/app-nav.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/app-nav/app-nav.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link:hover {\r\n  transition: 0.3s;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/app-nav/app-nav.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/app-nav/app-nav.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(197, 27, 27) 58%, rgb(245, 157, 157) 100%);\">\r\n  <img class=\"d-block\" [src]=\"simg1\" alt=\"First slide\" style=\"width: 12%;\">\r\n\r\n  <div class=\"container\">\r\n\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n      <!-- <ul class=\"navbar-nav mx-auto\">\r\n        <li class=\"nav-item px-3\">\r\n          <a class=\"nav-link text-uppercase text-light\" routerLink=\"/home\" routerLinkActive=\"active\">INICIO</a>\r\n        </li>\r\n        <li class=\"nav-item px-3\">\r\n          <a class=\"nav-link text-uppercase text-light\" routerLink=\"/blog\" routerLinkActive=\"active\">ITINERARIOS</a>\r\n        </li>\r\n        <li class=\"nav-item px-3\">\r\n          <a class=\"nav-link text-uppercase text-light\" routerLink=\"/contact\" routerLinkActive=\"active\">CONTÁCTANOS</a>\r\n        </li>\r\n      </ul> -->\r\n      <ul class=\"d-md-inline-block d-lg-inline-block ml-auto\">\r\n        <li class=\"nav-link text-light\">\r\n          <p>\r\n\r\n            <fa [name]=\"'phone'\"></fa>\r\n            Llamamè: \r\n            62444566\r\n          </p>\r\n\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/app-nav/app-nav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/app-nav/app-nav.component.ts ***!
  \*********************************************************/
/*! exports provided: AppNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavComponent", function() { return AppNavComponent; });
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

var AppNavComponent = /** @class */ (function () {
    function AppNavComponent() {
        this.simg1 = 'assets/images/plancton.jpg';
    }
    AppNavComponent.prototype.ngOnInit = function () {
    };
    AppNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-nav',
            template: __webpack_require__(/*! ./app-nav.component.html */ "./src/app/components/app-nav/app-nav.component.html"),
            styles: [__webpack_require__(/*! ./app-nav.component.css */ "./src/app/components/app-nav/app-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppNavComponent);
    return AppNavComponent;
}());



/***/ }),

/***/ "./src/app/components/app-slide/app-slide.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/app-slide/app-slide.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app-slide/app-slide.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/app-slide/app-slide.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 mx-auto\">\r\n  <!--Carousel Wrapper-->\r\n  <div id=\"slides\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\r\n    <!--Indicators-->\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#slides\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"3\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"4\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"5\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"6\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"7\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"8\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"9\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"10\"></li>\r\n\r\n\r\n    </ol>\r\n    <!--/.Indicators-->\r\n\r\n    <!--Slides-->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div class=\"carousel-item active\">\r\n        <div class=\"view\">\r\n          <img class=\"d-block w-100\" [src]=\"simg1\" alt=\"First slide\">\r\n          <div class=\"mask rgba-black-light\"></div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <div class=\"view\">\r\n          <img class=\"d-block w-100\" [src]=\"simg2\" alt=\"Second slide\">\r\n          <div class=\"mask rgba-black-strong\"></div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <div class=\"view\">\r\n          <img class=\"d-block w-100\" [src]=\"simg3\" alt=\"Third slide\">\r\n          <div class=\"mask rgba-black-slight\"></div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <div class=\"view\">\r\n          <img class=\"d-block w-100\" [src]=\"simg4\" alt=\"Third slide\">\r\n          <div class=\"mask rgba-black-slight\"></div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n\r\n        <div class=\"view\">\r\n          <img class=\"d-block w-100\" [src]=\"simg5\" alt=\"Third slide\">\r\n          <div class=\"mask rgba-black-slight\"></div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n\r\n        <div class=\"view\">\r\n          <img class=\"d-block w-100\" [src]=\"simg6\" alt=\"Third slide\">\r\n          <div class=\"mask rgba-black-slight\"></div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n\r\n        <div class=\"view\">\r\n          <img class=\"d-block w-100\" [src]=\"simg7\" alt=\"Third slide\">\r\n          <div class=\"mask rgba-black-slight\"></div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n\r\n        <div class=\"view\">\r\n          <img class=\"d-block w-100\" [src]=\"simg8\" alt=\"Third slide\">\r\n          <div class=\"mask rgba-black-slight\"></div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n\r\n        <div class=\"view\">\r\n          <img class=\"d-block w-100\" [src]=\"simg9\" alt=\"Third slide\">\r\n          <div class=\"mask rgba-black-slight\"></div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"carousel-item\">\r\n\r\n        <div class=\"view\">\r\n          <img class=\"d-block w-100\" [src]=\"simg10\" alt=\"Third slide\">\r\n          <div class=\"mask rgba-black-slight\"></div>\r\n        </div>\r\n\r\n      </div>\r\n    \r\n    <div class=\"carousel-item\">\r\n\r\n      <div class=\"view\">\r\n        <img class=\"d-block w-100\" [src]=\"simg11\" alt=\"Third slide\">\r\n        <div class=\"mask rgba-black-slight\"></div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n    <!--/.Slides-->\r\n    <!--Controls-->\r\n    <a class=\"carousel-control-prev\" href=\"#slides\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#slides\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n    <!--/.Controls-->\r\n  </div>\r\n  <!--/.Carousel Wrapper-->\r\n</div>"

/***/ }),

/***/ "./src/app/components/app-slide/app-slide.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/app-slide/app-slide.component.ts ***!
  \*************************************************************/
/*! exports provided: AppSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSlideComponent", function() { return AppSlideComponent; });
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

var AppSlideComponent = /** @class */ (function () {
    function AppSlideComponent() {
        this.simg1 = 'assets/images/un.jpeg';
        this.simg2 = 'assets/images/dos.jpeg';
        this.simg3 = 'assets/images/tres.jpeg';
        this.simg4 = 'assets/images/cuatro.jpeg';
        this.simg5 = 'assets/images/cinco.jpeg';
        this.simg6 = 'assets/images/seis.jpeg';
        this.simg7 = 'assets/images/siete.jpeg';
        this.simg8 = 'assets/images/ocho.jpeg';
        this.simg9 = 'assets/images/nueve.jpeg';
        this.simg10 = 'assets/images/diez.jpeg';
        this.simg11 = 'assets/images/once.jpeg';
    }
    AppSlideComponent.prototype.ngOnInit = function () {
    };
    AppSlideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-slide',
            template: __webpack_require__(/*! ./app-slide.component.html */ "./src/app/components/app-slide/app-slide.component.html"),
            styles: [__webpack_require__(/*! ./app-slide.component.css */ "./src/app/components/app-slide/app-slide.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppSlideComponent);
    return AppSlideComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Reynaldo\desarrollo\maxparedes\website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map