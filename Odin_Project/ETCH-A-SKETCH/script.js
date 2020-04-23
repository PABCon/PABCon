/* Declarations */

/* HTML Variables */

const bodyElem = document.querySelector("#container");
const squares = document.getElementsByClassName('item');
const color = document.querySelector('#color');
const numCol = document.querySelector("#columns");
const reset = document.querySelector(".reset");


/* CSS variables */

const htmlStyles = window.getComputedStyle(document.querySelector("html"));
const rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
const bgColor = parseInt(htmlStyles.getPropertyValue("--bgColor"));
document.documentElement.style.setProperty('--bgColor', 'green');

/* Functions */


let makeGrid = function(n) {

    while (bodyElem.hasChildNodes()) {
        bodyElem.removeChild(bodyElem.firstChild);
    }


    for (let i = 0; i < Math.pow(n, 2); i++) {

        document.documentElement.style.setProperty("--rowNum", n);
        document.documentElement.style.setProperty("--colNum", n);
        var a = document.createElement("div")
        a.classList.add('item')
        bodyElem.appendChild(a);

    }
}

let randomizeColor = function() {
    let randColor = Math.round(Math.floor(Math.random() * (255 - 1 + 1)) + 1);
    return randColor;
}


/* Event listeners */


/* still need to define reset button */

numCol.addEventListener('change', (e) => {


    if (e.target.value < 5 || e.target.value > 200) {
        alert("Choose a number between 10 and 200 ")

        numCol.value = 10;

    } else { makeGrid(e.target.value) }

})

color.addEventListener('change', (e) => {


    switch (e.target.value) {

        case 'blue':
            document.documentElement.style.setProperty('--bgColor', 'blue');
            break;

        case 'yellow':
            document.documentElement.style.setProperty('--bgColor', 'yellow');
            break;

        case 'green':
            document.documentElement.style.setProperty('--bgColor', 'green');
            break;
        case 'gray':
            document.documentElement.style.setProperty('--bgColor', 'gray');
            break;

        case 'red':
            document.documentElement.style.setProperty('--bgColor', 'red');
            break;

        case 'random':

            document.documentElement.style.setProperty('--bgColor', `rgb(${randomizeColor()}, ${randomizeColor()}, ${randomizeColor()})`);
            break;
    }



});

color.addEventListener('click', (e) => {


    switch (e.target.value) {

        case 'blue':
            document.documentElement.style.setProperty('--bgColor', 'blue');
            break;

        case 'yellow':
            document.documentElement.style.setProperty('--bgColor', 'yellow');
            break;

        case 'green':
            document.documentElement.style.setProperty('--bgColor', 'green');
            break;
        case 'gray':
            document.documentElement.style.setProperty('--bgColor', 'gray');
            break;

        case 'red':
            document.documentElement.style.setProperty('--bgColor', 'red');
            break;

        case 'random':

            document.documentElement.style.setProperty('--bgColor', `rgb(${randomizeColor()}, ${randomizeColor()}, ${randomizeColor()})`);
            break;
    }



});

makeGrid(5);

/* Summary */

/*  - Still missing changing colors when it hovers the squares and reset button 
    - Styling the final page
*/