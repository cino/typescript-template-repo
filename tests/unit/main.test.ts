import { describe, expect, it } from "vitest";
import { add } from "../../src/main";

describe("#default", () => {
	it("should add two numbers", () => {
		expect(add(2, 3)).toBe(5);
	});
});
