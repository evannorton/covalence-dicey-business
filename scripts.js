let dice = [];

class Die {
    constructor() {
        this.roll();
        this.setText();
        dice.push(this);
        this.div = $("<div>" + this.text + "</div>");
        $(this.div).addClass("die");
        $(this.div).appendTo("#dice-container");
    }

    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
    }

    setText() {
        if (this.value === 1 ) {
            this.text = "&#9856";
        } else if (this.value === 2) {
            this.text = "&#9857"
        } else if (this.value === 3) {
            this.text = "&#9858";
        } else if (this.value === 4 ) {
            this.text = "&#9859";
        } else if (this.value === 5) {
            this.text = "&#9860";
        } else {
            this.text = "&#9861";
        }
    }
}

let testDie = new Die();
console.log(testDie.value);
console.log(dice);
let testDie2 = new Die();
console.log(testDie2.value);
console.log(dice);