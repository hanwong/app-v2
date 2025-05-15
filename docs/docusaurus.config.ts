import type * as Preset from "@docusaurus/preset-classic"
import type { Config } from "@docusaurus/types"

import { themes as prismThemes } from "prism-react-renderer"

const config: Config = {
  baseUrl: "/",
  favicon: "https://assets.initia.xyz/images/dapps/app/favicon.svg",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        out: ".typedoc",
        sidebar: {
          autoConfiguration: false,
          typescript: true,
        },
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
      },
    ],
  ],

  projectName: "Initia App",
  themeConfig: {
    image: "https://app.initia.xyz/thumbnail.png",
    navbar: {
      items: [
        {
          label: "Docs",
          position: "left",
          sidebarId: "docs",
          type: "docSidebar",
        },
      ],
      logo: {
        alt: "Logo",
        src: "https://assets.initia.xyz/images/dapps/app/favicon.svg",
      },
      title: "Initia App",
    },
    prism: {
      darkTheme: prismThemes.dracula,
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,

  title: "Initia App",

  url: "https://app.initia.xyz",
}

export default config
