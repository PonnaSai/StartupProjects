class Greeting 
{
    test(i:number, j:number):void{
        console.log(i+j)
    }
}

var obj = new Greeting();
obj.test(10,20)


class secondgrett{

    test2(x:number, y:number): void{
        console.log(x+y)
    }
}
var obj2 = new secondgrett();
obj2.test2(20,80);

document.write("5 + 4 =" + (5+4))
document.write("5 - 4 =" + (5-4))
document.write("5 * 4 =" + (5*4))
document.write("5 / 4 =" + (5/4))
document.write("5 % 4 =" + (5%4))
/// Let Example
let samplet = 123;

if (true) {
    let samplet = 456;
}
document.write("samplet :" + samplet + "<br />");
///Comparing  let with Var

var SecondSamplet = 789;
if(true) {
    var SecondSamplet = 100;
}
document.write("Samplet Test" + SecondSamplet + "<br />");