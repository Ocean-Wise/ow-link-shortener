module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__credentials_client__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__credentials_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__credentials_client__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  _createClass(Index, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req, query, user, snap, messages;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;
                user = req && req.session ? req.session.decodedToken : null; // don't fetch anything from firebase if the user is not found

                _context.t0 = user;

                if (!_context.t0) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return req.firebaseServer.database().ref('messages').once('value');

              case 6:
                _context.t0 = _context.sent;

              case 7:
                snap = _context.t0;
                messages = snap && snap.val();
                return _context.abrupt("return", {
                  user: user,
                  messages: messages
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      user: _this.props.user,
      value: '',
      messages: _this.props.messages
    };
    _this.addDbListener = _this.addDbListener.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_4__credentials_client___default.a);
      if (this.state.user) this.addDbListener();
      __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          _this2.setState({
            user: user
          });

          return user.getIdToken().then(function (token) {
            // eslint-disable-next-line no-undef
            return fetch('/api/login', {
              method: 'POST',
              // eslint-disable-next-line no-undef
              headers: new Headers({
                'Content-Type': 'application/json'
              }),
              credentials: 'same-origin',
              body: JSON.stringify({
                token: token
              })
            });
          }).then(function (res) {
            return _this2.addDbListener();
          });
        } else {
          _this2.setState({
            user: null
          }); // eslint-disable-next-line no-undef


          fetch('/api/logout', {
            method: 'POST',
            credentials: 'same-origin'
          }).then(function () {
            return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('messages').off();
          });
        }
      });
    }
  }, {
    key: "addDbListener",
    value: function addDbListener() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('messages').on('value', function (snap) {
        var messages = snap.val();
        if (messages) _this3.setState({
          messages: messages
        });
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var date = new Date().getTime();
      __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("messages/".concat(date)).set({
        id: date,
        text: this.state.value
      });
      this.setState({
        value: ''
      });
    }
  }, {
    key: "handleLogin",
    value: function handleLogin() {
      __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.GoogleAuthProvider());
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signOut();
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          user = _state.user,
          value = _state.value,
          messages = _state.messages;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, user ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleLogout
      }, "Logout") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleLogin
      }, "Login"), user && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: 'text',
        onChange: this.handleChange,
        placeholder: 'add message',
        value: value
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", null, messages && Object.keys(messages).map(function (key) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          key: key
        }, messages[key].text);
      }))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  apiKey: "AIzaSyBSpXL0Ytp-75WQKpWR_eiWRpgZkeud-6Y",
  authDomain: "ocean-wise-186900.firebaseapp.com",
  databaseURL: "https://ocean-wise-186900.firebaseio.com",
  projectId: "ocean-wise-186900",
  storageBucket: "ocean-wise-186900.appspot.com",
  messagingSenderId: "255540484592"
}


/***/ })
/******/ ]);