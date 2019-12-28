/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/


function evenOccurrence(array) {
  var obj = {};
  for( var i = 0; i < array.length; i++) {
    var nbr = array[i];

    if(!obj[nbr]) {
      obj[nbr] = 1;
    }
    else {
      obj[nbr]++;
    }

    obj[nbr] % 2 === 0 ? nbr : null;

  }
  console.log(obj);
}

//if arr[i] = obj so check key == and value ==

// if(!Array.isArray(nbr) && typeof(nbr) === "object" ) {
//   for(var key in nbr) {
//     if(obj[nbr]) {
  // aa
//       obj[nbr] = nbr
//       console.log(obj[nbr])
//     }
//   }
// }