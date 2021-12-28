/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
import { useState, useEffect } from "react";
import styles from "../SearchComp/SearchComp.module.css";
import * as sortingAlgo from "../../Algorithms/sortingAlgorithms";
import Link from "next/link";

const SearchComp = () => {
  const [arr, setArr] = useState<number[]>();

  useEffect(() => {
    resetArr();
  }, []);

  function resetArr() {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push(randomNumber(5, 750));
    }
    setArr(arr);
  }

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function bubble() {
    const finalArray = sortingAlgo.bubblesort(arr);

    console.log(finalArray);
    for (let i = 0; i < finalArray.length; i++) {
      const [n, k] = finalArray[i];

      setTimeout(() => {
        const position1 = document.getElementById(`${n}`);
        const position2 = document.getElementById(`${k}`);
        console.log(position1 + " | " + position2);
        setTimeout(() => {
          var temp = position1!.style.height;
          position1!.style.height = position2!.style.height;
          position2!.style.height = temp;
        }, i * 1);
      }, i * 1);
    }
  }

  function insert() {
    const finalArray = sortingAlgo.insertionSort(arr, arr!.length);

    for (let i = 0; i < finalArray.length; i++) {
      const [n, k] = finalArray[i];

      setTimeout(() => {
        const position1 = document.getElementById(`${n}`);
        const position2 = document.getElementById(`${k}`);
        console.log(position1 + " | " + position2);
        setTimeout(() => {
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
        const position2 = document.getElementById(`${k}`);
        console.log(position1 + " | " + position2);
        setTimeout(() => {
          var temp = position1!.style.height;
          position1!.style.height = position2!.style.height;
          position2!.style.height = temp;
        }, i * 1);
      }, i * 1);
    }
  }

  function quick() {
    const finalArray = sortingAlgo.quickSort(arr);

    for (let i = 0; i < finalArray.length; i++) {
      const [n, k] = finalArray[i];

      setTimeout(() => {
        const position1 = document.getElementById(`${n}`);
        const position2 = document.getElementById(`${k}`);
        console.log(position1 + " | " + position2);
        setTimeout(() => {
          var temp = position1!.style.height;
          position1!.style.height = position2!.style.height;
          position2!.style.height = temp;
        }, i * 1);
      }, i * 1);
    }
  }

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
        </div>
        <div className={styles.sideContainer}>
          <div className={styles.sideBar}>
            <button className={styles.each} onClick={() => resetArr()}>
              Reset
            </button>
            <button className={styles.each} onClick={() => bubble()}>
              Bubble Sort
            </button>
            <button className={styles.each} onClick={() => insert()}>
              Insertion Sort
            </button>
            <button className={styles.each} onClick={() => shell()}>
              Shell Sort
            </button>
            <button className={styles.each} onClick={() => quick()}>
              Quick Sort
            </button>
            <Link href="https://github.com/SamWilk/Sort-Arrays">
              <button className={styles.each}>Sorting Repo</button>
            </Link>
            <Link href="http://portfolio-samwilk-static.s3-website-us-east-1.amazonaws.com/">
              <button className={styles.each}>Find Me</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComp;
