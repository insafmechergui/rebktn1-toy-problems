/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
<<<<<<< HEAD
  for (var i = 0; i < string.length; i++) {
    //get the character
     var character = string.charAt(i);
     //get the character at a specific index
     if (string.indexOf(character) == i && string.indexOf(character, i + 1) == -1) {
       return character;
     }
    
   }
=======
  //for string.length 
   for (var i = 0; i < string.length; i++) {
 	//get the character
    var character = string.charAt(i);
    //get the character at a specific index
    if (string.indexOf(character) == i && string.indexOf(character, i + 1) == -1) {
      return character;
    }
    return "all character are repeated";
  }
  
>>>>>>> 2e894d3bd734dc92eb904bb051a036e08e1dfa0a
};
