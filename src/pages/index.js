import React, { useEffect } from "react";
import { useRouter } from "next/router";
// import { Link } from "next/link";
import Iamport from "react-iamport";
import axios from "axios";
import Head from "next/head";

const Index = () => {
  const router = useRouter();

  // const IMP = window.IMP;

  const handlePaments = () => {
    IMP.request_pay(
      {
        pg: "nice", // version 1.1.0부터 지원.
        pay_method: "card",
        merchant_uid: "merchant_" + new Date().getTime(),
        name: "주문명:결제테스트",
        amount: 14000,
        buyer_email: "iamport@siot.do",
        buyer_name: "구매자이름",
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 강남구 삼성동",
        buyer_postcode: "123-456",
        m_redirect_url: "https://www.yourdomain.com/payments/complete",
      },
      (res) => {
        if (res) {
          console.log("rsp ", rsp);
        } else {
          console.log("err ", res.error_msg);
        }
      }
    );
  };

  useEffect(() => {
    if (window.IMP) {
      const { IMP } = window;
      IMP.init("imp94304194");
    }
  }, []);

  return (
    <div style={styles.container}>
      {/* <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
      </Head> */}
      <span style={styles.title}>iamport Nicepay Payments</span>
      <button style={styles.pay_btn} onClick={handlePaments}>
        결제하기
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    flex: 1,
    margin: 20,
  },
  pay_btn: {
    width: 300,
    border: 0,
  },
};
export default Index;
