import BigNumber from "bignumber.js"

import type { SnakeToCamelCaseNested } from "./types"

type Resolver<T> =
  T extends Array<infer U>
    ? SnakeToCamelCaseNested<U>[]
    : T extends Record<string, any>
      ? SnakeToCamelCaseNested<T>
      : T

export const camelCase = (str: string) => {
  return str.replace(/[_.-](\w|$)/g, (_, x) => {
    return x.toUpperCase()
  })
}

// Convert snake case to camel case of an object
export const snakeToCamel = <T>(obj: T): Resolver<T> => {
  // Any falsy, which includes `null` whose typeof is `object`.
  if (!obj) {
    return obj as Resolver<T>
  }

  // Ignore Date and Big, whose typeof is `object` too.
  if (obj instanceof Date || obj instanceof BigNumber) {
    return obj as Resolver<T>
  }
  // Array of object
  if (Array.isArray(obj)) {
    return obj.map((element) => {
      return snakeToCamel(element)
    }) as Resolver<T>
  }

  if (typeof obj === "object") {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (Object.hasOwn(obj, key)) {
        const newKey = camelCase(key) || key
        if (key !== newKey && newKey in obj) {
          throw new Error(
            `Camel case key ${newKey} would overwrite existing key of the given JSON object`
          )
        }
        // eslint-disable-next-line no-param-reassign
        acc[newKey as keyof SnakeToCamelCaseNested<T>] = snakeToCamel(value)
        return acc
      }
      return acc
    }, {} as SnakeToCamelCaseNested<T>) as Resolver<T>
  }

  // Something else like a String or Number.
  return obj as Resolver<T>
}
