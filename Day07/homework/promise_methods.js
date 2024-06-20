const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This promise takes 1 seconds to resolve.`)
    }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This promise takes 2 seconds to resolve.`)
    }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This promise takes 3 seconds to resolve.`)
    }, 3000)
})

const errPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(`This promise takes 1 seconds to reject.`)
    }, 1000)
})

const errPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(`This promise takes 3 seconds to reject.`)
    }, 3000)
})

// Promises.all()
const allResolvedPromises = [promise3, promise2, promise1]
Promise.all(allResolvedPromises).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

const lastPromisesIsRejected = [promise3, promise1, errPromise3]
Promise.all(lastPromisesIsRejected).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

// Promises.race()
Promise.race([promise3, promise1]).then((res) => {
    console.log(res); // promise1 printed because it fulfilled earlier
}).catch((err) => {
    console.log(err);
})

Promise.race([promise3, errPromise1]).then((res) => {
    console.log(res); 
}).catch((err) => {
    console.log(err); // errPromise1 printed because it rejected earlier
})

// Promise.allSettled()
const mixedPromises = [promise3, errPromise3, promise2, promise1, errPromise1]
// console.log(Promise.allSettled(mixedPromises))
Promise.allSettled(mixedPromises).then((results) => {
    results.forEach((result) => console.log(result))
})