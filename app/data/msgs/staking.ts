import type { Coin } from "@initia/initia.proto/cosmos/base/v1beta1/coin"

import { MsgDelegate } from "@initia/initia.proto/initia/mstaking/v1/tx"

import logJson from "@/data/utils/logJson"

export const delegate = (params: { address: string; amount: Coin[]; validator: string }) => {
  logJson(params)

  const { address, amount, validator } = params

  return [
    {
      typeUrl: "/initia.mstaking.v1.MsgDelegate",
      value: MsgDelegate.fromPartial({
        amount,
        delegatorAddress: address,
        validatorAddress: validator,
      }),
    },
  ]
}
