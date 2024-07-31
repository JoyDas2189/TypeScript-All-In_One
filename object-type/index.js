// let users : object[];
// users = [];
// let user1 : {userName: string, userId:number};
// user1 = {userName:"Joy", userId: 201};
// users.push(user1);
// let user2 : {userName:string, userId:number}
// user2 = {userName:"Rahim", userId: 301};
// users.push(user2);
// console.log(users);
// for (const key in users) {
//     console.log(users[key]);
// }
// let users : object[];
// users = [{userName: "joy", userId: 201},
//          {userName: "das", useId:301},
// ]
// console.log(users);
var person1 = {
    name: "Joy",
    age: 23,
    isStudent: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
var person2 = {
    name: "Zoro",
    age: 36,
    isStudent: false,
    address: {
        city: "Shimotsuki",
        country: "Japan"
    }
};
console.log(person1.address.city);
console.log(person2.address.city);
