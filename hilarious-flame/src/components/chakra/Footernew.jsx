import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";

function Footernew(props) {
  let { shop, handleshop, shophandle } = props;
  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(4,1fr)"}
        w={"95%"}
        m="auto"
        fontSize={"15px"}
        color="#26262C"
        display={shop ? "none" : "grid"}
        onMouseEnter={handleshop}
        onMouseLeave={shophandle}
      >
        <GridItem
          position={"relative"}
          zIndex={shop ? -1 : 1}
          onMouseEnter={handleshop}
          onMouseLeave={shophandle}
          bg="white"
          borderLeft="1px solid #EDF2F7"
          borderBottom="1px solid #EDF2F7"
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
          >
            Shop by Catogory
          </Text>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Accessories
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Clothing
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Home & Furniture
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Jewellry
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            paddingBottom="6px"
            onMouseLeave={shophandle}
            className={styles.text}
          >
            Petties
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Plus
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            paddingBottom="6px"
            onMouseLeave={shophandle}
            className={styles.text}
          >
            Shoes
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={shop ? -1 : 1}
          onMouseEnter={handleshop}
          onMouseLeave={shophandle}
          bg="white"
          padding={"15px"}
          border="1px solid #EDF2F7"
          borderTop={"none"}
          paddingBottom="6px"
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
          >
            Featured
          </Text>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
            paddingTop={"18px"}
          >
            (Spring)Time to Celibrate
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Trending Citus Shades
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Spring 2023 Scuipture+Shape
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Trending Utility
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Trending the Bubble
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Denim Every way,Every Day
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            className={styles.text}
            paddingBottom="6px"
          >
            New Today Clothing & Accessories
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            10 Step To Spring-Fowered Your Home
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            paddingBottom="6px"
            onMouseLeave={shophandle}
            className={styles.text}
          >
            Jerrele Guy For Anthropologie
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={shop ? -1 : 1}
          onMouseEnter={handleshop}
          onMouseLeave={shophandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
          >
            Designer Spotlight
          </Text>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Frame
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Good American
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Joe Jeans
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Uncommon Jeans
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Teva
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={shop ? -1 : 1}
          onMouseEnter={handleshop}
          onMouseLeave={shophandle}
          bg="white"
          padding={"15px"}
          borderRight="1px solid #EDF2F7"
          borderTop={"none"}
        >
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            className={styles.text}
          >
            <Box h={"70%"} w={"90%"}>
              <Image
                height={"90%"}
                w={"100%"}
                position="relative"
                top={"4px"}
                left={"20px"}
                src="https://images.ctfassets.net/5de70he6op10/6Uu0HuI0eY4wRw4dKKePZX/f231299f9cf1d60e4624b898844435b8/022123_NewArrivalsContent_MaeveDresses_Supernav_NEW.jpg?w=295&q=80&fm=webp"
              />
            </Box>
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
}

export default Footernew;
