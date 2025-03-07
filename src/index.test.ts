import { describe, expect, it } from "vitest";
import { notEmpty, notNull, notUndefined } from "./index";

describe("notNull", () => {
	it("should throw an error if the object is null", () => {
		expect(() => notNull(null)).toThrow("Object was null");
	});
	it("should return the object if it is not null", () => {
		const expected = { a: 1 };
		const actual = notNull(expected);
		expect(actual).toEqual(expected);
	});
});

describe("notUndefined", () => {
	it("should throw an error if the object is undefined", () => {
		expect(() => notUndefined(undefined)).toThrow("Object was undefined");
	});
	it("should return the object if it is not undefined", () => {
		const expected = { a: 1 };
		const actual = notUndefined(expected);
		expect(actual).toEqual(expected);
	});
});

describe("notEmpty", () => {
	it("should throw an error if the object is null", () => {
		expect(() => notEmpty(null)).toThrow("Object was null");
	});
	it("should throw an error if the object is undefined", () => {
		expect(() => notEmpty(undefined)).toThrow("Object was undefined");
	});
	it("should return the object if it is not null or undefined", () => {
		const expected = { a: { b: { c: "d", d: { e: "f" } } } };
		const actual = notEmpty(expected);
		expect(actual).toEqual(expected);
		expect(typeof actual).toBe(typeof expected);
	});
	it("should return a string if it is not null or undefined", () => {
		const expected = "test";
		const actual = notEmpty(expected);
		expect(actual).toEqual(expected);
		expect(typeof actual).toBe(typeof expected);
	});
	it("should return a number if it is not null or undefined", () => {
		const expected = 1;
		const actual = notEmpty(expected);
		expect(actual).toEqual(expected);
		expect(typeof actual).toBe(typeof expected);
	});
	it("should return a boolean if it is not null or undefined", () => {
		const expected = true;
		const actual = notEmpty(expected);
		expect(actual).toEqual(expected);
		expect(typeof actual).toBe(typeof expected);
	});
	it("should return an array if it is not null or undefined", () => {
		const expected = [1, 2, 3];
		const actual = notEmpty(expected);
		expect(actual).toEqual(expected);
		expect(typeof actual).toBe(typeof expected);
	});
});
