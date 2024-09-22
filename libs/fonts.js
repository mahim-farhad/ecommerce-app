import { Poppins, Roboto_Condensed, Fira_Code } from "next/font/google";

import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "300",
    "400",
    "500",
    "700",
    "900"
  ],
  variable: "--font-poppins",
  display: "swap"
});

const akiraExpanded = localFont({
  src: "../public/fonts/akira-expanded/AkiraExpanded.otf",
  weight: "900",
  variable: "--font-akira-expanded",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  variable: "--font-roboto-condensed",
  display: "swap"
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700"
  ],
  variable: "--font-firaCode",
  display: "swap"
});

export { poppins, akiraExpanded, robotoCondensed, firaCode };
