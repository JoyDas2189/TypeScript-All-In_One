/* 
interface Product {
    name: string;
    price: number;
    quantity: number;
}

const product: Product = {
    name: "Paladn RX 5500XT",
    price: 19500,
    quantity: 5
}


function priceCalculator(product: Product) {
    return `Product is ${product.name}, Total price is ${product.price * product.quantity}.`;
}

console.log(priceCalculator(product))
 */

/* 
interface Person {
    name : string;
}
interface Person {
    age : number;
}

const person: Person = {name:"Joy", age:23};
console.log(person);
 */



// interface Person {
//     name: string;
//     age: number;
// }

// interface Teacher extends Person{
//     qualification: string;
//     duration:number;
// }

// let teacher1:Teacher = {name:"Kamrul", age:54, qualification: "MSc", duration:5};

// console.log(teacher1);
interface Person {
    name: string;
    age: number;
}
interface Teacher {
    qualification: string;
    duration:number;
}
interface HeadTeacher extends Person, Teacher{
    role: string;
}

const teacher1:HeadTeacher = {
    name: "Mahbubur Rahman",
    age: 65, 
    qualification: "BCs Cadre",
    duration: 7,
    role: "Head"
}

console.log(`Name : ${teacher1.name}, Role : ${teacher1.role}`);
