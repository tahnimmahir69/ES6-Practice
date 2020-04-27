class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Alipur Rahmania School & College"
    }
}

const student1 = new student(12, "Arfat");
const student2 = new student(22, "Niloy");
const student3 = new student(21, "Rita")
console.log(student1, student2, student3);
//Or
console.log(student1.name, student2.id, student3.school);