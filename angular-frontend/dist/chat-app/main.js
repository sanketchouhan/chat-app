(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\" [ngClass]=\"{show:toShow}\">\r\n    <div class=\"spinner-border text-light\" role=\"status\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n</div>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatroom/chatroom.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatroom/chatroom.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chatRoom container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"chatContent\">\r\n        <div class=\"chatHeader\">\r\n          <a routerLink=\"/contacts\"><i class=\"fas fa-chevron-left\"></i></a>\r\n          <img src={{chatuser.profilePicUrl}} alt=\"\">\r\n          <span class=\"chatHead\">{{chatuser.username}}</span>\r\n        </div>\r\n\r\n        <div class=\"chatContainer\">\r\n          <div class=\"chatBox\">\r\n            <textarea rows=\"1\" [(ngModel)]=\"textMsg\" placeholder=\"Type your message here\"></textarea>\r\n            <button class=\"btn\" (click)=\"onSubmit()\"><i class=\"fas fa-location-arrow\"></i></button>\r\n          </div>\r\n          <div class=\"messageBox\">\r\n            <div class=\"box\" *ngFor=\"let message of messages\">\r\n              <div class=\"usermsg\" *ngIf=\"message.sender==user._id; else elseBlock\">\r\n                {{message.messageBody}}\r\n                <div class=\"sending\" *ngIf=\"sending\">\r\n                  <div class=\"preloader-wrapper small active\">\r\n                    <div class=\"spinner-layer spinner-blue-only\">\r\n                      <div class=\"circle-clipper left\">\r\n                        <div class=\"circle\"></div>\r\n                      </div>\r\n                      <div class=\"gap-patch\">\r\n                        <div class=\"circle\"></div>\r\n                      </div>\r\n                      <div class=\"circle-clipper right\">\r\n                        <div class=\"circle\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <ng-template #elseBlock>\r\n                <div class=\"user2msg\">\r\n                  {{message.messageBody}}\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"col-lg-1\"></div> -->\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-12 col-sm-5 col-md-5 col-lg-4\">\r\n      <div class=\"navtabs\">\r\n        <div class=\"tabs\" [ngClass]=\"{isActive:tabs[0]}\" (click)=\"tabs[0]=true;tabs[1]=false;tabs[2]=false\"><img\r\n            src=\"../../assets/images/friends-logo.png\" alt=\"\" class=\"img-logo\"></div>\r\n        <div class=\"tabs\" [ngClass]=\"{isActive:tabs[1]}\" (click)=\"tabs[0]=false;tabs[1]=true;tabs[2]=false\"><img\r\n            src=\"../../assets/images/search-logo.png\" alt=\"\" class=\"img-logo\"></div>\r\n        <div class=\"tabs\" [ngClass]=\"{isActive:tabs[2]}\" (click)=\"tabs[0]=flase;tabs[1]=false;tabs[2]=true\"><img\r\n            src=\"../../assets/images/notification-logo.png\" alt=\"\" class=\"img-logo\"></div>\r\n        <i (click)=\"openProfileDailog()\" class=\"fas fa-ellipsis-v\"></i>\r\n      </div>\r\n\r\n      <!-- friends tab -->\r\n      <div class=\"tabContent contactsContent\" *ngIf=\"tabs[0]\">\r\n        <div class=\"contactsHead header\">Friends</div>\r\n        <div class=\"contactList\">\r\n          <ul class=\"contact-collection\">\r\n            <li class=\"contact-item\" *ngFor=\"let contact of contacts\" (click)=\"onClick(contact)\">\r\n              <div class=\"img\" (click)=\"openImgBox(contact.pic)\"><img src={{contact.profilePicUrl}} class=\"img-fluid\">\r\n              </div>\r\n              <p class=\"contactsName\">{{contact.username}}</p>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- friends tab end -->\r\n\r\n      <!-- search tab -->\r\n      <div class=\"tabContent searchContent\" *ngIf=\"tabs[1]\">\r\n        <div class=\"searchHead header\">Search</div>\r\n        <input type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" id=\"search\" placeholder=\"Search here\" (keyup)=\"search($event)\">\r\n\r\n        <div class=\"searchList\">\r\n          <ul class=\"search-collection\">\r\n            <li class=\"search-item\" *ngFor=\"let item of searchItems\">\r\n              <div class=\"img\" (click)=\"openImgBox(contact.pic)\"><img src={{item.profilePicUrl}} class=\"img-fluid\">\r\n              </div>\r\n              <p class=\"contactsName\">{{item.username}}</p>\r\n              <div class=\"m-auto\"></div>\r\n              <button class=\"add-friend-btn btn\" (click)=\"addFriend(item)\"><i class=\"fas fa-plus\"></i> Add Friend</button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- search tab end -->\r\n\r\n      <!-- requests tab -->\r\n      <div class=\"tabContent notificationContent\" *ngIf=\"tabs[2]\">\r\n        <div class=\"notificationHead header\">Requests</div>\r\n        <div class=\"notificationList\">\r\n          <ul class=\"notification-collection\">\r\n            <li class=\"notification-item\" *ngFor=\"let request of requests\">\r\n              <div class=\"img\" (click)=\"openImgBox(contact.pic)\"><img src={{request.profilePicUrl}} class=\"img-fluid\">\r\n              </div>\r\n              <p class=\"notificationName\">{{request.username}}</p>\r\n              <div class=\"m-auto\"></div>\r\n              <button class=\"requests-btn btn\" (click)=\"confirmRequest(request)\"><i class=\"fas fa-check\"></i></button>\r\n              <button class=\"requests-btn btn\" (click)=\"deleteRequest(request)\"><i class=\"far fa-trash-alt\"></i></button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- requests tab end -->\r\n    </div>\r\n\r\n    <div class=\"col contact-chatroom\">\r\n      <app-chatroom></app-chatroom>\r\n    </div>\r\n  </div>\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profilecontent\">\n  <h3>Edit Profile</h3>\n  <div class=\"imguploader\">\n    <img [src]=\"imgSrc\" (click)=\"fileuploder.click()\">\n    \n    <!-- [imageChangedEvent]=\"imageChangedEvent\"  -->\n    <!-- <image-cropper \n    [imageFileChanged]=\"imageChangedEvent\" \n    [maintainAspectRatio]=\"true\" \n    [aspectRatio]=\"1 / 1\"\n    [resizeToWidth]=\"100\" \n    (imageCropped)=\"imageCropped($event)\" \n    (imageLoaded)=\"imageLoaded()\"\n    (cropperReady)=\"cropperReady()\" \n    (loadImageFailed)=\"loadImageFailed()\"></image-cropper> -->\n    <!-- <img #image [src]=\"imageSource\" crossorigin> -->\n<!-- upload($event) -->\n    <input type=\"file\" hidden #fileuploder (change)=\"upload($event)\" accept=\".png,.jpg\" name=\"profile\" id=\"profile\">\n  </div>\n\n\n  <h5>{{user.username}}</h5>\n  <button type=\"submit\" class=\"btn\" (click)=\"uploadfile()\">Upload</button>\n</div>\n\n\n\n\n\n<!-- <img [src]=\"imgSrc\" (click)=\"fileuploder.click()\" width=\"200px\" height=\"200px\"> -->\n<!-- <input type=\"file\" #fileuploder (change)=\"upload($event)\" accept=\".png,.jpg\" name=\"profile\" id=\"profile\"> -->\n<!-- <button type=\"submit\" (click)=\"uploadfile()\">upload</button> -->");

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
/* harmony default export */ __webpack_exports__["default"] = (".overlay{\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: fixed;\r\n    background-color: #242a38ab;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    z-index: 100;\r\n    display: none;\r\n}\r\n.show{\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MmEzOGFiO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn0iXX0= */");

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
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
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


