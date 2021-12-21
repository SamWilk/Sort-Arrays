import { useState, useEffect } from "react";
import styles from "../SearchComp/SearchComp.module.css";
import * as sortingAlgo from "../../Algorithms/sortingAlgorithms";

const SearchComp = () => {
  const [arr, setArr] = useState<number[]>();

  useEffect(() => {
    console.log("Hello");
    resetArr();
  }, []);

  function resetArr() {
    const arr = [];
    for (let i = 0; i < 300; i++) {
      arr.push(randomNumber(5, 500));
    }
    setArr(arr);
  }

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function merging() {
    const finalArray = sortingAlgo.mergeSort(arr);

    // console.log(finalArray);

    // return finalArray;
  }

  function bubble() {
    const finalArray = sortingAlgo.bubblesort(arr);

    console.log(finalArray);
    for (let i = 0; i < finalArray.length; i++) {
      const [n, k] = finalArray[i];

      setTimeout(() => {
        const position1 = document.getElementById(`${n}`);
        // position1!.style.background = "black";
        const position2 = document.getElementById(`${k}`);
        // position2!.style.background = "black";
        console.log(position1 + " | " + position2);
        setTimeout(() => {
          // position1!.style.background = "blue";
          // position2!.style.background = "blue";
          console.log(position1!.style.height);
          var temp = position1!.style.height;
          position1!.style.height = position2!.style.height;
          position2!.style.height = temp;
        }, i * 1);
      }, i * 1);
    }
    // console.log(finalArray);
  }

  function insert() {
    const finalArray = sortingAlgo.insertionSort(arr, arr!.length);

    for (let i = 0; i < finalArray.length; i++) {
      const [n, k] = finalArray[i];

      setTimeout(() => {
        const position1 = document.getElementById(`${n}`);
        // position1!.style.background = "black";
        const position2 = document.getElementById(`${k}`);
        // position2!.style.background = "black";
        console.log(position1 + " | " + position2);
        setTimeout(() => {
          // position1!.style.background = "blue";
          // position2!.style.background = "blue";
          console.log(position1!.style.height);
          var temp = position1!.style.height;
          position1!.style.height = position2!.style.height;
          position2!.style.height = temp;
        }, i * 1);
      }, i * 1);
    }
  }
  function shell() {
    const finalArray = sortingAlgo.shellSort(arr);

    for (let i = 0; i < finalArray.length; i++) {
      const [n, k] = finalArray[i];

      setTimeout(() => {
        const position1 = document.getElementById(`${n}`);
        // position1!.style.background = "black";
        const position2 = document.getElementById(`${k}`);
        // position2!.style.background = "black";
        console.log(position1 + " | " + position2);
        setTimeout(() => {
          // position1!.style.background = "blue";
          // position2!.style.background = "blue";
          console.log(position1!.style.height);
          var temp = position1!.style.height;
          position1!.style.height = position2!.style.height;
          position2!.style.height = temp;
        }, i * 1);
      }, i * 1);
    }
  }

  function quick() {
    const finalArray = sortingAlgo.quickSort(arr);
    console.log(finalArray);
  }

  // console.log(arr);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.bars} id="this">
            {arr?.map((value, idx) => (
              <span
                className={styles.content}
                key={idx}
                id={`${idx}`}
                style={{ height: `${value}px` }}
              ></span>
            ))}
          </div>
          <button onClick={() => resetArr()}>Reset</button>
          {/* <button onClick={() => merging()}>MergeSort</button> */}
          <button onClick={() => bubble()}>BubbleSort</button>
          <button onClick={() => insert()}>InsertionSort</button>
          {/* <button onClick={() => heap()}>HeapSort</button> */}
          <button onClick={() => shell()}>ShellSort</button>
          <button onClick={() => quick()}>QuickSort</button>
          {/* Think about doing a shell sort and look into doing quick sort form java algo book and implement it here */}
        </div>
      </div>
    </>
  );
};

export default SearchComp;
