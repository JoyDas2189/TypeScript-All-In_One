// 1. Write a TypeScript program that creates a class called Student with properties name and class. Implement a constructor that initializes these properties when a Student object is created.

/* 
class Student {
    name:string;
    readingClass:string;

    constructor(name:string, readingClass:string) {
        this.name = name;
        this.readingClass = readingClass;
    }
}

const student1:Student = new Student ("Joy", "BSc");
console.log(student1);
 */



// 2. Write a TypeScript exercise that defines an abstract class called Animal with properties like name and an abstract method makeSound(). Create derived classes (e.g., Tiger, Lion) that extend Animal and implement the makeSound() method with the unique sound each animal makes.

/* 
abstract class Animal {
    name: string;
    constructor(name:string) {
        this.name = name;
    }

    abstract makeSound():string;
}

class Lion extends Animal {

    constructor(name:string) {
        super(name);
    }

    makeSound(): string {
        return `${this.name} roars`;
    }
}

const lion:Lion = new Lion ("Shingho");

console.log(lion.makeSound());
 */



// 3. Write a TypeScript program that creates a class called Animal with the following properties and methods:
// *protected name: string
// *private age: number
// The class should have a constructor that accepts name and age. Implement a method:
// *public introduce(): string that returns a string introducing the animal, including its name and age.
// Ensure that the age property is accessible only within the class.


class Animal {
    protected name:string;
    private age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    public introduce():string {
        return `Name : ${this.name}, Age : ${this.age}`;
    }
}

class Cat extends Animal {
    constructor(name:string, age:number) {
        super(name, age);
    }

    public catIntroduce():string {
        return `Name : ${this.name}`;
    }
}


const dog:Animal = new Animal ("Dog", 2);
console.log(dog.introduce());

const cat:Cat = new Cat ("Cat", 3);
console.log(cat.catIntroduce());
