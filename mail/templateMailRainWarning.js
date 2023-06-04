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

                    ul li {
                        list-style-type: none;
                    }


                    .mail-rain {
                        background-color: #FDCEDF;
                        
                        padding: 40px;
                    }

                    .mail-rain__content {
                        padding: 20px;
                        margin: 40px;

                        background-color: #FFF;
                        border: 5px solid #F8E8EE;
                        
                        border-radius: 10px;
                    }

                    .mail-rain-content__header {
                        margin-bottom: 20px;

                        color: #333;

                        border-bottom: 2px solid #f5f5f5;
                    }

                    @media screen and (max-width: 800px) {
                        .image-goodmorning {
                            width: 100%;
                        }

                        .mail-rain {
                            padding: 10px;
                        }

                        .mail-rain__content {
                            padding: 10px;
                            margin: 10px;
                        }
                    }

                </style>
            </head>
            <body>
                <div class="mail-rain">
                    <div class="mail-rain__content">
                        <div class="mail-rain-content__header">
                            <h1 class="text-center">Cảnh báo trời mưa</h1>
                        </div>

                        <div class="mail-rain-content__body text-center">
                            <h3>Dear Em bé của anh ơi,</h3>
                            <p>Hôm nay Hà Nội có thể mưa em nhớ mang ô hoặc áo mưa nhé!</p>
                            <p>Di chuyển cẩn thận nha! Yêu em ❤️</p>

                            <div class="text-center">
                                <img src="${image}" alt="rain" class="image-rain" />
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
}

module.exports = {
    templateMailRainWarning
};