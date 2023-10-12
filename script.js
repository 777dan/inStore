const cart = [];
let product = "";
while (product !== "!") {
    product = prompt("Add item to cart. If you're done, enter !");
    if (product !== "!") cart.push(product);
}
console.log(cart);
while (cart.length > 0) {
    cart.pop();
}
console.log(cart);