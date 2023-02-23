import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";

function FooterBuety(props) {
  let { buety, handleBuet, BurtyHandle } = props;

  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(5,1fr)"}
        w={"95%"}
        m="auto"
        fontSize={"15px"}
        color="#26262C"
        display={buety ? "none" : "grid"}
        onMouseEnter={handleBuet}
        onMouseLeave={BurtyHandle}
      >
        <GridItem
          position={"relative"}
          zIndex={buety ? -1 : 1}
          onMouseEnter={handleBuet}
          onMouseLeave={BurtyHandle}
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
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
          >
            Shop by Catogory
          </Text>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Explore All buetyings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Book an Appointment
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Shop All buetyings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            New!
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Top Rated styles
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            paddingBottom="6px"
            onMouseLeave={BurtyHandle}
            className={styles.text}
          >
            Bride
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            paddingBottom="6px"
            onMouseLeave={BurtyHandle}
            className={styles.text}
          >
            buetying Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            paddingBottom="6px"
            onMouseLeave={BurtyHandle}
            className={styles.text}
          >
            Bridemaid Dresses
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={buety ? -1 : 1}
          onMouseEnter={handleBuet}
          onMouseLeave={BurtyHandle}
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
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
          ></Text>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
            paddingTop={"18px"}
          >
            Mother of Bride
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Flower Girl Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            buetying Guest Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Robers & Lingore
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Sunglasses & Reading Glasses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Travel & Tech
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={buety ? -1 : 1}
          onMouseEnter={handleBuet}
          onMouseLeave={BurtyHandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
          >
            Featured
          </Text>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Spring Everleastin
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            New Spring Gow
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Bracelets
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Rings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Hoop Shop
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Manogram
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={buety ? -1 : 1}
          onMouseEnter={handleBuet}
          onMouseLeave={BurtyHandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
          >
            Rainbow bright: Accessories
          </Text>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            The Peri Edit
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Sings Bags
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Birken stock
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={buety ? -1 : 1}
          onMouseEnter={handleBuet}
          onMouseLeave={BurtyHandle}
          bg="white"
          padding={"15px"}
          borderRight="1px solid #EDF2F7"
          borderTop={"none"}
        >
          <GridItem
            position={"relative"}
            zIndex={buety ? -1 : 1}
            onMouseEnter={handleBuet}
            onMouseLeave={BurtyHandle}
            className={styles.text}
          >
            <Box h={"70%"} w={"90%"}>
              <Image
                height={"90%"}
                w={"100%"}
                position="relative"
                top={"4px"}
                left={"20px"}
                src="https://images.ctfassets.net/5de70he6op10/5ITuTDqbRli6w5Uz2fhMO4/b04acb13c974fff15595d2eee7b9aaef/022123_NewArrivalsContent_MaeveDresses_Supernav_CLOTHING.jpg?w=295&q=80&fm=webp"
              />
            </Box>
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
}

export default FooterBuety;
