import "./globals.css";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export const metadata = {
  title: "Shopper",
  description: "Gestor de listas de compras online",
  applicationName: "Shopper",
  appleWebApp: {
    capable: true,
    title: "Shopper",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
  },
  themeColor: "#317EFB",
  viewport:
    "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      url: "/icons/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/icons/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    { rel: "apple-touch-icon", url: "/icons/favicon-32x32.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={caveat.className}>
      <body>{children}</body>
    </html>
  );
}
