"use client";
import { useState } from "react";

const ContaCaratteri = () => {
  const [charCount, setCharCount] = useState(0);
  const [numCount, setNumCount] = useState(0);
  const [specialCount, setSpecialCount] = useState(0);
  const [emptySpace, setEmptySpace] = useState(0);
  const [parenCount, setParentCount] = useState(0);
  const [text, setText] = useState("");

  const countCharacters = (input: string) => {
    let charCount = 0;
    let numCount = 0;
    let specialCount = 0;
    let emptySpace = 0;
    let parenCount = 0;

    for (let i = 0; i < input.length; i++) {
      let char = input[i];

      if (char >= "0" && char <= "9") {
        numCount++;
      } else if (/[a-zA-Z]/.test(char)) {
        charCount++;
      } else if (
        char === "(" ||
        char === ")" ||
        char === "[" ||
        char === "]" ||
        char === "{" ||
        char === "}"
      ) {
        parenCount++;
      } else if (char === " ") {
        emptySpace++;
      } else {
        specialCount++;
      }
    }

    setCharCount(charCount);
    setNumCount(numCount);
    setSpecialCount(specialCount);
    setEmptySpace(emptySpace);
    setParentCount(parenCount);
  };

  const handleButtonClick = () => {
    countCharacters(text);
  };

  return (
    <div className="font-semibold flex flex-col gap-1 border border-black text-black  p-8 rounded-xl shadow-lg bg-gray-300 transition-all duration-300 ease-in-out hover:shadow-2xl">
      <h1>Conta Caratteri</h1>

      <div className="text-black text-left">
        <label className=" text-black">Inserisci testo qui:</label>
        <textarea
          id="textInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-black bg-gray-200 w-full p-4 h-40 text-lg border border-black rounded-lg "
          placeholder="Digita qui..."
        ></textarea>
      </div>

      <button
        onClick={handleButtonClick}
        className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg border border-black font-bold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700"
      >
        Count Charts!
      </button>

      <div className="mt-4 p-4 bg-gray-200 text-black rounded-lg border border-black text-left">
        <p className="text font-bold text-blue-800">
          Caratteri normali: <span className="font-bold">{charCount}</span>
        </p>
        <p className="text font-bold text-red-800">
          Numeri: <span className="font-bold">{numCount}</span>
        </p>
        <p className="text font-bold text-purple-800">
          Caratteri speciali: <span className="font-bold">{specialCount}</span>
        </p>
        <p className="text font-bold text-orange-800">
          Spazi vuoti: <span className="font-bold">{emptySpace}</span>
        </p>
        <p className="text font-bold text-black">
          Parentesi: <span className="font-bold">{parenCount}</span>
        </p>
      </div>
    </div>
  );
};

export default ContaCaratteri;
