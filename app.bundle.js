/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api/userDatabase.ts":
/*!*****************************!*\
  !*** ./api/userDatabase.ts ***!
  \*****************************/
/*! namespace exports */
/*! export loginUser [provided] [no usage info] [missing usage info prevents renaming] */
/*! export userDatabase [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userDatabase": () => /* binding */ userDatabase,
/* harmony export */   "loginUser": () => /* binding */ loginUser
/* harmony export */ });
var userDatabase = [
    {
        username: 'user',
        password: 'user1234'
    },
    {
        username: 'admin',
        password: 'admin1234'
    }
];
function loginUser(userLoginInfo) {
    var user = userDatabase.filter(function (user) {
        return user.username === userLoginInfo.username
            && user.password === userLoginInfo.password;
    });
    if (user[0]) {
        return user[0];
    }
    else {
        throw Error();
    }
}


/***/ }),

/***/ "./components/App/App.tsx":
/*!********************************!*\
  !*** ./components/App/App.tsx ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.tsx");
/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal/Modal */ "./components/Modal/Modal.tsx");
/* harmony import */ var _News_News__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../News/News */ "./components/News/News.tsx");
/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Home/Home */ "./components/Home/Home.tsx");
/* harmony import */ var _NewsCreate_NewsCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NewsCreate/NewsCreate */ "./components/NewsCreate/NewsCreate.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/style.css */ "./components/App/styles/style.css");
;







var App = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "app" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_1__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", { className: "content" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, { exact: true, path: "/news", component: _News_News__WEBPACK_IMPORTED_MODULE_3__.default }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, { exact: true, path: "/", component: _Home_Home__WEBPACK_IMPORTED_MODULE_4__.default }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, { exact: true, path: "/news/create", component: _NewsCreate_NewsCreate__WEBPACK_IMPORTED_MODULE_5__.default }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, { path: "*", render: function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, { to: "/" })); } }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.css */ "./components/Header/Header.css");
/* harmony import */ var _redux_actions_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/modal */ "./redux/actions/modal.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
;




var Header = function (_a) {
    var showModal = _a.showModal;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", { className: "header" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container header__grid" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", { className: "header__nav" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { className: "header__link", to: "/" }, "Home"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { className: "header__link", to: "/news" }, "News")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "header__user-bar" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { onClick: function () { showModal(); }, className: "btn header__login" }, "Login")))));
};
var mapDispatchToProps = function (dispatch) {
    return {
        showModal: function () { return dispatch((0,_redux_actions_modal__WEBPACK_IMPORTED_MODULE_2__.showModal)()); }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDispatchToProps)(Header));


/***/ }),

/***/ "./components/Home/Home.tsx":
/*!**********************************!*\
  !*** ./components/Home/Home.tsx ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
;

var Home = function (_a) {
    var username = _a.username;
    var userMsg = username ? "Hello, " + username : 'Hello, guest';
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "header__user-msg" }, userMsg));
};
var mapStateToProps = function (state) {
    return {
        username: state.user.username
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Home));


/***/ }),

/***/ "./components/Login/Login.tsx":
/*!************************************!*\
  !*** ./components/Login/Login.tsx ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login.css */ "./components/Login/Login.css");
;




var Login = function (_a) {
    var loginUser = _a.loginUser, isLoginSuccess = _a.isLoginSuccess;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), username = _b[0], setUsername = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), password = _c[0], setPassword = _c[1];
    var onSubmit = function (event) {
        event.preventDefault();
        loginUser({
            username: username,
            password: password
        });
    };
    var logUserNotFoundView = isLoginSuccess === false ?
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "log error" }, "User not found, please check username or password") : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "login" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Login"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "login__log" }, logUserNotFoundView),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", { onSubmit: onSubmit, className: "login__form form" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input__header" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input__title" }, "Username")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input__main" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { onChange: function (event) { setUsername(event.target.value.trim()); }, type: "text", className: "input__field", placeholder: "Username...", value: username }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input__header" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input__title" }, "Password")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input__main" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { onChange: function (event) { setPassword(event.target.value.trim()); }, type: "password", className: "input__field", placeholder: "Password...", value: password }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "btn", type: "submit", value: "Login" }))));
};
var mapStateToProps = function (state) {
    return {
        isLoginSuccess: state.user.isLoginSuccess
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        loginUser: function (loginUserInfo) { return dispatch((0,_redux_actions_user__WEBPACK_IMPORTED_MODULE_1__.loginUser)(loginUserInfo)); }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(Login));


/***/ }),

/***/ "./components/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.tsx ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _Modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.css */ "./components/Modal/Modal.css");
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Login/Login */ "./components/Login/Login.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/modal */ "./redux/actions/modal.ts");
;




var Modal = function (_a) {
    var isModalShown = _a.isModalShown, hideModal = _a.hideModal, isLoginSuccess = _a.isLoginSuccess;
    if (isModalShown && !isLoginSuccess) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal__content" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal__header" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { onClick: function () { hideModal(); }, className: "btn modal__close-btn" }, "X")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal__main" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Login_Login__WEBPACK_IMPORTED_MODULE_2__.default, null))))));
    }
    else {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null));
    }
};
var mapStateToProps = function (state) {
    return {
        isModalShown: state.modal.isShown,
        isLoginSuccess: state.user.isLoginSuccess
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        hideModal: function () { return dispatch((0,_redux_actions_modal__WEBPACK_IMPORTED_MODULE_4__.hideModal)()); }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Modal));


/***/ }),

/***/ "./components/NewsCreate/NewsCreate.tsx":
/*!**********************************************!*\
  !*** ./components/NewsCreate/NewsCreate.tsx ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/news */ "./redux/actions/news.ts");
;


var NewsCreate = function (_a) {
    var createNews = _a.createNews;
    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState(''), title = _b[0], setTitle = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__.useState(''), text = _c[0], setText = _c[1];
    var onSubmit = function (event) {
        event.preventDefault();
        createNews({
            title: title.trim(),
            date: new Date(),
            text: text.trim()
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "news-create" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Create news"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", { onSubmit: onSubmit },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "title", name: "title", type: "text", placeholder: "Title...", onChange: function (event) {
                        setTitle(event.target.value.trim());
                    } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { name: "text", id: "text", cols: 30, rows: 10, placeholder: "Text...", onChange: function (event) {
                        setText(event.target.value.trim());
                    } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "btn", type: "submit", value: "Create" }))));
};
var mapDispatchToProps = function (dispatch) {
    return {
        createNews: function (news) { return dispatch((0,_redux_actions_news__WEBPACK_IMPORTED_MODULE_2__.createNews)(news)); }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps)(NewsCreate));


/***/ }),

/***/ "./components/News/News.tsx":
/*!**********************************!*\
  !*** ./components/News/News.tsx ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _NewsFilter_NewsFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsFilter/NewsFilter */ "./components/News/NewsFilter/NewsFilter.tsx");
/* harmony import */ var _NewsItem_NewsItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsItem/NewsItem */ "./components/News/NewsItem/NewsItem.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _News_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./News.css */ "./components/News/News.css");
;





var News = function (_a) {
    var newsIdList = _a.newsIdList, newsList = _a.newsList;
    var newsListView = newsList.filter(function (news) {
        return newsIdList.includes(news.id);
    }).map(function (news) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NewsItem_NewsItem__WEBPACK_IMPORTED_MODULE_2__.default, { key: news.id, data: news });
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "news-section" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "News"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NewsFilter_NewsFilter__WEBPACK_IMPORTED_MODULE_1__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, { className: "btn news-section__create", to: "/news/create" }, "Create news"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "news-section__list" }, newsListView)));
};
var mapStateToProps = function (state) {
    return {
        newsIdList: state.news.newsToShowId,
        newsList: state.news.newsList
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps)(News));


/***/ }),

/***/ "./components/News/NewsFilter/NewsFilter.tsx":
/*!***************************************************!*\
  !*** ./components/News/NewsFilter/NewsFilter.tsx ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/actions/news */ "./redux/actions/news.ts");
;


var NewsFilter = function (_a) {
    var filterNews = _a.filterNews;
    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState(''), filterValue = _b[0], setFilterValue = _b[1];
    var onFilterChange = function (event) {
        setFilterValue(event.target.value.trim().toLowerCase());
        filterNews(event.target.value.trim().toLowerCase());
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "filter" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { onChange: onFilterChange, type: "text", className: "filter__input", value: filterValue, placeholder: "Enter news title..." })));
};
var mapDispatchToProps = function (dispatch) {
    return {
        filterNews: function (filterValue) { return dispatch((0,_redux_actions_news__WEBPACK_IMPORTED_MODULE_2__.filterNews)(filterValue)); }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps)(NewsFilter));


/***/ }),

