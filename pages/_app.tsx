// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import { AppProps } from "next/app";
// import { RecoilRoot } from "recoil";
// import Layout from "../src/components/commons/layout";
// import "antd/dist/antd.css";

// function MyApp({ Component, pageProps }: AppProps) {
//   const client = new ApolloClient({
//     uri: "https://backend08.codebootcamp.co.kr/graphql",
//     cache: new InMemoryCache(),
//   });

//   return (
//     <RecoilRoot>
//       <ApolloProvider client={client}>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </ApolloProvider>
//     </RecoilRoot>
//   );
// }

// export default MyApp;

import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
// import { globalStyles } from "../src/components/commons/styles/globalStyles";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        {/* <Global styles={globalStyles}></Global> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
