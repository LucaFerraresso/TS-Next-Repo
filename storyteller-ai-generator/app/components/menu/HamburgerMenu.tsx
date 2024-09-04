"use client";
import { FC, useState } from "react";
import styles from "./HamburgerMenu.module.scss";

interface MenuItem {
  name: string;
  href?: string;
  onClick?: () => void;
}

interface HamburgerMenuProps {
  items: MenuItem[];
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button className={styles.hamburgerIcon} onClick={toggleMenu}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      <div
        className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}
        aria-expanded={isOpen}
      >
        {items.map((item, index) =>
          item.href ? (
            <a key={index} href={item.href} className={styles.menuItem}>
              {item.name}
            </a>
          ) : (
            <button
              key={index}
              className={styles.menuItem}
              onClick={item.onClick}
            >
              {item.name}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
