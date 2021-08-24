var express = require('express');
var router = express.Router();
var {Users} = require('../models/users');

router.get('/', async function (req, res, next) {
  const query = {_id : req.query.id}
  const user = await Users.find(query);
  var message,logged;
  if (user.length === 0){
    message = "No Such User 2"
    logged = false;
  }
  else {
    message = "Ok"
    logged = true;
    await Users.findOneAndUpdate(query, { logged: true })
  }

  console.log("user", user)
  res.send( { message: message ,logged: logged, user : user});
});

module.exports = router;
