const ayesha = {
  id: 14251,
  money: 5000,
  name: "ayesha",
  treatDay: function (expense, tips, tax) {
    this.money = this.money - expense - tips - tax;
    console.log(this);
    return this.money;
  },
};

const mimi = {
  id: 14252,
  money: 6000,
  name: "mimi",
};

const sarmin = {
  id: 14253,
  money: 4000,
  name: "sarmin",
};

//call
// ayesha.treatDay.call(mimi, 500, 10, 15);
// ayesha.treatDay.call(mimi, 300, 10, 10);

//apply
ayesha.treatDay.apply(mimi, [500, 20, 10]);
ayesha.treatDay.apply(sarmin, [300, 10, 5]);
