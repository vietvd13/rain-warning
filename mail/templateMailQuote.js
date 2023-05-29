const templateMailQuote = () => {
    const { quotes } = require('../data/data.json');

    console.log(quotes);

    return `${JSON.stringify(quotes)}`;
}

module.exports = {
    templateMailQuote
};