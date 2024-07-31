var product = {
    name: "Paladn RX 5500XT",
    price: 19500,
    quantity: 5
};
function priceCalculator(product) {
    return "Product is ".concat(product.name, ", Total price is ").concat(product.price * product.quantity, ".");
}
console.log(priceCalculator(product));
