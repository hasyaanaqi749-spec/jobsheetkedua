function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; 
    }
  }
  return -1; 
}

const numbers = [10, 25, 40, 55, 70];

console.log("=== Hasil Latihan 6.1 ===");
console.log("Cari angka 40 (index):", linearSearch(numbers, 40)); 
console.log("Cari angka 90 (index):", linearSearch(numbers, 90));