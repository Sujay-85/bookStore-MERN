// Parent class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}// Child class extends the Person class
class Student extends Person {
    constructor(name, age, college) {
        super(name, age);  // Calls the parent class constructor
        this.college = college;
    }

    // Method specific to Student class
    study() {
        return `${this.name} is studying at ${this.college}.`;
    }
}

// Creating an instance of Student
const student = new Student('Sujal', 19, 'FAMT');

console.log(student.greet());    // Output: Hello, my name is Sujal and I am 19 years old.
console.log(student.study()); 

function Demo(){
   // Output: Sujal is studying at FAMT.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Skills {
    constructor(skills) {
        this.skills = skills;
    }

    getSkills() {
        return `Skills: ${this.skills.join(', ')}`;
    }
}

class Student {
    constructor(name, age, skills, college) {
        this.person = new Person(name, age);
        this.skills = new Skills(skills);
        this.college = college;
    }

    getStudentInfo() {
        return `${this.person.getDetails()}, College: ${this.college}, ${this.skills.getSkills()}`;
    }
}

const student = new Student('Sujal', 19, ['JavaScript', 'Python', 'React'], 'FAMT');
console.log(student.getStudentInfo());
}
Demo();