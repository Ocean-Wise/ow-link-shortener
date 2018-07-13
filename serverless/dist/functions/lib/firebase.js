"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functions = exports.firebase = void 0;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var functions = _interopRequireWildcard(require("firebase-functions"));

exports.functions = functions;

var _server = _interopRequireDefault(require("../credentials/server"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const firebase = _firebaseAdmin.default.initializeApp({
  credential: _firebaseAdmin.default.credential.cert(_server.default),
  databaseURL: 'https://ocean-wise-186900.firebaseio.com'
}, 'server');

exports.firebase = firebase;