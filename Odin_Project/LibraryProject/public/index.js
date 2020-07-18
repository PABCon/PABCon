// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyAOjGyQG0eHQLqXomKYKTpdg0tmwaZvaiU",
    authDomain: "library-app-d49fe.firebaseapp.com",
    databaseURL: "https://library-app-d49fe.firebaseio.com",
    projectId: "library-app-d49fe",
    storageBucket: "library-app-d49fe.appspot.com",
    messagingSenderId: "168203985001",
    appId: "1:168203985001:web:d79809c549371b5df642f8"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

/* Variables definitons */

let newBook = new Book("Web Design with HTML, CSS, JavaScript and jQuery Set", "Jon Duckett", 1152, "No", 1);
let newBook1 = new Book("Cold Wicked Lies", "Toni Anderson", 404, "No", 2);
let myLibrary = [newBook, newBook1];



const submit = document.getElementById("submit_button").addEventListener("click", submitBook);
const table = document.getElementsByTagName("table");


/* Constructor */

function Book(title, author, pages, read, id) {

    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read,
        this.id = id,
        this.info = function() {

            return (`${title} by ${author}, ${pages} pages, Read:${read}, Book ID ${id}`)
        }

}

/* Functions */
function generateBookId() {

    let id = [];

    for (let i = 0; i <= 7; i++) {

        var n = Math.floor(Math.random() * (9 - 0)) + 0;
        id.push(n);
    }
    return id.join("");

}

function remove(e) {

    var a = e.path[2].classList.value;


    var toDelete = document.querySelector(`.${a}`);
    console.log(`.${a}`);

    toDelete.remove();

};


function addBookToLibrary(title, author, pages, read, id) {

    myLibrary.push(new Book(title, author, pages, read, id));

    const docRef = db.collection("Book").doc(`${title}`);

    docRef.set({

        title_name: title,
        author_name: author,
        number_pages: pages,
        read_check: read,
        book_id: id,

    }).then(function() {
        console.log("status saved!");
    }).catch(function(error) {
        console.log("Got an error:", error);
    }, { merge: true })


    render(myLibrary.length - 1);
};


function render(n) {
    let arguments_new = ["title_name", "author_name", "number_pages", "read_check", "book_id"];
    let arguments = ["title", "author", "pages", "read", "id"];


    console.log()
    for (let i = n; i < myLibrary.length; i++) {

        var row = document.createElement("tr");
        row.classList.add(`row${i}`);
        document.querySelector(".tablebody").appendChild(row);

        for (let j = 0; j < 4; j++) {
            id = `.row${i}`;
            var column = document.createElement("td");
            column.textContent = myLibrary[i][arguments[j]];
            document.querySelector(id).appendChild(column);

        }
        var column = document.createElement("td");
        document.querySelector(id).appendChild(column);
        var btn = document.createElement("button")
        btn.classList.add("button")
        btn.onclick = remove;
        column.appendChild(btn)
        document.querySelector(id).appendChild(column);

    }

};

function reset() {
    document.getElementById("form").reset();
}


function checkedRadio() {

    if (document.getElementById("read_yes").checked == true) { return "Yes" } else { return "No" }

}

function submitBook(e) {

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = checkedRadio();
    let id = generateBookId();


    addBookToLibrary(title, author, pages, read, id)

    reset();
    e.preventDefault();

    title.value = '';
    author.value = '';
    pages.value = '';

}



document.onload = render(0);