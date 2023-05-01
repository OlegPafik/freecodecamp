const roman = require("./roman")

test("2 is II", () => {
  expect(roman(2)).toBe("II")
})