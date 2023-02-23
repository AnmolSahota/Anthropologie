import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";
import React from "react";

function FooteWedding(props) {
  let { wedd, hanldwedd, weedHandle } = props;

  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(5,1fr)"}
        w={"95%"}
        m="auto"
        fontSize={"15px"}
        color="#26262C"
        display={wedd ? "none" : "grid"}
        onMouseEnter={hanldwedd}
        onMouseLeave={weedHandle}
      >
        <GridItem
          position={"relative"}
          zIndex={wedd ? -1 : 1}
          onMouseEnter={hanldwedd}
          onMouseLeave={weedHandle}
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
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
          >
            Shop by Catogory
          </Text>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Explore All Weddings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Book an Appointment
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Shop All Weddings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            New!
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Top Rated styles
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            paddingBottom="6px"
            onMouseLeave={weedHandle}
            className={styles.text}
          >
            Bride
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            paddingBottom="6px"
            onMouseLeave={weedHandle}
            className={styles.text}
          >
            Wedding Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            paddingBottom="6px"
            onMouseLeave={weedHandle}
            className={styles.text}
          >
            Bridemaid Dresses
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={wedd ? -1 : 1}
          onMouseEnter={hanldwedd}
          onMouseLeave={weedHandle}
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
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
          ></Text>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
            paddingTop={"18px"}
          >
            Mother of Bride
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Flower Girl Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Wedding Guest Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Robers & Lingore
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Sunglasses & Reading Glasses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Travel & Tech
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={wedd ? -1 : 1}
          onMouseEnter={hanldwedd}
          onMouseLeave={weedHandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
          >
            Featured
          </Text>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Spring Everleastin
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            New Spring Gow
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Bracelets
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Rings
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Hoop Shop
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Manogram
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={wedd ? -1 : 1}
          onMouseEnter={hanldwedd}
          onMouseLeave={weedHandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
          >
            Rainbow bright: Accessories
          </Text>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            The Peri Edit
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Sings Bags
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Birken stock
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={wedd ? -1 : 1}
          onMouseEnter={hanldwedd}
          onMouseLeave={weedHandle}
          bg="white"
          padding={"15px"}
          borderRight="1px solid #EDF2F7"
          borderTop={"none"}
        >
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
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

export default FooteWedding;
