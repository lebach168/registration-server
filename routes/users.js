var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  const data = req.body;
  console.log(req.body);
  if (!data) {
    res.status(400).send({ status: 'failed' });
    return;
  }
  else {
    res.status(200).send(data);
  }

});

module.exports = router;
