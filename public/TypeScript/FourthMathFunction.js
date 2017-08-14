var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.test = function (i, j) {
        console.log(i + j);
    };
    return Greeting;
}());
var obj = new Greeting();
obj.test(10, 20);
var secondgrett = (function () {
    function secondgrett() {
    }
    secondgrett.prototype.test2 = function (x, y) {
        console.log(x + y);
    };
    return secondgrett;
}());
var obj2 = new secondgrett();
obj2.test2(20, 80);
document.write("5 + 4 =" + (5 + 4));
document.write("5 - 4 =" + (5 - 4));
document.write("5 * 4 =" + (5 * 4));
document.write("5 / 4 =" + (5 / 4));
document.write("5 % 4 =" + (5 % 4));
