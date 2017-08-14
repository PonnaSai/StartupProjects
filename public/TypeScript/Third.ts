var myname : string ="Sai";
var age : number =40;
var CanIcome : boolean = true;
var anything: any ="test";
anything = 5;
anything = "Hello";
document.getElementById("Third").innerHTML="My name is " + myname +"<br/>";
document.write("My name is " + typeof(myname) + "<br/>");
document.write("My age is " + typeof(age) + "<br/>");
document.write("Can i Come is " + typeof(CanIcome) + "<br/>");
document.write("Anything is " + typeof(anything) + "<br/>")
document.write("<br/>")
document.write("<br/>")


/// Interface example
document.write("Interface example"+"<br/>")
interface SuperHero{
    realname : String;
    supername : String;
}
var superman : SuperHero = {
    realname :"Sai",
    supername :"Superman"
}
document.write(superman.realname + " is " + superman.supername +"<br/>");
document.write("<br/>")
document.write("<br/>")
/// Array example
var employees: string[] = [" Saiprakash " , " Ponna"];
document.write(employees.toString() + "<br/>")
interface SuperHero{
    realname : String;
    supername : String;
}
var superheros : SuperHero[] =[];
superheros.push({
    realname :"Sai",
    supername :"Batman"
});
document.write(superheros[0].realname+ " is " + superheros[0].supername +"<br/>");
document.write(superheros[1].realname + "" + superheros[1].supername[1] +"<br/>")