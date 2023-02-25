import React from "react";
import { Show, Hide, Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Carousler from "../chakra/Carousler";
import Dollor from "../chakra/Dollor";
import Header from "../chakra/Header";
import Drawermenu from "../chakra/Drawermenu";
import Navbar from "../chakra/Navbar";
import styles from "../style/Cart.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Accordation from "../chakra/Accordation";
function Cart() {
  let [data, sedata] = useState([]);
  let sum = 0;
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("Cart")) || [];
    sedata(cart);
  }, []);

  let quantityhandler = (id, value) => {
    let arr = data.filter((el) => {
      if (id == el.id) {
        console.log(el);
        return { ...el, quantity: value };
      } else {
        return el;
      }
    });
    // console.log(arr);
    sedata(arr);
  };
  return (
    <>
      <Carousler />
      <Dollor />
      <Header />
      <Show below="md">
        <Drawermenu />
      </Show>
      <Hide below="md">
        <Navbar />
      </Hide>
      <Box w={"95%"} margin="auto">
        <Text position={"relative"} marginTop={"40px"}>
          <span className={styles.count}>
            Shopping Cart ({data.length} items)
          </span>
          <span className={styles.summry}>Order Summary</span>
        </Text>
        <Grid
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "75% 1fr" }}
          mt={"40px"}
        >
          <GridItem>
            <Grid
              gridTemplateColumns={"repeat(5,1fr)"}
              borderTop="1px solid #EDF2F7"
              borderBottom="1px solid #EDF2F7"
              marginBottom={"30px"}
              display={{ base: "none", md: "grid" }}
            >
              <GridItem></GridItem>
              <GridItem className={styles.top}>Item</GridItem>
              <GridItem className={styles.top}>Item Price</GridItem>
              <GridItem className={styles.top}>Quantity</GridItem>
              <GridItem className={styles.top}>Total Price</GridItem>
            </Grid>
            <Grid
              gridTemplateColumns={{
                base: "repeat(4,1fr)",
                md: "repeat(5,1fr)",
              }}
              gap={6}
            >
              {data.map((e) => {
                sum += e.quantity * e.price;
                return (
                  <>
                    <GridItem key={e.id}>
                      <Image src={e.url} height={"80%"} />
                    </GridItem>
                    <GridItem>
                      <Text className={styles.title}>{e.title}</Text>
                      <Text className={styles.brand}>
                        <span className={styles.bold}>Brand:</span> {e.brand}
                      </Text>
                      <Text className={styles.brand}>
                        <span className={styles.bold}>Style #</span>
                        <span className={styles.random}>
                          {String(Math.random()).substring(0, 15)}
                        </span>
                      </Text>
                      <Text className={styles.brand}>
                        <span className={styles.bold}>Size:</span>{" "}
                        <span className={styles.random}>Stanard</span>
                      </Text>
                    </GridItem>
                    <GridItem
                      className={styles.brand}
                      fontWeight={500}
                      display={{ base: "none", md: "grid" }}
                    >
                      ${e.price}.00
                    </GridItem>
                    <GridItem>
                      <select
                        className={styles.select}
                        onChange={(event) =>
                          quantityhandler(e.id, event.target.value)
                        }
                      >
                        <option>{e.quantity}</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </GridItem>
                    <GridItem className={styles.brand}>
                      <span className={styles.bold}>Total Price</span> $
                      {e.price * e.quantity}.00
                    </GridItem>
                  </>
                );
              })}
            </Grid>
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
              <button className={styles.btn}>Procced To Checkout</button>
              <Text>
                <Link to="/" className={styles.shoping}>
                  Countinue Shopping
                </Link>
              </Text>
              <Accordation />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Cart;
