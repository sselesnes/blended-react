// Задача 7
// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
// ];

// Завдання:
// Створіть інтерфейс User, який описує структуру об’єкта з іменем і віком.
// Типізуйте змінну users.
// Додайте ще одного користувача до масиву, дотримуючись структури.
// Переконайтеся, що TypeScript не дозволяє додати об’єкт без обов’язкових полів (name, age).

type UsersArray = { name: string; age: number }[];
const users1: UsersArray = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
users1.push({ name: "John", age: 33 });

//
interface User {
  name: string;
  age: number;
}
const users2: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
users2.push({ name: "John", age: 33 });
users2.push({ name: "Martin" });

console.log(users2);
