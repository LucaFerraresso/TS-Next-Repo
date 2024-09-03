import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
