import { useMediaQuery } from "react-responsive"

export const useResponsive = () => {
  const isSm = useMediaQuery({ query: "(min-width: 640px)" })
  const isMd = useMediaQuery({ query: "(min-width: 768px)" })
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" })
  const isXl = useMediaQuery({ query: "(min-width: 1440px)" })
  const is2xl = useMediaQuery({ query: "(min-width: 1920px)" })

  return {
    is2xl,
    isLg,
    isMd,
    isSm,
    isXl,
  }
}
