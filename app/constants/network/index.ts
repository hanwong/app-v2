import type { Network } from "@/types/network"

import mainnet from "./initia-mainnet.json"
import testnet from "./initia-testnet.json"

const NETWORK_TYPE = process.env.NEXT_PUBLIC_NETWORK_TYPE ?? "mainnet"

const networks = new Map([
  ["mainnet", mainnet as Network],
  ["testnet", testnet as Network],
])

export const network = networks.get(NETWORK_TYPE)!
