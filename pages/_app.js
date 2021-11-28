import { Layout } from "../components";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.querySelector("body").classList.add("subpixel-antialiased");
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
