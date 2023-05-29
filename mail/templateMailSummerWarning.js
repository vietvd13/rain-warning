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

                    @media screen and (max-width: 800px) {
                        .image-summer {
                            width: 100%;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="text-center">
                    <div>🌡️☀️🌡️</div>
                    <h2>Hôm nay Hà Nội nắng nóng lắm baby nha 😘</h2>
                </div>

                <div class="text-center">
                    <h3>
                        <b style="color: red;">Lưu ý:</b>
                        <ul>
                            <li>Nhớ bôi kem chống nắng trước khi ra đường</li>
                            <li>Nhớ mang áo chống nắng khi ra đường</li>
                            <li>Nhớ uống đủ 2 lít nước mỗi ngày</li>
                        </ul>
                    </h3>
                </div>

                <br />

                <div class="text-center">
                    <img src="${image}" alt="summer" class="image-summer" />
                </div>
            </body>
        </html>
    `;
}

module.exports = {
    templateMailSummerWarning
};