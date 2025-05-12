// Задача 8

// enum Role {
//   Admin,
//   User,
//   Guest
// }

// Завдання:
// 1. Створіть функцію getPermissions, яка приймає параметр role типу Role.
// 2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:
// Admin має права: "create", "read", "update", "delete"
// User має права: "read", "update"
// Guest має лише право: "read"
// 3. Типізуйте параметр і тип повернення функції getPermissions.
// 4. Перевірте, що TypeScript не дозволяє передати в getPermissions значення, якого немає в Role.

enum Role {
  Admin,
  User,
  Guest,
}

function getPermissions(role: Role): string[] {
  switch (role) {
    case Role.Guest:
      return ["read"];
    case Role.User:
      return ["read", "update"];
    case Role.Admin:
      return ["create", "read", "update", "delete"];
  }
}

console.log(getPermissions(Role.User));
console.log(getPermissions(Role.None));

//
type Role1 = "Admin" | "User" | "Guest";

function getPermissions1(role: Role1): string[] {
  switch (role) {
    case "Guest":
      return ["read"];
    case "User":
      return ["read", "update"];
    case "Admin":
      return ["create", "read", "update", "delete"];
    // default:
    //   throw new Error("Unknown role");
  }
}

console.log(getPermissions1("User"));
console.log(getPermissions1("None"));
