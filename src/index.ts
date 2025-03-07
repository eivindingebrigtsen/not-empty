export function notEmpty<T>(o: T | null | undefined): T {
	if (o === null) {
		throw new Error("Object was null");
	}
	if (o === undefined) {
		throw new Error("Object was undefined");
	}
	return o;
}

export function notNull<T>(o: T | null): T {
	if (o === null) {
		throw new Error("Object was null");
	}
	return o;
}

export function notUndefined<T>(o: T | undefined): T {
	if (o === undefined) {
		throw new Error("Object was undefined");
	}
	return o;
}
