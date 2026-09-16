const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];

function getStatistics(products) {
  if (!products || products.length === 0) {
    return {
      totalProducts: 0,
      totalStock: 0,
      averagePrice: 0,
      highestPrice: 0,
      lowestPrice: 0,
      averageRating: 0
    };
  }

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

  const prices = products.map(p => p.price);
  const totalPrice = prices.reduce((sum, price) => sum + price, 0);
  const averagePrice = totalPrice / totalProducts;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);

  const totalRating = products.reduce((sum, p) => sum + p.rating, 0);
  const averageRating = totalRating / totalProducts;

  return {
    totalProducts,
    totalStock,
    averagePrice: Number(averagePrice.toFixed(2)),
    highestPrice,
    lowestPrice,
    averageRating: Number(averageRating.toFixed(2))
  };
}

console.log("=== Hasil Statistik Products ===");
console.log(getStatistics(products));