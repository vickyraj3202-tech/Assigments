const text = "I love learning JavaScript";
const lowerText = text.toLowerCase();
let vowels = 0;
let consonants = 0;
for (const character of lowerText) {
 if (character >= "a" && character <= "z") {
 if ("aeiou".includes(character)) {
 vowels++;
 } else {
 consonants++;
 }
 }
}
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);