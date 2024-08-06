let personName: string = "Manik";
let personAge = <number>23;
let personGender = "male" as string;

console.log(personName);
console.log(personAge);
console.log(personGender);
console.log(typeof personAge);
console.log(typeof personGender);

interface Student {
  name: string;
  age: number;
}

let student = <Student>{};
student.name = "Harun";
student.age = 15;

console.log(student.name);
console.log(student.age);
