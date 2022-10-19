import { useRouter } from "next/router";
import NavigationUI from "./navigation.presenter";

export default function NavigationPage() {
  const router = useRouter();

  const onClickMenu = (event: any) => {
    router.push(event.target.id);
  };

  return <NavigationUI onClickMenu={onClickMenu} />;
}
