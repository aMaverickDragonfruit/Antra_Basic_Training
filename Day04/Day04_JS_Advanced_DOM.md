# JS Advanced
## How to copy an array / object
### Shallow copy: copy reference
1. spread operator: use more often
  ``` JavaScript
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1];

  const person1 = {
    name: 'Bob',
    age: 1,
    address: {
        street: 
    }
  };
  const person2 = { ...person1 }; // is same as: {name: person1.name, age: person1.age, }
  ```
2. object.assign()
3. array.slice(), didn't mention in the lecture
### Deep copy: copy value to a new address
Most of time, shallow copy is sufficient enough, deep copy takes longer time
  1. JSON.stringify() and JSON.parse()
  ``` JavaScript
  const newPerson = JSON.stringify(person1); // converts a JS value to a JSON string
  const person3 = JSON.parse(newPerson); // converts described string into a JS value or object
  // short version
  // const person3 = JSON.parse(JSON.stringify(person1));
  ```
  - Why is this method deep copy?
  - Potential issue for this method:
    - Remove all functions, undefined value
    - Have to use valid string
  1. Object.entries(): Next Week
  2. 3rd party library
    - e.x. lodash cloneDeep
    ``` JavaScript
    const person4 = _.cloneDeep(person1);
    person4.name = "qwoieiqwojrqwjio";
    ```
  3. structuredClone(): method provided web API
    - new feature, potential issues:
      - not stable yet
      - may not be supported by order version browser
      - may not have good compatibility
## JSON: JavaScript Object Notation
Used for client and server communication
## Destructure
- object destructure
  - order doesn't matter
  - names matters
``` JavaScript
const address = {
  street: "123 Main Street",
  city: "LA",
  state: "CA",
  zip: "12345",
  country: "USA",
};

const {
  street,
  state,
  zip,
  country,
  city,
} = address;
console.log(street) // 123 Main Street
```
- array destructure
  - name doesn't matter
  - order matters
``` JavaScript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, ...rest] = numbers;
console.log(a, b); // 1, 2
console.log(rest); // [3, 4, 5, 6, 7, 8, 9]
```
- Rename destructure & Set default value
``` JavaScript
const state = "the state of our application";

const {
  street,
  state: addressState, // rename destructure 
  zip,
  country,
  city,
  oiqwjeioqwjeiojqwoe = "default value", // set default value
} = address;
```
## Rest operator can do copy
- Have to at the last location
``` JavaScript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, ...rest] = numbers;
console.log(rest) // [3, 4, 5, 6, 7, 8, 9]

const user = {
  username: "johnsmith123",
  email: "john123@gmail.com",
  password: "123456",
  activated: true,
  phone: "123-123-1234",
};

const { password, ...userInfo } = user;

console.log(userInfo); // output everything except password
```
# Local Storage
## Deep comparison
## ID Generator
# DOM: Document Object Model
Watch tutorial and do practice 
# next week
- function
- OOP
- MVC Design pattern
- async
- advance function
