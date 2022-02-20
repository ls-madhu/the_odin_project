import reverseString from "../code/reverseString";

test("reverse string", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("reverse string and     keeps spaces", () => {
  expect(reverseString("string with  spaces")).toBe("secaps  htiw gnirts");
});
