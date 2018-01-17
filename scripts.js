class Die {
    constructor(value) {
        this.value = value;
    }
    roll() {
        console.log("Rolled.");
        this.value = Math.floor(Math.random() * 6 + 1);
    }
}

let testDie = new Die(5);
testDie.roll();