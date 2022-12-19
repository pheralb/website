import type { AppProps } from "next/app";

// Theme & global styles =>
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";

// Fonts =>
import { Inter, JetBrains_Mono } from "@next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className={`${inter.variable} ${jetBrainsMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
