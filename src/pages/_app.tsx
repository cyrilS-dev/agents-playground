import { CloudProvider } from "@/cloud/useCloud";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from '@clerk/nextjs'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <CloudProvider>
        <Component {...pageProps} />
      </CloudProvider>
    </ClerkProvider>
  );}
