import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare"

initOpenNextCloudflareForDev()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
        protocol: "https",
      },
      {
        hostname: "registry.testnet.initia.xyz",
        pathname: "/**",
        protocol: "https",
      },
      {
        hostname: "registry.initia.xyz",
        pathname: "/**",
        protocol: "https",
      },
      {
        hostname: "assets.initia.xyz",
        pathname: "/**",
        protocol: "https",
      },
    ],
  },
}

export default nextConfig
