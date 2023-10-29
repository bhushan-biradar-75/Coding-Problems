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

function reverseArray(a) {
    let newArray = [];
    for(let i = a.length - 1; i >= 0; i--)
    {
        newArray[newArray.length] = a[i];
    }
    return newArray;
}
var item = [1,4,3,2]
var reverseArray = reverseArray(item)
console.log("reverseArray",reverseArray)

// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

// Sample Input

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

// Sample Output

// 19

function getArray(item) {
    let maxSum = -63
    for(let i = 0; i < 4; i++)
    {
        for(let j = 0; j < 4; j++)
        {

            let top = item[i][j] + item[i][j+1] + item[i][j+2]; 
            let mid = item[i][j+1]
            let bot = item[i][j+1] + item[i][j+2] + item[i][j+3]; 
            let totalSum = top+mid+bot
            let maxSum = Math.max(totalSum);
            return maxSum;
        }
    }
}

let TwoDArray = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
]
let findHourSum = getArray(TwoDArray) 
console.log(findHourSum)