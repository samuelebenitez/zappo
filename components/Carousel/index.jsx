import style from "./style.module.scss";

export default function Carousel() {
  return (
    <article className={style.article}>
      <h3 className={style.carousel_title}>combos</h3>
      <div className={style.cards_container}></div>
    </article>
  );
}
