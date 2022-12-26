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
import Warning from "@/components/warning";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${inter.variable} font-sans`}>
        <Warning />
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
