const nodemailer =  require('nodemailer');
const { templateMailRainWarning } = require('../mail/templateMailRainWarning');
const { templateMailSummerWarning } = require('../mail/templateMailSummerWarning');
const { templateMailGoodNight } = require('../mail/templateMailGoodNight');
const { templateMailQuote } = require('../mail/templateMailQuote');

async function mailLogSMS(message) {
    console.log("[LOG] - SEND MAIL LOG SMS...");

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
        to: "vuducviet0131@gmail.com",
        subject: `[Duck in Love] - LOG SEND SMS`,
        html: `<span>Log send mail: ${JSON.stringify(message)}</span>`
    };

    await transporter.sendMail(mailOptions);
}

async function mailLogError(type, error) {
    console.log("[LOG] - SEND MAIL LOG ERROR...");

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
        to: "vuducviet0131@gmail.com",
        subject: `[Duck in Love] - ERROR: ${type}`,
        html: `<span>Log send mail: ${error}</span>`
    };

    await transporter.sendMail(mailOptions);
}

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
    console.log("[LOG] - SEND MAIL SUMMER WARNING...");

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
    console.log("[LOG] - SEND MAIL GOOD NIGHT...");

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
        html: templateMailQuote()
    };

    await transporter.sendMail(mailOptions);
}

module.exports = {
    mailLogSMS,
    mailLogError,
    sendMailRainWarning,
    sendMailSummerWarning,
    sendMailGoodNight,
    sendMailQuote
}