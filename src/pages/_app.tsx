import "@/styles/globals.css";

import { MicrosoftClarity } from "@/components/MicrosoftClarity";
import RootLayout from "@/components/layout";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
      <MicrosoftClarity />
    </>
  );
}
