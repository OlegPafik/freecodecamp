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

test("16 is XVI", () => {
  expect(roman(16)).toBe("XVI")
})

test("29 is XXIX", () => {
  expect(roman(29)).toBe("XXIX")
})

test("44 is XLIV", () => {
  expect(roman(44)).toBe("XLIV")
})

test("45 is XLV", () => {
  expect(roman(45)).toBe("XLV")
})

test("68 is LXVIII", () => {
  expect(roman(68)).toBe("LXVIII")
})

test("83 is LXXXIII", () => {
  expect(roman(83)).toBe("LXXXIII")
}) 

test("97 is XCVII", () => {
  expect(roman(97)).toBe("XCVII")
})

test("99 is XCIX", () => {
  expect(roman(99)).toBe("XCIX")
})

test("400 is CD", () => {
  expect(roman(400)).toBe("CD")
})

test("500 is D", () => {
  expect(roman(500)).toBe("D")
})

test("501 is DI", () => {
  expect(roman(501)).toBe("DI")
}) 

test("649 is DCXLIX", () => {
  expect(roman(649)).toBe("DCXLIX")
}) 

test("798 is DCCXCVIII", () => {
  expect(roman(798)).toBe("DCCXCVIII")
}) 

test("891 is DCCCXCI", () => {
  expect(roman(891)).toBe("DCCCXCI")
}) 

test("1000 is M", () => {
  expect(roman(1000)).toBe("M")
}) 

test("1004 is MIV", () => {
  expect(roman(1004)).toBe("MIV")
})

test("1006 is MVI", () => {
  expect(roman(1006)).toBe("MVI")
})

test("1023 is MXXIII", () => {
  expect(roman(1023)).toBe("MXXIII")
})

test("2014 is MMXIV", () => {
  expect(roman(2014)).toBe("MMXIV")
})

test("3999 is MMMCMXCIX", () => {
  expect(roman(3999)).toBe("MMMCMXCIX")
})