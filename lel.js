let orderArray = [
 { name: 'pen', price: 11 },
 { name: 'pencil', price: 5 },
 { name: 'TV', price: 2345 }
];
orderArray.map((value) => {
 let newPrice = value.price * 4;
 value.price = newPrice;
 return value;
});
console.log(orderArray);