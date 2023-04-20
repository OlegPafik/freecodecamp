const palindrome = require("./palindrome");

test('"eye" is true', () => {
  expect(palindrome("eye")).toBe(true);
});

test("palindrome() is boolean", () => {
    expect(palindrome("eye")).toBe(true);
    expect(palindrome("eyed")).toBe(false);
  });

test('"_eye" is true', () => {
    expect(palindrome("_eye")).toBe(true);
})
