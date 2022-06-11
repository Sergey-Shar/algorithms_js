const onSortArray: number[] = [3, 8, 33, 2, 6, 54, 4, 77, 21, 2, 9, 0, 7, 8];
let countFour = 0;

const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      countFour += 1;
    }
  }
  return arr;
};

// O(log n2) — логарифмическая сложность
// Сортировка пузырьком
