(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~pages-pages-module"],{

/***/ "3Djf":
/*!*****************************************!*\
  !*** ./src/app/compartido/funciones.ts ***!
  \*****************************************/
/*! exports provided: Funciones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Funciones", function() { return Funciones; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ionic-components.service */ "L8EE");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/alert/alert.component */ "QC9C");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-sha256 */ "bCcq");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/apiMongo.service */ "GtMO");


/* import { ContractsService } from '../services/contracts.service'; */







let Funciones = class Funciones {
    constructor(_apiMongo, _modal, 
    /*    private _contractsService: ContractsService, */
    _comp) {
        this._apiMongo = _apiMongo;
        this._modal = _modal;
        this._comp = _comp;
        this.months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        this.configInput = {
            name: {
                long: 32
            }
        };
        this.validatorkey = _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose(
        /*  [Validators.pattern("^[^0-9][a-zA-Z0-9_]+$"), */
        [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[a-zA-Z_][a-zA-Z0-9_]+$"),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.configInput.name.long),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
    }
    /* ALERT */
    alert(type, buttonConfim, textTitle, subtitle, desablet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isUndefined(desablet))
                return true;
            let options = {
                path: '/assets/json/' + type + '.json',
                loop: true,
                autoplay: true
            };
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const modal = yield this._modal.create({
                    component: _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"],
                    cssClass: 'style-alert',
                    componentProps: {
                        type,
                        textTitle,
                        subtitle,
                        buttonConfim,
                        options
                    }
                });
                modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    resolve(res.data);
                }));
                return yield modal.present();
            }));
        });
    }
    getTime(tms) {
        let milliseconds = Math.floor((tms % 1000) / 100);
        let seconds = Math.floor((tms / 1000) % 60);
        let minutes = Math.floor((tms / (1000 * 60)) % 60);
        let hours = Math.floor((tms / (1000 * 60 * 60)) % 24);
        /*  hours = (hours < 10) ? "0" + hours : hours;
         minutes = (minutes < 10) ? "0" + minutes : minutes;
         seconds = (seconds < 10) ? "0" + seconds : seconds; */
        hours = (hours > 1) ? hours + " horas" : (hours == 1 ? hours + " hora" : '');
        minutes = (minutes > 1) ? minutes + " minutos" : (minutes == 1 ? minutes + " minuto" : '');
        seconds = (seconds > 1) ? seconds + " segundos" : (seconds == 1 ? seconds + " segundo" : '');
        /*     seconds = (seconds < 10) ? "0" + seconds : seconds; */
        return { hours, minutes, seconds, milliseconds };
    }
    alertError(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let mensj = error;
            if (!this.isVarInvalid(error.message))
                mensj = error.message;
            yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ERROR, 'ok', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ERROR_TITLE, mensj);
        });
    }
    alertGen(bconf, tdesc) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ALERT, bconf, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, tdesc);
        });
    }
    alertChangStatus(status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let bconf = 'Si, deshabilitar';
            let tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_DISABLED;
            if (status) {
                bconf = 'Si, habilitar',
                    tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_ENABLED;
            }
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ALERT, bconf, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, tdesc);
        });
    }
    timeStamp() {
        return new Date().getTime();
    }
    alertChangMaster(status, sm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let bconf = 'Si, quitar';
            let tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_REMOVE_MASTER;
            if (!status) {
                bconf = 'Si, habilitar',
                    tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_ENABLED_MASTER;
            }
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ALERT, bconf, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, tdesc + sm);
        });
    }
    alertDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ALERT, 'Si, eliminar', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_DELETE);
        });
    }
    alertSave(isEdit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let bconf = 'Si, crear';
            let tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_CREATE;
            if (isEdit) {
                bconf = 'Si, actualizar';
                tdesc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_UPDATE;
            }
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_ALERT, bconf, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, tdesc);
        });
    }
    alertSucc(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.TYPE_SUC, ' Ok ', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MSG.ALERT_TITLE, message);
        });
    }
    isUndefined(data) {
        if (data == undefined)
            return true;
        return false;
    }
    isVarInvalid(data) {
        if (typeof data === 'string' || data instanceof String)
            data = data.trim();
        if (data == undefined || data == null || data == 'undefined' || data == 'null' || data == '')
            return true;
        return false;
    }
    isInvalidResApi(code) {
        if (code != 200 && code != '200')
            return true;
        return false;
    }
    isEmpty(...obj) {
        let isEmpty = true;
        for (let i = 0; i < obj.length; i++) {
            if (Array.isArray(obj[i])) {
                if (obj[i].length != 0)
                    isEmpty = false;
                break;
            }
            if (this.isVarInvalid((obj[i]))) {
                isEmpty = false;
                break;
            }
        }
        return isEmpty;
    }
    strToJson(str) {
        try {
            if (this.isVarInvalid(str))
                return {};
            else {
                return JSON.parse(str);
            }
        }
        catch (error) {
            this.alertError(error);
            return null;
        }
    }
    validJson(str) {
        try {
            if (this.isVarInvalid(str))
                return '';
            else {
                let valueJson = JSON.parse(str);
                return valueJson;
            }
        }
        catch (error) {
            this.alertError(error);
            return null;
        }
    }
    enum(item) {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].enum[item];
    }
    codeToenum(code) {
        let number = parseInt(code.replaceAll("C", ""));
        return number;
    }
    closeMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            }));
        });
    }
    sortJSON(arr, key, way) {
        let arrayJSON = [];
        arrayJSON = key.split('.');
        if (arrayJSON.length > 1) {
            return arr.sort(function (a, b) {
                let valorA = JSON.parse(JSON.stringify(a));
                let valorB = JSON.parse(JSON.stringify(b));
                arrayJSON.forEach(fld => {
                    valorA = valorA[fld] || 'null';
                    valorB = valorB[fld] || 'null';
                });
                var x = valorA;
                var y = valorB;
                if (typeof x === 'string' || x instanceof String)
                    x = x.toLowerCase();
                if (typeof y === 'string' || y instanceof String)
                    y = y.toLowerCase();
                if (way) {
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                }
                if (!way) {
                    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                }
            });
        }
        else {
            return arr.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                if (typeof x === 'string' || x instanceof String)
                    x = x.toLowerCase();
                if (typeof y === 'string' || y instanceof String)
                    y = y.toLowerCase();
                if (way) {
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                }
                if (!way) {
                    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                }
            });
        }
    }
    getParmas(key_table) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].COLLECTION.general, key_table, 'items');
            return res.result[0][key_table];
        });
    }
    patchValueJson(jsonEstruc, jsonData) {
        Object.keys(jsonEstruc).forEach(key => {
            jsonEstruc[key] = this.valueKeyJSON(jsonData, key);
        });
        return jsonEstruc;
    }
    valueKeyJSON(json, keyJson) {
        var value = null;
        Object.keys(json).forEach(key => {
            if (key == keyJson)
                value = json[key];
        });
        return value;
    }
    tmspToStr(timestamp) {
        var a = new Date(timestamp);
        var year = a.getFullYear();
        var month = this.months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }
    dateStrtoTms(date, minutesLocal) {
        let newDate = new Date();
        let d_str = newDate.toDateString();
        let timehms = newDate.getTime() - new Date(d_str).getTime();
        var parts = date.split('-');
        let mydate = new Date(parts[0], parts[1] - 1, parts[2]);
        let time = mydate.getTime();
        if (minutesLocal)
            time += timehms;
        return Math.floor(time / 1000);
    }
    datelocal() {
        let newDate = new Date();
        let time = newDate.getTime();
        return Math.floor(time / 1000);
    }
    dateTmsToStr(tmp) {
        let newDate = new Date(tmp);
        let year = newDate.getFullYear();
        let month = (newDate.getMonth() + 1) < 10 ? ('0' + (newDate.getMonth() + 1)) : (newDate.getMonth() + 1);
        let day = newDate.getDate() < 10 ? ('0' + newDate.getDate()) : newDate.getDate();
        return year + '-' + month + '-' + day;
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    makeDigit(length) {
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    genCodeId() {
        let newDate = new Date();
        let d_str = Math.floor((newDate.getTime()) / 1000) + '';
        d_str = d_str.substr(d_str.length - 7, d_str.length - 1);
        return (d_str + '-' + this.makeid2(2));
    }
    makeid2(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    noRefObj(data) {
        //Cuando se entrega un valor a una variable de otro varible, lo que pasa en realizada es que la segunda varaible guarda una referencia
        //de la variable inicial mas no se crea una nueva variable como copia, es decir que si la variable inicial cambia la segunda tambien
        //Generar una copia de objeto
        return JSON.parse(JSON.stringify(data));
    }
    makeCode() {
        let date = new Date().getTime();
        let alt = this.makeid(20);
        return Object(js_sha256__WEBPACK_IMPORTED_MODULE_7__["sha256"])(Object(js_sha256__WEBPACK_IMPORTED_MODULE_7__["sha256"])(alt + date.toString()));
    }
};
Funciones.ctorParameters = () => [
    { type: _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_8__["ApiMongoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_2__["IonicComponentsService"] }
];
Funciones = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Funciones);



/***/ }),

/***/ "GFcb":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".svg {\n  /*     padding-top: 40%; */\n  margin: auto;\n  width: 18%;\n  margin: 20px auto;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLDBCQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Zne1xyXG4vKiAgICAgcGFkZGluZy10b3A6IDQwJTsgKi9cclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "GtMO":
/*!**********************************************!*\
  !*** ./src/app/services/apiMongo.service.ts ***!
  \**********************************************/
/*! exports provided: ApiMongoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiMongoService", function() { return ApiMongoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-sha256 */ "bCcq");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_4__);





