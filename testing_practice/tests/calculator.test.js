import calculator from "../code/calculator";

test("Adds 2 + 3 to equal 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Subtracts 3 - 2 to equal 1", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("Subtracts 2 - 3 to equal -1", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("Multiplies 2 * 3 to equal 6", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("Divides 6 / 2 to equal 3", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("Division with 0 return null", () => {
  expect(calculator.divide(6, 0)).toBeNull();
});
