import React from "./node_modules/react";

const Payment = () => {
  return (
    <div style={{ flex: 1, textAlign: "center" }}>
      <button>결제하기</button>;
    </div>
  );
};

const styles = () => {
  container: {
    flex: 1;
  }
};
export default Payment;

// method, merchant_uid, name, amount, buyer: {email, name, tell, name, tel, addr, postcode}

// 4주 인텐시브
/*
    인앱상품 정보
    1. 기본 구성 인앱 상품 템플릿
      = 수강권, 준비물

      a. 클래스 기본 구성
        > 할인가격, 상품명
    
    2. 추가 준비물 선택
      = 상품 이미지, 상품명, 수량, 가격
    */

/*
    배송 정보
    이름, 휴대폰번호, 우편주소, 주소, 도로명주소, 상세주소
    배송 요청사항
    */

/* 신청 내역 확인 및 결제 - OFFLine_Inten_PAY-STEP3-OFF-001
    결제정보
    일반결제 / 간편 카드등록(정기결제)
    배송비
    */
