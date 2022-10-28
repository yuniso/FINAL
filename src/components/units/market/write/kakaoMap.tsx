import styled from "@emotion/styled";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const Map = styled.div`
  width: 384px;
  height: 252px;
  margin-top: 38px;
  margin-left: 41px;
`;

interface IKakaoMapProps {
  address: string;
}

export default function KaKaoMap(props: IKakaoMapProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=3af0b5f3c0c85d70d2cfc864c4f28354&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");

        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.5286, 126.93431), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // const markerPosition = new window.kakao.maps.LatLng(37.5286, 126.93431);

        const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        // markerPosition = new window.kakao.maps.LatLng(37.5286, 126.93431); // 마커가 표시될 위치입니다

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        const marker = new window.kakao.maps.Marker({
          //   position: markerPosition,
          position: map.getCenter(),
          image: markerImage, // 마커이미지 설정
        });
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // const resultDiv = document.getElementById("clickLatlng");
            // resultDiv.innerHTML = message;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            marker.setMap(map);
          }
        );
      });
    };
  }, []);

  return <Map id="map"></Map>;
}
