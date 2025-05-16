import type { Chain, SecureEndpoint } from "@initia/initia-registry-types"

import { createQueryKeys } from "@lukemorales/query-key-factory"
import { useQuery } from "@tanstack/react-query"
import ky from "ky"
import { descend, path } from "ramda"

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

function normalizeChain(chain: Chain) {
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

export function useInitiaRegistry() {
  const registryUrl = network.registryUrl
  const defaultChainId = network.chainId

  const { data } = useQuery({
    queryFn: () => ky.create({ prefixUrl: registryUrl }).get("chains.json").json<Chain[]>(),
    queryKey: chainQueryKeys.list(registryUrl!).queryKey,
    select: (chains) => {
      return chains
        .map(normalizeChain)
        .toSorted(descend((chain) => chain.chainId === defaultChainId))
    },
    staleTime: STALE_TIMES.MINUTE,
  })
  return data
}
