const numArray: number[] = [1,5,4,3,7,6,5,8,11,9]

let count = 0 

function linearSearch(arr:number[],item:number): number|null {

 for(let i = 0; i < arr.length; i++){
     count += 1 
     if(arr[i] === item){
         return i
     }
 }
 return null
}

// O(n) — линейная сложность
// Такой сложностью обладает, например, 
// алгоритм поиска наибольшего элемента в не отсортированном массиве. 
// Нам придётся пройтись по всем n элементам массива, чтобы понять, 
// какой из них максимальный.