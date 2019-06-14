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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _compra_compra_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compra/compra.component */ "./src/app/compra/compra.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





var routes = [
    {
        path: 'compra',
        component: _compra_compra_component__WEBPACK_IMPORTED_MODULE_3__["CompraComponent"]
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0px; }\n\n.body {\n  background: #ebebeb;\n  font-family: Arial;\n  margin: 0px; }\n\n.form-container {\n  margin-top: 5px; }\n\n.app {\n  height: 100vh;\n  background: transparent; }\n\n.router-content {\n  max-width: 1100px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 10px;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.button-row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  margin-top: 5px; }\n\n.mat-sidenav-icon {\n  margin-right: 25px; }\n\n.normal {\n  margin: 0px; }\n\n.mat-nav-list {\n  padding-top: 0px; }\n\n.mat-sidenav {\n  background: transparent; }\n\n.mat-sidenav-container {\n  background: transparent; }\n\n.mat-table::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background-color: #FFCDD2; }\n\n.mat-table::-webkit-scrollbar-thumb {\n  background: #E53935; }\n\n.mat-list::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background-color: #FFCDD2; }\n\n.mat-list::-webkit-scrollbar-thumb {\n  background: #E53935; }\n\n.mat-sidenav-content::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background-color: #FFCDD2; }\n\n.mat-sidenav-content::-webkit-scrollbar-thumb {\n  background: #E53935; }\n\n.mat-autocomplete-panel::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background-color: #FFCDD2; }\n\n.mat-autocomplete-panel::-webkit-scrollbar-thumb {\n  background: #E53935; }\n\n.featurebar-title {\n  color: #fff;\n  font-size: 26px;\n  font-weight: 500;\n  line-height: 32px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.mat-icon-button.small {\n  width: 32px;\n  height: 32px;\n  line-height: 32px; }\n\n.mat-icon-button.small .mat-icon, .mat-icon-button.small .mat-icon-button i {\n    line-height: 16px; }\n\n.mat-icon-button.small .mat-icon {\n    width: 16px;\n    height: 16px; }\n\n.mat-icon-button.small .material-icons {\n    font-size: 16px; }\n\n.mat-button.filial {\n  background: rgba(0, 0, 0, 0.2);\n  color: #EEEEEE; }\n\n.font-18 {\n  font-size: 18px;\n  height: 18px;\n  width: 18px; }\n\n.mat-icon {\n  margin-right: 0px !important; }\n\n.mat-card-fit {\n  padding: 0px !important; }\n\n.mat-toolbar-row {\n  height: 48px; }\n\n.mat-toolbar-multiple-rows {\n  min-height: 48px; }\n\n.p6n-action-bar-title {\n  font-weight: 400;\n  letter-spacing: .005em;\n  font-size: 18px;\n  line-height: 20px;\n  margin-left: 8px; }\n\n.mat-button-float {\n  position: fixed;\n  right: 16px;\n  bottom: 16px; }\n\n.mat-form-field-infix {\n  width: unset !important; }\n\n.mat-drawer-sidenav {\n  background-color: #fff;\n  width: 300px; }\n\n.mat-sidenav-item {\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 17px;\n  font-weight: 500;\n  letter-spacing: 0.5px; }\n\n.mat-sidenav-item-selected {\n  color: #3367d6;\n  background-color: #3367d624;\n  border-right-style: solid;\n  font-size: 17px;\n  font-weight: 500;\n  letter-spacing: 0.5px; }\n\n.footer {\n  background-color: #212121; }\n\n.footer-nome-empresa {\n  color: white;\n  font-size: 30px; }\n\n.titulo-section {\n  color: #212121;\n  font-size: 40px;\n  font-family: \"Raleway\";\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXEdpdFxcbWFyYmEtdHJhdmVsL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL0M6XFxHaXRcXG1hcmJhLXRyYXZlbC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUdaO0VBQ0ksbUJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBQ2Q7RUFDRyxlQUFlLEVBQUE7O0FBQ2xCO0VBQ0csYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUMxQjtFQUNHLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBQ3JCO0VBQ0csV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFDbEI7RUFDRyxrQkFBa0IsRUFBQTs7QUFDckI7RUFDRyxXQUFXLEVBQUE7O0FBQ2Q7RUFDRyxnQkFBZ0IsRUFBQTs7QUFDbkI7RUFDRyx1QkFBdUIsRUFBQTs7QUFDMUI7RUFDRyx1QkFBdUIsRUFBQTs7QUFDMUI7RUFDRyxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUM1QjtFQUNHLG1CQUFtQixFQUFBOztBQUN0QjtFQUNHLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBQzVCO0VBQ0csbUJBQW1CLEVBQUE7O0FBQ3RCO0VBQ0csVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFDNUI7RUFDRyxtQkFBbUIsRUFBQTs7QUFDdEI7RUFDRyxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUM1QjtFQUNHLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQU92QjtFQUNFLFdBSmdDO0VBS2hDLFlBTGdDO0VBTWhDLGlCQU5nQyxFQUFBOztBQUdsQztJQU1JLGlCQVJrQixFQUFBOztBQUV0QjtJQVVJLFdBWmtCO0lBYWxCLFlBYmtCLEVBQUE7O0FBRXRCO0lBZUksZUFqQmtCLEVBQUE7O0FBdUJ0QjtFQUNJLDhCQUFnQztFQUNoQyxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSw0QkFBNEIsRUFBQTs7QUFFaEM7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHVCQUF1QixFQUFBOztBQ3ZJOUI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsMEJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsY0FBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNJLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjogMHB4OyAgIFxyXG4gICB9XHJcbiAgIFxyXG4gICAuYm9keXtcclxuICAgICAgIGJhY2tncm91bmQ6IHJnYigyMzUsIDIzNSwgMjM1KTtcclxuICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICB9LmZvcm0tY29udGFpbmVye1xyXG4gICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICB9LmFwcHtcclxuICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgfS5yb3V0ZXItY29udGVudHtcclxuICAgICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICB9LmJ1dHRvbi1yb3d7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgIH0ubWF0LXNpZGVuYXYtaWNvbntcclxuICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgfS5ub3JtYWx7XHJcbiAgICAgICBtYXJnaW46IDBweDtcclxuICAgfS5tYXQtbmF2LWxpc3Qge1xyXG4gICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgfS5tYXQtc2lkZW5hdiB7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgfS5tYXQtc2lkZW5hdi1jb250YWluZXJ7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgfS5tYXQtdGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0REMjtcclxuICAgfS5tYXQtdGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgIGJhY2tncm91bmQ6ICNFNTM5MzU7IFxyXG4gICB9Lm1hdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDREQyO1xyXG4gICB9Lm1hdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAjRTUzOTM1OyBcclxuICAgfS5tYXQtc2lkZW5hdi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDREQyO1xyXG4gICB9Lm1hdC1zaWRlbmF2LWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xyXG4gICAgICAgYmFja2dyb3VuZDogI0U1MzkzNTsgXHJcbiAgIH0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0REMjtcclxuICAgfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcclxuICAgICAgIGJhY2tncm91bmQ6ICNFNTM5MzU7IFxyXG4gICB9XHJcbiAgIC5mZWF0dXJlYmFyLXRpdGxlIHtcclxuICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgIFxyXG4gICAgIH1cclxuICAgXHJcbiAgICAgJGljb24tc21hbGwtY29udGFpbmVyLXNpemU6IDMycHg7XHJcbiAgICRpY29uLXNtYWxsLXNpemU6IDE2cHg7XHJcbiAgIFxyXG4gICAubWF0LWljb24tYnV0dG9uLnNtYWxsIHtcclxuICAgICB3aWR0aDogJGljb24tc21hbGwtY29udGFpbmVyLXNpemU7XHJcbiAgICAgaGVpZ2h0OiAkaWNvbi1zbWFsbC1jb250YWluZXItc2l6ZTtcclxuICAgICBsaW5lLWhlaWdodDogJGljb24tc21hbGwtY29udGFpbmVyLXNpemU7XHJcbiAgIFxyXG4gICAgIC5tYXQtaWNvbiwgLm1hdC1pY29uLWJ1dHRvbiBpIHtcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAkaWNvbi1zbWFsbC1zaXplO1xyXG4gICAgIH1cclxuICAgXHJcbiAgICAgLm1hdC1pY29uIHtcclxuICAgICAgIHdpZHRoOiAkaWNvbi1zbWFsbC1zaXplO1xyXG4gICAgICAgaGVpZ2h0OiAkaWNvbi1zbWFsbC1zaXplO1xyXG4gICAgIH1cclxuICAgXHJcbiAgICAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgIGZvbnQtc2l6ZTogJGljb24tc21hbGwtc2l6ZTtcclxuICAgICB9XHJcbiAgIFxyXG4gICBcclxuICAgfVxyXG4gICBcclxuICAgLm1hdC1idXR0b24uZmlsaWFsIHtcclxuICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMik7XHJcbiAgICAgICBjb2xvcjogI0VFRUVFRTtcclxuICAgfVxyXG4gICBcclxuICAgLmZvbnQtMTgge1xyXG4gICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgaGVpZ2h0OiAxOHB4OyBcclxuICAgICAgIHdpZHRoOiAxOHB4OyBcclxuICAgfVxyXG4gICBcclxuICAgLm1hdC1pY29ue1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAubWF0LWNhcmQtZml0e1xyXG4gICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5tYXQtdG9vbGJhci1yb3d7XHJcbiAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5tYXQtdG9vbGJhci1tdWx0aXBsZS1yb3dzIHtcclxuICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5wNm4tYWN0aW9uLWJhci10aXRsZSB7XHJcbiAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgbGV0dGVyLXNwYWNpbmc6IC4wMDVlbTtcclxuICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgfVxyXG4gICBcclxuICAgLm1hdC1idXR0b24tZmxvYXR7XHJcbiAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgICAgcmlnaHQ6IDE2cHg7IFxyXG4gICAgICAgYm90dG9tOiAxNnB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgIH0iLCJAaW1wb3J0ICcuLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4ubWF0LWRyYXdlci1zaWRlbmF2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYtaXRlbXtcclxuICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuODUpO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLm1hdC1zaWRlbmF2LWl0ZW0tc2VsZWN0ZWR7XHJcbiAgY29sb3I6cmdiKDUxLCAxMDMsIDIxNCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNjdkNjI0O1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuXHJcbn1cclxuXHJcbi5mb290ZXItbm9tZS1lbXByZXNhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4udGl0dWxvLXNlY3Rpb257XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcclxuICAgIG1hcmdpbjogMTBweDtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'marba-trabel-portal';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _compra_compra_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compra/compra.module */ "./src/app/compra/compra.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _compra_compra_module__WEBPACK_IMPORTED_MODULE_8__["CompraModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/compra/compra.component.html":
/*!**********************************************!*\
  !*** ./src/app/compra/compra.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" style=\"background-color: lightgray\">\n  <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n    <mat-toolbar-row fxLayout=\"row\" fxFlex fxLayoutAlign=\"space-between center\" style=\"color: white\">\n      <a mat-button [routerLink]=\"['/']\">\n        Marba\n        <mat-icon>flight_takeoff</mat-icon>\n      </a>\n\n      <div fxLayout=\"row\">\n        <button mat-button>\n          <mat-icon>local_offer</mat-icon>\n          Ofertas\n        </button>\n        <button mat-button>\n          <mat-icon>flight</mat-icon>\n          Pacotes\n        </button>\n      </div>\n      <div fxLayout=\"row\">\n        <button mat-icon-button>\n          <mat-icon>help</mat-icon>\n        </button>\n        <button mat-icon-button>\n          <mat-icon>shopping_cart</mat-icon>\n        </button>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <ng-template matStepLabel>Lugar</ng-template>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n        <div fxFlex=\"95\" fxLayout=\"row\" fxLayoutAlign=\"space-around start\" fxLayoutGap=\"10px\">\n          <mat-card fxFlex=\"35\" fxLayou=\"row\">\n            <div fxLayout=\"column\">\n              <div fxFlex fxLayoutAlign=\"start center\">\n                <span class=\"titulo-section\">Ofertas</span>\n              </div>\n              <form fxLayout=\"column\" [formGroup]=\"formulario\">\n                <div fxFlex fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <mat-form-field fxFlex>\n                    <input matInput [matDatepicker]=\"dataIda\" placeholder=\"Data ida\" formControlName=\"dataIda\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dataIda\"></mat-datepicker-toggle>\n                    <mat-datepicker #dataIda></mat-datepicker>\n                  </mat-form-field>\n                  <mat-form-field fxFlex>\n                    <input matInput [matDatepicker]=\"dataVolta\" placeholder=\"Data volta\" formControlName=\"dataVolta\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dataVolta\"></mat-datepicker-toggle>\n                    <mat-datepicker #dataVolta></mat-datepicker>\n                  </mat-form-field>\n                </div>\n                <mat-form-field>\n                  <input matInput placeholder=\"Quantidade pessoas\" type=\"number\" formControlName=\"dataVolta\">\n                </mat-form-field>\n              </form>\n            </div>\n          </mat-card>\n          <mat-card fxFlex>\n            <mat-card-header>\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title>Berlim</mat-card-title>\n              <mat-card-subtitle>Imperdível</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image\n              src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNzgEPqgVEX8mMGmUmQYLYHiV9xk2cVsNHSwGbXGkTOYy9U_D\"\n              alt=\"Nova York 58% OFF\">\n            <mat-card-content>\n              <p>\n                Berlim é a capital e um dos dezesseis estados da Alemanha. Com uma população de 3,5 milhões dentro de\n                limites da cidade, é a maior cidade do país, e a sétima área urbana mais povoada da União Europeia.\n              </p>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </div>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\">\n      <ng-template matStepLabel>Quarto</ng-template>\n      <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n        <div fxFlex=\"95\" fxLayout=\"row\" fxLayoutAlign=\"space-around start\" fxLayoutGap=\"10px\">\n          <mat-card fxFlex fxLayoutGap=\"10px\">\n            <img mat-card-image src=\"http://static1.eskypartners.com/travelguide/hotel.jpg\" alt=\"Nova York 58% OFF\">\n            <img mat-card-image\n              src=\"https://st3.depositphotos.com/3386033/12540/i/950/depositphotos_125404176-stock-photo-interior-of-a-hotel-bathroom.jpg\"\n              alt=\"Nova York 58% OFF\">\n\n          </mat-card>\n          <div fxLayout=\"column\" fxFlex=\"35\" fxLayoutGap=\"10px\">\n            <mat-card fxLayou=\"row\">\n              <div fxLayout=\"column\">\n                <mat-list>\n                  <mat-list-item>\n                    <mat-icon mat-list-icon>ac_unit</mat-icon>\n                    <h4 mat-line>Ar condicionado</h4>\n                  </mat-list-item>\n                  <mat-divider></mat-divider>\n                  <mat-list-item>\n                    <mat-icon mat-list-icon>wifi</mat-icon>\n                    <h4 mat-line>Wi-Fi</h4>\n                  </mat-list-item>\n                  <mat-divider></mat-divider>\n                  <mat-list-item>\n                    <mat-icon mat-list-icon>local_dining</mat-icon>\n                    <h4 mat-line>Café da manhã</h4>\n                  </mat-list-item>\n\n                </mat-list>\n\n              </div>\n            </mat-card>\n            <mat-card fxFlex=\"35\" fxLayou=\"row\">\n              <div fxLayout=\"column\">\n                <mat-list>\n                  <mat-list-item>\n                    <h4 mat-line>Ambiente</h4>\n                    <mat-progress-bar [color]=\"accent\" [mode]=\"determinate\" [value]=\"85\" [bufferValue]=\"100\">\n                    </mat-progress-bar>\n                  </mat-list-item>\n                  <mat-divider></mat-divider>\n                  <mat-list-item>\n                    <h4 mat-line>Serviço</h4>\n                    <mat-progress-bar [color]=\"accent\" [mode]=\"determinate\" [value]=\"40\" [bufferValue]=\"100\">\n                    </mat-progress-bar>\n                  </mat-list-item>\n                  <mat-divider></mat-divider>\n\n                  <mat-list-item>\n                    <h4 mat-line>Conforto</h4>\n                    <mat-progress-bar [color]=\"accent\" [mode]=\"determinate\" [value]=\"70\" [bufferValue]=\"100\">\n                    </mat-progress-bar>\n                  </mat-list-item>\n                  <mat-divider></mat-divider>\n\n                  <mat-list-item>\n                    <h4 mat-line>Limpeza</h4>\n                    <mat-progress-bar [color]=\"accent\" [mode]=\"determinate\" [value]=\"85\" [bufferValue]=\"100\">\n                    </mat-progress-bar>\n                  </mat-list-item>\n                  <mat-divider></mat-divider>\n\n                </mat-list>\n\n              </div>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Voo</ng-template>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n        <div fxFlex=\"95\" fxLayout=\"row\" fxLayoutAlign=\"space-around start\" fxLayoutGap=\"10px\">\n          <mat-card fxFlex=\"35\" fxLayou=\"row\">\n            <div fxLayout=\"column\">\n              <div fxFlex fxLayoutAlign=\"start center\">\n                <span class=\"titulo-section\">Ofertas</span>\n              </div>\n              <form fxLayout=\"column\" [formGroup]=\"formulario\">\n                <div fxFlex fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <mat-form-field fxFlex>\n                    <input matInput [matDatepicker]=\"dataIda2\" placeholder=\"Data ida\" formControlName=\"dataIda\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dataIda2\"></mat-datepicker-toggle>\n                    <mat-datepicker #dataIda2></mat-datepicker>\n                  </mat-form-field>\n                  <mat-form-field fxFlex>\n                    <input matInput [matDatepicker]=\"dataVolta2\" placeholder=\"Data volta\" formControlName=\"dataVolta\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dataVolta2\"></mat-datepicker-toggle>\n                    <mat-datepicker #dataVolta2></mat-datepicker>\n                  </mat-form-field>\n                </div>\n                <mat-form-field>\n                  <input matInput placeholder=\"Quantidade pessoas\" type=\"number\" formControlName=\"dataVolta\">\n                </mat-form-field>\n              </form>\n            </div>\n          </mat-card>\n          <div fxLayout=\"column\" fxLayoutGap=\"10px\" fxFlex>\n            <mat-card>\n              <span>Promoções quentes</span>\n              <mat-selection-list>\n                <mat-list-option *ngFor=\"let voo of voosImperdiveis\">\n                  <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\n                    <mat-icon>airplanemode_active</mat-icon>\n                    <span>{{voo.companhia}}</span>\n                    <span>{{voo.aeroportoIda}}</span>\n                    <span>{{voo.saida}}</span>\n                    <span>{{voo.horarioIda}}</span>\n                    <span>{{voo.horarioChegada}}</span>\n                    <span>{{voo.aeroportoVolta}}</span>\n                  </div>\n\n                </mat-list-option>\n              </mat-selection-list>\n            </mat-card>\n            <mat-card>\n              <span>Outras ofertas</span>\n              <mat-selection-list>\n                <mat-list-option *ngFor=\"let voo of voos\">\n                  <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\n                    <mat-icon>airplanemode_active</mat-icon>\n                    <span>{{voo.companhia}}</span>\n                    <span>{{voo.aeroportoIda}}</span>\n                    <span>{{voo.saida}}</span>\n                    <span>{{voo.horarioIda}}</span>\n                    <span>{{voo.horarioChegada}}</span>\n                    <span>{{voo.aeroportoVolta}}</span>\n                  </div>\n                </mat-list-option>\n              </mat-selection-list>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </mat-step>\n    <mat-step>\n        <ng-template matStepLabel>Pagamento</ng-template>\n          <!--Tipo do botão-->\n          <input type=\"hidden\" name=\"cmd\" value=\"_xclick\" />\n       \n          <!--Vendedor e URL de retorno, cancelamento e notificação-->\n          <input type=\"hidden\" name=\"business\" value=\"vendedor@loja.com.br\" />\n          <input type=\"hidden\" name=\"return\" value=\"http://loja.com.br/retorno\" />\n          <input type=\"hidden\" name=\"cancel\" value=\"http://loja.com.br/cancelamento\" />\n          <input type=\"hidden\" name=\"notify_url\" value=\"http://loja.com.br/notificacao\" />\n       \n          <!--Internacionalização e localização da página de pagamento-->\n          <input type=\"hidden\" name=\"charset\" value=\"utf-8\" />\n          <input type=\"hidden\" name=\"lc\" value=\"BR\" />\n          <input type=\"hidden\" name=\"country_code\" value=\"BR\" />\n          <input type=\"hidden\" name=\"currency_code\" value=\"BRL\" />\n       \n          <!--Informações sobre o produto e seu valor-->\n          <input type=\"hidden\" name=\"amount\" value=\"172.00\" />\n          <input type=\"hidden\" name=\"item_name\" value=\"Servico\" />\n          <input type=\"hidden\" name=\"quantity\" value=\"1\" />\n       \n          <!--Botão para submissão do formulário-->\n          <input type=\"image\" src=\"https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_buynowCC_LG.gif\" border=\"0\" />\n      </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Pronto!</ng-template>\n\n    </mat-step>\n  </mat-horizontal-stepper>\n</div>"

/***/ }),

