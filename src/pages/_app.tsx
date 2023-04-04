import { AppProps } from "next/app";
import "../styles.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/components/layout/loading";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
