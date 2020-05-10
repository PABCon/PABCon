/* Functions */

let add = function(a, b) {

    return a + b;

}

let multiply = function(a, b) {


    return a * b;
}

let subtract = function(a, b) {

    return a - b;

}

let power = function(a, b) {

    return Math.pow(a, b);
}

let divide = function(a, b) {

    return a / b;
}

let operate = function(a, sign, b) {

    switch (sign) {

        case "+":
            add(a, b);
            break;

        case "-":
            subtract(a, b);
            break

        case "*":
            multiply(a, b);
            break

        case "/":
            divide(a, b);
            break

        case "^":
            power(a, b);
            break



    }

}

let clean = function() {

    result.innerHTML = "";
}

/* select elements */

let buttons = document.querySelectorAll(".button");
let numButtons = buttons.length;
let reset = document.querySelector(".reset");
let result = document.querySelector(".result");
var a;
var b;



/* Event listeners */

for (let i = 0; i < numButtons; i++) {
    buttons[i].addEventListener('click', (e) => {
        if (result.innerHTML.length > 40) { alert("you reached the max number for your calculation") } else { result.innerHTML += e.target.value; }





    })
};

reset.addEventListener('click', clean)
window.addEventListener('keydown', (e) => {
    console.log(e.keyCode)
        /* switch (e.key) {

            case "Escape":
                clean();
                break
} */



})