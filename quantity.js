// same as sample-cart.js(just added quantity)

const shoppingCart = [
    { name: 'shoe', price: 1600, quantity : 2 },
    { name: 'shirt', price: 1200, quantity : 5 },
    { name: 'pant', price: 2200, quantity : 4 },
    { name: 'belt', price: 700, quantity : 3 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        console.log(product);
    }
    return sum;
 }

const expense = totalCost(shoppingCart);
console.log('Total expense today : ',expense);
