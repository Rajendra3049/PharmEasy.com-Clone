import {
  Radio,
  RadioGroup,
  Stack,
  Select,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useToast,
  Center,
} from "@chakra-ui/react";
import React from "react";
import payment from "../Styles/Payment.module.css";

function Payment() {
  const [orderState, setOrderState] = React.useState(false);
  const toast = useToast();
  const [cartData, setCartData] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [delivery, setDelivery] = React.useState(0);

  async function PostData(e) {
    e.preventDefault();
    console.log("in");
    let cart = [];
    try {
      let res = await fetch(`http://localhost:3000`, {
        method: "POST",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "application/json",
        },
      });
      res = await res.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetData() {
    try {
      let res = await fetch(`http://localhost:3000/cart`);
      res = await res.json();
      setCartData(res);
    } catch (error) {
      console.log(error);
    }
  }

  function total() {
    let totalPrice = 0;
    for (let i = 0; i < cartData.length; i++) {
      totalPrice = totalPrice + cartData[i].price;
    }
    setCartTotal(totalPrice);
  }

  React.useEffect(() => {
    GetData();
  }, [cartData]);

  React.useEffect(() => {
    total();
  }, [cartData]);
  React.useEffect(() => {
    if (cartTotal == 0) {
      setDelivery(0);
    } else {
      setDelivery(149);
    }
  }, [cartTotal]);

  return (
    <div className={payment.main}>
      <div className={payment.left}>
        <h1>Offers</h1>
        <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
        <div className={payment.left1}>
          <div>
            <img
              src="https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png"
              alt="paytm"
            />
          </div>
          <div>
            <p>
              <b>Paytm Wallet</b>
            </p>
            <p style={{ color: "gray", fontSize: "14px" }}>
              upto 3000 cashback points on a minimum transaction of Rs.599.
              Valid once per user
            </p>
          </div>
          <div>
            <Button colorScheme="teal" size="md">
              Pay
            </Button>
          </div>
        </div>

        <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

        <div className={payment.left2}>
          <div>
            <img
              src="https://cdn.pharmeasy.in/payments/amazonpay_new.png"
              alt="amazon"
            />
          </div>
          <div>
            <p>
              <b>Amazon Wallet</b>
            </p>
            <p style={{ color: "gray", fontSize: "14px" }}>
              upto 600 cashback points on a minimum transaction of Rs.399. Valid
              once per user
            </p>
          </div>
          <div>
            <Button colorScheme="teal" size="md">
              Pay
            </Button>
          </div>
        </div>

        <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

        <div className={payment.left3}>
          <div>
            <img
              src="	https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png"
              alt="Mobikwik"
            />
          </div>
          <div>
            <p>
              <b>Mobikwik | Zip (pay Later)</b>
            </p>
            <p style={{ color: "gray", fontSize: "14px" }}>
              upto 650 cashback points on a minimum transaction of Rs.899. Valid
              once per user
            </p>
          </div>
          <div>
            <Button colorScheme="teal" size="md">
              Pay
            </Button>
          </div>
        </div>

        <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

        <div className={payment.placeOrder}>
          {orderState ? (
            <Button
              colorScheme="teal"
              size="md"
              onClick={() =>
                toast({
                  title: "Order Placed.",
                  description:
                    "Your Order will we delivered with in 2-3 working days.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                })
              }>
              Place Order
            </Button>
          ) : (
            <Button
              colorScheme="teal"
              size="md"
              onClick={(e) => {
                e.preventDefault();
                setOrderState(true);
              }}>
              Cash on Delivery
            </Button>
          )}
        </div>
      </div>

      {/* right */}
      <div className={payment.right}>
        <div className={payment.right1}>
          <h1>Price Breakdown</h1>
        </div>
        <div className={payment.right2}>
          <span>Cart Value</span>
          <span>Rs.{cartTotal}</span>
        </div>

        <hr style={{ marginTop: "15px", marginBottom: "10px" }} />

        <div className={payment.right3}>
          {" "}
          <span>Delivery charges</span>
          <span>Rs.{delivery}</span>
        </div>

        <hr style={{ marginTop: "15px", marginBottom: "10px" }} />

        <div className={payment.right4}>
          {" "}
          <span>Amount to be paid</span>
          <span>Rs.{cartTotal + delivery}</span>
        </div>

        <div className={payment.saving}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Total Saving of <b>Rs {delivery}</b> on this Order
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p style={{ fontSize: "12px" }}>MRP Discount 40.05% ₹225.90</p>
                <p style={{ fontSize: "12px" }}>
                  Delivery Charges Waiver ₹20.00
                </p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
export default Payment;
