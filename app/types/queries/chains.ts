import type { Chain } from "@initia/initia-registry-types"

import { z } from "zod"

export const zNormalizedChain = z.object({
  chainId: z.string(),
  indexerUrl: z.string(),
  jsonRpcUrl: z.string().optional(),
  logoUrl: z.string(),
  name: z.string(),
  restUrl: z.string(),
  rpcUrl: z.string(),
})

export type NormalizedChain = Chain & z.infer<typeof zNormalizedChain>
