function caesarCipher(str, shift) {
  let str_cpy = "";
  let char = "";
  for (let letter of str) {
    char = letter.toUpperCase();
    if (char >= "A" && char <= "Z") {
      char = String.fromCharCode(
        65 + ((65 + (char.charCodeAt(0) + (shift % 26))) % 26)
      );
    }

    if (letter === letter.toLowerCase()) {
      char = char.toLowerCase();
    }

    str_cpy += char;
  }
  return str_cpy;
}

export default caesarCipher;
