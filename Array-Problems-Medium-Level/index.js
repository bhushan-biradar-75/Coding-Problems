// accumulatingArray([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
// // [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]

// accumulatingArray([1, 5, 7]) ➞ [1, 6, 13]

// accumulatingArray([1, 0, 1, 0, 1]) ➞ [1, 1, 2, 2, 3]

// accumulatingArray([]) ➞ []

const accumulatingArray = (arrayItem) => {
    if (arrayItem) {
        for (let i = 0; i < arrayItem.length - 1; i++) {
            indexSum = arrayItem[i] + arrayItem[i + 1] //calculating current & next index sum & stores in indexSum
            arrayItem[i + 1] = indexSum;
        }
    } 
}
accumulatingItem = [1, 2, 3, 4] //Passing array by reference
// accumulatingItem = [1, 2, 3, 6, 5, 12, 7, 20] //Passing array by reference
accumulatingArray(accumulatingItem)
//[OUTPUT]// [1,3,6,10]
console.log("acc",accumulatingItem)