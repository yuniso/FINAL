import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://backend08.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
