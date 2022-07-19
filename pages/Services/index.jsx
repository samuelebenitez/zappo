import style from "./style.module.scss";
import Card from "../../components/Card";
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
      {/* <PairCard />
      <PairCard />
      <PairCard /> */}
    </Layout>
  );
}
