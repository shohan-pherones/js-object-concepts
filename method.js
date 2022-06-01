const student = {
  id: 14251,
  money: 5000,
  name: "ayesha",
  major: "fashion design",
  isRich: false,
  subjects: ["english", "apparel", "sweing", "math", "textile"],
  bestFriend: {
    name: "natasha",
    major: "fashion design",
  },
  takeExam: function () {
    console.log(this.name, "is taking exam");
  },
  treatDay: function (expense, tips) {
    this.money = this.money - expense - tips;
    return this.money;
  },
};

student.takeExam();
const remaining = student.treatDay(1800, 100);
console.log(remaining);
