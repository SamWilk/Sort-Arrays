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
  // console.log(arr);
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
  return ani;
}

//Quick Sort
function partition(arr: any, start: any, end: any) {
  const pivot = arr[end];
  let idx = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      // Swapping elements
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
      // Moving to next element
      idx++;
    }
  }

  [arr[idx], arr[end]] = [arr[end], arr[idx]];
  return idx;
}

function quickSortRecursive(arr: any, start: any, end: any) {
  // Base case or terminating case
  if (start >= end) {
    return;
  }

  // Returns pivotIndex
  let index = partition(arr, start, end);

  // Recursively apply the same logic to the left and right subarrays
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}
