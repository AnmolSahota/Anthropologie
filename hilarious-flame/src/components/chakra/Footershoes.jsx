import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";
import { Link } from "react-router-dom";
function Footershoes(props) {
  let { shoes, handleshoes, shoeshanlde } = props;
  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(4,1fr)"}
        w={"95%"}
        m="auto"
        fontSize={"15px"}
        color="#26262C"
        display={shoes ? "none" : "grid"}
        onMouseEnter={handleshoes}
        onMouseLeave={shoeshanlde}
      >
        <GridItem
          position={"relative"}
          zIndex={shoes ? -1 : 1}
          onMouseEnter={handleshoes}
          onMouseLeave={shoeshanlde}
          bg="white"
          borderLeft="1px solid #EDF2F7"
          borderBottom="1px solid #EDF2F7"
          padding={"15px"}
          paddingRight={"0px"}
          borderRight={"none"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
          >
            Shop by Catogory
          </Text>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            <Link to="/products/Shoes">Shop Alll Shoes</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">New!</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Top Rated</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Boots & Booties</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Cold Weather Boots</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            paddingBottom="6px"
            onMouseLeave={shoeshanlde}
            className={styles.text}
          >
            <Link to="/products/Shoes">Flats</Link>
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={shoes ? -1 : 1}
          onMouseEnter={handleshoes}
          onMouseLeave={shoeshanlde}
          bg="white"
          padding={"15px"}
          borderRight="1px solid #EDF2F7"
          borderTop={"none"}
          paddingBottom="6px"
          paddingLeft={"0px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={"31px"}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
          ></Text>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
            paddingTop={"18px"}
          >
            <Link to="/products/Shoes">Heels & Wedges</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Muls & Clogs</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Sandles</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Slipers</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Sneakers</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Socks & Tights</Link>
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={shoes ? -1 : 1}
          onMouseEnter={handleshoes}
          onMouseLeave={shoeshanlde}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
          >
            Featured Shops
          </Text>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            <Link to="/products/Shoes">Rainbow bright Shoes & Accessories</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Embalish Shoes</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Party Shoes</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Platform Shoes</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Fishman Sandles</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Wedges</Link>
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={shoes ? -1 : 1}
          onMouseEnter={handleshoes}
          onMouseLeave={shoeshanlde}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
          >
            Brands we Love
          </Text>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            <Link to="/products/Shoes">ON</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Bibi Love</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Birken stock</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Jefery Campali</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">New Balance</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Tave</Link>
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
}

export default Footershoes;
