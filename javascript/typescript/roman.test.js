const roman = require("./roman")

test("2 is II", () => {
  expect(roman(2)).toBe("II")
})

test("3 is III", () => {
  expect(roman(3)).toBe("III")
})