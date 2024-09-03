"use client";
import styles from "./page.module.css";
import Button from "@/app/components/atoms/button/Button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleclick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <main className={styles.main}>
        <h1>novels-teller AI generator app</h1>
        <Button label="GENERA" onClick={() => handleclick()} />
        {count}
      </main>
    </>
  );
}
