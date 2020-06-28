function evenDigitsOnly(number) {
  let numbers = [...number.toString()];
  return numbers.every((value) => parseInt(value) % 2 === 0)
}

evenDigitsOnly(246821);
/**
 * Test Suite
 */
describe("evenDigitsOnly()", () => {
  it("returns true when all digits are even", () => {
    // arrange
    const nums = 248622;

    // act
    const result = evenDigitsOnly(nums);

    // log
    console.log("result 1 : ", result);

    // assert
    expect(result).toBe(true);
  });

  it("returns fale when any digits are odd", () => {
    // arrange
    const nums = 642386;

    // act
    const result = evenDigitsOnly(nums);

    // log
    console.log("result 2 : ", result);

    // assert
    expect(result).toBe(false);
  });
});
