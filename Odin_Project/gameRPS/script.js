let computerPlay = function() {


    let value = Math.round(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    switch (value) {

        case 1:
            return "scissor";
            break;

        case 2:
            return "rock";
            break;

        case 3:
            return "paper";
            break;


    }
}


let playRound = function(playerValue) {

    computerValue = computerPlay();
    switch (playerValue) {

        case "rock":

            switch (computerValue) {

                case "rock":
                    update(0);
                    break;
                case "scissor":
                    update(1);
                    break;
                case "paper":
                    update(-1);


            }
            break;
        case "scissor":

            switch (computerValue) {

                case "rock":
                    update(-1);
                    break;
                case "scissor":

                    update(0);
                    break;
                case "paper":

                    update(1);
                    break;

            }
            break;
        case "paper":

            switch (computerValue) {

                case "rock":
                    update(1);
                    break;

                case "scissor":
                    update(-1);
                    break;

                case "paper":

                    update(0);
                    break


            }

    }

}


let update = function(a) {



    switch (a) {

        case 1:
            c += 1;
            resultTable.innerHTML = `You win! A point for you! `;
            playerIndex.innerHTML += '|';
            playerCount.innerHTML = c;
            break;

        case 0:

            resultTable.innerHTML = `It's a draw!\n More luck next time! `;
            break;

        case -1:
            b += 1;
            resultTable.innerHTML = `You lose! A point for Computer! `;
            computerIndex.innerHTML += '|';
            computerCount.innerHTML = b;
            break;

        case 2:
            b = 0;
            c = 0;
            resultTable.innerHTML = '';
            computerIndex.innerHTML = '';
            playerIndex.innerHTML = '';
            computerCount.innerHTML = 0;
            playerCount.innerHTML = 0;


    }


}


const resultTable = document.querySelector('.result-box')
const playerIndex = document.querySelector('.resultPlayer')
const computerIndex = document.querySelector('.resultComputer')
const playerCount = document.querySelector('.playerCount')
const computerCount = document.querySelector('.computerCount')

let c = 0;
let b = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {


    button.addEventListener('click', (button) => {


        if (button.target.className == "paper") { playRound("paper") } else if (button.target.className == "rock") { playRound("rock") } else if (button.target.className == "scissor") { playRound("scissor") } else if (button.target.className == 'reset') { update(2) };


    });
});