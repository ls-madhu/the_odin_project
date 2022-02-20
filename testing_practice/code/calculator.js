const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return b === 0 ? null : a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

export default calculator;
