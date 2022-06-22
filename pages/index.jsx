import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logoSVG from "../assets/logodarksvg.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zappo || Hand Car Wash and Detailing</title>
      </Head>

      <section className={styles.container}>
        <div className={styles.layer1}>
          <div className={styles.up}>
            <div className={styles.logoBox}>
              <Image src={logoSVG} alt="logo" />
            </div>
            <h1 className={styles.title}>zappo</h1>
          </div>

          <div className={styles.wave}></div>

          <div className={styles.down}>
            <h2>bienvenido</h2>
            <p>Pulse siguiente para elegir el servicio</p>
            <Link href="/Servicios" passHref>
              <button>siguiente</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
