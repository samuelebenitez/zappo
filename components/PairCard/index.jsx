import style from "./style.module.scss";

export default function PairCard() {
  switch (type) {
    case "classic":
      return (
        <div className={style.pair_card_container1}>
          <div className={style.paircard_title1}>Classic</div>
          <div className={style.paircard_info}>
            <div className={style.product}>producto1</div>
            <div className={style.product}>producto2</div>
          </div>
        </div>
      );
      break;
    case "full wax":
      return (
        <div className={style.pair_card_container2}>
          <div className={style.paircard_title2}>Classic</div>
          <div className={style.paircard_info}>
            <div className={style.product}>producto1</div>
            <div className={style.product}>producto2</div>
          </div>
        </div>
      );

      break;
    case "detailing":
      return (
        <div className={style.pair_card_container3}>
          <div className={style.paircard_title2}>Classic</div>
          <div className={style.paircard_info}>
            <div className={style.product}>producto1</div>
            <div className={style.product}>producto2</div>
          </div>
        </div>
      );
    default:
      break;
  }
}
