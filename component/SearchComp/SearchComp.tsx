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
    for (let i = 0; i < 10; i++) {
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
        position1!.style.background = "black";
        const position2 = document.getElementById(`${k}`);
        position2!.style.background = "black";
        console.log(position1 + " | " + position2);
        setTimeout(() => {
          position1!.style.background = "blue";
          position2!.style.background = "blue";
          console.log(position1!.style.height);
          var temp = position1!.style.height;
          position1!.style.height = position2!.style.height;
          position2!.style.height = temp;
        }, i * 1 + 1000);
      }, i * 1 + 1000);
    }
    console.log(finalArray);
  }

  console.log(arr);

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
          <button onClick={() => merging()}>MergeSort</button>
          <button onClick={() => bubble()}>BubbleSort</button>
        </div>
      </div>
    </>
  );
};

export default SearchComp;
