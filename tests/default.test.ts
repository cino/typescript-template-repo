import { describe, expect, it } from "vitest";
import { add } from "../src/default";

describe("#default", () => {
	it("should add two numbers", () => {
		expect(add(2, 3)).toBe(5);
	});
});
