import style from "./style.module.scss";
import useFetchProducts from "../../hooks/useFetchData";
import Layout from "../../components/Layout";
import PairCard from "../../components/PairCard";
import { useRouter } from "next/router";
import { useContext } from "react";
import VehicleContext from "../../contexts/Vehicle/VehicleContext";

export default function Servicios() {
  const { products, loading, error } = useFetchProducts();
  const router = useRouter();
  const { selectedVehicle } = useContext(VehicleContext);
  console.log(selectedVehicle);

  return (
    <Layout>
      <div className={style.get_back}>
        <button onClick={() => router.back()}>
          <i className="fa-solid fa-reply"></i>
        </button>
      </div>
      <div className={style.paircard_container}>
        <PairCard />
      </div>

      <div className={style.alfombra_container}>
        <div className={style.option1}>
          <button className={style.buttonn}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <p className={style.textt}>Una alfombra (1)</p>
        </div>
        <div className={style.option1}>
          <button className={style.buttonn}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <p className={style.textt}>Cuatro alfombras (4)</p>
        </div>
      </div>
    </Layout>
  );
}
