let dice = [];

class Die {
    constructor() {
        this.roll();
        dice.push(this);
    }

    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
    }
}

let testDie = new Die();
console.log(testDie.value);
console.log(dice);