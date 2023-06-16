import { AppProps } from "next/app";
import { useState, useEffect } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import wrapper from "@/module";
import Head from "next/head";
import "../styles/globals.css";
import "@/assets/css/MiniCalendar.css";
import { BrowserRouter } from "react-router-dom";
import { useAutoStatus } from "./api/autotrading";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById("portal"));
  }, []);

  if (!element) {
    return <>asd</>;
  } else {
    return (
      <>
        <Head>
          <title>nc_bit</title>
        </Head>
        <main className="app">
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <BrowserRouter>
                <Component {...pageProps} />
              </BrowserRouter>
            </Hydrate>
          </QueryClientProvider>
        </main>
      </>
    );
  }
};

export default wrapper.withRedux(App);
