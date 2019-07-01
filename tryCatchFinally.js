/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
let s = "string";
function reverseString(s) {

    try {
        console.log(s.split('').reverse().join(''));
    }
    catch (e) {
        console.log(e.message);
        console.log(s);
    }
    
}