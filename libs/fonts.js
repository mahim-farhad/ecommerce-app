import {
  Poppins, Roboto_Condensed,
  Fira_Code
} from "next/font/google";

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

export { poppins, robotoCondensed, firaCode };
