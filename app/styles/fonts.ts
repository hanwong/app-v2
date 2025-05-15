import localFont from "next/font/local"

export const pilatWideSans = localFont({
  src: [
    { path: "../public/fonts/PilatWide-Regular.woff", weight: "400" },
    { path: "../public/fonts/PilatWide-Book.woff", weight: "500" },
    { path: "../public/fonts/PilatWide-Demi.woff", weight: "600" },
    { path: "../public/fonts/PilatWide-Bold.woff", weight: "700" },
  ],
  variable: "--font-pilat-wide-sans",
})
