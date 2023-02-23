import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";
import React from "react";

function FooterGarden(props) {
  let { garden, handlegarden, gardenhandle } = props;
  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(5,1fr)"}
        w={"95%"}
        m="auto"
        fontSize={"15px"}
        color="#26262C"
        display={garden ? "none" : "grid"}
        onMouseEnter={handlegarden}
        onMouseLeave={gardenhandle}
      >
        <GridItem
          position={"relative"}
          zIndex={garden ? -1 : 1}
          onMouseEnter={handlegarden}
          onMouseLeave={gardenhandle}
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
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
          >
            Shop by Catogory
          </Text>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Explore All gardenings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Book an Appointment
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Shop All gardenings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            New!
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Top Rated styles
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            paddingBottom="6px"
            onMouseLeave={gardenhandle}
            className={styles.text}
          >
            Bride
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            paddingBottom="6px"
            onMouseLeave={gardenhandle}
            className={styles.text}
          >
            gardening Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            paddingBottom="6px"
            onMouseLeave={gardenhandle}
            className={styles.text}
          >
            Bridemaid Dresses
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={garden ? -1 : 1}
          onMouseEnter={handlegarden}
          onMouseLeave={gardenhandle}
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
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
          ></Text>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
            paddingTop={"18px"}
          >
            Mother of Bride
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Flower Girl Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            gardening Guest Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Robers & Lingore
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Sunglasses & Reading Glasses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Travel & Tech
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={garden ? -1 : 1}
          onMouseEnter={handlegarden}
          onMouseLeave={gardenhandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
          >
            Featured
          </Text>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Spring Everleastin
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            New Spring Gow
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Bracelets
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Rings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Hoop Shop
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Manogram
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={garden ? -1 : 1}
          onMouseEnter={handlegarden}
          onMouseLeave={gardenhandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
          >
            Rainbow bright: Accessories
          </Text>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            The Peri Edit
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Sings Bags
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Birken stock
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={garden ? -1 : 1}
          onMouseEnter={handlegarden}
          onMouseLeave={gardenhandle}
          bg="white"
          padding={"15px"}
          borderRight="1px solid #EDF2F7"
          borderTop={"none"}
        >
          <GridItem
            position={"relative"}
            zIndex={garden ? -1 : 1}
            onMouseEnter={handlegarden}
            onMouseLeave={gardenhandle}
            className={styles.text}
          >
            <Box h={"120%"} w={"90%"}>
              <Image
                height={"250%"}
                w={"100%"}
                position="relative"
                top={"20px"}
                left={"20px"}
                src="https://images.ctfassets.net/5de70he6op10/3YeNJrCoPD6q8PEUKNYj54/3f8396d8f71fc39ef7304b15cc5ffef5/FEB23_BHLDN_DropDown_1.jpg?w=500&q=80&fm=webp"
              />
            </Box>
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
}

export default FooterGarden;
