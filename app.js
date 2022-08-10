const word = "abba".toUpperCase().split("");

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const codeKey = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

let newArray = [];

word.map((letter) => {
  alphabets.map((char, num) => {
    if (char === letter) {
      newArray.push(alphabets[num + codeKey]);
    }
  });
});

encodedWord = newArray.join("");
console.log(encodedWord);

let newNewArray = [];

encodedWord.split("").map((letter) => {
  alphabets.map((char, num) => {
    if (char === letter) {
      newNewArray.push(alphabets[num - codeKey]);
    }
  });
});

decodedWord = newNewArray.join("");

console.log(decodedWord);
