import { Text, Title } from "@mantine/core"

import classes from "./welcome.module.css"

export function Welcome() {
  return (
    <>
      <Title className={classes.title} mt={100} ta="center">
        Welcome to{" "}
        <Text component="span" gradient={{ from: "pink", to: "yellow" }} inherit variant="gradient">
          INITIA
        </Text>
      </Title>
      <Text c="dimmed" maw={580} mt="xl" mx="auto" size="lg" ta="center">
        Web application to interact with Initia’s key features such as liquidity provision, staking
        and voting on proposals.
      </Text>
    </>
  )
}
