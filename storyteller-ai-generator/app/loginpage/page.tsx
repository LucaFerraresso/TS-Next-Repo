"use client";
import { FC } from "react";
import Link from "next/link";
import Button from "../components/atoms/button/Button";
import styles from "./loginpage.module.css";

const LoginPage: FC = () => {
  const handleClick = (): void => {
    console.log("Redirecting to homepage...");
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Login Page</h1>
        <Link href="/" passHref>
          <Button label="Return to Home" onClick={handleClick} />
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
