const merge = (arr1, arr2) => {
  const arr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      arr.push(arr1[0]);
      arr1.shift();
    } else {
      arr.push(arr2[0]);
      arr2.shift();
    }
  }

  while (arr1.length) {
    arr.push(arr1[0]);
    arr1.shift();
  }

  while (arr2.length) {
    arr.push(arr2[0]);
    arr2.shift();
  }

  return arr;
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const midIndex = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, midIndex);
  const arr2 = arr.slice(midIndex);

  return merge(mergeSort(arr1), mergeSort(arr2));
};

const arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6];
console.log(mergeSort(arr));
