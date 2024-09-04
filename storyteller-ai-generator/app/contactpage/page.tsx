"use client";
import { FC } from "react";
import styles from "./contactpage.module.scss";

const ContactPage: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Page</h1>
        <p className={styles.description}>
          If you have any questions, feel free to reach out!
        </p>
        {/* Potresti aggiungere un form di contatto o altre informazioni qui */}
      </div>
    </>
  );
};

export default ContactPage;
