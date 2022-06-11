const onSortArr: number[] = [3, 33, 2, 6, 54, 4, 77, 21, 2, 9, 0, 7, 8];

let countThree = 0;

const  selectionSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      countThree += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

// O(log n2) — логарифмическая сложность
// Сортировка выбором
