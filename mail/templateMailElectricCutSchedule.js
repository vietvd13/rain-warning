const { generateTableEelectricCutSchedule } = require("../helper/helper");

const templateMailElectricCutSchedule = (data, date) => {
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


                    .mail-electric-cut-schedule {
                        background-color: #FDCEDF;
                        
                        padding: 40px;
                    }

                    .mail-electric-cut-schedule__content {
                        padding: 20px;
                        margin: 40px;

                        background-color: #FFF;
                        border: 5px solid #F8E8EE;
                        
                        border-radius: 10px;
                    }

                    .mail-electric-cut-schedule-content__header {
                        margin-bottom: 20px;

                        color: #333;

                        border-bottom: 2px solid #dee2e6;
                    }

                    .screen-lg {
                        display: block;
                        margin: 20px 0 30px 0;
                    }

                    .screen-sm {
                        display: none;
                        margin: 20px 0 30px 0;
                    }

                    .table-electric-cut-schedule-lg {
                        width: 100%;
                        border-collapse: collapse;
                    }

                    .table-electric-cut-schedule-lg th {
                        padding: 10px;
                        border: 1px solid #dee2e6;
                        min-width: 100px;

                        font-weight: bold;

                        background-color: #FDCEDF;
                    }

                    .table-electric-cut-schedule-lg td {
                        padding: 10px;
                        border: 1px solid #dee2e6;
                    }

                    .table-electric-cut-schedule-sm {
                        width: 100%;
                        border-collapse: collapse;

                        margin-bottom: 20px;
                    }

                    .table-electric-cut-schedule-sm td {
                        padding: 10px;
                        border: 1px solid #dee2e6;
                    }

                    .table-electric-cut-schedule-sm .table-th {
                        font-weight: bold;

                        background-color: #FDCEDF;
                    }

                    @media screen and (max-width: 800px) {
                        .image-electric-cut-schedule {
                            width: 100%;
                        }

                        .mail-electric-cut-schedule {
                            padding: 10px;
                        }

                        .mail-electric-cut-schedule__content {
                            padding: 10px;
                            margin: 10px;
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
                <div class="mail-electric-cut-schedule">
                    <div class="mail-electric-cut-schedule__content">
                        <div class="mail-electric-cut-schedule-content__header">
                            <h1 class="text-center">Sắp bị cúp điện này bé iu ơiiii</h1>
                        </div>

                        <div class="mail-electric-cut-schedule-content__body text-center">
                            <h3>Lịch cắt điện: ${date}</h3>

                            <div class="screen-lg">
                                ${generateTableEelectricCutSchedule(data, "lg")}
                            </div>

                            <div class="screen-sm">
                                ${generateTableEelectricCutSchedule(data, "sm")}
                            </div>

                            <div class="text-center">
                                <img src="https://media.giphy.com/media/QNFhSB9oz8BMr5QyzK/giphy.gif" alt="electric-cut-schedule" class="image-electric-cut-schedule" />
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
}

module.exports = {
    templateMailElectricCutSchedule
};