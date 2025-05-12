// Задача 4
// Опис: Є масив, який містить розміри екрана у пікселях.

// const dimensions = [1920, 1080];

// Завдання:
// Додайте до змінної dimensions явну типізацію.
// Переконайтеся, що TypeScript не дозволяє додавати до масиву значення інших типів (наприклад, рядки).

type DimensionsArr = [number, number];
const dimensions1: DimensionsArr = [1920, 1080];

//
interface DimensionsObj {
  width: number;
  height: number;
}
const dimensions2: DimensionsObj = { width: 1920, height: 1080 };
