import styled from "@emotion/styled";
import { useRouter } from "next/router";
import BannerPage from "./banner/banner.container";
import FooterPage from "./footer/footer.container";
import HeaderPage from "./header/header.container";
import JoinNavigation from "./navigation/joinNavigation";
import LoginNavigation from "./navigation/loginNavigation";
import NavigationPage from "./navigation/navigation.container";

const Body = styled.div``;
const HIDDEN_HEADERS = ["/login", "/join", "/"];
const HIDDEN_BANNERS = [
  "/login",
  "/join",
  "/market/[_id]",
  "/market/write",
  "/market/[_id]/edit",
  "/",
];
const HIDDEN_NAVIGATION = ["/login", "/"];
const HIDDEN_FOOTER = ["/"];

export default function Layout(props: any) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.pathname);
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.pathname);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.pathname);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);

  return (
    <>
      {!isHiddenHeader && <HeaderPage />}
      {<NavigationPage />}
      {/* <LoginNavigation />} */}
      {!isHiddenBanner && <BannerPage />}
      <Body>{props.children}</Body>
      {!isHiddenFooter && <FooterPage />}
    </>
  );
}
