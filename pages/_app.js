import "../styles/globals.css";
import VehicleState from "../contexts/Vehicle/VehicleState";

function MyApp({ Component, pageProps }) {
  return (
    <VehicleState>
      <Component {...pageProps} />
    </VehicleState>
  );
}

export default MyApp;
