import { AppShellContainer } from "@/components/layout/app-shell-container"
import { Welcome } from "@/components/ui/welcome"

export default {
  title: "AppShellContainer",
}

export const Usage = () => (
  <AppShellContainer>
    <Welcome />
  </AppShellContainer>
)
