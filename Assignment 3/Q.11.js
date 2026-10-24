const students = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

const result = Object.fromEntries(
  Object.entries(students).map(([name, subjects]) => {
    const marks = Object.values(subjects);
    const total = marks.reduce((sum, mark) => sum + mark, 0);

    return [name, { average: total / marks.length }];
  })
);

console.log(result);