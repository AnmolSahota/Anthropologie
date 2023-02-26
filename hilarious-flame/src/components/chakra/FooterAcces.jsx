import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import styles from "../style/Navbarcss.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { pagecontext } from "../Context/Pagecontextprovider";
function FooterAcces(props) {
  let { change, setChange } = useContext(pagecontext);
  let { accces, handleAcces, acccesHandle } = props;

  return (
    <>
      <Grid
        gridTemplateColumns={"repeat(4,1fr)"}
        w={"95%"}
        m="auto"
        fontSize={"15px"}
        color="#26262C"
        position={"relative"}
        zIndex={accces ? -3 : 2}
        display={accces ? "none" : "grid"}
        onMouseEnter={handleAcces}
        onMouseLeave={acccesHandle}
      >
        <GridItem
          position={"relative"}
          zIndex={accces ? -1 : 1}
          onMouseEnter={handleAcces}
          onMouseLeave={acccesHandle}
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
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
          >
            Shop by Catogory
          </Text>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            <Link to="/products/Jewelry">Shop Alll Accessories</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">New!</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Top Rated</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Boots & Booties</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Bags & Small Accessories</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            paddingBottom="6px"
            onMouseLeave={acccesHandle}
            className={styles.text}
          >
            <Link to="/products/Jewelry">Belts</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            paddingBottom="6px"
            onMouseLeave={acccesHandle}
            className={styles.text}
          >
            <Link to="/products/Jewelry">Hair Accessories</Link>
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={accces ? -1 : 1}
          onMouseEnter={handleAcces}
          onMouseLeave={acccesHandle}
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
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
          ></Text>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
            paddingTop={"18px"}
          >
            <Link to="/products/Jewelry">Hats</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Jewelry</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Scarves</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Socks & Tights</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Sunglasses & Reading Glasses</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Travel & Tech</Link>
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={accces ? -1 : 1}
          onMouseEnter={handleAcces}
          onMouseLeave={acccesHandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
          >
            Explore Jewelry
          </Text>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            <Link to="/products/Jewelry">Neckless</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Earings</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Bracelets</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Rings</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Hoop Shop</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Manogram</Link>
          </GridItem>
        </GridItem>
        <GridItem
          position={"relative"}
          zIndex={accces ? -1 : 1}
          onMouseEnter={handleAcces}
          onMouseLeave={acccesHandle}
          bg="white"
          borderBottom="1px solid #EDF2F7"
          borderRight={"1px solid #EDF2F7"}
          padding={"15px"}
        >
          <Text
            fontWeight={500}
            paddingBottom={2}
            borderBottom="1px solid #A0AEC0"
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
          >
            Rainbow bright: Accessories
          </Text>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            paddingTop={"18px"}
            className={styles.text}
          >
            <Link to="/products/Jewelry">The Peri Edit</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Sings Bags</Link>
          </GridItem>
          <GridItem
            position={"relative"}
            zIndex={accces ? -1 : 1}
            onMouseEnter={handleAcces}
            onMouseLeave={acccesHandle}
            paddingBottom="6px"
            className={styles.text}
          >
            <Link to="/products/Jewelry">Birken stock</Link>
          </GridItem>
        </GridItem>
      </Grid>
    </>
  );
}

export default FooterAcces;
