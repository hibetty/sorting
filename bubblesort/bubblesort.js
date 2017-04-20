function bubbleSort(array) {
  if (array.length <= 1) {
    return array;
  }
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        array = swap(array, i, j);
      }
    }
  }
  return array;
}

function swap(arr, firstIdx, secondIdx) {
  var temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;
  return arr;
}