let ApiMongoService = class ApiMongoService {
    constructor(_http) {
        this._http = _http;
        this.dominio = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth_token}`
        });
    }
    delete(collection, table, key) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}`);
        return this._http.delete(URL).toPromise();
    }
    getkey(collection, table, key) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}`);
        return this._http.get(URL).toPromise();
    }
    changeStatus(collection, table, key, status) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}?status=${status}`);
        return this._http.post(URL, {}).toPromise();
    }
    create(collection, table, key, body, upsert) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}/?upsert=${upsert}`);
        console.log('URL', URL);
        console.log('collection', collection);
        console.log('table', table);
        console.log('key', key);
        console.log('upsert', upsert);
        console.log('body', body);
        return this._http.post(URL, body).toPromise();
    }
    get(collection, table, item) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${item}`);
        console.log('URL', URL);
        return this._http.get(URL).toPromise();
    }
    postGenerate(params, body) {
        const URL = this.dominio.concat(`${params}`);
        console.log('URL', URL);
        console.log('body', body);
        return this._http.post(URL, body, { headers: this.headers }).toPromise();
    }
    filter(collection, table, filter) {
        const URL = this.dominio.concat(`db/${collection}/${table}/filter`);
        console.log('URL', URL);
        console.log('filter', filter);
        return this._http.post(URL, filter).toPromise();
    }
    uploadFile(fileB64, ext) {
        const body = {
            hash: Object(js_sha256__WEBPACK_IMPORTED_MODULE_4__["sha256"])(fileB64),
            ext: ext,
            type: "base64",
            content: fileB64,
        };
        const URL = this.dominio.concat(`upload`);
        return this._http.post(URL, body, { headers: this.headers });
    }
    _filter(collection, table, filter) {
        const URL = this.dominio.concat(`db/${collection}/${table}/filter`);
        console.log('URL', URL);
        return this._http.post(URL, filter);
    }
    _get(collection, table, item) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${item}`);
        return this._http.get(URL);
    }
    _create(collection, table, key, body, upsert) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}/?upsert=${upsert}`);
        console.log('URL', URL);
        console.log('collection', collection);
        console.log('table', table);
        console.log('key', key);
        console.log('upsert', upsert);
        console.log('body', body);
        return this._http.post(URL, body);
    }
};
ApiMongoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiMongoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiMongoService);



