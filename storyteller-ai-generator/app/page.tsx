"use client";
import { FC } from "react";
import styles from "./page.module.scss";
import MenuSelection from "./components/sections/MenuSelection/MenuSelection";

const Home: FC = () => {
  return (
    <>
      <main className={styles.main}>
        <MenuSelection />
      </main>
    </>
  );
};

export default Home;
