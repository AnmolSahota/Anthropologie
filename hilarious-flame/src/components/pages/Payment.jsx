import { Box, Checkbox, Grid, Text, GridItem, Input } from "@chakra-ui/react";
import React from "react";
import styles from "../style/Cart.module.css";
function Payment() {
  return (
    <Box w={"95%"} m="auto">
      <Box className={styles.count}>Shipping Method</Box>
      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        w={"70%"}
        gap={{ base: 20, md: 6 }}
      >
        <GridItem>
          <input type="radio" name="method"></input>
          <label className={styles.label} >Express $14.99</label>
          <Text className={styles.label}>Credit Card</Text>
          <input type="radio" name="card"></input>
          <label className={styles.label}>Pay with Card</label>
          <Text className={styles.label}>Credit Card Number</Text>
          <Input placeholder="Card Number"></Input>
          <Text className={styles.label}>CVV</Text>
          <Input placeholder="CVV" marginBottom={'20px'} ></Input>
          <input type="radio" name="card"></input>
          <label className={styles.label}>Cash On Delivery</label>
        </GridItem>
        <GridItem>
          <Text fontWeight={700} marginTop={"-25px"}>
            Payment Information
          </Text>
          <input type="radio" name="method"></input>
          <label className={styles.label}>Speed $4.99</label>
          <Text className={styles.label}>Paypal</Text>
          <input type="radio" name="card"></input>
          <label className={styles.label}>pay with your Paypal</label>
          <Text className={styles.label}>Name on the Card</Text>
          <Input placeholder="Card Name"></Input>
          <Text className={styles.label}>Expiry Date</Text>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Payment;
