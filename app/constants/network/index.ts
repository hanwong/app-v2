import mainnet from "./initia-mainnet.json"
import testnet from "./initia-testnet.json"

const NETWORK_TYPE = process.env.NEXT_PUBLIC_NETWORK_TYPE ?? "mainnet"

const chains = new Map([
  ["mainnet", mainnet],
  ["testnet", testnet],
])

export const network = chains.get(NETWORK_TYPE)
