"use client";
import { FC } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

interface FooterProps {
  label: string;
  links: Array<{ name: string; href: string }>;
}

const Footer: FC<FooterProps> = ({ label, links }) => {
  return (
    <>
      <footer className={styles.footer}>
        <h1 className={styles.copyright}>{label}</h1>
        <div className={styles.links}>
          {links.map((link, index) => (
            <Link key={index} href={link.href} className={styles.footerLink}>
              {link.name}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
