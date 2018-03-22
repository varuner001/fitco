let express = require('express');
let router = express.Router();
let userHelper = require('../helpers/users');


router.get('/', function(req, res, next) {
  let userId = 5;
  let user = userHelper.getUserByMId(5);
  res.json(user);
});

module.exports = router;
