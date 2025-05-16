import type { Asset } from "@initia/initia-registry-types"

import { z } from "zod"

export const zNormalizedAsset = z.object({
  decimals: z.number(),
  denom: z.string(),
  logoUrl: z.string(),
})

export type NormalizedAsset = Asset & z.infer<typeof zNormalizedAsset>
