import { MAINNET, TESTNET } from "@initia/react-wallet-widget/ssr"

const NETWORK_TYPE = process.env.NEXT_PUBLIC_NETWORK_TYPE

export const useL1InfoByNetworkType = () => {
  if (NETWORK_TYPE === "mainnet") {
    return {
      configs: MAINNET,
      l1Rest: MAINNET.apiUrl.replace("api", "rest"),
      l1Usernames: MAINNET.modules.usernames,
    }
  }

  return {
    configs: TESTNET,
    l1Rest: TESTNET.apiUrl.replace("api", "rest"),
    l1Usernames: TESTNET.modules.usernames,
  }
}
