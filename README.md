# mock-chrome

> [!NOTE]
> This library is still under experimental development. Please keep in mind that the API may change in the future.

The mock-chrome is an another mock library for Chrome Extensions API.
This library has the following features:

- TypeScript support
- Manifest V3 support
- No dependencies on testing libraries

## Installation

```sh
npm install --save-dev mock-chrome
```

## Usage

The library provides two types of mocks.

### `newToDoApi()`

The `newToDoApi()` creates a mocked Chrome API object that always throw an error when it is called.
It is useful when you want to mock by yourself using test frameworks like Jest or Vitest.

```ts
import { newToDoApi } from 'mock-chrome';

global.chrome = newToDoApi();
```

### `newMockApi()`

The `newMockApi()` creates a mocked Chrome API object that provides a fake implementation of the Chrome API.

```ts
import { newMockApi } from 'mock-chrome';

global.chrome = newMockApi();
```

## License

MIT
