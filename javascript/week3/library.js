class Book {
    constructor(title, author, available = true){
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

let library = {
    books: [],

    addBook: function (title, author){
        const book = new Book(title, author);
        this.books.push(book);
        console.log(`${book.title} by ${book.author} added to the library`);
    },

    checkOutBook: function(title){
        try {
            for (let book of this.books) {
                if (book.available === true) {
                    found = true;
                    book.available === false;
                    console.log(`Thank you for checking out ${book.title}`);
                    break;
                } 
            }
            if (!found) throw new Error('Book does not exist in our library');
        }
            catch(err){
                console.log(`${err.message}`)
            }
        },
    
    getAvailableBooks: function (){
        booksAvail = []
        for (let book of this.books){
            if (book.available === true){
                booksAvail.push(book.title);
            }
        }
        console.log(`Available books: ${booksAvail}`)
    }
}

let newBooks = `[
    {
        "title": "Pop Punk Classics",
        "author": "Tom Delonge"
    },
    {
        "title": "Modern Pop Punk: Hint, it sucks",
        "author": "Kurt Cobain"
    },
    {
        "title": "New kids, emo isn't just crying on an AI generated track",
        "author": "James Dycus"
    }
]`

function receiveBooks(newBooks){
    let addedBooks = JSON.parse(newBooks);
    for (let book of addedBooks){
        library.addBook(book.title, book.author);
    }
}



// Tests
console.log(`There are currently ${library.books.length} books in the library's database.`);
library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
receiveBooks(newBooks);
library.checkOutBook("Eloquent JavaScript");
library.checkOutBook("Pop Punk Classics");
library.getAvailableBooks();