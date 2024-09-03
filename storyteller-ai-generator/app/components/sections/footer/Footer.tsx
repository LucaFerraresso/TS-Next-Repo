"use client";
import { FC } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterProps {
  label: string;
  links: Array<{ name: string; href: string }>;
}

const Footer: FC<FooterProps> = ({ label, links }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          {links.map((link, index) => (
            <Link key={index} href={link.href} className={styles.footerLink}>
              {link.name}
            </Link>
          ))}
          <p className={styles.copyright}>{label}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
