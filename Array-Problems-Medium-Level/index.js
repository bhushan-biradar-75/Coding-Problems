// accumulatingArray([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
// // [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]

// accumulatingArray([1, 5, 7]) ➞ [1, 6, 13]

// accumulatingArray([1, 0, 1, 0, 1]) ➞ [1, 1, 2, 2, 3]

// accumulatingArray([]) ➞ []

const accumulatingArray = (arrayItem) => {
  if (arrayItem) {
    for (let i = 0; i < arrayItem.length - 1; i++) {
      indexSum = arrayItem[i] + arrayItem[i + 1]; //calculating current & next index sum & stores in indexSum
      arrayItem[i + 1] = indexSum;
    }
  }
  return arrayItem;
};
let accumulatingItem = [1, 2, 3, 4]; //Passing array by reference
let accumulatingArrayResult = accumulatingArray(accumulatingItem);
//[OUTPUT]// [1,3,6,10]
console.log("accumulatingArray", accumulatingArrayResult);

// ===========================================================================================================================

// accumulatingProduct([1, 2, 3, 4, 5]) ➞ [1, 2, 6, 24, 120]
// // [1, 2, 6, 24] can be written as [1, 1 x 2, 1 x 2 x 3, 1 x 2 x 3 x 4]

// accumulatingProduct([1, 5, 7]) ➞ [1, 5, 35]

// accumulatingProduct([1, 0, 1, 0]) ➞ [1, 0, 0, 0]

// accumulatingProduct([]) ➞ []

const accumulatingProduct = (arrayItem) => {
  if (arrayItem) {
    for (let i = 0; i < arrayItem.length - 1; i++) {
      let currentIndex = arrayItem[i];
      let nextIndex = arrayItem[i + 1];
      let indexSum;
      if (i === 0) {
        //calculating current & next index to stores in indexSum
        indexSum = currentIndex * nextIndex;
      } else if (i > 0) {
        indexSum = currentIndex * nextIndex;
      }
      //puting updated index value in array
      arrayItem[i + 1] = indexSum;
    }
  }
  return arrayItem;
};
let accumulatingProductItem = [1, 2, 3, 4, 5]; //Passing array by reference
let accumulatingProductResult = accumulatingProduct(accumulatingProductItem);
console.log("accumulatingProduct", accumulatingProductResult);
//[OUTPUT]//➞ [1, 2, 6, 24, 120]