/***/ "./src/app/compra/compra.component.scss":
/*!**********************************************!*\
  !*** ./src/app/compra/compra.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXByYS9jb21wcmEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/compra/compra.component.ts":
/*!********************************************!*\
  !*** ./src/app/compra/compra.component.ts ***!
  \********************************************/
/*! exports provided: CompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraComponent", function() { return CompraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CompraComponent = /** @class */ (function () {
    function CompraComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.voos = [];
        this.voosImperdiveis = [];
        this.formulario = this.formBuilder.group({
            dataIda: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dataVolta: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.voosImperdiveis.push({ companhia: "Gol", aeroportoIda: "Vix", saida: "01/07/2019", horarioIda: "9:00", horarioChegada: "23:00", aeroportoVolta: "Berlim" });
        this.voosImperdiveis.push({ companhia: "Azul", aeroportoIda: "Vix", saida: "05/07/2019", horarioIda: "8:40", horarioChegada: "23:00", aeroportoVolta: "Amsterdam" });
        this.voosImperdiveis.push({ companhia: "Azul", aeroportoIda: "Vix", saida: "23/07/2019", horarioIda: "9:30", horarioChegada: "23:00", aeroportoVolta: "Paises Baixos" });
        this.voos.push({ companhia: "Gol", aeroportoIda: "Vix", saida: "01/07/2019", horarioIda: "1:43", horarioChegada: "23:00", aeroportoVolta: "Berlim" });
        this.voos.push({ companhia: "Azul", aeroportoIda: "Vix", saida: "06/07/2019", horarioIda: "23:00", horarioChegada: "12:00", aeroportoVolta: "Amsterdam" });
        this.voos.push({ companhia: "Azul", aeroportoIda: "Vix", saida: "06/08/2019", horarioIda: "16:00", horarioChegada: "18:00", aeroportoVolta: "Berlim" });
        this.voos.push({ companhia: "Gol", aeroportoIda: "Vix", saida: "13/07/2019", horarioIda: "19:00", horarioChegada: "11:00", aeroportoVolta: "Berlim" });
        this.voos.push({ companhia: "Gol", aeroportoIda: "Vix", saida: "25/08/2019", horarioIda: "16:00", horarioChegada: "09:00", aeroportoVolta: "Berlim" });
        this.voos.push({ companhia: "Tam", aeroportoIda: "Vix", saida: "06/09/2019", horarioIda: "19:00", horarioChegada: "07:00", aeroportoVolta: "Berlim" });
        this.voos.push({ companhia: "Tam", aeroportoIda: "Vix", saida: "09/12/2019", horarioIda: "20:00", horarioChegada: "23:00", aeroportoVolta: "Berlim" });
    }
    CompraComponent.prototype.ngOnInit = function () {
    };
    CompraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compra',
            template: __webpack_require__(/*! ./compra.component.html */ "./src/app/compra/compra.component.html"),
            styles: [__webpack_require__(/*! ./compra.component.scss */ "./src/app/compra/compra.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CompraComponent);
    return CompraComponent;
}());



/***/ }),

/***/ "./src/app/compra/compra.module.ts":
/*!*****************************************!*\
  !*** ./src/app/compra/compra.module.ts ***!
  \*****************************************/
/*! exports provided: CompraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraModule", function() { return CompraModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _compra_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compra.component */ "./src/app/compra/compra.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _compra_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compra.routing */ "./src/app/compra/compra.routing.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var CompraModule = /** @class */ (function () {
    function CompraModule() {
    }
    CompraModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_compra_component__WEBPACK_IMPORTED_MODULE_3__["CompraComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _compra_routing__WEBPACK_IMPORTED_MODULE_5__["CompraRouting"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
            ]
        })
    ], CompraModule);
    return CompraModule;
}());



