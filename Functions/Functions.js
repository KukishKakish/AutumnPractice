function bubbleSort(array) {
  const n = array.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const a = array[j];
        
        array[j] = array[j + 1];
        array[j + 1] = a;
      }
    }
  }
  return array;
}
