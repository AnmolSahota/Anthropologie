import React from "react";
import Header from "../chakra/Header";
import {
  Box,
  Checkbox,
  Grid,
  GridItem,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import styles from "../style/Cart.module.css";
import Accordation from "../chakra/Accordation";
import { Link } from "react-router-dom";
import Footer from "../chakra/Footer";
import { useEffect } from "react";
import { useState } from "react";
import Payment from "./Payment";
function Address() {
  let [sum, setsum] = useState(0);
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("Cart")) || [];
    cart.forEach((element) => {
      sum += element.price * element.quantity;
    });
    setsum(sum);
  }, []);
  return (
    <>
      <Header />
      <Box w={"95%"} m="auto">
        <Text position={"relative"} marginTop={"40px"}>
          <span className={styles.count} style={{ color: "teal" }}>
            Ship Or Pickup
          </span>
          <span className={styles.summry}>Order Summary</span>
        </Text>
        <Grid
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "70% 1fr" }}
          mt={"40px"}
          gap={6}
          mb={"60px"}
        >
          <GridItem>
            <Box border={"1px solid #A0AEC0"} p={"20px"}>
              <Text className={styles.order}>Check out as a guest</Text>
              <Text fontSize={"14px"} marginBottom={"10px"}>
                Email Address*
              </Text>
              <Input placeholder="Grab a opportunity"></Input>
              <Text marginTop={"10px"}>
                <Checkbox
                  colorScheme="green"
                  marginTop={"5px"}
                  marginRight="5px"
                  defaultChecked
                ></Checkbox>
                <span className={styles.addresspara}>
                  Please send me Anthropologie offers, promotions, and other
                  commercial messages. (You may unsubscribe at any time.)
                </span>
              </Text>
            </Box>
            <Box>
              <Text className={styles.count} marginTop="30px">
                Shipping Address
              </Text>
              <Text className={styles.label}>Country/Region*</Text>
              <Input
                placeholder="Enter Region"
                border={"1px solid #4b5666"}
              ></Input>
              <Text className={styles.label}>Enter Name</Text>
              <Input
                border={"1px solid #4b5666"}
                placeholder="First Name"
                borderRadius={"0px"}
              ></Input>
              <Text className={styles.label}>Enter Last Name</Text>
              <Input
                border={"1px solid #4b5666"}
                borderRadius={"0px"}
                placeholder="Last Name"
              ></Input>
              <Text className={styles.label}>Enter Street</Text>
              <Input
                placeholder="Street Address"
                borderRadius={"0px"}
                border={"1px solid #4b5666"}
              ></Input>
            </Box>
            <Text className={styles.label}>Address</Text>
            <Input
              border={"1px solid #4b5666"}
              placeholder="Building , Apartment"
              borderRadius={"0px"}
            ></Input>
            <Text className={styles.label}>City</Text>
            <Input borderRadius={"0px"} border={"1px solid #4b5666"}></Input>
            <Text className={styles.label}>Postal Code</Text>
            <Input borderRadius={"0px"} border={"1px solid #4b5666"}></Input>
            <Text className={styles.label}>Mobile Number</Text>
            <Input
              placeholder="+91"
              borderRadius={"0px"}
              border={"1px solid #4b5666"}
            ></Input>
          </GridItem>
          <GridItem>
            <Box border={"1px solid #5c5c5f"} padding="15px">
              <Text position={"relative"}>
                <span className={styles.left}>Subtotal</span>
                <span className={styles.right}>${sum}.00</span>
              </Text>
              <Text position={"relative"}>
                <span className={styles.left}>Shipping</span>
                <span className={styles.right}>TBD</span>
              </Text>
              <Text position={"relative"}>
                <span className={styles.left}>Estimated Tax</span>
                <span className={styles.right}>$0.00</span>
              </Text>
              <Text position={"relative"}>
                <span className={styles.left}>Total</span>
                <span className={styles.right}>${sum}.00</span>
              </Text>
              <Text className={styles.desc}>
                Or 4 interest-free installments of $117.00 with Klarna
                orAfterpay
              </Text>
              <button className={styles.btn}>
                <Link to="/thankyou">Ship This Address</Link>
              </button>
              <Text marginBottom={"20px"}>
                <Link to="/" className={styles.shoping}>
                  Countinue Shopping
                </Link>
              </Text>
              <Accordation />
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Payment />
      <Footer />
    </>
  );
}

export default Address;
