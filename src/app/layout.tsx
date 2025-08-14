import "./globals.css";
import type { Metadata } from "next";
import { cn } from "../lib/utils";
import { ThemeProvider } from "../components/theme-provider";
import { Header } from "../components/header";
import { Footer } from "../components/footer";


import { TailwindIndicator } from "../components/tailwind-indicator";
import { Space_Grotesk } from "next/font/google";
import { siteMetadata } from "../data/siteMetadata";
import Head from "./head";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  publisher: siteMetadata.author,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.socialBanner,
        width: 1200,
        height: 630,
        alt: `${siteMetadata.title} - Software Developer`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
    creator: "@sarifInsaan",
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Head />
      </head>
      <body
        className={cn(
          "mx-auto min-h-screen max-w-4xl antialiased dark:bg-dark-bg dark:text-gray-100",
          space_grotesk.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // default to dark mode, can be light, dark, system
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-4  px-2 md:px-0 lg:mx-auto flex flex-col justify-between min-h-screen">
            <Header />
            {children}
            <Footer />
          </main>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
