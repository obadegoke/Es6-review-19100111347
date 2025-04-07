// index.js

import { Person, delayedHello, greetAsync, createUserMap } from './tools.js';

// Test Class
const person = new Person("Valentine");
console.log(person.greet()); // "Hello, my name is Valentine."

// Test Promise
delayedHello("Hello, valentine!").then(console.log); // "Hello after 2 seconds, valentine"

// Test Async/Await
(async () => {
  const message = await greetAsync("obadegoke");
  console.log(message); // "Hello after 2 seconds, obadegoke"
})();

// Test Map
const userMap = createUserMap(["Jane", "John", "Jill"]);
for (let [key, value] of userMap.entries()) {
  console.log('${key}: ${value}');
}
// Output:
// 1: Jane
// 2: John
// 3: Jill