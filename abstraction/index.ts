abstract class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  abstract display(): string;
}

class Student extends User {
  roll: number;
  section: string;

  constructor(name: string, age: number, roll: number, section: string) {
    super(name, age);

    this.roll = roll;
    this.section = section;
  }

  display():string {
    return `Name : ${this.name} Age: ${this.age} Roll : ${this.roll} Section : ${this.section}`;
  }
}

const student1 = new Student("Joy", 12, 10, "D");

console.log(student1.display());
