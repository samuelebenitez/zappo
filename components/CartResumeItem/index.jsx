import style from "./style.module.scss";
import deleteIcon from "../../assets/deleteIcon.svg";
import Image from "next/image";

export default function CartResumeItem() {
  return (
    <div className={style.cart_resume_item}>
      <div className={style.cart_resume_product}>
        <p className={style.product_name}>Full Wax</p>
        <p className={style.product_price}>$2500</p>
      </div>
      <div className={style.cart_resume_buttons}>
        <button className={style.button_delete}>
          <Image src={deleteIcon} alt="delete icon" />
        </button>
      </div>
    </div>
  );
}
