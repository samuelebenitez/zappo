import style from "./style.module.scss";

export default function PairCard() {
  return (
    <div className={style.pair_card_container}>
      <div className={style.pair_card_container1}>
        <div className={style.paircard_title1}>Classic</div>
        <div className={style.paircard_info}>
          <div className={style.product}>express</div>
          <div className={style.product}>classic</div>
        </div>
      </div>
      <div className={style.pair_card_container2}>
        <div className={style.paircard_title2}>full wax</div>
        <div className={style.paircard_info}>
          <div className={style.product}>polymer wax</div>
          <div className={style.product}>hot wax</div>
        </div>
      </div>
      <div className={style.pair_card_container3}>
        <div className={style.paircard_title3}>detailed</div>
        <div className={style.paircard_info}>
          <div className={style.product}>full wash</div>
          <div className={style.product}>premium wash</div>
        </div>
      </div>
    </div>
  );
}
