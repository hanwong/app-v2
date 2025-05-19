import { z } from "zod"

export const zMetadata = z.object({
  decimals: z.number(),
  icon_uri: z.string(),
  name: z.string(),
  project_uri: z.string(),
  symbol: z.string(),
})

export type Metadata = z.infer<typeof zMetadata>

export const zNormalizedToken = z.object({
  address: z.string().optional(),
  coingeckoId: z.string().optional(),
  decimals: z.number(),
  denom: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  metadata: z.string(),
  name: z.string().optional(),
  price: z.number().optional(),
  symbol: z.string(),
})

export type NormalizedToken = z.infer<typeof zNormalizedToken>
