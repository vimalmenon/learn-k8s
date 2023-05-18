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
    appName: publicRuntimeConfig.APP_NAME,
    nodeName: publicRuntimeConfig.NODE_NAME,
    env: publicRuntimeConfig.NODE_ENV,
  };
};

export default Home;