var AppComponent = /** @class */ (function () {
    function AppComponent(_chatService) {
        var _this = this;
        this._chatService = _chatService;
        this.toShow = false;
        this._chatService.overlay.subscribe(function (data) {
            _this.toShow = data;
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
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
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/fesm5/ngx-image-compress.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
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
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        children: [{ path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"] }]
    },
    { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__["ContactsComponent"] },
    { path: 'chatroom', component: _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_14__["ChatroomComponent"] },
    { path: 'home', redirectTo: '/home/login', pathMatch: 'full' },
    { path: '', redirectTo: '/home/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/home/login' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__["ContactsComponent"],
                _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_14__["ChatroomComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"]
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
                _services_chat_service__WEBPACK_IMPORTED_MODULE_15__["ChatService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"],
                ngx_image_compress__WEBPACK_IMPORTED_MODULE_10__["NgxImageCompressService"]
                // {provide: ProfileComponent, useValue: {hasBackdrop: true}}
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".chatRoom{\r\n    height: 100%;\r\n    /* width: 100%; */\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.row{\r\n    height: 100%;\r\n    /* width: 100%; */\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.col-12{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.chatContent{\r\n    height: 100%;\r\n    width: 100%;\r\n    /* padding: 20px 0 20px 20px; */\r\n}\r\n\r\n.chatHeader{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    height: 4rem;\r\n    /* padding: .5rem 0; */\r\n}\r\n\r\n.chatHeader a{\r\n    margin: 0 2rem;\r\n    color: white;\r\n}\r\n\r\n/* .chatUserProfile{\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    border-radius:30px;\r\n} */\r\n\r\nimg{\r\n    height: 2.8rem;\r\n    width: 2.8rem;\r\n    border-radius: 50%;\r\n}\r\n\r\n.chatHead{\r\n    color: white;\r\n    padding: 0 1rem;\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.chatContainer{\r\n    width: 100%;\r\n    height: calc(100% - 4rem);\r\n    padding: 1rem 1rem 0 1rem;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: reverse;\r\n            flex-direction: column-reverse;\r\n}\r\n\r\n.messageBox{\r\n    margin:0;\r\n    padding: 0 1rem 0 0;\r\n    height: calc(100vh - 10rem);\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: reverse;\r\n            flex-direction: column-reverse;\r\n}\r\n\r\n.box{\r\n    margin: .2rem 0;\r\n    width: 100%;\r\n}\r\n\r\n.user2msg{\r\n    background: white;\r\n    border-radius: 10px;\r\n    border-top-left-radius: 0;\r\n    padding: .3rem .8rem;\r\n    max-width:80%; \r\n    color: black;\r\n    float: left;\r\n    clear: both;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.usermsg{\r\n    background-image: -webkit-gradient(linear, left top, right bottom, from(#f54b64), color-stop(#f75b61), color-stop(#f76960), color-stop(#f77660), to(#f78361));\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n    border-radius: 10px;\r\n    border-top-right-radius: 0;\r\n    padding: .3rem .8rem;\r\n    max-width: 80%;\r\n    color: white;\r\n    float: right;\r\n    word-wrap: break-word;\r\n    \r\n}\r\n\r\n.sending{\r\n    float: right;\r\n    margin-left: 15px; \r\n    margin-top: 3px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.preloader-wrapper{\r\n    height: 18px;\r\n    width: 18px;\r\n}\r\n\r\n.chatBox{\r\n    height: 3rem;\r\n    padding: .5rem 0 0 0;\r\n    /* padding: .5rem .5rem 0 .5rem; */\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: inherit;\r\n            align-items: inherit;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.input-field{\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\ntextarea{\r\n    width: 100%;\r\n    padding: .5rem 1rem;\r\n    margin: 0;\r\n    border-radius: 10px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    /* font-size: 16px; */\r\n    color: #fff;\r\n    border: none;\r\n    background-color: #495063;\r\n    resize: none;\r\n}\r\n\r\n.btn{\r\n    /* height: 2rem;\r\n    width: 2rem; */\r\n    background-image: -webkit-gradient(linear, left top, right bottom, from(#f54b64), color-stop(#f75b61), color-stop(#f76960), color-stop(#f77660), to(#f78361));\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n    /* padding: 12px; */\r\n    border: none;\r\n    border-radius: 50%;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.btn:focus{\r\n    outline: none;\r\n}\r\n\r\ni{\r\n    font-size: 1rem;\r\n    color: #fff;\r\n}\r\n\r\n/* .chevron{\r\n    font-size: 40px;\r\n} */\r\n\r\na{\r\n    text-decoration: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.btn:focus, textarea:focus{\r\n    outline: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \r\n    border-radius: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \r\n}\r\n\r\n@media (max-width: 767px){\r\n    .chatContainer{\r\n        padding: 0;\r\n    }\r\n    .chatHeader a{\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px){\r\n    .chatRoom{\r\n        margin: 0 auto;\r\n    }\r\n    .col-12{\r\n        padding: 1rem;\r\n    }\r\n    .chatHeader a{\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUNBOzs7Ozs7R0FNRzs7QUFFSDtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBOEI7SUFBOUIsOEJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQThCO0lBQTlCLDhCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2SkFBK0Y7SUFBL0YsK0ZBQStGO0lBQy9GLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUlBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsb0JBQWE7SUFBYixhQUFhO0lBQ2IsMEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQix5QkFBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBR0E7SUFDSTtrQkFDYztJQUNkLDZKQUErRjtJQUEvRiwrRkFBK0Y7SUFDL0YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBQ0E7O0dBRUc7O0FBQ0g7SUFDSSxxQkFBcUI7SUFDckIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0FBQ3JEOztBQUtBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0Um9vbXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnJvd3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbC0xMntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jaGF0Q29udGVudHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogcGFkZGluZzogMjBweCAwIDIwcHggMjBweDsgKi9cclxufVxyXG5cclxuLmNoYXRIZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIC8qIHBhZGRpbmc6IC41cmVtIDA7ICovXHJcbn1cclxuLmNoYXRIZWFkZXIgYXtcclxuICAgIG1hcmdpbjogMCAycmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIC5jaGF0VXNlclByb2ZpbGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czozMHB4O1xyXG59ICovXHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgIHdpZHRoOiAyLjhyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jaGF0SGVhZHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4uY2hhdENvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0cmVtKTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcbi5tZXNzYWdlQm94e1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTByZW0pO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbn1cclxuXHJcbi5ib3h7XHJcbiAgICBtYXJnaW46IC4ycmVtIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udXNlcjJtc2d7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZzogLjNyZW0gLjhyZW07XHJcbiAgICBtYXgtd2lkdGg6ODAlOyBcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi51c2VybXNne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2Y1NGI2NCwgI2Y3NWI2MSwgI2Y3Njk2MCwgI2Y3NzY2MCwgI2Y3ODM2MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAuOHJlbTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zZW5kaW5ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucHJlbG9hZGVyLXdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxufVxyXG5cclxuXHJcblxyXG4uY2hhdEJveHtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIHBhZGRpbmc6IC41cmVtIDAgMCAwO1xyXG4gICAgLyogcGFkZGluZzogLjVyZW0gLjVyZW0gMCAuNXJlbTsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogaW5oZXJpdDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uaW5wdXQtZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG50ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBmb250LXNpemU6IDE2cHg7ICovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNjM7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uYnRue1xyXG4gICAgLyogaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjZjU0YjY0LCAjZjc1YjYxLCAjZjc2OTYwLCAjZjc3NjYwLCAjZjc4MzYxKTtcclxuICAgIC8qIHBhZGRpbmc6IDEycHg7ICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG4uYnRuOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi8qIC5jaGV2cm9ue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59ICovXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuOmZvY3VzLCB0ZXh0YXJlYTpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC41KTsgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAuY2hhdENvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmNoYXRIZWFkZXIgYXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgLmNoYXRSb29te1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbC0xMntcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmNoYXRIZWFkZXIgYXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufVxyXG4iXX0= */");

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
        if (this._chatService.getChatUser()) {
            this.chatuser = this._chatService.getChatUser();
        }
        else {
            this.chatuser.username = "Unknown";
            this.chatuser.profilePicUrl = "../../assets/images/defaultProfile.png";
        }
        //chat room user event emitter variable
        this._chatService.chatroomUser.subscribe(function (data) {
            _this.chatuser = data;
            _this.chatRoomName = _this.user._id > _this.chatuser._id ? _this.user._id + "." + _this.chatuser._id : _this.chatuser._id + "." + _this.user._id;
            // console.log(this.chatRoomName);
            _this.socket.emit("joinPC", { room: _this.chatRoomName });
            _this._chatService.getMessages(_this.chatRoomName).subscribe(function (data) {
                if (data) {
                    // console.log(data.messages);
                    _this.messages = data.messages;
                }
                else {
                    _this.messages = [];
                }
            });
        });
        // console.log("initialize");
        this.chatRoomName = this.user._id > this.chatuser._id ? this.user._id + "." + this.chatuser._id : this.chatuser._id + "." + this.user._id;
        this._chatService.getMessages(this.chatRoomName).subscribe(function (data) {
            if (data) {
                // console.log(data.messages);
                _this.messages = data.messages;
                // this.messages.reverse();
            }
            else {
                _this.messages = [];
            }
        });
        // client socket.io initialization
        this.socket.on('connect', function () {
            // console.log("connection made");
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
                // console.log(data);
                // for(let i=0;i<this.user.friends.length;i++){
                //   if (this.user.friends[i]._id == this.chatuser._id) {
                //     let temp = this.chatuser;
                //     this.user.friends.splice(i, 1);
                //     this.user.friends.unshift(temp);
                //     break;
                //   }
                // }
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
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n    height: 100vh;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.row{\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100vh;\r\n}\r\n.col{\r\n    padding: 1rem;\r\n    height: 100vh;\r\n    color: white;\r\n}\r\n/* navigation tabs */\r\n.navtabs{\r\n    height: 2rem;\r\n    width: 100%;\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n}\r\n.navtabs .tabs{\r\n    padding: 5px 0;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n.navtabs .tabs.isActive{\r\n    border-bottom: 1px solid white;\r\n}\r\n.navtabs .tabs .img-logo{\r\n    height: 1.2rem;\r\n}\r\n.navtabs i{\r\n    padding: .5rem 1rem;\r\n    cursor: pointer;\r\n}\r\n/* common css */\r\n.tabContent{\r\n    height: calc(100% - 2rem);\r\n    width: 100%;\r\n}\r\n.header{\r\n    padding-top: 1rem;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n}\r\n/* friends tab */\r\n.contactList{\r\n    height: calc(100% - 3rem);\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n.contact-collection{\r\n    padding-top: 1rem;\r\n    margin: 0;\r\n    border: none;\r\n}\r\n.contact-item{\r\n    padding: .7rem 0;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    border-bottom: 1px solid rgba(100, 100, 100, 0.5);\r\n}\r\n.contact-item:hover{\r\n    cursor: pointer;\r\n    background-color: #242a38;\r\n}\r\n.contactsContent .img{\r\n    width: 2.8rem;\r\n    height: 2.8rem;\r\n    border-radius: 50%;\r\n}\r\n.contactsContent img{\r\n    width: 2.8rem;\r\n    height: 2.8rem;\r\n    border-radius: 50%;\r\n    z-index: -1;\r\n}\r\n.contactsName{\r\n    font-size: 1.2rem;\r\n    padding: .5rem 1rem;\r\n    margin: 0;\r\n    color: white;\r\n}\r\n/* search tab */\r\n.searchContent input{\r\n    width: 100%;\r\n    padding: .2rem 1rem;\r\n    margin: 0;\r\n    border-radius: 10px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    color: #fff;\r\n    border: none;\r\n    background-color: #495063;\r\n}\r\n.btn:focus, input:focus{\r\n    outline: none;\r\n}\r\n.searchContent .searchList{\r\n    height: calc(100% - 6rem);\r\n    margin-top: 1rem;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n.searchContent .search-collection{\r\n    /* padding-top: 1rem; */\r\n    margin: 0;\r\n    border: none;\r\n}\r\n.searchContent .search-item{\r\n    padding: .7rem 0;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    border-bottom: 1px solid rgba(100, 100, 100, 0.5);\r\n}\r\n.searchContent .search-item:hover{\r\n    cursor: pointer;\r\n    background-color: #242a38;\r\n}\r\n.searchContent .img{\r\n    width: 2.8rem;\r\n    height: 2.8rem;\r\n    border-radius: 50%;\r\n}\r\n.searchContent img{\r\n    width: 2.8rem;\r\n    height: 2.8rem;\r\n    border-radius: 50%;\r\n    z-index: -1;\r\n}\r\n.searchContent .searchName{\r\n    font-size: 1.2rem;\r\n    padding: .5rem 1rem;\r\n    margin: 0;\r\n    color: white;\r\n}\r\n.searchContent .add-friend-btn{\r\n    margin-right: 1rem;\r\n    padding: .3rem .5rem;\r\n    font-size: .8rem;\r\n    color: white;\r\n    background-image: -webkit-gradient(linear, left top, right bottom, from(#f54b64), color-stop(#f75b61), color-stop(#f76960), color-stop(#f77660), to(#f78361));\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n    border-radius: 8px;\r\n}\r\n/* notification tab */\r\n.notificationContent .notificationList{\r\n    height: calc(100% - 3rem);\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n.notificationContent .notification-collection{\r\n    padding-top: 1rem;\r\n    margin: 0;\r\n    border: none;\r\n}\r\n.notificationContent .notification-item{\r\n    padding: .7rem 0;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    border-bottom: 1px solid rgba(100, 100, 100, 0.5);\r\n}\r\n.notificationContent .notification-item:hover{\r\n    cursor: pointer;\r\n    background-color: #242a38;\r\n}\r\n.notificationContent .img{\r\n    width: 2.8rem;\r\n    height: 2.8rem;\r\n    border-radius: 50%;\r\n}\r\n.notificationContent img{\r\n    width: 2.8rem;\r\n    height: 2.8rem;\r\n    border-radius: 50%;\r\n    z-index: -1;\r\n}\r\n.notificationContent .notificationName{\r\n    font-size: 1.2rem;\r\n    padding: .5rem 1rem;\r\n    margin: 0;\r\n    color: white;\r\n}\r\n.notificationContent .requests-btn{\r\n    margin-right: 1rem;\r\n    padding: .3rem 1rem;\r\n    color: #ffffff;\r\n    background-image: -webkit-gradient(linear, left top, right bottom, from(#f54b64), color-stop(#f75b61), color-stop(#f76960), color-stop(#f77660), to(#f78361));\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n    border-radius: 8px;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); \r\n    border-radius: 5px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.8); \r\n}\r\n.contact-chatroom{\r\n    background-color: #242a38;\r\n}\r\n@media screen and (max-width: 576px) {\r\n    .contact-chatroom {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDhCQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUdBLGVBQWU7QUFDZjtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixpREFBaUQ7QUFDckQ7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixpREFBaUQ7QUFDckQ7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw2SkFBK0Y7SUFBL0YsK0ZBQStGO0lBQy9GLGtCQUFrQjtBQUN0QjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsaURBQWlEO0FBQ3JEO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCw2SkFBK0Y7SUFBL0YsK0ZBQStGO0lBQy9GLGtCQUFrQjtBQUN0QjtBQVdBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxvREFBb0Q7SUFDcEQsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0FBQ3JEO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJO01BQ0UsYUFBYTtJQUNmO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnJvd3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5jb2x7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogbmF2aWdhdGlvbiB0YWJzICovXHJcbi5uYXZ0YWJze1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbi5uYXZ0YWJzIC50YWJze1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmF2dGFicyAudGFicy5pc0FjdGl2ZXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4ubmF2dGFicyAudGFicyAuaW1nLWxvZ297XHJcbiAgICBoZWlnaHQ6IDEuMnJlbTtcclxufVxyXG4ubmF2dGFicyBpe1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIGNvbW1vbiBjc3MgKi9cclxuLnRhYkNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi8qIGZyaWVuZHMgdGFiICovXHJcbi5jb250YWN0TGlzdHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gM3JlbSk7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5jb250YWN0LWNvbGxlY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uY29udGFjdC1pdGVte1xyXG4gICAgcGFkZGluZzogLjdyZW0gMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgMC41KTtcclxufVxyXG4uY29udGFjdC1pdGVtOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MmEzODtcclxufVxyXG4uY29udGFjdHNDb250ZW50IC5pbWd7XHJcbiAgICB3aWR0aDogMi44cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmNvbnRhY3RzQ29udGVudCBpbWd7XHJcbiAgICB3aWR0aDogMi44cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4uY29udGFjdHNOYW1le1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBzZWFyY2ggdGFiICovXHJcbi5zZWFyY2hDb250ZW50IGlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMnJlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA2MztcclxufVxyXG4uYnRuOmZvY3VzLCBpbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnNlYXJjaENvbnRlbnQgLnNlYXJjaExpc3R7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZyZW0pO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLnNlYXJjaENvbnRlbnQgLnNlYXJjaC1jb2xsZWN0aW9ue1xyXG4gICAgLyogcGFkZGluZy10b3A6IDFyZW07ICovXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnNlYXJjaENvbnRlbnQgLnNlYXJjaC1pdGVte1xyXG4gICAgcGFkZGluZzogLjdyZW0gMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgMC41KTtcclxufVxyXG4uc2VhcmNoQ29udGVudCAuc2VhcmNoLWl0ZW06aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyYTM4O1xyXG59XHJcbi5zZWFyY2hDb250ZW50IC5pbWd7XHJcbiAgICB3aWR0aDogMi44cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnNlYXJjaENvbnRlbnQgaW1ne1xyXG4gICAgd2lkdGg6IDIuOHJlbTtcclxuICAgIGhlaWdodDogMi44cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuLnNlYXJjaENvbnRlbnQgLnNlYXJjaE5hbWV7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNlYXJjaENvbnRlbnQgLmFkZC1mcmllbmQtYnRue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZzogLjNyZW0gLjVyZW07XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2Y1NGI2NCwgI2Y3NWI2MSwgI2Y3Njk2MCwgI2Y3NzY2MCwgI2Y3ODM2MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi8qIG5vdGlmaWNhdGlvbiB0YWIgKi9cclxuLm5vdGlmaWNhdGlvbkNvbnRlbnQgLm5vdGlmaWNhdGlvbkxpc3R7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDNyZW0pO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4ubm90aWZpY2F0aW9uQ29udGVudCAubm90aWZpY2F0aW9uLWNvbGxlY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ubm90aWZpY2F0aW9uQ29udGVudCAubm90aWZpY2F0aW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAuN3JlbSAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjUpO1xyXG59XHJcbi5ub3RpZmljYXRpb25Db250ZW50IC5ub3RpZmljYXRpb24taXRlbTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDJhMzg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbkNvbnRlbnQgLmltZ3tcclxuICAgIHdpZHRoOiAyLjhyZW07XHJcbiAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ubm90aWZpY2F0aW9uQ29udGVudCBpbWd7XHJcbiAgICB3aWR0aDogMi44cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4ubm90aWZpY2F0aW9uQ29udGVudCAubm90aWZpY2F0aW9uTmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubm90aWZpY2F0aW9uQ29udGVudCAucmVxdWVzdHMtYnRue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZzogLjNyZW0gMXJlbTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2Y1NGI2NCwgI2Y3NWI2MSwgI2Y3Njk2MCwgI2Y3NzY2MCwgI2Y3ODM2MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC44KTsgXHJcbn1cclxuXHJcbi5jb250YWN0LWNoYXRyb29te1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MmEzODtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5jb250YWN0LWNoYXRyb29tIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */");

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
        this.tabs = [true, false, false];
        this.searchItems = [];
        this.contacts = [];
        this.requests = [];
        this.searchText = "";
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.user = this._userService.getUser();
        this.contacts = this.user.friends;
        this.requests = this.user.requests;
        // console.log(JSON.parse(localStorage.getItem("LoggedInUser")));
        // this.contacts = this._userService.getUser().friends;
    };
    // for chatroom user update
    ContactsComponent.prototype.onClick = function (contact) {
        // console.log(contact);
        this._chatService.chatroomUser.emit(contact);
        this._chatService.setChatUser(contact);
        if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).outerWidth() < 576) {
            this._route.navigate(["/chatroom"]);
        }
    };
    // search logic
    ContactsComponent.prototype.search = function ($event) {
        var _this = this;
        $event.preventDefault();
        if (this.searchText.length > 0) {
            this._userService.searchUsers(this.searchText).subscribe(function (data) {
                // console.log(data);
                _this.searchItems = data.filter(function (i) {
                    var item = i;
                    if (_this.user.friends.find(function (i) { return i._id == item._id; }) || i._id == _this.user._id) {
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }, function (err) {
                // console.log(err);
            });
        }
        else {
            this.searchItems = [];
        }
    };
    // add friend logic 
    ContactsComponent.prototype.addFriend = function (item) {
        var _this = this;
        //   console.log(item);
        //   console.log(this.user._id);
        this._chatService.overlay.emit(true);
        this._userService.addFriend({ "userId": this.user._id }, item._id).subscribe(function (data) {
            _this._chatService.overlay.emit(false);
            // console.log(data);
        }, function (err) {
            _this._chatService.overlay.emit(false);
        });
    };
    // confirm requests logic 
    ContactsComponent.prototype.confirmRequest = function (request) {
        var _this = this;
        this._chatService.overlay.emit(true);
        this._userService.confirmRequest(this.user._id, { "friendId": request._id }).subscribe(function (data) {
            _this._chatService.overlay.emit(false);
            // console.log(data);
            _this.requests = _this.requests.filter(function (i) { return i._id != request._id; });
            // this.contacts.push(data);
            _this.user.requests = _this.requests;
            _this.user.friends.push(request);
            _this._userService.setUser(_this.user);
        }, function (err) {
            _this._chatService.overlay.emit(false);
        });
    };
    //delete requests logic
    ContactsComponent.prototype.deleteRequest = function (request) {
        var _this = this;
        this._chatService.overlay.emit(true);
        this._userService.deleteRequest(this.user._id, { "friendId": request._id }).subscribe(function (data) {
            _this._chatService.overlay.emit(false);
            // console.log(data);
            _this.requests = _this.requests.filter(function (i) { return i._id != request._id; });
            _this.user.requests = _this.requests;
            _this._userService.setUser(_this.user);
        }, function (err) {
            _this._chatService.overlay.emit(false);
        });
    };
    ContactsComponent.prototype.openImgBox = function (contactPic) {
        console.log(contactPic);
    };
    // profile dailog box
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
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




var LoginComponent = /** @class */ (function () {
    // socket: any;
    function LoginComponent(_route, _userService, _chatService) {
        // this.socket = io('http://localhost:3000');
        this._route = _route;
        this._userService = _userService;
        this._chatService = _chatService;
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
        this._chatService.overlay.emit(true);
        this._userService.loginUser(this.user).subscribe(function (data) {
            //when login successful
            _this._chatService.overlay.emit(false);
            if (data.username) {
                _this._userService.setUser(data);
                _this._chatService.setChatUser(data.friends[0]);
                localStorage.setItem("LoggedInUser", JSON.stringify(data));
                _this._route.navigate(["contacts"]);
            }
            else {
                _this.status = data.status;
            }
        }, function (err) {
            _this._chatService.overlay.emit(false);
            // console.log(err);
        });
    };
    LoginComponent.prototype.routeTo = function () {
        this._route.navigate(["home/register"]);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-container {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.profilecontent{\r\n    margin: 0;\r\n    padding: 2rem;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #20242f;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.profilecontent h3{\r\n    padding: 1rem;\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.imguploader{\r\n    padding: 1rem;\r\n    height: 10rem;\r\n}\r\n\r\n.imguploader:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.profilecontent img{\r\n    height: 8rem;\r\n    width: 8rem;\r\n    border-radius: 50%;\r\n}\r\n\r\n.profilecontent .btn{\r\n    /* width: 100%; */\r\n    padding: .5rem 3rem;\r\n    font-size: .9rem;\r\n    text-align: center;\r\n    border: none;\r\n    margin: .5rem 0;\r\n    border-radius: 20px;\r\n    color: #fff;\r\n    background-image: -webkit-gradient(linear, left top, right bottom, from(#f54b64), color-stop(#f75b61), color-stop(#f76960), color-stop(#f77660), to(#f78361));\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n\r\n}\r\n\r\n.profilecontent .btn:focus{\r\n    outline: none;\r\n}\r\n\r\n.profilecontent h5{\r\n    padding: 1rem;\r\n    font-size: 1.2rem;\r\n    /* font-weight: bold; */\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNkpBQStGO0lBQS9GLCtGQUErRjs7QUFFbkc7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucHJvZmlsZWNvbnRlbnR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyNDJmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wcm9maWxlY29udGVudCBoM3tcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5pbWd1cGxvYWRlcntcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG59XHJcbi5pbWd1cGxvYWRlcjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvZmlsZWNvbnRlbnQgaW1ne1xyXG4gICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnByb2ZpbGVjb250ZW50IC5idG57XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIHBhZGRpbmc6IC41cmVtIDNyZW07XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2Y1NGI2NCwgI2Y3NWI2MSwgI2Y3Njk2MCwgI2Y3NzY2MCwgI2Y3ODM2MSk7XHJcblxyXG59XHJcbi5wcm9maWxlY29udGVudCAuYnRuOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ucHJvZmlsZWNvbnRlbnQgaDV7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxufVxyXG5cclxuXHJcbiJdfQ== */");

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
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/fesm5/ngx-image-compress.js");
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
    function ProfileComponent(afStorage, _userService, _chatService, imageCompress, dialog) {
        this.afStorage = afStorage;
        this._userService = _userService;
        this._chatService = _chatService;
        this.imageCompress = imageCompress;
        this.dialog = dialog;
        this.imgSrc = "assets/images/defaultProfile.png";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // this.user = JSON.parse(localStorage.getItem("LoggedInUser"));
        this.user = this._userService.getUser();
        this.imgSrc = this.user.profilePicUrl;
    };
    // compressFile() {
    //   this.imageCompress.uploadFile().then(({image, orientation}) => {
    //     // this.imgResultBeforeCompress = image;
    //     console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
    //     this.imageCompress.compressFile(image, orientation, 50, 50).then(
    //       result => {
    //         // this.imgResultAfterCompress = result;
    //         console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
    //       }
    //     );
    //   });
    // }
    // data: FileList;
    // public fileChangeEvent(event) {
    //   this.data = event.target.files;
    //   console.log('input: ' + this.data);
    //   const compress = this.compress(this.data[0])
    //     .subscribe(res => {
    //       const reader = new FileReader();
    //       reader.onload = (e: any) => this.imgSrc = e.target.result;
    //       reader.readAsDataURL(event.target.files[0]);
    //       //Code block after completing all compression
    //       console.log('Compression successful ' + res);
    //       // }
    //     });
    // }
    // compress(file: File): Observable<any> {
    //   const width = 200; // For scaling relative to width
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   return Observable.create(observer => {
    //     reader.onload = ev => {
    //       const img = new Image();
    //       img.src = (ev.target as any).result;
    //       (img.onload = () => {
    //         const elem = document.createElement('canvas'); // Use Angular's Renderer2 method
    //         // const scaleFactor = width / img.width;
    //         let sy = 0, sx = 0;
    //         let swidth = 0, sheight = 0;
    //         // elem.width = width;
    //         // elem.height = img.height * scaleFactor;
    //         // elem.height = width;
    //         // const ctx = <CanvasRenderingContext2D>elem.getContext('2d');
    //         if (img.width > img.height) {
    //           elem.width = elem.height = swidth = sheight = img.height;
    //           sx = (img.width - img.height) / 2;
    //         }
    //         else if (img.width < img.height) {
    //           elem.width = elem.height = swidth = sheight = img.width;
    //           sy = (img.height - img.width) / 2;
    //         }else{
    //           elem.width = elem.height = swidth = sheight = img.width;
    //         }
    //         const ctx = <CanvasRenderingContext2D>elem.getContext('2d');
    //         ctx.drawImage(img, sx, sy, swidth, sheight, 0, 0, elem.width, elem.height);
    //         ctx.canvas.toBlob(
    //           blob => {
    //             observer.next(
    //               new File([blob], file.name, {
    //                 type: 'image/jpeg',
    //                 lastModified: Date.now(),
    //               }),
    //             );
    //           },
    //           'image/jpeg',
    //           1,
    //         );
    //       }),
    //         (reader.onerror = error => observer.error(error));
    //     };
    //   });
    // }
    // working
    ProfileComponent.prototype.uploadfile = function () {
        var _this = this;
        this._chatService.overlay.emit(true);
        var filepath = "/chat-app-profile-pics/" + this.user._id;
        var fileref = this.afStorage.ref(filepath);
        this.afStorage.upload(filepath, this.selectedImg).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            fileref.getDownloadURL().subscribe(function (url) {
                // console.log(url);
                // console.log(this.user._id);
                _this._userService.updateProfilePic(_this.user._id, { "url": url }).subscribe(function (data) {
                    _this.user.profilePicUrl = url;
                    _this._userService.setUser(_this.user);
                    _this._chatService.overlay.emit(false);
                    _this.dialog.close();
                }, function (err) {
                    _this._chatService.overlay.emit(false);
                    // console.log(err);
                });
            }, function (err) {
                _this._chatService.overlay.emit(false);
                // console.log(err);
            });
        })).subscribe(function (err) {
            _this._chatService.overlay.emit(false);
            // console.log(err);
        });
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
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
        { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_6__["NgxImageCompressService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"],
            ngx_image_compress__WEBPACK_IMPORTED_MODULE_6__["NgxImageCompressService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
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
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
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
    function RegisterComponent(_userService, _route, _chatService) {
        this._userService = _userService;
        this._route = _route;
        this._chatService = _chatService;
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
        this._chatService.overlay.emit(true);
        this.user.username = value.username;
        this.user.password = value.password;
        // console.log(value);
        // console.log(this.user);
        this._userService.registerUser(this.user).subscribe(function (data) {
            _this._chatService.overlay.emit(false);
            if (data.username) {
                _this._userService.setUser(data);
                localStorage.setItem("LoggedInUser", JSON.stringify(data));
                _this._route.navigate(["contacts"]);
            }
            else {
                _this.status = data.status;
            }
        }, function (err) {
            _this._chatService.overlay.emit(false);
            // console.log(err);
        });
    };
    RegisterComponent.prototype.routeTo = function () {
        this._route.navigate(["home/login"]);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]])
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
        this.overlay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //overlay show/hide variable
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function UserService(http, _route) {
        this.http = http;
        this._route = _route;
    }
    //login user
    UserService.prototype.loginUser = function (user) {
        return this.http.post("/user/login", user);
    };
    //register new user
    UserService.prototype.registerUser = function (user) {
        return this.http.post("/user/register", user);
    };
    //upload user profile pic
    UserService.prototype.updateProfilePic = function (userId, profilePicUrl) {
        return this.http.post("/user/profilePicupdate/" + userId, profilePicUrl);
    };
    UserService.prototype.getAllUser = function () {
        return this.http.get("/user/allusers");
    };
    // search users
    UserService.prototype.searchUsers = function (keyword) {
        return this.http.get("/user/getSearchUsers/" + keyword);
    };
    //add friend
    UserService.prototype.addFriend = function (userId, friendId) {
        return this.http.post("/user/addFriend/" + friendId, userId);
    };
    // confirm friend requests
    UserService.prototype.confirmRequest = function (userId, friendId) {
        return this.http.post("/user/confirmRequest/" + userId, friendId);
    };
    // delete friend request
    UserService.prototype.deleteRequest = function (userId, friendId) {
        return this.http.post("/user/deleteRequest/" + userId, friendId);
    };
    //set current global user
    UserService.prototype.setUser = function (user) {
        this.user = user;
        localStorage.setItem("LoggedInUser", JSON.stringify(this.user));
    };
    //get current global user
    UserService.prototype.getUser = function () {
        if (!this.user) {
            if (localStorage.getItem("LoggedInUser") === null) {
                this._route.navigate(["/"]);
            }
            else {
                this.setUser(JSON.parse(localStorage.getItem("LoggedInUser")));
                return this.user;
            }
        }
        else {
            return this.user;
        }
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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