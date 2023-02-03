const phones = [
    { name: 'Samsung', camera: 24, storage: '128gb', price: 24000, color: 'silver' },
    { name: 'Walton', camera: 16, storage: '128gb', price: 18000, color: 'blue' },
    { name: 'Iphone', camera: 12, storage: '64gb', price: 84000, color: 'silver' },
    { name: 'Xiaomi', camera: 20, storage: '128gb', price: 22000, color: 'silver' },
    { name: 'Oppo', camera: 12, storage: '128gb', price: 24000, color: 'silver' },
    { name: 'Nokia', camera: 16, storage: '128gb', price: 42000, color: 'silver' },
    { name: 'HTC', camera: 20, storage: '128gb', price: 36000, color: 'silver' }
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);