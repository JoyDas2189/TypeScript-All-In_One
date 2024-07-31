var User = /** @class */ (function () {
    function User(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
    }
    User.prototype.display = function () {
        return "Username : ".concat(this.userName, " Age : ").concat(this.userAge);
    };
    return User;
}());
var user1 = new User("Joy", 23);
console.log(user1.display());
