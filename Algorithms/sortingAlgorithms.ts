import { serveWebpackBrowser } from "@angular-devkit/build-angular/src/dev-server";

export function mergeSort(arr: any): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(left: any, right: any) {
  let mergeArr = [];
  const animations = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergeArr.push(left[i++]);
      animations.push([i, j]);
    } else {
      mergeArr.push(right[j++]);
      animations.push([j, i]);
    }
  }
  return mergeArr.concat(left.slice(i)).concat(right.slice(j));
}

export function bubblesort(arr: any): number[][] {
  const animations = [];
  arr = arr.slice(); // creates a copy of the array

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        animations.push([j, j + 1]);
        //console.log("Swaping: " + j + " | " + j + 1);
      }
    }
  }
  console.log(arr);

  return animations;
}

export function insertionSort(arr: any, n: number): number[][] {
  const animations = [];

  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      animations.push([j + 1, j]);
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  console.log(arr);

  return animations;
}

export function shellSort(arr: any): number[][] {
  let n = arr.length;
  const ani: any[] = [];

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      let temp = arr[i];

      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
        ani.push([j, j - gap]);
      }

      arr[j] = temp;
    }
  }
  console.log(arr);
  return ani;
}

//Quick sort
export function quickSort(arr: any) {
  const length = arr.length;
  const ani: any = [];
  const val = quickIt(0, arr.length - 1, arr, ani);
  console.log(arr);

  return val;
}

function swap(leftPtr: number, rightPtr: number, arr: number[], ani: any) {
  let temp = arr[leftPtr];
  arr[leftPtr] = arr[rightPtr];
  arr[rightPtr] = temp;
  ani.push([leftPtr, rightPtr]);
}

function partition(
  left: number,
  right: number,
  pivot: number,
  arr: number[],
  ani: any
): any {
  let leftPtr = left - 1;
  let rightPtr = right;
  let idx = 0;
  while (true) {
    while (arr[++leftPtr] < pivot);

    while (rightPtr > 0 && arr[--rightPtr] > pivot);

    if (leftPtr >= rightPtr) {
      break;
    } else {
      swap(leftPtr, rightPtr, arr, ani);
    }
    idx++;
  }
  swap(leftPtr, right, arr, ani);
  return leftPtr;
}

function quickIt(left: number, right: number, arr: number[], ani: any): any {
  if (right - left <= 0) {
    return;
  } else {
    let n = arr[right];

    let part = partition(left, right, n, arr, ani);
    quickIt(left, part - 1, arr, ani);
    quickIt(part + 1, right, arr, ani);
    return ani;
  }
}
