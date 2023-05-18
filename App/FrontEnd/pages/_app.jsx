import React from "react";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
};

export default MyApp;
