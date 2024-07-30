// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["saveData"] = 1] = "saveData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// string enum
var sercondRequestType;
(function (sercondRequestType) {
    sercondRequestType["readData"] = "read data";
    sercondRequestType["saveData"] = "save data";
    sercondRequestType["deleteData"] = "delete data";
})(sercondRequestType || (sercondRequestType = {}));
console.log(sercondRequestType.readData);
// console.log(sercondRequestType["readData"]);
console.log(sercondRequestType.saveData);
console.log(sercondRequestType.deleteData);
// heterogenious 
var thirdRequesType;
(function (thirdRequesType) {
    thirdRequesType["readData"] = "read data";
    thirdRequesType["saveDate"] = "save data";
    thirdRequesType[thirdRequesType["deleteData"] = 201] = "deleteData";
})(thirdRequesType || (thirdRequesType = {}));
console.log(thirdRequesType.readData);
console.log(thirdRequesType.saveDate);
console.log(thirdRequesType.deleteData);