/***/ "./components/News/NewsItem/NewsItem.tsx":
/*!***********************************************!*\
  !*** ./components/News/NewsItem/NewsItem.tsx ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
;
var NewsItem = function (_a) {
    var data = _a.data;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "news" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "news__header" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: "news__title" }, data.title),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("time", { className: "news__date" }, data.date.toDateString())),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "news__body" }, data.text)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsItem);


/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var _components_App_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App/App */ "./components/App/App.tsx");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/store */ "./redux/store.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
;





react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, { store: _redux_store__WEBPACK_IMPORTED_MODULE_3__.default },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App_App__WEBPACK_IMPORTED_MODULE_2__.default, null))), document.querySelector('#root'));


/***/ }),

/***/ "./redux/actions/modal.ts":
/*!********************************!*\
  !*** ./redux/actions/modal.ts ***!
  \********************************/
/*! namespace exports */
/*! export HIDE_MODAL [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SHOW_MODAL [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hideModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHOW_MODAL": () => /* binding */ SHOW_MODAL,
/* harmony export */   "HIDE_MODAL": () => /* binding */ HIDE_MODAL,
/* harmony export */   "showModal": () => /* binding */ showModal,
/* harmony export */   "hideModal": () => /* binding */ hideModal
/* harmony export */ });
var SHOW_MODAL = 'SHOW_MODAL';
var HIDE_MODAL = 'HIDE_MODAL';
var showModal = function () {
    return {
        type: SHOW_MODAL
    };
};
var hideModal = function () {
    return {
        type: HIDE_MODAL
    };
};


/***/ }),

/***/ "./redux/actions/news.ts":
/*!*******************************!*\
  !*** ./redux/actions/news.ts ***!
  \*******************************/
/*! namespace exports */
/*! export CREATE_NEWS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FILTER_NEWS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createNews [provided] [no usage info] [missing usage info prevents renaming] */
/*! export filterNews [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FILTER_NEWS": () => /* binding */ FILTER_NEWS,
/* harmony export */   "CREATE_NEWS": () => /* binding */ CREATE_NEWS,
/* harmony export */   "filterNews": () => /* binding */ filterNews,
/* harmony export */   "createNews": () => /* binding */ createNews
/* harmony export */ });
var FILTER_NEWS = 'FILTER_NEWS';
var CREATE_NEWS = 'CREATE_NEWS';
var filterNews = function (filterValue) {
    return {
        type: FILTER_NEWS,
        payload: {
            filterValue: filterValue
        }
    };
};
var createNews = function (news) {
    return {
        type: CREATE_NEWS,
        payload: {
            news: news
        }
    };
};


/***/ }),

/***/ "./redux/actions/user.ts":
/*!*******************************!*\
  !*** ./redux/actions/user.ts ***!
  \*******************************/
/*! namespace exports */
/*! export LOGIN_USER [provided] [no usage info] [missing usage info prevents renaming] */
/*! export LOGIN_USER_FAIL [provided] [no usage info] [missing usage info prevents renaming] */
/*! export LOGIN_USER_SUCCESS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loginUser [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loginUserFail [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loginUserSuccess [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGIN_USER": () => /* binding */ LOGIN_USER,
/* harmony export */   "LOGIN_USER_SUCCESS": () => /* binding */ LOGIN_USER_SUCCESS,
/* harmony export */   "LOGIN_USER_FAIL": () => /* binding */ LOGIN_USER_FAIL,
/* harmony export */   "loginUser": () => /* binding */ loginUser,
/* harmony export */   "loginUserSuccess": () => /* binding */ loginUserSuccess,
/* harmony export */   "loginUserFail": () => /* binding */ loginUserFail
/* harmony export */ });
var LOGIN_USER = 'LOGIN_USER';
var LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
var LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
var loginUser = function (userLoginInfo) {
    return {
        type: LOGIN_USER,
        payload: userLoginInfo
    };
};
var loginUserSuccess = function (username) {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: {
            username: username
        }
    };
};
var loginUserFail = function () {
    return {
        type: LOGIN_USER_FAIL,
    };
};


/***/ }),

/***/ "./redux/reducers/modalReducer.ts":
/*!****************************************!*\
  !*** ./redux/reducers/modalReducer.ts ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _actions_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/modal */ "./redux/actions/modal.ts");
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

var initialState = {
    isShown: false
};
var modalReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_modal__WEBPACK_IMPORTED_MODULE_0__.SHOW_MODAL:
            return __assign(__assign({}, state), { isShown: true });
        case _actions_modal__WEBPACK_IMPORTED_MODULE_0__.HIDE_MODAL:
            return __assign(__assign({}, state), { isShown: false });
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalReducer);


/***/ }),

/***/ "./redux/reducers/newsReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/newsReducer.ts ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _actions_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/news */ "./redux/actions/news.ts");
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var initialState = {
    newsList: [
        {
            id: 1,
            title: 'news 1',
            date: new Date(),
            text: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
            id: 2,
            title: 'news 2',
            date: new Date(),
            text: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
            id: 3,
            title: 'news 3',
            date: new Date(),
            text: 'Lorem ipsum dolor sit amet consectetur'
        }
    ],
    newsToShowId: [1, 2, 3]
};
var newsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_news__WEBPACK_IMPORTED_MODULE_0__.FILTER_NEWS:
            var filteredNewsId = state.newsList.filter(function (news) {
                var title = news.title.toLowerCase();
                return title.includes(action.payload.filterValue);
            }).map(function (news) {
                return news.id;
            });
            return __assign(__assign({}, state), { newsToShowId: filteredNewsId });
        case _actions_news__WEBPACK_IMPORTED_MODULE_0__.CREATE_NEWS:
            console.log(action);
            return __assign(__assign({}, state), { newsToShowId: __spreadArrays(state.newsToShowId, [
                    state.newsList[state.newsList.length - 1].id + 1
                ]), newsList: __spreadArrays(state.newsList, [
                    __assign({ id: state.newsList[state.newsList.length - 1].id + 1 }, action.payload.news)
                ]) });
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newsReducer);


/***/ }),

/***/ "./redux/reducers/rootReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.ts ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modalReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalReducer */ "./redux/reducers/modalReducer.ts");
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userReducer */ "./redux/reducers/userReducer.ts");
/* harmony import */ var _newsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsReducer */ "./redux/reducers/newsReducer.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
;



var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
    modal: _modalReducer__WEBPACK_IMPORTED_MODULE_0__.default,
    user: _userReducer__WEBPACK_IMPORTED_MODULE_1__.default,
    news: _newsReducer__WEBPACK_IMPORTED_MODULE_2__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);


/***/ }),

/***/ "./redux/reducers/userReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/userReducer.ts ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user */ "./redux/actions/user.ts");
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

var initialState = {
    username: '',
    isLoginSuccess: null
};
var userReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_user__WEBPACK_IMPORTED_MODULE_0__.LOGIN_USER_SUCCESS:
            return __assign(__assign({}, state), { isLoginSuccess: true, username: action.payload.username });
        case _actions_user__WEBPACK_IMPORTED_MODULE_0__.LOGIN_USER_FAIL:
            return __assign(__assign({}, state), { isLoginSuccess: false });
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer);


/***/ }),

/***/ "./redux/sagas/rootSaga.ts":
/*!*********************************!*\
  !*** ./redux/sagas/rootSaga.ts ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ rootSaga
/* harmony export */ });
/* harmony import */ var _userLoginSaga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userLoginSaga */ "./redux/sagas/userLoginSaga.ts");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
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


function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([
                    (0,_userLoginSaga__WEBPACK_IMPORTED_MODULE_0__.default)()
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}


/***/ }),

/***/ "./redux/sagas/userLoginSaga.ts":
/*!**************************************!*\
  !*** ./redux/sagas/userLoginSaga.ts ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ userLoginSaga
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user */ "./redux/actions/user.ts");
/* harmony import */ var _api_userDatabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/userDatabase */ "./api/userDatabase.ts");
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



function userLoginAsync(action) {
    var response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_api_userDatabase__WEBPACK_IMPORTED_MODULE_2__.loginUser, {
                        username: action.payload.username,
                        password: action.payload.password
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions_user__WEBPACK_IMPORTED_MODULE_1__.loginUserSuccess)(response.username))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                e_1 = _a.sent();
                return [4 /*yield*/, (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions_user__WEBPACK_IMPORTED_MODULE_1__.loginUserFail)())];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function userLoginSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_actions_user__WEBPACK_IMPORTED_MODULE_1__.LOGIN_USER, userLoginAsync)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}


/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/rootReducer */ "./redux/reducers/rootReducer.ts");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _sagas_rootSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sagas/rootSaga */ "./redux/sagas/rootSaga.ts");
;



var sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_1__.default)();
var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_0__.default, (0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(sagaMiddleware));
sagaMiddleware.run(_sagas_rootSaga__WEBPACK_IMPORTED_MODULE_2__.default);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/App/styles/color.css":
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/App/styles/color.css ***!
  \********************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --font: #999b9d;\r\n  --header-bg: #181818;\r\n  --site-bg: #1f1f1f;\r\n  --primary-color: #ff5500;\r\n  --font-input-color: rgb(160, 160, 160);\r\n  --font-color: #ffffff;\r\n  --input-border-color: #404040;\r\n  --input-bg: #282828;\r\n}\r\n", "",{"version":3,"sources":["webpack://./components/App/styles/color.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,wBAAwB;EACxB,sCAAsC;EACtC,qBAAqB;EACrB,6BAA6B;EAC7B,mBAAmB;AACrB","sourcesContent":[":root {\r\n  --font: #999b9d;\r\n  --header-bg: #181818;\r\n  --site-bg: #1f1f1f;\r\n  --primary-color: #ff5500;\r\n  --font-input-color: rgb(160, 160, 160);\r\n  --font-color: #ffffff;\r\n  --input-border-color: #404040;\r\n  --input-bg: #282828;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/App/styles/fonts.css":
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/App/styles/fonts.css ***!
  \********************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtg2H68T.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtE2H68T.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtY2H68T.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvto2H68T.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvts2H68T.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtU2Hw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCp0y2knT.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCpQy2knT.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCpMy2knT.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCp8y2knT.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCp4y2knT.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCpAy2g.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n", "",{"version":3,"sources":["webpack://./components/App/styles/fonts.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,uIAAuI;EACvI,sFAAsF;AACxF;AACA,aAAa;AACb;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,uIAAuI;EACvI,4DAA4D;AAC9D;AACA,UAAU;AACV;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,uIAAuI;EACvI,0BAA0B;AAC5B;AACA,eAAe;AACf;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,uIAAuI;EACvI,gHAAgH;AAClH;AACA,cAAc;AACd;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,uIAAuI;EACvI,mHAAmH;AACrH;AACA,UAAU;AACV;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,qIAAqI;EACrI,yKAAyK;AAC3K;AACA,iBAAiB;AACjB;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,qIAAqI;EACrI,sFAAsF;AACxF;AACA,aAAa;AACb;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,qIAAqI;EACrI,4DAA4D;AAC9D;AACA,UAAU;AACV;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,qIAAqI;EACrI,0BAA0B;AAC5B;AACA,eAAe;AACf;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,qIAAqI;EACrI,gHAAgH;AAClH;AACA,cAAc;AACd;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,qIAAqI;EACrI,mHAAmH;AACrH;AACA,UAAU;AACV;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,mIAAmI;EACnI,yKAAyK;AAC3K","sourcesContent":["/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtg2H68T.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtE2H68T.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtY2H68T.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvto2H68T.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvts2H68T.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v12/6aez4K2oVqwIvtU2Hw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCp0y2knT.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCpQy2knT.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCpMy2knT.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCp8y2knT.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCp4y2knT.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCpAy2g.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/App/styles/grid.css":
/*!*******************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/App/styles/grid.css ***!
  \*******************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\r\n  width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n  .container {\r\n    width: 900px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .container {\r\n    width: 600px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .container {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n#root {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.app {\r\n  --footer-height: 60px;\r\n  --header-height: 60px;\r\n  --main-height: calc(100% - var(--footer-height) - var(--header-height));\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./components/App/styles/grid.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,uEAAuE;EACvE,WAAW;EACX,YAAY;AACd","sourcesContent":[".container {\r\n  width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n  .container {\r\n    width: 900px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .container {\r\n    width: 600px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .container {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n#root {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.app {\r\n  --footer-height: 60px;\r\n  --header-height: 60px;\r\n  --main-height: calc(100% - var(--footer-height) - var(--header-height));\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/App/styles/style.css":
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/App/styles/style.css ***!
  \********************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!./variables.css */ "../node_modules/css-loader/dist/cjs.js!./components/App/styles/variables.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!./color.css */ "../node_modules/css-loader/dist/cjs.js!./components/App/styles/color.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!./fonts.css */ "../node_modules/css-loader/dist/cjs.js!./components/App/styles/fonts.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!./grid.css */ "../node_modules/css-loader/dist/cjs.js!./components/App/styles/grid.css");
// Imports
;





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_3__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_4__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_5__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: Play, sans-serif;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.app {\r\n  background: var(--site-bg);\r\n  color: var(--font-color);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n.app a {\r\n  color: var(--font-color);\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n}\r\n\r\n.app input {\r\n  outline: none;\r\n}\r\n\r\n.btn {\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 15px;\r\n}\r\n\r\n.log.error {\r\n  background: rgba(255, 0, 0, 0.2);\r\n  border: 1px solid red;\r\n  padding: 15px;\r\n  margin: 15px 0;\r\n}\r\n\r\ninput {\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ntextarea {\r\n  color: var(--font-input-color);\r\n  background: var(--input-bg);\r\n  border: 1px solid var(--input-border-color);\r\n  padding: 8px 15px;\r\n  border-radius: 2px;\r\n  box-shadow: 1px 1px 5px 1px rgba(255, 255, 255, 0);\r\n  transition: box-shadow 0.2s ease;\r\n}\r\n\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus,\r\ntextarea {\r\n  color: #ffffff;\r\n  box-shadow: 1px 1px 10px 1px rgba(255, 255, 255, 0.3);\r\n}\r\n", "",{"version":3,"sources":["webpack://./components/App/styles/style.css"],"names":[],"mappings":"AAKA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,WAAW;EACX,aAAa;AACf;;AAEA;EACE,0BAA0B;EAC1B,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gCAAgC;EAChC,WAAW;EACX,YAAY;EACZ,eAAe;EACf,aAAa;AACf;;AAEA;EACE,gCAAgC;EAChC,qBAAqB;EACrB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,8BAA8B;EAC9B,2BAA2B;EAC3B,2CAA2C;EAC3C,iBAAiB;EACjB,kBAAkB;EAClB,kDAAkD;EAClD,gCAAgC;AAClC;;AAEA;;;EAGE,cAAc;EACd,qDAAqD;AACvD","sourcesContent":["@import \"./variables.css\";\r\n@import \"./color.css\";\r\n@import \"./fonts.css\";\r\n@import \"./grid.css\";\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: Play, sans-serif;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.app {\r\n  background: var(--site-bg);\r\n  color: var(--font-color);\r\n  font-size: var(--font-size);\r\n}\r\n\r\n.app a {\r\n  color: var(--font-color);\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n}\r\n\r\n.app input {\r\n  outline: none;\r\n}\r\n\r\n.btn {\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 15px;\r\n}\r\n\r\n.log.error {\r\n  background: rgba(255, 0, 0, 0.2);\r\n  border: 1px solid red;\r\n  padding: 15px;\r\n  margin: 15px 0;\r\n}\r\n\r\ninput {\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ntextarea {\r\n  color: var(--font-input-color);\r\n  background: var(--input-bg);\r\n  border: 1px solid var(--input-border-color);\r\n  padding: 8px 15px;\r\n  border-radius: 2px;\r\n  box-shadow: 1px 1px 5px 1px rgba(255, 255, 255, 0);\r\n  transition: box-shadow 0.2s ease;\r\n}\r\n\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus,\r\ntextarea {\r\n  color: #ffffff;\r\n  box-shadow: 1px 1px 10px 1px rgba(255, 255, 255, 0.3);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/App/styles/variables.css":
/*!************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/App/styles/variables.css ***!
  \************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --font-size: 14px;\r\n  --line-height: 1.4;\r\n}\r\n", "",{"version":3,"sources":["webpack://./components/App/styles/variables.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,kBAAkB;AACpB","sourcesContent":[":root {\r\n  --font-size: 14px;\r\n  --line-height: 1.4;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/Header/Header.css":
/*!*****************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/Header/Header.css ***!
  \*****************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\r\n  height: 60px;\r\n}\r\n\r\n.header__grid {\r\n  height: inherit;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.header__link {\r\n  margin-right: 15px;\r\n}\r\n\r\n.header__link:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.header__user-bar {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.header__user-msg {\r\n  margin-right: 15px;\r\n}\r\n\r\n.header__login {\r\n  background: transparent;\r\n  color: #fff;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 10px 15px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./components/Header/Header.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB","sourcesContent":[".header {\r\n  height: 60px;\r\n}\r\n\r\n.header__grid {\r\n  height: inherit;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.header__link {\r\n  margin-right: 15px;\r\n}\r\n\r\n.header__link:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.header__user-bar {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.header__user-msg {\r\n  margin-right: 15px;\r\n}\r\n\r\n.header__login {\r\n  background: transparent;\r\n  color: #fff;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 10px 15px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/Login/Login.css":
/*!***************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/Login/Login.css ***!
  \***************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".input {\r\n  position: relative;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.input:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.input__header {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.input__field[type=\"text\"],\r\n.input__field[type=\"password\"] {\r\n  color: var(--font-input-color);\r\n  background: var(--input-bg);\r\n  border: 1px solid var(--input-border-color);\r\n  padding: 8px 15px;\r\n  border-radius: 2px;\r\n  box-shadow: 1px 1px 5px 1px rgba(255, 255, 255, 0);\r\n  transition: box-shadow 0.2s ease;\r\n}\r\n\r\n.input__field[type=\"text\"]:focus,\r\n.input__field[type=\"password\"]:focus {\r\n  color: #ffffff;\r\n  box-shadow: 1px 1px 10px 1px rgba(255, 255, 255, 0.3);\r\n}\r\n", "",{"version":3,"sources":["webpack://./components/Login/Login.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,8BAA8B;EAC9B,2BAA2B;EAC3B,2CAA2C;EAC3C,iBAAiB;EACjB,kBAAkB;EAClB,kDAAkD;EAClD,gCAAgC;AAClC;;AAEA;;EAEE,cAAc;EACd,qDAAqD;AACvD","sourcesContent":[".input {\r\n  position: relative;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.input:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.input__header {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.input__field[type=\"text\"],\r\n.input__field[type=\"password\"] {\r\n  color: var(--font-input-color);\r\n  background: var(--input-bg);\r\n  border: 1px solid var(--input-border-color);\r\n  padding: 8px 15px;\r\n  border-radius: 2px;\r\n  box-shadow: 1px 1px 5px 1px rgba(255, 255, 255, 0);\r\n  transition: box-shadow 0.2s ease;\r\n}\r\n\r\n.input__field[type=\"text\"]:focus,\r\n.input__field[type=\"password\"]:focus {\r\n  color: #ffffff;\r\n  box-shadow: 1px 1px 10px 1px rgba(255, 255, 255, 0.3);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/Modal/Modal.css":
/*!***************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/Modal/Modal.css ***!
  \***************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 9999;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  visibility: visible;\r\n}\r\n\r\n.modal__header {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.modal__content {\r\n  margin: 30px auto;\r\n  max-width: 400px;\r\n}\r\n\r\n.modal__close-btn {\r\n  padding: 15px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./components/Modal/Modal.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf","sourcesContent":[".modal {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 9999;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  visibility: visible;\r\n}\r\n\r\n.modal__header {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.modal__content {\r\n  margin: 30px auto;\r\n  max-width: 400px;\r\n}\r\n\r\n.modal__close-btn {\r\n  padding: 15px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/News/News.css":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/News/News.css ***!
  \*************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".news-section__list {\r\n  margin-top: 15px;\r\n}\r\n\r\n.news-section__create {\r\n  margin-top: 15px;\r\n}\r\n\r\n.news {\r\n  margin-top: 15px;\r\n  padding: 20px;\r\n  border: 1px solid white;\r\n  background: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.news__title {\r\n  margin-right: 15px;\r\n}\r\n\r\n.news__header {\r\n  display: flex;\r\n}\r\n", "",{"version":3,"sources":["webpack://./components/News/News.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf","sourcesContent":[".news-section__list {\r\n  margin-top: 15px;\r\n}\r\n\r\n.news-section__create {\r\n  margin-top: 15px;\r\n}\r\n\r\n.news {\r\n  margin-top: 15px;\r\n  padding: 20px;\r\n  border: 1px solid white;\r\n  background: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.news__title {\r\n  margin-right: 15px;\r\n}\r\n\r\n.news__header {\r\n  display: flex;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./components/App/styles/style.css":
/*!*****************************************!*\
  !*** ./components/App/styles/style.css ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!./components/App/styles/style.css");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./components/Header/Header.css":
/*!**************************************!*\
  !*** ./components/Header/Header.css ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Header.css */ "../node_modules/css-loader/dist/cjs.js!./components/Header/Header.css");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./components/Login/Login.css":
/*!************************************!*\
  !*** ./components/Login/Login.css ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Login.css */ "../node_modules/css-loader/dist/cjs.js!./components/Login/Login.css");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Login_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Login_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./components/Modal/Modal.css":
/*!************************************!*\
  !*** ./components/Modal/Modal.css ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Modal.css */ "../node_modules/css-loader/dist/cjs.js!./components/Modal/Modal.css");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Modal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Modal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./components/News/News.css":
