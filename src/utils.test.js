import { doUppercase } from "./utils";
import { makeCapitalized } from "./utils";

test('to check for the "sagar" input it gives "Sagar"', () => {
  //scenario
  let result = makeCapitalized("sagar");
  //expectation
  expect(result).toBe("Sagar");
});

test('to check for the "sachin" input it gives "Sachin"', () => {
  //scenario
  let result = makeCapitalized("sachin");
  //expectation
  expect(result).toBe("Sachin");
});

test('to check for the "" input it gives ""', () => {
  //scenario
  let result = makeCapitalized("");
  //expectation
  expect(result).toBe("");
});

test("to check for the null input it gives null", () => {
  //scenario
  let result = makeCapitalized(null);
  //expectation
  expect(result).toBe(null);
});

test("to check for the undefined input it gives undefined", () => {
  //scenario
  let result = makeCapitalized(undefined);
  //expectation
  expect(result).toBe(undefined);
});
test('to check for the "sachIN" input it gives "Sachin"', () => {
  //scenario
  let result = makeCapitalized("sachIN");
  //expectation
  expect(result).toBe("Sachin");
});
