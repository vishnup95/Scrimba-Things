function maxMultiple(divisor, bound) {
  //  write code here..
  let dividers = [];
  for (let i = 1; i <= bound / 2; i++) {
    if (i * divisor <= bound) {
      dividers.push(i * divisor);
    }
  }
  return dividers.reduce((acc, curr) => Math.max(acc, curr));
}

/**
 * Test Suite
 */
describe("maxMultiple()", () => {
  it("returns largest integer up to boundary", () => {
    // arrange
    const divisor = 3;
    const bound = 10;

    // act
    const result = maxMultiple(divisor, bound);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(9);
  });
});

// 4, 10  ---> 8
