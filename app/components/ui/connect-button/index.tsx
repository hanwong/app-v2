import type { ButtonProps } from "@mantine/core"

import { useWallet } from "@initia/react-wallet-widget/ssr"
import { Button } from "@mantine/core"

export const ConnectButton = (props: ButtonProps) => {
  const { address, onboard, view } = useWallet()

  return address ? (
    <Button {...props} onClick={view}>
      {address}
    </Button>
  ) : (
    <Button {...props} variant="white" onClick={onboard}>
      Connect wallet
    </Button>
  )
}
