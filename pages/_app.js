import "../styles/globals.css";
import dynamic from "next/dynamic";
const ProgressBar = dynamic(() => import("../components/utils/ProgessBar"));
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
