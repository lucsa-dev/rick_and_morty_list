import { AppProps } from "next/app";
import "../styles.css";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}
