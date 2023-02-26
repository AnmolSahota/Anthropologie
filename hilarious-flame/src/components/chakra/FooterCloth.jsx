import React from "react";
import { Box, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";
import { Link } from "react-router-dom";

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
            <Link to="/products/Shoes">Shop Alll Clothing</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">New!</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Top Rated</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">ACtiviear</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Biazer</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            paddingBottom="6px"
            onMouseLeave={clothhandle}
            className={styles.text}
          >
            <Link to="/products/Shoes">Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            paddingBottom="6px"
            onMouseLeave={clothhandle}
            className={styles.text}
          >
            <Link to="/products/Shoes">Gateway & Resourt Wear</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            paddingBottom="6px"
            onMouseLeave={clothhandle}
            className={styles.text}
          >
            <Link to="/products/Shoes">Intimate & Lingre</Link>
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
            <Link to="/products/Shoes">Kimonos</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Loungewear</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Pajama & Robes</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Pants</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Panties</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Skirts</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Swaters</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Tops & Tees</Link>
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
            <Link to="/products/Shoes">Trending Utilities</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Trending the Bubble</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Denim Every Day Every way</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">The Shirt Shop</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">The Linen Edit</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">The White Shop</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Packing List 101 The Must Have</Link>
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
            <Link to="/products/Shoes">A Special Occation</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Proom clothes</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">At Work Style</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Vaccation Ready</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Bridal Shower Chic</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={cloth ? -1 : 1}
            onMouseEnter={handlecloth}
            onMouseLeave={clothhandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Shoes">Date Night Defined</Link>
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