/***/ }),

/***/ "./src/app/compra/compra.routing.ts":
/*!******************************************!*\
  !*** ./src/app/compra/compra.routing.ts ***!
  \******************************************/
/*! exports provided: CompraRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraRouting", function() { return CompraRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

//Resolver
var compraRoutes = [];
var CompraRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(compraRoutes);


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"10px\" style=\"background-color: lightgray\">\n    <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n        <mat-toolbar-row fxLayout=\"row\" fxFlex fxLayoutAlign=\"space-between center\" style=\"color: white\">\n            <button mat-button>\n                Marba\n                <mat-icon>flight_takeoff</mat-icon>\n            </button>\n\n            <div fxLayout=\"row\">\n                <a mat-button [routerLink]=\"['/compra']\">\n                    <mat-icon>local_offer</mat-icon>\n                    Ofertas\n                </a>\n                <button mat-button [routerLink]=\"['/compra']\">\n                    <mat-icon>flight</mat-icon>\n                    Pacotes\n                </button>\n            </div>\n            <div fxLayout=\"row\">\n                <button mat-icon-button>\n                    <mat-icon>help</mat-icon>\n                </button>\n                <button mat-icon-button [routerLink]=\"['/compra']\">\n                    <mat-icon>shopping_cart</mat-icon>\n                </button>\n            </div>\n        </mat-toolbar-row>\n    </mat-toolbar>\n    <div fxFlex fxLayoutAlign=\"start center\">\n        <span class=\"titulo-section\">Ofertas</span>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n        <div fxFlex=\"95\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"10px\">\n            <mat-card fxFlex>\n                <mat-card-header>\n                    <mat-card-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <span>Nova York</span>\n                        <mat-chip-list>\n                            <mat-chip color=\"primary\">58% OFF</mat-chip>\n                        </mat-chip-list>\n                    </mat-card-title>\n                    <mat-card-subtitle>58% OFF</mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image\n                    src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNzgEPqgVEX8mMGmUmQYLYHiV9xk2cVsNHSwGbXGkTOYy9U_D\"\n                    alt=\"Nova York 58% OFF\">\n                <mat-card-content>\n                    <p>\n                    </p>\n                </mat-card-content>\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <button mat-icon-button>\n                        <mat-icon>favorite_border</mat-icon>\n                    </button>\n                    <a [routerLink]=\"['/compra']\" routerLinkActive #rotaAtiva=\"routerLinkActive\" mat-raised-button color=\"accent\">Comprar</a>\n                </mat-card-actions>\n            </mat-card>\n            <mat-card fxFlex>\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"></div>\n                    <mat-card-title>Berlim</mat-card-title>\n                    <mat-card-subtitle>Imperdível</mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image\n                    src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNzgEPqgVEX8mMGmUmQYLYHiV9xk2cVsNHSwGbXGkTOYy9U_D\"\n                    alt=\"Nova York 58% OFF\">\n                <mat-card-content>\n                    <p>\n                    </p>\n                </mat-card-content>\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <button mat-icon-button>\n                        <mat-icon>favorite_border</mat-icon>\n                    </button>\n                    <a [routerLink]=\"['/compra']\" routerLinkActive #rotaAtiva=\"routerLinkActive\" mat-raised-button color=\"accent\">Comprar</a>\n                </mat-card-actions>\n            </mat-card>\n            <mat-card fxFlex>\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"></div>\n                    <mat-card-title>Austrália</mat-card-title>\n                    <mat-card-subtitle>-30% OFF</mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image\n                    src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNzgEPqgVEX8mMGmUmQYLYHiV9xk2cVsNHSwGbXGkTOYy9U_D\"\n                    alt=\"Nova York 58% OFF\">\n                <mat-card-content>\n                    <p>\n                    </p>\n                </mat-card-content>\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <button mat-icon-button>\n                        <mat-icon>favorite_border</mat-icon>\n                    </button>\n                    <a [routerLink]=\"['/compra']\" routerLinkActive #rotaAtiva=\"routerLinkActive\" mat-raised-button color=\"accent\">Comprar</a>\n                </mat-card-actions>\n            </mat-card>\n            <mat-card fxFlex>\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"></div>\n                    <mat-card-title>Chile</mat-card-title>\n                    <mat-card-subtitle>70% OFF</mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image\n                    src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNzgEPqgVEX8mMGmUmQYLYHiV9xk2cVsNHSwGbXGkTOYy9U_D\"\n                    alt=\"Nova York 58% OFF\">\n                <mat-card-content>\n                    <p>\n                    </p>\n                </mat-card-content>\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <button mat-icon-button>\n                        <mat-icon>favorite_border</mat-icon>\n                    </button>\n                    <a [routerLink]=\"['/compra']\" routerLinkActive #rotaAtiva=\"routerLinkActive\" mat-raised-button color=\"accent\">Comprar</a>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n\n    <mat-divider></mat-divider>\n    <div fxFlex fxLayoutAlign=\"start center\">\n            <span class=\"titulo-section\">Pacotes</span>\n        </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n        <div fxFlex=\"95\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"10px\">\n            <mat-card fxFlex>\n                <mat-card-header>\n                    <mat-card-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <span>Nova York</span>\n                        <mat-chip-list>\n                            <mat-chip color=\"primary\">58% OFF</mat-chip>\n                        </mat-chip-list>\n                    </mat-card-title>\n                    <mat-card-subtitle>58% OFF</mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image\n                    src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNzgEPqgVEX8mMGmUmQYLYHiV9xk2cVsNHSwGbXGkTOYy9U_D\"\n                    alt=\"Nova York 58% OFF\">\n                <mat-card-content>\n                    <p>\n                    </p>\n                </mat-card-content>\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <button mat-icon-button>\n                        <mat-icon>favorite_border</mat-icon>\n                    </button>\n                    <a [routerLink]=\"['/compra']\" routerLinkActive #rotaAtiva=\"routerLinkActive\" mat-raised-button color=\"accent\">Comprar</a>\n                </mat-card-actions>\n            </mat-card>\n            <mat-card fxFlex>\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"></div>\n                    <mat-card-title>Nova York</mat-card-title>\n                    <mat-card-subtitle>58% OFF</mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image\n                    src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNzgEPqgVEX8mMGmUmQYLYHiV9xk2cVsNHSwGbXGkTOYy9U_D\"\n                    alt=\"Nova York 58% OFF\">\n                <mat-card-content>\n                    <p>\n                    </p>\n                </mat-card-content>\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <button mat-icon-button>\n                        <mat-icon>favorite_border</mat-icon>\n                    </button>\n                    <a [routerLink]=\"['/compra']\" routerLinkActive #rotaAtiva=\"routerLinkActive\" mat-raised-button color=\"accent\">Comprar</a>\n                </mat-card-actions>\n            </mat-card>\n            <mat-card fxFlex>\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"></div>\n                    <mat-card-title>Nova York</mat-card-title>\n                    <mat-card-subtitle>58% OFF</mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image\n                    src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNzgEPqgVEX8mMGmUmQYLYHiV9xk2cVsNHSwGbXGkTOYy9U_D\"\n                    alt=\"Nova York 58% OFF\">\n                <mat-card-content>\n                    <p>\n                    </p>\n                </mat-card-content>\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <button mat-icon-button>\n                        <mat-icon>favorite_border</mat-icon>\n                    </button>\n                    <a [routerLink]=\"['/compra']\" routerLinkActive #rotaAtiva=\"routerLinkActive\" mat-raised-button color=\"accent\">Comprar</a>\n                </mat-card-actions>\n            </mat-card>\n            <mat-card fxFlex>\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"></div>\n                    <mat-card-title>Nova York</mat-card-title>\n                    <mat-card-subtitle>58% OFF</mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image\n                    src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNzgEPqgVEX8mMGmUmQYLYHiV9xk2cVsNHSwGbXGkTOYy9U_D\"\n                    alt=\"Nova York 58% OFF\">\n                <mat-card-content>\n                    <p>\n                    </p>\n                </mat-card-content>\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <button mat-icon-button>\n                        <mat-icon>favorite_border</mat-icon>\n                    </button>\n                    <a [routerLink]=\"['/compra']\" routerLinkActive #rotaAtiva=\"routerLinkActive\" mat-raised-button color=\"accent\">Comprar</a>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n    <mat-divider></mat-divider>\n    <div fxFlex fxLayoutAlign=\"start center\">\n            <span class=\"titulo-section\">Avaliações</span>\n        </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n        <div fxFlex=\"95\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"10px\">\n            <mat-card fxFlex>\n                    <mat-card-header>\n                            <mat-icon>person</mat-icon>\n                            <mat-card-title>Ana Beatriz</mat-card-title>\n                            <mat-card-subtitle>Adorei!!!</mat-card-subtitle>\n                    </mat-card-header>\n\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                </mat-card-actions>\n            </mat-card>\n            <mat-card fxFlex>\n                    <mat-card-header>\n                            <mat-icon>person</mat-icon>\n                            <mat-card-title>Maria Luiza</mat-card-title>\n                            <mat-card-subtitle>Otimo site, fácil de comprar</mat-card-subtitle>\n                    </mat-card-header>\n\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_border</mat-icon>\n                </mat-card-actions>\n            </mat-card>\n            <mat-card fxFlex>\n                    <mat-card-header>\n                            <mat-icon>person</mat-icon>\n                            <mat-card-title>Luana</mat-card-title>\n                            <mat-card-subtitle>Voltarei nas proximas viagens</mat-card-subtitle>\n                    </mat-card-header>\n\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                </mat-card-actions>\n            </mat-card>\n            <mat-card fxFlex>\n                    <mat-card-header>\n                            <mat-icon>person</mat-icon>\n                            <mat-card-title>Marcos Vinicios</mat-card-title>\n                            <mat-card-subtitle>Gostei muito do site </mat-card-subtitle>\n                    </mat-card-header>\n\n                <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_rate</mat-icon>\n                        <mat-icon>star_border</mat-icon>\n                        <mat-icon>star_border</mat-icon>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n        <mat-card fxFlex class=\"footer\">\n            <div fxFlex=\"50\" fxLayoutAlign=\"space-around center\">\n                <span class=\"footer-nome-empresa\">Marba Travel</span>\n            </div>\n            <div>\n\n            </div>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Git\marba-travel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map