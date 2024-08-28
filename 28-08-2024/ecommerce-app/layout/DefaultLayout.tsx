import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const DafaultLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DafaultLayout;
