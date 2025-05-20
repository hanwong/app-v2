[**@initia-app**](../../data.md)

***

[@initia-app](../../data.md) / [queries](../data.md) / chainQueryOptions

# Variable: chainQueryOptions

> `const` **chainQueryOptions**: `object`

Defined in: [app/data/queries/chains.ts:37](https://github.com/hanwong/app-v2/blob/087f9ea496ced31d9a3b187baa11cd5456705527/app/data/queries/chains.ts#L37)

## Type declaration

### registry

> **registry**: `object`

#### registry.queryFn()

> **queryFn**: () => `Promise`\<`Chain`[]\>

##### Returns

`Promise`\<`Chain`[]\>

#### registry.queryKey

> **queryKey**: readonly \[`"@initia-app/queries:chains"`, `"list"`, `string`\]

#### registry.select()

> **select**: (`chains`) => `NormalizedChain`[]

##### Parameters

###### chains

`Chain`[]

##### Returns

`NormalizedChain`[]

#### registry.staleTime

> **staleTime**: `number` = `STALE_TIMES.MINUTE`
