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
var product = {
    name: "RX 5500XT",
    price: 19500,
    quantity: 5
};
function calculatePrice(product) {
    return "Product Name ".concat(product.name, ", Total Price is ").concat(product.price * product.quantity, ".");
}
console.log(calculatePrice(product));
