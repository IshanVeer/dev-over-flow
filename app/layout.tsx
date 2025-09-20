import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Overflow App",
  description: "Stackoverflow clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={` ${spaceGrotesk.variable} ${inter.variable} antialiased bg-light-800 dark:bg-dark-100`}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
