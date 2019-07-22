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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a href=\"#\">Home</a></li>\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Page 1\n        <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Page 1-1</a></li>\n          <li><a href=\"#\">Page 1-2</a></li>\n          <li><a href=\"#\">Page 1-3</a></li>\n        </ul>\n      </li>\n      <li><a href=\"#\">Page 2</a></li>\n      <li><a href=\"#\">Page 3</a></li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<!--<div class=\"container\">\n  <div class=\"col-md-9\">\n    <ul class=\"list-group\" *ngIf=\"categories\">\n      <li class=\"list-group-item\" *ngFor= \"let c of categories._embedded.categories\">\n        {{c.name}}\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-md-9\">\n    \n  </div>\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/produits/produits.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/produits/produits.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row card-deck\">\n<div class=\"col-md-6\">\n<div *ngIf =\"produits\">\n    <div *ngFor = \"let p of produits, let i=index\">\n        <div class=\"col-md-6\">\n        <div class=\"panel panel-default\">\n            <div class = \"panel-heading\">{{p.nom}}</div>\n            <div class= \"panel-body\">\n                <table *ngIf=\"!p.selected\">\n                    <tr>\n                        <td>\n                         <img  class = \"card_img-top\" src={{p.photo}} height=\"100px\">\n                        </td>\n                        <td>\n                            {{p.prix}} $\n                        </td>\n                    </tr>\n                    <br>\n                    <tr >\n                        <button (click) = \"showDetails(i)\">Detail</button>\n                    </tr>\n                </table>\n                <table *ngIf=\"p.selected\">\n                    <tr>\n                      description:   {{p.detail}} \n                    </tr>\n                    <br>\n                    <tr>\n                        <img class = \"card_img-top\" src={{p.photo}}  height=\"100px\"> \n                    </tr>\n                    <br>\n                    <tr>\n                        {{p.prix}} $\n                    </tr>\n                    <br>\n                    <tr>\n                        <input type=\"number\" min=\"1\" max=\"9\" [(ngModel)]=\"quantite\">\n                    </tr>\n                    <br>\n                    <tr>\n                        <td><button (click) = \"addToCart(p, quantite)\">Ajouter</button></td>\n                        <td><button  (click) = \"hideDetails(i)\">Fermer</button></td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n</div>\n\n\n<div class=\"col-md-3\">\n    <div  *ngIf=\"!showCart\" class=\"card text-white bg-danger mb-3\" >\n            <div class=\"card-header text-center\">Panier</div>\n            <div class=\"card-body\">\n                <h2 class=\"card-title text-center\">{{nombreArticles}} article(s)</h2>            \n                <button  (click)=\"getCart()\">Voir le panier</button>\n            </div>\n        </div>\n\n        <div *ngIf=\"showCart\" class=\"card text-white bg-danger mb-3\" >\n                <div class=\"card-header text-center\">Panier</div>\n                <div class=\"card-body\">\n                    \n                    \n                    <h6 class=\"card-title\">Article(s) sélectionné(s):</h6>\n             \n                    <ul>\n                        <li *ngFor=\"let art of selectedProduits\">\n                        {{art.quantite}}X ->   {{ art.produit.nom }} - {{ art.produit.prix}} $.\n                        </li>\n                    </ul>\n                    <hr>\n                    <h5 class=\"card-title\">Total: {{total}} $</h5>\n             \n                    <button class=\"btn btn-light btn-block\" [disabled]=\"nombreArticles <= 0\"\n                         (click) =\"postCommande()\">valider\n                    </button>\n                </div>\n            </div>\n\n\n</div>\n\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _produits_produits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produits/produits.component */ "./src/app/produits/produits.component.ts");




