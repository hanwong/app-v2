[**@initia-app**](../types.md)

***

[@initia-app](../types.md) / RemoveNull

# Type Alias: RemoveNull\<T, K\>

> **RemoveNull**\<`T`, `K`\> = `{ [P in keyof T]: P extends K ? NonNullable<T[P]> : T[P] }`

Defined in: [app/types/common.ts:7](https://github.com/hanwong/app-v2/blob/087f9ea496ced31d9a3b187baa11cd5456705527/app/types/common.ts#L7)

## Type Parameters

### T

`T`

### K

`K` *extends* keyof `T`
