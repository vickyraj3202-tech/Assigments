const students = [
 { name: "Ram", scores: [80, 70, 60] },
 { name: "Mohan", scores: [80, 70, 90] },
 { name: "Sai", scores: [60, 70, 80] },
 { name: "Hemang", scores: [90, 90, 80, 80] }
];
const studentAverages = students.map(function (student) {
 const total = student.scores.reduce(function (sum, score) {
 return sum + score;
 }, 0);
 const average = total / student.scores.length;
 return {
 name: student.name,
 average: average
 };
});
console.log(studentAverages);