/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(string) {
    var obj = {}
    var array = [];
    var count;
    var lastCount = 0;

    var firstCaracter = string[0];
    if(string === "") {
        return array = [0, 0]; //return [0, 0] for no runs
    }
    else {
        for(var i = 0; i < string.length; i++) {
            
                count = 1

            for(var j = 0; j < string.length; j++) {
                if(string[i] === string[j]) {
                    count++
                }
            }

            if(count > lastCount) {
                lastCount = count;
                firstCaracter = string[i]
            }

        }
    
    }
    var result;
    // result = string.indexOf(firstCaracter);//start index
    result = [string.indexOf(firstCaracter)];//start index
    return result;
}
