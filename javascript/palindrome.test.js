const palindrome = require("./palindrome");
test("Only uppercase or only lowercase, without special symbols", () => {
  expect(palindrome("eye")).toBe(true);
});