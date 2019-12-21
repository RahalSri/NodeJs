function Greet() {
    this.greeting = 'Hellow Module';
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greet();