'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var userSchema = new _mongoose2.default.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  }
}, { timestamps: true });

userSchema.statics.findByLogin = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(login) {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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