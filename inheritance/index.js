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
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.displayNameAge = function () {
        return "Name : ".concat(this.name, " Age : ").concat(this.age);
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, roll, section) {
        var _this = _super.call(this, name, age) || this;
        _this.roll = roll;
        _this.section = section;
        return _this;
    }
    Student.prototype.displayRollSection = function () {
        return "".concat(this.displayNameAge(), " Roll : ").concat(this.roll, " Section : ").concat(this.section);
    };
    return Student;
}(User));
var student1 = new Student("Joy", 12, 10, "D");
var student2 = new Student("Zoro", 12, 1, "D");
console.log(student1.displayRollSection());
console.log(student2.displayRollSection());
