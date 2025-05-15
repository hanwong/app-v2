import "@/styles/globals.css"

import type { Metadata } from "next"
import type { ReactNode } from "react"

import { AppShellContainer } from "@/components/layout/app-shell-container"
import { Providers } from "@/providers/main"
import { pilatWideSans } from "@/styles/fonts"

const title = "Initia App"
const description =
  "Web application to interact with Initia’s key features such as liquidity provision, staking and voting on proposals."
const domain = "https://app.initia.xyz"
const images = ["/assets/thumbnail.webp"]

export const metadata: Metadata = {
  description,
  icons: {
    icon: [
      {
        href: "https://assets.initia.xyz/images/dapps/app/favicon.svg",
        url: "https://assets.initia.xyz/images/dapps/app/favicon.svg",
      },
    ],
  },
  keywords: [],
  openGraph: {
    description,
    images,
    title,
    type: "website",
    url: domain,
  },
  title,
  twitter: {
    card: "summary_large_image",
    description,
    images,
    site: domain,
    title,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${pilatWideSans.variable}`}>
        <Providers>
          <AppShellContainer>{children}</AppShellContainer>
        </Providers>
      </body>
    </html>
  )
}
