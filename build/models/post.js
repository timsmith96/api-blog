'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostSchema = new _mongoose2.default.Schema({
  title: {
    type: String,
    require: true
  },
  text: {
    type: String,
    required: true
  },
  user: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'User' },
  comments: [{ type: _mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  display: { type: Boolean, default: true }
}, { timestamps: true });

var Post = _mongoose2.default.model('Post', PostSchema);

exports.default = Post;
//# sourceMappingURL=post.js.map