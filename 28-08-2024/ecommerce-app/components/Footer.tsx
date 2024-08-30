import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">© 2024. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="/contacts" className="hover:underline">
            Contact
          </Link>
          <Link href="/aboutme" className="hover:underline">
            About Me
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
