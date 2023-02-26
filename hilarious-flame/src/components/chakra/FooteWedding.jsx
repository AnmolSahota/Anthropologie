import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";
import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/products/Dresses">Explore All Weddings</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Book an Appointment</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Shop All Weddings</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">New!</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Top Rated styles</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            paddingBottom="6px"
            onMouseLeave={weedHandle}
            className={styles.text}
          >
            <Link to="/products/Dresses">Bride</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            paddingBottom="6px"
            onMouseLeave={weedHandle}
            className={styles.text}
          >
            <Link to="/products/Dresses">Wedding Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            paddingBottom="6px"
            onMouseLeave={weedHandle}
            className={styles.text}
          >
            <Link to="/products/Dresses">Bridemaid Dresses</Link>
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
            <Link to="/products/Dresses">Mother of Bride</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Flower Girl Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Wedding Guest Dresses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Robers & Lingore</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Sunglasses & Reading Glasses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Travel & Tech</Link>
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
            <Link to="/products/Dresses">Spring Everleastin</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">New Spring Gow</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Bracelets</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Rings</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Hoop Shop</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Manogram</Link>
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
            <Link to="/products/Dresses">The Peri Edit</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Sings Bags</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={wedd ? -1 : 1}
            onMouseEnter={hanldwedd}
            onMouseLeave={weedHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Dresses">Birken stock</Link>
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
