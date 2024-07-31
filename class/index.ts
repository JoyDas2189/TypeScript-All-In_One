class User {
    userName: string;
    userAge: number;

    constructor(userName: string, userAge:number) {
        this.userName = userName;
        this.userAge = userAge;
    }
    display() {
        return `Username : ${this.userName} Age : ${this.userAge}`;
    }
}

const user1 = new User ("Joy", 23);
console.log(user1.display());
