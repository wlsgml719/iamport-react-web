import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { Link } from "next/link";
import Iamport from "react-iamport";
import Head from "next/head";
import { axiosInstance as axios } from "../utils/helper";

const Index = () => {
  const [product, setProduct] = useState({ prod_amount: "", prod_name: "" });
  const [useBilling, setUseBilling] = useState(true);
  const router = useRouter();

  const saveBillingKey = async (e) => {
    e.preventDefault(); // form action 막기

    // API host 설정
    await axios
      .post("http://192.168.0.19:3002/subscribe/key", {
        cardNum: "5310-7070-1089-0733",
        expiry: "2023-03",
        birth: "910827",
        pwd2Digit: "24",
        customer_uid: "taehong_0001_1234",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const requestSubscribe = async (e) => {
    e.preventDefault(); // form action 막기
    // 유저 아이디(이메일), 간편비밀번호 입력값, 상품정보

    const email = "wlsgml719@naver.com";
    const password = 123456;

    await axios
      .post("http://192.168.0.19:3002/subscribe/payments/schedule", {
        // product,
        email: "wlsgml719@naver.com",
        password: 123456,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "prod_name") {
      setProduct({ [e.target.name]: e.target.value, ...product });
    } else if (e.target.name === "prod_amount") {
      setProduct({ [e.target.name]: e.target.value, ...product });
    }
  };

  const billingPayment = (e) => {
    e.preventDefault();
    if (!useBilling) setUseBilling(true);
    requestBillingKey();
  };

  const defaultPayment = (e) => {
    e.preventDefault();
    if (!!useBilling) setUseBilling(false);
  };

  useEffect(() => {
    if (window.IMP) {
      const { IMP } = window;
      // const userCode = "imp94304194";
      // IMP.init(userCode);
    }
  });

  return (
    <div style={styles.container}>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
      </Head>

      <h1 style={styles.title}>iamport Nicepay Payments</h1>
      <form style={styles.prod_container}>
        <label style={styles.prod_name} htmlFor={"prod_name"}>
          상품명
        </label>
        <input type={"text"} name={"prod_name"} onChange={handleChange} />

        <br />

        <label style={styles.prod_amount} htmlFor={"prod_amount"}>
          가격
        </label>
        <input type={"text"} name={"prod_amount"} onChange={handleChange} />
        {/* {console.log(product)} */}
        <button
          style={(styles.pay_default, { flex: 1 })}
          onClick={requestSubscribe}
        >
          간편 카드로 결제
        </button>
      </form>
      <form>
        <input
          style={styles.pay_title}
          type={"radio"}
          name={"payment_type"}
          checked={useBilling}
          onChange={billingPayment}
        />
        <label htmlFor={"billing"}>간편 카드 등록 결제</label>

        <button style={styles.pay_billing} onClick={saveBillingKey} />

        <br />

        <input
          style={styles.pay_title}
          type={"radio"}
          name={"payment_type"}
          onChange={defaultPayment}
          checked={!useBilling}
        />
        <label htmlFor={"default"}>일반 결제</label>

        <br />
        <button style={styles.pay_default} onClick={defaultPayment}>
          신용카드
        </button>
        <button style={styles.pay_default} onClick={defaultPayment}>
          휴대전화
        </button>
      </form>
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
    height: 50,
    margin: 10,
    border: 0,
  },
  pay_title: {
    marginBottom: 18,
    marginRight: 5,
  },
  pay_billing: {
    width: 300,
    height: 200,
    textAling: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "2px 2px 2px 2px rgba(0.1,0.1,0.1,0.1)",
    marginBottom: 45,
  },
  pay_default: {
    width: 200,
    height: 50,
    backgroundColor: "white",
    marginBottom: 5,
  },
  prod_container: {
    alignSelf: "start",
  },
  prod_name: { display: "flex", width: 200, marginRight: 5 },
  prod_amount: { display: "flex", width: 200, marginRight: 5 },
};
export default Index;
