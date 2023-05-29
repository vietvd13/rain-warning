const nodemailer =  require('nodemailer');
const { templateMailRainWarning } = require('../mail/templateMailRainWarning');
const { templateMailSummerWarning } = require('../mail/templateMailSummerWarning');
const { templateMailGoodNight } = require('../mail/templateMailGoodNight');

async function sendMailRainWarning() {
    console.log("[LOG] - SEND MAIL WARNING RAIN...");

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

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: "Dự báo thời tiết by Vũ Duck",
        html: templateMailRainWarning()
    };

    await transporter.sendMail(mailOptions);
}

async function sendMailSummerWarning() {
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

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: "Dự báo thời tiết by Vũ Duck",
        html: templateMailSummerWarning()
    };

    await transporter.sendMail(mailOptions);
}

async function sendMailGoodNight() {
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

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: "Chúc ngủ ngon by Vũ Duck",
        html: templateMailGoodNight()
    };

    await transporter.sendMail(mailOptions);
}

async function sendMailQuote() {
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

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.SMTP_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: "Nhắn gửi yêu thương by Vũ Duck",
        html: templateMailWeather(data)
    };
    await transporter.sendMail(mailOptions);
}

module.exports = {
    sendMailRainWarning,
    sendMailSummerWarning,
    sendMailGoodNight
}