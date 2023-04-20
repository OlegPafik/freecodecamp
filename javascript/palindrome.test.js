const palindrome = require("./palindrome");

test('"eye" should be true', () => {
  expect(palindrome("eye")).toBe(true);
});

test("palindrome() should return boolean", () => {
    expect(palindrome("eye")).toBe(true);
    expect(palindrome("eyed")).toBe(false);
  });

test('"_eye" should return true', () => {
    expect(palindrome("_eye")).toBe(true);
})
