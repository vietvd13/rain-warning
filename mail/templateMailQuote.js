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
                <title>Mail good morning</title>

                <style>
                    .text-center {
                        text-align: center;
                    }

                    .image-goodmorning {
                        width: 50%;
                    }

                    ul li {
                        list-style-type: none;
                    }


                    .mail-good-morning {
                        background-color: #FDCEDF;
                        
                        padding: 40px;
                    }

                    .mail-good-morning__content {
                        padding: 20px;
                        margin: 40px;

                        background-color: #FFF;
                        border: 5px solid #F8E8EE;
                        
                        border-radius: 10px;
                    }

                    .mail-good-morning-content__header {
                        margin-bottom: 20px;

                        color: #333;

                        border-bottom: 2px solid #f5f5f5;
                    }

                    @media screen and (max-width: 800px) {
                        .image-goodmorning {
                            width: 100%;
                        }

                        .mail-good-morning {
                            padding: 10px;
                        }

                        .mail-good-morning__content {
                            padding: 10px;
                            margin: 10px;
                        }
                    }

                </style>
            </head>
            <body>
                <div class="mail-good-morning">
                    <div class="mail-good-morning__content">
                        <div class="mail-good-morning-content__header">
                            <h1 class="text-center">Xin chào buổi sáng</h1>
                        </div>

                        <div class="mail-good-morning-content__body text-center">
                            <h3>Dear Em bé của anh ơi,</h3>
                            <p>${quote.text}</p>
                            <p>Chúc em buổi sáng tốt lành! Yêu em ❤️</p>

                            <div class="text-center">
                                <img src="${quote.image}" alt="goodmorning" class="image-goodmorning" />
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
}

module.exports = {
    templateMailQuote
};