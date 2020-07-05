function caseInsensitivePalindrome(str) {
  //  write code here. Shoud Return a boolean.
  let reverseString = [...str].reverse().join("");
  return reverseString.toLowerCase() === str.toLowerCase();
}

//We can also do this by a reverse for loop..

/**
 * Test Suite
 */
describe("caseInsensitivePalindrome()", () => {
  it("returns true for a case insensitive palindrome", () => {
    // arrange
    const str = "AaBaa";

    // act
    const result = caseInsensitivePalindrome(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(true);
  });

  it("returns false when not a case insensitive palindrome", () => {
    // arrange
    const str = "abac";

    // act
    const result = caseInsensitivePalindrome(str);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe(false);
  });
});
