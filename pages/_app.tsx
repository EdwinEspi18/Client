import "@/styles/globals.css";
import type { AppProps, AppType } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
