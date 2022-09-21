'use strict';

require('dotenv/config');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _uuid = require('uuid');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = (0, _express2.default)();

// MIDDLEWARE
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
app.use((0, _cors2.default)());
app.use(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _models2.default;
            _context.next = 3;
            return _models2.default.User.findByLogin('kingjoff23');

          case 3:
            _context.t1 = _context.sent;
            req.context = {
              models: _context.t0,
              me: _context.t1
            };

            next();

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

// ROUTES
app.use('/session', _routes2.default.session);
app.use('/users', _routes2.default.user);
app.use('/posts', _routes2.default.post);
app.use('/comments', _routes2.default.comment);

// CONNECT TO DATABASE
var eraseDatabaseOnSync = true;

(0, _models.connectDb)().then(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!eraseDatabaseOnSync) {
            _context2.next = 4;
            break;
          }

          _context2.next = 3;
          return Promise.all([_models2.default.User.deleteMany({}), _models2.default.Post.deleteMany({}), _models2.default.Comment.deleteMany({})]);

        case 3:

          createUsersWithPosts();

        case 4:

          app.listen(process.env.PORT || 3000, function () {
            return console.log('Example app listening on port ' + process.env.PORT + '!');
          });

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})));

var createUsersWithPosts = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var comment1, comment2, comment3, user1, user2, post1, post2, post3, post4, post5, post6;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            comment1 = new _models2.default.Comment({
              text: 'I am comment number 1'
            });
            comment2 = new _models2.default.Comment({
              text: 'I am comment 2'
            });
            comment3 = new _models2.default.Comment({
              text: 'I am comment 3'
            });
            user1 = new _models2.default.User({
              username: 'kingjoff23'
            });
            user2 = new _models2.default.User({
              username: 'winstonrabbit'
            });
            post1 = new _models2.default.Post({
              title: 'Post 1 title',
              text: 'I am a blog post, number 1 :D',
              user: user1.id,
              comments: [comment1.id, comment2.id]
            });
            post2 = new _models2.default.Post({
              title: 'Post 2 title',
              text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem libero accusantium facere rem fuga, corporis soluta ab vel! Iste molestias sunt earum, inventore autem molestiae? Repellat soluta aperiam velit, provident nemo quam necessitatibus nihil illum minus rerum quasi pariatur qui odit, inventore recusandae reprehenderit optio, fugiat voluptate obcaecati ullam explicabo incidunt! Veniam corrupti molestias, saepe officiis dolore quasi reiciendis aut consequatur nihil possimus.Culpa, accusamus cumque maiores natus repellendus sunt dicta ratione quia asperiores perspiciatis ullam nihil, modi blanditiis sequi voluptatibus unde esse earum doloremque officia eos possimus fugit? Porro reprehenderit esse voluptatum doloremque minima eos saepe sint, excepturi et odit fuga voluptate nemo asperiores consequatur molestias autem delectus quia adipisci sequi ad eveniet rerum neque quos. Eligendi rerum est tempora a voluptas consequatur, nobis minima perspiciatis aliquid voluptates culpa itaque odio.\n\n    Nostrum magnam obcaecati praesentium officia architecto! Sunt a nisi fuga omnis autem! Unde, quas ducimus dicta, minima tempore minus repudiandae natus et ipsum voluptas, libero error. Unde reiciendis, doloribus modi officia aperiam ullam! Similique, voluptate optio! Saepe optio iure qui ad praesentium minus! Sunt quibusdam aliquam voluptate ipsam deserunt, maiores iste quidem modi, error, pariatur magni. Fugit dignissimos nisi dolorem debitis, quas nostrum magni nobis dolorum inventore, velit quis eum facilis, quae ducimus eius at nesciunt.\n    \n    Numquam harum ipsum sit reiciendis, suscipit ullam temporibus error hic in quos voluptatum maiores rerum, animi ea doloremque optio tempora? Itaque ab minus vitae nostrum veniam vel eos neque, dolorum pariatur possimus iure, nobis officia necessitatibus? Ex, magni praesentium nihil quasi aliquam, similique ad doloribus optio asperiores minus aliquid dolorem dignissimos vero pariatur nobis accusamus. Vitae dolorem, ea quos temporibus consequatur, doloribus itaque voluptate corrupti officiis nostrum nemo commodi omnis? Tempora totam ducimus illo deleniti dolorum eos laboriosam itaque, quidem quas quis consequatur quibusdam eius enim rerum quod.\n    \n    Illum ab aliquid exercitationem? Nam, iste voluptas enim maxime a ipsam veritatis eum ipsa nisi facilis aperiam neque, aut fugiat, quos perferendis. Itaque quasi in placeat nam eaque ducimus similique quis animi laboriosam ullam repudiandae et exercitationem maxime a debitis asperiores, excepturi sed voluptatibus ratione error ipsa aperiam illum, quisquam dignissimos? Dolorem harum exercitationem provident! Eaque rem eius labore voluptates nam nostrum magnam eligendi corrupti sit debitis, ipsam maxime odit tenetur dignissimos veniam explicabo!\n    \n    Sint repellat nam, libero assumenda doloribus consequatur!\n    \n    Distinctio architecto esse sed consequuntur praesentium et minus ducimus molestias quod repudiandae! Nemo libero quaerat amet dolorem. Excepturi nemo facere impedit animi rem recusandae odit laboriosam cupiditate nobis corporis aliquid aperiam vitae eum sequi iure inventore magnam adipisci placeat a reprehenderit odio, ex quos?\n    \n    Nesciunt doloremque saepe delectus enim facilis numquam dolorem earum, deleniti cum ipsum culpa a minima cumque ut ullam animi, optio voluptas eveniet pariatur dolores? Sed quis deleniti praesentium, minus aperiam optio minima vitae pariatur corrupti id veniam atque reprehenderit eum quae doloribus, rem neque fugiat at necessitatibus? Quibusdam animi repellendus velit magni, pariatur eum, iste ea omnis cum nostrum aspernatur beatae fuga dolorum earum possimus veniam nesciunt aut saepe perspiciatis debitis impedit explicabo repudiandae. At tenetur necessitatibus corporis eos!',
              user: user2.id,
              comments: [comment1.id, comment2.id]
            });
            post3 = new _models2.default.Post({
              title: 'Post 3 title',
              text: 'I am a blog post, number 2 :D',
              user: user2.id
            });
            post4 = new _models2.default.Post({
              title: 'Post 4 title',
              text: 'I am a blog post, number 2 :D',
              user: user2.id
            });
            post5 = new _models2.default.Post({
              title: 'Post 5 title',
              text: 'I am a blog post, number 2 :D',
              user: user2.id
            });
            post6 = new _models2.default.Post({
              title: 'Post 6 title',
              text: 'I am a blog post, number 2 :D',
              user: user2.id
            });
            _context3.next = 13;
            return post1.save();

          case 13:
            _context3.next = 15;
            return post2.save();

          case 15:
            _context3.next = 17;
            return post3.save();

          case 17:
            _context3.next = 19;
            return post4.save();

          case 19:
            _context3.next = 21;
            return post5.save();

          case 21:
            _context3.next = 23;
            return post6.save();

          case 23:
            _context3.next = 25;
            return user1.save();

          case 25:
            _context3.next = 27;
            return user2.save();

          case 27:
            _context3.next = 29;
            return comment1.save();

          case 29:
            _context3.next = 31;
            return comment2.save();

          case 31:
            _context3.next = 33;
            return comment3.save();

          case 33:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function createUsersWithPosts() {
    return _ref3.apply(this, arguments);
  };
}();
//# sourceMappingURL=index.js.map