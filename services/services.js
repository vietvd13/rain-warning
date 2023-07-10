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

const getSavingsInterestRate = async (type = "") => {
    try {
        const LIST_TYPE = [
            {
                type: "online",
                link: "https://gw.vnexpress.net/th?types=bank_rate_online"
            },
            {
                type: "offline",
                link: "https://gw.vnexpress.net/th?types=bank_rate_offline"
            }
        ];

        const item = LIST_TYPE.find(item => item.type === type);

        if (item) {
            const { data } = await axios.get(item.link);

            if (data.code === 200) {
                return [{
                    type: item.type,
                    data: data.data.bank_rate_online
                }]
            } else {
                return null;
            }
        } else {
            const len = LIST_TYPE.length;
            let idx = 0;

            const result = [];

            while (idx < len) {
                const { data } = await axios.get(LIST_TYPE[idx].link);

                if (data.code === 200) {
                    if (LIST_TYPE[idx].type === "online") {
                        result.push({
                            type: LIST_TYPE[idx].type,
                            data: data.data.bank_rate_online
                        });
                    }

                    if (LIST_TYPE[idx].type === "offline") {
                        result.push({
                            type: LIST_TYPE[idx].type,
                            data: data.data.bank_rate_offline
                        });
                    }
                }

                idx++;
            }

            return result;
        }
    } catch (error) {
        console.log(error);

        return null;
    }
}

module.exports = {
    getWeather,
    getElectricCutSchedule,
    getNews,
    getSavingsInterestRate
}