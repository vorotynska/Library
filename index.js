let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function () {
    console.log(`The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`)
}


function addBookToLibrary() {
    //do stuff here
    const book1 = new Book('Hel', 'bel', '222', 'not read')
    myLibrary.push(book1)
    console.log(book1.info())
    console.log(myLibrary)
    return book1.info()
}
addBookToLibrary()

let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper

user.fullName = 'ira vort'
alert(user.name)