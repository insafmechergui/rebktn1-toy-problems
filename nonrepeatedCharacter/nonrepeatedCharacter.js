/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
var firstNonRepeatedCharacter = function (string) {
  // TODO: your solution here
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    var c = string[i];
    if (!obj[c]) {
      obj[c] = true;
    } else if (obj[c]) {
      obj[c] = false;
    }
  }
  for (var i = 0; i < string.length; i++) {
    var c = string[i];
    if (obj[c]) {
      return c;
    }
  }
};
