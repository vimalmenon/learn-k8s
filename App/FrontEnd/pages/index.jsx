import React from "react";
import Layout from "../src/Layout";
import App from "../src/Page/App";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const Home = (props) => {
  return (
    <Layout>
      <div>
        <App {...props} />
      </div>
    </Layout>
  );
};

Home.getInitialProps = () => {
  return {
    ...publicRuntimeConfig,
  };
};

export default Home;
