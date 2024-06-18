// static:
// isInteger, isNaN, parseInt, parseFloat
console.log(`Number Static methods:`);
// isInteger
console.log(`isInteger: check whether 100 / 2 result is integer:`);
console.log(Number.isInteger((100 / 2)));
// isNaN
console.log(`isNaN: check whether 100 / 2 result is a NaN:`);
console.log(Number.isNaN((100 / 2)));
// parseInt
console.log(`parseInt: parse string '0xF', return a number of 16 base:`);
console.log(Number.parseInt('0xF', 16));
// parseFloat
console.log(`parseInt: parse string '4.567abc', return a float number:`);
console.log(Number.parseFloat('4.567abc'))