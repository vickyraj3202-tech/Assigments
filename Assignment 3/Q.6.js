const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
const greaterNumbers = inputArr.filter(function (number) {
    return number > 5;
});
console.log(greaterNumbers);