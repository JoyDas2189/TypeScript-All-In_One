"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require(".//student");
function displayInformation() {
    return "Name is ".concat(student_1.studentName, " and Age is ").concat(student_1.studentAge);
}
console.log(displayInformation());
