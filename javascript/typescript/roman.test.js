const roman = require("./roman")

test("2 is II", () => {
  expect(roman(2)).toBe("II")
})

test("3 is III", () => {
  expect(roman(3)).toBe("III")
})

test("4 is IV", () => {
  expect(roman(4)).toBe("IV")
})

test("5 is V", () => {
  expect(roman(5)).toBe("V")
})

test("8 is VIII", () => {
  expect(roman(8)).toBe("VIII")
})

test("9 is IX", () => {
  expect(roman(9)).toBe("IX")
})

test("12 is XII", () => {
  expect(roman(12)).toBe("XII")
})

