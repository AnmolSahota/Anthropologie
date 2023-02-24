import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import styles from "../style/Navbarcss.module.css";
import { useContext } from "react";
import { pagecontext } from "../Context/Pagecontextprovider";
function FooterDress(props) {
  let { dress, handledress, dresshanlde } = props;
  let { change, setChange } = useContext(pagecontext);
  let changer = () => {
    console.log("fire");
  };
  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(4,1fr)"}
        w={"95%"}
        m="auto"
        fontSize={"15px"}
        color="#26262C"
        display={dress ? "none" : "grid"}
        onMouseEnter={handledress}
        onMouseLeave={dresshanlde}
      >
        <GridItem
          position={"relative"}
          zIndex={dress ? -1 : 1}
          onMouseEnter={handledress}
          onMouseLeave={dresshanlde}
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
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
          >
            Shop by Catogory
          </Text>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            <Link to="/products/Dresses">Shop Alll Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">New!</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Top Rated Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Jumpsuites</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Loudge & Casual Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            paddingBottom="6px"
            onMouseLeave={dresshanlde}
            className={styles.text}
          >
            <Link to="/products/Dresses">Maxi & Dresses</Link>
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={dress ? -1 : 1}
          onMouseEnter={handledress}
          onMouseLeave={dresshanlde}
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
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
          ></Text>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
            paddingTop={"18px"}
          >
            <Link to="/products/Dresses">Midi Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Mini & Tunic Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Ocation & Party Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Trending Utility</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Pattie Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Plus Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            className={styles.text}
            paddingBottom="6px"
          >
            <Link to="/products/Dresses">Wedding Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Wedding Guest Dresses</Link>
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={dress ? -1 : 1}
          onMouseEnter={handledress}
          onMouseLeave={dresshanlde}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
          >
            Featured Shops
          </Text>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            <Link to="/products/Dresses">Bold & bright Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Occation & Party Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Shirt Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Trendin Tulle</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Little Back Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Little White Dresses</Link>
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={dress ? -1 : 1}
          onMouseEnter={handledress}
          onMouseLeave={dresshanlde}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
          >
            What To Wear
          </Text>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            <Link to="/products/Dresses">A Special Occation</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Proom Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">At Work Style</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Vaccation Ready</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Bridal Shower Chic</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Date Night Defined</Link>
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
}

export default FooterDress;
