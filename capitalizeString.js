function capitalizeString(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      newStr += str[i].toUpperCase();
    } else if (str[i - 1] == ' ') {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

module.exports = capitalizeString;