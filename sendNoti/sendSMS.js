const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

function sendSMS(data = "Hello") {
    client.messages
        .create({ body: JSON.stringify(data), from: "+13156311185", to: "+84984264170" })
        .then(message => console.log(message.sid));
}

module.exports = {
    sendSMS
};