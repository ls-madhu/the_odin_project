function reverseString(str) {
  let str_cpy = "";
  for (let letter of str) {
    str_cpy = letter + str_cpy;
  }

  return str_cpy;
}

export default reverseString;
