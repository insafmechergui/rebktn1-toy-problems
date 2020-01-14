// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
//

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

/**
 * function ception(array)
 * count=0
 *for array.length
 * if array[i] =""
 * return count = 0
 * if Array.isarray(array[i])
 * count++
 *
 *return ception(array[i])
 *
 */

// function arrayCeption(array) {
//   var count = 0;
//   var obj = {};
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === "") {
//       return (count = 0);
//     }
//     if (Array.isArray(array[i])) {
//       [if (!obj.array[i]) {
//         obj.array[i] = 1;
//       } else {
//         obj.array[i]++;
//       }]
//       count++;
//     }
//     return count;
//     return arrayCeption(array[i]);
//   }
// }

// function arrayCeption(array) {
//   var obj = {};
//   var count = 1;
//   for (var i = 0; i < array.length; i++) {
//     if (!obj[array[i]]) {
//       obj[array[i]] = 1;
//     } else {
//       obj[array[i]]++;
//     }
//     return count+ arrayCeption(array[i]);
//     for (key in obj) {
//       if (key !== "") {
//         return count++;
//       }
//     }
//   }
// }
function arrayCeption(array) {
  var count = 0;
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "") {
      return (count = 0);
    }
    obj[array[i]] = 1;
    if (Array.isArray(array[i])) {
      obj[array[i]]++;
    }

    return obj[array[i]];
  }
}
