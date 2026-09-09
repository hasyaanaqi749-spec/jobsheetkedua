function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

let sepatuBiru = calculateDiscountedPrice(1850000, 25);
console.log(sepatuBiru);