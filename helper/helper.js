function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

function getDateTomorrow() {
    const date = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Ho_Chi_Minh"}));

    const tomorrow = new Date(date.getTime() + 86400000);

    const day = tomorrow.getDate();
    const month = tomorrow.getMonth() + 1;
    const year = tomorrow.getFullYear();

    return `${format2Digits(day)}/${format2Digits(month)}/${year}`;
}

function format2Digits(number) {
    return number < 10 ? `0${number}` : number;
}

function generateTableEelectricCutSchedule(data, typeScreen = "sm") {
    if (typeScreen === "sm") {
        return `
            ${(data.map((item, index) => {
                return `
                    <table class="table-electric-cut-schedule-sm">
                        <tr class="table-th">
                            <td colspan="2">
                                ${index + 1}
                            </td>
                        </tr>
                        <tr>
                            <td class="table-th">
                                CÔNG TY ĐIỆN LỰC
                            </td>
                            <td>
                                ${item.tenDonVi}
                            </td>
                        </tr>
                        <tr>
                            <td class="table-th">
                                NGÀY
                            </td>
                            <td>
                                ${item.ngayTHien}
                            </td>
                        </tr>
                        <tr>
                            <td class="table-th">
                                GIỜ
                            </td>
                            <td>
                                ${item.khoangThoiGian}
                            </td>
                        </tr>
                        <tr>
                            <td class="table-th">
                                KHU VỰC
                            </td>
                            <td>
                                ${item.khuVuc}
                            </td>
                        </tr>
                        <tr>
                            <td class="table-th">
                                LÝ DO
                            </td>
                            <td>
                                ${item.hinhThucDangKy}
                            </td>
                        </tr>
                        <tr>
                            <td class="table-th">
                                TRẠNG THÁI
                            </td>
                            <td>
                                ${item.trangthai}
                            </td>
                        </tr>
                    </table>
                `;
            })).join("")}
        `;
    }

    if (typeScreen === "lg") {
        return `
            <table class="table-electric-cut-schedule-lg">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>CÔNG TY ĐIỆN LỰC</th>
                        <th>NGÀY</th>
                        <th>GIỜ</th>
                        <th>KHU VỰC</th>
                        <th>LÝ DO</th>
                        <th>TRẠNG THÁI</th>
                    </tr>
                </thead>

                <tbody>
                    ${
                        (data.map((item, index) => {
                            return (`
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${item.tenDonVi}</td>
                                    <td>${item.ngayTHien}</td>
                                    <td>${item.khoangThoiGian}</td>
                                    <td>${item.khuVuc}</td>
                                    <td>${item.hinhThucDangKy}</td>
                                    <td>${item.trangthai}</td>
                                </tr>
                            `);
                        })).join("")
                    }
                </tbody>
            </table>
        `;
    }
}

module.exports = {
    getRandomItem,
    getDateTomorrow,
    generateTableEelectricCutSchedule
};