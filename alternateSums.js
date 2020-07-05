function alternatingSums(array) {
  //  write code here.
  let evenSum = 0, oddSum = 0;
  array.forEach((element, idx) => {
    if (idx === 0 || idx % 2 === 0) {
      evenSum = evenSum + element;
    } else {
      oddSum = oddSum + element;
    }
  });
  return [evenSum, oddSum];
}

/**
 * Test Suite
 */
describe("alternatingSums()", () => {
  it("returns alternating sums of even and odd", () => {
    // arrange
    const nums = [50, 60, 60, 45, 70];

    // act
    const result = alternatingSums(nums);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual([180, 105]);
  });
});
