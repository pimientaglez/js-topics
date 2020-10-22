var Person = function (name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

var mark = new Person('Mark', 1990, 'Developer');

console.log(mark);