import { useRouter } from "next/router";
import HeaderUI from "./header.presenter";

export default function HeaderPage() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickJoin = () => {
    router.push("/join");
  };

  return (
    <HeaderUI
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      onClickJoin={onClickJoin}
    />
  );
}
