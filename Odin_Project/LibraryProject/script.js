let newBook = new Book("Paulo", "test", 23, "No", "paulo");
let newBook1 = new Book("Paulo", "test", 23, "No", "paulo");
let myLibrary = [newBook, newBook1];



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

function generateBookId() {

    let id = [];

    for (let i = 0; i <= 7; i++) {

        var n = Math.floor(Math.random() * (9 - 0)) + 0;
        id.push(n);
    }
    return id.join("");

}

function addBookToLibrary(title, author, pages, read, id) {

    myLibrary.push(new Book(title, author, pages, read, id));

    render(myLibrary.length - 1);
};


function render(n) {
    let arguments = ["title", "author", "pages", "read", "id"]

    for (let i = n; i < myLibrary.length; i++) {
        id = "."
        var row = document.createElement("tr");
        row.classList.add(`row${i}`);
        document.querySelector(".tablebody").appendChild(row);

        for (let j = 0; j < 4; j++) {
            id = `.row${i}`;
            var column = document.createElement("th");
            column.textContent = myLibrary[i][arguments[j]];
            document.querySelector(id).appendChild(column);

        }

        document.querySelector(id).appendChild(column.appendChild(document.createElement("button")));

    }


};

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
    e.preventDefault();
}

const submit = document.getElementById("submit_button").addEventListener("click", submitBook);
const table = document.getElementsByTagName("table");
document.onload = render(0);