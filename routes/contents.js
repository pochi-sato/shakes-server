var express = require('express'),
  router = express.Router(),
  methods = {
    get: function (req, res, next) {
      var contents = {},
        baseDate = String(+new Date()),
        // 数ヶ月被らない値をつくるための接頭数字
        //uniqueDateKey = baseDate.slice(-4, 4),
        // dateNumが0から始まっていた際に接頭辞として機能しないため、必ず初めは1で始まることとしている
        idPrefix = 1,
        // 今はurl直入れなので敢えての桁数。4桁だと10秒に一度被る可能性のあるランダム。
        randomId = idPrefix + "" + baseDate.slice(-4);
      console.log(randomId);
      console.log(Math.floor(Math.random() * 2));

      if(Math.floor(Math.random() * 2) === 0) {
        contents.url = "http://s3-ap-northeast-1.amazonaws.com/topicks/article_thumb/" + randomId + "_original.jpg";
        contents.type = "image";
      } else {
        contents.url = "https://google.com";
        contents.type = "html";
      }


      res.send(contents);
    }
  };

router.get('/', methods.get);

module.exports = router;
