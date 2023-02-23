import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import styles from "../style/Navbarcss.module.css";
function FooterDress(props) {
  let { dress, handledress, dresshanlde } = props;
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
            Shop Alll Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            New!
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Top Rated Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Jumpsuites
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Loudge & Casual Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            paddingBottom="6px"
            onMouseLeave={dresshanlde}
            className={styles.text}
          >
            Maxi & Dresses
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
            Midi Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Mini & Tunic Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Ocation & Party Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Trending Utility
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Pattie Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Plus Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            className={styles.text}
            paddingBottom="6px"
          >
            Wedding Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Wedding Guest Dresses
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
            Bold & bright Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Occation & Party Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Shirt Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Trendin Tulle
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Little Back Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Little White Dresses
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
            A Special Occation
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Proom Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            At Work Style
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Vaccation Ready
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Bridal Shower Chic
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={dress ? -1 : 1}
            onMouseEnter={handledress}
            onMouseLeave={dresshanlde}
            paddingBottom="6px"
            className={styles.text}
          >
            Date Night Defined
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
}

export default FooterDress;
