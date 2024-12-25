function addToCard(a, b, c){
    if( b== "+"){
        document.write(a + c)
    }else if(b == "-"){
        document.write(a - c)
    }else if(b== "*"){
        document.write(a * c)
    }else if(b== "/"){
        document.write(a / c)
    }else if(b== "%"){
        document.write(a % c)
    }else{
        document.write("Invalid Operater")
    }
}
addToCard(Number(prompt("Enter Your first Operand")),prompt("Enter Your Operater"),Number(prompt("Enter your Second Operand")))
document.write("<br>")
document.write("<br>")
let name = ["Hmaza","Maaz","Daniyal","Ahmad raza","Abdullah"];
name.push("Ali")
document.write(name,"<br>")
let name2 = ["Shahbaz","Hassan","Alish","Safie","Ahmad Mohi-u-din","Anas"]
name2.pop()
document.write(name2,"<br>")
let name3 = ["Hmaza","Maaz","Daniyal","Ahmad raza","Abdullah","Shahbaz","Hassan","Alish","Safie","Ahmad Mohi-u-din","Anas"]
name3.unshift("Huzaifa")
document.write(name3,"<br>")
let name4 = ["Hmaza","Maaz","Daniyal","Ahmad raza","Abdullah","Shahbaz","Hassan","Alish","Safie","Ahmad Mohi-u-din","Anas"]
name4.shift()
document.write(name4,"<br>")
let = name5 = ["Hmaza","Maaz","Daniyal","Ahmad raza","Abdullah","Shahbaz","Hassan","Alish","Safie","Ahmad Mohi-u-din","Anas"]
name5.splice(3,0,"Ahad")
document.write(name5)
name5.splice(4,2)
document.write(name5)