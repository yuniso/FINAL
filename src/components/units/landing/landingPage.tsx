// import ReactPlayer from "react-player";

import { Wrapper } from "./landingPage.styles";
import LandingPageA from "./landingPageA";

export default function LandingPage() {
  return (
    <Wrapper>
      <LandingPageA />
    </Wrapper>
    // <div>
    //   <ReactPlayer
    //     url="https://www.youtube.com/watch?v=Xp8Ep1W-azw"
    //     // playing={true} // 재생, 정지
    //     loop={true} // 미디어 루프
    //     controls={true} // 컨트롤러
    //     // light={true} // 썸네일
    //     muted={true}
    //     playbackRate={2}
    //     width="1920px"
    //     height="900px"
    //     playsinline={true}
    //     pip={true}
    //     config={{
    //       youtube: {
    //         playerVars: {
    //           showInfo: 1,
    //           onReady: true,
    //           onStart: true,
    //           onPlay: true,
    //         },
    //       },
    //     }}
    //   ></ReactPlayer>
    // </div>
  );
}
