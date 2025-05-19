import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  addons: ["storybook-dark-mode"],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
    enableCrashReports: false,
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  stories: ["../components/**/*.(stories|story).@(js|jsx|ts|tsx)"],
}
export default config
