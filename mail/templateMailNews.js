const { generateListNews } = require("../helper/helper");

const templateMailNews = (data) => {
  if (!data) {
    return null;
  }

  console.log(data);

  return `
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Mail news</title>

              <style>
                .text-center {
                  text-align: center;
                }

                .mail-news {
                  background-color: #FDCEDF;
                  
                  padding: 10px;
                }

                .mail-news__content {
                  padding: 20px;

                  background-color: #FFF;
                  border: 5px solid #F8E8EE;
                  
                  border-radius: 10px;
                }

                .mail-news__header {
                  margin-bottom: 20px;

                  color: #333;

                  border-bottom: 2px solid #dee2e6;
                }

                .table-news-sm {
                  width: 100%;
                  border-collapse: collapse;

                  margin-bottom: 20px;
                }

                .table-news-sm .table-th {
                  font-weight: bold;

                  background-color: #FDCEDF;
                }

                .table-news-sm td {
                  padding: 10px;
                  border: 1px solid #dee2e6;
                }

                .table-news-sm td img {
                  width: 280px;
                }

                .text-desc {
                  text-align: justify !important;
                }

                .screen-lg {
                  display: block;
                  margin: 20px 0 30px 0;
                }

                .screen-sm {
                  display: none;
                  margin: 20px 0 30px 0;
                }

                @media screen and (max-width: 800px) {
                    .table-news-sm td img {
                      width: 100%;
                    }

                    .screen-lg {
                      display: none;
                    }

                    .screen-sm {
                      display: block;
                    }
                }
              </style>
          </head>
          <body>
              <div class="mail-news">
                <div class="mail-news__content">
                  <div class="mail-news__header">
                    <h1 class="text-center">Tổng hợp tin tức trong ngày</h1>
                  </div>

                  <div class="mail-news__body text-center">
                    <div class="screen-lg">
                        ${generateListNews(data, "sm")}
                    </div>

                    <div class="screen-sm">
                        ${generateListNews(data, "sm")}
                    </div>
                  </div>
                </div>
              </div>
          </body>
      </html>
  `;
}

module.exports = {
  templateMailNews
};