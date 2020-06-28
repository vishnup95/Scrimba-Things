function arrayReplace(array, elemToReplace, substitutionElem) {
  //get the index of all elements which has value  = elemToReplace
  array.forEach((ele, index) => {
    if (ele === elemToReplace) {
      array[index] = substitutionElem;
    }
  });

  return array;
}

/**
 * Test Suite
 */
describe("arrayReplace()", () => {
  it("adds a border around entire application", () => {
    // arrange
    const array = [1, 2, 1];
    const elemToReplace = 1;
    const substitutionElem = 3;

    // act
    const result = arrayReplace(array, elemToReplace, substitutionElem);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual([3, 2, 3]);
  });
});
