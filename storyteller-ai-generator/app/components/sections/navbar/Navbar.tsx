"use client";
import { FC } from "react";
import Link from "next/link";
import HamburgerMenu from "@/app/components/menu/HamburgerMenu";
import styles from "./Navbar.module.scss";

const Navbar: FC<{
  label: string;
  links: Array<{ name: string; href: string }>;
}> = ({ label, links }) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>{label}</h1>
      <div className={styles.links}>
        {links.map((link, index) => (
          <Link key={index} href={link.href} className={styles.navLink}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
