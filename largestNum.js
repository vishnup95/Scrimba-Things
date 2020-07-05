function largestNumber(num) {
  //  write code here.
  // The largest number is always 9999....(n depende)
  return parseInt(new Array(num).fill("9").join(""), 10);
  //can also be handled by string.repeat
}

/**
 * Test Suite
 */
describe("largestNumber()", () => {
  it("returns largest positive integer possible for digit count", () => {
    // arrange
    const num = 2;

    // act
    const result = largestNumber(num);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(99);
  });
});
