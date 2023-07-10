const cron = require('node-cron');

const { 
    getWeather, 
    getElectricCutSchedule, 
    getNews,
    getSavingsInterestRate
} = require('../services/services');

const { 
    mailLogError, 
    sendMailRainWarning, 
    sendMailSummerWarning, 
    sendMailGoodNight, 
    sendMailQuote, 
    sendMailElectricCutSchedule, 
    sendMailNews,
    sendMailSavingsInterest
} = require('../sendNoti/sendMail');

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
    }, configTimezone);

    cron.schedule('45 8 * * *', async() => {
        try {
            const data = await getWeather();

            if (data) {
                const { weather, main } = data;

                if ((weather[0].description).includes("rain")) {
                    sendMailRainWarning(data);
                }

                if (main.feels_like >= 40) {
                    sendMailSummerWarning();
                }
            } else {
                mailLogError("API_WEATHER", JSON.stringify(data));
            }
        } catch (error) {
            mailLogError("JOB_WEATHER", error);
        }
    }, configTimezone);

    cron.schedule('0 17 * * *', async() => {
        try {
            const data = await getWeather();

            if (data) {
                const { weather, main } = data;

                if ((weather[0].description).includes("rain")) {
                    sendMailRainWarning(data);
                }

                if (main.feels_like >= 40) {
                    sendMailSummerWarning();
                }
            } else {
                mailLogError("API_WEATHER", JSON.stringify(data));
            }
        } catch (error) {
            mailLogError("JOB_WEATHER", error);
        }
    }, configTimezone);

    cron.schedule('0 20 * * *', async() => {
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
    }, configTimezone);

    cron.schedule('30 0 * * *', () => {
        try {
            sendMailGoodNight();
        } catch (error) {
            mailLogError("JOB_GOOD_NIGHT", error);
        }
    }, configTimezone);

    cron.schedule('0 0 * * *', async() => {
        try {
            const data = await getNews();

            if (!data) {
                throw new Error("Dữ liệu tin tức trống");
            }

            sendMailNews(data);
        } catch (error) {
            mailLogError("JOB_NEWS", error);
        }
    }, configTimezone);

    cron.schedule('30 9 * * *', async() => {
        try {
            const data = await getSavingsInterestRate();

            if (!data) {
                throw new Error("Dữ liệu lãi suất tiết kiệm trống");
            }

            console.log(data);
            sendMailSavingsInterest(data);
        } catch (error) {
            mailLogError("JOB_SAVINGS_INTEREST_RATE", error);
        }
    }, configTimezone);
};

module.exports = {
    jobs
};