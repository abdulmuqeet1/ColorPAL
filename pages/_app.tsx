import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
export default MyApp;
