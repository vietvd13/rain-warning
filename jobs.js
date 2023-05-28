const cron = require('node-cron');
const { getWeather } = require('./services');

const jobs = () => {
    cron.schedule('* * * * *', async() => {
        console.log('running a task every minute');
        const data = await getWeather();

        console.log(data);
    });
};

module.exports = {
    jobs
};