"use client"

import { AppShell, createTheme } from "@mantine/core"

import styles from "./components"

export const theme = createTheme({
  components: {
    AppShell: AppShell.extend({
      defaultProps: {
        classNames: styles.AppShell,
      },
    }),
  },
  fontFamily: "Pilat Wide",
  primaryColor: "gray",
})
