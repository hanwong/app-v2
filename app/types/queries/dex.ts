import { z } from "zod"

export const zPoolInfoResponse = z.object({
  coin_a_amount: z.number(),
  coin_b_amount: z.string(),
  total_share: z.string(),
})

export type PoolInfoResponse = z.infer<typeof zPoolInfoResponse>
