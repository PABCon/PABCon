let login1 = function() {

    var name = prompt("What is your user name?")

    if (name === "Admin") {

        var password = prompt("Please insert Password")

        if (password === "TheMaster") {

            alert("Welcome!")

        } else if (name === null) { alert("Cancelled") } else { alert("Wrong Password") }



    } else if (name === null) { alert("Cancelled") } else if (name == '') {
        alert("I don't know you")

    }

}