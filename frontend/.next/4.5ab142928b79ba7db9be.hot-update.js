webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__credentials_client__ = __webpack_require__("./credentials/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__credentials_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__credentials_client__);

var _jsxFileName = "/home/ethand/Documents/OceanWiseLinkShortener/frontend/pages/index.js";

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

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "removeRedirect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, i) {
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('https://us-central1-ocean-wise-186900.cloudfunctions.net/removeRedirect', {
          id: id
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
          console.log(res.data);
          var redirects = [];
          res.data.forEach(function (redirect, i) {
            redirects.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
              style: {
                textAlign: 'center'
              },
              key: "redirect-".concat(redirect.id),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            }, redirect.long)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              }
            }, redirect.short)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            }, redirect.clicks)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
              onClick: function onClick() {
                return _this.removeRedirect(redirect.id, i);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90
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
        console.log(long);

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
              key: "redirect-".concat(short),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              }
            }, long)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              }
            }, res.data)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            }, "0"))));
            console.log(redirects);

            _this.setState({
              redirects: redirects
            });
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

  _createClass(Index, [{
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
                error: 'Must be an @ocean.org email address.'
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          marginBottom: 50,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          maxWidth: 750,
          margin: '0 auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, user ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleLogout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Logout") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Login"), error !== '' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        style: {
          color: 'red',
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, error) : ''), user && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '50px auto',
          flexDirection: 'column',
          maxWidth: 750
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, "The full URL to shorten (required):", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        value: this.state.long,
        onChange: this.handleLong,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "The short URL you want (optional; e.g., 'compost'):", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        value: this.state.short,
        onChange: this.handleShort,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleCreate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "Shorten URL"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, createError)), user && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("table", {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, "Long"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, "Short"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "Clicks"))), redirects));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.5ab142928b79ba7db9be.hot-update.js.map