// tools.js

// 1. Class
class Person {
    constructor(valentine) {
      this.name = valentine;
    }
  
    greet() {
        return `valentine`; // Greet using the instance property 'name'
      }
    }
  
  // 2. Promise
  function delayedHello(valentine) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(valentine);
      }, 2000);
    });
  }
  
  // 3. Async/Await
  async function greetAsync(obadegoke) {
    const message = await delayedHello(obadegoke);
    return message;
  }
  
  // 4. Map
  function createUserMap(users) {
    const map = new Map();
    users.forEach((user, index) => {
      map.set(index + 1, user);
    });
    return map;
  }
  
  // Exporting (Modularity)
  export { Person, delayedHello, greetAsync, createUserMap };