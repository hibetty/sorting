function split(wholeArray) {
  var length = wholeArray.length;
  var half = Math.ceil(length / 2);
  var firstHalf = wholeArray.slice(0,half);
  var secondHalf = wholeArray.slice(half);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  var outputArr = [];
  var arr1Idx = 0;
  var arr2Idx = 0;
  var endOfOutputIdx = 0;

  while (arr1Idx < arr1.length || arr2Idx < arr2.length) {
    endOfOutputIdx = outputArr.length;

    if (arr1Idx === arr1.length) {
      outputArr = outputArr.concat(arr2.slice(arr2Idx));
      arr2Idx = arr2.length;
    } else if (arr2Idx === arr2.length) {
      outputArr = outputArr.concat(arr1.slice(arr1Idx));
      arr1Idx = arr1.length;
    } else if (arr1[arr1Idx] < arr2[arr2Idx]) {
      outputArr[endOfOutputIdx] = arr1[arr1Idx];
      arr1Idx++;
    } else {
      outputArr[endOfOutputIdx] = arr2[arr2Idx];
      arr2Idx++;
    }
  }
  return outputArr;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  var splitArrays = split(array);
  var leftSideSorted = mergeSort(splitArrays[0]);
  var rightSideSorted = mergeSort(splitArrays[1]);

  return merge(leftSideSorted, rightSideSorted);

}
