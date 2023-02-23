import React from "react";
import { Box, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";

function Product(props) {
  let { cloth, handlecloth, clothhandle } = props;
  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(5,1fr)"}
        w={"95%"}
        m="auto"
        fontSize={"15px"}
        color="#26262C"
        display={cloth ? "none" : "grid"}
        onMouseEnter={handlecloth}
        onMouseLeave={clothhandle}
      >
        <GridItem
          position={"relative"}
          zIndex={cloth ? -1 : 1}
          onMouseEnter={handlecloth}
          onMouseLeave={clothhandle}
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
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
          >
            Shop by Catogory
          </Text>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Shop Alll Clothing
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            New!
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Top Rated
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            ACtiviear
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Biazer
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            paddingBottom="6px"
            onMouseLeave={clothhandle}
            className={styles.text}
          >
            Dresses
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            paddingBottom="6px"
            onMouseLeave={clothhandle}
            className={styles.text}
          >
            Gateway & Resourt Wear
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            paddingBottom="6px"
            onMouseLeave={clothhandle}
            className={styles.text}
          >
            Intimate & Lingre
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={cloth ? -1 : 1}
          onMouseEnter={handlecloth}
          onMouseLeave={clothhandle}
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
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
          ></Text>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
            paddingTop={"18px"}
          >
            Kimonos
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Loungewear
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Pajama & Robes
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Pants
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Panties
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Skirts
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Swaters
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Tops & Tees
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={cloth ? -1 : 1}
          onMouseEnter={handlecloth}
          onMouseLeave={clothhandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
          >
            Featured Shops
          </Text>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            Trending Utilities
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Trending the Bubble
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Denim Every Day Every way
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            The Shirt Shop
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            The Linen Edit
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            The White Shop
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Packing List 101 The Must Have
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={cloth ? -1 : 1}
          onMouseEnter={handlecloth}
          onMouseLeave={clothhandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
          >
            Explore Jeans
          </Text>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            A Special Occation
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Proom clothes
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            At Work Style
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Vaccation Ready
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Bridal Shower Chic
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            Date Night Defined
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={cloth ? -1 : 1}
          onMouseEnter={handlecloth}
          onMouseLeave={clothhandle}
          bg="white"
          padding={"15px"}
          borderRight="1px solid #EDF2F7"
          borderTop={"none"}
        >
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
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

export default Product;
