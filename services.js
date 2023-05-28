const axios = require('axios');

const getWeather = async () => {
    try {
        const BASE_URL = process.env.BASE_URL;
        const API_KEY = process.env.API_KEY;
        const LOCATION = process.env.LOCATION;

        const URL = `${BASE_URL}weather?q=${LOCATION}&units=metric&APPID=${API_KEY}`;

        if (BASE_URL && API_KEY && LOCATION) {
            const { data } = await axios.get(URL);

            if (data.cod === 200) {
                return data;
            } else {
                return null;
            }
        } else {
            console.log(`Missing environment variables: BASE_URL: ${BASE_URL}, API_KEY: ${API_KEY}, LOCATION: ${LOCATION}`);
        }
    } catch (error) {
        console.error(error);

        return null;
    }
};

module.exports = {
    getWeather
}