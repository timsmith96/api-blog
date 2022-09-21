'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

var _comment = require('../models/comment');

var _comment2 = _interopRequireDefault(_comment);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = (0, _express.Router)();

router.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var comments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return req.context.models.Comment.find();

          case 2:
            comments = _context.sent;
            return _context.abrupt('return', res.send(comments));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.get('/:commentId', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var comment;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return req.context.models.Comment.findById(req.params.commentId);

          case 2:
            comment = _context2.sent;
            return _context2.abrupt('return', res.send(comment));

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

router.post('/:postId', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var post, comment, newid;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _post2.default.findById(req.params.postId);

          case 2:
            post = _context3.sent;
            comment = new _comment2.default({ text: req.body.text });
            _context3.next = 6;
            return comment.save();

          case 6:
            newid = _mongoose2.default.Types.ObjectId(comment.id);

            post.comments.push(newid);
            _context3.prev = 8;
            _context3.next = 11;
            return post.save();

          case 11:
            _context3.next = 16;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3['catch'](8);

            console.error(_context3.t0);

          case 16:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[8, 13]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

router.delete('/:commentId', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var comment;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return req.context.models.Comment.findById(req.params.commentId);

          case 2:
            comment = _context4.sent;

            if (!comment) {
              _context4.next = 6;
              break;
            }

            _context4.next = 6;
            return comment.remove();

          case 6:
            return _context4.abrupt('return', res.send(comment));

          case 7:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

exports.default = router;
//# sourceMappingURL=comment.js.map