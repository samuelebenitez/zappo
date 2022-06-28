import style from "./style.module.scss";
import CartResumeItem from "../../components/CartResumeItem";

export default function CartResume({ cartResume, setCartResume }) {
  return (
    <div className={style.cart_resume_container}>
      <div className={style.cart_resume_button}>
        <button onClick={setCartResume}>X</button>
      </div>
      <div className={style.cart_resume_title}>
        <h3 className={style.title}>Hasta acá tenés...</h3>
      </div>

      <div className={style.cart_resume_products}>
        <CartResumeItem />
        <CartResumeItem />
        <CartResumeItem />
        <CartResumeItem />
        <CartResumeItem />
      </div>
    </div>
  );
}
