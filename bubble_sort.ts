import { ArrType, onSortArray } from ".";

let count4 = 0;

const bubbleSort = (arr: ArrType): ArrType => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      count4 += 1;
    }
  }
  return arr;
};



// O(log n2) — логарифмическая сложность
// Сортировка пузырьком
