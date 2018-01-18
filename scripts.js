let dice = [];
let btnGenerate = $("#btn-generate");
let btnRoll = $("#btn-roll");

class Die {
    constructor() {
        //create div
        this.div = $("<div></div>")
        //call roll method
        this.roll();
        //add div to screen
        $(this.div).appendTo("#dice-container");
        dice.push(this);
    }

    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
        if (this.value === 1 ) {
            this.value = "⚀";
        } else if (this.value === 2) {
            this.value = "⚁"
        } else if (this.value === 3) {
            this.value = "⚂";
        } else if (this.value === 4 ) {
            this.value = "⚃";
        } else if (this.value === 5) {
            this.value = "⚄";
        } else {
            this.value = "⚅";
        }
        $(this.div).text("" + this.value + "");
        $(this.div).addClass("die");
    }
}

$(btnGenerate).click(function() {
    let die = new Die();
});

$(btnRoll).click(function() {
    for (let i = 0; i < dice.length; i++) {
        dice[i].roll();
    }
});