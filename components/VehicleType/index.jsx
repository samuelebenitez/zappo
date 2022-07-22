import style from "./style.module.scss";
import VehicleContext from "../../contexts/Vehicle/VehicleContext";
import React, { useContext, useEffect, useState, useRef } from "react";

export default function VehicleType({ vehicle }) {
  const { selectedVehicle, selectVehicle } = useContext(VehicleContext);

  const boxRef = useRef(null);

  useEffect(() => {
    console.log(selectedVehicle);
  }, [selectedVehicle]);

  function coloredBox(vehi) {
    selectVehicle(vehi);
  }

  return (
    <div
      onClick={() => coloredBox(vehicle)}
      ref={boxRef}
      className={style.vehicle_type_container}
    >
      <p className={style.vehicle_size}>{vehicle}</p>
    </div>
  );
}
