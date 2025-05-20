"use client"

import type { PropsWithChildren } from "react"

import { AppShell, Box, Burger, Group } from "@mantine/core"
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
        collapsed: { mobile: !mobileOpened },
        width: desktopOpened ? 300 : 74,
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" justify="flex-end" px="md">
          <ConnectButton />
          <Burger hiddenFrom="sm" opened={mobileOpened} size="sm" onClick={toggleMobile} />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Box p="md" pos="absolute" right={desktopOpened ? 0 : -60} top={0}>
          <Burger opened={desktopOpened} size="sm" visibleFrom="sm" onClick={toggleDesktop} />
        </Box>
        <Burger hiddenFrom="sm" opened={mobileOpened} size="sm" onClick={toggleMobile} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
