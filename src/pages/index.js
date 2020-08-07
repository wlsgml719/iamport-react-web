import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { Link } from "next/link";
import Iamport from "react-iamport";
import Head from "next/head";
import { axiosInstance as axios } from "../utils/helper";

const Index = () => {
  const [data, setData] = useState({});
  const [useBilling, setUseBilling] = useState(true);
  const router = useRouter();

  const requestBillingKey = async (e) => {
    await axios
      .post("http://192.168.0.19:3002/subscribe/key", {
        cardNum: "5570420207512020",
        expiry: "0225",
        birth: "0719",
        pwd2Digit: "22",
        customer_uid: "jinhee_0001_1234",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
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
  }, []);

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
      <span style={styles.title}>iamport Nicepay Payments</span>
      <form>
        <input
          style={styles.pay_title}
          type={"radio"}
          name={"payment_type"}
          checked={useBilling}
          onChange={billingPayment}
        />
        <label for={"billing"}>간편 카드 등록 결제</label>
        <button style={styles.pay_billing} onClick={billingPayment} />

        <br />

        <input
          style={styles.pay_title}
          type={"radio"}
          name={"payment_type"}
          onChange={defaultPayment}
          checked={!useBilling}
        />
        <label for={"default"}>일반 결제</label>

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
};
export default Index;
