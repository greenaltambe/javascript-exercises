const palindromes = function (str) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanString = str
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join();
  const reversedString = cleanString.split("").reverse().join("");
  return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
