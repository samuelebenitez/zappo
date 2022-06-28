import "../styles/globals.css";
import { ModalContextProvider } from "../contexts/modalcontext.js";

function MyApp({ Component, pageProps }) {
  const infoToProvider = [];

  return (
    <ModalContextProvider value={infoToProvider}>
      <Component {...pageProps} />
    </ModalContextProvider>
  );
}

export default MyApp;
