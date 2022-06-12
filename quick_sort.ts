import { ArrType, onSortArray } from ".";

let count5 = 0;

const quickSort = (arr: ArrType): ArrType => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    count5 += 1;
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else greater.push(arr[i]);
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

// O(n\log n)  — логарифмическая сложность

// Быстрая сортировка, сортировка Хоара
// Выбрать из массива элемент, называемый опорным.
// Это может быть любой из элементов массива.
// От выбора опорного элемента не зависит корректность алгоритма,
// но в отдельных случаях может сильно зависеть его эффективность
// Сравнить все остальные элементы с опорным и переставить их в массиве так,
// чтобы разбить массив на три непрерывных отрезка,
// следующих друг за другом: «элементы меньшие опорного», «равные» и «большие»[
// Для отрезков «меньших»
// и «больших» значений выполнить рекурсивно ту же последовательность операций,
//  если длина отрезка больше единицы.
