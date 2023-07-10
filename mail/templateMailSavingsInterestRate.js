function generateTable(item) {
  const { type, data } = item;

  return `
    <table style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th colspan="7" style="border: 1px solid #dddddd; text-align: left; padding: 8px; text-align: center; background-color: #071952; color: white;">
            ${
              type === "online" ? "Tiết kiệm online" : "Tiết kiệm tại quầy"
            }
          </th>
        </tr>

        <tr>
          <th rowspan="2" style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; background-color: #071952; color: white;">Ngân hàng</th>
          <th colspan="5" style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; background-color: #071952; color: white;">Lãi suất (Đơn vị: %/năm)</th>
        </tr>
        
        <tr>
          <th style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; min-width: 50px; background-color: #071952; color: white;">1</th>
          <th style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; min-width: 50px; background-color: #071952; color: white;">3</th>
          <th style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; min-width: 50px; background-color: #071952; color: white;">6</th>
          <th style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; min-width: 50px; background-color: #071952; color: white;">9</th>
          <th style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; min-width: 50px; background-color: #071952; color: white;">12</th>
        </tr>
      </thead>

      <tbody>
        ${generateBodyTable(data)}
      </tbody>
    </table>
  `;
}

function generateBodyTable(data) {
  const len = data.length;
  let idx = 0;

  let html = "";

  while (idx < len) {
    const item = data[idx];

    const minRate1 = findMin(data, "rate_1");
    const minRate3 = findMin(data, "rate_3");
    const minRate6 = findMin(data, "rate_6");
    const minRate9 = findMin(data, "rate_9");
    const minRate12 = findMin(data, "rate_12");

    const maxRate1 = findMax(data, "rate_1");
    const maxRate3 = findMax(data, "rate_3");
    const maxRate6 = findMax(data, "rate_6");
    const maxRate9 = findMax(data, "rate_9");
    const maxRate12 = findMax(data, "rate_12");

    html += `
      <tr>
        <td style="border: 1px solid #dddddd; border-top: none !important;; text-align: left; padding: 8px; display: flex; align-items: center;">
          ${ item.logo_1 ? `<img src="${item.logo_1}" alt="${item.bank}" width="30" height="30" />` : '' }
          <div style="margin-left: 10px; line-height: 30px; font-weight: bold;">${item.bank}</div>
        </td>

        <td style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; ${minRate1 === item.rate_1 ? 'background-color: red; font-weight: bold; color: white;' : '' } ${maxRate1 === item.rate_1 ? 'background-color: green; font-weight: bold; color: white;' : ''}">
          ${item.rate_1}
        </td>

        <td style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; ${minRate3 === item.rate_3 ? 'background-color: red; font-weight: bold; color: white;' : '' } ${maxRate3 === item.rate_3 ? 'background-color: green; font-weight: bold; color: white;' : ''}">
          ${item.rate_3}
        </td>

        <td style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; ${minRate6 === item.rate_6 ? 'background-color: red; font-weight: bold; color: white;' : '' } ${maxRate6 === item.rate_6 ? 'background-color: green; font-weight: bold; color: white;' : ''}">
          ${item.rate_6}
        </td>

        <td style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; ${minRate9 === item.rate_9 ? 'background-color: red; font-weight: bold; color: white;' : '' } ${maxRate9 === item.rate_9 ? 'background-color: green; font-weight: bold; color: white;' : ''}">
          ${item.rate_9}
        </td>

        <td style="border: 1px solid #dddddd; border-top: none !important; text-align: left; padding: 8px; text-align: center; ${minRate12 === item.rate_12 ? 'background-color: red; font-weight: bold; color: white;' : '' } ${maxRate12 === item.rate_12 ? 'background-color: green; font-weight: bold; color: white;' : ''}">
          ${item.rate_12}
        </td>
      </tr>
    `

    idx++;
  }

  return html;
}

const findMin = (data, key) => {
  if (key) {
    return Math.min(...data.map(item => item[key]));
  }

  return null;
}

const findMax = (data, key) => {
  if (key) {
    return Math.max(...data.map(item => item[key]));
  }

  return null;
}

function generateBreak(number = 1) {
  let html = "";

  for (let i = 0; i < number; i++) {
    html += `<br />`;
  }


  return html;
}

const templateMailSavingsInterestRate = (data) => {
  if (!data) return "Lỗi lấy thông tin lãi suất tiết kiệm";

  if (!Array.isArray(data)) return "Lỗi lấy thông tin lãi suất tiết kiệm";

  if (data.length === 0) return "Không có thông tin lãi suất tiết kiệm";

  let html = "";

  if (data.length === 1) {
    html = `
      <h1 style="text-align: center;">Lãi suất tiết kiệm</h1>

      ${generateBreak(2)}

      ${generateTable(data[0])}
    `
  }

  if (data.length > 1) {
    html = `
      <div style="text-align: center; font-size: 25px; font-weight: bold; text-transform: uppercase;">Lãi suất tiết kiệm</div>
      <div style="text-align: center; font-size: 12px; font-style: italic;">${new Date().toLocaleTimeString('vi-VI')} - ${ new Date().toLocaleDateString("vi-VI") }</div>
      <div style="text-align: center; font-size: 12px; font-style: italic;">(Kênh online và tại quầy)</div>

      ${generateBreak(2)}

      ${generateTable(data[0])}

      ${generateBreak(1)}

      ${generateTable(data[1])}
    `
  }

  return html;
}

module.exports = {
  templateMailSavingsInterestRate
};