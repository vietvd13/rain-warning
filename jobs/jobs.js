const cron = require('node-cron');
const { getWeather } = require('../services/services');
const { mailLogError, sendMailRainWarning, sendMailSummerWarning, sendMailGoodNight, sendMailQuote } = require('../sendNoti/sendMail');
const { sendSMS } = require('../sendNoti/sendSMS');
const { getRandomItem } = require('../helper/helper');
const { quotes } = require('../data/data.json');

const configTimezone = {
    scheduled: true,
    timezone: "Asia/Ho_Chi_Minh",
}

const jobs = () => {
    cron.schedule('30 8 * * *', () => {
        try {
            sendMailQuote();
            const message = getRandomItem(quotes);

            sendSMS(`${message.text} \n _Duck In Love_`);
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
                    if ((weather[0]).includes("Rain")) {
                        sendSMS(`Nay trời Hà Nội có thể mưa, em nhớ mang ô hoặc áo mưa nhé. Yêu em 😘 \n _Duck In Love_`);

                        // sendMailRainWarning(data);
                    } else if (main.feels_like >= 40) {
                        sendSMS(`Nay trời Hà Nội nắng nóng lắm á, em bôi kem chống nắng với mặc áo nắng trước khi ra đường nha. À nhớ uống nhiều nước nữa ạ. Yêu em 😘 \n _Duck In Love_`);
                        // sendMailSummerWarning();
                    }
                } else {
                    mailLogError("API_WEATHER", data);
                }
            }
        } catch (error) {
            mailLogError("JOB_WEATHER", error);
        }
    }, configTimezone);

    cron.schedule('30 0 * * *', () => {
        try {
            sendSMS(`Chúc em bé ngủ ngon ạ. Yêu em 😘😘😘 \n _Duck In Love_`);
            // sendMailGoodNight();
        } catch (error) {
            mailLogError("JOB_GOOD_NIGHT", error);
        }
    });
};

module.exports = {
    jobs
};