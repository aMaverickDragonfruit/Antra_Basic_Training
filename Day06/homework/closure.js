// Exercise 1: Basic Closures
// Create a function createGreeting(greeting) that takes a string greeting and returns a function.
// The returned function should take a name as an argument and return a string that
// combines the greeting and the name.

function createGreeting(greeting) {
    return (name) => {
        return `${greeting} ${name}.`;
    };
};

// const sayHello = createGreeting("Hello");
// console.log(sayHello("Alice"));  // Outputs: "Hello Alice"
// const sayHi = createGreeting("Hi");
// console.log(sayHi("Bob"));  // Outputs: "Hi Bob"
// export function createGreeting(greeting) {}

// Exercise 2: Counter
// Write a function createCounter() that initializes a counter to 0 and returns an object with two methods:
// increment() which increments the counter and returns the new value,
// and getValue() which returns the current value of the counter.

function createCounter() {
    let counter = 0;

    function increment(){
        return ++counter;
    };

    function getValue() {
        return counter
    };

    return {
        increment,
        getValue,
    }
}

// let counter = createCounter();
// console.log(counter.getValue());  // Outputs: 0
// console.log(counter.increment());  // Outputs: 1
// console.log(counter.increment());  // Outputs: 2
// console.log(counter.getValue());  // Outputs: 2
// export function createCounter() {}

// Exercise 3: Function Store
// Create a function functionStore() that allows you to store and retrieve functions by a key.
// It should return an object with two methods: store(key, fn) which stores the function fn
// under the string key, and run(key, ...args) that runs the function stored under key with
// the provided arguments.

function functionStore() {
    let fns = {};
    
    function store(key, fn) {
        fns[key] = fn;
        return;
    };

    function run(key, ...args) {
        return fns[key](...args);
    }

    return {
        store,
        run,
    }
};

// Example;
// let store = functionStore();
// store.store("add", (a, b) => a + b);
// console.log(store.run("add", 5, 7)); // Outputs: 12
// export function functionStore() {}

// Exercise 4: Private Variables
// Write a function createPerson(name) that creates private variables and provides methods
// to access and modify them. This function should return an object with methods getName()
// to return the current name, and setName(newName) to set a new name.

function createPerson(name) {
    let personName = name;

    function getName() {
        return personName;
    };

    function setName(newName) {
        personName = newName;
        return personName;
    }

    return {
        getName,
        setName,
    }
};

// let person = createPerson("Alice");
// console.log(person.getName());  // Outputs: "Alice"
// person.setName("Bob");
// console.log(person.getName());  // Outputs: "Bob"
// export function createPerson(name) {}

// Exercise 5: Limited Call Function
// Description: Write a function createLimitedCallFunction(fn, limit) that
// takes a function fn and a number limit as arguments. This returned function can only be
// called up to limit times. After the limit is reached, every subsequent call to this function
// should be ignored.

function createLimitedCallFunction(fn, limit) {
    let count = 0;
    return () => {
        if (count < limit) {
            count++;
            fn();
        }
    }
}

// function sayHello() {
//   console.log("Hello!");
// }

// let limitedHello = createLimitedCallFunction(sayHello, 3);
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // No output, subsequent calls are ignored
// export function createLimitedCallFunction(fn, limit) {}

// Exercise 6: Rate Limiter
// Implement a function createRateLimiter(limit, interval) that limits how often a
// given function can be called. The function should return a new function that, when called,
// will invoke the original function only if a certain amount of time (interval in milliseconds)
// has passed since the last invocation. The limit parameter should specify how many times the function
// can be triggered within the given interval.

// method 1: hard code interval time
// function createRateLimiter(fn, limit, interval) {
//     let count = 0;
//     let lastResetTime = Date.now();

//     return (...args) => {
//         const curTime = Date.now();
        
//         // Check if interval has passed to reset the count
//         if (curTime - lastResetTime >= interval) {
//             count = 0;
//             lastResetTime = curTime;
//         }

//         // Check if the call count is within the limit
//         if (count < limit) {
//             count++;
//             fn(...args);
//         } 
//     };
// }

// method 2: using setInterval()
function createRateLimiter(fn, limit, interval) {
    let count = 0;
    let id = null;
    return (...args) => {
        if (id) {
            clearInterval();
            // id = null;
            count = 0;
        }
        id = setInterval(() => {
            if (count < limit) {
                fn(...args);
                count++;
            }
        }, interval)
    }
}


// function logMessage(message) {
//   console.log(message);
// }

// let limitedLog = createRateLimiter(logMessage, 2, 100); // Allow 2 calls every 10 seconds
// limitedLog("Hello"); // "Hello" is logged
// limitedLog("World"); // "World" is logged
// limitedLog("Again"); // This call is ignored
// export function createRateLimiter(fn, limit, interval) {}
