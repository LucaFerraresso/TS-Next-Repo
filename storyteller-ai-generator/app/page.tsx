"use client";
import { FC, useState } from "react";
import styles from "./page.module.css";
import Button from "@/app/components/atoms/button/Button";
import Link from "next/link";

const Home: FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = (): void => {
    setCount(count + 1);
  };

  const handleRedirecting = (): void => {
    console.log("Redirecting...");
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Novels-Teller AI Generator App</h1>
      </div>
      <div className={styles.buttonsContainer}>
        <Link href="/apipage" passHref>
          <Button label="GO TO API PAGE" onClick={handleRedirecting} />
        </Link>
        <Button label="GENERA" onClick={handleClick} />
      </div>
      <p className={styles.counter}>Generated Count: {count}</p>
    </main>
  );
};

export default Home;
