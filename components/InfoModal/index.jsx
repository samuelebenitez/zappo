import style from "./style.module.scss";

export default function InfoModal({ showInfo, setShowInfo }) {
  return (
    <div className={style.modal_container}>
      <button onClick={setShowInfo} className={style.close_modal}>
        X
      </button>
      <h1 className={style.modal_title}> Full Wax</h1>
      <div className={style.modal_details}>
        <ul className={style.modal_details_ul}>
          <li>Exterior completo</li>
          <li>Interior completo</li>
          <li>Desinfección con ozono</li>
          <li>Encerado</li>
          <li>Limpieza del motor</li>
        </ul>

        <div className={style.call_to_action}>
          <p>$2500</p>
        </div>
      </div>
      <div className={style.modal_extra_info}>
        <p className={style.plus_size}>Vehiculos plus size + $200</p>
        <div className={style.incluye}>
          <div className={style.incluye1}>
            <h1 className={style.incluye1_title}>Incluye</h1>
            <ul className={style.incluye1_ul}>
              <li>Alfombra</li>
              <li>Bolsa de residuos</li>
              <li>Tarjeta Perfumada</li>
              <li>Barbijo</li>
            </ul>
          </div>
          <div className={style.adicional1}>
            <h1 className={style.adicional1_title}> Adicionales</h1>
            <p>Perfume zappo</p>
            <p>(Aroma a elección)</p>
            <p>2 meses de duración</p>
            <p className={style.adicional1_cap}>+ $300</p>
          </div>
        </div>
      </div>
    </div>
  );
}
