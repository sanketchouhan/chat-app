(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatroom/chatroom.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatroom/chatroom.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chatRoom container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"chatContent\">\r\n        <div class=\"chatHeader\">\r\n          <a routerLink=\"/contacts\"><i class=\"fas fa-chevron-left\"></i></a>\r\n            <img src={{chatuser.profilePicUrl}} alt=\"\">\r\n            <span class=\"chatHead\">{{chatuser.username}}</span>\r\n        </div>\r\n\r\n        <div class=\"chatContainer\">\r\n          <div class=\"chatBox\">\r\n            <!-- <div class=\"input-field\"> -->\r\n              <textarea rows=\"1\" [(ngModel)]=\"textMsg\" placeholder=\"Type your message here\"></textarea>\r\n            <!-- </div> -->\r\n            <!--(keyup)=\"do_resize(this.textMsg)\" -->\r\n            <button class=\"btn\" (click)=\"onSubmit()\"><i class=\"fas fa-location-arrow\"></i></button>\r\n          </div>\r\n          <div class=\"messageBox\">\r\n            <div class=\"box\" *ngFor=\"let message of messages\">\r\n              <div class=\"usermsg\" *ngIf=\"message.sender==user._id; else elseBlock\">\r\n                {{message.messageBody}}\r\n                <div class=\"sending\" *ngIf=\"sending\">\r\n                  <div class=\"preloader-wrapper small active\">\r\n                    <div class=\"spinner-layer spinner-blue-only\">\r\n                      <div class=\"circle-clipper left\">\r\n                        <div class=\"circle\"></div>\r\n                      </div>\r\n                      <div class=\"gap-patch\">\r\n                        <div class=\"circle\"></div>\r\n                      </div>\r\n                      <div class=\"circle-clipper right\">\r\n                        <div class=\"circle\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <ng-template #elseBlock>\r\n                <div class=\"user2msg\">\r\n                  {{message.messageBody}}\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"col-lg-1\"></div> -->\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n\r\n    \r\n<!-- <div class=\"col col-2 col-sm-1\">\r\n  snaket\r\n</div> -->\r\n    <div class=\"col col-12 col-sm-5 col-md-5 col-lg-4\">\r\n      <div class=\"contactsContent\">\r\n        <div class=\"contactsHeader\">\r\n          <span class=\"contactsHead\">Contacts</span><i (click)=\"openProfileDailog()\" class=\"fas fa-ellipsis-v\"></i>\r\n          <!-- <input type=\"text\" name=\"search\" placeholder=\"Search\" class=\"search\" id=\"search\"> -->\r\n\r\n          <!-- <button type=\"button\" (click)=\"openProfileDailog()\"></button> -->\r\n        </div>\r\n        <div class=\"contactList\">\r\n          <ul class=\"contact-collection\">\r\n            <li class=\"contact-item\" *ngFor=\"let contact of contacts\" (click)=\"onClick(contact)\">\r\n              <div class=\"img\" (click)=\"openImgBox(contact.pic)\"><img src={{contact.profilePicUrl}} class=\"img-fluid\">\r\n              </div>\r\n              <p class=\"contactsName\" >{{contact.username}}</p>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col contact-chatroom\">\r\n      <app-chatroom></app-chatroom>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bodycontent container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-6 col-lg-7 home-bg-div\">\r\n\r\n    </div>\r\n    <div class=\"col-sm-8 col-md-6 col-lg-5\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\r\n\r\n<p *ngIf=\"status\">{{status}}</p>\r\n    <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" id=\"username\" autocomplete=\"off\" required>\r\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\" id=\"password\" required>\r\n    <button type=\"submit\" (click)=\"login()\" class=\"btn\">Login <i class=\"fas fa-sign-in-alt\"></i></button>\r\n    <!-- <a class=\"btn waves-effect waves-light\" (click)=\"login()\" >Login\r\n        <i class=\"material-icons\">exit_to_app</i>\r\n    </a> -->\r\n  <!-- </div> -->\r\n  <!-- </form> -->\r\n  \r\n  <p><a (click)=\"routeTo()\">New user? Create Account</a></p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profilecontent\">\n  <h3>Edit Profile</h3>\n  <div class=\"imguploader\">\n    <img [src]=\"imgSrc\" (click)=\"fileuploder.click()\">\n    <input type=\"file\" hidden #fileuploder (change)=\"upload($event)\" accept=\".png,.jpg\" name=\"profile\" id=\"profile\">\n  </div>\n  <h5>{{user.username}}</h5>\n  <button type=\"submit\" class=\"btn\" (click)=\"uploadfile()\">Upload</button>\n</div>\n\n\n\n\n\n<!-- <img [src]=\"imgSrc\" (click)=\"fileuploder.click()\" width=\"200px\" height=\"200px\"> -->\n<!-- <input type=\"file\" #fileuploder (change)=\"upload($event)\" accept=\".png,.jpg\" name=\"profile\" id=\"profile\"> -->\n<!-- <button type=\"submit\" (click)=\"uploadfile()\">upload</button> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\r\n\r\n  <p *ngIf=\"status\">{{status}}</p>\r\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\">\r\n\r\n    <input type=\"text\" formControlName=\"username\" id=\"username\" placeholder=\"Username\" autocomplete=\"off\" required\r\n      maxlength=\"20\">\r\n\r\n    <input type=\"password\" formControlName=\"password\" id=\"password\" placeholder=\"Password\" required maxlength=\"20\">\r\n\r\n    <input type=\"password\" formControlName=\"confirmpassword\" id=\"confirmpassword\" placeholder=\"ConfirmPassword\" required\r\n      maxlength=\"20\">\r\n\r\n    <button type=\"submit\" [disabled]=\"!registerForm.valid\" class=\"btn\">Register <i class=\"material-icons\"></i></button>\r\n  </form>\r\n\r\n  <p><a (click)=\"routeTo()\">Already have an account? Sign in</a></p>\r\n\r\n</div>");

