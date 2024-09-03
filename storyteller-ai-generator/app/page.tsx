"use client";
import styles from "./page.module.css";
import Button from "@/app/components/atoms/button/Button";
import { useState } from "react";

import Link from "next/link";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleclick = () => {
    setCount(count + 1);
  };
  const handleRedirecting = () => {
    console.log("redirecting...");
  };
  return (
    <>
      <main className={styles.main}>
        <Link href="/api-page">
          <Button label="GO TO API PAGE" onClick={() => handleRedirecting()} />
        </Link>

        <h1>novels-teller AI generator app</h1>
        <Button label="GENERA" onClick={() => handleclick()} />
        {count}
      </main>
    </>
  );
}
