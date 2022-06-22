import style from "./style.module.scss";
import Card from "../Card";

export default function Carousel() {
  return (
    <article className={style.article}>
      <h3 className={style.carousel_title}>combos</h3>
      <div className={style.cards_container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </article>
  );
}
