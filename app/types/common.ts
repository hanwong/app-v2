export type Option<T> = T | undefined

export type Nullable<T> = null | T

export type Nullish<T> = null | T | undefined

export type RemoveNull<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? NonNullable<T[P]> : T[P]
}