/***/ }),

/***/ "L8EE":
/*!******************************************************!*\
  !*** ./src/app/services/ionic-components.service.ts ***!
  \******************************************************/
/*! exports provided: IonicComponentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicComponentsService", function() { return IonicComponentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let IonicComponentsService = class IonicComponentsService {
    constructor(loadingController, actionSheetController, toastController) {
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const loading = yield this.loadingController.create({
                    message: 'Por favor espere...',
                    backdropDismiss: false,
                    showBackdrop: true,
                    spinner: "bubbles"
                });
                yield loading.present();
                resolve(loading);
            }));
        });
    }
    /*   async presentLoading( message:string, duration:number ) {
        const loading = await this.loadingController.create({
          message: 'Por favor espere...',
          backdropDismiss: false,
          showBackdrop: true,
          spinner: "bubbles"
        });
        await loading.present();
    
        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
      }
     */
    presentToast(texto, color, duracion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: texto,
                duration: duracion,
                color: color
            });
            toast.present();
        });
    }
    resizeImage(base64Str, maxWidth = 180, maxHeight = 150) {
        return new Promise((resolve) => {
            let img = new Image();
            img.src = base64Str;
            img.onload = () => {
                let canvas = document.createElement('canvas');
                const MAX_WIDTH = maxWidth;
                const MAX_HEIGHT = maxHeight;
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                }
                else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                let ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL());
            };
        });
    }
};
IonicComponentsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
IonicComponentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IonicComponentsService);



