function bubbleSort(numbers) {
  const arr = [...numbers]; 

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

const angkaUnsorted = [5, 3, 8, 1, 4];
console.log("8.1 Output Bubble Sort:", bubbleSort(angkaUnsorted));