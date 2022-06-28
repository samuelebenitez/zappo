import style from "./style.module.scss";
import Image from "next/image";
import infoIcon from "../../assets/infoIcon.svg";
import plusIcon from "../../assets/plusIcon.svg";
import { useToggle } from "../../hooks/useToggle";
import InfoModal from "../InfoModal";

export default function Card() {
  const [showInfo, setShowInfo] = useToggle();

  return (
    <>
      {!showInfo ? (
        <div className={style.card_container}>
          <h3 className={style.card_title}>Full Wax</h3>
          <ul className={style.detalle}>
            <li>Interior completo</li>
            <li>Exterior completo</li>
            <li>Desinfección con ozono</li>
            <li>Encerado</li>
          </ul>
          <div className={style.buttons_group}>
            <p className={style.price}>$2500</p>
            <div className={style.buttons}>
              <button onClick={setShowInfo} className={style.info_icon}>
                <Image src={infoIcon} alt="infoIcon" />
              </button>
              <button className={style.buy_icon}>
                <Image src={plusIcon} alt="plusIcon" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <InfoModal showInfo={showInfo} setShowInfo={setShowInfo} />
      )}
    </>
  );
}
