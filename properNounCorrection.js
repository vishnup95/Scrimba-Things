function properNounCorrection(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(properNounCorrection("psiefeTsdgseTRe"));
/**
 * Test Suite
 */
describe("properNounCorrection()", () => {
  it("adds proper noun capitalization", () => {
    // arrange
    const str = "pARiS";

    // act
    const result = properNounCorrection(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe("Paris");
  });

  it("properly cased words are still correct", () => {
    // arrange
    const str = "John";

    // act
    const result = properNounCorrection(str);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe("John");
  });
});
