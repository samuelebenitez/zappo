import style from "../styles/Home.module.scss";
import VehicleType from "../components/VehicleType";
import Layout from "../components/Layout";

export default function Vehicle() {
  const vehicleSize = [
    "auto chico",
    "auto grande",
    "camioneta ",
    "svv",
    "van o camioneta con caja",
  ];

  return (
    <Layout>
      <div className={style.vehicle_container}>
        <h3 className={style.vehicle_section_subtitle}>
          seleccione tipo de vehiculo
        </h3>
        {vehicleSize.map((vehicle, key) => (
          <VehicleType key={key} vehicle={vehicle} />
        ))}
      </div>
    </Layout>
  );
}
