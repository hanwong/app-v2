import { useQuery } from "@tanstack/react-query"

import type { NormalizedAsset } from "@/types/queries/assets"
import type { Metadata, NormalizedToken } from "@/types/queries/tokens"

import { resource } from "@/data/network/client"
import { assetQueryKeys, useLayer1Assets } from "@/data/queries/assets"
import { useLayer1 } from "@/data/queries/chains"
import { STALE_TIMES } from "@/data/utils/http"
import { denomToMetadata } from "@/data/utils/metadata"

function normalizeToken(asset: NormalizedAsset): NormalizedToken {
  return {
    address: asset.address,
    coingeckoId: asset.coingecko_id,
    decimals: asset.decimals,
    denom: asset.denom,
    description: asset.description,
    image: asset?.logoUrl ?? "",
    metadata: denomToMetadata(asset.denom),
    name: asset.name,
    symbol: asset.symbol,
  }
}

export function useTokenInfo(denom: string) {
  const layer1 = useLayer1()
  const assets = useLayer1Assets()

  const { data } = useQuery({
    queryFn: async () => {
      // assetlist
      const asset = assets?.find((asset) => asset.base === denom)
      if (asset) {
        return normalizeToken(asset)
      }

      // move resource
      const metadata = denomToMetadata(denom)
      try {
        const data = await resource<Metadata>({
          moduleAddress: metadata,
          structureTag: "0x1::fungible_asset::Metadata",
        })
        const { decimals, name, symbol } = data
        return { decimals, denom, metadata, name, symbol }
      } catch {
        return { decimals: 0, denom, metadata, symbol: denom }
      }
    },
    queryKey: assetQueryKeys.item(layer1.chainId, denom).queryKey,
    staleTime: STALE_TIMES.INFINITY,
  })
  return data
}
