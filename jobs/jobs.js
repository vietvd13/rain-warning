const cron = require('node-cron');
const { getWeather } = require('../services/services');
const { sendMailRainWarning, sendMailSummerWarning } = require('../sendNoti/sendMail');
const { sendSMS } = require('../sendNoti/sendSMS');

const configTimezone = {
    scheduled: true,
    timezone: "Asia/Ho_Chi_Minh",
}

const jobs = () => {
    cron.schedule('0 8 * * *', async() => {
        const data = await getWeather();

        if (data) {
            const { weather, main } = data;

            if (Array.isArray(weather) && weather.length > 0) {
                if (weather[0].main === "Rain") {
                    await sendMailRainWarning(data);
                } else if (main.temp > 40) {
                    await sendMailSummerWarning();
                }
            } else {
                console.log("Log error");
            }
        }
    }, configTimezone);

    cron.schedule('0 23 * * *', async() => {
        await sendMailGoodNight();
    });
};

module.exports = {
    jobs
};