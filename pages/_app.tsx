import "@/styles/globals.css";
import { trpc } from "@/utils/trpc";
import type { AppProps, AppType } from "next/app";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  preload: true,
  display: "auto",
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});
function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppinsFont.className + "w-screen h-screen"}>
      <Component {...pageProps} />;
    </main>
  );
}
export default trpc.withTRPC(App);
