const countCharacters = (input) => {
  let numCount = 0;
  let charCount = 0;
  let parenCount = 0;
  let emptySpace = 0;
  let specialCount = 0;

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

  return { charCount, numCount, specialCount, emptySpace, parenCount };
};

// Ottieni l'input dell'utente dalla console
const inputText = process.argv[2] || "";

const result = countCharacters(inputText);

console.log("Character Count:", result.charCount);
console.log("Number Count:", result.numCount);
console.log("Special Character Count:", result.specialCount);
console.log("Empty Space Count:", result.emptySpace);
console.log("Parents Count:", result.parenCount);
console.log("------------------------------");
console.log(
  "Total Characters:",
  result.charCount +
    result.numCount +
    result.specialCount +
    result.emptySpace +
    result.parenCount
);
