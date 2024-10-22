import { poppins, akiraExpanded, robotoCondensed, firaCode } from "@libs/fonts";

import clsx from "clsx";

import "@styles/globals.css";

// import { getCurrentUser } from "@api/users";

import { ThemeProvider, SessionProvider, TooltipProvider } from "@libs/providers";

import { CartProvider } from "@contexts/CartContext";
import { WishtlistProvider } from "@contexts/WishlistContext";
import { SidebarProvider } from "@contexts/SidebarContext";

import Toaster from "@components/ui/toaster";

import Navbar from "@components/navigations/navbar";
import Sidebar from "@components/navigations/sidebar";
import Footer from "@components/navigations/footer";

const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "Raphix Design";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Premium Esports Jerseys for Gamers | Custom Gaming Apparel | Raphix Design";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default async function RootLayout({ children }) {
  // const currentUserData = await getCurrentUser();

  const bodyClasses = clsx(
    poppins.variable, akiraExpanded.variable,
    robotoCondensed.variable,
    firaCode.variable,
    "antialiased",
    "font-sans text-base leading-normal font-normal",
    "overflow-x-hidden select-none",
    "text-foreground",
    "bg-background"
  );

  return (
    <html lang="en">
      <body className={bodyClasses}>
        <ThemeProvider
          attribute="class" defaultTheme="system"
          enableSystem={true}
        >
          {/* <SessionProvider> */}
          <CartProvider>
            <WishtlistProvider>
              <TooltipProvider>
                <SidebarProvider>
                  <Navbar />

                  <Sidebar />

                  {children}

                  <Footer />
                </SidebarProvider>
              </TooltipProvider>
            </WishtlistProvider>
          </CartProvider>
          {/* </SessionProvider> */}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
