import type { AppProps } from "next/app";

// Theme & global styles =>
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";

// Fonts =>
import { Inter } from "@next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Layout =>
import Header from "@/layout/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${inter.variable} font-sans`}>
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
