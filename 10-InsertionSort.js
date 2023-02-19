const insertionSort = (arr) => {
  let temp;

  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    let j = i - 1;

    while (j > -1 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = temp;
  }

  return arr;
};

const arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6];
console.log(insertionSort(arr));
