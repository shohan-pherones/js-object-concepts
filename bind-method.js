const ayesha = {
  id: 14251,
  money: 5000,
  name: "ayesha",
  treatDay: function (expense) {
    this.money = this.money - expense;
    return this.money;
  },
};

const mimi = {
  id: 14252,
  money: 6000,
  name: "mimi",
};

const bindMimi = ayesha.treatDay.bind(mimi);
const mimiTreatDe = bindMimi(500);
console.log(mimiTreatDe);
