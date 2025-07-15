import { Separator } from "@radix-ui/react-separator";

function AppFooter() {
  return (
    // 전체
    <div className="w-full h-[400px] flex justify-between">
      {/* 왼쪽 */}
      <div className="w-1/2 flex flex-col">
        {/* 이용약관 */}
        <div className="w-full flex gap-3">
          <p>이용약관</p>
          <p>개인정보처리방침</p>
          <p>클래스 론칭 문의</p>
        </div>
        {/* 이미지 */}
        <div>
          <img
            src="./src/assets/large.svg"
            alt=""
            className="w-[80px] h-[38px] pl-4"
          />
        </div>
        {/* 대표이사 */}
        <div className="w-full flex  ">
          <p>대표이사 : 박성재</p>
          <p>사업자 번호 : 696-48-01248</p>
          <p>통신판매신고번호 : 2025-서울서초-1014</p>
          <p>대표번호 : 070-8080-4429</p>
          <p>주소 : 서울특별시 서초구 서초대로 15길 33</p>
          <p>© Mingo Team all rights reserved</p>
        </div>
      </div>
      {/* 오른쪽 */}
      <div>
        {/* 고객센터 */}
        <div></div>
      </div>
    </div>
  );
}

export default AppFooter;
