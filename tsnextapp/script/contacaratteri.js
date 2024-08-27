const countCharacters = (input) => {
  let charCount = 0;
  let numCount = 0;
  let specialCount = 0;
  let emptySpace = 0;

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char >= "0" && char <= "9") {
      numCount++;
    } else if (/[a-zA-Z]/.test(char)) {
      charCount++;
    } else if (char !== " ") {
      specialCount++;
    } else if (char === " ") {
      emptySpace++;
    }
  }

  return { charCount, numCount, specialCount, emptySpace };
};

// Ottieni l'input dell'utente dalla console
const inputText = process.argv[2] || "";

const result = countCharacters(inputText);

console.log("Character Count:", result.charCount);
console.log("Number Count:", result.numCount);
console.log("Special Character Count:", result.specialCount);
console.log("Empty Space Count:", result.emptySpace);
