const templateMailGoodNight = () => {
    const { getRandomItem } = require('../helper/helper');
    const { good_night_images } = require('../data/data.json');

    const image = getRandomItem(good_night_images);

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

                    .image-goodnight {
                        width: 50%;
                    }

                    ul li {
                        list-style-type: none;
                    }

                    @media screen and (max-width: 800px) {
                        .image-goodnight {
                            width: 100%;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="text-center">
                    <div>💤🛌💤</div>
                    <h2>Chúc em bé ngủ ngon ạ 😘</h2>
                </div>

                <div class="text-center">
                    <h3>
                        <i>Yêu em 🥰</i>
                    </h3>
                </div>

                <br />

                <div class="text-center">
                    <img src="${image}" alt="goodnight" class="image-goodnight" />
                </div>
            </body>
        </html>
    `;
}

module.exports = {
    templateMailGoodNight
};