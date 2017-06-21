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
