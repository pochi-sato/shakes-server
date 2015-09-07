var express = require('express'),
  router = express.Router(),
  methods = {
    index: function (req, res, next) {
      var users = {req: req,res: res};
      // TODO: findByAll 実装する
      res.send(users);
    },
    show: function (req, res, next) {
      var user = {bbb: "unko"};
      //var user = {req: req.toString(),res: res.toString()};
      console.log(req.params);
      //console.log(res);
      console.log(next);
      // TODO: findById 実装する
      res.send(user);
    },
    create: function (req, res, next) {
      var user = {ccc: "unko"};
      var user = {req: req,res: res, next:next};
      // TODO: insert 実装する
      res.send(user);
    },
    update: function (req, res, next) {
      var user = {ddd: "unko"};
      var user = {req: req,res: res, next:next};
      // TODO: update 実装する
      res.send(user);
    },
    destroy: function (req, res, next) {
      var user = {eee: "unko"};
      var user = {req: req,res: res, next:next};
      // TODO: delete 実装する
      res.send(user);
    }
  };

router.get('/', methods.index);
router.get('/:id', methods.show);
router.post('/', methods.create);
router.put('/:id', methods.update);
router.delete('/:id', methods.destroy);

module.exports = router;
