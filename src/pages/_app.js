import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Sociopedia</title>
        <link rel="icon" href="/next.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
