let morseCodeEncoded = document.getElementById("encoded");
let morseCodeDecoded = document.getElementById("decoded");

morseCodeEncoded.addEventListener("keydown", returnDecodedMorseCode);
morseCodeEncoded.addEventListener("keyup", returnDecodedMorseCode);

morseCodeDecoded.addEventListener("keydown", returnEncodedMorseCode);
morseCodeDecoded.addEventListener("keyup", returnEncodedMorseCode);

function returnDecodedMorseCode() {
  morseCodeDecoded.value = decodeMorseCode(morseCodeEncoded.value);
}

function returnEncodedMorseCode() {
  morseCodeEncoded.value = encodeMorseCode(morseCodeDecoded.value);
}

const morseCodeKey = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decodeMorseCode(morseCode) {
  let decodedMorseCode = morseCode
    .split("  ")
    .map((word) =>
      word
        .split(" ")
        .map((letter) => morseCodeKey[letter])
        .join("")
    )
    .join(" ");

  return decodedMorseCode;
}

function encodeMorseCode(text) {
  text = text.toLowerCase();

  let encodedMorseCode = text
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter) =>
          Object.keys(morseCodeKey).find((key) => morseCodeKey[key] === letter)
        )
        .join(" ")
    )
    .join("   ");

  return encodedMorseCode;
}
