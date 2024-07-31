// const userInfo = (name:string, age:number):string => {
//     return `${name} is ${age} years old`;
// }
// console.log(userInfo("Joy", 23));
var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    return "Name is Joy Das, Age is 23";
};
userInfo2 = function (name) {
    return "Name is ".concat(name);
};
userInfo3 = function (name, age) {
    return "Name is ".concat(name, ", Age is ").concat(age);
};
console.log(userInfo1());
console.log(userInfo2("Joy"));
console.log(userInfo3("Joy", 23));
