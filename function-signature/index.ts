// const userInfo = (name:string, age:number):string => {
//     return `${name} is ${age} years old`;
// }
// console.log(userInfo("Joy", 23));



let userInfo1: () => void;
let userInfo2: (name:string) => void;
let userInfo3: (name:string, age:number) => void;

userInfo1 = () => {
    return `Name is Joy Das, Age is 23`;
}
userInfo2 = (name:string) => {
    return `Name is ${name}`;
}
userInfo3 = (name:string, age:number) => {
    return `Name is ${name}, Age is ${age}`;
}

console.log(userInfo1());
console.log(userInfo2("Joy"));
console.log(userInfo3("Joy", 23));
