async function fetchPosts() {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  //return the posts
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.statusText}`);
    }
    const posts = await response.json();
    return posts;
  } catch(err) {
    console.log(`fetch error: ${err}`);
  }
}

console.log(fetchPosts());

async function fetchPostById(id) {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.statusText}`);
    }
    const post = await response.json();
    return post;
  } catch(err) {
    console.log(`fetch error: ${err}`);
  }
}

console.log(fetchPostById(4));

async function sequentialPromise(promises, order) {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = [
  //   Promise.resolve("data1"),
  //   Promise.resolve("data2"),
  //   Promise.resolve("data3"),
  // ];
  //results = ["data2", "data1", "data3"]
  const results = [];
  try {
    for (const idx of order) {
      const res = await promises[idx - 1];
      results.push(res);
    }
    return results;
  } catch(err) {
    console.log(`Error: ${err}`);
  }
}

const order = [2,1,3];
const promises = [
    Promise.resolve("data1"),
    Promise.resolve("data2"),
    Promise.resolve("data3"),
];

console.log(sequentialPromise(promises, order));