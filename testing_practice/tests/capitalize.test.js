import capitalize from "../code/capitalize";

test("capitalizes string", () => {
  expect(capitalize("sample string")).toBe("Sample string");
});

test("works with capitalized string", () => {
  expect(capitalize("Sample string")).toBe("Sample string");
});

test("works with string starting with numbers", () => {
  expect(capitalize("1234Sample string")).toBe("1234Sample string");
});
