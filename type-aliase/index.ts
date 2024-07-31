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

// Using Type-aliase

/* type Person = {
    name : string;
    age : number;
    isStudent: boolean;
    address:{city:string; country: string}
}

const person1 : Person = {
    name: "Joy",
    age: 23, 
    isStudent: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

const person2 : Person = {
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

type Product = {
    name : string;
    price: number;
    quantity: number;
}

const product : Product = {
    name : "RX 5500XT",
    price: 19500,
    quantity: 5
}


function calculatePrice (product: Product) {
    return `Product Name ${product.name}, Total Price is ${product.price * product.quantity}.`;
}

console.log(calculatePrice(product))