let string = "INDIA";
const letters = string.split("");
letters.splice(3, 0, "O", "N", "E", "S");
const country = letters.join("");
console.log(country);