'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  }
}, { timestamps: true });

userSchema.statics.findByLogin = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(login) {
    var user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.findOne({
              username: login
            });

          case 2:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return this.findOne({ email: login });

          case 6:
            user = _context.sent;

          case 7:
            return _context.abrupt('return', user);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

userSchema.pre('remove', function (next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});

var User = _mongoose2.default.model('User', userSchema);

exports.default = User;
//# sourceMappingURL=user.js.map