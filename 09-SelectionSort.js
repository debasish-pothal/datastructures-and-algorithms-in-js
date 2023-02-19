const selectionSort = (arr) => {
  let minIndex = 0;
  let index = 0;

  while (index < arr.length) {
    let currentIndex = index;

    while (currentIndex < arr.length) {
      if (arr[currentIndex] < arr[minIndex]) {
        minIndex = currentIndex;
      }

      currentIndex += 1;
    }

    const temp = arr[index];
    arr[index] = arr[minIndex];
    arr[minIndex] = temp;

    index += 1;
    minIndex = index;
  }

  return arr;
};

const arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6];
console.log(selectionSort(arr));
