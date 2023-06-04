const cron = require('node-cron');
const { getWeather, getElectricCutSchedule } = require('../services/services');
const { mailLogError, sendMailRainWarning, sendMailSummerWarning, sendMailGoodNight, sendMailQuote, sendMailElectricCutSchedule } = require('../sendNoti/sendMail');

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
                    if ((weather[0].main).includes("Rain")) {
                        sendMailRainWarning(data);
                    } else if (main.feels_like >= 40) {
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

    cron.schedule('30 19 * * *', async() => {
        try {
            console.log("[LOG] - RUN JOB ELECTRIC CUT SCHEDULE...");

            const { data } = await getElectricCutSchedule();

            if (data) {
                const { lichCatdienToList } = data;

                if (Array.isArray(lichCatdienToList)) {
                    if (lichCatdienToList.length > 0) {
                        sendMailElectricCutSchedule(lichCatdienToList);
                    }
                }
            }
        } catch (error) {
            mailLogError("JOB_ELECTRIC_CUT_SCHEDULE", error);
        }
    });

    cron.schedule('30 0 * * *', () => {
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