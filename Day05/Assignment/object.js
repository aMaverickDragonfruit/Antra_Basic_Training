// must know Object
// static
// entries, keys, values

const obj = {
    a: 'somestring',
    b: 42,
};

// entries
console.log(`Object must know static methods:`);
console.log(`entries: return an array of elements' key value pairs:`);
for (const [key, val] of Object.entries(obj)) {
    console.log(`${key}: ${val}`);
};

// keys
console.log(`keys: return array of keys' properties:`);
console.log(Object.keys(obj));

// values
console.log(`values: return array of values' properties:`);
console.log(Object.values(obj));