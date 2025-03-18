import { describe, it } from "testing/bdd";
import { assert, assertFalse } from "assert";
import { func } from "./demo.js";

describe("func", () => {
  it("should return true", () => {
    assert(func(2));
  });
  it("should return false", () => {
    assertFalse(func(1));
  });
});
