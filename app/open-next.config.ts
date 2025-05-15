// default open-next.config.ts file created by @opennextjs/cloudflare
import type { OpenNextConfig } from "@opennextjs/aws/types/open-next"

import { defineCloudflareConfig } from "@opennextjs/cloudflare/config"
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache"

const config: OpenNextConfig = defineCloudflareConfig({
  incrementalCache: kvIncrementalCache,
})

export default config
