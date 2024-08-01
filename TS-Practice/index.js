// 1. Write a TypeScript program that creates a class called Student with properties name and class. Implement a constructor that initializes these properties when a Student object is created.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.introduce = function () {
        return "Name : ".concat(this.name, ", Age : ").concat(this.age);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        return _super.call(this, name, age) || this;
    }
    Cat.prototype.catIntroduce = function () {
        return "Name : ".concat(this.name);
    };
    return Cat;
}(Animal));
var dog = new Animal("Dog", 2);
console.log(dog.introduce());
var cat = new Cat("Cat", 3);
console.log(cat.catIntroduce());
