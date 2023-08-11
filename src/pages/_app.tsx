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
import { useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const { userInfo } = useSelector((state: RootStateType) => state.user);
  const idx =
    typeof window === "undefined" ? null : localStorage.getItem("user_idx");
  const router = useRouter();

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
