class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  displayNameAge() {
    return `Name : ${this.name} Age : ${this.age}`;
  }
}

class Student extends User {
  roll: number;
  section: string;

  constructor(name: string, age: number, roll: number, section: string) {
    super(name, age);

    this.roll = roll;
    this.section = section;
  }

  displayRollSection() {
    return `${this.displayNameAge()} Roll : ${this.roll} Section : ${
      this.section
    }`;
  }
}

const student1 = new Student("Joy", 12, 10, "D");
const student2 = new Student("Zoro", 12, 1, "D");

console.log(student1.displayRollSection());
console.log(student2.displayRollSection());
