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

const allTags = products.map(p => p.tags);
console.log(allTags);

function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}

console.log(findProductsByTag(products, "electronics"));

const reviewCounts = products.map(p => ({
  id: p.id,
  title: p.title,
  totalReviews: p.reviews.length
}));

console.log(reviewCounts);

const fiveStarReviews = products.flatMap(p => p.reviews.filter(r => r.rating === 5));

console.log(fiveStarReviews);

const averageRatings = products.map(p => {
  const total = p.reviews.reduce((acc, r) => acc + r.rating, 0);
  const avg = p.reviews.length > 0 ? total / p.reviews.length : 0;
  return {
    id: p.id,
    title: p.title,
    averageRating: avg
  };
});

console.log(averageRatings);

const mostReviewedProduct = products.reduce((prev, current) => {
  return current.reviews.length > prev.reviews.length ? current : prev;
});

console.log(mostReviewedProduct);

const allRatings = products.flatMap(p => p.reviews.map(r => r.rating));

console.log(allRatings);