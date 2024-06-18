const arr = [1, 2, 3, 4, 5, 6];
console.log(`arr: ${arr}`);
console.log(`must know prototpye methods`);
// must know Array
// forEach, filter, map, find, includes, join, pop, push, reduce, sort
// slice, reverse

// forEach
console.log(`forEach: each element + 1:`);
arr.forEach((ele) => {
    console.log(ele + 1);
});
// filter
console.log(`filter: return an arr only contains even numbers:`);
console.log(arr.filter((ele) => {return ele % 2 === 0}));
// map
console.log(`map: return an arr that each element * 2:`);
console.log(arr.map((ele) => ele * 2));
// find
console.log(`find: return first element that >= 4:`);
console.log(arr.find((ele) => ele >= 4));
//includes
console.log(`includes: return whether the arr contains 10:`);
console.log(arr.includes(10));
//join
console.log(`join: return an arr that concatenates elements with -:`);
console.log(arr.join('-'));
// pop
console.log(`pop: return the last (pop) element:`);
console.log(arr.pop());
console.log(`arr after pop: ${arr}`);
// push
console.log(`push: push the 6 to the end of the arr:`);
arr.push(6);
console.log(`arr after push 6: ${arr}`);
// reduce
console.log(`reduce: return the sum of the arr elements:`);
console.log(arr.reduce((accumlator, curVal) => accumlator + curVal, 0));
// sort
console.log(`sort: sort in place:`);
arr.sort((a, b) => b-a);
console.log(arr);
// slice
console.log(`slice: return a shallow copy of first two elements:`);
console.log(arr.slice(2));
// reverse
console.log(`reverse: return a reversed arr:`)
console.log(arr.reverse());

// other useful ones
// some, every, findIndex,
console.log(`other useful methods`);
console.log(`some: return whether the arr contains any element > 5:`);
console.log(arr.some((ele) => ele > 5));
// every
console.log(`every: return whether all the elements in the arr > 5:`);
console.log(arr.every((ele) => ele > 5));
// findIndex
console.log(`findIndex: return the index of first element that > 5:`);
console.log(arr.findIndex((ele) => ele > 5));



