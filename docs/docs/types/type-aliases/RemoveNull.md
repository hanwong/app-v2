[**@initia-app**](../types.md)

***

[@initia-app](../types.md) / RemoveNull

# Type Alias: RemoveNull\<T, K\>

> **RemoveNull**\<`T`, `K`\> = `{ [P in keyof T]: P extends K ? NonNullable<T[P]> : T[P] }`

Defined in: [app/types/common.ts:7](https://github.com/hanwong/app-v2/blob/b6cc29462bca0bededdcec342d091f91e17e428a/app/types/common.ts#L7)

## Type Parameters

### T

`T`

### K

`K` *extends* keyof `T`
