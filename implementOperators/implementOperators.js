/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/



var multiply = function(x, y) {
  // your code here...
  var result = 0;
  for (var i = 1; i <= y; i++) {
    result += x;
  }
  return result;
};
console.log(multiply(3, 3));

var divide = function(x, y) {
  // your code here...
  let result = 1;
  for (let i = 0; i < x; i++) {
    x -= y;
    result++;
  }
  return result;
 
};
console.log(divide(4, 2));

var modulo = function(x, y) {
  // your code here...
  var result = 0;
  
  while(result <= x ) {
    x -= y;
    result++
  }
  return x;
};
console.log(modulo(6, 2));
