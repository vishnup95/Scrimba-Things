function allLongestStrings(array) {
  //  write code here.
  let lengthArray = new Array();
  array.forEach((element) => {
    lengthArray.push(element.length);
  });
  return array.filter((elem) => elem.length === Math.max(...lengthArray));
}

const newArray = allLongestStrings(["aba", "aa", "ad", "vcd", "aba", "a", "asasasdasda"]);
/**
 * Test Suite
 */
describe("allLongestStrings()", () => {
  it("returns all longest strings", () => {
    // arrange
    const strings = ["aba", "aa", "ad", "vcd", "aba", "a"];

    // act
    const result = allLongestStrings(strings);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual(["aba", "vcd", "aba"]);
  });
});
