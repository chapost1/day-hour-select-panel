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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_scheduling_details_scheduling_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scheduling-details/scheduling-details.component */ "./src/app/components/scheduling-details/scheduling-details.component.ts");



class AppComponent {
    constructor() {
        this.title = 'day-hour-select-panel';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "mx-auto", "container", "app-wrapper"], [1, "card", "app-content", "p-5"], [1, "p-5"], [1, "text-center"], [1, "d-flex", "justify-content-center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Day Hour Pairs Selection Scheduling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-scheduling-details", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_scheduling_details_scheduling_details_component__WEBPACK_IMPORTED_MODULE_1__["SchedulingDetailsComponent"]], styles: [".app-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 8px 0;\n}\n.app-wrapper[_ngcontent-%COMP%]   .app-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIC5hcHAtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_scheduling_details_scheduling_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scheduling-details/scheduling-details.component */ "./src/app/components/scheduling-details/scheduling-details.component.ts");
/* harmony import */ var _components_scheduling_details_summary_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/scheduling-details/summary/summary.component */ "./src/app/components/scheduling-details/summary/summary.component.ts");
/* harmony import */ var _components_scheduling_details_selection_panel_selection_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/scheduling-details/selection-panel/selection-panel.component */ "./src/app/components/scheduling-details/selection-panel/selection-panel.component.ts");
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/safe-html.pipe */ "./src/app/pipes/safe-html.pipe.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_scheduling_details_scheduling_details_component__WEBPACK_IMPORTED_MODULE_5__["SchedulingDetailsComponent"],
        _components_scheduling_details_summary_summary_component__WEBPACK_IMPORTED_MODULE_6__["SummaryComponent"],
        _components_scheduling_details_selection_panel_selection_panel_component__WEBPACK_IMPORTED_MODULE_7__["SelectionPanelComponent"],
        _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_8__["SafeHtmlPipe"]], imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_scheduling_details_scheduling_details_component__WEBPACK_IMPORTED_MODULE_5__["SchedulingDetailsComponent"],
                    _components_scheduling_details_summary_summary_component__WEBPACK_IMPORTED_MODULE_6__["SummaryComponent"],
                    _components_scheduling_details_selection_panel_selection_panel_component__WEBPACK_IMPORTED_MODULE_7__["SelectionPanelComponent"],
                    _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_8__["SafeHtmlPipe"]
                ],
                imports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/scheduling-details/scheduling-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/scheduling-details/scheduling-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SchedulingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulingDetailsComponent", function() { return SchedulingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/components/scheduling-details/summary/summary.component.ts");
/* harmony import */ var _selection_panel_selection_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selection-panel/selection-panel.component */ "./src/app/components/scheduling-details/selection-panel/selection-panel.component.ts");





function SchedulingDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-summary", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("editSchedule", function SchedulingDetailsComponent_div_2_Template_app_summary_editSchedule_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.enterEditMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("days", ctx_r0.days)("hours", ctx_r0.hours)("includedMatrix", ctx_r0.includedMatrix);
} }
function SchedulingDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-selection-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("save", function SchedulingDetailsComponent_div_3_Template_app_selection_panel_save_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onPanelSave($event); })("cancel", function SchedulingDetailsComponent_div_3_Template_app_selection_panel_cancel_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onPanelCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("scheduling-selection-panel-container ", ctx_r1.isEditPanelVisible ? "visible" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transition", ctx_r1.editPanelTransitionAttributeValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("days", ctx_r1.days)("hours", ctx_r1.hours)("inputIncludedMatrix", ctx_r1.includedMatrix);
} }
class SchedulingDetailsComponent {
    constructor() {
        this.EDIT_PANEL_ANIMATION_TIME_IN_MS = 500;
        this.dayHourPairs = null;
        this.days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        this.hours = [];
        this.isEdit = false;
        this.isEditPanelVisible = false;
        this.includedMatrix = null;
    }
    static parseBooleanMatrixToDayHourPairs(booleanMatrix, days, hours) {
        const pairs = [];
        for (let day = 0; day < days; day++) {
            for (let hour = 0; hour < hours; hour++) {
                if (!booleanMatrix[day][hour]) {
                    continue;
                }
                pairs.push({
                    day,
                    hour
                });
            }
        }
        return pairs;
    }
    ngOnInit() {
        this.initHoursArray();
    }
    ngAfterViewInit() {
        requestAnimationFrame(() => {
            this.enterEditMode();
        });
    }
    get editPanelTransitionAttributeValue() {
        return `all ${this.EDIT_PANEL_ANIMATION_TIME_IN_MS}ms ease`;
    }
    initHoursArray() {
        for (let i = 0; i < 24; i++) {
            this.hours[i] = i;
        }
    }
    get isThereAnySelectionToSummarize() {
        return Boolean(this.includedMatrix);
    }
    get shouldVisualizeEditPanel() {
        return this.isEdit || !this.isThereAnySelectionToSummarize;
    }
    get shouldVisualizeSummaryPanel() {
        return !this.shouldVisualizeEditPanel;
    }
    getDayHourPairs() {
        return this.dayHourPairs;
    }
    onPanelSave(included) {
        this.includedMatrix = included;
        this.updateDayHourPairs();
        this.exitEditMode();
    }
    updateDayHourPairs() {
        this.dayHourPairs = SchedulingDetailsComponent.parseBooleanMatrixToDayHourPairs(this.includedMatrix, this.days.length, this.hours.length);
    }
    onPanelCancel() {
        if (this.isThereAnySelectionToSummarize) {
            this.exitEditMode();
        }
        else {
            this.exitEditMode();
        }
    }
    enterEditMode() {
        this.isEdit = true;
        this.showEditPanel();
    }
    showEditPanel() {
        requestAnimationFrame(() => {
            this.isEditPanelVisible = true;
        });
    }
    exitEditMode(onPanelExitAnimationComplete) {
        this.hideEditPanel(() => {
            this.isEdit = false;
            if (onPanelExitAnimationComplete) {
                onPanelExitAnimationComplete();
            }
        });
    }
    hideEditPanel(onPanelExitAnimationComplete) {
        this.isEditPanelVisible = false;
        this.onEditPanelExitAnimationComplete(onPanelExitAnimationComplete);
    }
    onEditPanelExitAnimationComplete(onPanelExitAnimationComplete) {
        setTimeout(() => {
            if (onPanelExitAnimationComplete) {
                onPanelExitAnimationComplete();
            }
        }, this.EDIT_PANEL_ANIMATION_TIME_IN_MS);
    }
}
SchedulingDetailsComponent.ɵfac = function SchedulingDetailsComponent_Factory(t) { return new (t || SchedulingDetailsComponent)(); };
SchedulingDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchedulingDetailsComponent, selectors: [["app-scheduling-details"]], decls: 4, vars: 2, consts: [[1, "scheduling-details-wrapper"], [1, "mt-2", "mb-1", "scheduling-controls", "overflow-visible"], [4, "ngIf"], ["class", "overflow-hidden", 4, "ngIf"], [3, "days", "hours", "includedMatrix", "editSchedule"], [1, "overflow-hidden"], [3, "days", "hours", "inputIncludedMatrix", "save", "cancel"]], template: function SchedulingDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SchedulingDetailsComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SchedulingDetailsComponent_div_3_Template, 3, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldVisualizeSummaryPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldVisualizeEditPanel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__["SummaryComponent"], _selection_panel_selection_panel_component__WEBPACK_IMPORTED_MODULE_3__["SelectionPanelComponent"]], styles: [".scheduling-details-wrapper .scheduling-controls {\n  width: 100%;\n  overflow-x: hidden;\n}\n.scheduling-details-wrapper .scheduling-controls.overflow-visible {\n  overflow: visible;\n}\n.scheduling-details-wrapper .scheduling-controls .scheduling-selection-panel-container {\n  position: relative;\n  top: -420px;\n  opacity: 0;\n}\n.scheduling-details-wrapper .scheduling-controls .scheduling-selection-panel-container.visible {\n  top: 0;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsaW5nLWRldGFpbHMvc2NoZWR1bGluZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNFLGlCQUFBO0FBQU47QUFHSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFETjtBQUdNO0VBQ0UsTUFBQTtFQUNBLFVBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2NoZWR1bGluZy1kZXRhaWxzL3NjaGVkdWxpbmctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2hlZHVsaW5nLWRldGFpbHMtd3JhcHBlciB7XG4gIC5zY2hlZHVsaW5nLWNvbnRyb2xzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgICAmLm92ZXJmbG93LXZpc2libGUge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgfVxuXG4gICAgLnNjaGVkdWxpbmctc2VsZWN0aW9uLXBhbmVsLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC00MjBweDtcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgICYudmlzaWJsZSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchedulingDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scheduling-details',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                templateUrl: './scheduling-details.component.html',
                styleUrls: ['./scheduling-details.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/scheduling-details/selection-panel/selection-panel.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/scheduling-details/selection-panel/selection-panel.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SelectionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionPanelComponent", function() { return SelectionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SelectionPanelComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionPanelComponent_button_25_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const hour_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleHour($event, hour_r3); })("mouseenter", function SelectionPanelComponent_button_25_Template_button_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onMouseLeavesPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hour_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hour_r3);
} }
function SelectionPanelComponent_div_26_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SelectionPanelComponent_div_26_button_3_Template_button_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const hour_r10 = ctx.$implicit; const day_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onMouseDown($event, day_r8, hour_r10); })("mouseenter", function SelectionPanelComponent_div_26_button_3_Template_button_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const hour_r10 = ctx.$implicit; const day_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onMouseEnter($event, day_r8, hour_r10); })("mouseup", function SelectionPanelComponent_div_26_button_3_Template_button_mouseup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const hour_r10 = ctx.$implicit; const day_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onMouseUp($event, day_r8, hour_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hour_r10 = ctx.$implicit;
    const day_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("schedule-selection-button ", ctx_r9.getPanelItemClass(day_r8, hour_r10), "");
} }
function SelectionPanelComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionPanelComponent_div_26_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const day_r8 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.toggleDay($event, day_r8); })("mouseenter", function SelectionPanelComponent_div_26_Template_button_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onMouseLeavesPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectionPanelComponent_div_26_button_3_Template, 1, 3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dayTitle_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dayTitle_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.hours);
} }
function SelectionPanelComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionPanelComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Discard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SelectionPanelComponent {
    constructor(cd) {
        this.cd = cd;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.days = null;
        this.hours = null;
        this.stateMatrix = [];
        this.lastDragOrigin = null;
        this.isDragOriginAlreadyActive = false;
        this.isDragging = false;
        this.didUserDragAny = false;
        cd.detach();
    }
    handleEscapeKeyDown(event) {
        this.clearSelections();
    }
    ngOnInit() {
        this.initStateRefMatrix();
        this.initStateByInputIncludedMatrix();
        this.cd.detectChanges();
    }
    ngOnChanges(changes) {
        requestAnimationFrame(() => this.cd.detectChanges);
    }
    get isValid() {
        return this.isAnythingSelected();
    }
    isAnythingSelected() {
        for (let day = 0; day < this.days.length; day++) {
            for (let hour = 0; hour < this.hours.length; hour++) {
                if (this.stateMatrix[day][hour].included) {
                    return true;
                }
            }
        }
        return false;
    }
    get isEditingAnExistingData() {
        return Boolean(this.inputIncludedMatrix);
    }
    createDayHourPair(day, hour) {
        return { day, hour };
    }
    isTheSameDayHour(itemA, itemB) {
        return itemA.day === itemB.day && itemA.hour === itemB.hour;
    }
    initStateRefMatrix() {
        for (let day = 0; day < this.days.length; day++) {
            this.stateMatrix[day] = [];
            for (let hour = 0; hour < this.hours.length; hour++) {
                this.stateMatrix[day][hour] = {
                    included: true,
                    drag: { isOrigin: false, isSelection: false }
                };
            }
        }
    }
    initStateByInputIncludedMatrix() {
        if (!this.inputIncludedMatrix) {
            return;
        }
        for (let day = 0; day < this.days.length; day++) {
            for (let hour = 0; hour < this.hours.length; hour++) {
                this.stateMatrix[day][hour].included = this.inputIncludedMatrix[day][hour];
            }
        }
    }
    setAllAs(include) {
        for (let day = 0; day < this.days.length; day++) {
            for (let hour = 0; hour < this.hours.length; hour++) {
                this.stateMatrix[day][hour].included = include;
            }
        }
        this.cd.detectChanges();
    }
    isDragOrigin(pair) {
        return this.stateMatrix[pair.day][pair.hour].drag.isOrigin;
    }
    isDragSelection(pair) {
        return this.stateMatrix[pair.day][pair.hour].drag.isSelection;
    }
    toggleClickedPanelDayHour(pair) {
        this.stateMatrix[pair.day][pair.hour].included = !this.stateMatrix[pair.day][pair.hour].included;
    }
    toggleDragSelectionItems(pair) {
        const shouldIncludeSelectedItems = !this.isDragOriginAlreadyActive;
        this.toggleSelectedDayHourPairs(this.lastDragOrigin, pair, shouldIncludeSelectedItems);
    }
    isIncluded(pair) {
        return this.stateMatrix[pair.day][pair.hour].included;
    }
    isHourMostlyIncluded(hour) {
        let includedCount = 0, max = 0;
        for (const day of this.stateMatrix) {
            if (day[hour].included) {
                includedCount++;
            }
            max++;
        }
        return includedCount > max / 2;
    }
    toggleHour(event, hour) {
        const isHourShouldBeIncluded = !this.isHourMostlyIncluded(hour);
        for (let day = 0; day < this.days.length; day++) {
            this.stateMatrix[day][hour].included = isHourShouldBeIncluded;
        }
        this.cd.detectChanges();
    }
    isDayMostlyIncluded(day) {
        let includedCount = 0, max = 0;
        for (const activeHour of this.stateMatrix[day]) {
            if (activeHour.included) {
                includedCount++;
            }
            max++;
        }
        return includedCount > max / 2;
    }
    toggleDay(event, day) {
        const isDayShouldBeIncluded = !this.isDayMostlyIncluded(day);
        for (let hour = 0; hour < this.hours.length; hour++) {
            this.stateMatrix[day][hour].included = isDayShouldBeIncluded;
        }
        this.cd.detectChanges();
    }
    onDragStart(pair) {
        this.isDragging = true;
        this.stateMatrix[pair.day][pair.hour].drag.isOrigin = true;
        this.lastDragOrigin = pair;
        this.isDragOriginAlreadyActive = this.isIncluded(pair);
    }
    onDragEnter(pair) {
        if (!this.isDragging) {
            return;
        }
        this.clearDragSelectionState();
        if (this.lastDragOrigin) {
            this.setDragSelectionState(this.lastDragOrigin, pair);
        }
        this.cd.detectChanges();
    }
    isClick(pair) {
        return this.isDragging && this.lastDragOrigin && this.isTheSameDayHour(this.lastDragOrigin, pair) && !this.didUserDragAny;
    }
    isDragDrop(pair) {
        return this.isDragging && this.lastDragOrigin && !this.isTheSameDayHour(this.lastDragOrigin, pair) && this.didUserDragAny;
    }
    onMouseDown(event, day, hour) {
        this.onDragStart(this.createDayHourPair(day, hour));
    }
    onMouseEnter(event, day, hour) {
        const pair = this.createDayHourPair(day, hour);
        this.onDragEnter(pair);
    }
    detectSelectToggleMethod(pair) {
        if (this.isClick(pair)) {
            return this.toggleClickedPanelDayHour.bind(this);
        }
        else if (this.isDragDrop(pair)) {
            return this.toggleDragSelectionItems.bind(this);
        }
        return null;
    }
    toggleSelectedDayHourItemsHandler(pair) {
        const toggleMethodDetected = this.detectSelectToggleMethod(pair);
        if (toggleMethodDetected) {
            toggleMethodDetected(pair);
        }
    }
    onMouseUp(event, day, hour) {
        this.toggleSelectedDayHourItemsHandler(this.createDayHourPair(day, hour));
        this.clearSelections();
    }
    onMouseLeavesPanel() {
        this.clearSelections();
    }
    clearSelections() {
        this.clearSelectionState();
        this.cd.detectChanges();
    }
    clearSelectionState() {
        this.clearDragState();
    }
    clearDragState() {
        for (let day = 0; day < this.days.length; day++) {
            for (let hour = 0; hour < this.hours.length; hour++) {
                this.stateMatrix[day][hour].drag.isOrigin = false;
                this.stateMatrix[day][hour].drag.isSelection = false;
            }
        }
        this.lastDragOrigin = null;
        this.didUserDragAny = false;
        this.isDragging = false;
        this.isDragOriginAlreadyActive = false;
    }
    clearDragSelectionState() {
        for (let day = 0; day < this.days.length; day++) {
            for (let hour = 0; hour < this.hours.length; hour++) {
                this.stateMatrix[day][hour].drag.isSelection = false;
            }
        }
    }
    setDragSelectionState(origin, end) {
        if (!this.isTheSameDayHour(origin, end)) {
            this.didUserDragAny = true;
        }
        const selectionRange = this.getSelectionRange(origin, end);
        for (let day = selectionRange.day.min; day <= selectionRange.day.max; day++) {
            for (let hour = selectionRange.hour.min; hour <= selectionRange.hour.max; hour++) {
                this.stateMatrix[day][hour].drag.isSelection = true;
            }
        }
    }
    getSelectionRange(origin, end) {
        return {
            day: {
                max: Math.max(origin.day, end.day),
                min: Math.min(origin.day, end.day)
            },
            hour: {
                min: Math.min(origin.hour, end.hour),
                max: Math.max(origin.hour, end.hour)
            }
        };
    }
    toggleSelectedDayHourPairs(origin, end, shouldBeIncluded) {
        const selectionRange = this.getSelectionRange(origin, end);
        for (let day = selectionRange.day.min; day <= selectionRange.day.max; day++) {
            for (let hour = selectionRange.hour.min; hour <= selectionRange.hour.max; hour++) {
                this.stateMatrix[day][hour].included = shouldBeIncluded;
            }
        }
    }
    getPanelItemClass(day, hour) {
        const pair = this.createDayHourPair(day, hour);
        const classes = [];
        if (this.isIncluded(pair)) {
            classes.push('included');
        }
        if (this.isDragSelection(pair)) {
            if (this.isDragOrigin(pair)) {
                classes.push('drag-origin');
            }
            else {
                classes.push('drag-selection');
            }
        }
        return classes.join(' ');
    }
    getIncludedStateMatrix() {
        const mat = [];
        for (let day = 0; day < this.days.length; day++) {
            mat[day] = [];
            for (let hour = 0; hour < this.hours.length; hour++) {
                mat[day][hour] = this.stateMatrix[day][hour].included;
            }
        }
        return mat;
    }
    onCancel() {
        this.cancel.emit();
    }
    onSave() {
        this.save.emit(this.getIncludedStateMatrix());
    }
}
SelectionPanelComponent.ɵfac = function SelectionPanelComponent_Factory(t) { return new (t || SelectionPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
SelectionPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectionPanelComponent, selectors: [["app-selection-panel"]], hostBindings: function SelectionPanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function SelectionPanelComponent_keydown_escape_HostBindingHandler($event) { return ctx.handleEscapeKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { days: "days", hours: "hours", inputIncludedMatrix: "inputIncludedMatrix" }, outputs: { save: "save", cancel: "cancel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 33, vars: 4, consts: [[1, "selection-panel-wrapper-container"], [1, "selection-panel-wrapper"], [1, "row", "px-2", "font-weight-bold", "panel-header"], [1, "col-3", "panel-header-actions"], [1, "clickable", "vertical-align", 3, "click"], [1, "vertical-align", "d-inline-block", "no-user-select"], [1, "col-6"], [1, "col-3", "panel-legend", "no-user-select"], [1, "mx-1", "vertical-align", "d-inline-block", "panel-legend-thumbnail", "included"], [1, "mx-2", "vertical-align", "d-inline-block"], [1, "mx-2", "vertical-align", "d-inline-block", "panel-legend-thumbnail", "excluded"], [1, "mx-1", "vertical-align", "d-inline-block"], [1, "my-2"], [1, "schedule-panel-grid-container", "px-1", "no-user-select"], [1, "grid", 3, "mouseleave"], [1, "schedule-selection-grid", "grid-hours"], ["type", "button"], ["class", "hour-toggle-button", "type", "button", 3, "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "schedule-selection-grid", 4, "ngFor", "ngForOf"], [1, "row", "panel-footer"], [1, "panel-footer-actions", "mb-2"], ["class", "btn btn-sm cancel-btn mx-3", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-accent", "save-btn", "mx-2", 3, "disabled", "click"], ["type", "button", 1, "hour-toggle-button", 3, "click", "mouseenter"], [1, "schedule-selection-grid"], ["type", "button", 1, "day-toggle-button", 3, "click", "mouseenter"], ["type", "button", 3, "class", "mousedown", "mouseenter", "mouseup", 4, "ngFor", "ngForOf"], ["type", "button", 3, "mousedown", "mouseenter", "mouseup"], ["type", "button", 1, "btn", "btn-sm", "cancel-btn", "mx-3", 3, "click"]], template: function SelectionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionPanelComponent_Template_a_click_4_listener() { return ctx.setAllAs(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0\u00A0|\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionPanelComponent_Template_a_click_9_listener() { return ctx.setAllAs(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Included");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Excluded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function SelectionPanelComponent_Template_div_mouseleave_22_listener() { return ctx.onMouseLeavesPanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SelectionPanelComponent_button_25_Template, 2, 1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SelectionPanelComponent_div_26_Template, 4, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SelectionPanelComponent_button_30_Template, 2, 0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionPanelComponent_Template_button_click_31_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Save Selection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.days);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditingAnExistingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isValid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".selection-panel-wrapper-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: hidden;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  width: 940px;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-header-actions[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-header-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #222222;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-header-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3f51b5;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-legend[_ngcontent-%COMP%]   .panel-legend-thumbnail[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #222;\n  cursor: help;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-legend[_ngcontent-%COMP%]   .panel-legend-thumbnail.included[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-legend[_ngcontent-%COMP%]   .panel-legend-thumbnail.excluded[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%] {\n  max-width: -webkit-max-content;\n  max-width: max-content;\n  background-color: #fff;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-grid[_ngcontent-%COMP%] {\n  display: grid;\n  width: -webkit-min-content;\n  width: min-content;\n  grid-template-columns: repeat(25, 1fr);\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid #dee2e6;\n  width: 4ch;\n  height: 4ch;\n  background-color: transparent;\n  color: var(--blue-grey-600);\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n  width: 16ch;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .grid-hours[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .grid-hours[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n  cursor: default;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .hour-toggle-button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .day-toggle-button[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .day-toggle-button[_ngcontent-%COMP%], .selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .hour-toggle-button[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  letter-spacing: 0.1em;\n  font-variant: small-caps;\n  white-space: nowrap;\n  border: 1px solid transparent !important;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .day-toggle-button[_ngcontent-%COMP%]:hover, .selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .hour-toggle-button[_ngcontent-%COMP%]:hover {\n  background-color: #eeeeee !important;\n  cursor: pointer;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .day-toggle-button[_ngcontent-%COMP%]:focus, .selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .hour-toggle-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  cursor: pointer;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  height: 0;\n  transition: all 0.2s ease-in-out;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button.included[_ngcontent-%COMP%] {\n  background-color: #3f51b5 !important;\n  height: 100%;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button.included.drag-origin[_ngcontent-%COMP%], .selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button.included.shift-origin[_ngcontent-%COMP%] {\n  background-color: rgba(43, 120, 228, 0.6) !important;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button.included.drag-selection[_ngcontent-%COMP%], .selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button.included.shift-selection[_ngcontent-%COMP%] {\n  background-color: rgba(43, 120, 228, 0.5) !important;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button[_ngcontent-%COMP%]:not(.included).drag-selection, .selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button[_ngcontent-%COMP%]:not(.included).shift-selection {\n  background-color: #e8f0fd !important;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button[_ngcontent-%COMP%]:not(.included).drag-origin, .selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button[_ngcontent-%COMP%]:not(.included).shift-origin {\n  border-color: rgba(103, 129, 179, 0.25) !important;\n  background-color: rgba(43, 120, 228, 0.25) !important;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button.drag-selection[_ngcontent-%COMP%], .selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .schedule-panel-grid-container[_ngcontent-%COMP%]   .schedule-selection-button.shift-selection[_ngcontent-%COMP%] {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%] {\n  width: 916px;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .panel-footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .panel-footer-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  text-transform: none;\n  white-space: nowrap;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .panel-footer-actions[_ngcontent-%COMP%]   .btn-sm.cancel-btn[_ngcontent-%COMP%] {\n  width: 90px;\n  max-width: 90px;\n  min-width: 90px;\n  color: #3f51b5 !important;\n  background-color: #ffffff;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .panel-footer-actions[_ngcontent-%COMP%]   .btn-sm.save-btn[_ngcontent-%COMP%] {\n  color: #222222 !important;\n  background-color: #e0e0e0 !important;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .panel-footer-actions[_ngcontent-%COMP%]   .btn-sm.save-btn[disabled][_ngcontent-%COMP%]:hover {\n  box-shadow: unset;\n  cursor: not-allowed;\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .panel-footer-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:hover, .selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .panel-footer-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.selection-panel-wrapper-container[_ngcontent-%COMP%]   .selection-panel-wrapper[_ngcontent-%COMP%]   .no-user-select[_ngcontent-%COMP%] {\n  -webkit-user-select: none !important;\n          user-select: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsaW5nLWRldGFpbHMvc2VsZWN0aW9uLXBhbmVsL3NlbGVjdGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0FBQ047QUFDTTtFQUNFLGtCQUFBO0FBQ1I7QUFDUTtFQUNFLGNBQUE7QUFDVjtBQUFVO0VBQ0UsY0FBQTtBQUVaO0FBS1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUhWO0FBS1U7RUFFRSx5QkFBQTtBQUpaO0FBT1U7RUFDRSxzQkFBQTtBQUxaO0FBV0k7RUFDRSw4QkFBQTtFQUFBLHNCQUFBO0VBQ0Esc0JBQUE7QUFUTjtBQVdNO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSxzQ0FBQTtBQVRSO0FBV1E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBVFY7QUFXVTtFQUNFLFdBQUE7QUFUWjtBQWNNO0VBQ0UsNkJBQUE7QUFaUjtBQWNRO0VBQ0UsZUFBQTtBQVpWO0FBZ0JNO0VBQ0Usa0JBQUE7QUFkUjtBQWlCTTtFQUNFLGlCQUFBO0FBZlI7QUFrQk07O0VBRUUsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQWhCUjtBQWtCUTs7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7QUFmVjtBQWtCUTs7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQWZWO0FBb0JNO0VBQ0UsaUNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFsQlI7QUFvQlE7RUFFRSxvQ0FBQTtFQUNBLFlBQUE7QUFuQlY7QUFxQlU7RUFDRSxvREFBQTtBQW5CWjtBQXNCVTtFQUNFLG9EQUFBO0FBcEJaO0FBeUJVO0VBQ0Usb0NBQUE7QUF2Qlo7QUEwQlU7RUFDRSxrREFBQTtFQUNBLHFEQUFBO0FBeEJaO0FBNEJRO0VBQ0UsZ0JBQUE7RUFFQSx3QkFBQTtBQTFCVjtBQWtDSTtFQUNFLFlBQUE7QUFoQ047QUFrQ007RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFoQ1I7QUFrQ1E7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFoQ1Y7QUFrQ1U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBaENaO0FBbUNVO0VBQ0UseUJBQUE7RUFDQSxvQ0FBQTtBQWpDWjtBQW9DYztFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFsQ2hCO0FBdUNVO0VBQ0UsK0dBQUE7QUFyQ1o7QUEyQ0k7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0FBekNOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsaW5nLWRldGFpbHMvc2VsZWN0aW9uLXBhbmVsL3NlbGVjdGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3Rpb24tcGFuZWwtd3JhcHBlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gIC5zZWxlY3Rpb24tcGFuZWwtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcblxuICAgIC5wYW5lbC1oZWFkZXIge1xuICAgICAgd2lkdGg6IDk0MHB4O1xuXG4gICAgICAucGFuZWwtaGVhZGVyLWFjdGlvbnMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzNmNTFiNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBhbmVsLWxlZ2VuZCB7XG5cbiAgICAgICAgLnBhbmVsLWxlZ2VuZC10aHVtYm5haWwge1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyO1xuICAgICAgICAgIGN1cnNvcjogaGVscDtcblxuICAgICAgICAgICYuaW5jbHVkZWQge1xuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMmI3OGU0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmV4Y2x1ZGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNjaGVkdWxlLXBhbmVsLWdyaWQtY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgICAuc2NoZWR1bGUtc2VsZWN0aW9uLWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDI1LCAxZnIpO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgICAgd2lkdGg6IDRjaDtcbiAgICAgICAgICBoZWlnaHQ6IDRjaDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZS1ncmV5LTYwMCk7XG5cbiAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgd2lkdGg6IDE2Y2g7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ncmlkLWhvdXJzIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ob3VyLXRvZ2dsZS1idXR0b24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kYXktdG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAuZGF5LXRvZ2dsZS1idXR0b24sXG4gICAgICAuaG91ci10b2dnbGUtYnV0dG9uIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIC5zY2hlZHVsZS1zZWxlY3Rpb24tYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICYuaW5jbHVkZWQge1xuICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzJiNzhlNCAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAmLmRyYWctb3JpZ2luLCAmLnNoaWZ0LW9yaWdpbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMgMTIwIDIyOCAvIDYwJSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmRyYWctc2VsZWN0aW9uLCAmLnNoaWZ0LXNlbGVjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCAxMjAsIDIyOCwgMC41MCkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCguaW5jbHVkZWQpIHtcbiAgICAgICAgICAmLmRyYWctc2VsZWN0aW9uLCAmLnNoaWZ0LXNlbGVjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMGZkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5kcmFnLW9yaWdpbiwgJi5zaGlmdC1vcmlnaW4ge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEwMywgMTI5LCAxNzksIDAuMjUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCAxMjAsIDIyOCwgMC4yNSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmRyYWctc2VsZWN0aW9uLCAmLnNoaWZ0LXNlbGVjdGlvbiB7XG4gICAgICAgICAgY3Vyc29yOiBncmFiYmluZztcbiAgICAgICAgICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XG4gICAgICAgICAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICAgICAgICB9XG5cblxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLnBhbmVsLWZvb3RlciB7XG4gICAgICB3aWR0aDogOTE2cHg7XG5cbiAgICAgIC5wYW5lbC1mb290ZXItYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgLmJ0bi1zbSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgICAgJi5jYW5jZWwtYnRuIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5zYXZlLWJ0biB7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDEwJSksIDAgMXB4IDVweCAwIHJnYigwIDAgMCAvIDEyJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vLXVzZXItc2VsZWN0IHtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectionPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selection-panel',
                templateUrl: './selection-panel.component.html',
                styleUrls: ['./selection-panel.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { save: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], days: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputIncludedMatrix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], handleEscapeKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown.escape', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/scheduling-details/summary/summary.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/scheduling-details/summary/summary.component.ts ***!
  \****************************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/safe-html.pipe */ "./src/app/pipes/safe-html.pipe.ts");




class SummaryComponent {
    constructor() {
        this.editSchedule = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.includedMatrix = null;
        this.days = null;
        this.hours = null;
        this.summary = '';
    }
    ngOnInit() {
        this.summary = this.getSummary();
    }
    hoursToHoursKey(hours) {
        return hours.join(',');
    }
    hoursKeyToHours(hours) {
        return hours.split(',').map(hour => Number(hour));
    }
    getDaysByHoursGrouping() {
        const groups = new Map();
        for (let day = 0; day < this.days.length; day++) {
            const dayHours = [];
            for (let hour = 0; hour < this.hours.length; hour++) {
                if (this.includedMatrix[day][hour]) {
                    dayHours.push(hour);
                }
            }
            const dayHoursKey = this.hoursToHoursKey(dayHours);
            if (dayHoursKey === '') {
                continue;
            }
            if (groups.has(dayHoursKey)) {
                groups.get(dayHoursKey).push(day);
            }
            else {
                groups.set(dayHoursKey, [day]);
            }
        }
        return groups;
    }
    hoursKeyToGroupsOfLinkedHours(hoursKey) {
        const hours = this.hoursKeyToHours(hoursKey);
        const groups = [];
        if (hours.length < 1) {
            return groups;
        }
        let lastHour = hours[0];
        let currGroup = [lastHour];
        for (let i = 1; i < hours.length; i++) {
            if (lastHour + 1 < hours[i]) {
                groups.push(currGroup);
                currGroup = [hours[i]];
            }
            else {
                currGroup.push(hours[i]);
            }
            lastHour = hours[i];
        }
        groups.push(currGroup);
        return groups;
    }
    hourSummaryFormat(hour) {
        if (hour < 10) {
            return `0${hour}:00`;
        }
        return `${hour}:00`;
    }
    hoursRangeFormat(since, until) {
        if (since === until) {
            return `(${this.hourSummaryFormat(since)})`;
        }
        return `(${this.hourSummaryFormat(since)} - ${this.hourSummaryFormat(until)})`;
    }
    isAllDay(hours) {
        return (hours.length === this.hours.length);
    }
    isAllWeek(days) {
        return (days.length === this.days.length);
    }
    isLinkedHoursGroupsHasWholeDayInIt(groups) {
        return groups.length === 1 && this.isAllDay(groups[0]);
    }
    hoursKeyToSummaryText(hoursKey) {
        const summaryKeys = [];
        const groupsOfLinkedHours = this.hoursKeyToGroupsOfLinkedHours(hoursKey);
        const isAllDay = this.isLinkedHoursGroupsHasWholeDayInIt(groupsOfLinkedHours);
        for (const group of groupsOfLinkedHours) {
            summaryKeys.push(this.hoursRangeFormat(group[0], group[group.length - 1]));
        }
        const dayPart = isAllDay ? 'All Day' : 'Partial';
        return `${dayPart} ${summaryKeys.join(', ')}`;
    }
    titleCase(value) {
        if (!value) {
            return value;
        }
        const split = value.replace(new RegExp('_', 'g'), ' ').split(' ');
        return split.map(word => word.charAt(0).toUpperCase() + word.substring(1, word.length).toLowerCase()).join(' ');
    }
    getDaysNamesLineText(days) {
        if (this.isAllWeek(days)) {
            return 'All Week';
        }
        return days.map(day => this.titleCase(this.days[day])).join(', ');
    }
    hoursGroupsToSummaryLines(groups) {
        const summary = [];
        for (const pair of groups) {
            const hours = this.hoursKeyToSummaryText(pair.hoursKey);
            const daysSummary = this.getDaysNamesLineText(pair.days);
            summary.push(`${daysSummary}: ${hours}`);
        }
        return summary;
    }
    summarizeDaysByHoursGroupingsToSortedArraysByDaysAsc(groups) {
        const daysByHoursGroupingsPairs = [];
        groups.forEach((days, hoursKey) => {
            daysByHoursGroupingsPairs.push({
                hoursKey,
                days
            });
        });
        return daysByHoursGroupingsPairs.sort((pairA, pairB) => {
            return Math.max(...pairA.days) - Math.max(...pairB.days);
        });
    }
    getSummary() {
        if (!this.includedMatrix) {
            return;
        }
        const summary = this.hoursGroupsToSummaryLines(this.summarizeDaysByHoursGroupingsToSortedArraysByDaysAsc(this.getDaysByHoursGrouping()));
        return summary.map(line => `<span class="summary-line">${line}</span>`).join('');
    }
    onEditSchedule() {
        this.editSchedule.emit();
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], inputs: { includedMatrix: "includedMatrix", days: "days", hours: "hours" }, outputs: { editSchedule: "editSchedule" }, decls: 9, vars: 3, consts: [[1, "summary-wrapper"], ["mat-stroked-button", "", "disabled", "", 1, "summary", "py-2"], [3, "innerHTML"], [1, "pull-right", "clickable", "edit-button", 3, "click"], [1, "material-icons", "edit-schedule-icon", "vertical-align"], [1, "font-weight-bolder", "vertical-align"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SummaryComponent_Template_a_click_4_listener() { return ctx.onEditSchedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.summary), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], pipes: [_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeHtmlPipe"]], styles: [".summary-wrapper .summary {\n  text-align: start;\n  line-height: 28px;\n  box-shadow: 0 0 0 rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.08);\n  border: 2px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px !important;\n  color: inherit !important;\n}\n.summary-wrapper .summary .summary-line {\n  display: block;\n}\n.summary-wrapper .summary .edit-button {\n  color: #555555;\n}\n.summary-wrapper .summary .edit-button:hover {\n  color: #222;\n}\n.summary-wrapper .summary .edit-button .edit-schedule-icon {\n  font-size: 1.3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsaW5nLWRldGFpbHMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9FQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFFSTtFQUNFLGNBQUE7QUFBTjtBQUdJO0VBQ0UsY0FBQTtBQUROO0FBR007RUFDRSxXQUFBO0FBRFI7QUFJTTtFQUNFLDRCQUFBO0FBRlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NjaGVkdWxpbmctZGV0YWlscy9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VtbWFyeS13cmFwcGVyIHtcbiAgLnN1bW1hcnkge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIHJnYigwIDAgMCAvIDYlKSwgMCAxcHggMnB4IHJnYigwIDAgMCAvIDglKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG5cbiAgICAuc3VtbWFyeS1saW5lIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5lZGl0LWJ1dHRvbiB7XG4gICAgICBjb2xvcjogIzU1NTU1NTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgfVxuXG4gICAgICAuZWRpdC1zY2hlZHVsZS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIC8vJjphZnRlciB7XG4gICAgLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgdG9wOiAwO1xuICAgIC8vICBsZWZ0OiAwO1xuICAgIC8vICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgLy8gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIC8vICBjb250ZW50OiBcIldob2xlIEhvdXJzXCI7XG4gICAgLy8gIHBhZGRpbmc6IDAgNnB4O1xuICAgIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0IDIyNCAyMjQgLyA3NSUpO1xuICAgIC8vICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgIC8vfVxuXG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-summary',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                templateUrl: './summary.component.html',
                styleUrls: ['./summary.component.scss']
            }]
    }], null, { editSchedule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], includedMatrix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], days: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pipes/safe-html.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shahartal/Desktop/Other/Coding/repositories/day-hour-select-panel/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map