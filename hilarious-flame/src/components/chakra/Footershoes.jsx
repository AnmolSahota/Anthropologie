import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";

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
            Shop Alll Shoes
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            New!
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Top Rated
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Boots & Booties
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Cold Weather Boots
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            paddingBottom="6px"
            onMouseLeave={shoeshanlde}
            className={styles.text}
          >
            Flats
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
            Heels & Wedges
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Muls & Clogs
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Sandles
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Slipers
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Sneakers
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Socks & Tights
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
            Rainbow bright Shoes & Accessories
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Embalish Shoes
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Party Shoes
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Platform Shoes
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Fishman Sandles
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Wedges
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
            ON
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Bibi Love
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Birken stock
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Jefery Campali
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            New Balance
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shoes ? -1 : 1}
            onMouseEnter={handleshoes}
            onMouseLeave={shoeshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Tave
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
}

export default Footershoes;
