const palindrome = require("./palindrome")

test("palindrome() is boolean", () => {
  expect(palindrome("eye")).toBe(true)
  expect(palindrome("eyed")).toBe(false)
})

test('Basic palindrome as "eye" that are true', () => {
  expect(palindrome("eye")).toBe(true)
  expect(palindrome("racecar")).toBe(true)
  expect(palindrome("EYE")).toBe(true)
})

test('Basic palindrome as "eyed" that are false', () => {
  expect(palindrome("eyed")).toBe(false)
  expect(palindrome("racecard")).toBe(false)
  expect(palindrome("EYED")).toBe(false)
})

test('Special palindrome as "_eye" that are true', () => {
  expect(palindrome("_eye")).toBe(true)
  expect(palindrome("_eye__")).toBe(true)
  expect(palindrome("_EYE")).toBe(true)
  expect(palindrome(" E Y    E ")).toBe(true)
  expect(palindrome(" 2   5 2 ")).toBe(true)
  expect(palindrome("2_A3*3#A2.*")).toBe(true)
})

test('Case insensitive basic palindrome that are true', () => {
  expect(palindrome("eYE")).toBe(true)
})

test('Case insensitive special palindrome that are true', () => {
  expect(palindrome("race CAR")).toBe(true)
  expect(palindrome("2A3*3a2")).toBe(true)
  expect(palindrome("2A3 3a2")).toBe(true)
})
