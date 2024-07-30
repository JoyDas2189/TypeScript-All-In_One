// numeric enum

enum RequestType {
    readData,
    saveData,
    deleteData,
}

console.log(RequestType);

// string enum

enum sercondRequestType {
    readData = "read data",
    saveData = "save data",
    deleteData = "delete data",
}

console.log(sercondRequestType.readData);
// console.log(sercondRequestType["readData"]);
console.log(sercondRequestType.saveData);
console.log(sercondRequestType.deleteData);


// heterogenious 

enum thirdRequesType {
    readData = "read data",
    saveDate = "save data",
    deleteData = 201
}

console.log(thirdRequesType.readData);
console.log(thirdRequesType.saveDate);
console.log(thirdRequesType.deleteData);
