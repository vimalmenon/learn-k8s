import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import styles from "../../styles/app.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <section className={styles.mainSection}>{children}</section>
      </main>
      <Footer />
    </div>
  );
}
