
const isValidNumber = (n) => {
    const regex = new RegExp('(^04[1]{1}[246]{1}|^04[2]{1}[4,6]{1})-[0-9]{7}');
    return regex.test(n)
}

module.exports = { isValidNumber };