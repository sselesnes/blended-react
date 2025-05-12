// Задача 6

// const user = {
//   name: "Alice",
//   address: {
//     city: "Kyiv"
//   }
// };

// console.log(user.address?.city);

// Завдання:
// Створіть тип для user.
// Зробіть address необов’язковим.
// Перевірте, що user.address?.city не викликає помилки.

type User = {
  name: string;
  address?: {
    city: string;
  };
};

const user1: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

const user2: User = {
  name: "John",
};

console.log(user1.address?.city);
console.log(user2.address?.city);