const routes = [
    { path: 'produits', component: _produits_produits_component__WEBPACK_IMPORTED_MODULE_3__["ProduitsComponent"] },
    { path: '', redirectTo: 'produits', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _catalogue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogue.service */ "./src/app/catalogue.service.ts");



let AppComponent = class AppComponent {
    constructor(catService) {
        this.catService = catService;
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        this.catService.getResource("/categories")
            .subscribe(data => {
            this.categories = data;
        }, err => {
            console.log(err);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _catalogue_service__WEBPACK_IMPORTED_MODULE_2__["CatalogueService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _produits_produits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produits/produits.component */ "./src/app/produits/produits.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _produits_produits_component__WEBPACK_IMPORTED_MODULE_6__["ProduitsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/catalogue.service.ts":
/*!**************************************!*\
  !*** ./src/app/catalogue.service.ts ***!
  \**************************************/
/*! exports provided: CatalogueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueService", function() { return CatalogueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CatalogueService = class CatalogueService {
    constructor(http) {
        this.http = http;
        this.host = "http://localhost:8080";
    }
    getResource(url) {
        return this.http.get(this.host + url);
    }
    postResource(url, body) {
        return this.http.post(this.host + url, body);
    }
};
CatalogueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CatalogueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CatalogueService);



/***/ }),

/***/ "./src/app/produits/produits.component.css":
/*!*************************************************!*\
  !*** ./src/app/produits/produits.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1aXRzL3Byb2R1aXRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/produits/produits.component.ts":
/*!************************************************!*\
  !*** ./src/app/produits/produits.component.ts ***!
  \************************************************/
/*! exports provided: ProduitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitsComponent", function() { return ProduitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _catalogue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../catalogue.service */ "./src/app/catalogue.service.ts");



let ProduitsComponent = class ProduitsComponent {
    constructor(catService) {
        this.catService = catService;
        this.arrayToObject = (array) => array.reduce((obj, item) => {
            obj[item.id] = item;
            return obj;
        }, {});
    }
    ngOnInit() {
        this.showCart = false;
        this.total = 0;
        this.selectedProduits = [];
        this.getProduits();
        this.quantite = 1;
        this.nombreArticles = 0;
    }
    getProduits() {
        this.catService.getResource("/produits")
            .subscribe(data => {
            this.produits = data['_embedded'].produits;
        }, err => {
            console.log(err);
        });
    }
    postCommande() {
        let pdtCommandes = this.arrayToObject(this.commandeProduitTosend(this.selectedProduits));
        this.catService.postResource("/commandes", pdtCommandes)
            .subscribe(() => {
            console.log('Validé');
        }, err => {
            console.log(err);
        });
    }
    showDetails(index) {
        this.produits[index].selected = true;
        this.quantite = 1;
    }
    hideDetails(index) {
        this.produits[index].selected = false;
    }
    addToCart(produit, quantite) {
        let commandeProduit = {
            produit: produit,
            quantite: quantite
        };
        this.selectedProduits.push({ produit, quantite });
        this.total = this.total + (produit.prix * quantite);
        this.nombreArticles = this.nombreArticles + quantite;
    }
    commandeProduitTosend(selectedProduits) {
        let commandeProduits = [];
        for (let sp of selectedProduits) {
            let cmdPdt = {
                id: sp.produit.id,
                produit: sp.produit,
                quantite: sp.quantite
            };
            commandeProduits.push(cmdPdt);
        }
        return commandeProduits;
    }
    getCart() {
        this.showCart = true;
    }
};
ProduitsComponent.ctorParameters = () => [
    { type: _catalogue_service__WEBPACK_IMPORTED_MODULE_2__["CatalogueService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProduitsComponent.prototype, "quantite", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProduitsComponent.prototype, "index", void 0);
ProduitsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produits',
        template: __webpack_require__(/*! raw-loader!./produits.component.html */ "./node_modules/raw-loader/index.js!./src/app/produits/produits.component.html"),
        styles: [__webpack_require__(/*! ./produits.component.css */ "./src/app/produits/produits.component.css")]
    })
], ProduitsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nancy\Documents\workspace-sts-3.9.9.RELEASE\catalogue-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map