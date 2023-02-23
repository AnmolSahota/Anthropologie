import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";
function Footergift(props) {
  let { gift, handlegift, Gifthandle } = props;

  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(5,1fr)"}
        w={"95%"}
        m="auto"
        fontSize={"15px"}
        color="#26262C"
        display={gift ? "none" : "grid"}
        onMouseEnter={handlegift}
        onMouseLeave={Gifthandle}
      >
        <GridItem
          position={"relative"}
          zIndex={gift ? -1 : 1}
          onMouseEnter={handlegift}
          onMouseLeave={Gifthandle}
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
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
          >
            Shop by Catogory
          </Text>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Explore All giftings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Book an Appointment
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Shop All giftings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            New!
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Top Rated styles
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            paddingBottom="6px"
            onMouseLeave={Gifthandle}
            className={styles.text}
          >
            Bride
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            paddingBottom="6px"
            onMouseLeave={Gifthandle}
            className={styles.text}
          >
            gifting Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            paddingBottom="6px"
            onMouseLeave={Gifthandle}
            className={styles.text}
          >
            Bridemaid Dresses
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={gift ? -1 : 1}
          onMouseEnter={handlegift}
          onMouseLeave={Gifthandle}
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
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
          ></Text>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
            paddingTop={"18px"}
          >
            Mother of Bride
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Flower Girl Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            gifting Guest Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Robers & Lingore
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Sunglasses & Reading Glasses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Travel & Tech
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={gift ? -1 : 1}
          onMouseEnter={handlegift}
          onMouseLeave={Gifthandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
          >
            Featured
          </Text>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Spring Everleastin
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            New Spring Gow
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Bracelets
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Rings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Hoop Shop
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Manogram
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={gift ? -1 : 1}
          onMouseEnter={handlegift}
          onMouseLeave={Gifthandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
          >
            Rainbow bright: Accessories
          </Text>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            The Peri Edit
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Sings Bags
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Birken stock
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={gift ? -1 : 1}
          onMouseEnter={handlegift}
          onMouseLeave={Gifthandle}
          bg="white"
          padding={"15px"}
          borderRight="1px solid #EDF2F7"
          borderTop={"none"}
        >
          <GridItem
            position={"relative"}
            zIndex={gift ? -1 : 1}
            onMouseEnter={handlegift}
            onMouseLeave={Gifthandle}
            className={styles.text}
          >
            <Box h={"70%"} w={"90%"}>
              <Image
                height={"90%"}
                w={"100%"}
                position="relative"
                top={"4px"}
                left={"20px"}
                src="https://images.ctfassets.net/5de70he6op10/5phfFWr7WTXZaKpZY904HD/9befd68e385fbbc23c743313153dcfd8/023123_Feb_Site_Content_Apparel_Set202_SUPERNAV_2x.jpg?w=295&q=80&fm=webp"
              />
            </Box>
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
}

export default Footergift;
