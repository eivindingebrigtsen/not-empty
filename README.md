# 🐊 Not empty

[![build and test workflow](https://github.com/eivindingebrigtsen/not-empty/actions/workflows/ci.yml/badge.svg)](https://github.com/eivindingebrigtsen/not-empty/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/not-empty.svg)](https://www.npmjs.com/package/not-empty)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

A lightweight utility to check if a variable is not empty.

## Features

- 🎯 Zero dependencies
- 📦 Lightweight (~XKB gzipped)
- 💪 Fully typed (TypeScript)
- 🔍 Preserves type information
- ⚡ Tree-shakeable
- 🧪 Well tested

## 📦 Installation

```bash
npm install not-empty-ts
```

## 📚 Usage

```ts
import { notEmpty } from "not-empty-ts";

type User = {
	name: string;
	age: number;
};

async function getUser(): Promise<User|null> {
	const response = await fetch("https://api.example.com/user");
	const user = await response.json();
	if (response.ok) {
		return user;
	}
	return null;
}

const user = await getUser();


if (notEmpty(user) && user.age > 29){ // now this is type safe
	console.log("User is older than 29");
}

```
## 📘 API

```ts
//Checks if the given object is not null or undefined and returns it.
notEmpty<T>(o: T | null | undefined): T

//Checks if the given object is not null and returns it.
notNull<T>(o: T | null): T

//Checks if the given object is not undefined and returns it.
notUndefined<T>(o: T | undefined): T
```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### 🚲 Testing

We use [Vitest](https://vitest.dev/) for testing aim for 100% coverage.

```bash
npm test
```


## 📝 License

MIT