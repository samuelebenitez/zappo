import style from "./style.module.scss";
import VehicleContext from "../../contexts/Vehicle/VehicleContext";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";

export default function VehicleType({ vehicle }) {
  const vehicleContext = useContext(VehicleContext);
  const router = useRouter();

  function showMe(vehi) {
    vehicleContext.selectVehicle(vehi);
    router.push("/Services");
  }

  return (
    <div
      onClick={() => showMe(vehicle)}
      className={style.vehicle_type_container}
    >
      <p className={style.vehicle_size}>{vehicle}</p>
    </div>
  );
}
