(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: #F5F6FF;\">\n  <div class=\"menu-header-bg img-left\">\n    <div>\n      <img src=\"../../../assets/images/coopecan-letras-blancas-transparente.png\" alt=\"\">\n    </div>\n\n  </div>\n\n  <img src=\"../../../assets/images/login.png\" class=\"bg\" alt=\"\">\n\n  <div class=\"slides01\" style=\"box-shadow: var(--shadow-black-300);padding:  0 60px;\">\n\n    <div style=\"margin-top: 10%;\">\n      <p class=\"title\">\n        Administración\n        <br> Coopecan\n      </p>\n      <p class=\"subtitle\">Sistema de administración para la trazabilidad del lote de producción.</p>\n      <div>\n      </div>\n\n      <div>\n\n        <form [formGroup]=\"loginForm\">\n          <ion-item style=\"margin-top: 10%;\">\n            <ion-label position=\"stacked\" style=\"--color:#999999\">Usuario</ion-label>\n            <ion-input formControlName=\"username\" type=\"text\" placeholder=\"Usuario de acceso\" style=\"color: #666666;\">\n            </ion-input>\n          </ion-item>\n          <p style=\"font-size: 11px;color: #eb445a;text-align: left;margin-top: 5px;\"\n            *ngIf=\"!loginForm.controls.username.valid && (loginForm.controls.username.dirty || submitAttempt)\">\n            Usuario es requerido\n          </p>\n\n          <ion-item style=\"margin-top:18px\">\n            <ion-label position=\"stacked\" style=\"--color:#999999\">Contraseña</ion-label>\n            <ion-input placeholder=\"Contraseña\" [type]=\"tipo\" formControlName=\"pass\" style=\"color: #666666;\">\n            </ion-input>\n            <span class=\"btn-view\" (click)=\"mostrar()\">\n              <ion-icon name=\"eye\" *ngIf=\"viewPass\" style=\"font-size: 23px;color: #625DEb\"></ion-icon>\n              <ion-icon name=\"eye-off\" *ngIf=\"!viewPass\" style=\"font-size: 23px;color: var(--main-color)\"></ion-icon>\n            </span>\n          </ion-item>\n          <p style=\"font-size: 11px;color: #eb445a;text-align: left;margin-top: 5px;\"\n            *ngIf=\"!loginForm.controls.pass.valid && (loginForm.controls.pass.dirty || submitAttempt)\">\n            Contraseña requerida\n          </p>\n        </form>\n\n        <div style=\"text-align: center;\">\n          <a href=\"javascript:void(0)\" class=\"btn btn-2\" (click)=\"login()\" style=\"position: relative;top: 50px;\">Iniciar\n            sesión</a>\n       <!--    <p> <a href=\"javascript:void(0)\" class=\"cancel\" (click)=\"backSlidePadre()\">Cancelar</a></p> -->\n\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slide {\n  padding: 40px;\n  padding-bottom: 10px;\n  border-radius: 10px;\n  color: white;\n  border: solid 4px var(--bfirma-fondo);\n}\n\n.scroll {\n  overflow-y: scroll;\n  display: block;\n}\n\n.title {\n  font-size: 32px;\n  color: #303038;\n  margin-bottom: 0;\n  font-weight: 800;\n  margin-top: 60px;\n  line-height: 1;\n}\n\n.subtitle {\n  font-size: 13px;\n  color: #b3b0b0;\n  margin-top: 10px;\n  font-weight: 600;\n}\n\n.imagen-slides {\n  height: 70px;\n  width: auto;\n}\n\n.bg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  /* Preserve aspet ratio */\n  /*     min-width: 100%; */\n  /*  min-height: 100%; */\n  max-height: 100%;\n  object-fit: cover;\n}\n\n::-webkit-scrollbar {\n  width: 7px;\n  border-radius: 10px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #233f5c3b;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(19, 70, 121, 0.363);\n}\n\n.slides01 {\n  height: 600px;\n  max-height: 80%;\n  width: 400px;\n  min-width: 25%;\n  /*   max-width: 25%; */\n  background: #fff;\n  margin-top: 5%;\n  border-radius: 30px;\n  position: absolute;\n  left: 10%;\n  /* left: 0; */\n}\n\n.menu-header-bg {\n  top: 30%;\n  position: absolute;\n  height: 50%;\n  width: 480px;\n  background: #625deb;\n  /*   background: linear-gradient(90deg, #3d91e6 0%, #0d59a3 100%); */\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-40deg);\n  border-radius: 16%;\n  margin-left: -320px;\n  /*   margin-top: -55px; */\n  margin-bottom: 25px;\n  z-index: 1;\n}\n\n.menu-header-bg div {\n  width: 100%;\n  height: 100%;\n}\n\n.menu-header-bg div img {\n  width: 35%;\n  position: absolute;\n  right: 10px;\n  bottom: 60px;\n  transform: rotate(40deg);\n}\n\n.btn-2 {\n  text-decoration: none;\n  background-color: var(--main-color);\n  padding: 15px 70px;\n  border: none;\n  border-radius: 30px;\n  color: #ffffffdc;\n  font-size: 13px;\n  box-shadow: var(--shadow-black-300);\n  font-weight: 500;\n}\n\n.cancel {\n  font-size: 13px;\n  color: #000;\n  cursor: pointer;\n  position: relative;\n  top: 60px;\n}\n\n.btn-2:hover {\n  background-color: #625deb;\n}\n\n.cancel:hover {\n  color: #625deb;\n}\n\n.btn-view {\n  position: absolute;\n  right: 10px;\n  bottom: 5px;\n  z-index: 10;\n}\n\n.btn-view:hover {\n  color: #625deb;\n}\n\n@media screen and (max-width: 1200px) {\n  .slides01 {\n    left: 20%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .title {\n    font-size: 25px;\n  }\n\n  .subtitle {\n    font-weight: 500;\n  }\n\n  .slides01 {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    left: 0;\n    border-radius: 0px;\n    max-height: 100%;\n  }\n\n  .img-left {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUEsVUFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUEsV0FBQTs7QUFDQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUEsb0JBQUE7O0FBQ0E7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0VBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBREY7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUROOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFIRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0UsU0FBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLGVBQUE7RUFIRjs7RUFNQTtJQUNFLGdCQUFBO0VBSEY7O0VBTUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQUhGOztFQU1BO0lBQ0Usd0JBQUE7RUFIRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlIHtcbiAgcGFkZGluZzogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCA0cHggdmFyKC0tYmZpcm1hLWZvbmRvKTtcbn1cblxuLnNjcm9sbCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICMzMDMwMzg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYjNiMGIwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW1hZ2VuLXNsaWRlcyB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgLyogUHJlc2VydmUgYXNwZXQgcmF0aW8gKi9cbiAgLyogICAgIG1pbi13aWR0aDogMTAwJTsgKi9cbiAgLyogIG1pbi1oZWlnaHQ6IDEwMCU7ICovXG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjMjMzZjVjM2I7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTksIDcwLCAxMjEsIDAuMzYzKTtcbn1cblxuLnNsaWRlczAxIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWF4LWhlaWdodDogODAlO1xuXG4gIHdpZHRoOiA0MDBweDtcbiAgbWluLXdpZHRoOiAyNSU7XG4gIC8qICAgbWF4LXdpZHRoOiAyNSU7ICovXG5cbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAlO1xuICAvKiBsZWZ0OiAwOyAqL1xufVxuXG4ubWVudS1oZWFkZXItYmcge1xuICB0b3A6IDMwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDQ4MHB4O1xuICBiYWNrZ3JvdW5kOiAjNjI1ZGViO1xuICAvKiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzNkOTFlNiAwJSwgIzBkNTlhMyAxMDAlKTsgKi9cbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoOTgsIDE0MCwgMjU1LCAwLjUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xuICBib3JkZXItcmFkaXVzOiAxNiU7XG4gIG1hcmdpbi1sZWZ0OiAtMzIwcHg7XG4gIC8qICAgbWFyZ2luLXRvcDogLTU1cHg7ICovXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHotaW5kZXg6IDE7XG5cbiAgZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDM1JTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgYm90dG9tOiA2MHB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xuICAgIH1cbiAgfVxufVxuXG4uYnRuLTIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBwYWRkaW5nOiAxNXB4IDcwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6ICNmZmZmZmZkYztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMzAwKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNhbmNlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDYwcHg7XG59XG5cbi5idG4tMjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjVkZWI7XG59XG5cbi5jYW5jZWw6aG92ZXIge1xuICBjb2xvcjogIzYyNWRlYjtcbn1cblxuLmJ0bi12aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiA1cHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLmJ0bi12aWV3OmhvdmVyIHtcbiAgY29sb3I6ICM2MjVkZWI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2xpZGVzMDEge1xuICAgIGxlZnQ6IDIwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC5zdWJ0aXRsZXtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLnNsaWRlczAxIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuaW1nLWxlZnQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/apiMongo.service */ "GtMO");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _compartido_funciones__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../compartido/funciones */ "3Djf");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");











let HomePage = class HomePage {
    constructor(authService, _apiMongo, _storage, router, formBuilder, _fun, menu) {
        this.authService = authService;
        this._apiMongo = _apiMongo;
        this._storage = _storage;
        this.router = router;
        this.formBuilder = formBuilder;
        this._fun = _fun;
        this.menu = menu;
        this.submitAttempt = false;
        this.load = true;
        this.viewPass = false;
        this.tipo = "password";
        this.loginForm = formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[^@]+@[^@]+\.[^@]+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
        /*     this.menu.enable(false); */
        let data = {};
        console.log('typeof data', typeof data);
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitAttempt = true;
            if (this.loginForm.valid) {
                this.authService.signIn(this.loginForm.value);
            }
        });
    }
    mostrar() {
        if (this.viewPass) {
            this.tipo = "password";
            this.viewPass = false;
        }
        else {
            this.tipo = "text";
            this.viewPass = true;
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_7__["ApiMongoService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_9__["Funciones"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map