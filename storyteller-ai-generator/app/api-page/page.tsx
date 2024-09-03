"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@/app/components/atoms/button/Button";

const ApiPage = () => {
  const handleRedirecting = () => {
    console.log("redirecting to home...");
  };
  return (
    <div className={styles.main}>
      <h1>API</h1>
      <Link href="/">
        <Button label="return to home" onClick={() => handleRedirecting()} />
      </Link>
    </div>
  );
};
export default ApiPage;
