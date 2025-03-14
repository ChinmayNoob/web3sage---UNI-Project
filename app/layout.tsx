import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3Sage",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      {/* <ThemeProvider
        attribute="class"
        defaultTheme=""
        enableSystem
        disableTransitionOnChange
      > */}
        <ClerkProvider>
          <body className={inter.className}>{children}</body>
        </ClerkProvider>
      {/* </ThemeProvider> */}

    </html>
  );
}
