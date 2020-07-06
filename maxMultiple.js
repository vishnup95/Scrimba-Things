function maxMultiple(divisor, bound) {
  //  write code here..
  let rem = bound % divisor;

  return bound - rem;
}

// There is a very simple solution involving modulo

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
