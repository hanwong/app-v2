"use client"

import type { PropsWithChildren } from "react"

import { AppShell, Burger, Group } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import { ConnectButton } from "@/components/ui/connect-button"

export function AppShellContainer({ children }: PropsWithChildren) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

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
          <ConnectButton />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
