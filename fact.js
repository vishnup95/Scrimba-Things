function factorialNumber(num) {
  // write code here
  let fact = 1;
  for (let i = num; i > 0; --i) {
    fact = fact * i;
  }
  console.log("fact :>> ", fact);
}

factorialNumber(10);
/**
 * Test Suite
 */
describe("factorialNumber()", () => {
  it("returns factorial of number param", () => {
    // arrange
    const num = 5;

    // act
    const result = factorialNumber(num);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(120);
  });
});
