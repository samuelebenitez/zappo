//scss
import style from "./style.module.scss";
// next components
import Image from "next/image";
import Link from "next/link";
// assets
import logoSVG from "../../assets/logo.svg";
import cartIcon from "../../assets/cartIcon.svg";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const route = router.route;

  const renderCallToAction = (ruta) => {
    switch (route) {
      case "/Vehicle":
        return (
          <div className={style.call_to_action}>
            <Link href="/Services">
              <button className={style.next_button}>next</button>
            </Link>
          </div>
        );
        break;
      case "/Services":
        return (
          <div className={style.call_to_action_services}>
            <button className={style.cart_button}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Link href="/comprar">
              <button className={style.buy_button}>next</button>
            </Link>
          </div>
        );

      default:
        null;
        break;
    }
  };

  return (
    <div className={style.container}>
      {/* header */}
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
      {/* wave */}
      <div className={style.wave}></div>
      {/* content children */}
      <div className={style.children}>{children}</div>
      {/* call to action bar */}
      <section>{route && renderCallToAction(route)}</section>
    </div>
  );
}
