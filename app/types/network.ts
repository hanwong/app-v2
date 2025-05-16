import { z } from "zod"

export const zNetwork = z.object({
  apiUrl: z.string(),
  assetsUrl: z.string(),
  bridgeUrl: z.string(),
  chainId: z.string(),
  compilerUrl: z.string(),
  currency: z.object({
    decimals: z.number(),
    denom: z.string(),
    ticker: z.string(),
  }),
  dashboardUrl: z.string(),
  displayName: z.string(),
  explorerUrl: z.string(),
  faucetApiUrl: z.string(),
  gasPrice: z.number(),
  lockDurationType: z.string(),
  logo: z.string(),
  moduleNames: z.object({
    dex: z.string(),
    dexUtils: z.string(),
    minitswapQuery: z.string(),
    object: z.string(),
    stableswap: z.string(),
    usernames: z.string(),
    vip: z.string(),
    weightVote: z.string(),
  }),
  modules: z.object({
    dex: z.string(),
    dex_utils: z.string(),
    lock_stake: z.string(),
    swap_transfer: z.string(),
    usernames: z.string(),
  }),
  networkType: z.string(),
  registryUrl: z.string(),
  restUrl: z.string(),
  rpcUrl: z.string(),
  swaplistUrl: z.string(),
  usernamesApiUrl: z.string(),
  vipUrl: z.string(),
  wsUrl: z.string(),
})

export type Network = z.infer<typeof zNetwork>
