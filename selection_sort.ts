import { ArrType } from ".";

let count3 = 0;

const selectionSort = (array:ArrType) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count3 += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
};

// O(log n2) — логарифмическая сложность
// Сортировка выбором
