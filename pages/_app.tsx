import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../src/components/commons/layout";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://backend08.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
