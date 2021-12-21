import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SearchComp from "../component/SearchComp/SearchComp";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sorting Algo, Sam Wilk</title>
        <meta name="description" content="Created by Sam Wilk" />
      </Head>

      <SearchComp></SearchComp>
      <div className={styles.sideBar}>
        <div className={styles.textHere}>
          This is a visualizer for a few sorting algorithms, created by Sam
          Wilk.
        </div>
        <div className={styles.textHere}>
          I will be adding more sorting algorithms soon, I used typescript and
          next js for this project. Some struggles I found when creating this
          application was being able to switch the css code after sorting the
          array at each iteration. As well as, knowing how to store each swap to
          be able to animate it.
        </div>
        <div className={styles.textHere}>
          There is a few visual bugs (occasionally, sorted array will be in
          console logs) still when animating the sorting, will work on fixing
          those inbetween class and current internships
        </div>
        <div className={styles.textHere}>
          To operate the application, you will need to
        </div>
        <ol className={styles.list}>
          <li className={styles.listEle}>
            Click the desired sorting algorithm
          </li>
          <li className={styles.listEle}>
            Once done animating click reset to randomize the array
          </li>
          <li className={styles.listEle}>Repeat</li>
        </ol>
        <div className={styles.textHere}>
          If you want to see the code for this repo the link is under the
          sorting Repo, Keep up to date with any updates I do and see what I
          change!
        </div>
        <footer className={styles.footer}>
          <Link href="https://www.linkedin.com/in/sam-wilk-a66314210/">
            <a>Created by Sam Wilk, 2021</a>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Home;
