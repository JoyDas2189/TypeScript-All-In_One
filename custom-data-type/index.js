var users;
users = [];
var user1;
user1 = { userName: "Joy", userId: 201 };
users.push(user1);
var user2;
user2 = { userName: "Zoro", userId: 301 };
users.push(user2);
var user3;
user3 = { userName: "Luffy", userId: 101 };
users.push(user3);
var getRequest;
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");
