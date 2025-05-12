// Задача 5

// function createUser({name, age}) {
//   return {
//     name,
//     age,
//     isAdmin: false
//   };
// }

// createUser({ name: "Alice", age: 30 });

// Завдання:
// Типізуйте функцію повністю: параметри і повернення функції.

interface UserData {
  name: string;
  age: number;
}

function createUser1(userData: { name: string; age: number }): {
  name: string;
  age: number;
  isAdmin: boolean;
} {
  const { name, age } = userData;
  return {
    name,
    age,
    isAdmin: false,
  };
}

//
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser2(userData: UserData): User {
  const { name, age } = userData;
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser1({ name: "Alice", age: 30 });
createUser2({ name: "Alice", age: 30 });
