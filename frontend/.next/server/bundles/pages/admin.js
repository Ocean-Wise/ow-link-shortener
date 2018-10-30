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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Admin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__credentials_client__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__credentials_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__credentials_client__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Admin =
/*#__PURE__*/
function (_Component) {
  _inherits(Admin, _Component);

  _createClass(Admin, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req, query, user;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;
                user = req && req.session ? req.session.decodedToken : null;
                return _context.abrupt("return", {
                  user: user
                });

              case 3:
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

  function Admin(props) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "removeRedirect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(short, i) {
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('https://us-central1-ocean-wise-186900.cloudfunctions.net/removeRedirect', {
          short: short
        }).then(function () {
          var redirects = _this.state.redirects;
          redirects = redirects.filter(function (x, j) {
            return j !== i;
          });

          _this.setState({
            redirects: redirects
          });
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getRedirects", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('https://us-central1-ocean-wise-186900.cloudfunctions.net/getAllRedirects').then(function (res) {
          var redirects = [];
          res.data.forEach(function (redirect, i) {
            redirects.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
              style: {
                textAlign: 'center'
              },
              key: "redirect-".concat(redirect.short)
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", null, redirect.long)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", null, redirect.short)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, redirect.clicks)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
              onClick: function onClick() {
                return _this.removeRedirect(redirect.short, i);
              }
            }, "Remove?"))));
          });

          _this.setState({
            redirects: redirects
          });
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleLong", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(evt) {
        _this.setState({
          long: evt.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleShort", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(evt) {
        _this.setState({
          short: evt.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleCreate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state = _this.state,
            long = _this$state.long,
            short = _this$state.short;

        if (!/^(ftp|https?):\/\/[^ "]+$/g.test(long)) {
          _this.setState({
            createError: 'Long URL must be a valid URL '
          });
        } else {
          __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('https://us-central1-ocean-wise-186900.cloudfunctions.net/createRedirect', {
            long: long,
            short: short
          }).then(function (res) {
            var redirects = _this.state.redirects;
            redirects.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
              style: {
                textAlign: 'center'
              },
              key: "redirect-".concat(short)
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", null, long)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", null, res.data)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "0"))));

            _this.setState({
              redirects: redirects,
              createError: ''
            });

            window.location.reload(true);
          });
        }
      }
    });
    _this.state = {
      user: _this.props.user,
      error: '',
      createError: '',
      long: '',
      short: '',
      redirects: []
    };
    return _this;
  }

  _createClass(Admin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_5__credentials_client___default.a); // if (this.state.user) this.addDbListener()

      __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
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
            if (res.status === 403) {
              _this2.setState({
                user: null,
                error: 'Must be an @ocean.org email address. Please ensure you are logged out of other Google accounts before trying again.'
              });
            } else {
              _this2.getRedirects();

              _this2.setState({
                user: user,
                error: ''
              });
            }
          });
        } else {
          _this2.setState({
            user: null
          }); // eslint-disable-next-line no-undef


          fetch('/api/logout', {
            method: 'POST',
            credentials: 'same-origin'
          });
        }
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
          error = _state.error,
          redirects = _state.redirects,
          createError = _state.createError;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          marginBottom: 50,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          maxWidth: 750,
          margin: '0 auto'
        }
      }, user ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleLogout
      }, "Logout") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleLogin
      }, "Login"), error !== '' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        style: {
          color: 'red',
          textAlign: 'center'
        }
      }, error) : ''), user && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '50px auto',
          flexDirection: 'column',
          maxWidth: 750
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "The full URL to shorten (required):", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        value: this.state.long,
        onChange: this.handleLong
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "The short URL you want (optional; e.g., 'compost'):", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        value: this.state.short,
        onChange: this.handleShort
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleCreate
      }, "Shorten URL"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        style: {
          color: 'red'
        }
      }, createError)), user && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("table", {
        style: {
          width: '100%'
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tbody", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
        style: {
          width: '40%'
        }
      }, "Long"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", null, "Short"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", null, "Clicks"))), redirects));
    }
  }]);

  return Admin;
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

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  apiKey: "AIzaSyBSpXL0Ytp-75WQKpWR_eiWRpgZkeud-6Y",
  authDomain: "ocean-wise-186900.firebaseapp.com",
  databaseURL: "https://ocean-wise-186900.firebaseio.com",
  projectId: "ocean-wise-186900",
  storageBucket: "ocean-wise-186900.appspot.com",
  messagingSenderId: "255540484592"
};

/***/ })
/******/ ]);