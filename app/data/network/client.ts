import { RESTClient } from "@initia/initia.js"

import type { ResourcePrams, ViewFunctionPrams } from "@/types/client"

import { network } from "@/constants"
import { normalizeError } from "@/data/utils"

export const restClient = new RESTClient(network.restUrl)

export async function viewFunction<T>({
  args,
  functionName,
  moduleAddress,
  moduleName,
  typeArgs,
}: ViewFunctionPrams) {
  try {
    const data = await restClient.move.viewFunction<T>(
      moduleAddress,
      moduleName,
      functionName,
      typeArgs,
      args
    )
    return data
  } catch (error) {
    throw new Error(await normalizeError(error))
  }
}

export async function resource<T>({ moduleAddress, structureTag }: ResourcePrams) {
  try {
    const { data } = await restClient.move.resource<T>(moduleAddress, structureTag)
    return data
  } catch (error) {
    throw new Error(await normalizeError(error))
  }
}

export async function apiRequester<T>(path: string) {
  try {
    const data = await restClient.apiRequester.get<T>(path)
    return data
  } catch (error) {
    throw new Error(await normalizeError(error))
  }
}
