const products = [
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Smartphone", price: 800 },
  { id: 3, title: "Tablet", price: 500 }
];

function findProductById(productsArray, targetId) {
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].id === targetId) {
      return productsArray[i]; 
    }
  }
  return null; 
}

console.log("\n=== Hasil Latihan 6.2 ===");
console.log("Cari Produk ID 2:", findProductById(products, 2)); 


console.log("Cari Produk ID 99:", findProductById(products, 99));