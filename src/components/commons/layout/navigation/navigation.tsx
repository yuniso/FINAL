import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

const Wrapper = styled.div`
  position: fixed;
`;
const Logo = styled.div``;
const MenuItem = styled.div``;
const LoginItem = styled.div``;

const menus = [
  { name: "profile", page: "/market" },
  { name: "CATEGORY", page: "/market" },
  { name: "LIFE", page: "/market" },
  { name: "BEAUTY", page: "/market" },
  { name: "|", page: "/market" },
  { name: "#STYLE", page: "/market" },
  { name: "EVENT", page: "/market" },
  { name: "BEST", page: "/market" },
];

export default function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const onClickToMain = () => {
    router.push("/market");
  };

  const onClickMenu = (event: any) => {
    router.push(event.target.id);
  };

  return (
    <Wrapper>
      {/* <Logo onClick={onClickToMain}>
        {isActive ? (
          <img src="/navigation/Logo_4.png" alt="로고" />
        ) : (
          <>
            <img src="/navigation/logo.png" alt="로고" />
          </>
        )}
      </Logo> */}
      {/* {menus.map((e: any) => (
        <div key={e.page}>
          <MenuItem id={e.page} onClick={onClickMenu}>
            {e.name}
          </MenuItem>
          <LoginItem id={e.page} onClick={onClickMenu}>
            {e.name2}
          </LoginItem>
        </div>
      ))} */}
    </Wrapper>
  );
}
