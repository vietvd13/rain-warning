const axios = require('axios');
const { getDateTomorrow, getMaDViQly } = require('../helper/helper');

const getWeather = async () => {
    try {
        const BASE_URL = process.env.BASE_URL;
        const API_KEY = process.env.API_KEY;
        const LOCATION = process.env.LOCATION;

        const URL = `${BASE_URL}weather?q=${LOCATION}&units=metric&APPID=${API_KEY}`;

        if (BASE_URL && API_KEY && LOCATION) {
            const { data } = await axios.get(URL);

            if (data.cod === 200) {
                console.log("[SUCCESS] CALL API GET WEATHER");
                return data;
            } else {
                console.log("[ERROR] CALL API GET WEATHER");
                return null;
            }
        } else {
            console.log("[ERROR] CALL API GET WEATHER");
            console.log(`Missing environment variables: BASE_URL: ${BASE_URL}, API_KEY: ${API_KEY}, LOCATION: ${LOCATION}`);
        }
    } catch (error) {
        console.log("[ERROR] CALL API GET WEATHER");
        console.error(error);

        return null;
    }
};

const getElectricCutSchedule = async () => {
    try {
        const URL = "https://evnhanoi.vn/api/TraCuu/LichCatDien";
        const dateTomorrow = getDateTomorrow();
        const maDViQly = getMaDViQly();

        if (maDViQly && dateTomorrow) {
            const BODY = {
                ngayBatDau: dateTomorrow,
                ngayKetThuc: dateTomorrow,
                maDViQly
            }

            const { data } = await axios.post(URL, BODY);

            return data;
        } else {
            console.log("[ERROR] CALL API GET ELECTRIC");
            console.log(`Missing environment variables: maDViQly: ${maDViQly}, dateTomorrow: ${dateTomorrow}`);
        }
    } catch (error) {
        console.log("[ERROR] CALL API GET ELECTRIC");
        console.error(error);

        return null;
    }
};

const getNews = async () => {
    try {
        const Parser = require('rss-parser');
        const parser = new Parser();
        
        const { LIST_CONFIG_VNEXPRESS_RSS } = require("../config");
    
        const listWantView = [
            "thoi-su"
        ];

        let result = [];

        const len = listWantView.length;
        let idx = 0;

        while (idx < len) {
            const config = LIST_CONFIG_VNEXPRESS_RSS.find(item => item.type === listWantView[idx]);

            if (config) {
                console.log(`[START] CALL API GET NEWS: ${config.name}`);

                const item = await parser.parseURL(config.url);

                if (item && item.items && item.items.length > 0) {
                    console.log(`[SUCCESS] RESPONSE API GET NEWS: ${config.name} - ${item.items.length} items`);

                    result = item.items;

                    if (result.length > 30) {
                        result = result.slice(0, 30);
                    }
                } else {
                    console.log(`[ERROR] RESPONSE API GET NEWS: ${config.name}`);
                }
            } else {
                console.log(`[ERROR] CALL API GET NEWS: ${listWantView[idx]}`);
            }

            idx++;
        }

        console.log("[END] CALL API GET NEWS");
        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getWeather,
    getElectricCutSchedule,
    getNews
}