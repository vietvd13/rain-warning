const cron = require('node-cron');
const { getWeather } = require('../services/services');
const { mailLogError, sendMailRainWarning, sendMailSummerWarning, sendMailGoodNight, sendMailQuote } = require('../sendNoti/sendMail');
// const { sendSMS } = require('../sendNoti/sendSMS');

const configTimezone = {
    scheduled: true,
    timezone: "Asia/Ho_Chi_Minh",
}

const jobs = () => {
    cron.schedule('30 8 * * *', () => {
        try {
            sendMailQuote();
        } catch (error) {
            console.log(error);

            mailLogError("JOB_QUOTE", error);
        }
    });

    cron.schedule('45 8 * * *', async() => {
        try {
            const data = await getWeather();

            if (data) {
                const { weather, main } = data;
    
                if (Array.isArray(weather) && weather.length > 0) {
                    if (weather[0].main === "Rain") {
                        sendMailRainWarning(data);
                    } else if (main.temp > 40) {
                        sendMailSummerWarning();
                    }
                } else {
                    mailLogError("API_WEATHER", data);
                }
            }
        } catch (error) {
            mailLogError("JOB_WEATHER", error);
        }
    }, configTimezone);

    cron.schedule('0 0 * * *', () => {
        try {
            sendMailGoodNight();
        } catch (error) {
            mailLogError("JOB_GOOD_NIGHT", error);
        }
    });
};

module.exports = {
    jobs
};