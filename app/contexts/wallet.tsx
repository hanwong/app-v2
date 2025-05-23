"use client"

import type { WalletWidget, WidgetConfig } from "@initia/utils"
import type { PropsWithChildren, ReactNode } from "react"

import { context, loadScript } from "@initia/react-wallet-widget/ssr"
import { useEffect, useState } from "react"

import { network } from "@/constants"

import pkg from "../package.json"

declare global {
  interface Window {
    createWalletWidget?: (config: WidgetConfig) => Promise<WalletWidget>
  }
}

const WalletWidgetProvider = ({ children, ...config }: PropsWithChildren<WidgetConfig>) => {
  const [widget, setWidget] = useState<null | WalletWidget>(null)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    async function setup() {
      await loadScript(
        `https://cdn.jsdelivr.net/npm/@initia/wallet-widget@${pkg.dependencies["@initia/react-wallet-widget"]}/dist/index.js`
      )
      const widget = await window.createWalletWidget!(config)
      setWidget(widget)
    }

    setup()
  }, [config])

  if (!widget) {
    return null
  }

  return <context.Provider value={widget}>{children}</context.Provider>
}

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  return <WalletWidgetProvider {...network}>{children}</WalletWidgetProvider>
}
