function firstDigit(str) {
  //  write code here.
  const numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const splits = str.split(/(\d)/);
  for (let i = 0; i < splits.length; i++) {
    if (numbersArray.includes(splits[i])) {
      return splits[i];
    }
  }
}

/**
 * Test Suite
 */
describe("firstDigit()", () => {
  it("return the first digit in a string", () => {
    // arrange
    const str = "var_1__Int2";

    // act
    const result = firstDigit(str);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe("1");
  });
});
