import type { ReactNode } from "react"

import { QueryClientProvider as Provider, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export const QueryClientProvider = ({ children }: { children: ReactNode }) => (
  <Provider client={queryClient}>{children}</Provider>
)
