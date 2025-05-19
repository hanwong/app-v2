import js from "@eslint/js"
import initia from "@initia/eslint-config-react-app"
import { flatConfig as next } from "@next/eslint-plugin-next"
import perfectionist from "eslint-plugin-perfectionist"
import react from "eslint-plugin-react"
import storybook from "eslint-plugin-storybook"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"

export default defineConfig([
  ...initia,
  globalIgnores([
    "**/.next",
    "!**/.storybook",
    "**/.pnpm-store",
    "**/pnpm-lock.yaml",
    "**/node_modules",
    "**/dist",
    "**/.vercel",
    "**/.wrangler",
  ]),
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  {
    extends: ["js/recommended"],
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    rules: {
      "consistent-return": "error",
      eqeqeq: "error",
      "no-console": "error",
      "no-else-return": "error",
      "no-param-reassign": ["error", { props: true }],
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-use-before-define": "error",
      "object-shorthand": "error",
      "prefer-const": "error",
      semi: ["error", "never"],
      strict: ["error", "global"],
    },
  },
  // React
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      react,
    },
    rules: {
      "react-refresh/only-export-components": "off",
      "react/jsx-sort-props": "off",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
    },
  },
  // Next.js
  next.recommended,
  // Storybook
  ...storybook.configs["flat/recommended"],
  {
    files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
    rules: {
      "storybook/no-uninstalled-addons": [
        "error",
        {
          packageJsonLocation: "./frontend/package.json",
        },
      ],
    },
  },
  // Perfectionist
  perfectionist.configs["recommended-natural"],
  {
    rules: {
      "perfectionist/sort-exports": [
        "error",
        {
          order: "asc",
          partitionByNewLine: true,
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          groups: [
            "side-effect",
            "side-effect-style",
            "type",
            ["builtin", "external"],
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "unknown",
          ],
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        {
          order: "asc",
          partitionByNewLine: true,
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          customGroups: {
            callback: "^on.+",
            classname: "^className$",
            id: "^id$",
            key: "^key$",
            ref: "^ref$",
            style: "^style$",
          },
          groups: ["key", "id", "classname", "style", "unknown", "callback", "ref"],
        },
      ],
      "perfectionist/sort-modules": [
        "error",
        {
          order: "asc",
          partitionByNewLine: true,
        },
      ],
    },
  },
])
