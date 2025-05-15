import type { Chain } from "@initia/initia-registry-types"

import { createQueryKeys } from "@lukemorales/query-key-factory"
import { useQuery } from "@tanstack/react-query"
import ky from "ky"

import { network } from "@/constants"

import { STALE_TIMES } from "./http"

export const chainQueryKeys = createQueryKeys("@initia-app/queries:chains", {
  list: (registryUrl: string) => [registryUrl],
})

export function useInitiaRegistry() {
  const registryUrl = network?.registry
  const { data } = useQuery({
    queryFn: () => ky.create({ prefixUrl: registryUrl }).get("chains.json").json<Chain[]>(),
    queryKey: chainQueryKeys.list(registryUrl!).queryKey,
    staleTime: STALE_TIMES.MINUTE,
  })
  return data
}
