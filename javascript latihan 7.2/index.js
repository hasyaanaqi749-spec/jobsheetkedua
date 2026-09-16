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

const sortedProducts = [...products].sort((a, b) => a.price - b.price);

function binarySearchByPrice(arr, targetPrice) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid].price === targetPrice) {
      return arr[mid];
    }

    if (arr[mid].price < targetPrice) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

console.log("Cari harga 800:", binarySearchByPrice(sortedProducts, 800));
console.log("Cari harga 1000:", binarySearchByPrice(sortedProducts, 1000));