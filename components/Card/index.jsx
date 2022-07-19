import style from "./style.module.scss";
import Image from "next/image";
import infoIcon from "../../assets/infoIcon.svg";
import plusIcon from "../../assets/plusIcon.svg";
import { useToggle } from "../../hooks/useToggle";
import InfoModal from "../InfoModal";
import { useContext } from "react";
import VehicleContext from "../../contexts/Vehicle/VehicleContext";

export default function Card({ card }) {
  const [showInfo, setShowInfo] = useToggle();
  const { title, description, price } = card;

  const { vehicle } = useContext(VehicleContext);
  console.log(vehicle);

  return (
    <>
      {!showInfo ? (
        <div className={style.card_container}>
          <h3 className={style.card_title}>{title}</h3>
          <ul className={style.detalle}>
            {description.map((desc, key) => {
              <li key={key}>{desc}</li>;
            })}
          </ul>
          <div className={style.buttons_group}>
            <p className={style.price}>{price.auto_ch}</p>
            <div className={style.buttons}>
              <button onClick={setShowInfo} className={style.info_icon}>
                i
              </button>
              <button className={style.buy_icon}>+</button>
            </div>
          </div>
        </div>
      ) : (
        <InfoModal showInfo={showInfo} setShowInfo={setShowInfo} />
      )}
    </>
  );
}
