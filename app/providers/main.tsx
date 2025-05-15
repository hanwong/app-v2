"use client"
import "@mantine/core/styles.css"

import type { ReactNode } from "react"

import { MantineProvider } from "@mantine/core"

import { theme } from "@/styles/theme"

import { QueryClientProvider } from "./query"
import { WalletProvider } from "./wallet"

export const Providers = ({ children }: { children: ReactNode }) => (
  <MantineProvider defaultColorScheme="dark" theme={theme}>
    <QueryClientProvider>
      <WalletProvider>{children}</WalletProvider>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  </MantineProvider>
)
