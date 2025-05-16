"use client"

import type { PropsWithChildren } from "react"

import { AppShell, Burger, Group } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import { useInitiaRegistry } from "@/data/queries"

export function AppShellContainer({ children }: PropsWithChildren) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
  const registry = useInitiaRegistry()

  return (
    <AppShell
      header={{ height: 60 }}
      layout="alt"
      navbar={{
        breakpoint: "sm",
        collapsed: { desktop: !desktopOpened, mobile: !mobileOpened },
        width: 300,
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger hiddenFrom="sm" opened={mobileOpened} size="sm" onClick={toggleMobile} />
          <Burger opened={desktopOpened} size="sm" visibleFrom="sm" onClick={toggleDesktop} />
          {registry?.[0].chainId}
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
