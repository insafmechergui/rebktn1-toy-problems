/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).


telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

function telephoneWords(digitString) {
  // your code here...
  var newStr = digitString.split("");
  var result = "";
  for (var i = 0; i < newStr.length; i++) {
    switch (newStr[i]) {
      case "0":
        result += "0";
        break;
      case "1":
        result += "1";
        break;
      case "2":
        result += "A"
        result += "B";
        result += "C";
        break;
      case "3":
        result += "D";
        result += "E";
        result += "F";
        break;
      case "4":
        result += "G";
        result += "H";
        result += "I";
        break;
      case "5":
        result += "J";
        result += "K";
        result += "L";
        break;
      case "6":
        result += "M";
        result += "N";
        result += "O";
        break;
      case "7":
        result += "P";
        result += "Q";
        result += "R";
        result += "S";
        break;
      case "8":
        result += "T";
        result += "U";
        result += "V";
        break;
      case "9":
        result += "T";
        result += "U";
        result += "V";
        break;
    }
  }
  console.log(result); //000ABC  //11ABCDEF
}
