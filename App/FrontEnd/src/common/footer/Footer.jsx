import packageJson from "../../../package.json";
import styles from "./footer.module.css";

export default function Footer() {
  return <footer className={styles.footer}>This is footer {packageJson.version} </footer>;
}
