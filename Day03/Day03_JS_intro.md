# JavaScript
## How to import a JS file
``` html
<script scr='file.js'></script>
```
## You can use others' JS
e.x jQuery CDN
## NPM, later d
## Dependency, later in react part
## Compile language (like C++) VS interpret language (JavaScript)
### Compile language
- Compiler compiles / converts source code into machine code before execution
- May throw compile errors
### interpret language
- Interpreter parses the source code and executes it during the runtime
## ESlint: tool for better JS practice
## Data Type
### Primitive Data Type
- number
- string
- boolean
- null
- undefine
- other more but barely use
  - symbol
  - bigInt
### Reference Data Type: anything else
- object
## Variable Declaration
### ES5
- var: ES5, don't use it anymore, because (following behaviors)
    1. can be re-declared 
    2. will be hoisted
    3. function scoped
### ES6
- let 
  - cannot access before declaration
  - block scope
  - cannot re-declare the same variable
    ``` JavaScript
    let count = 1 // Cannot redeclare block-scoped variable 'count'
    let count = 2 // Cannot redeclare block-scoped variable 'count'
    ```
- const: cannot be changed after assignment
  - interview question: why can modify an array declared by const
    - because array is a reference data type, reference / address cannot be changed, but the content inside of the address can be changed
    ``` JavaScript
    const arr = [1, 2, 3, 4]
    console.log(arr) // 1, 2, 3, 4
    arr.push(5)
    console.log(arr) // 1, 2, 3, 4, 5
    ```
### let & const
- cannot access before declaration
- will be also hoisted, but will throw error, because of 'Temporal Dead Zone'
## When to use const / let
- Use const for everything all time unless you plan to change it later
- 90% variable should be const
## Scope: didn't talk to much in this lecture
## Type Coercion
Automatic (implicitly) conversion of one data type to another
``` JavaScript
    console.log(typeof ('number' + 1)) // string
    console.log(typeof ('1' + 1)) // string
```
## ==
- loose comparison
- unsafe
- do type coercion
## ===
- strict comparison
- safe
- compare the data type as well
## Falsy Value
- 0
- null
- undefined
- empty string
  - empty object, empty array are truthy value, because the dynamic data type
## Type Conversion / Casting
Manually / explicitly converts one data type to another
### Convert a string to a number
- Number()
- +'string'
- parseInt()
``` JavaScript
const numStr = '1'
const num = 1
// 3 ways to convert a string to a number 
const sum = Number(numStr) + num
const sum = +numStr + num
const sum = parseInt(numStr) + num
```
### Convert a number to a string
- coercion
- Number.toString()
- string / template literals: ``
``` JavaScript
// 3 ways to convert a number to a string
console.log(1 + '')
console.log((1).toString())
console.log(`${1}`)
```
## Define an Infinity number
- Infinity: don't worry to much
  - A property of the global object
  - It is variable in global scope
  - Its value is greater than any other number
- Number
  - Number.MAX_SAFE_INTEGER
    - static data property represents the maximum safe integer in JavaScript (253 – 1).
  - Number.Max_Value
    - static data property represents the maximum numeric value representable in JavaScript
  - Number.POSITIVE_INFINITY
    - static data property represents the positive Infinity value
## Reference Data Type: literally everything else
### Copy an array value to another
- Using array iterable
``` JavaScript
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i]);
}
```
### how to access object properties
- object.property (most of time use this method)
- object['property']
  - when / why use this method
    - accessing property via variable
    ``` JavaScript
    const person = {
        name: 'Bob',
        age: 1,
    };
    let propertyName = 'name';
    console.log(person[propertyName]); // Bob
    ```
### Map VS Object
- Map has order, order by insertion 
- Object doesn't have order
## null VS undefined
### null: has value
### undefined: cannot find
## Access undefined value / property will be an error
``` JavaScript
const person1 = {
    name: 'Bob',
    age: 1,
    address: {
        street: '123 Main Street',
        zipcode: '12345-0000',
    }
};
const person2 = {
    name: 'Dan',
    age: 2,
};
console.log(person2.address) // undefined
console.log(person2.address.zipcode) // TypeError: Cannot read properties of undefined (reading 'zipcode')
``` 
### how to avoid it?
- if statement
``` JavaScript
const person1 = {
    name: 'Bob',
    age: 1,
    address: {
        street: '123 Main Street',
        zipcode: '12345-0000',
    }
};
const person2 = {
    name: 'Dan',
    age: 2,
};  
const people = [person1, person2];    
for (const i = 0; i < people.length; i++) {
    const person = people[i]
    if (person.address) {
        console.log(`${person.name}'s zipcode is: ${person.address.zipcode}`);
    } else {
        console.log(`${person.name} doesn't have an address`);
    }
}
```
- optional chaining operator: using ? after property
``` JavaScript
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  console.log(`${person.name}'s zipcode is: ${person.address?.zipcode}`);
}
```
# Learn TypeScript, via tutorial

