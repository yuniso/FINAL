import styled from "@emotion/styled";
import BannerPage from "./banner/banner.container";
import FooterPage from "./footer/footer.container";
import HeaderPage from "./header/header.container";
import NavigationPage from "./navigation/Navigation.container";

const Body = styled.div``;
export default function Layout(props: any) {
  return (
    <>
      <HeaderPage />
      <NavigationPage />
      <BannerPage />
      <Body>{props.children}</Body>
      <FooterPage />
    </>
  );
}
