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


                    .mail-good-night {
                        background-color: #FDCEDF;
                        
                        padding: 40px;
                    }

                    .mail-good-night__content {
                        padding: 20px;
                        margin: 40px;

                        background-color: #FFF;
                        border: 5px solid #F8E8EE;
                        
                        border-radius: 10px;
                    }

                    .mail-good-night-content__header {
                        margin-bottom: 20px;

                        color: #333;

                        border-bottom: 2px solid #f5f5f5;
                    }

                    @media screen and (max-width: 800px) {
                        .image-goodnight {
                            width: 100%;
                        }

                        .mail-good-night {
                            padding: 10px;
                        }

                        .mail-good-night__content {
                            padding: 10px;
                            margin: 10px;
                        }
                    }

                </style>
            </head>
            <body>
                <div class="mail-good-night">
                    <div class="mail-good-night__content">
                        <div class="mail-good-night-content__header">
                            <h1 class="text-center">Chào buổi tối em bé của anh</h1>
                        </div>

                        <div class="mail-good-night-content__body text-center">
                            <h3>Dear Em bé của anh ơi,</h3>
                            <p>Chúc em ngủ ngon, ngủ sâu, ngủ say, ngủ nhiều, ngủ đủ, ngủ đẹp, ngủ đúng giờ, ngủ đủ giấc, ngủ đủ thứ, ngủ đủ thời gian, ngủ đủ tuổi, ngủ đủ lứa tuổi...</p>
                            <p>Yêu em ❤️</p>

                            <div class="text-center">
                                <img src="${image}" alt="goodnight" class="image-goodnight" />
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
}

module.exports = {
    templateMailGoodNight
};