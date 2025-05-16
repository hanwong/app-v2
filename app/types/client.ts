import { z } from "zod"

export const zViewFunctionPrams = z.object({
  args: z.array(z.string()),
  functionName: z.string(),
  moduleAddress: z.string(),
  moduleName: z.string(),
  typeArgs: z.array(z.string()),
})

export type ViewFunctionPrams = z.infer<typeof zViewFunctionPrams>

export const zResourcePrams = z.object({
  moduleAddress: z.string(),
  structureTag: z.string(),
})

export type ResourcePrams = z.infer<typeof zResourcePrams>
