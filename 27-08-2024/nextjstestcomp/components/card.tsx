import React from "react";
import { Item } from "@/data/data"; // Importa l'interfaccia Item

// Definizione delle props per il componente Card
interface CardProps {
  items: Item[];
}

const Card: React.FC<CardProps> = ({ items }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl border-b-4 border-indigo-500 pb-4">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 border-b-2 border-gray-200 pb-4">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={index}
              className="flex max-w-xl flex-col items-start justify-between border-2 border-gray-300 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">Mar 16, 2020</time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 border border-gray-300"
                >
                  Operator {item.id}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 transition-all duration-200 ease-in-out">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    {item.name} {item.cognome}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={item.image}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50 border border-gray-300"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900 hover:text-indigo-500 transition-colors duration-200 ease-in-out">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {item.role}
                    </a>
                  </p>
                </div>
              </div>
              <div className="relative mt-8">
                <h4 className="text-md font-semibold text-gray-900">
                  Personal Info:
                </h4>
                <ul className="mt-2 text-sm leading-6 text-gray-600 space-y-1">
                  <li>Email: {item.personalinfo?.email}</li>
                  <li>Date of Birth: {item.personalinfo?.dataNascita}</li>
                </ul>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6 space-y-2">
                  <p className="font-semibold text-gray-900 hover:text-indigo-500 transition-colors duration-200 ease-in-out flex items-center">
                    <a href="#" className="flex items-center space-x-2">
                      <span className="material-icons text-indigo-500">
                        code
                      </span>
                      <span className="relative">Skills:</span>
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.languages?.languages.map((language, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-200 ease-in-out"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
