let dice = [];
let btnGenerate = $("#btn-generate");
let btnRoll = $("#btn-roll");

class Die {
    constructor() {
        this.roll();
        this.setText();
        this.div = $("<div>" + this.text + "</div>");
        $(this.div).addClass("die");
        $(this.div).appendTo("#dice-container");
        dice.push(this);
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

$(btnGenerate).click(function() {
    let die = new Die();
})