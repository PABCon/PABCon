let computerPlay = function() {


    let value = Math.round(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    console.log(value);
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


let playRound = function() {

    let playerValue = prompt("Choose Paper, Scissor or Rock");

    playerValue = playerValue.toLowerCase();

    computerValue = computerPlay();



    switch (playerValue) {

        case "rock":

            switch (computerValue) {

                case "rock":
                    alert(`${playerValue} and ${computerValue}, no one wins! :/ `);
                    return 0;
                case "scissor":
                    alert(`${playerValue} and ${computerValue}, player wins! :) `);
                    return 1;
                case "paper":
                    alert(`${playerValue} and ${computerValue}, computer wins! :( `);
                    return -1;


            }

        case "scissor":

            switch (computerValue) {

                case "rock":
                    alert(`${playerValue} and ${computerValue}, computer wins! :( `);
                    return -1;
                case "scissor":

                    alert(`${playerValue} and ${computerValue}, no one wins! :/ `);
                    return 0;
                case "paper":

                    alert(`${playerValue} and ${computerValue}, player wins! :)`)
                    return 1;


            }
        case "paper":

            switch (computerValue) {

                case "rock":
                    alert(`${playerValue} and ${computerValue}, player wins! :) `);
                    return 1;

                case "scissor":
                    alert(`${playerValue} and ${computerValue}, computer wins! :( `);
                    return -1;

                case "paper":

                    alert(`${playerValue} and ${computerValue}, no one wins! :/ `);
                    return 0;


            }


    }


}


let gameRPS = function() {

    let num = prompt("How many games you want to do? (only pass number)")

    let playerRes = 0;
    let computerRes = 0;

    for (let i = 0; i < num; i++) {

        let result = playRound();
        console.log(i, result)

        if (result == 1) {
            playerRes += 1;
        } else if (result == 0) {;
        } else if (result == -1) {
            computerRes += 1;

        }
    }

    console.log(`player has ${playerRes} and computer has ${computerRes}`);
    if (playerRes > computerRes) {
        alert(`You Win!!! You got ${playerRes} and computer had ${computerRes}!`)
    } else if (playerRes == computerRes) {
        alert(`It's a draw, too bad. Play again`)
    } else {
        alert(`Computer Wins! Best luck next time`)
    }


}



let pro = function(num) {

    let rock = 0;
    let scissor = 0;
    let paper = 0;

    for (let i = 0; i < num; i++) {

        let value = computerPlay();

        if (value == 'rock') {
            rock += 1
        } else if (value == 'scissor') {
            scissor += 1
        } else {
            paper += 1
        }
    }
    console.log(`rock ${rock} scissor ${scissor} paper ${paper}`)
}