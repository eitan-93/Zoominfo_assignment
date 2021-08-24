var express = require('express');
var router = express.Router();
var {Users} = require('../models/users');


router.get('/',  async function (req, res, next) {
  const query = {username : req.query.user, password : req.query.pass}
  const user = await Users.find(query);
  var message,logged;
  if (user.length === 0){
    message = "No Such User"
    logged = false;
  }
  else {
    message = "Ok"
    logged = true;
    await Users.findOneAndUpdate(query, { logged: true })
  }

  console.log("user", user)
  const id = user[0]._id
  res.send( { message: message ,logged: logged ,id: id});

});

module.exports = router;
