const admin = require('firebase-admin');

module.exports = function(req, res){

  //vertyfi phone
  if (!req.body.phone) {
   return  res.status(402).send({error: 'Bad Input'});
  }
  // trem the phone number replace
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  //create new user
  admin.auth().createUser({uid:phone})
    .then(user => res.send(user))
    .catch(err => res.status(422).send({error: err}));

}
