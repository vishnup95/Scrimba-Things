function makeArrayConsecutive(nums) {
  //  write code here.
  const sortedArray = nums.sort((a, b) => a - b);
  let missingNumbers = 0;
  for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length - 1]; i++) {
    if (sortedArray.indexOf(i) === -1) {
      missingNumbers++;
    }
  }
  console.log('missingNumbers :>> ', missingNumbers);
  return missingNumbers;
}

makeArrayConsecutive([1, 2, 3, 4, 6, 7, 8]);

/**
 * Test Suite
 */
describe("makeArrayConsecutive()", () => {
  it("returns total missing numbers between smallest and largest number", () => {
    // arrange
    const nums = [6, 2, 3, 8];

    // act
    const result = makeArrayConsecutive(nums);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(3);
  });
});
