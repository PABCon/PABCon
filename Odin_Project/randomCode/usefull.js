/*Code to change the color of background and color based on selector choice. 
(Question: Why the choice is selected as lower case first letter and not big letter)
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
*/
const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function() {
    const choice = select.value;

    // ADD SWITCH STATEMENT

    switch (choice) {

        case "white":
            update('white', 'black');
            break;

        case "black":
            update('black', 'white');
            break;

        case "yellow":
            update('yellow', 'grey');
            break;

        case "psychedelic":
            update('orange', 'black');
            break;

        case "purple":
            update('purple', 'black');
            break;

        default:
            update('white', 'black');
            break;


    }
}

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}