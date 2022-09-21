'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDb = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

var _comment = require('./comment');

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connectDb = function connectDb() {
  return _mongoose2.default.connect(process.env.DATABASE_URL);
};

var models = { User: _user2.default, Post: _post2.default, Comment: _comment2.default };

exports.connectDb = connectDb;
exports.default = models;
//# sourceMappingURL=index.js.map