"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-400 text-white p-4 hover:bg-blue-500">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Fake Ecommerce
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/Cart" className="hover:underline">
            Cart
          </Link>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
