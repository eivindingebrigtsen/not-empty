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
npm install not-empty
```

## 📚 Usage

```ts
import { notEmpty } from "not-empty";

type User = {
	name: string;
	age: number;
};

async function getUser() {
	const response = await fetch("https://api.example.com/user");
	const user = await response.json();
	return user;
}

const user = await getUser();

const notEmptyUser = notEmpty(user);

if (user.age > 29){ // now this is type safe
	console.log("User is older than 29");
}

```
## 📘 API

```ts
notEmpty<T>(o: T | null | undefined): T
```

### `notEmpty(o: T | null | undefined): T`

Checks if the given object is not null or undefined and returns it.

### `notNull<T>(o: T | null): T`

Checks if the given object is not null and returns it.

### `notUndefined<T>(o: T | undefined): T`

Checks if the given object is not undefined and returns it.

## 🚲 Testing

We use [Vitest](https://vitest.dev/) for testing.

```bash
npm test
```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.



## 📝 License

MIT