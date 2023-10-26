// An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as  or .

// Reverse an array of integers.

// Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

// Example

// Return .

// Function Description

// Complete the function reverseArray in the editor below.

// reverseArray has the following parameter(s):

// int A[n]: the array to reverse
// Returns

// int[n]: the reversed array
// Input Format

// The first line contains an integer, , the number of integers in .
// The second line contains  space-separated integers that make up .


// Input - [1 4 3 2]
// Output - [2 3 4 1]

// function reverseArray(a) {
//     let newArray = [];
//     for(let i = a.length - 1; i >= 0; i--)
//     {
//         newArray[newArray.length] = a[i];
//     }
//     return newArray;
// }
// var item = [1,4,3,2]
// var reverseArray = reverseArray(item)
// console.log("reverseArray",reverseArray)

function getArray(item) {
    // console.log(item.length)
    let maxSum = -63;
    for(let i = 0; i < 4; i++)
    {
        for(let j = 0; j < 4; j++)
        {

            let top = item[i][j] + item[i][j+1] + item[i][j+2]; 
            console.log("---->",top)
        }
        // break;
    }
}

let TwoDArray = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
]
let findHourSum = getArray(TwoDArray) 