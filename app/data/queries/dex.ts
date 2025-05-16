import { bcs } from "@initia/initia.js"

import type { PoolInfoResponse } from "@/types/queries/dex"

import { network } from "@/constants"
import { viewFunction } from "@/data/network"

export async function getPoolInfo(lpMetadata: string) {
  return await viewFunction<PoolInfoResponse>({
    args: [bcs.object().serialize(lpMetadata).toBase64()],
    functionName: "get_pool_info",
    moduleAddress: network.modules.dex,
    moduleName: network.moduleNames.dex,
    typeArgs: [],
  })
}
