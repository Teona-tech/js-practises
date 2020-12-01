class User {
    constructor (name,surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return this.name + " " + this.surname;
    }
}

class Student extends User{
    constructor (name,surname,year) {
        super(name,surname);
        this.year = year;
    }

    getCourse () {
        var today = new Date();
        var yyyy = today.getFullYear();
        var course = yyyy-this.year;
        if (course <= 4 && course>0 ){
            return course;

        }else{
            return "you are not a student";
        }
    }

}

var student = new Student("proto","javaxishvili",2020);
console.log(student.name);
console.log(student.surname);
console.log(student.year);
console.log(student.getCourse());
console.log(student.getFullName());
