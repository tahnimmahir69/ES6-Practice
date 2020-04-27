class Parent{
    constructor(){
        this.fatherName = "Schwerznegger"
    }
}

class Child extends Parent{    ///[extends Paren] use kora hoicha ja child ar shata father connect kopra
    constructor(name){
        super();  // super use kora hoy father ar shata child connecr korar jonno
        this.name = name;
        
    }
    getFullName(){    //[aii concept ka bola hoy mathod] fathername and child name bad dayer jonno aii function
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("arnold");
const baby2 = new Child('Tom')
console.log(baby.getFullName());
console.log(baby2.getFullName());