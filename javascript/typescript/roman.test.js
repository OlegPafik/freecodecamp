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