class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} fue escrito por ${this.author} en ${this.year}`
    }
}

class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

const mag1 = new Magazine('Mag One', 'Mario', '2020', 'February');
console.log(mag1.getSummary());
