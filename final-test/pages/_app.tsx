// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import { AppProps } from "next/app";

// function MyApp({ Component, pageProps }: AppProps) {
//   const client = new ApolloClient({
//     uri: "https://backend08.codebootcamp.co.kr/graphql",
//     cache: new InMemoryCache(),
//   });

//   return (
//     <ApolloProvider client={client}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   );
// }

// export default MyApp;

import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
// import { globalStyles } from "../src/commons/styles/globalStyles";
// import Layout from "../src/components/commons/layout";

// Import the functions you need from the SDKs you need
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/testApollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        {/* <Global styles={globalStyles} /> */}
        {/* <Layout> */}
          <Component {...pageProps} />
        {/* </Layout> */}
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;