/*!**********************************!*\
  !*** ./components/News/News.css ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_News_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./News.css */ "../node_modules/css-loader/dist/cjs.js!./components/News/News.css");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_News_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_News_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./index.tsx","vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-e5c417"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvdXNlckRhdGFiYXNlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdzQ3JlYXRlL05ld3NDcmVhdGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3cy9OZXdzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ld3MvTmV3c0ZpbHRlci9OZXdzRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ld3MvTmV3c0l0ZW0vTmV3c0l0ZW0udHN4Iiwid2VicGFjazovLy8uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL21vZGFsLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvbmV3cy50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvbW9kYWxSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL25ld3NSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3VzZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL3Jvb3RTYWdhLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL3VzZXJMb2dpblNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAvc3R5bGVzL2NvbG9yLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC9zdHlsZXMvZm9udHMuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwL3N0eWxlcy9ncmlkLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwL3N0eWxlcy92YXJpYWJsZXMuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9Nb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdzL05ld3MuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwL3N0eWxlcy9zdHlsZS5jc3M/Njc4MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzP2M4YjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5jc3M/YjNiNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsL01vZGFsLmNzcz81YjY0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3cy9OZXdzLmNzcz81YzdjIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU0sWUFBWSxHQUFHO0lBQzFCO1FBQ0UsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLFVBQVU7S0FDckI7SUFDRDtRQUNFLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxXQUFXO0tBQ3RCO0NBQ0Y7QUFFTSxTQUFTLFNBQVMsQ0FBQyxhQUFhO0lBQ3JDLElBQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxhQUFhLENBQUMsUUFBUTtlQUMxQyxJQUFJLENBQUMsUUFBUSxLQUFLLGFBQWEsQ0FBQyxRQUFRO0lBQy9DLENBQUMsQ0FBQztJQUVGLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ2Y7U0FBTTtRQUNMLE1BQU0sS0FBSyxFQUFFO0tBQ2Q7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkQsQ0FBK0I7QUFDTztBQUNIO0FBQ0g7QUFDQTtBQUNrQjtBQUNTO0FBQy9CO0FBRTVCLElBQU0sR0FBRyxHQUFHO0lBQ1YsT0FBTyxDQUNMLDBEQUFLLFNBQVMsRUFBQyxLQUFLO1FBQ2xCLGlEQUFDLG1EQUFNLE9BQUc7UUFDVixpREFBQyxpREFBSyxPQUFHO1FBQ1QsMkRBQU0sU0FBUyxFQUFDLFNBQVM7WUFDdkIsMERBQUssU0FBUyxFQUFDLFdBQVc7Z0JBQ3hCLGlEQUFDLG9EQUFNO29CQUNMLGlEQUFDLG1EQUFLLElBQUMsS0FBSyxRQUFD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ZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyRGF0YWJhc2UgPSBbXHJcbiAge1xyXG4gICAgdXNlcm5hbWU6ICd1c2VyJyxcclxuICAgIHBhc3N3b3JkOiAndXNlcjEyMzQnXHJcbiAgfSxcclxuICB7XHJcbiAgICB1c2VybmFtZTogJ2FkbWluJyxcclxuICAgIHBhc3N3b3JkOiAnYWRtaW4xMjM0J1xyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luVXNlcih1c2VyTG9naW5JbmZvKSB7XHJcbiAgY29uc3QgdXNlciA9IHVzZXJEYXRhYmFzZS5maWx0ZXIoKHVzZXIpID0+IHtcclxuICAgIHJldHVybiB1c2VyLnVzZXJuYW1lID09PSB1c2VyTG9naW5JbmZvLnVzZXJuYW1lIFxyXG4gICAgICAmJiB1c2VyLnBhc3N3b3JkID09PSB1c2VyTG9naW5JbmZvLnBhc3N3b3JkIFxyXG4gIH0pXHJcblxyXG4gIGlmICh1c2VyWzBdKSB7XHJcbiAgICByZXR1cm4gdXNlclswXVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBFcnJvcigpXHJcbiAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwvTW9kYWwnO1xyXG5pbXBvcnQgTmV3cyBmcm9tICcuLi9OZXdzL05ld3MnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9Ib21lL0hvbWUnO1xyXG5pbXBvcnQgTmV3c0NyZWF0ZSBmcm9tICcuLi9OZXdzQ3JlYXRlL05ld3NDcmVhdGUnO1xyXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPE1vZGFsIC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbmV3c1wiIGNvbXBvbmVudD17TmV3c30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfS8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL25ld3MvY3JlYXRlXCIgY29tcG9uZW50PXtOZXdzQ3JlYXRlfS8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIHJlbmRlcj17KCkgPT4gKDxSZWRpcmVjdCB0bz1cIi9cIi8+KX0vPlxyXG4gICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL0hlYWRlci5jc3MnO1xyXG5pbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL21vZGFsJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW50ZXJmYWNlIElIZWFkZXJQcm9wcyB7XHJcbiAgc2hvd01vZGFsOiBGdW5jdGlvbixcclxufVxyXG5jb25zdCBIZWFkZXIgPSAoe3Nob3dNb2RhbH06IElIZWFkZXJQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoZWFkZXJfX2dyaWRcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2XCI+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmtcIiB0bz1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19saW5rXCIgdG89XCIvbmV3c1wiPk5ld3M8L0xpbms+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3VzZXItYmFyXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyBzaG93TW9kYWwoKSB9fSBjbGFzc05hbWU9XCJidG4gaGVhZGVyX19sb2dpblwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzaG93TW9kYWw6ICgpID0+IGRpc3BhdGNoKHNob3dNb2RhbCgpKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWRlcik7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmludGVyZmFjZSBJSG9tZVByb3BzIHtcclxuICB1c2VybmFtZTogU3RyaW5nXHJcbn1cclxuY29uc3QgSG9tZSA9ICh7dXNlcm5hbWV9OiBJSG9tZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgdXNlck1zZyA9IHVzZXJuYW1lID8gYEhlbGxvLCAke3VzZXJuYW1lfWAgOiAnSGVsbG8sIGd1ZXN0J1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdXNlci1tc2dcIj5cclxuICAgICAgeyB1c2VyTXNnIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXJuYW1lOiBzdGF0ZS51c2VyLnVzZXJuYW1lXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSG9tZSk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbG9naW5Vc2VyLCBJVXNlckxvZ2luSW5mbyB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAnLi9Mb2dpbi5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIElMb2dpblByb3BzIHtcclxuICBsb2dpblVzZXI6IEZ1bmN0aW9uLFxyXG4gIGlzTG9naW5TdWNjZXNzOiBCb29sZWFuXHJcbn1cclxuY29uc3QgTG9naW4gPSAoe2xvZ2luVXNlciwgaXNMb2dpblN1Y2Nlc3N9OiBJTG9naW5Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9naW5Vc2VyKHtcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9nVXNlck5vdEZvdW5kVmlldyA9IGlzTG9naW5TdWNjZXNzID09PSBmYWxzZSA/IFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2cgZXJyb3JcIj5cclxuICAgICAgVXNlciBub3QgZm91bmQsIHBsZWFzZSBjaGVjayB1c2VybmFtZSBvciBwYXNzd29yZFxyXG4gICAgPC9kaXY+IDogPD48Lz47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgIDxoMj5Mb2dpbjwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5fX2xvZ1wiPlxyXG4gICAgICAgIHtsb2dVc2VyTm90Rm91bmRWaWV3fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9XCJsb2dpbl9fZm9ybSBmb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dF9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRfX3RpdGxlXCI+VXNlcm5hbWU8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dF9fbWFpblwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e1xyXG4gICAgICAgICAgICAgIChldmVudCkgPT4geyBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUudHJpbSgpKX0gfSBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0X19maWVsZFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUuLi5cIiB2YWx1ZT17dXNlcm5hbWV9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X190aXRsZVwiPlBhc3N3b3JkPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRfX21haW5cIj5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgICAoZXZlbnQpID0+IHsgc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKSl9IH0gXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiaW5wdXRfX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZC4uLlwiIHZhbHVlPXtwYXNzd29yZH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpc0xvZ2luU3VjY2Vzczogc3RhdGUudXNlci5pc0xvZ2luU3VjY2Vzc1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvZ2luVXNlcjogKGxvZ2luVXNlckluZm86IElVc2VyTG9naW5JbmZvKSA9PiBkaXNwYXRjaChsb2dpblVzZXIobG9naW5Vc2VySW5mbykpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbik7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vTW9kYWwuY3NzJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luL0xvZ2luJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaGlkZU1vZGFsIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9tb2RhbCc7XHJcblxyXG5pbnRlcmZhY2UgSU1vZGFsUHJvcHMge1xyXG4gIGlzTW9kYWxTaG93bjogYm9vbGVhbixcclxuICBoaWRlTW9kYWw6IEZ1bmN0aW9uLFxyXG4gIGlzTG9naW5TdWNjZXNzOiBCb29sZWFuXHJcbn1cclxuY29uc3QgTW9kYWwgPSAoe2lzTW9kYWxTaG93biwgaGlkZU1vZGFsLCBpc0xvZ2luU3VjY2Vzc306IElNb2RhbFByb3BzKSA9PiB7XHJcbiAgaWYgKGlzTW9kYWxTaG93biAmJiAhaXNMb2dpblN1Y2Nlc3MpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgaGlkZU1vZGFsKCkgfX0gY2xhc3NOYW1lPVwiYnRuIG1vZGFsX19jbG9zZS1idG5cIj5YPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19tYWluXCI+XHJcbiAgICAgICAgICAgICAgPExvZ2luIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PjwvPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTW9kYWxTaG93bjogc3RhdGUubW9kYWwuaXNTaG93bixcclxuICAgIGlzTG9naW5TdWNjZXNzOiBzdGF0ZS51c2VyLmlzTG9naW5TdWNjZXNzXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaGlkZU1vZGFsOiAoKSA9PiBkaXNwYXRjaChoaWRlTW9kYWwoKSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vZGFsKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZU5ld3MgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL25ld3MnO1xyXG5cclxuaW50ZXJmYWNlIElOZXdzQ3JlYXRlUHJvcHMge1xyXG4gIGNyZWF0ZU5ld3M6IEZ1bmN0aW9uXHJcbn1cclxuY29uc3QgTmV3c0NyZWF0ZSA9ICh7IGNyZWF0ZU5ld3MgfTogSU5ld3NDcmVhdGVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNyZWF0ZU5ld3Moe1xyXG4gICAgICB0aXRsZTogdGl0bGUudHJpbSgpLFxyXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICB0ZXh0OiB0ZXh0LnRyaW0oKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtY3JlYXRlXCI+XHJcbiAgICAgIDxoMj5DcmVhdGUgbmV3czwvaDI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICBpZD1cInRpdGxlXCIgXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiIFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCkpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgbmFtZT1cInRleHRcIiBcclxuICAgICAgICAgICAgaWQ9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIGNvbHM9ezMwfSBcclxuICAgICAgICAgICAgcm93cz17MTB9IFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRleHQuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VGV4dChldmVudC50YXJnZXQudmFsdWUudHJpbSgpKVxyXG4gICAgICAgICAgICB9fT4gICBcclxuICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlXCIvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gIClcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNyZWF0ZU5ld3M6IChuZXdzKSA9PiBkaXNwYXRjaChjcmVhdGVOZXdzKG5ld3MpKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5ld3NDcmVhdGUpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5ld3NGaWx0ZXIgZnJvbSAnLi9OZXdzRmlsdGVyL05ld3NGaWx0ZXInO1xyXG5pbXBvcnQgTmV3c0l0ZW0gZnJvbSAnLi9OZXdzSXRlbS9OZXdzSXRlbSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgSU5ld3MgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL25ld3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgJy4vTmV3cy5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIElOZXdzUHJvcHMge1xyXG4gIG5ld3NJZExpc3Q6IG51bWJlcltdLFxyXG4gIG5ld3NMaXN0OiBJTmV3c1tdXHJcbn1cclxuY29uc3QgTmV3cyA9ICh7bmV3c0lkTGlzdCwgbmV3c0xpc3R9OiBJTmV3c1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgbmV3c0xpc3RWaWV3ID0gbmV3c0xpc3QuZmlsdGVyKChuZXdzOiBJTmV3cykgPT4ge1xyXG4gICAgcmV0dXJuIG5ld3NJZExpc3QuaW5jbHVkZXMobmV3cy5pZCk7XHJcbiAgfSkubWFwKChuZXdzOiBJTmV3cykgPT4ge1xyXG4gICAgcmV0dXJuIDxOZXdzSXRlbSBrZXk9e25ld3MuaWR9IGRhdGE9e25ld3N9IC8+XHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLXNlY3Rpb25cIj5cclxuICAgICAgPGgyPk5ld3M8L2gyPlxyXG4gICAgICA8TmV3c0ZpbHRlciAvPlxyXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gbmV3cy1zZWN0aW9uX19jcmVhdGVcIiB0bz1cIi9uZXdzL2NyZWF0ZVwiPkNyZWF0ZSBuZXdzPC9MaW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3Mtc2VjdGlvbl9fbGlzdFwiPlxyXG4gICAgICAgIHtuZXdzTGlzdFZpZXd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbmV3c0lkTGlzdDogc3RhdGUubmV3cy5uZXdzVG9TaG93SWQsXHJcbiAgICBuZXdzTGlzdDogc3RhdGUubmV3cy5uZXdzTGlzdFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE5ld3MpO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGZpbHRlck5ld3MgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL25ld3MnO1xyXG5cclxuaW50ZXJmYWNlIElOZXdzRmlsdGVyUHJvcHMge1xyXG4gIGZpbHRlck5ld3M6IEZ1bmN0aW9uXHJcbn1cclxuY29uc3QgTmV3c0ZpbHRlciA9ICh7ZmlsdGVyTmV3c306IElOZXdzRmlsdGVyUHJvcHMpID0+IHtcclxuICBjb25zdCBbZmlsdGVyVmFsdWUsIHNldEZpbHRlclZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgb25GaWx0ZXJDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEZpbHRlclZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBmaWx0ZXJOZXdzKGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlclwiPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgICAgb25DaGFuZ2U9e29uRmlsdGVyQ2hhbmdlfSBcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyX19pbnB1dFwiIFxyXG4gICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5ld3MgdGl0bGUuLi5cIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZmlsdGVyTmV3czogKGZpbHRlclZhbHVlOiBTdHJpbmcpID0+IGRpc3BhdGNoKGZpbHRlck5ld3MoZmlsdGVyVmFsdWUpKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5ld3NGaWx0ZXIpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSU5ld3MgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL25ld3MnO1xyXG5cclxuaW50ZXJmYWNlIElOZXdzSXRlbVByb3BzIHtcclxuICBkYXRhOiBJTmV3cyxcclxufVxyXG5jb25zdCBOZXdzSXRlbSA9ICh7ZGF0YX06IElOZXdzSXRlbVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfX2hlYWRlclwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJuZXdzX190aXRsZVwiPntkYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgPHRpbWUgY2xhc3NOYW1lPVwibmV3c19fZGF0ZVwiPntkYXRhLmRhdGUudG9EYXRlU3RyaW5nKCl9PC90aW1lPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX19ib2R5XCI+XHJcbiAgICAgICAge2RhdGEudGV4dH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzSXRlbTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC9BcHAnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPEFwcC8+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIDwvQnJvd3NlclJvdXRlcj4sIFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JylcclxuKTsiLCJleHBvcnQgY29uc3QgU0hPV19NT0RBTCA9ICdTSE9XX01PREFMJztcclxuZXhwb3J0IGNvbnN0IEhJREVfTU9EQUwgPSAnSElERV9NT0RBTCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTaG93TW9kYWxBY3Rpb24ge1xyXG4gIHR5cGU6IHR5cGVvZiBTSE9XX01PREFMXHJcbn1cclxuZXhwb3J0IGNvbnN0IHNob3dNb2RhbCA9ICgpOiBJU2hvd01vZGFsQWN0aW9uID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0hPV19NT0RBTFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSGlkZU1vZGFsQWN0aW9uIHtcclxuICB0eXBlOiB0eXBlb2YgSElERV9NT0RBTFxyXG59XHJcbmV4cG9ydCBjb25zdCBoaWRlTW9kYWwgPSAoKTogSUhpZGVNb2RhbEFjdGlvbiA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEhJREVfTU9EQUxcclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgRklMVEVSX05FV1MgPSAnRklMVEVSX05FV1MnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX05FV1MgPSAnQ1JFQVRFX05FV1MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTmV3cyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogU3RyaW5nO1xyXG4gIGRhdGU6IERhdGU7XHJcbiAgdGV4dDogU3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElGaWx0ZXJOZXdzQWN0aW9uIHtcclxuICB0eXBlOiB0eXBlb2YgRklMVEVSX05FV1MsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZmlsdGVyVmFsdWU6IFN0cmluZ1xyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgZmlsdGVyTmV3cyA9IChmaWx0ZXJWYWx1ZTogU3RyaW5nKTogSUZpbHRlck5ld3NBY3Rpb24gPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBGSUxURVJfTkVXUyxcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgZmlsdGVyVmFsdWVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNyZWF0ZU5ld3NBY3Rpb24ge1xyXG4gIHR5cGU6IHR5cGVvZiBDUkVBVEVfTkVXUyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBuZXdzOiBJTmV3c1xyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3cyA9IChuZXdzOiBJTmV3cyk6IElDcmVhdGVOZXdzQWN0aW9uID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ1JFQVRFX05FV1MsXHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgIG5ld3NcclxuICAgIH1cclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgTE9HSU5fVVNFUiA9ICdMT0dJTl9VU0VSJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX1VTRVJfU1VDQ0VTUyA9ICdMT0dJTl9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fVVNFUl9GQUlMID0gJ0xPR0lOX1VTRVJfRkFJTCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyTG9naW5BY3Rpb24ge1xyXG4gIHR5cGU6IHR5cGVvZiBMT0dJTl9VU0VSLFxyXG4gIHBheWxvYWQ6IElVc2VyTG9naW5JbmZvXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJVXNlckxvZ2luSW5mbyB7XHJcbiAgdXNlcm5hbWU6IFN0cmluZztcclxuICBwYXNzd29yZDogU3RyaW5nO1xyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSAodXNlckxvZ2luSW5mbzogSVVzZXJMb2dpbkluZm8pOiBJVXNlckxvZ2luQWN0aW9uID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HSU5fVVNFUixcclxuICAgIHBheWxvYWQ6IHVzZXJMb2dpbkluZm9cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJMb2dpblN1Y2Nlc3NBY3Rpb24ge1xyXG4gIHR5cGU6IHR5cGVvZiBMT0dJTl9VU0VSX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgdXNlcm5hbWU6IFN0cmluZ1xyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyU3VjY2VzcyA9ICh1c2VybmFtZTogU3RyaW5nKTogSVVzZXJMb2dpblN1Y2Nlc3NBY3Rpb24gPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dJTl9VU0VSX1NVQ0NFU1MsXHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyTG9naW5GYWlsQWN0aW9uIHtcclxuICB0eXBlOiB0eXBlb2YgTE9HSU5fVVNFUl9GQUlMLFxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpblVzZXJGYWlsID0gKCk6IElVc2VyTG9naW5GYWlsQWN0aW9uID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HSU5fVVNFUl9GQUlMLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSVVzZXJBY3Rpb25UeXBlcyA9IFxyXG4gIElVc2VyTG9naW5BY3Rpb24gfCBcclxuICBJVXNlckxvZ2luU3VjY2Vzc0FjdGlvbiB8XHJcbiAgSVVzZXJMb2dpbkZhaWxBY3Rpb247IiwiaW1wb3J0IHsgU0hPV19NT0RBTCwgSElERV9NT0RBTCB9IGZyb20gXCIuLi9hY3Rpb25zL21vZGFsXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNTaG93bjogZmFsc2VcclxufVxyXG5cclxuY29uc3QgbW9kYWxSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNIT1dfTU9EQUw6IFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2hvd246IHRydWVcclxuICAgICAgfVxyXG4gICAgY2FzZSBISURFX01PREFMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2hvd246IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vZGFsUmVkdWNlcjsiLCJpbXBvcnQgeyBGSUxURVJfTkVXUywgSU5ld3MsIENSRUFURV9ORVdTIH0gZnJvbSAnLi4vYWN0aW9ucy9uZXdzJztcclxuXHJcbmludGVyZmFjZSBJTmV3c1JlZHVjZXJJbml0aWFsU3RhdGUge1xyXG4gIG5ld3NMaXN0OiBJTmV3c1tdLFxyXG4gIG5ld3NUb1Nob3dJZDogbnVtYmVyW11cclxufVxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbmV3c0xpc3Q6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHRpdGxlOiAnbmV3cyAxJyxcclxuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgdGV4dDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHRpdGxlOiAnbmV3cyAyJyxcclxuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgdGV4dDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIHRpdGxlOiAnbmV3cyAzJyxcclxuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgdGV4dDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyJ1xyXG4gICAgfVxyXG4gIF0sXHJcbiAgbmV3c1RvU2hvd0lkOiBbIDEsIDIsIDMgXVxyXG59XHJcbmNvbnN0IG5ld3NSZWR1Y2VyID0gKHN0YXRlOiBJTmV3c1JlZHVjZXJJbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbik6IElOZXdzUmVkdWNlckluaXRpYWxTdGF0ZSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBGSUxURVJfTkVXUzpcclxuICAgICAgY29uc3QgZmlsdGVyZWROZXdzSWQ6IG51bWJlcltdID0gc3RhdGUubmV3c0xpc3QuZmlsdGVyKChuZXdzOiBJTmV3cykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gbmV3cy50aXRsZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiB0aXRsZS5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC5maWx0ZXJWYWx1ZSlcclxuICAgICAgfSkubWFwKChuZXdzKTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3cy5pZFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5ld3NUb1Nob3dJZDogZmlsdGVyZWROZXdzSWRcclxuICAgICAgfVxyXG4gICAgY2FzZSBDUkVBVEVfTkVXUzpcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5ld3NUb1Nob3dJZDogW1xyXG4gICAgICAgICAgLi4uc3RhdGUubmV3c1RvU2hvd0lkLFxyXG4gICAgICAgICAgc3RhdGUubmV3c0xpc3Rbc3RhdGUubmV3c0xpc3QubGVuZ3RoIC0gMV0uaWQgKyAxXHJcbiAgICAgICAgXSxcclxuICAgICAgICBuZXdzTGlzdDogW1xyXG4gICAgICAgICAgLi4uc3RhdGUubmV3c0xpc3QsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBzdGF0ZS5uZXdzTGlzdFtzdGF0ZS5uZXdzTGlzdC5sZW5ndGggLSAxXS5pZCArIDEsXHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLm5ld3NcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6IFxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdzUmVkdWNlcjsiLCJpbXBvcnQgbW9kYWxSZWR1Y2VyIGZyb20gJy4vbW9kYWxSZWR1Y2VyJztcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlclJlZHVjZXInO1xyXG5pbXBvcnQgbmV3c1JlZHVjZXIgZnJvbSAnLi9uZXdzUmVkdWNlcic7XHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgbW9kYWw6IG1vZGFsUmVkdWNlcixcclxuICB1c2VyOiB1c2VyUmVkdWNlcixcclxuICBuZXdzOiBuZXdzUmVkdWNlclxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHsgSVVzZXJBY3Rpb25UeXBlcywgTE9HSU5fVVNFUl9TVUNDRVNTLCBMT0dJTl9VU0VSX0ZBSUwgfSBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xyXG5cclxuaW50ZXJmYWNlIElVc2VyUmVkdWNlckluaXRpYWxTdGF0ZSB7XHJcbiAgdXNlcm5hbWU6IFN0cmluZztcclxuICBpc0xvZ2luU3VjY2VzczogQm9vbGVhbiB8IG51bGw7XHJcbn1cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJVXNlclJlZHVjZXJJbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcm5hbWU6ICcnLFxyXG4gIGlzTG9naW5TdWNjZXNzOiBudWxsXHJcbn1cclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlOiBJVXNlclJlZHVjZXJJbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogSVVzZXJBY3Rpb25UeXBlcykgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9HSU5fVVNFUl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9naW5TdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHVzZXJuYW1lOiBhY3Rpb24ucGF5bG9hZC51c2VybmFtZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBMT0dJTl9VU0VSX0ZBSUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dpblN1Y2Nlc3M6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6IFxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjsiLCJpbXBvcnQgdXNlckxvZ2luU2FnYSBmcm9tICcuL3VzZXJMb2dpblNhZ2EnO1xyXG5pbXBvcnQgeyBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICB1c2VyTG9naW5TYWdhKClcclxuICBdKVxyXG59IiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgY2FsbCwgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgTE9HSU5fVVNFUiwgbG9naW5Vc2VyU3VjY2VzcywgSVVzZXJMb2dpbkFjdGlvbiwgbG9naW5Vc2VyRmFpbCB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcbmltcG9ydCB7IGxvZ2luVXNlciB9IGZyb20gJy4uLy4uL2FwaS91c2VyRGF0YWJhc2UnO1xyXG5cclxuZnVuY3Rpb24qIHVzZXJMb2dpbkFzeW5jKGFjdGlvbjogSVVzZXJMb2dpbkFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9naW5Vc2VyLCB7IFxyXG4gICAgICB1c2VybmFtZTogYWN0aW9uLnBheWxvYWQudXNlcm5hbWUsIFxyXG4gICAgICBwYXNzd29yZDogYWN0aW9uLnBheWxvYWQucGFzc3dvcmQgfSk7XHJcbiAgICB5aWVsZCBwdXQobG9naW5Vc2VyU3VjY2VzcyhyZXNwb25zZS51c2VybmFtZSkpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgeWllbGQgcHV0KGxvZ2luVXNlckZhaWwoKSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyTG9naW5TYWdhKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HSU5fVVNFUiwgdXNlckxvZ2luQXN5bmMpXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vc2FnYXMvcm9vdFNhZ2EnO1xyXG5cclxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKTtcclxuc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1mb250OiAjOTk5YjlkO1xcclxcbiAgLS1oZWFkZXItYmc6ICMxODE4MTg7XFxyXFxuICAtLXNpdGUtYmc6ICMxZjFmMWY7XFxyXFxuICAtLXByaW1hcnktY29sb3I6ICNmZjU1MDA7XFxyXFxuICAtLWZvbnQtaW5wdXQtY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcXHJcXG4gIC0tZm9udC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIC0taW5wdXQtYm9yZGVyLWNvbG9yOiAjNDA0MDQwO1xcclxcbiAgLS1pbnB1dC1iZzogIzI4MjgyODtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY29tcG9uZW50cy9BcHAvc3R5bGVzL2NvbG9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixzQ0FBc0M7RUFDdEMscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1mb250OiAjOTk5YjlkO1xcclxcbiAgLS1oZWFkZXItYmc6ICMxODE4MTg7XFxyXFxuICAtLXNpdGUtYmc6ICMxZjFmMWY7XFxyXFxuICAtLXByaW1hcnktY29sb3I6ICNmZjU1MDA7XFxyXFxuICAtLWZvbnQtaW5wdXQtY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcXHJcXG4gIC0tZm9udC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIC0taW5wdXQtYm9yZGVyLWNvbG9yOiAjNDA0MDQwO1xcclxcbiAgLS1pbnB1dC1iZzogIzI4MjgyODtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogY3lyaWxsaWMtZXh0ICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgUmVndWxhcicpLCBsb2NhbCgnUGxheS1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlejRLMm9WcXdJdnRnMkg2OFQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xcclxcbn1cXHJcXG4vKiBjeXJpbGxpYyAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQbGF5JztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IGxvY2FsKCdQbGF5IFJlZ3VsYXInKSwgbG9jYWwoJ1BsYXktUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3BsYXkvdjEyLzZhZXo0SzJvVnF3SXZ0RTJINjhULndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxuICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XFxyXFxufVxcclxcbi8qIGdyZWVrICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgUmVndWxhcicpLCBsb2NhbCgnUGxheS1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlejRLMm9WcXdJdnRZMkg2OFQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xcclxcbn1cXHJcXG4vKiB2aWV0bmFtZXNlICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgUmVndWxhcicpLCBsb2NhbCgnUGxheS1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlejRLMm9WcXdJdnRvMkg2OFQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XFxyXFxufVxcclxcbi8qIGxhdGluLWV4dCAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQbGF5JztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IGxvY2FsKCdQbGF5IFJlZ3VsYXInKSwgbG9jYWwoJ1BsYXktUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3BsYXkvdjEyLzZhZXo0SzJvVnF3SXZ0czJINjhULndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxuICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xcclxcbn1cXHJcXG4vKiBsYXRpbiAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQbGF5JztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IGxvY2FsKCdQbGF5IFJlZ3VsYXInKSwgbG9jYWwoJ1BsYXktUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3BsYXkvdjEyLzZhZXo0SzJvVnF3SXZ0VTJIdy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcclxcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcXHJcXG59XFxyXFxuLyogY3lyaWxsaWMtZXh0ICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgQm9sZCcpLCBsb2NhbCgnUGxheS1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlODRLMm9WcXdJdG00VENwMHkya25ULndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxuICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcXHJcXG59XFxyXFxuLyogY3lyaWxsaWMgKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGxheSc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgc3JjOiBsb2NhbCgnUGxheSBCb2xkJyksIGxvY2FsKCdQbGF5LUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9wbGF5L3YxMi82YWU4NEsyb1Zxd0l0bTRUQ3BReTJrblQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcXHJcXG59XFxyXFxuLyogZ3JlZWsgKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGxheSc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgc3JjOiBsb2NhbCgnUGxheSBCb2xkJyksIGxvY2FsKCdQbGF5LUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9wbGF5L3YxMi82YWU4NEsyb1Zxd0l0bTRUQ3BNeTJrblQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xcclxcbn1cXHJcXG4vKiB2aWV0bmFtZXNlICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgQm9sZCcpLCBsb2NhbCgnUGxheS1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlODRLMm9WcXdJdG00VENwOHkya25ULndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxuICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xcclxcbn1cXHJcXG4vKiBsYXRpbi1leHQgKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGxheSc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgc3JjOiBsb2NhbCgnUGxheSBCb2xkJyksIGxvY2FsKCdQbGF5LUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9wbGF5L3YxMi82YWU4NEsyb1Zxd0l0bTRUQ3A0eTJrblQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XFxyXFxufVxcclxcbi8qIGxhdGluICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgQm9sZCcpLCBsb2NhbCgnUGxheS1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlODRLMm9WcXdJdG00VENwQXkyZy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcclxcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY29tcG9uZW50cy9BcHAvc3R5bGVzL2ZvbnRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQkFBaUI7QUFDakI7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1SUFBdUk7RUFDdkksc0ZBQXNGO0FBQ3hGO0FBQ0EsYUFBYTtBQUNiO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUlBQXVJO0VBQ3ZJLDREQUE0RDtBQUM5RDtBQUNBLFVBQVU7QUFDVjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVJQUF1STtFQUN2SSwwQkFBMEI7QUFDNUI7QUFDQSxlQUFlO0FBQ2Y7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1SUFBdUk7RUFDdkksZ0hBQWdIO0FBQ2xIO0FBQ0EsY0FBYztBQUNkO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUlBQXVJO0VBQ3ZJLG1IQUFtSDtBQUNySDtBQUNBLFVBQVU7QUFDVjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFJQUFxSTtFQUNySSx5S0FBeUs7QUFDM0s7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxSUFBcUk7RUFDckksc0ZBQXNGO0FBQ3hGO0FBQ0EsYUFBYTtBQUNiO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUlBQXFJO0VBQ3JJLDREQUE0RDtBQUM5RDtBQUNBLFVBQVU7QUFDVjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFJQUFxSTtFQUNySSwwQkFBMEI7QUFDNUI7QUFDQSxlQUFlO0FBQ2Y7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxSUFBcUk7RUFDckksZ0hBQWdIO0FBQ2xIO0FBQ0EsY0FBYztBQUNkO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUlBQXFJO0VBQ3JJLG1IQUFtSDtBQUNySDtBQUNBLFVBQVU7QUFDVjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1JQUFtSTtFQUNuSSx5S0FBeUs7QUFDM0tcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY3lyaWxsaWMtZXh0ICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgUmVndWxhcicpLCBsb2NhbCgnUGxheS1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlejRLMm9WcXdJdnRnMkg2OFQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xcclxcbn1cXHJcXG4vKiBjeXJpbGxpYyAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQbGF5JztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IGxvY2FsKCdQbGF5IFJlZ3VsYXInKSwgbG9jYWwoJ1BsYXktUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3BsYXkvdjEyLzZhZXo0SzJvVnF3SXZ0RTJINjhULndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxuICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XFxyXFxufVxcclxcbi8qIGdyZWVrICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgUmVndWxhcicpLCBsb2NhbCgnUGxheS1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlejRLMm9WcXdJdnRZMkg2OFQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xcclxcbn1cXHJcXG4vKiB2aWV0bmFtZXNlICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgUmVndWxhcicpLCBsb2NhbCgnUGxheS1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlejRLMm9WcXdJdnRvMkg2OFQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XFxyXFxufVxcclxcbi8qIGxhdGluLWV4dCAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQbGF5JztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IGxvY2FsKCdQbGF5IFJlZ3VsYXInKSwgbG9jYWwoJ1BsYXktUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3BsYXkvdjEyLzZhZXo0SzJvVnF3SXZ0czJINjhULndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxuICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xcclxcbn1cXHJcXG4vKiBsYXRpbiAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQbGF5JztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBzcmM6IGxvY2FsKCdQbGF5IFJlZ3VsYXInKSwgbG9jYWwoJ1BsYXktUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3BsYXkvdjEyLzZhZXo0SzJvVnF3SXZ0VTJIdy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcclxcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcXHJcXG59XFxyXFxuLyogY3lyaWxsaWMtZXh0ICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgQm9sZCcpLCBsb2NhbCgnUGxheS1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlODRLMm9WcXdJdG00VENwMHkya25ULndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxuICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcXHJcXG59XFxyXFxuLyogY3lyaWxsaWMgKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGxheSc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgc3JjOiBsb2NhbCgnUGxheSBCb2xkJyksIGxvY2FsKCdQbGF5LUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9wbGF5L3YxMi82YWU4NEsyb1Zxd0l0bTRUQ3BReTJrblQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcXHJcXG59XFxyXFxuLyogZ3JlZWsgKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGxheSc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgc3JjOiBsb2NhbCgnUGxheSBCb2xkJyksIGxvY2FsKCdQbGF5LUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9wbGF5L3YxMi82YWU4NEsyb1Zxd0l0bTRUQ3BNeTJrblQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xcclxcbn1cXHJcXG4vKiB2aWV0bmFtZXNlICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgQm9sZCcpLCBsb2NhbCgnUGxheS1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlODRLMm9WcXdJdG00VENwOHkya25ULndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxuICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xcclxcbn1cXHJcXG4vKiBsYXRpbi1leHQgKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGxheSc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgc3JjOiBsb2NhbCgnUGxheSBCb2xkJyksIGxvY2FsKCdQbGF5LUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9wbGF5L3YxMi82YWU4NEsyb1Zxd0l0bTRUQ3A0eTJrblQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XFxyXFxufVxcclxcbi8qIGxhdGluICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXknO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHNyYzogbG9jYWwoJ1BsYXkgQm9sZCcpLCBsb2NhbCgnUGxheS1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcGxheS92MTIvNmFlODRLMm9WcXdJdG00VENwQXkyZy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcclxcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNyb290IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICAtLWZvb3Rlci1oZWlnaHQ6IDYwcHg7XFxyXFxuICAtLWhlYWRlci1oZWlnaHQ6IDYwcHg7XFxyXFxuICAtLW1haW4taGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL0FwcC9zdHlsZXMvZ3JpZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHVFQUF1RTtFQUN2RSxXQUFXO0VBQ1gsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jcm9vdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgLS1mb290ZXItaGVpZ2h0OiA2MHB4O1xcclxcbiAgLS1oZWFkZXItaGVpZ2h0OiA2MHB4O1xcclxcbiAgLS1tYWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkgLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcmlhYmxlcy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb250cy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ncmlkLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogUGxheSwgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaXRlLWJnKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCBhIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5hcHAgaW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZy5lcnJvciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxyXFxudGV4dGFyZWEge1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtaW5wdXQtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxyXFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLFxcclxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl06Zm9jdXMsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY29tcG9uZW50cy9BcHAvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLDJDQUEyQztFQUMzQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtEQUFrRDtFQUNsRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxREFBcUQ7QUFDdkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi92YXJpYWJsZXMuY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuL2NvbG9yLmNzc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9mb250cy5jc3NcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4vZ3JpZC5jc3NcXFwiO1xcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFBsYXksIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc2l0ZS1iZyk7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi5hcHAgYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwIGlucHV0IHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2cuZXJyb3Ige1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWlucHV0LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlci1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiA4cHggMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyxcXHJcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdOmZvY3VzLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tZm9udC1zaXplOiAxNHB4O1xcclxcbiAgLS1saW5lLWhlaWdodDogMS40O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL0FwcC9zdHlsZXMvdmFyaWFibGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1mb250LXNpemU6IDE0cHg7XFxyXFxuICAtLWxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXIge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19ncmlkIHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19saW5rIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fbGluazpsYXN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fdXNlci1iYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX3VzZXItbXNnIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fbG9naW4ge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fZ3JpZCB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fbGluayB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2xpbms6bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX3VzZXItYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX191c2VyLW1zZyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2xvZ2luIHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQ6bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRfX2hlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dF9fZmllbGRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbi5pbnB1dF9fZmllbGRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSB7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1pbnB1dC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXItY29sb3IpO1xcclxcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRfX2ZpZWxkW3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyxcXHJcXG4uaW5wdXRfX2ZpZWxkW3R5cGU9XFxcInBhc3N3b3JkXFxcIl06Zm9jdXMge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsMkNBQTJDO0VBQzNDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0RBQWtEO0VBQ2xELGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QscURBQXFEO0FBQ3ZEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQ6bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRfX2hlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dF9fZmllbGRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbi5pbnB1dF9fZmllbGRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSB7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1pbnB1dC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXItY29sb3IpO1xcclxcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRfX2ZpZWxkW3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyxcXHJcXG4uaW5wdXRfX2ZpZWxkW3R5cGU9XFxcInBhc3N3b3JkXFxcIl06Zm9jdXMge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX2hlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19jb250ZW50IHtcXHJcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19jbG9zZS1idG4ge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY29tcG9uZW50cy9Nb2RhbC9Nb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX2hlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19jb250ZW50IHtcXHJcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19jbG9zZS1idG4ge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5ld3Mtc2VjdGlvbl9fbGlzdCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy1zZWN0aW9uX19jcmVhdGUge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3Mge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX3RpdGxlIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2hlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL05ld3MvTmV3cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5ld3Mtc2VjdGlvbl9fbGlzdCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy1zZWN0aW9uX19jcmVhdGUge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3Mge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX3RpdGxlIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2hlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hlYWRlci5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTW9kYWwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9OZXdzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vaW5kZXgudHN4XCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2Nzc1ctZTVjNDE3XCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gKCkgPT4ge1xuXG59O1xuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0fVxuXHRjaHVua0xvYWRpbmdHbG9iYWwgPSBjaHVua0xvYWRpbmdHbG9iYWwuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rTG9hZGluZ0dsb2JhbC5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtMb2FkaW5nR2xvYmFsW2ldKTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWUsIGV4ZWN1dGVNb2R1bGVzXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=