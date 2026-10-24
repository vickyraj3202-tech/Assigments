function countWords(paragraph) {
  paragraph = paragraph.trim();

  if (paragraph === "") {
    return 0;
  }

  return paragraph.split(/\s+/).length;
}

console.log(countWords("I love my India")); 
console.log(countWords("Hello   world"));   
console.log(countWords(""));                