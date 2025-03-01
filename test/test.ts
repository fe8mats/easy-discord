import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { greet } from "../src/main.ts";

// This test should work in all environments
Deno.test("greet function", () => {
  const result = greet("Test");
  assertEquals(typeof result, "string");
  assert(result.includes("Test"));
}); 