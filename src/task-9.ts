// Задача 9
// Завдання:

// 1. Створіть інтерфейс Container, що містить:
// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.

// 2. Створіть функцію getLastElement, яка приймає контейнер Container і повертає останній елемент контейнера.

// 3. Створіть два контейнери:
// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.

// 4. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

// Примітка:
// Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T | undefined;
}

function createContainer<T>(): Container<T> {
  const container: Container<T> = {
    items: [],
    addItem(item: T): void {
      this.items.push(item);
    },
    getItem(index: number): T | undefined {
      return this.items[index];
    },
  };
  return container;
}

function getLastElement<T>(container: Container<T>): T | undefined {
  const lastIndex = container.items.length - 1;
  return container.getItem(lastIndex);
}

const numberContainer: Container<number> = createContainer<number>();
const stringContainer: Container<string> = createContainer<string>();

numberContainer.addItem(10);
numberContainer.addItem(20);
numberContainer.addItem(30);
console.log(numberContainer.items); // [10, 20, 30]
console.log(numberContainer.getItem(1)); // 20

stringContainer.addItem("apple");
stringContainer.addItem("banana");
stringContainer.addItem("cherry");
console.log(stringContainer.items); // ["apple", "banana", "cherry"]
console.log(stringContainer.getItem(0)); // "apple"

console.log(getLastElement(numberContainer)); // 30
console.log(getLastElement(stringContainer)); // "cherry"

numberContainer.addItem("test");
stringContainer.addItem(123);
