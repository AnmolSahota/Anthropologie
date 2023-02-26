import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";
import { Link } from "react-router-dom";
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
            <Link to="/products/Jewelry">Accessories</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Clothing</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Home & Furniture</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Jewellry</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            paddingBottom="6px"
            onMouseLeave={shophandle}
            className={styles.text}
          >
            <Link to="/products/Jewelry">Petties</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Plus</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            paddingBottom="6px"
            onMouseLeave={shophandle}
            className={styles.text}
          >
            <Link to="/products/Jewelry">Shoes</Link>
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
            <Link to="/products/Jewelry">(Spring)Time to Celibrate</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Trending Citus Shades</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Spring 2023 Scuipture+Shape</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Trending Utility</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Trending the Bubble</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Denim Every way,Every Day</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            className={styles.text}
            paddingBottom="6px"
          >
            <Link to="/products/Jewelry">New Today Clothing & Accessories</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">
              10 Step To Spring-Fowered Your Home
            </Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            paddingBottom="6px"
            onMouseLeave={shophandle}
            className={styles.text}
          >
            <Link to="/products/Jewelry">Jerrele Guy For Anthropologie</Link>
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
            <Link to="/products/Jewelry">Frame</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Good American</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Joe Jeans</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Uncommon Jeans</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={shop ? -1 : 1}
            onMouseEnter={handleshop}
            onMouseLeave={shophandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Teva</Link>
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
