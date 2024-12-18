import "@/app/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/_components/NavBar/NavBar";
import Footer from "@/_components/Footer/Footer";
import IMAGES from "@/public";
import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/siteconfig";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.favicon,
  },
  ownername: siteConfig.ownername,
  companyname: siteConfig.companyname,
  url: siteConfig.link,
  referrer: "origin-when-cross-origin",
  keywords: siteConfig.keywords,
  formatDetection: {
    email: siteConfig.email,
    address: siteConfig.address,
    telephone: siteConfig.telephone,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Providers>
            <NavBar />
            {children}
            <Footer />
        </Providers>
      </body>
    </html>
  );
}