/***/ }),

/***/ "PDX0":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "QC9C":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alert.component.html */ "VqP8");
/* harmony import */ var _alert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component.scss */ "GFcb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ionic-components.service */ "L8EE");






let AlertComponent = class AlertComponent {
    constructor(ngZone, _modal, _comp) {
        this.ngZone = ngZone;
        this._modal = _modal;
        this._comp = _comp;
        this.buttonConfim = '';
        this.textTitle = '';
        this.subtitle = '';
        this.type = ''; // success | danger | alert
    }
    ngOnInit() { }
    animationCreated(animationItem) {
        this.animationItem = animationItem;
        setTimeout(() => {
            this.pause();
        }, 1500);
    }
    stop() {
        this.ngZone.runOutsideAngular(() => this.animationItem.stop());
    }
    play() {
        this.ngZone.runOutsideAngular(() => this.animationItem.play());
    }
    pause() {
        this.ngZone.runOutsideAngular(() => this.animationItem.pause());
    }
    closeModal() {
        this._modal.dismiss();
    }
    confirm() {
        this._modal.dismiss({ confirm: true });
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentsService"] }
];
AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alert',
        template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlertComponent);



/***/ }),

/***/ "VqP8":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert/alert.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"svg hide\" id=\"svg\">\n    <ng-lottie [options]=\"options\" (animationCreated)=\"animationCreated($event)\" (complete)=\"stop()\"></ng-lottie>\n  </div>\n  <div style=\"text-align: center;position: absolute;top: 45%;width: 100%;\">\n    <p style=\"font-size: 25px;color: #595959;font-weight: 600;margin-bottom: 0;\">{{textTitle}}</p>\n    <p style=\"margin-top: 5px;color: #5f5f5f;font-size: 16px;margin-left: 20px;margin-right: 20px;\">{{subtitle}}</p>\n\n   \n      <ion-button (click)=\"type != 'alert'?closeModal():confirm()\" class=\"button-02\"\n        style=\"--border-radius: 5px;font-size: 14px;--background: #2778c4;height: 40px;text-transform:initial;font-weight: 500;\">\n        {{buttonConfim}}\n      </ion-button>\n\n      <ion-button *ngIf=\"type == 'alert'\" (click)=\"closeModal()\" class=\"button-02\"\n        style=\"--border-radius: 5px;font-size: 14px;--background: rgb(221, 51, 51);height: 40px;font-weight: 500;\">\n        Cancelar\n      </ion-button>\n   \n\n  </div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "bCcq":
/*!**********************************************!*\
  !*** ./node_modules/js-sha256/src/sha256.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ "PDX0");
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function (is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };

  var nodeWrap = function (method, is224) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var algorithm = is224 ? 'sha224' : 'sha256';
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  var createHmacOutputMethod = function (outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else { // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
      t1 = blocks[j - 2];
      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        ab = a & b;
        maj = ab ^ (a & c) ^ bc;
        ch = (e & f) ^ (~e & g);
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
      da = d & a;
      maj = da ^ (d & b) ^ ab;
      ch = (h & e) ^ (~h & f);
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
      cd = c & d;
      maj = cd ^ (c & a) ^ da;
      ch = (g & h) ^ (~g & e);
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
      bc = b & c;
      maj = bc ^ (b & d) ^ cd;
      ch = (f & g) ^ (~f & h);
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var hex = HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
      HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
      HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
      HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
      HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
      HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
      HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
      HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
      HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
      HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
      HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
      HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
      HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
      HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
      HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
      HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
      HEX_CHARS[(h5 >> 28) & 0x0F] + HEX_CHARS[(h5 >> 24) & 0x0F] +
      HEX_CHARS[(h5 >> 20) & 0x0F] + HEX_CHARS[(h5 >> 16) & 0x0F] +
      HEX_CHARS[(h5 >> 12) & 0x0F] + HEX_CHARS[(h5 >> 8) & 0x0F] +
      HEX_CHARS[(h5 >> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
      HEX_CHARS[(h6 >> 28) & 0x0F] + HEX_CHARS[(h6 >> 24) & 0x0F] +
      HEX_CHARS[(h6 >> 20) & 0x0F] + HEX_CHARS[(h6 >> 16) & 0x0F] +
      HEX_CHARS[(h6 >> 12) & 0x0F] + HEX_CHARS[(h6 >> 8) & 0x0F] +
      HEX_CHARS[(h6 >> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[(h7 >> 28) & 0x0F] + HEX_CHARS[(h7 >> 24) & 0x0F] +
        HEX_CHARS[(h7 >> 20) & 0x0F] + HEX_CHARS[(h7 >> 16) & 0x0F] +
        HEX_CHARS[(h7 >> 12) & 0x0F] + HEX_CHARS[(h7 >> 8) & 0x0F] +
        HEX_CHARS[(h7 >> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var arr = [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF,
      (h5 >> 24) & 0xFF, (h5 >> 16) & 0xFF, (h5 >> 8) & 0xFF, h5 & 0xFF,
      (h6 >> 24) & 0xFF, (h6 >> 16) & 0xFF, (h6 >> 8) & 0xFF, h6 & 0xFF
    ];
    if (!this.is224) {
      arr.push((h7 >> 24) & 0xFF, (h7 >> 16) & 0xFF, (h7 >> 8) & 0xFF, h7 & 0xFF);
    }
    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i, type = typeof key;
    if (type === 'string') {
      var bytes = [], length = key.length, index = 0, code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >> 12));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >> 18));
          bytes[index++] = (0x80 | ((code >> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = (new Sha256(is224, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _apiMongo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiMongo.service */ "GtMO");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _compartido_funciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../compartido/funciones */ "3Djf");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage.service */ "n90K");








