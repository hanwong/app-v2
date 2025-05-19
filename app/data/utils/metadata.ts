import { toHex } from "@cosmjs/encoding"
import { bcs } from "@initia/initia.js"
import { sha3_256 } from "@noble/hashes/sha3"
import { concatBytes, toBytes } from "@noble/hashes/utils"

export function coinMetadata(creator: string, symbol: string) {
  const OBJECT_FROM_SEED_ADDRESS_SCHEME = 0xfe
  const addrBytes = bcs.address().serialize(creator).toBytes()
  const seed = toBytes(symbol)
  const bytes = new Uint8Array([...concatBytes(addrBytes, seed), OBJECT_FROM_SEED_ADDRESS_SCHEME])
  const sum = sha3_256.create().update(bytes).digest()
  return toHex(sum)
}

export function denomToMetadata(denom: string) {
  if (!denom) {
    return ""
  }
  if (denom.startsWith("move/")) {
    return `0x${denom.slice(5)}`
  }
  return `0x${coinMetadata("0x1", denom)}`
}
