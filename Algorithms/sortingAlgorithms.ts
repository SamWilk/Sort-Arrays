export function mergeSort(arr: any): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(left: any, right: any) {
  let mergeArr = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergeArr.push(left[i++]);
    } else {
      mergeArr.push(right[j++]);
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
        animations.push([i, j]);
        console.log("Swaping: " + i + " | " + j);
      }
    }
  }
  console.log(arr);
  return animations;
}
