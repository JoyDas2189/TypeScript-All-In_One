interface Product {
    name: string;
    price: number;
    quantity: number;
}

const product: Product = {
    name: "Paladn RX 5500XT",
    price: 19500,
    quantity: 5
}


function priceCalculator(product: Product) {
    return `Product is ${product.name}, Total price is ${product.price * product.quantity}.`;
}

console.log(priceCalculator(product))