/***/ }),

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




// import { ReactiveFormsModule } from '@angular/forms';















var routes = [
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        children: [{ path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"] }]
    },
    { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"] },
    { path: 'chatroom', component: _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_13__["ChatroomComponent"] },
    { path: '', redirectTo: '/home/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/home/login' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"],
                _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_13__["ChatroomComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig),
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"]
            ],
            providers: [
                _services_chat_service__WEBPACK_IMPORTED_MODULE_14__["ChatService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"]
                // {provide: ProfileComponent, useValue: {hasBackdrop: true}}
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chatroom/chatroom.component.css":
/*!*************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chatRoom{\r\n    height: 100%;\r\n    /* width: 100%; */\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.row{\r\n    height: 100%;\r\n    /* width: 100%; */\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.col-12{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.chatContent{\r\n    height: 100%;\r\n    width: 100%;\r\n    /* padding: 20px 0 20px 20px; */\r\n}\r\n\r\n.chatHeader{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    height: 4rem;\r\n    /* padding: .5rem 0; */\r\n}\r\n\r\n.chatHeader a{\r\n    margin: 0 2rem;\r\n    color: white;\r\n}\r\n\r\n/* .chatUserProfile{\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    border-radius:30px;\r\n} */\r\n\r\nimg{\r\n    height: 2.8rem;\r\n    width: 2.8rem;\r\n    border-radius: 50%;\r\n}\r\n\r\n.chatHead{\r\n    color: white;\r\n    padding: 0 1rem;\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.chatContainer{\r\n    width: 100%;\r\n    /* height: 84vh; */\r\n    height: calc(100% - 4rem);\r\n    padding: 1rem 1rem 0 1rem;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: reverse;\r\n            flex-direction: column-reverse;\r\n}\r\n\r\n.messageBox{\r\n    margin:0;\r\n    padding: 0 1rem 0 0;\r\n    height: calc(100vh - 10rem);\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: reverse;\r\n            flex-direction: column-reverse;\r\n}\r\n\r\n.box{\r\n    margin: .2rem 0;\r\n    width: 100%;\r\n}\r\n\r\n.user2msg{\r\n    background: white;\r\n    border-radius: 10px;\r\n    border-top-left-radius: 0;\r\n    padding: .3rem .8rem;\r\n    max-width:80%; \r\n    color: black;\r\n    float: left;\r\n    clear: both;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.usermsg{\r\n    background-image: -webkit-gradient(linear, left top, right bottom, from(#f54b64), color-stop(#f75b61), color-stop(#f76960), color-stop(#f77660), to(#f78361));\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n    border-radius: 10px;\r\n    border-top-right-radius: 0;\r\n    padding: .3rem .8rem;\r\n    max-width: 80%;\r\n    color: white;\r\n    float: right;\r\n    /* clear: both; */\r\n    word-wrap: break-word;\r\n    \r\n}\r\n\r\n.sending{\r\n    float: right;\r\n    margin-left: 15px; \r\n    margin-top: 3px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.preloader-wrapper{\r\n    /* margin-left: 10px; */\r\n    \r\n    height: 18px;\r\n    width: 18px;\r\n}\r\n\r\n.chatBox{\r\n    height: 3rem;\r\n    padding: .5rem 0 0 0;\r\n    /* padding: .5rem .5rem 0 .5rem; */\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: inherit;\r\n            align-items: inherit;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.input-field{\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\ntextarea{\r\n    width: 100%;\r\n    padding: .5rem 1rem;\r\n    margin: 0;\r\n    border-radius: 10px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    /* font-size: 16px; */\r\n    color: #fff;\r\n    border: none;\r\n    background-color: #495063;\r\n    resize: none;\r\n}\r\n\r\n.btn{\r\n    /* height: 2rem;\r\n    width: 2rem; */\r\n    background-image: -webkit-gradient(linear, left top, right bottom, from(#f54b64), color-stop(#f75b61), color-stop(#f76960), color-stop(#f77660), to(#f78361));\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n    /* padding: 12px; */\r\n    border: none;\r\n    border-radius: 50%;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.btn:focus{\r\n    outline: none;\r\n}\r\n\r\ni{\r\n    font-size: 1rem;\r\n    color: #fff;\r\n}\r\n\r\n/* .chevron{\r\n    font-size: 40px;\r\n} */\r\n\r\na{\r\n    text-decoration: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.btn:focus, textarea:focus{\r\n    outline: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \r\n    border-radius: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \r\n}\r\n\r\n@media (max-width: 767px){\r\n    .chatContainer{\r\n        padding: 0;\r\n    }\r\n    .chatHeader a{\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px){\r\n    .chatRoom{\r\n        margin: 0 auto;\r\n    }\r\n    .col-12{\r\n        padding: 1rem;\r\n    }\r\n    .chatHeader a{\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUNBOzs7Ozs7R0FNRzs7QUFFSDtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQThCO0lBQTlCLDhCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUE4QjtJQUE5Qiw4QkFBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkpBQStGO0lBQS9GLCtGQUErRjtJQUMvRixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLHVCQUF1Qjs7SUFFdkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFJQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDBCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUdBO0lBQ0k7a0JBQ2M7SUFDZCw2SkFBK0Y7SUFBL0YsK0ZBQStGO0lBQy9GLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBOztHQUVHOztBQUNIO0lBQ0kscUJBQXFCO0lBQ3JCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlEQUFpRDtBQUNyRDs7QUFLQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NoYXRyb29tL2NoYXRyb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdFJvb217XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb2wtMTJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2hhdENvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7ICovXHJcbn1cclxuXHJcbi5jaGF0SGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAvKiBwYWRkaW5nOiAuNXJlbSAwOyAqL1xyXG59XHJcbi5jaGF0SGVhZGVyIGF7XHJcbiAgICBtYXJnaW46IDAgMnJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKiAuY2hhdFVzZXJQcm9maWxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6MzBweDtcclxufSAqL1xyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICB3aWR0aDogMi44cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2hhdEhlYWR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuLmNoYXRDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGhlaWdodDogODR2aDsgKi9cclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNHJlbSk7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxufVxyXG4ubWVzc2FnZUJveHtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzogMCAxcmVtIDAgMDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwcmVtKTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcblxyXG4uYm94e1xyXG4gICAgbWFyZ2luOiAuMnJlbSAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnVzZXIybXNne1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IC4zcmVtIC44cmVtO1xyXG4gICAgbWF4LXdpZHRoOjgwJTsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4udXNlcm1zZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNmNTRiNjQsICNmNzViNjEsICNmNzY5NjAsICNmNzc2NjAsICNmNzgzNjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZzogLjNyZW0gLjhyZW07XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC8qIGNsZWFyOiBib3RoOyAqL1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zZW5kaW5ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucHJlbG9hZGVyLXdyYXBwZXJ7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmNoYXRCb3h7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAwIDAgMDtcclxuICAgIC8qIHBhZGRpbmc6IC41cmVtIC41cmVtIDAgLjVyZW07ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGluaGVyaXQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmlucHV0LWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxudGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgLyogZm9udC1zaXplOiAxNnB4OyAqL1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDYzO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG5cclxuLmJ0bntcclxuICAgIC8qIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAycmVtOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2Y1NGI2NCwgI2Y3NWI2MSwgI2Y3Njk2MCwgI2Y3NzY2MCwgI2Y3ODM2MSk7XHJcbiAgICAvKiBwYWRkaW5nOiAxMnB4OyAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuLmJ0bjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbml7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4vKiAuY2hldnJvbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufSAqL1xyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0bjpmb2N1cywgdGV4dGFyZWE6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuNSk7IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLmNoYXRDb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5jaGF0SGVhZGVyIGF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuICAgIC5jaGF0Um9vbXtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIC5jb2wtMTJ7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgIH1cclxuICAgIC5jaGF0SGVhZGVyIGF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.ts ***!
  \************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

// import * as $ from 'jquery';



var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent(_userService, _chatService) {
        this._userService = _userService;
        this._chatService = _chatService;
        this.messages = [];
        this.chatuser = {
            _id: "",
            username: "",
            password: "",
            profilePicUrl: "",
            friends: null,
            requests: null
        };
        this.rows = 1;
        // do_resize(textbox) {
        //   console.log(textbox);
        //   // let maxrows: number = 3;
        //   // let txt = textbox;
        //   let cols: number = 34;
        //   // var arraytxt = txt.split('\n');
        //   // let rows: number = arraytxt.length;
        //   // for (let i = 0; i < arraytxt.length; i++) {
        //   //   rows += arraytxt[i].length / cols;
        //   // }
        //   if (textbox.length > cols) {
        //     if ((textbox.length % cols) > 0) {
        //       if (this.rows < 3)
        //         this.rows++;
        //     }
        //   }
        // }
        this.textMsg = "";
    }
    ChatroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        //initialise socket.io
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__('/');
        this.user = this._userService.getUser();
        this.chatuser = this._chatService.getChatUser();
        // this._userService.getAllUser().subscribe((data) => {
        //   this.chatuser = data[0];
        // }, (err) => {
        //   console.log(err);
        // });
        //chat room user event emitter variable
        this._chatService.chatroomUser.subscribe(function (data) {
            _this.chatuser = data;
            _this.chatRoomName = _this.user._id > _this.chatuser._id ? _this.user._id + "." + _this.chatuser._id : _this.chatuser._id + "." + _this.user._id;
            console.log(_this.chatRoomName);
            _this.socket.emit("joinPC", { room: _this.chatRoomName });
            _this._chatService.getMessages(_this.chatRoomName).subscribe(function (data) {
                if (data) {
                    console.log(data.messages);
                    _this.messages = data.messages;
                    _this.messages.reverse();
                }
                else {
                    _this.messages = [];
                }
            });
        });
        console.log("initialize");
        this.chatRoomName = this.user._id > this.chatuser._id ? this.user._id + "." + this.chatuser._id : this.chatuser._id + "." + this.user._id;
        this._chatService.getMessages(this.chatRoomName).subscribe(function (data) {
            if (data) {
                _this.messages = data.messages;
            }
            else {
                _this.messages = [];
            }
        });
        // client socket.io initialization
        this.socket.on('connect', function () {
            console.log("connection made");
            _this.socket.emit("joinPC", { room: _this.chatRoomName });
        });
        this.socket.on('chatMsg', function (data) {
            if (data.sender != _this.user._id) {
                _this.messages.unshift({
                    "sender": data.sender,
                    "messageBody": data.chatMsg
                });
            }
            else {
                // this.messages.unshift({
                //   "user": "user1",
                //   "msg": this.textMsg
                // })
            }
        });
    };
    ChatroomComponent.prototype.onSubmit = function () {
        // console.log(this.textMsg);
        if (this.textMsg.trim().length > 0) {
            this.socket.emit('message', {
                room: this.chatRoomName,
                messageBody: this.textMsg,
                sender: this.user._id
                // receiver: this.chatuser._id
            });
            this.messages.unshift({
                "sender": this.user._id,
                "messageBody": this.textMsg
            });
            this._chatService.sendText(this.chatRoomName, { "sender": this.user._id, "messageBody": this.textMsg }).subscribe(function (data) {
                console.log(data);
            });
            this.textMsg = "";
        }
    };
    ChatroomComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }
    ]; };
    ChatroomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatroom',
            template: __importDefault(__webpack_require__(/*! raw-loader!./chatroom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatroom/chatroom.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./chatroom.component.css */ "./src/app/chatroom/chatroom.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n    height: 100vh;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.row{\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100vh;\r\n}\r\n.col{\r\n    padding: 1rem;\r\n    height: 100vh;\r\n}\r\n.col-2{\r\n    color: white;\r\n    padding: 0;\r\n    background-color: #242a38;\r\n}\r\n.contactsContent{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.contactsHeader{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.contactsHead{\r\n    color: white;\r\n    /* padding: 5px 0px; */\r\n    font-size: 1.5rem;\r\n}\r\n.contactsHeader i{\r\n    /* float: right; */\r\n    padding: .2rem .5rem;\r\n    color: #fff;\r\n    font-size: 1.2rem;\r\n}\r\n.contactsHeader i:hover{\r\n    cursor: pointer;\r\n}\r\n/* .search{\r\n    float: right;\r\n     position: absolute; \r\n    margin: 4px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    padding: 5px 10px;\r\n    border: none;\r\n    border-radius: 50px;\r\n    font-size: 18px;\r\n    width: 0;\r\n}\r\n.btn{\r\n    float: right;\r\n     position: absolute; \r\n    background: #9c5aec;\r\n    padding: 10px;\r\n    height: 40px;\r\n    width: 40px;\r\n    line-height: 15px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    z-index: 9;\r\n} */\r\n/* .btn:focus, .search:focus, .list-group-item:focus{\r\n    outline: none;\r\n} */\r\n.contactList{\r\n    height: calc(100% - 2rem);\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n.contact-collection{\r\n    padding-top: 1rem;\r\n    margin: 0;\r\n    border: none;\r\n}\r\n.contact-item{\r\n    /* background: transparent; */\r\n    padding: .7rem 0;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    border-bottom: 1px solid rgba(100, 100, 100, 0.5);\r\n}\r\n.contact-item:hover{\r\n    cursor: pointer;\r\n    background-color: #242a38;\r\n}\r\n.img{\r\n    width: 2.8rem;\r\n    border-radius: 50%;\r\n}\r\nimg{\r\n    border-radius: 50%;\r\n    z-index: -1;\r\n}\r\n.online{\r\n    color: #fff;\r\n}\r\n/* img{\r\n    height: 55px;\r\n    width: 55px;\r\n    border-radius: 50%;\r\n} */\r\n.contactsName{\r\n    font-size: 1.1rem;\r\n    padding: .5rem 1rem;\r\n    margin: 0;\r\n    color: white;\r\n    /* width: 95%; */\r\n    /* border-top-left-radius: 15px;\r\n    border-bottom-left-radius: 15px; */\r\n    /* float: right; */\r\n    /* width: 100%; */\r\n}\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); \r\n    border-radius: 5px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.8); \r\n}\r\n.contact-chatroom{\r\n    background-color: #242a38;\r\n}\r\n@media screen and (max-width: 576px) {\r\n    .contact-chatroom {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBRUg7O0dBRUc7QUFJSDtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGVBQWU7SUFDZixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGlEQUFpRDtBQUNyRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7Ozs7R0FJRztBQUdIO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQjtzQ0FDa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUdBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxvREFBb0Q7SUFDcEQsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0FBQ3JEO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJO01BQ0UsYUFBYTtJQUNmO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnJvd3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5jb2x7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uY29sLTJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MmEzODtcclxufVxyXG5cclxuLmNvbnRhY3RzQ29udGVudHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250YWN0c0hlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29udGFjdHNIZWFke1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLyogcGFkZGluZzogNXB4IDBweDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY29udGFjdHNIZWFkZXIgaXtcclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4uY29udGFjdHNIZWFkZXIgaTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiAuc2VhcmNoe1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcbi5idG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGJhY2tncm91bmQ6ICM5YzVhZWM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDk7XHJcbn0gKi9cclxuXHJcbi8qIC5idG46Zm9jdXMsIC5zZWFyY2g6Zm9jdXMsIC5saXN0LWdyb3VwLWl0ZW06Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59ICovXHJcblxyXG5cclxuXHJcbi5jb250YWN0TGlzdHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMnJlbSk7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5jb250YWN0LWNvbGxlY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uY29udGFjdC1pdGVte1xyXG4gICAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICovXHJcbiAgICBwYWRkaW5nOiAuN3JlbSAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjUpO1xyXG59XHJcbi5jb250YWN0LWl0ZW06aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyYTM4O1xyXG59XHJcblxyXG4uaW1ne1xyXG4gICAgd2lkdGg6IDIuOHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4ub25saW5le1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8qIGltZ3tcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59ICovXHJcblxyXG5cclxuLmNvbnRhY3RzTmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIHdpZHRoOiA5NSU7ICovXHJcbiAgICAvKiBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDsgKi9cclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG59XHJcblxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjgpOyBcclxufVxyXG4uY29udGFjdC1jaGF0cm9vbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDJhMzg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuY29udGFjdC1jaGF0cm9vbSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


// import { $ } from 'protractor';





var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(_route, _userService, _chatService, dialog) {
        this._route = _route;
        this._userService = _userService;
        this._chatService = _chatService;
        this.dialog = dialog;
        this.contacts = [];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        // this.user = this._userService.getUser();
        // console.log(JSON.parse(localStorage.getItem("LoggedInUser")));
        // this.contacts = this._userService.getUser().friends;
        var _this = this;
        // this.contacts = this._chatService.getContacts(this.user.username);
        //test purpose
        this._userService.getAllUser().subscribe(function (data) {
            _this.contacts = data;
        }, function (err) {
            console.log(err);
        });
        // this._userService.chatroomUser.emit(this.contacts[0]);
        // console.log(this.contacts[0]);
    };
    ContactsComponent.prototype.onClick = function (contact) {
        console.log(contact);
        this._chatService.chatroomUser.emit(contact);
        this._chatService.setChatUser(contact);
        if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).outerWidth() < 576) {
            this._route.navigate(["/chatroom"]);
        }
    };
    ContactsComponent.prototype.openImgBox = function (contactPic) {
        console.log(contactPic);
    };
    ContactsComponent.prototype.openProfileDailog = function () {
        var dialogRef = this.dialog.open(_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], {
            height: '80%',
            width: '20rem'
        });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log(`Dialog result: ${result}`);
        // });
    };
    ContactsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __importDefault(__webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bodycontent{\r\n    width: 100%;\r\n    height: 100vh;\r\n    padding: 0;\r\n    margin: 0;\r\n    background: url('bg1.jpg') center center;\r\n    background-size: cover;\r\n}\r\n.col-md-6{\r\n    height: 100vh;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n.row{\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n@media (max-width: 576px){\r\n    .home-bg-div{\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7SUFDVixTQUFTO0lBQ1Qsd0NBQTREO0lBQzVELHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHljb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxLmpwZ1wiKSBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY29sLW1kLTZ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgLmhvbWUtYmctZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        // registerWindow = false;
        this.loginWindow = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.userService.window.subscribe((data) => {
        //   console.log(data);
        //   if (data == "register")
        //     this.loginWindow = false;
        // });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.box{\r\n    background: #20242f91;\r\n    padding: 3rem 2rem 1rem 2rem;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\n\r\ninput{\r\n    margin: .5rem 0;\r\n    padding: .5rem 1rem;\r\n    width: 100%;\r\n    color: white;\r\n    background-color: #49506371;\r\n    border: none;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n}\r\n\r\ninput:focus{\r\n    outline: none;\r\n}\r\n\r\n.btn{\r\n    width: 100%;\r\n    padding: .5rem;\r\n    text-align: center;\r\n    border: none;\r\n    margin: .5rem 0;\r\n    border-radius: 20px;\r\n    color: #fff;\r\n    background-image: -webkit-gradient(linear, left top, right bottom, from(#f54b64), color-stop(#f75b61), color-stop(#f76960), color-stop(#f77660), to(#f78361));\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n\r\n}\r\n\r\np{\r\n    margin-top: 2rem;\r\n    color: #fff;\r\n    font-size: .8rem;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw2SkFBK0Y7SUFBL0YsK0ZBQStGOztBQUVuRzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm94e1xyXG4gICAgYmFja2dyb3VuZDogIzIwMjQyZjkxO1xyXG4gICAgcGFkZGluZzogM3JlbSAycmVtIDFyZW0gMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA2MzcxO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2Y1NGI2NCwgI2Y3NWI2MSwgI2Y3Njk2MCwgI2Y3NzY2MCwgI2Y3ODM2MSk7XHJcblxyXG59XHJcblxyXG5we1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var LoginComponent = /** @class */ (function () {
    // socket: any;
    function LoginComponent(_route, _userService) {
        // this.socket = io('http://localhost:3000');
        this._route = _route;
        this._userService = _userService;
        this.user = {
            username: "",
            password: ""
        };
        // this.socket.on('connect', function () {
        //   console.log("connection made");
        // });
        // this.socket.on('newmsg', (data) => {
        //   console.log(data);
        // });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._userService.loginUser(this.user).subscribe(function (data) {
            //when login successful
            if (data.username) {
                _this._userService.setUser(data);
                localStorage.setItem("LoggedInUser", JSON.stringify(data));
                _this._route.navigate(["contacts"]);
            }
            else {
                _this.status = data.status;
            }
        }, function (err) {
            console.log(err);
        });
        // Make sure the client is loaded and sign-in is complete before calling this method.
        // this._route.navigate(["contacts"]);
    };
    LoginComponent.prototype.routeTo = function () {
        this._route.navigate(["home/register"]);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-container {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.profilecontent{\r\n    margin: 0;\r\n    padding: 2rem;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #20242f;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.profilecontent h3{\r\n    padding: 1rem;\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.imguploader{\r\n    padding: 1rem;\r\n}\r\n\r\n.imguploader:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.profilecontent img{\r\n    height: 8rem;\r\n    width: 8rem;\r\n    border-radius: 50%;\r\n}\r\n\r\n.profilecontent .btn{\r\n    /* width: 100%; */\r\n    padding: .5rem 3rem;\r\n    font-size: .9rem;\r\n    text-align: center;\r\n    border: none;\r\n    margin: .5rem 0;\r\n    border-radius: 20px;\r\n    color: #fff;\r\n    background-image: -webkit-gradient(linear, left top, right bottom, from(#f54b64), color-stop(#f75b61), color-stop(#f76960), color-stop(#f77660), to(#f78361));\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n\r\n}\r\n\r\n.profilecontent .btn:focus{\r\n    outline: none;\r\n}\r\n\r\n.profilecontent h5{\r\n    padding: 1rem;\r\n    font-size: 1.2rem;\r\n    /* font-weight: bold; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw2SkFBK0Y7SUFBL0YsK0ZBQStGOztBQUVuRzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5wcm9maWxlY29udGVudHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDI0MmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGVjb250ZW50IGgze1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmltZ3VwbG9hZGVye1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4uaW1ndXBsb2FkZXI6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnByb2ZpbGVjb250ZW50IGltZ3tcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5wcm9maWxlY29udGVudCAuYnRue1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICBwYWRkaW5nOiAuNXJlbSAzcmVtO1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNmNTRiNjQsICNmNzViNjEsICNmNzY5NjAsICNmNzc2NjAsICNmNzgzNjEpO1xyXG5cclxufVxyXG4ucHJvZmlsZWNvbnRlbnQgLmJ0bjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnByb2ZpbGVjb250ZW50IGg1e1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(afStorage, _userService, dialog) {
        this.afStorage = afStorage;
        this._userService = _userService;
        this.dialog = dialog;
        this.imgSrc = "assets/images/defaultProfile.png";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // this.user = JSON.parse(localStorage.getItem("LoggedInUser"));
        this.user = this._userService.getUser();
        this.imgSrc = this.user.profilePicUrl;
    };
    ProfileComponent.prototype.uploadfile = function () {
        var _this = this;
        var filepath = "/chat-app-profile-pics/" + this.user._id;
        var fileref = this.afStorage.ref(filepath);
        this.afStorage.upload(filepath, this.selectedImg).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            fileref.getDownloadURL().subscribe(function (url) {
                console.log(url);
                console.log(_this.user._id);
                _this._userService.updateProfilePic(_this.user._id, { "url": url }).subscribe(function (data) {
                    _this.dialog.close();
                });
            });
        })).subscribe();
    };
    ProfileComponent.prototype.upload = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) { return _this.imgSrc = e.target.result; };
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImg = event.target.files[0];
        }
        else {
            this.imgSrc = this.user.profilePicUrl;
            this.selectedImg = null;
        }
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.box{\r\n    background: #20242f91;\r\n    padding: 3rem 2rem 1rem 2rem;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\ninput{\r\n    margin: .5rem 0;\r\n    padding: .5rem 1rem;\r\n    width: 100%;\r\n    color: white;\r\n    background-color: #49506371;\r\n    border: none;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n}\r\ninput:focus{\r\n    outline: none;\r\n}\r\nbutton:disabled,\r\nbutton[disabled]{\r\n    cursor: not-allowed;\r\n}\r\n.btn{\r\n    width: 100%;\r\n    padding: .5rem;\r\n    text-align: center;\r\n    border: none;\r\n    margin: .5rem 0;\r\n    border-radius: 20px;\r\n    color: #fff;\r\n    background-image: -webkit-gradient(linear, left top, right bottom, from(#f54b64), color-stop(#f75b61), color-stop(#f76960), color-stop(#f77660), to(#f78361));\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n\r\n}\r\np{\r\n    margin-top: 2rem;\r\n    color: #fff;\r\n    font-size: .8rem;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFHQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw2SkFBK0Y7SUFBL0YsK0ZBQStGOztBQUVuRztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ib3h7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjAyNDJmOTE7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW0gMXJlbSAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pbnB1dHtcclxuICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNjM3MTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuYnV0dG9uOmRpc2FibGVkLFxyXG5idXR0b25bZGlzYWJsZWRde1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjZjU0YjY0LCAjZjc1YjYxLCAjZjc2OTYwLCAjZjc3NjYwLCAjZjc4MzYxKTtcclxuXHJcbn1cclxuXHJcbnB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_matchPassword_derictive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/matchPassword.derictive */ "./src/app/shared/matchPassword.derictive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService, _route) {
        this._userService = _userService;
        this._route = _route;
        this.user = {
            _id: "",
            username: "",
            password: "",
            profilePicUrl: "../../assets/images/defaultProfile.png",
            friends: [],
            requests: [],
        };
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])
        }, { validators: _shared_matchPassword_derictive__WEBPACK_IMPORTED_MODULE_3__["matchPassword"] });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.user.username = value.username;
        this.user.password = value.password;
        console.log(value);
        console.log(this.user);
        this._userService.registerUser(this.user).subscribe(function (data) {
            if (data.username) {
                _this._userService.setUser(data);
                localStorage.setItem("LoggedInUser", JSON.stringify(data));
                _this._route.navigate(["contacts"]);
            }
            else {
                _this.status = data.status;
            }
        }, function (err) {
            console.log(err);
        });
    };
    RegisterComponent.prototype.routeTo = function () {
        this._route.navigate(["home/login"]);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.contacts = [
            {
                "user": "Sanket",
                "pic": "../../assets/images/s.jpg"
            },
            {
                "user": "Riddhi",
                "pic": "../../assets/images/r.jpg"
            },
            {
                "user": "Sanket",
                "pic": "../../assets/images/s.jpg"
            },
            {
                "user": "Riddhi",
                "pic": "../../assets/images/r.jpg"
            },
            {
                "user": "Sanket",
                "pic": "../../assets/images/s.jpg"
            },
            {
                "user": "Riddhi",
                "pic": "../../assets/images/r.jpg"
            },
            {
                "user": "Sanket",
                "pic": "../../assets/images/s.jpg"
            },
            {
                "user": "Riddhi",
                "pic": "../../assets/images/r.jpg"
            },
            {
                "user": "Sanket",
                "pic": "../../assets/images/s.jpg"
            },
            {
                "user": "Riddhi",
                "pic": "../../assets/images/r.jpg"
            },
            {
                "user": "Sanket",
                "pic": "../../assets/images/s.jpg"
            },
            {
                "user": "Riddhi",
                "pic": "../../assets/images/r.jpg"
            }
        ];
        this.chatuser = {
            _id: "",
            username: "",
            password: "",
            profilePicUrl: "",
            friends: null,
            requests: null
        };
        this.chatroomUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //chatroom user details
    }
    // getContacts(username) {
    //   return this.contacts.filter(contact => contact.user.toLowerCase() != username.toLowerCase());
    // }
    ChatService.prototype.sendText = function (chatRoomName, message) {
        return this.http.post("/chats/" + chatRoomName, message);
    };
    ChatService.prototype.getMessages = function (chatRoomName) {
        return this.http.get("/chats/" + chatRoomName);
    };
    ChatService.prototype.setChatUser = function (chatuser) {
        this.chatuser = chatuser;
    };
    ChatService.prototype.getChatUser = function () {
        return this.chatuser;
    };
    ChatService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


// import { HttpHeaders } from '@angular/common/http';

var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.loginUser = function (user) {
        return this.http.post("/user/login", user);
    };
    UserService.prototype.registerUser = function (user) {
        return this.http.post("/user/register", user);
    };
    UserService.prototype.updateProfilePic = function (userId, profilePicUrl) {
        return this.http.post("/user/profilePicupdate/" + userId, profilePicUrl);
    };
    UserService.prototype.getAllUser = function () {
        return this.http.get("/user/allusers");
    };
    UserService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/matchPassword.derictive.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/matchPassword.derictive.ts ***!
  \***************************************************/
/*! exports provided: matchPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPassword", function() { return matchPassword; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var matchPassword = function (control) {
    var password = control.get("password");
    var confirmPassword = control.get("confirmpassword");
    return password.value == confirmPassword.value ? null : { passwordNotMatched: true };
};


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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBeQz5BeR5EY9g6wKYouxPp4OUArdAjPG8",
        authDomain: "chatapp-9fa60.firebaseapp.com",
        databaseURL: "https://chatapp-9fa60.firebaseio.com",
        projectId: "chatapp-9fa60",
        storageBucket: "chatapp-9fa60.appspot.com",
        messagingSenderId: "1014475100914",
        appId: "1:1014475100914:web:e2f8ec434edcf6ea05b66b"
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




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

module.exports = __webpack_require__(/*! E:\Folders\git-app\chat-app\angular-frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map