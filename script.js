function add(...params) {
  //  write code here.
  return params.reduce((acc, curr) => acc + curr);
  // return param1 + param2
}

add(1, 2, 2, 3, 3);
/**
 * Test Suite
 */
describe("add()", () => {
  it("adds two numbers", () => {
    // arrange
    const num1 = 1;
    const num2 = 2;

    // act
    const result = add(num1, num2);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(3);
  });

  xit("adds any ammount of numbers", () => {
    // arrange
    const num1 = 1;
    const num2 = 2;
    const num3 = 3;

    // act
    const result = add(num1, num2, num3);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(6);
  });
});
