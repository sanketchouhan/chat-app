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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { ReactiveFormsModule } from '@angular/forms';










var routes = [
    // { path: 'home',     component: HomeComponent },
    // { path: 'home/login',     component: LoginComponent },
    // { path: 'home/register',     component: RegisterComponent },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        children: [{ path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] }]
    },
    { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"] },
    // { path: 'contacts',  component: ContactsComponent, 
    //   children: [{ path: 'chatroom/:user',  component: ChatroomComponent },
    //               { path: 'chatroom',  component: ChatroomComponent }] },
    // { path: 'login',     component: LoginComponent },
    // { path: 'register',     component: },
    { path: 'chatroom', component: _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_9__["ChatroomComponent"] },
    // { path: 'chatroom/:user',     component: ChatroomComponent },
    { path: '', redirectTo: '/home/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/home/login' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"],
                _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_9__["ChatroomComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                // MatListModule,
                // MatTabsModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [
                _services_chat_service__WEBPACK_IMPORTED_MODULE_10__["ChatService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chatroom/chatroom.component.css":
/*!*************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatRoom{\r\n    height: 100%;\r\n    /* width: 100%; */\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.row{\r\n    height: 100%;\r\n    /* width: 100%; */\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.col-12{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.chatContent{\r\n    height: 100%;\r\n    width: 100%;\r\n    /* padding: 20px 0 20px 20px; */\r\n}\r\n\r\n.chatHeader{\r\n    display: flex;\r\n    align-items: center;\r\n    height: 4rem;\r\n    /* padding: .5rem 0; */\r\n}\r\n\r\n.chatHeader a{\r\n    margin: 0 2rem;\r\n    color: white;\r\n}\r\n\r\n/* .chatUserProfile{\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    border-radius:30px;\r\n} */\r\n\r\nimg{\r\n    height: 2.8rem;\r\n    width: 2.8rem;\r\n    border-radius: 50%;\r\n}\r\n\r\n.chatHead{\r\n    color: white;\r\n    padding: 0 1rem;\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.chatContainer{\r\n    width: 100%;\r\n    /* height: 84vh; */\r\n    height: calc(100% - 4rem);\r\n    padding: 1rem 1rem 0 1rem;\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n}\r\n\r\n.messageBox{\r\n    margin:0;\r\n    padding: 0 1rem 0 0;\r\n    height: calc(100vh - 10rem);\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n}\r\n\r\n.box{\r\n    margin: .2rem 0;\r\n    width: 100%;\r\n}\r\n\r\n.user2msg{\r\n    background: white;\r\n    border-radius: 10px;\r\n    border-top-left-radius: 0;\r\n    padding: .5rem .8rem;\r\n    max-width:80%; \r\n    color: black;\r\n    float: left;\r\n    clear: both;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.usermsg{\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n    border-radius: 10px;\r\n    border-top-right-radius: 0;\r\n    padding: .5rem .8rem;\r\n    max-width: 80%;\r\n    color: white;\r\n    float: right;\r\n    /* clear: both; */\r\n    word-wrap: break-word;\r\n    \r\n}\r\n\r\n.sending{\r\n    float: right;\r\n    margin-left: 15px; \r\n    margin-top: 3px;\r\n    display: flex;\r\n}\r\n\r\n.preloader-wrapper{\r\n    /* margin-left: 10px; */\r\n    \r\n    height: 18px;\r\n    width: 18px;\r\n}\r\n\r\n.chatBox{\r\n    height: 3rem;\r\n    padding: .5rem 0 0 0;\r\n    /* padding: .5rem .5rem 0 .5rem; */\r\n    display: flex;\r\n    align-items: inherit;\r\n    justify-content: space-between;\r\n}\r\n\r\n.input-field{\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\ntextarea{\r\n    width: 100%;\r\n    padding: .5rem 1rem;\r\n    margin: 0;\r\n    border-radius: 10px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    /* font-size: 16px; */\r\n    color: #fff;\r\n    border: none;\r\n    background-color: #495063;\r\n    resize: none;\r\n}\r\n\r\n.btn{\r\n    /* height: 2rem;\r\n    width: 2rem; */\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n    /* padding: 12px; */\r\n    border: none;\r\n    border-radius: 50%;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.btn:focus{\r\n    outline: none;\r\n}\r\n\r\ni{\r\n    font-size: 1rem;\r\n    color: #fff;\r\n}\r\n\r\n/* .chevron{\r\n    font-size: 40px;\r\n} */\r\n\r\na{\r\n    text-decoration: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.btn:focus, textarea:focus{\r\n    outline: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \r\n    border-radius: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \r\n}\r\n\r\n@media (max-width: 767px){\r\n    .chatContainer{\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px){\r\n    .chatRoom{\r\n        margin: 0 auto;\r\n    }\r\n    .col-12{\r\n        padding: 1rem;\r\n    }\r\n    .chatHeader a{\r\n        margin-left: 0;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.html":
/*!**************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatRoom container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"chatContent\">\r\n        <div class=\"chatHeader\">\r\n          <a routerLink=\"/contacts\"><i class=\"fas fa-chevron-left\"></i></a>\r\n            <img src={{chatuser.profilePicUrl}} alt=\"\">\r\n            <span class=\"chatHead\">{{chatuser.username}}</span>\r\n        </div>\r\n\r\n        <div class=\"chatContainer\">\r\n          <div class=\"chatBox\">\r\n            <!-- <div class=\"input-field\"> -->\r\n              <textarea rows=\"1\" [(ngModel)]=\"textMsg\" placeholder=\"Type your message here\"></textarea>\r\n            <!-- </div> -->\r\n            <!--(keyup)=\"do_resize(this.textMsg)\" -->\r\n            <button class=\"btn\" (click)=\"onSubmit()\"><i class=\"fas fa-location-arrow\"></i></button>\r\n          </div>\r\n          <div class=\"messageBox\">\r\n            <div class=\"box\" *ngFor=\"let message of messages\">\r\n              <div class=\"usermsg\" *ngIf=\"message.user=='user1'; else elseBlock\">\r\n                {{message.msg}}\r\n                <div class=\"sending\" *ngIf=\"sending\">\r\n                  <div class=\"preloader-wrapper small active\">\r\n                    <div class=\"spinner-layer spinner-blue-only\">\r\n                      <div class=\"circle-clipper left\">\r\n                        <div class=\"circle\"></div>\r\n                      </div>\r\n                      <div class=\"gap-patch\">\r\n                        <div class=\"circle\"></div>\r\n                      </div>\r\n                      <div class=\"circle-clipper right\">\r\n                        <div class=\"circle\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <ng-template #elseBlock>\r\n                <div class=\"user2msg\">\r\n                  {{message.msg}}\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"col-lg-1\"></div> -->\r\n  </div>\r\n</div>"

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
        this._chatService.chatroomUser.subscribe(function (data) {
            _this.chatuser = data;
            _this.chatRoomName = _this.user._id > _this.chatuser._id ? _this.user._id + "." + _this.chatuser._id : _this.chatuser._id + "." + _this.user._id;
            console.log(_this.chatRoomName);
            _this.socket.emit("joinPC", { room: _this.chatRoomName });
            // console.log(this.chatuser);
        });
        this.user = this._userService.getUser();
        this.chatuser = this._chatService.getChatUser();
        console.log("initialize");
        this.chatRoomName = this.user._id > this.chatuser._id ? this.user._id + "." + this.chatuser._id : this.chatuser._id + "." + this.user._id;
        // this.user = this.userService.getUser().username;
        // var socketOnInit = this.socket;
        this.socket.on('connect', function () {
            console.log("connection made");
            _this.socket.emit("joinPC", { room: _this.chatRoomName });
        });
        this.socket.on('chatMsg', function (data) {
            // console.log(data);
            if (data.sender != _this.user._id) {
                _this.messages.unshift({
                    "user": "user2",
                    "msg": data.chatMsg
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
                text: this.textMsg,
                room: this.chatRoomName,
                sender: this.user._id,
                receiver: this.chatuser._id
            });
            this.messages.unshift({
                "user": "user1",
                "msg": this.textMsg
            });
            this.textMsg = "";
            this._chatService.sendText(this.chatRoomName, { "sender": this.user._id, "messageBody": this.textMsg }).subscribe(function (data) {
            });
            // this.do_resize($('#textMsg'));
        }
    };
    ChatroomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! ./chatroom.component.html */ "./src/app/chatroom/chatroom.component.html"),
            styles: [__webpack_require__(/*! ./chatroom.component.css */ "./src/app/chatroom/chatroom.component.css")]
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    height: 100vh;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.row{\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100vh;\r\n}\r\n.col{\r\n    padding: 1rem;\r\n    height: 100vh;\r\n}\r\n.contactsContent{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.contactsHeader{\r\n    /* padding:0 20px 0 0; */\r\n}\r\n.contactsHead{\r\n    color: white;\r\n    /* padding: 5px 0px; */\r\n    font-size: 1.5rem;\r\n}\r\n.search{\r\n    float: right;\r\n    /* position: absolute; */\r\n    margin: 4px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    padding: 5px 10px;\r\n    border: none;\r\n    border-radius: 50px;\r\n    font-size: 18px;\r\n    width: 0;\r\n}\r\n.btn{\r\n    float: right;\r\n    /* position: absolute; */\r\n    background: #9c5aec;\r\n    /* padding: 10px; */\r\n    height: 40px;\r\n    width: 40px;\r\n    line-height: 15px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    z-index: 9;\r\n}\r\ni{\r\n    color: #fff;\r\n    font-size: 20px;\r\n}\r\n.btn:focus, .search:focus, .list-group-item:focus{\r\n    outline: none;\r\n}\r\n.contactList{\r\n    height: calc(100% - 2rem);\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n.contact-collection{\r\n    padding-top: 1rem;\r\n    margin: 0;\r\n    border: none;\r\n}\r\n.contact-item{\r\n    /* background: transparent; */\r\n    padding: .7rem 0;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    border-bottom: 1px solid rgba(100, 100, 100, 0.5);\r\n}\r\n.img{\r\n    width: 2.8rem;\r\n    border-radius: 50%;\r\n}\r\nimg{\r\n    border-radius: 50%;\r\n    z-index: -1;\r\n}\r\n.online{\r\n    color: #fff;\r\n}\r\n/* img{\r\n    height: 55px;\r\n    width: 55px;\r\n    border-radius: 50%;\r\n} */\r\n.contactsName{\r\n    font-size: 1.1rem;\r\n    padding: .5rem 1rem;\r\n    margin: 0;\r\n    color: white;\r\n    /* width: 95%; */\r\n    /* border-top-left-radius: 15px;\r\n    border-bottom-left-radius: 15px; */\r\n    /* float: right; */\r\n    /* width: 100%; */\r\n}\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); \r\n    border-radius: 5px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.8); \r\n}\r\n.contact-chatroom{\r\n    background-color: #242a38;\r\n}\r\n@media screen and (max-width: 576px) {\r\n    .contact-chatroom {\r\n      display: none;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-12 col-sm-6 col-md-5 col-lg-4\">\r\n      <div class=\"contactsContent\">\r\n        <div class=\"contactsHeader\">\r\n          <span class=\"contactsHead\">Contacts</span>\r\n          <!-- <input type=\"text\" name=\"search\" placeholder=\"Search\" class=\"search\" id=\"search\"> -->\r\n          <!-- <button onclick=\"search()\" class=\"btn\"><i class=\"fas fa-search\"></i></button> -->\r\n        </div>\r\n        <div class=\"contactList\">\r\n          <ul class=\"contact-collection\">\r\n            <li class=\"contact-item\" *ngFor=\"let contact of contacts\" (click)=\"onClick(contact)\">\r\n              <div class=\"img\" (click)=\"openImgBox(contact.pic)\"><img src={{contact.profilePicUrl}} class=\"img-fluid\">\r\n              </div>\r\n              <p class=\"contactsName\" >{{contact.username}}</p>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col contact-chatroom\">\r\n      <app-chatroom></app-chatroom>\r\n    </div>\r\n  </div>\r\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { $ } from 'protractor';



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(_route, _userService, _chatService) {
        this._route = _route;
        this._userService = _userService;
        this._chatService = _chatService;
        this.contacts = [];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        // this.user = this._userService.getUser();
        // console.log(JSON.parse(localStorage.getItem("isLoggedIn")));
        // this.contacts = this._userService.getUser().friends;
        var _this = this;
        // this.contacts = this._chatService.getContacts(this.user.username);
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
        // else {
        //   // this._route.navigate(["contacts/chatroom"], { queryParams: contact });
        //   this._route.navigate(["contacts/chatroom"]);
        // }
    };
    ContactsComponent.prototype.openImgBox = function (contactPic) {
        console.log(contactPic);
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bodycontent{\r\n    width: 100%;\r\n    height: 100vh;\r\n    padding: 0;\r\n    margin: 0;\r\n    background: url('bg1.jpg') center center;\r\n    background-size: cover;\r\n}\r\n.col-md-6{\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n.row{\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n@media (max-width: 576px){\r\n    .home-bg-div{\r\n        display: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bodycontent container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-md-6 col-lg-7 home-bg-div\">\r\n\r\n    </div>\r\n    <div class=\"col-sm-8 col-md-6 col-lg-5\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

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
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box{\r\n    background: #20242f91;\r\n    padding: 3rem 2rem 1rem 2rem;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\n\r\ninput{\r\n    margin: .5rem 0;\r\n    padding: .5rem 1rem;\r\n    width: 100%;\r\n    color: white;\r\n    background-color: #49506371;\r\n    border: none;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n}\r\n\r\ninput:focus{\r\n    outline: none;\r\n}\r\n\r\n.btn{\r\n    width: 100%;\r\n    padding: .5rem;\r\n    text-align: center;\r\n    border: none;\r\n    margin: .5rem 0;\r\n    border-radius: 20px;\r\n    color: #fff;\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n\r\n}\r\n\r\np{\r\n    margin-top: 2rem;\r\n    color: #fff;\r\n    font-size: .8rem;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n\r\n<p *ngIf=\"status\">{{status}}</p>\r\n    <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" id=\"username\" autocomplete=\"off\" required>\r\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\" id=\"password\" required>\r\n    <button type=\"submit\" (click)=\"login()\" class=\"btn\">Login <i class=\"fas fa-sign-in-alt\"></i></button>\r\n    <!-- <a class=\"btn waves-effect waves-light\" (click)=\"login()\" >Login\r\n        <i class=\"material-icons\">exit_to_app</i>\r\n    </a> -->\r\n  <!-- </div> -->\r\n  <!-- </form> -->\r\n  \r\n  <p><a (click)=\"routeTo()\">New user? Create Account</a></p>\r\n</div>"

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
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box{\r\n    background: #20242f91;\r\n    padding: 3rem 2rem 1rem 2rem;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\ninput{\r\n    margin: .5rem 0;\r\n    padding: .5rem 1rem;\r\n    width: 100%;\r\n    color: white;\r\n    background-color: #49506371;\r\n    border: none;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n}\r\ninput:focus{\r\n    outline: none;\r\n}\r\nbutton:disabled,\r\nbutton[disabled]{\r\n    cursor: not-allowed;\r\n}\r\n.btn{\r\n    width: 100%;\r\n    padding: .5rem;\r\n    text-align: center;\r\n    border: none;\r\n    margin: .5rem 0;\r\n    border-radius: 20px;\r\n    color: #fff;\r\n    background-image: linear-gradient(to right bottom, #f54b64, #f75b61, #f76960, #f77660, #f78361);\r\n\r\n}\r\np{\r\n    margin-top: 2rem;\r\n    color: #fff;\r\n    font-size: .8rem;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n\r\n  <p *ngIf=\"status\">{{status}}</p>\r\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\">\r\n\r\n    <input type=\"text\" formControlName=\"username\" id=\"username\" placeholder=\"Username\" autocomplete=\"off\" required\r\n      maxlength=\"20\">\r\n\r\n    <input type=\"password\" formControlName=\"password\" id=\"password\" placeholder=\"Password\" required maxlength=\"20\">\r\n\r\n    <input type=\"password\" formControlName=\"confirmpassword\" id=\"confirmpassword\" placeholder=\"ConfirmPassword\" required\r\n      maxlength=\"20\">\r\n\r\n    <button type=\"submit\" [disabled]=\"!registerForm.valid\" class=\"btn\">Register <i class=\"material-icons\"></i></button>\r\n  </form>\r\n\r\n  <p><a (click)=\"routeTo()\">Already have an account? Sign in</a></p>\r\n\r\n</div>"

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
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
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
    UserService.prototype.getAllUser = function () {
        return this.http.get("/user/allusers");
    };
    UserService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
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
var environment = {
    production: false
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