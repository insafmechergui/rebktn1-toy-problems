/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
<<<<<<< HEAD
*/
function zeroSum(array) {

    for(var i = 0; i < array.length; i++) {
       for(var j = 0; j < array.length; j++) {
           if(array[i] + array[j] === 0){
               return true;
           }
       }
    }
    return false;

}










// function zeroSum(array) {
//     var sortedArray = array.sort();
//     console.log(sortedArray);
//     var i = 0;
//     var r = array.length - 1;
//     console.log(r)
//     while(i < array.length) {
//         if(sortedArray[i] + sortedArray[r] === 0) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

// }
//not all the array just the arr[0] and arr[arr.length-1]
=======
*/
>>>>>>> 26958188a2074d88c523cd902b4e19b8f6d513e6
