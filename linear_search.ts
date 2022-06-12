import { ArrType } from ".";

let count1 = 0;

function linearSearch(arr: ArrType, item: number): number | null {
  for (let i = 0; i < arr.length; i++) {
    count1 += 1;
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

const linear = (arr: number[], num: number) => {
  const index = arr.findIndex((item) => {
    count1 += 1;
    return item === num;
  });
  return index;
};

// O(n) — линейная сложность
// Такой сложностью обладает, например,
// алгоритм поиска наибольшего элемента в не отсортированном массиве.
// Нам придётся пройтись по всем n элементам массива, чтобы понять,
// какой из них максимальный.
