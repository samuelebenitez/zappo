import style from "./style.module.scss";
import logoSVG from "../../assets/logo.svg";
import Image from "next/image";
import Carousel from "../../components/Carousel";
import cartIcon from "../../assets/cartIcon.svg";
import Link from "next/link";
import { useToggle } from "../../hooks/useToggle";
import CartResume from "../../components/CartResume";
import { useContext } from "react";
import VehicleContext from "../../contexts/Vehicle/VehicleContext";

export default function Servicios() {
  const [cartResume, setCartResume] = useToggle();
  const { vehicle } = useContext(VehicleContext);
  console.log(vehicle);

  return (
    <div className={style.back}>
      {!cartResume ? (
        <div className={style.screen}>
          <div className={style.container}>
            <header>
              <div className={style.inner_header}>
                <div className={style.logo_box}>
                  <Image src={logoSVG} alt="logo" />
                </div>
                <div className={style.title_box}>
                  <h1>zappo</h1>
                </div>
              </div>
            </header>
            <div className={style.wave}></div>
            <main className={style.products}>
              <Carousel />
              <Carousel />
            </main>
          </div>

          <section className={style.call_to_action}>
            <button onClick={setCartResume} className={style.cart_button}>
              <Image src={cartIcon} alt="cartIcon" />
            </button>
            <Link href="/comprar">
              <button className={style.buy_button}>comprar</button>
            </Link>
          </section>
        </div>
      ) : (
        <CartResume cartResume={cartResume} setCartResume={setCartResume} />
      )}
    </div>
  );
}
