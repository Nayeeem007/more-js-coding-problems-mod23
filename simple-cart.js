const shoppingCart = [
    { name: 'shoe', price: 1600 },
    { name: 'shirt', price: 1200 },
    { name: 'pant', price: 2200 },
    { name: 'belt', price: 700 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
        console.log(product);
    }
    return sum;
 }

const expense = totalCost(shoppingCart);
console.log('Total expense today : ',expense);
