'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentSchema = new _mongoose2.default.Schema({
  text: {
    type: String,
    required: false
  }
}, { timestamps: true });

var Comment = _mongoose2.default.model('Comment', CommentSchema);

exports.default = Comment;
//# sourceMappingURL=comment.js.map