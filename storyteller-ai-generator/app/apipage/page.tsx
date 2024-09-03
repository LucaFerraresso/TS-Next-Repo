"use client";

import styles from "./apipage.module.css";
import Link from "next/link";
import Button from "@/app/components/atoms/button/Button";
import { FC } from "react";

const ApiPage: FC = () => {
  const handleRedirecting = (): void => {
    console.log("Redirecting to home...");
  };

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>API</h1>
        <Link href="/" passHref>
          <Button label="Return to Home" onClick={handleRedirecting} />
        </Link>
      </div>
    </>
  );
};

export default ApiPage;
