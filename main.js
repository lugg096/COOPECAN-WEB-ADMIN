(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Recursos Luiggi\Ionic\Coopecan\WEB_v2.0\coopecan-adm\src\main.ts */"zUnb");


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
const environment = {
    production: false,
    node: 'http://34.229.8.55',
    url: 'http://34.229.8.55:8080/',
    TOKEN_KEY: 'user-coopecan',
    /* VARIABLES SMART CONTRACT */
    auth_token: 'eyJhbGciOiJFQ0RTQSIsICJ0eXAiOiAiRVRIU0lHTiJ9.eyJpYXQiOjE2MTYyNzU4NTQxMDYsImV4cCI6MjUxNjE2Mjc1ODU0MTA2LCJkYXRhIjp7InNlY3JldF9ib2xldGgiOiJzZWNyZXRvMyIsInNlcnZlcl9pZCI6IjB4MTI0NTJBNGEyYTVEMWE0RmQyMmRhMDRmQjI1NDBDMENEMEY4NjliRiIsImNvbnRyYWN0IjoiMHg2QjVBM0JmN2NDRDlmMkZFMThDQjA2ZTZkMDEwOUYwYWVFOWFhYUQwIiwiY2xpZW50X2lkIjoiMHhkZmMwRUJiYTdGYzJmMzlGNkE3OTk4MzAzMkM4NkZFNDU3QzlEMDcwIn19.MHg4MDMyNmYxNjZmZmE0NjE1YmVjMDA2YzA4NGI2OTFjYjA1MTYxZjViZTZhMjAwYWM1MTZmMmFmZDM0NTNlMDk4NzA4MTg0OTI0MDkwZDJkOGYzNzBlOTdkZGQyYzYyNjU3YWRjZGJlZmE5NGRkOGEwOTY2MzE4MTQ1NmIwNGVhZjFj',
    ct: {
        contract: '',
        c_vc: '0xBf6303A23Be21bcE1B561017fA4fcdA851C46633',
        c_did: '0x56537ec50C9cE4fA1B63eC3A5AFDF9D51C950cE1',
        addressFrom: '0x771971F5841bC4E7caa2CE160fb1e66b81c7f0e6',
        privateKey: 'ec98753d154ea984d7c3fa1a2b939c2c6b6a51a756eb7960b1f6030eafa7e3a8'
    },
    /* TIPOS DE OPERACION */
    TIPO_OPERACION_ADD_DID: "addDID",
    TIPO_OPERACION_REVOKE_DID: "revokeDID",
    TIPO_OPERACION_ENABLE_DID: "enableDID",
    TIPO_OPERACION_GET_DID: "getDID",
    /* ESTADO DE DID */
    STATUS_DID_PENDING: 'pending',
    STATUS_DID_ENABLED: 'enabled',
    STATUS_DID_DISABLED: 'disabled',
    /* TIPO DE ENTIDAD */
    /*   TIPO_ENTIDAD_PRODUCTOR: 'producer',
      TIPO_ENTIDAD_EMPLEADO: 'employee',
      TIPO_ENTIDAD_COMPRADOR: 'customer', */
    TIPO_ENTIDAD_PRODUCTO: 'product',
    TIPO_ENTIDAD_ALPACA: 'alpaca',
    /* MENSAJES DE AVISOS */
    MSG: {
        TYPE_SUC: 'success',
        TYPE_ALERT: 'alert',
        TYPE_UPLOAD: 'upload',
        TYPE_SIGN: 'sign',
        TYPE_ERROR: 'danger',
        SUC_CREATE: 'El registro fue creado correctamente.',
        SUC_UPLOAD: 'El registro fue actualizado correctamente.',
        SUC_SAVE: 'La información fue guardada correctamente.',
        SUC_UPDATE: 'La información fue actualizada correctamente.',
        SUC_DELETE: 'El registro fue eliminado correctamente.',
        SUC_DISABLED: 'El registro fue deshabilitado correctamente.',
        SUC_ENABLED: 'El registro fue habilitado correctamente.',
        ALERT_CREATE: 'Esta seguro de crear registro?',
        ALERT_SAVE: 'Esta seguro de guardar registro?',
        ALERT_UPDATE: 'Esta seguro en actualizar información del registro?',
        ALERT_DELETE: 'Esta seguro de eliminar el registro?, esta acción será irrevocable.',
        ALERT_EXIT_FORM: 'Esta seguro de salir del formulario sin guardar información?',
        ALERT_DISABLED: 'Esta seguro de deshabilitar el registro?',
        ALERT_ENABLED: 'Esta seguro de habilitar el registro?',
        ALERT_REMOVE_MASTER: 'Esta seguro de quitar privilegios de Master al usuario, respecto al contrato de ',
        ALERT_ENABLED_MASTER: 'Esta seguro de habilitar privilegios de Master al usuario, respecto al contrato de ',
        ALERT_UPLOAD: 'Se usarán datos para esta acción. Esta seguro de continuar?',
        ERROR_SERV: 'Tuvimos problemas, vuelva a intentar por favor.',
        ERROR_GENERAL: 'Tuvimos problemas, vuelva a intentar por favor.',
        SUC_TITLE: 'Genial!',
        ALERT_TITLE: 'Alerta!',
        ERROR_TITLE: 'Error!',
    },
    ETAPAS_LOTE: [
        'Lavado', 'Secado', 'Laboratorio', 'Encidame', 'Casilleros', 'Desmanches', 'Carsa', 'Pasajes', 'Peinado', 'Top de ovillo', 'BUMP', 'Almacén', 'Prensado', 'Transporte', 'Embarque'
    ],
    /* Colecciones del sistema */
    COLLECTION: {
        tx: 'tx',
        party: 'party',
        input: 'input',
        general: 'general',
        object: 'object',
        document: 'document',
        trace: 'trace',
        traceDetail: 'traceDetail',
        monitor: 'monitor',
        merma: 'merma',
        credential: 'credential'
    },
    /* Tablas del sistema */
    TABLE_SIS: {
        _config: '_config',
        material: 'material',
        seat: 'seat',
        role: 'role',
        tables: 'tables',
        type_user: 'type_user',
        type_doc_ident: 'type_doc_identity',
        g_clie: 'g_clie',
        g_empl: 'g_empl',
        g_prod: 'g_prod',
        type_proveedor: 'type_proveedor',
        type_category: 'type_category',
        employee: 'employee',
        producer: 'producer',
        customer: 'customer',
        action: 'action',
        orden: 'order',
        type_button: 'type_button',
        type_callToAction: 'type_callToAction',
        type_documents: 'type_documents',
        type_input: 'type_input',
        type_field: 'type_field',
        type_field_cert: 'type_field_cert',
        type_certificate: 'type_certificate',
        external: 'external',
        register: 'register',
        type_visibility: 'type_visibility',
        class_task: 'class_task',
        type_cert_register: 'type_cert_register',
        q_unid: 'unid_measure',
        type_product: 'type_product',
        type_via: 'type_via',
        country_source: 'country_source',
        country_target: 'country_target',
        airport: 'airport',
        seaports: 'seaports',
        type_quality: 'type_quality',
        field: 'field',
        task: 'task',
        process: 'process',
        screen: 'screen',
        report: 'report',
        traceDetail: 'traceDetail',
        clasification: 'clasification',
        raza: 'raza',
        color_prod: 'color_prod',
        city_origin: 'city_origin',
        DIDRegistry: 'DIDRegistry',
        VCRegistry: 'VCRegistry',
    },
    enum: {
        cooperativa: 0,
        employee: 1,
        producer: 2,
        customer: 3,
    },
    exec: {
        created: 1,
        pending: 2,
        in_progress: 3,
        finished: 4,
        delivery: 5,
        sent: 6,
        received: 7,
        classifying: 8,
        classified: 9
    }
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "n90K");





