class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        `${this.title} fue escrito por ${this.author} en ${this.year}`
    }
    static getBookStores(){
        return 'gonvill'
    }
}

const book1 = new Book('Book 1', 'Mario', '2020')
console.log(book1)

console.log(Book);