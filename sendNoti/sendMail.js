const nodemailer =  require('nodemailer');
const { templateMailRainWarning } = require('../mail/templateMailRainWarning');
const { templateMailSummerWarning } = require('../mail/templateMailSummerWarning');
const { templateMailGoodNight } = require('../mail/templateMailGoodNight');
const { templateMailQuote } = require('../mail/templateMailQuote');
const { templateMailElectricCutSchedule } = require('../mail/templateMailElectricCutSchedule');
const { templateMailNews } = require('../mail/templateMailNews');
const { templateMailSavingsInterestRate } = require('../mail/templateMailSavingsInterestRate');

const { getDateTomorrow } = require('../helper/helper');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

transporter.verify().then(console.log).catch(console.error);

async function mailLogSMS(message) {
    console.log("[LOG] - SEND MAIL LOG SMS...");

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: "vuducviet0131@gmail.com",
        subject: `[Duck in Love] - LOG SEND SMS`,
        html: `<span>Log send mail: ${JSON.stringify(message)}</span>`
    };

    await transporter.sendMail(mailOptions);
}

async function mailLogError(type, error) {
    console.log("[LOG] - SEND MAIL LOG ERROR...");

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: "vuducviet0131@gmail.com",
        subject: `[Duck in Love] - ERROR: ${type}`,
        html: `<span>Log send mail: ${error}</span>`
    };

    await transporter.sendMail(mailOptions);
}

async function sendMailRainWarning() {
    console.log("[LOG] - SEND MAIL WARNING RAIN...");

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: "Cảnh báo mưa tới em bé",
        html: templateMailRainWarning()
    };

    await transporter.sendMail(mailOptions);
}

async function sendMailSummerWarning() {
    console.log("[LOG] - SEND MAIL SUMMER WARNING...");

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: "Cảnh báo nắng nóng tới em bé",
        html: templateMailSummerWarning()
    };

    await transporter.sendMail(mailOptions);
}

async function sendMailGoodNight() {
    console.log("[LOG] - SEND MAIL GOOD NIGHT...");

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: "Chúc em bé ngủ ngon",
        html: templateMailGoodNight()
    };

    await transporter.sendMail(mailOptions);
}

async function sendMailQuote() {
    console.log("[LOG] - SEND MAIL QUOTE...");

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: "Nhắn gửi yêu thương",
        html: templateMailQuote()
    };

    await transporter.sendMail(mailOptions);
}

async function sendMailElectricCutSchedule(data) {
    console.log("[LOG] - SEND MAIL ELECTRIC CUT SCHEDULE...");

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: `Lịch cúp điện | ${getDateTomorrow()}`,
        html: templateMailElectricCutSchedule(data, getDateTomorrow())
    };

    await transporter.sendMail(mailOptions);
}

async function sendMailNews(data) {
    console.log("[LOG] - SEND MAIL NEWS...");

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: `Tổng hợp tin tức trong ngày`,
        html: templateMailNews(data)
    };

    await transporter.sendMail(mailOptions);
}

async function sendMailSavingsInterest(data) {
    console.log("[LOG] - SEND MAIL SAVINGS INTEREST...");

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: `Gửi lãi tiết kiệm`,
        html: templateMailSavingsInterestRate(data)
    };

    await transporter.sendMail(mailOptions);
}

module.exports = {
    mailLogSMS,
    mailLogError,
    sendMailRainWarning,
    sendMailSummerWarning,
    sendMailGoodNight,
    sendMailQuote,
    sendMailElectricCutSchedule,
    sendMailNews,
    sendMailSavingsInterest
}