let AuthGuard = class AuthGuard {
    constructor(_navCtrl, _storage, router) {
        this._navCtrl = _navCtrl;
        this._storage = _storage;
        this.router = router;
    }
    canActivate(route) {
        return this._storage.validarAuth().then(res => {
            if (!res) {
                this._navCtrl.navigateRoot('login');
                return !false;
            }
            return true;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lottie-web */ "lPHp");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");









/* import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; */
/* LOTTIE */


function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_10___default.a;
}

let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__["NgxQRCodeModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_9__["LottieModule"].forRoot({ player: playerFactory }) /* LOTTIE */
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let StorageService = class StorageService {
    constructor() { }
    validarAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = yield this.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TOKEN_KEY);
            console.log(data);
            if (data)
                return Promise.resolve(true);
            return Promise.resolve(false);
        });
    }
    get(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let item = (yield Storage.get({ key: name })) || null;
            let value = item.value;
            if (!value)
                value = null;
            if (typeof value == 'object')
                value = JSON.parse(value);
            return Promise.resolve(value);
        });
    }
    set(key, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (typeof value == 'object')
                value = JSON.stringify(value);
            yield Storage.set({ key, value });
        });
    }
    remove(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.remove({ key });
        });
    }
};
StorageService.ctorParameters = () => [];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");




const routes = [
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~pages-pages-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("default~home-home-module~pages-pages-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesPageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


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