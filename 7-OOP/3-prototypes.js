function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function(){
    return `${this.title} fue escrito por ${this.author} en ${this.year}`
}

const book1 = new Book('title1', 'Mario', '2020');
const book2 = new Book('title2', 'Maria', '2020');

console.log(book1);
console.log(Book.prototype.constructor);
