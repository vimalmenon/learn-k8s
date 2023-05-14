import packageJson from "../../../package.json";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>&#169; All right reserved</div>
      <section className={styles.version}>v{packageJson.version} </section>
    </footer>
  );
}
