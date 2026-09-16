function sortProducts(products, sortBy) {
  const arr = [...products];

  switch (sortBy) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating);
    case "title":
      return arr.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return arr;
  }
}

const dataProducts = [
  { id: 1, title: "Laptop", price: 1200, rating: 4.5 },
  { id: 2, title: "Smartphone", price: 800, rating: 4.2 }
];

console.log("8.2 Price Ascending:", sortProducts(dataProducts, "price-asc"));
console.log("8.2 Price Descending:", sortProducts(dataProducts, "price-desc"));
console.log("8.2 Rating Descending:", sortProducts(dataProducts, "rating"));
console.log("8.2 Title (A-Z):", sortProducts(dataProducts, "title"));