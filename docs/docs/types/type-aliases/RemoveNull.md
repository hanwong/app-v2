[**@initia-app**](../types.md)

***

[@initia-app](../types.md) / RemoveNull

# Type Alias: RemoveNull\<T, K\>

> **RemoveNull**\<`T`, `K`\> = `{ [P in keyof T]: P extends K ? NonNullable<T[P]> : T[P] }`

Defined in: [common.ts:7](https://github.com/hanwong/app-v2/blob/81e68e88090ddc2ab26b9b4b48b4c48725303c75/app/types/common.ts#L7)

## Type Parameters

### T

`T`

### K

`K` *extends* keyof `T`
