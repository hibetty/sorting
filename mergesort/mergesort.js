function split(wholeArray) {
  var length = wholeArray.length;
  var half = Math.ceil(length / 2);
  var firstHalf = wholeArray.slice(0,half);
  var secondHalf = wholeArray.slice(half);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  var outputArr = [];
  while(arr1.length || arr2.length){
    if(!arr1.length){
      outputArr = outputArr.concat(arr2);
      arr2 = [];
    } else if (!arr2.length) {
      outputArr = outputArr.concat(arr1);
      arr1 = [];
    } else if(arr1[0] < arr2[0]){
      outputArr = outputArr.concat(arr1[0]);
      arr1.shift();
    } else {
      outputArr = outputArr.concat(arr2[0]);
      arr2.shift();
    }
  }
  return outputArr;
}

function mergeSort(array) {
  if(array.length <= 1) return array;
  var splitArrays = split(array);
  var leftSideSorted = mergeSort(splitArrays[0]);
  var rightSideSorted = mergeSort(splitArrays[1]);

  return merge(leftSideSorted, rightSideSorted);

}
