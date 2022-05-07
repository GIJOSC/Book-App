"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reducer = _interopRequireDefault(require("./modules/cart/reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  cart: _reducer.default
});
var store = (0, _redux.legacy_createStore)(reducers);
var _default = store;
exports.default = _default;