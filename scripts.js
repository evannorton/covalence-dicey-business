let dice = [];

class Die {
    constructor() {
        this.roll();
        dice.push(this);
        this.div = $("<div>&#9856</div>");
        $(this.div).addClass("die");
        $(this.div).appendTo("#dice-container");
    }

    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
    }
}

let testDie = new Die();
console.log(testDie.value);
console.log(dice);
let testDie2 = new Die();
console.log(testDie2.value);
console.log(dice);