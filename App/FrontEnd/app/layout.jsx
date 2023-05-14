import "./global.css";
import Header from "../src/common/header/Header";
import Footer from "../src/common/footer/Footer";
import styles from "./app.module.css";

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.app}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
