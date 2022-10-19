import styled from "@emotion/styled";
import { useRouter } from "next/router";
import BannerPage from "./banner/banner.container";
import FooterPage from "./footer/footer.container";
import HeaderPage from "./header/header.container";
import NavigationPage from "./navigation/navigation.container";

const Body = styled.div``;
const HIDDEN_HEADERS = ["/login", "/join"];
const HIDDEN_BANNERS = ["/login", "/join"];

export default function Layout(props: any) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.pathname);
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.pathname);

  return (
    <>
      {!isHiddenHeader && <HeaderPage />}
      <NavigationPage />
      {!isHiddenBanner && <BannerPage />}
      <Body>{props.children}</Body>
      <FooterPage />
    </>
  );
}
