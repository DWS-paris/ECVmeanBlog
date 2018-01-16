webpackJsonp(["addpost.module"],{

/***/ "../../../../../src/app/components/addpost/addpost.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  addpost works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/addpost/addpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpostComponent; });
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

var AddpostComponent = (function () {
    function AddpostComponent() {
    }
    AddpostComponent.prototype.ngOnInit = function () {
    };
    AddpostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addpost',
            template: __webpack_require__("../../../../../src/app/components/addpost/addpost.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AddpostComponent);
    return AddpostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/addpost/addpost.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpostModule", function() { return AddpostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addpost_route__ = __webpack_require__("../../../../../src/app/components/addpost/addpost.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addpost_component__ = __webpack_require__("../../../../../src/app/components/addpost/addpost.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Importer la class pour définir un module

// Importer le module de route

// Importer le composant

// Définition du module
var AddpostModule = (function () {
    // Exporter le module
    function AddpostModule() {
    }
    AddpostModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__addpost_component__["a" /* AddpostComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__addpost_route__["a" /* Routing */]]
        })
        // Exporter le module
    ], AddpostModule);
    return AddpostModule;
}());

;


/***/ }),

/***/ "../../../../../src/app/components/addpost/addpost.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addpost_component__ = __webpack_require__("../../../../../src/app/components/addpost/addpost.component.ts");

// Importer le composant à utiliser dans le route

// Créer une contante pour définir le comportement de la route
var route = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__addpost_component__["a" /* AddpostComponent */]
    }
];
// Exporter le module de route
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(route);


/***/ })

});
//# sourceMappingURL=addpost.module.chunk.js.map