let AuthService = class AuthService {
    constructor(_storage, _fun, _apiMongo, router) {
        this._storage = _storage;
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this.router = router;
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.dataSend = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    loadUser() {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let keyUser = yield this._storage.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TOKEN_KEY);
                console.log('RESPUESTA DE LOADUSER', keyUser);
                if (keyUser) {
                    const res_u = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.party, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.employee, keyUser);
                    console.log('res_u', res_u);
                    if (this._fun.isEmpty(res_u.result)) {
                        yield this._fun.alertError('Error con permisos de acceso al sistema');
                        this.router.navigate(['login']);
                    }
                    let user = res_u.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.employee][0];
                    console.log('user00000001', user);
                    const res_r = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.role, user.data.role.key);
                    if (this._fun.isEmpty(res_r.result)) {
                        yield this._fun.alertError('Error con permisos de acceso al sistema');
                        this.router.navigate(['login']);
                    }
                    let role = res_r.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.role][0];
                    resolve(role);
                    if (role.data.acc_web) {
                        this.currentUser.next(user);
                        this._storage.set(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TOKEN_KEY, user.key);
                    }
                    else
                        yield this._fun.alertError('El usuario no tiene permisos de acceso al sistema WEB');
                }
                else
                    this.currentUser.next(false);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        }));
    }
    signIn(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res_u = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.party, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.employee, { 'data.email': form.username.trim(), 'data.password': form.pass });
                console.log('RES', res_u);
                if (this._fun.isEmpty(res_u.result)) {
                    yield this._fun.alertError('No se encontro registro con usuario y contraseña ingresados');
                    return;
                }
                let user = res_u.result[0].employee[0];
                const res_r = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].COLLECTION.general, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.role, user.data.role.key);
                if (this._fun.isEmpty(res_r.result)) {
                    return;
                }
                console.log('res', res_r);
                let role = res_r.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TABLE_SIS.role][0];
                console.log(role);
                console.log('USUARIO', user);
                if (role.data.acc_web) {
                    this.currentUser.next(user);
                    yield this._storage.set(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TOKEN_KEY, user.key);
                    this.router.navigate(['users']);
                }
                else
                    yield this._fun.alertError('El usuario no tiene permisos de acceso al sistema WEB');
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    // Access the current user
    getUser() {
        return this.currentUser.asObservable();
    }
    getData() {
        return this.dataSend.asObservable();
    }
    validarAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.getUser().subscribe(res => {
                    console.log('RESPUSTAAAZAAAA', res);
                    if (res)
                        resolve(true);
                    resolve(false);
                });
            });
        });
    }
    // Remove all information of the previous user
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._storage.remove(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].TOKEN_KEY);
            this.currentUser.next(false);
            this.router.navigate(['/login']);
        });
    }
    // Check if a user has a certain permission
    hasPermission(permissions) {
        for (const permission of permissions) {
            if (!this.currentUser.value || !this.currentUser.value.permissions.includes(permission)) {
                return false;
            }
        }
        return true;
    }
};
AuthService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_6__["Funciones"] },
    { type: _apiMongo_service__WEBPACK_IMPORTED_MODULE_4__["ApiMongoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~pages-pages-module.js.map