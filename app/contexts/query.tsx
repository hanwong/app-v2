import type { FetchQueryOptions } from "@tanstack/react-query"
import type { ReactNode } from "react"

import {
  defaultShouldDehydrateQuery,
  dehydrate,
  HydrationBoundary,
  isServer,
  QueryClientProvider as Provider,
  QueryClient,
} from "@tanstack/react-query"

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) || query.state.status === "pending",
      },
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient()
  }
  return browserQueryClient
}

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient()

  return <Provider client={queryClient}>{children}</Provider>
}

type PrefetchBoundaryType = {
  children: React.ReactElement
  options: FetchQueryOptions
}

export function PrefetchBoundary({ children, options }: PrefetchBoundaryType) {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(options)
  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
