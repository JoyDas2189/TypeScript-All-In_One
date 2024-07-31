// without type-aliase
/*
const person1 : {
    name: string;
    age:number;
    isStudent:boolean;
    address:{city:string; country:string};
} = {
    name: "Joy",
    age: 23,
    isStudent: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

const person2 : {
    name: string;
    age:number;
    isStudent:boolean;
    address:{city:string; country:string};
} = {
    name: "Zoro",
    age: 36,
    isStudent: false,
    address: {
        city: "Shimotsuki",
        country: "Japan"
    }
}

console.log(person1.address.city);
console.log(person2.address.city);
 */
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
