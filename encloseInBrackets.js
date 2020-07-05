function encloseInBrackets(str) {
  //  write code here.
  return str.padStart(str.length + 1, "(").padEnd(str.length + 2, ")");
  //return ("(" + str + ")")
  //return `(${str})`;
}

encloseInBrackets("Hello");
/**
 * Test Suite
 */
describe("encloseInBrackets()", () => {
  it("adds () around a string", () => {
    // arrange
    const str = "Yo";

    // act
    const result = encloseInBrackets(str);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe("(Yo)");
  });
});
