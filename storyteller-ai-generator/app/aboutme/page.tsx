"use client";
import { FC } from "react";
import styles from "./aboutme.module.css";

const AboutMe: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          Welcome to the About Me page! Here you can learn more about who I am
          and what I do.
        </p>
        {/* Potresti aggiungere una bio o altre informazioni qui */}
      </div>
    </>
  );
};

export default AboutMe;
