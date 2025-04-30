import { it, expect } from "vitest";
import { add } from "./index.ts";

it("add", () => {
  expect(add()).toBe(0);
  expect(add(1)).toBe(1);
  expect(add(1, 2, 3)).toBe(6);
});
