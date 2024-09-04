"use client";
import { FC } from "react";
import Link from "next/link";
import HamburgerMenu from "@/app/components/menu/HamburgerMenu";
import styles from "./Navbar.module.scss";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "API", href: "/apipage" },
  { name: "About", href: "/aboutme" },
  { name: "Contact", href: "/contactpage" },
  { name: "Login", href: "/loginpage" },
];

interface NavbarProps {
  label: string;
  links: Array<{ name: string; href: string }>;
}

const Navbar: FC<NavbarProps> = ({ label, links }) => {
  return (
    <nav className={`${styles.navbar} container mx-auto`}>
      <h1 className={styles.title}>{label}</h1>
      <div className={`${styles.links} hidden md:flex`}>
        {links.map((link, index) => (
          <Link key={index} href={link.href} className={styles.navLink}>
            {link.name}
          </Link>
        ))}
      </div>
      {/* Il menu hamburger è visibile solo su schermi piccoli */}
      <div className="md:hidden">
        <HamburgerMenu items={menuItems} />
      </div>
    </nav>
  );
};

export default Navbar;
