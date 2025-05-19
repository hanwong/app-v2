import type { Chain, SecureEndpoint } from "@initia/initia-registry-types"

import { createQueryKeys } from "@lukemorales/query-key-factory"
import { useSuspenseQuery } from "@tanstack/react-query"
import ky from "ky"
import { descend, path } from "ramda"

import type { NormalizedChain } from "@/types/queries/chains"

import { network } from "@/constants"
import { STALE_TIMES } from "@/data/utils"

export const chainQueryKeys = createQueryKeys("@initia-app/queries:chains", {
  list: (registryUrl: string) => [registryUrl],
})

function getPrimaryEndpoint(endpoints?: SecureEndpoint[]) {
  const url = path<string>([0, "address"], endpoints)
  if (!url) {
    throw new Error("URL not found")
  }
  return url
}

function normalizeChain(chain: Chain): NormalizedChain {
  const { apis, chain_id: chainId, chain_name, logo_URIs, metadata, pretty_name } = chain
  const name = pretty_name || chain_name
  const logoUrl = logo_URIs?.png ?? ""
  const { api, ["json-rpc"]: jsonRpc, rest, rpc } = apis
  const rpcUrl = getPrimaryEndpoint(rpc)
  const restUrl = getPrimaryEndpoint(rest)
  const indexerUrl = metadata?.is_l1 ? getPrimaryEndpoint(api) : restUrl
  const jsonRpcUrl = metadata?.minitia?.type === "minievm" ? getPrimaryEndpoint(jsonRpc) : undefined
  return { ...chain, chainId, indexerUrl, jsonRpcUrl, logoUrl, name, restUrl, rpcUrl }
}

export const chainQueryOptions = {
  registry: {
    queryFn: () => ky.create({ prefixUrl: network.registryUrl }).get("chains.json").json<Chain[]>(),
    queryKey: chainQueryKeys.list(network.registryUrl).queryKey,
    select: (chains: Chain[]) => {
      return chains
        .map(normalizeChain)
        .toSorted(descend((chain) => chain.chainId === network.chainId))
    },
    staleTime: STALE_TIMES.MINUTE,
  },
}

export function useInitiaRegistry() {
  const { data } = useSuspenseQuery(chainQueryOptions.registry)
  return data
}

export function useLayer1() {
  const chains = useInitiaRegistry()
  const chain = chains?.find((chain) => chain.metadata?.is_l1)
  if (!chain) {
    throw new Error("Layer 1 not found")
  }
  return chain as NormalizedChain
}
