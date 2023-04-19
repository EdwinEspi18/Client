import "@/styles/globals.css";
import { trpc } from "@/utils/trpc";
import type { AppProps, AppType } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default trpc.withTRPC(App);
