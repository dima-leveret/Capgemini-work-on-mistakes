const isPalindrom = (str) => str === str.split("").reverse().join("");

describe("isPalindrom", () => {
  test("should return true for abba", () => {
    const actual = isPalindrom("abba");

    expect(actual).toBe(true);
  });
});
