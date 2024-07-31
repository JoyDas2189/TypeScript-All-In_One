let users : object[];
users = [];
type UserType = {userName: string, userId:number};

let user1 : UserType;
user1 = {userName:"Joy", userId: 201};
users.push(user1);

let user2 : UserType;
user2 = {userName:"Zoro", userId: 301};
users.push(user2);

let user3 : UserType;
user3 = {userName: "Luffy", userId: 101};
users.push(user3);

// console.log(users);

type RequestType = "GET" | "POST";
let getRequest: RequestType;

function requestHandler (requestType:RequestType) {
    console.log(requestType);
    
}

requestHandler("POST")