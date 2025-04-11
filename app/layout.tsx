import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { Header } from "@/components/Header";
import { GoogleAnalytics } from '@next/third-parties/google'
import LogRocketProvider from "@/lib/logrocket";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const schibested_grotesk = Schibsted_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSX Labs",
  description: "We bring research to market."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={clsx(schibested_grotesk.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="csxlabs-theme"
        >
          <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-300 antialiased">
            <Header links={[]} />
            {children}
            <div className="fixed bottom-8 right-8">
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
        <LogRocketProvider />
        <GoogleAnalytics gaId="G-XTRXBNZ8KY" />
      </body>
    </html>
  );
}
