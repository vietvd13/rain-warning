const templateMailRainWarning = () => {
    const { getRandomItem } = require('../helper/helper');
    const { rain_images } = require('../data/data.json');

    const image = getRandomItem(rain_images);

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Mail warning rain</title>

                <style>
                    .text-center {
                        text-align: center;
                    }

                    .image-rain {
                        width: 50%;
                    }

                    @media screen and (max-width: 800px) {
                        .image-rain {
                            width: 100%;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="text-center">
                    <div>🌧️ 🌧️ 🌧️</div>
                    <h2>Hôm nay Hà Nội có thể mưa em nhớ mang ô hoặc áo mưa nhé 😘</h2>
                </div>

                <div class="text-center">
                    <h3><i>Em đi làm cẩn thận nha!</i></h3>
                </div>

                <br />

                <div class="text-center">
                    <img src="${image}" alt="rain" class="image-rain" />
                </div>
            </body>
        </html>
    `;
}

module.exports = {
    templateMailRainWarning
};