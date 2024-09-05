"use client";
import { FC, useState } from "react";
import styles from "./page.module.scss";
import MenuSelection from "./components/sections/MenuSelection/MenuSelection";

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Novels-Teller AI Generator App</h1>
      </div>
      <MenuSelection />
    </main>
  );
};

export default Home;
