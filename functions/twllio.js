const twilio = require('twilio');

const accountSid ='AC529c50fc1071e41586aae99c7626e745';
const authToken  = '60f1123c52decaf9ab2b1cbb4b3c5927';

module.exports =  new twilio.Twilio(accountSid, authToken);
