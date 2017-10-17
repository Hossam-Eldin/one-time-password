const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function(req, res){
  if (!req.body.phone) {
   return  res.status(402).send({error: 'Phone number is empty'});
  }
  // trem the phone number replace
  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  //
admin.auth().getUser(phone)
  .then(userRecord => {
    const code =Math.floor((Math.random() * 8999 + 1000));
    twilio.messages.create({
      body: 'your code is '+ code ,
      phone: phone,
      from: '+15202638167',
    },(err) =>{
        if (err) {return res.status(422).send(err);}
          admin.database().ref('users/' + phone).update({ code: code, codeValid: true }, () => {
              res.send({ success: true });
        });
    })
  })
  .catch(err => res.status(422).send({error: err}));

};
