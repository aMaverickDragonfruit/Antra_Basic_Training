// must know Strings
// split, toUpperCase, toLowerCase
// useful ones:
// includes, charAt, slice, replace, substring, trim
const str = 'The quick brown fox jumps over The lazy dog.';
console.log(`str: ${str}`);
console.log(`must know prototype methods:`);
// split
console.log(`split: split by space and return as an arr:`);
console.log(str.split(' '));
// toUpperCase
console.log(`returns this string converted to uppercase:`);
console.log(str.toUpperCase());
// toLowerCase
console.log(`returns this string converted to lowercase:`);
console.log(str.toLowerCase());

console.log(`useful prototype methods:`);
//includes
console.log(`includes: return whether the word 'fox' includes in the str or not:`);
console.log(str.includes('fox'));
// charAt
console.log(`charAt: return the index 4 string:`);
console.log(str.charAt(4));
// slice
console.log(`slice: extracts a new string from index 4 and return it:`);
console.log(str.slice(4));
// replace
console.log(`replace: replace 'quick' with 'slow':`);
console.log(str.replace('quick', 'slow'));
// replaceAll
console.log(`replaceAll: replace all 'The' with 'A':`);
console.log(str.replaceAll('The', 'A'));
// substring
console.log(`substring: return a substring with start index 4 and end index 19:`);
console.log(str.substring(4, 19));
// trim
console.log(`trim: trims front and end white space of '   Hello world!   ' and return a new string:`);
console.log('   Hello world!   '.trim())
