import type { Asset, AssetList } from "@initia/initia-registry-types"

import { createQueryKeys } from "@lukemorales/query-key-factory"
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import ky from "ky"
import { head } from "ramda"

import type { NormalizedAsset } from "@/types/queries/assets"
import type { NormalizedChain } from "@/types/queries/chains"

import { useLayer1 } from "@/data/queries/chains"
import { STALE_TIMES } from "@/data/utils"

export const assetQueryKeys = createQueryKeys("@initia-app/queries:asset", {
  denom: (restUrl: string, metadata: string) => [restUrl, metadata],
  item: (chainId: string, denom: string) => [chainId, denom],
  list: (assetlistUrl?: string) => [assetlistUrl],
  metadata: (restUrl: string, denom: string) => [restUrl, denom],
})

function normalizeAsset(asset: Asset): NormalizedAsset {
  const { base, denom_units = [], display, logo_URIs } = asset
  const denom = base
  const decimals =
    denom_units.find((unit) => unit.denom === display)?.exponent ??
    denom_units.find((unit) => unit.denom === base)?.exponent ??
    head(denom_units)?.exponent ??
    0
  const logoUrl = logo_URIs?.png ?? ""
  return { ...asset, decimals, denom, logoUrl }
}

export function useAssets(chain?: NormalizedChain) {
  const assetlistUrl = chain?.metadata?.assetlist
  const queryClient = useQueryClient()
  const { data } = useSuspenseQuery({
    queryFn: async () => {
      if (!assetlistUrl) {
        return { assets: [] as Asset[] }
      }
      return ky.get(assetlistUrl).json<AssetList>()
    },
    queryKey: assetQueryKeys.list(assetlistUrl).queryKey,
    select: ({ assets }) => {
      if (!chain) {
        return []
      }
      const normalizedAssets = assets.map(normalizeAsset)
      for (const asset of normalizedAssets) {
        queryClient.setQueryData(assetQueryKeys.item(chain.chainId, asset.denom).queryKey, asset)
      }
      return normalizedAssets
    },
    staleTime: STALE_TIMES.INFINITY,
  })
  return data
}

export function useLayer1Assets() {
  const layer1 = useLayer1()
  const assets = useAssets(layer1)
  return assets
}
