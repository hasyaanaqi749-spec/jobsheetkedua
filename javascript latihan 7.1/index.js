const products = [
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Smartphone", price: 800 },
  { id: 3, title: "Tablet", price: 500 },
  { id: 4, title: "Headphones", price: 150 }
];

const sortedProducts = [...products].sort((a, b) => a.price - b.price);

console.log(sortedProducts);