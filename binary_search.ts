import { ArrType } from ".";

let count2 = 0;

function binarySearch(arr: ArrType, num: number): number {
  let start = 0;
  let end = arr.length;
  let middle = 0;
  let faund = false;
  let position = -1;
  while (!faund && start <= end) {
    count2 += 1;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === num) {
      faund = true;
      position = middle;
      return position;
    }
    if (num < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

// O(log n) — логарифмическая сложность
// Простейший пример — бинарный поиск. Если массив отсортирован,
//  мы можем проверить, есть ли в нём какое-то конкретное значение,
//  методом деления пополам. Проверим средний элемент, если он больше искомого,
//  то отбросим вторую половину массива — там его точно нет. Если же меньше,
//  то наоборот — отбросим начальную половину. И так будем продолжать делить пополам,
//  в итоге проверим log n элементов.
