import Link from "next/link";
import { useCart } from "@/Context/CartContext";
import { useState } from "react";
import { toast } from "react-toastify";

interface CardProps {
  item: {
    _id: string;
    name: string;
    price: string;
    description: string;
    category: string;
    images: string;
    quantity: { type: Number; default: 1 };
  };
  showDetailsLink?: boolean;
}

const Card = ({ item, showDetailsLink = true }: CardProps) => {
  const { addItemToCart } = useCart();
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = () => {
    setIsClicked(true);
    addItemToCart(item);
    toast.success(`${item.name} added to cart`);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div className="bg-gray-200 border border-gray-400 text-white px-4 py-2    hover:shadow-lg  hover:bg-gray-300 transition-colors duration-300 ">
      <h2
        className="text-xl text-black mb-2"
        style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}
      >
        {item.name}
      </h2>
      <img
        src={item.images}
        alt={item.name}
        className="w-full h-48 object-cover mb-3 cursor-pointer"
      />
      <p
        className="text-lg text-black mb-3"
        style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}
      >
        Price: {item.price} €
      </p>
      <p
        className="text-black mb-3"
        style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}
      >
        Description: {item.description}
      </p>
      <p
        className="text-black mb-3"
        style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}
      >
        Category: {item.category}
      </p>
      <div className="w-full flex flex-col space-y-2">
        <button
          className="bg-blue-400 text-white px-4 py-2 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-500 "
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        {showDetailsLink && (
          <Link href={`/products/${item._id}`}>
            <button className="bg-blue-400 text-white px-4 py-2 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-500">
              <Link href={`/products/${item._id}`}>details</Link>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
