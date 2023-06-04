const templateMailSummerWarning = () => {
    const { getRandomItem } = require('../helper/helper');
    const { summer_images } = require('../data/data.json');

    const image = getRandomItem(summer_images);

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Mail warning summer</title>

                <style>
                    .text-center {
                        text-align: center;
                    }

                    .image-summer {
                        width: 50%;
                    }

                    ul li {
                        list-style-type: none;
                    }


                    .mail-summer {
                        background-color: #FDCEDF;
                        
                        padding: 40px;
                    }

                    .mail-summer__content {
                        padding: 20px;
                        margin: 40px;

                        background-color: #FFF;
                        border: 5px solid #F8E8EE;
                        
                        border-radius: 10px;
                    }

                    .mail-summer-content__header {
                        margin-bottom: 20px;

                        color: #333;

                        border-bottom: 2px solid #f5f5f5;
                    }

                    @media screen and (max-width: 800px) {
                        .image-goodmorning {
                            width: 100%;
                        }

                        .mail-summer {
                            padding: 10px;
                        }

                        .mail-summer__content {
                            padding: 10px;
                            margin: 10px;
                        }
                    }

                </style>
            </head>
            <body>
                <div class="mail-summer">
                    <div class="mail-summer__content">
                        <div class="mail-summer-content__header">
                            <h1 class="text-center">Cảnh báo nắng nóng gay gắt</h1>
                        </div>

                        <div class="mail-summer-content__body text-center">
                            <h3>Dear Em bé của anh ơi,</h3>
                            <p>Hôm nay Hà Nội nắng nóng lắm baby nha!</p>

                            <div class="text-center">
                                <h3>
                                    <b style="color: red;">Lưu ý:</b>
                                    <p>Nhớ bôi kem chống nắng trước khi ra đường</p>
                                    <p>Nhớ mang áo chống nắng khi ra đường</p>
                                    <p>Nhớ uống đủ 2 lít nước mỗi ngày</p>
                                </h3>
                            </div>

                            <div class="text-center">
                                <img src="${image}" alt="summer" class="image-summer" />
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
}

module.exports = {
    templateMailSummerWarning
};