import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
