// 1. Declare variables using let, const, and var
function variableExample() {
  let name = "Vicky Raj";
  const country = "India";
  var age = 21;

  console.log(name, country, age);

  if (true) {
    let blockLet = "I use the let";
    const blockConst = "I use const";
    var functionVar = "I use var";

    console.log(blockLet, blockConst);
  }
  console.log(functionVar);

}

variableExample();




// 2. Return the second fruit
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit(array) {
  return array[1];
}

console.log("Second fruit:", getSecondFruit(fruits));



// 3. Add an element using push(), then remove it using pop()
function addAndRemove(array, newElement) {
  array.push(newElement);
  array.pop();

  return array;
}

console.log("After push and pop:", addAndRemove([1, 2, 3], 4));



// 4. Square each number using map()
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(array) {
  return array.map((number) => number * number);
}

console.log("Squared numbers:", squareNumbers(numbers));



// 5. Remove even numbers and return odd numbers using filter()
function getOddNumbers(array) {
  return array.filter((number) => number % 2 !== 0);
}

console.log("Odd numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));



// 6. Log a greeting using object properties
const person = {
  name: "Aman",
  age: 22,
  occupation: "Developer",
};

function greetPerson(person) {
  console.log(
    `Hello! My name is ${person.name}. I am ${person.age} years old and I work as a ${person.occupation}.`
  );
}

greetPerson(person);


// 7. Calculate the area of a rectangle
function rectangleArea(rectangle) {
  return rectangle.width * rectangle.height;
}

console.log("Rectangle area:", rectangleArea({ width: 10, height: 5 }));
s
function getObjectKeys(object) {
  return Object.keys(object);
}

console.log("Person keys:", getObjectKeys(person));
function mergeObjects(object1, object2) {
  return Object.assign({}, object1, object2);
}

console.log(
  "Merged object:",
  mergeObjects({ name: "Vicky", age: 21 }, { occupation: "Developer" })
);


function sumNumbers(array) {
  return array.reduce((total, number) => total + number, 0);
}

console.log("Sum:", sumNumbers(numbers));
