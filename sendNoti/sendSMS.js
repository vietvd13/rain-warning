const { mailLogSMS } = require('../sendNoti/sendMail');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

function sendSMS(message = "Hello") {
    client.messages
        .create({ body: message, from: "+13156311185", to: "+84379326482" })
        .then(message => {
            mailLogSMS(message);
        });
}

module.exports = {
    sendSMS
};