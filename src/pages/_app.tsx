import { Inter } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${inter.variable} font-sans`}>
            <Component {...pageProps} />
        </div>
    );
}
