import analyzeArray from "../code/analyzeArray";

test("check min value", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1));

test("check max value", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8));

test("check max length", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6));

test("check average", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4));

test("check whole object", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));
