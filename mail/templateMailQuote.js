const templateMailQuote = () => {
    const { quotes } = require('../data/data.json');
    const { getRandomItem } = require('../helper/helper');

    const quote = getRandomItem(quotes);

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Mail good night</title>

                <style>
                    .text-center {
                        text-align: center;
                    }

                    .image-quote {
                        width: 50%;
                    }

                    ul li {
                        list-style-type: none;
                    }

                    @media screen and (max-width: 800px) {
                        .image-quote {
                            width: 100%;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="text-center">
                    <div>🫣🌄🫣</div>
                    <h2>Xin chào buổi sáng 😘</h2>
                </div>

                <div class="text-center">
                    ${quote.text}
                </div>

                <div class="text-center">
                    <h3>
                        <i>Yêu em 🥰</i>
                    </h3>
                </div>

                <br />

                <div class="text-center">
                    <img src="${quote.image}" alt="quote" class="image-quote" />
                </div>
            </body>
        </html>
    `;
}

module.exports = {
    templateMailQuote
};