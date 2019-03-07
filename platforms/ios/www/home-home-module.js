(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
                    }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: (_app_module__WEBPACK_IMPORTED_MODULE_7__["setTranslateLoader"]), deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                }),
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]],
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-icon name=\"logo-tux\"></ion-icon>\n    <ion-title style=\"font-size: 12px\">\n      PachangaFriendly\n    </ion-title>\n  </ion-toolbar>\n  <ion-segment [(ngModel)]=\"category\" (ionChange)=\"slides.slideTo(category)\" style=\"background-color:var(--ion-color-primary-tint)\"\n               color=\"light\">\n    <ion-segment-button  layout=\"icon-start\" value=\"0\" style=\"--padding-end:0px;--padding-start:0px\">\n      <ion-icon color=\"dark\" name=\"add-circle-outline\"></ion-icon>\n      <ion-label>{{ \"Crear Evento\" | translate }}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button layout=\"icon-start\" value=\"1\" style=\"--padding-end:0px;--padding-start:0px\">\n      <ion-icon color=\"dark\" name=\"eye\"></ion-icon>\n      <ion-label>{{ \"Eventos\" | translate }}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div id='indicator' class=\"SwipedTabs-indicatorSegment\" [ngStyle]=\"\n    {'width.%': (100/this.tabs.length)}\" style=\"margin-top:2px\"></div>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides #slides (ionSlideTransitionStart)=\"updateIndicatorPosition();updateCat(slides.getActiveIndex())\"\n              (ionSlideWillChange)=\"updateIndicatorPosition()\" (ionSlideDidChange)=\"updateIndicatorPosition()\" #SwipedTabsSlider\n              (ionSlideDrag)=\"animateIndicator($event)\">\n    <ion-slide>\n      <ion-content>\n        <form [formGroup]=\"event\" (ngSubmit)=\"logForm()\" style=\"margin-top: 10px\">\n          <ion-item>\n            <ion-input required type=\"text\" formControlName=\"nombre\" placeholder=\"{{ 'Nombre del evento' | translate }}\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input required type=\"text\" formControlName=\"dni\" placeholder=\"{{ 'DNI' | translate }}\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{ \"Fecha\" | translate }}</ion-label>\n            <ion-datetime display-format=\"DD/MM/YYYY\" min=\"2019\" max=\"2019\" formControlName=\"fecha\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{ \"Deporte\" | translate }}</ion-label>\n            <ion-select formControlName=\"deporte\">\n              <ion-select-option value=\"Fútbol\">Fútbol</ion-select-option>\n              <ion-select-option value=\"Baloncesto\">Baloncesto</ion-select-option>\n              <ion-select-option value=\"Padel\">Padel</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{ \"Polideportivo\" | translate }}</ion-label>\n            <ion-select  formControlName=\"polideportivo\">\n              <ion-select-option value=\"Fuensanta\">Fuensanta</ion-select-option>\n              <ion-select-option value=\"Guadalquivir\">Guadalquivir</ion-select-option>\n              <ion-select-option value=\"Vista Alegre\">Vista Alegre</ion-select-option>\n              <ion-select-option value=\"Fatima\">Fátima</ion-select-option>\n              <ion-select-option value=\"El Naranjo\">El Naranjo</ion-select-option>\n              <ion-select-option value=\"Ciudad Jardin\">Ciudad Jardin</ion-select-option>\n              <ion-select-option value=\"Las Margaritas\">Las Margaritas</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-button size=\"default\" color=\"primary\" fill=\"solid\" type=\"submit\" [disabled]=\"!event.valid\">\n            <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n            {{ \"Reservar\" | translate }}\n          </ion-button>\n        </form>\n      </ion-content>\n    </ion-slide>\n    <ion-slide>\n      <ion-content>\n        <ion-searchbar placeholder=\"Buscar\" (ionInput)=\"getFilteredItem($event)\">\n        </ion-searchbar>\n        <ion-list #dynamicList id=\"dynamicList\">\n          <ion-item-sliding *ngFor=\"let item of listadoPanel;let i = index\">\n            <ion-label>\n              <ion-img id=\"avatar\" src=\"../../assets/icon/avatar.png\"></ion-img>\n              <h2>{{item.nombre}}</h2>\n              <h3>{{item.fecha}}</h3>\n              <h3>{{item.deporte}}</h3>\n              <h3>{{item.polideportivo}}</h3>\n              <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n                <ion-fab-button (click)=\"shareInsta()\">\n                  <ion-icon name=\"logo-instagram\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab>\n            </ion-label>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-content>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* la \"rayita\" que indica la navegación entre slides */\n.SwipedTabs-indicatorSegment {\n  transition: 0s all;\n  -webkit-transform-origin: top 0 left 0;\n          transform-origin: top 0 left 0;\n  height: 2px;\n  position: relative;\n  top: -2px;\n  background-color: var(--ion-color-dark) !important; }\n.button-native {\n  padding: 0px !important; }\n/* para que el slide ocupe toda la pantalla */\nion-slide.swiper-slide {\n  display: block; }\n.slides {\n  height: 100%; }\n.fixed-scroll {\n  height: 100% !important;\n  overflow-y: scroll;\n  position: relative; }\n.fixed-scroll ::-webkit-scrollbar {\n    display: none !important; }\n::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none; }\nion-card {\n  margin: 0px !important;\n  border-radius: 0px; }\n#avatar {\n  width: 50px;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi9ob21lL3J1YmVuL0RvY3VtZW50b3MvaW9uaWMvUGFjaGFuZ2FGcmllbmRseS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDQWpCLHVEQUF1RDtBQUN2RDtFQUlFLG1CQUFtQjtFQUNuQix1Q0FBOEI7VUFBOUIsK0JBQThCO0VBQzlCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsVUFBUztFQUNULG1EQUFrRCxFQUNuRDtBQUNEO0VBQ0Usd0JBQXNCLEVBQ3ZCO0FBQ0QsOENBQThDO0FBQzlDO0VBQ0UsZUFBYSxFQUNkO0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7QUFDRDtFQUNFLHdCQUFxQjtFQUNyQixtQkFBaUI7RUFDakIsbUJBQWlCLEVBSWxCO0FBUEQ7SUFLSSx5QkFBd0IsRUFDekI7QUFFSDs7RUFFRSxjQUFhLEVBQ2Q7QUFDRDtFQUNFLHVCQUFvQjtFQUNwQixtQkFBa0IsRUFDbkI7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogbGEgXCJyYXlpdGFcIiBxdWUgaW5kaWNhIGxhIG5hdmVnYWNpw7NuIGVudHJlIHNsaWRlcyAqL1xuLlN3aXBlZFRhYnMtaW5kaWNhdG9yU2VnbWVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMHMgYWxsO1xuICAtbW96LXRyYW5zaXRpb246IDBzIGFsbDtcbiAgLW8tdHJhbnNpdGlvbjogMHMgYWxsO1xuICB0cmFuc2l0aW9uOiAwcyBhbGw7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCAwIGxlZnQgMDtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDsgfVxuXG4uYnV0dG9uLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyB9XG5cbi8qIHBhcmEgcXVlIGVsIHNsaWRlIG9jdXBlIHRvZGEgbGEgcGFudGFsbGEgKi9cbmlvbi1zbGlkZS5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5maXhlZC1zY3JvbGwge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLmZpeGVkLXNjcm9sbCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuOjotd2Via2l0LXNjcm9sbGJhcixcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDsgfVxuXG4jYXZhdGFyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDsgfVxuIiwiLyogbGEgXCJyYXlpdGFcIiBxdWUgaW5kaWNhIGxhIG5hdmVnYWNpw7NuIGVudHJlIHNsaWRlcyAqL1xuLlN3aXBlZFRhYnMtaW5kaWNhdG9yU2VnbWVudHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwcyBhbGw7XG4gIC1tb3otdHJhbnNpdGlvbjogIDBzIGFsbDtcbiAgLW8tdHJhbnNpdGlvbjogIDBzIGFsbDtcbiAgdHJhbnNpdGlvbjogIDBzIGFsbDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIDAgbGVmdCAwO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xufVxuLmJ1dHRvbi1uYXRpdmV7XG4gIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG59XG4vKiBwYXJhIHF1ZSBlbCBzbGlkZSBvY3VwZSB0b2RhIGxhIHBhbnRhbGxhICovXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTpibG9jaztcbn1cbi5zbGlkZXN7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5maXhlZC1zY3JvbGx7XG4gIGhlaWdodDoxMDAlIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24tY2FyZHtcbiAgbWFyZ2luOjBweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbiNhdmF0YXJ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicios_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/firebase.service */ "./src/app/servicios/firebase.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _ionic_native_instagram_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/instagram/ngx */ "./node_modules/@ionic-native/instagram/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var HomePage = /** @class */ (function () {
    /*
      Le paso por parametro objetos de clases y se controla la entrada de datos del formulario
     */
    function HomePage(translate, instagram, modalController, formBuilder, firebase, loadingController) {
        this.translate = translate;
        this.instagram = instagram;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.firebase = firebase;
        this.loadingController = loadingController;
        this.listado = [];
        this.listadoPanel = [];
        this.SwipedTabsIndicator = null;
        this.tabs = ['selectTab(0)', 'selectTab(1)'];
        this.category = '0';
        this.ntabs = 2;
        this.event = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fecha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deporte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            polideportivo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    /*
      Devuelve el nombre de los eventos midiendo la cantidad de letras
     */
    HomePage.prototype.getFilteredItem = function (searchbar) {
        var item = searchbar.target.value;
        this.listadoPanel = this.listado.filter(function (data) {
            return (data.nombre.toLowerCase().indexOf(item.trim().toLowerCase()) > -1);
        });
    };
    /*
       Cuando accede a home.page muestra las notas de la base de datos
       La variable SwipedTabsIndicatos almacena el id de la pestaña
    */
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.SwipedTabsIndicator = document.getElementById('indicator');
        this.firebase.leeNotas()
            .subscribe(function (querySnapshot) {
            _this.listado = [];
            _this.delete();
            querySnapshot.forEach(function (doc) {
                _this.listado.push(__assign({ id: doc.id }, doc.data()));
            });
            _this.listadoPanel = _this.listado;
            _this.loadingController.dismiss();
        });
    };
    /*
      Cuando esta a punto de entrar a la ventana inicializa la categoria a 0 y el ntabs cambia
     */
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.category = '0';
        this.SwipedTabsSlider.length().then(function (l) {
            _this.ntabs = l;
        });
    };
    /*
      Para solucionar el bug de list-items-sliding con ngfor
     */
    HomePage.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynamicList.closeSlidingItems()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Actualiza la categoría que esté en ese momento activa*/
    HomePage.prototype.updateCat = function (cat) {
        var _this = this;
        cat.then(function (dat) {
            _this.category = dat;
            _this.category = +_this.category;
        });
    };
    /* El método que permite actualizar el indicado cuando se cambia de slide*/
    HomePage.prototype.updateIndicatorPosition = function () {
        var _this = this;
        this.SwipedTabsSlider.getActiveIndex().then(function (i) {
            if (_this.ntabs > i) { // this condition is to avoid passing to incorrect index
                _this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (i * 100) + '%,0,0)';
            }
        });
    };
    /* El método que anima la "rayita" mientras nos estamos deslizando por el slide*/
    HomePage.prototype.animateIndicator = function (e) {
        // console.log(e.target.swiper.progress);
        if (this.SwipedTabsIndicator) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
                ((e.target.swiper.progress * (this.ntabs - 1)) * 100) + '%,0,0)';
        }
    };
    /*
      Se obtienen los datos de la base de datos que se han escrito en el formulario
      ademas lanza el cargando y limpia los datos del formulario
     */
    HomePage.prototype.logForm = function () {
        var _this = this;
        var data = {
            nombre: this.event.get('nombre').value,
            dni: this.event.get('dni').value,
            fecha: this.event.get('fecha').value,
            deporte: this.event.get('deporte').value,
            polideportivo: this.event.get('polideportivo').value
        };
        this.myloading = this.presentLoading();
        this.firebase.agregaEvento(data)
            .then(function (docRef) {
            console.log('DNI insertado (por si lo necesitamos):', docRef.id);
            _this.event.setValue({
                nombre: '',
                dni: '',
                fecha: '',
                deporte: '',
                polideportivo: '',
            });
            _this.loadingController.dismiss();
            _this.presentModal();
        })
            .catch(function (error) {
            console.error('Error insertado documento: ', error);
            _this.loadingController.dismiss();
        });
    };
    /*
      Comparte el evento por instagram pasando la url
     */
    HomePage.prototype.shareInsta = function () {
        this.instagram.share('data:image/png;uhduhf3hfif33', 'Caption')
            .then(function () { return console.log('Shared!'); })
            .catch(function (error) { return console.error(error); });
    };
    /*
      Método para mostrar un cargadon
     */
    HomePage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Guardando'
                            })];
                    case 1:
                        _a.myloading = _b.sent();
                        return [4 /*yield*/, this.myloading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /*
      Método para mostrar un modal indicando el componente ModalComponent
     */
    HomePage.prototype.presentModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
                            componentProps: { value: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"])
    ], HomePage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('infiniteScroll'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"])
    ], HomePage.prototype, "ionInfiniteScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dynamicList'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "dynamicList", void 0);
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _ionic_native_instagram_ngx__WEBPACK_IMPORTED_MODULE_5__["Instagram"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _servicios_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/servicios/firebase.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/firebase.service.ts ***!
  \***********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = /** @class */ (function () {
    function FirebaseService(fireStore) {
        this.fireStore = fireStore;
        this.myCollection = fireStore.collection(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig.eventosColeccion);
    }
    FirebaseService.prototype.agregaEvento = function (datos) {
        return this.myCollection.add(datos);
    };
    /*Recupera todos los documentos (notas) de la colección 'todo'
        Devuelve un Observable
    */
    FirebaseService.prototype.leeNotas = function () {
        return this.myCollection.get();
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map